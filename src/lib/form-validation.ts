export type FieldErrors = Record<string, string>;

export function trim(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function isValidEmail(email: string): boolean {
  // Practical RFC5322-lite — reject spaces and require one @ with domain.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function requireString(
  value: unknown,
  field: string,
  errors: FieldErrors,
  label = "This field",
): string {
  const v = trim(value);
  if (!v) errors[field] = `${label} is required.`;
  return v;
}

export function assertAllowed(
  value: string,
  allowed: readonly string[],
  field: string,
  errors: FieldErrors,
): void {
  if (!value) return;
  if (!allowed.includes(value)) {
    errors[field] = "Invalid option selected.";
  }
}

export type ApiOk = { ok: true };
export type ApiErr = { ok: false; errors: FieldErrors; message?: string };

export function jsonOk(): Response {
  return Response.json({ ok: true } satisfies ApiOk, { status: 200 });
}

export function jsonErr(
  errors: FieldErrors,
  status = 400,
  message?: string,
): Response {
  return Response.json(
    { ok: false, errors, message } satisfies ApiErr,
    { status },
  );
}
