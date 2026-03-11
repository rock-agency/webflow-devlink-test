"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Section, Block } from "@/devlink/_Builtin";
import { PagesHeader } from "@/devlink/PagesHeader";
import { JobsSection } from "@/devlink/JobsSection";

type AirtableRecord = {
  id: string;
  createdTime?: string;
  fields: {
    Name?: string;
    Email?: string;
    Message?: string;
  };
};

function formatDate(createdTime?: string) {
  if (!createdTime) return "—";
  try {
    return new Date(createdTime).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return "—";
  }
}

function recordsToJobs(records: AirtableRecord[]) {
  return records.map((rec) => ({
    id: rec.id,
    text1: rec.fields?.Name ?? "—",
    text2: rec.fields?.Message ?? "",
    text3: formatDate(rec.createdTime),
    text4: rec.fields?.Name ?? "—",
    text5: rec.fields?.Email ?? "—",
    text6: "",
    text7: rec.fields?.Message ?? "",
    text8: "",
  }));
}

function getApiBase() {
  if (typeof window === "undefined") return "";
  return `${window.location.origin}/app`;
}

export default function SubmissionsPage() {
  const [records, setRecords] = useState<AirtableRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSubmissions = useCallback(async () => {
    try {
      setError(null);
      const url = `${getApiBase()}/api/submissions`;
      const res = await fetch(url, { cache: "no-store" });
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

  const jobs = recordsToJobs(records);

  return (
    <>
      <style>{`
        @keyframes submissions-spin {
          to { transform: rotate(360deg); }
        }
        .submissions-loader {
          width: 40px;
          height: 40px;
          border: 3px solid var(--foreground, #e5e7eb);
          border-top-color: var(--background, #3b82f6);
          border-radius: 50%;
          animation: submissions-spin 0.8s linear infinite;
        }
      `}</style>
      <PagesHeader title="Submissions" />
      {loading && (
        <Section tag="section" style={{ padding: "3rem 0", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className="submissions-loader" aria-label="Loading submissions" />
        </Section>
      )}
      {!loading && error && (
        <Section tag="section">
          <Block tag="div" className="container">
            <Block tag="p" style={{ color: "#b91c1c" }}>
              {error}
            </Block>
          </Block>
        </Section>
      )}
      {!loading && !error && records.length > 0 && <JobsSection jobs={jobs} />}
      {!loading && !error && records.length === 0 && (
        <Section tag="section">
          <Block tag="div" className="container">
            <Block tag="p" style={{ color: "var(--foreground)", textAlign: "center", padding: "2rem 0" }}>
              No submissions yet.
            </Block>
          </Block>
        </Section>
      )}
    </>
  );
}
