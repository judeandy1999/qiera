import { sendAuditEmail } from "@/lib/email/resend";
import { jsonErr, jsonOk } from "@/lib/form-validation";
import { validateAuditPayload } from "@/lib/validate-audit";

/**
 * Intelligence Audit form handler — validates payload and emails via Resend.
 */
export async function POST(request: Request) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return jsonErr({ _form: "Invalid JSON body." });
  }

  const { data, errors } = validateAuditPayload(raw);
  if (!data) return jsonErr(errors);

  const sent = await sendAuditEmail(data);
  if (!sent.ok) {
    console.error("[audit] email send failed:", sent.error);
    return jsonErr(
      { _form: "Something went wrong. Please try again." },
      502,
      "Delivery failed",
    );
  }

  return jsonOk();
}
