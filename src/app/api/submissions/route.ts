import { NextRequest, NextResponse } from "next/server";

const AIRTABLE_API = "https://api.airtable.com/v0";

function getAirtableConfig() {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME;
  if (!apiKey || !baseId || !tableName) {
    return null;
  }
  return { apiKey, baseId, tableName };
}

export async function GET() {
  const config = getAirtableConfig();
  if (!config) {
    return NextResponse.json(
      { error: "Airtable is not configured" },
      { status: 503 }
    );
  }

  const { apiKey, baseId, tableName } = config;
  const url = `${AIRTABLE_API}/${baseId}/${encodeURIComponent(tableName)}?maxRecords=100`;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Airtable GET error:", res.status, err);
      let message = "Failed to fetch submissions";
      try {
        const errJson = JSON.parse(err) as { error?: { message?: string }; message?: string };
        const detail = errJson.error?.message ?? errJson.message ?? err;
        if (typeof detail === "string" && detail.length < 200) message += `: ${detail}`;
      } catch {
        if (err.length < 200) message += `: ${err}`;
      }
      return NextResponse.json({ error: message }, { status: 502 });
    }

    const data = (await res.json()) as { records?: unknown[] };
    return NextResponse.json({ records: data.records ?? [] });
  } catch (e) {
    console.error("Airtable fetch error:", e);
    return NextResponse.json(
      { error: "Failed to fetch submissions" },
      { status: 502 }
    );
  }
}

export async function POST(request: NextRequest) {
  const config = getAirtableConfig();
  if (!config) {
    return NextResponse.json(
      { error: "Airtable is not configured" },
      { status: 503 }
    );
  }

  let body: { name?: string; email?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required" },
      { status: 400 }
    );
  }

  const { apiKey, baseId, tableName } = config;
  const url = `${AIRTABLE_API}/${baseId}/${encodeURIComponent(tableName)}`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          Name: name,
          Email: email,
          Message: message || undefined,
        },
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Airtable POST error:", res.status, err);
      return NextResponse.json(
        { error: "Failed to save submission" },
        { status: 502 }
      );
    }

    const data = await res.json();
    return NextResponse.json({ success: true, record: data });
  } catch (e) {
    console.error("Airtable create error:", e);
    return NextResponse.json(
      { error: "Failed to save submission" },
      { status: 502 }
    );
  }
}
