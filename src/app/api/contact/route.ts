import { jsonErr, jsonOk } from "@/lib/form-validation";
import { validateContactPayload } from "@/lib/validate-contact";

/**
 * Contact form handler — validates and accepts the typed payload.
 * Pending production email/CRM integration — does not send externally.
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

  // TODO(production): forward `data` to email/CRM. Do not claim delivery.
  void data;

  return jsonOk();
}
