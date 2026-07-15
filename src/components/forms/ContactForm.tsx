"use client";

import { useMemo, useState, type FormEvent } from "react";

import {
  FieldError,
  FieldLabel,
  FormBanner,
  SubmitButton,
  fieldControlClassName,
} from "@/components/forms/FormPrimitives";
import { IntelligenceIcon } from "@/components/ui/IntelligenceIcon";
import { contactCopy, contactTopicOptions } from "@/data/contact-options";
import { cn } from "@/lib/cn";
import type { FieldErrors } from "@/lib/form-validation";
import { isValidEmail, trim } from "@/lib/form-validation";

type ContactFormProps = {
  initialTopic?: string;
};

function IconInput({
  id,
  name,
  type = "text",
  placeholder,
  icon,
  value,
  onChange,
  required,
  autoComplete,
  error,
}: {
  id: string;
  name: string;
  type?: string;
  placeholder: string;
  icon: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  autoComplete?: string;
  error?: string;
}) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2">
        <IntelligenceIcon
          name={icon}
          size={18}
          strokeWidth={1.5}
          className="text-[var(--color-text-secondary)]"
        />
      </span>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldControlClassName, "pl-11")}
      />
    </div>
  );
}

export function ContactForm({ initialTopic = "" }: ContactFormProps) {
  const topicAllowed = useMemo(
    () => new Set(contactTopicOptions.map((o) => o.value)),
    [],
  );
  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState(
    topicAllowed.has(initialTopic) ? initialTopic : "",
  );
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
    if (!trim(topic)) next.topic = "What can we help you with? is required.";
    if (!trim(message)) next.message = "Message is required.";
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

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          workEmail,
          company,
          phone,
          topic,
          message,
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
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const { labels, placeholders, submit, privacy, success, failure } =
    contactCopy;

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <FieldLabel htmlFor="contact-fullName" required>
            {labels.fullName}
          </FieldLabel>
          <IconInput
            id="contact-fullName"
            name="fullName"
            placeholder={placeholders.fullName}
            icon="userRound"
            value={fullName}
            onChange={setFullName}
            autoComplete="name"
            error={errors.fullName}
          />
          <FieldError id="contact-fullName-error" message={errors.fullName} />
        </div>
        <div>
          <FieldLabel htmlFor="contact-workEmail" required>
            {labels.workEmail}
          </FieldLabel>
          <IconInput
            id="contact-workEmail"
            name="workEmail"
            type="email"
            placeholder={placeholders.workEmail}
            icon="mail"
            value={workEmail}
            onChange={setWorkEmail}
            autoComplete="email"
            error={errors.workEmail}
          />
          <FieldError id="contact-workEmail-error" message={errors.workEmail} />
        </div>
        <div>
          <FieldLabel htmlFor="contact-company">{labels.company}</FieldLabel>
          <IconInput
            id="contact-company"
            name="company"
            placeholder={placeholders.company}
            icon="building"
            value={company}
            onChange={setCompany}
            autoComplete="organization"
          />
        </div>
        <div>
          <FieldLabel htmlFor="contact-phone">{labels.phone}</FieldLabel>
          <IconInput
            id="contact-phone"
            name="phone"
            type="tel"
            placeholder={placeholders.phone}
            icon="phone"
            value={phone}
            onChange={setPhone}
            autoComplete="tel"
          />
        </div>
      </div>

      <div>
        <FieldLabel htmlFor="contact-topic" required>
          {labels.topic}
        </FieldLabel>
        <div className="relative">
          <select
            id="contact-topic"
            name="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            aria-invalid={errors.topic ? true : undefined}
            aria-describedby={errors.topic ? "contact-topic-error" : undefined}
            className={cn(fieldControlClassName, "appearance-none pr-10")}
          >
            <option value="">{placeholders.topic}</option>
            {contactTopicOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <span
            className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]"
            aria-hidden="true"
          >
            ▾
          </span>
        </div>
        <FieldError id="contact-topic-error" message={errors.topic} />
      </div>

      <div>
        <FieldLabel htmlFor="contact-message" required>
          {labels.message}
        </FieldLabel>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder={placeholders.message}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={cn(fieldControlClassName, "min-h-[140px] resize-y")}
        />
        <FieldError id="contact-message-error" message={errors.message} />
      </div>

      {status === "success" ? (
        <FormBanner tone="success">{success}</FormBanner>
      ) : null}
      {status === "error" ? (
        <FormBanner tone="error">{failure}</FormBanner>
      ) : null}

      <SubmitButton
        busy={status === "loading"}
        idleLabel={submit}
        className="w-full"
      />

      <p className="flex items-center justify-center gap-2 text-center text-sm text-[var(--color-text-secondary)]">
        <IntelligenceIcon name="shieldCheck" size={16} strokeWidth={1.5} />
        {privacy}
      </p>
    </form>
  );
}
