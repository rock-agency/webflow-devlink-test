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
import styles from "./SubmitForm.module.css";

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
      <Section tag="section" className={styles.pageSection}>
        <Block tag="div" className={styles.container}>
          <FormForm
            data-name="Submissions Form"
            id="submissions-form"
            onSubmit={handleSubmit}
            className={styles.form}
          >
            <Block tag="div" className={styles.field}>
              <FormTextInput
                className={styles.input}
                name="name"
                placeholder="Name"
                required
                type="text"
                maxLength={256}
              />
            </Block>
            <Block tag="div" className={styles.field}>
              <FormTextInput
                className={styles.input}
                name="email"
                placeholder="Email"
                required
                type="email"
                maxLength={256}
              />
            </Block>
            <Block tag="div" className={styles.field}>
              <FormTextarea
                className={`${styles.input} ${styles.textarea}`}
                name="message"
                placeholder="Message (optional)"
              />
            </Block>
            <FormButton
              type="submit"
              value="Submit"
              className={`${styles.button} w-button`}
            />
          </FormForm>
          {submitStatus === "success" && (
            <Block tag="div" className={`${styles.successMessage} w-form-done`}>
              Thank you. Your submission has been saved.
            </Block>
          )}
          {submitStatus === "error" && (
            <Block tag="div" className={`${styles.errorMessage} w-form-fail`}>
              Something went wrong. Please check your entries and try again.
            </Block>
          )}
        </Block>
      </Section>
    </>
  );
}
