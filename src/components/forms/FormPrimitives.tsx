import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export const fieldControlClassName = cn(
  "w-full rounded-xl border border-[var(--color-border)] bg-[rgba(255,255,255,0.04)] px-3.5 py-3 text-base text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]",
  "disabled:cursor-not-allowed disabled:opacity-60",
);

export function FieldLabel({
  htmlFor,
  required,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-sm font-normal leading-[1.4] text-[var(--color-text-primary)]"
    >
      {children}
      {required ? (
        <span className="ml-0.5 text-[var(--color-danger)]" aria-hidden="true">
          *
        </span>
      ) : null}
    </label>
  );
}

export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-sm text-[var(--color-danger)]">
      {message}
    </p>
  );
}

export function FormBanner({
  tone,
  children,
}: {
  tone: "success" | "error";
  children: ReactNode;
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "rounded-xl border px-4 py-3 text-sm leading-relaxed",
        tone === "success" &&
          "border-[var(--color-positive)]/40 bg-[var(--color-positive-tint)] text-[var(--color-positive)]",
        tone === "error" &&
          "border-[var(--color-danger)]/40 bg-[rgba(239,68,68,0.1)] text-[var(--color-danger)]",
      )}
    >
      {children}
    </div>
  );
}

export function SubmitButton({
  busy,
  idleLabel,
  busyLabel = "Sending…",
  className,
}: {
  busy: boolean;
  idleLabel: string;
  busyLabel?: string;
  className?: string;
}) {
  return (
    <button
      type="submit"
      disabled={busy}
      aria-busy={busy}
      className={cn(
        "inline-flex min-h-[48px] items-center justify-center gap-1 rounded-[var(--radius-button)] bg-[var(--color-accent)] px-6 py-3 text-[20px] font-semibold leading-[1.2] text-[var(--color-text-primary)] transition-opacity",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-shell)]",
        "disabled:cursor-not-allowed disabled:opacity-70",
        className,
      )}
    >
      {busy ? busyLabel : idleLabel}
      {!busy ? <span aria-hidden="true">→</span> : null}
    </button>
  );
}
