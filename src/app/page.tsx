"use client";

import React, { useEffect, useState, useCallback } from "react";
import {
  Section,
  Block,
  FormForm,
  FormTextInput,
  FormTextarea,
  FormButton,
} from "@/devlink/_Builtin";

type AirtableRecord = {
  id: string;
  createdTime?: string;
  fields: {
    Name?: string;
    Email?: string;
    Message?: string;
  };
};

export default function SubmissionsPage() {
  const [records, setRecords] = useState<AirtableRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const getApiBase = () =>
    typeof window !== "undefined" ? `${window.location.origin}/app` : "";

  const fetchSubmissions = useCallback(async () => {
    try {
      setError(null);
      const res = await fetch(`${getApiBase()}/api/submissions`, { cache: "no-store" });
      const data = (await res.json()) as { records?: AirtableRecord[]; error?: string };
      if (!res.ok) {
        setError(data.error ?? "Could not load submissions.");
        setRecords([]);
        return;
      }
      setRecords(data.records ?? []);
    } catch (e) {
      setError("Could not load submissions.");
      setRecords([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("idle");
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value?.trim() ?? "";
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value?.trim() ?? "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value?.trim() ?? "";

    if (!name || !email) return;

    try {
      const res = await fetch(`${getApiBase()}/api/submissions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "Failed to submit");
      }

      setSubmitStatus("success");
      form.reset();
      await fetchSubmissions();
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <Section
      tag="section"
      style={{
        minHeight: "100vh",
        padding: "2rem 0",
      }}
    >
      <Block tag="div" className="container" style={{ maxWidth: "720px", margin: "0 auto" }}>
        <Block
          tag="h1"
          className="margin-bottom-24px"
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: "1.5rem",
          }}
        >
          Submissions (Airtable MVP)
        </Block>
        <Block tag="p" style={{ marginBottom: "1.5rem", color: "var(--foreground)" }}>
          Add rows in Airtable or submit the form below; the list updates from the same table.
        </Block>

        <Block tag="h2" style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>
          Add a submission
        </Block>
        <FormForm
          data-name="Submissions Form"
          id="submissions-form"
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}
        >
          <Block tag="div">
            <FormTextInput
              name="name"
              placeholder="Name"
              required
              type="text"
              maxLength={256}
              style={{ width: "100%", padding: "0.5rem" }}
            />
          </Block>
          <Block tag="div">
            <FormTextInput
              name="email"
              placeholder="Email"
              required
              type="email"
              maxLength={256}
              style={{ width: "100%", padding: "0.5rem" }}
            />
          </Block>
          <Block tag="div">
            <FormTextarea
              name="message"
              placeholder="Message (optional)"
              style={{ width: "100%", minHeight: "80px", padding: "0.5rem" }}
            />
          </Block>
          <FormButton type="submit" value="Submit" className="w-button" />
        </FormForm>
        {submitStatus === "success" && (
          <Block
            tag="div"
            className="w-form-done"
            style={{ marginBottom: "1.5rem", padding: "0.75rem", background: "#d1fae5", borderRadius: "4px" }}
          >
            Thank you. Your submission has been saved. See it in the list below.
          </Block>
        )}
        {submitStatus === "error" && (
          <Block
            tag="div"
            className="w-form-fail"
            style={{ marginBottom: "1.5rem", padding: "0.75rem", background: "#fee2e2", borderRadius: "4px" }}
          >
            Something went wrong. Please check your entries and try again.
          </Block>
        )}

        <Block tag="h2" style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>
          Submissions list
        </Block>
        {loading && (
          <Block tag="p" style={{ color: "var(--foreground)" }}>
            Loading…
          </Block>
        )}
        {error && (
          <Block tag="p" style={{ color: "#b91c1c", marginBottom: "1rem" }}>
            {error}
          </Block>
        )}
        {!loading && !error && records.length === 0 && (
          <Block tag="p" style={{ color: "var(--foreground)" }}>
            No submissions yet. Add one above or add rows in your Airtable table.
          </Block>
        )}
        {!loading && records.length > 0 && (
          <Block tag="ul" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {records.map((rec) => (
              <Block
                tag="li"
                key={rec.id}
                style={{
                  padding: "1rem",
                  marginBottom: "0.5rem",
                  border: "1px solid #e5e7eb",
                  borderRadius: "4px",
                  background: "#f9fafb",
                }}
              >
                <Block tag="div" style={{ fontWeight: 600 }}>
                  {rec.fields?.Name ?? "—"}
                </Block>
                <Block tag="div" style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                  {rec.fields?.Email ?? "—"}
                </Block>
                {rec.fields?.Message && (
                  <Block tag="div" style={{ marginTop: "0.5rem" }}>
                    {rec.fields.Message}
                  </Block>
                )}
              </Block>
            ))}
          </Block>
        )}
      </Block>
    </Section>
  );
}
