"use client";

import { useState, type FormEvent } from "react";

import {
  FieldError,
  FieldLabel,
  FormBanner,
  SubmitButton,
  fieldControlClassName,
} from "@/components/forms/FormPrimitives";
import { trackConsultationSubmit } from "@/lib/analytics";
import type { FieldErrors } from "@/lib/form-validation";
import { isValidEmail, trim } from "@/lib/form-validation";

type ServiceConsultationFormProps = {
  topic: "growth-consulting" | "fractional-cmo";
  submitLabel: string;
};

export function ServiceConsultationForm({
  topic,
  submitLabel,
}: ServiceConsultationFormProps) {
  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [storeUrl, setStoreUrl] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  function validateClient(): FieldErrors {
    const next: FieldErrors = {};
    if (!trim(fullName)) next.fullName = "Full Name is required.";
    if (!trim(workEmail)) next.workEmail = "Work Email is required.";
    else if (!isValidEmail(trim(workEmail))) {
      next.workEmail = "Enter a valid email address.";
    }
    if (!trim(message)) {
      next.message = "Tell us what you'd like clarity on first.";
    }
    return next;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const clientErrors = validateClient();
    if (Object.keys(clientErrors).length) {
      setErrors(clientErrors);
      setStatus("idle");
      return;
    }

    setErrors({});
    setStatus("loading");

    const storeLine = trim(storeUrl)
      ? `Store URL: ${trim(storeUrl)}\n\n`
      : "";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          workEmail,
          company: trim(storeUrl),
          phone: "",
          topic,
          message: `${storeLine}${trim(message)}`,
        }),
      });
      const json = (await res.json()) as {
        ok: boolean;
        errors?: FieldErrors;
      };
      if (!res.ok || !json.ok) {
        setErrors(json.errors ?? {});
        setStatus("error");
        return;
      }
      trackConsultationSubmit({
        topic,
        page_path: window.location.pathname,
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="consult-fullName" required>
            Full Name
          </FieldLabel>
          <input
            id="consult-fullName"
            name="fullName"
            autoComplete="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={fieldControlClassName}
            aria-invalid={errors.fullName ? true : undefined}
          />
          <FieldError id="consult-fullName-error" message={errors.fullName} />
        </div>
        <div>
          <FieldLabel htmlFor="consult-workEmail" required>
            Work Email
          </FieldLabel>
          <input
            id="consult-workEmail"
            name="workEmail"
            type="email"
            autoComplete="email"
            value={workEmail}
            onChange={(e) => setWorkEmail(e.target.value)}
            className={fieldControlClassName}
            aria-invalid={errors.workEmail ? true : undefined}
          />
          <FieldError id="consult-workEmail-error" message={errors.workEmail} />
        </div>
      </div>
      <div>
        <FieldLabel htmlFor="consult-storeUrl">Store URL</FieldLabel>
        <input
          id="consult-storeUrl"
          name="storeUrl"
          type="url"
          placeholder="https://yourstore.com"
          value={storeUrl}
          onChange={(e) => setStoreUrl(e.target.value)}
          className={fieldControlClassName}
        />
      </div>
      <div>
        <FieldLabel htmlFor="consult-message" required>
          What would you like clarity on first?
        </FieldLabel>
        <textarea
          id="consult-message"
          name="message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={fieldControlClassName}
          aria-invalid={errors.message ? true : undefined}
        />
        <FieldError id="consult-message-error" message={errors.message} />
      </div>

      {status === "success" ? (
        <FormBanner tone="success">
          Thanks — we received your request. We&apos;ll follow up shortly.
        </FormBanner>
      ) : null}
      {status === "error" ? (
        <FormBanner tone="error">
          Something went wrong. Please try again or use the full contact form.
        </FormBanner>
      ) : null}

      <SubmitButton
        busy={status === "loading"}
        idleLabel={submitLabel}
        className="w-full sm:w-auto"
      />
    </form>
  );
}
