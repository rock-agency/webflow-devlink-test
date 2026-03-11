"use client";

import React, { useState } from "react";
import {
  Section,
  Block,
  FormForm,
  FormTextInput,
  FormTextarea,
  FormButton,
} from "@/devlink/_Builtin";
import { PagesHeader } from "@/devlink/PagesHeader";

function getApiBase() {
  if (typeof window === "undefined") return "";
  return `${window.location.origin}/app`;
}

export default function SubmitPage() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

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
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <>
      <PagesHeader title="Submit" />
      <Section tag="section" style={{ padding: "2rem 0" }}>
        <Block tag="div" className="container" style={{ maxWidth: "720px", margin: "0 auto" }}>
          <FormForm
            data-name="Submissions Form"
            id="submissions-form"
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}
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
              style={{ padding: "0.75rem", background: "#d1fae5", borderRadius: "4px" }}
            >
              Thank you. Your submission has been saved.
            </Block>
          )}
          {submitStatus === "error" && (
            <Block
              tag="div"
              className="w-form-fail"
              style={{ padding: "0.75rem", background: "#fee2e2", borderRadius: "4px" }}
            >
              Something went wrong. Please check your entries and try again.
            </Block>
          )}
        </Block>
      </Section>
    </>
  );
}
