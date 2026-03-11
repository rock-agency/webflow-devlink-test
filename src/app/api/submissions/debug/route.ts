import { NextResponse } from "next/server";

/**
 * Debug endpoint to verify Airtable env vars are loaded.
 * Open: http://localhost:3000/app/api/submissions/debug
 * Do not use in production or expose publicly.
 */
export async function GET() {
  const apiKey = process.env.AIRTABLE_API_KEY ?? "";
  const baseId = process.env.AIRTABLE_BASE_ID ?? "";
  const tableName = process.env.AIRTABLE_TABLE_NAME ?? "";

  const apiKeySet = apiKey.length > 0;
  const baseIdSet = baseId.length > 0;
  const tableNameSet = tableName.length > 0;

  // Check for common mistakes: quoted values or spaces
  const apiKeyQuoted = apiKey.startsWith('"') || apiKey.startsWith("'");
  const baseIdQuoted = baseId.startsWith('"') || baseId.startsWith("'");
  const tableNameQuoted = tableName.startsWith('"') || tableName.startsWith("'");

  return NextResponse.json({
    apiKeySet,
    baseIdSet,
    tableNameSet,
    allSet: apiKeySet && baseIdSet && tableNameSet,
    // Lengths help spot trailing spaces or quotes (don't expose actual values)
    apiKeyLength: apiKey.length,
    baseIdLength: baseId.length,
    tableNameLength: tableName.length,
    possibleQuotes: apiKeyQuoted || baseIdQuoted || tableNameQuoted,
    baseIdFirstChars: baseIdSet ? baseId.slice(0, 3) + "..." : "(empty)",
    tableNameFirstChars: tableNameSet ? tableName.slice(0, 3) + "..." : "(empty)",
  });
}
