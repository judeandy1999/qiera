import { sendContactEmail } from "@/lib/email/resend";
import { jsonErr, jsonOk } from "@/lib/form-validation";
import { validateContactPayload } from "@/lib/validate-contact";

/**
 * Contact form handler — validates payload and emails via Resend.
 */
export async function POST(request: Request) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return jsonErr({ _form: "Invalid JSON body." });
  }

  const { data, errors } = validateContactPayload(raw);
  if (!data) return jsonErr(errors);

  const sent = await sendContactEmail(data);
  if (!sent.ok) {
    console.error("[contact] email send failed:", sent.error);
    return jsonErr(
      { _form: "Something went wrong. Please try again." },
      502,
      "Delivery failed",
    );
  }

  return jsonOk();
}
