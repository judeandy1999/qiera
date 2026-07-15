import {
  assertAllowed,
  isValidEmail,
  requireString,
  trim,
  type FieldErrors,
} from "@/lib/form-validation";
import { contactTopicValues } from "@/data/contact-options";

export type ContactPayload = {
  fullName: string;
  workEmail: string;
  company: string;
  phone: string;
  topic: string;
  message: string;
};

export function validateContactPayload(raw: unknown): {
  data?: ContactPayload;
  errors: FieldErrors;
} {
  const errors: FieldErrors = {};
  if (!raw || typeof raw !== "object") {
    return { errors: { _form: "Invalid request body." } };
  }
  const body = raw as Record<string, unknown>;

  const fullName = requireString(body.fullName, "fullName", errors, "Full Name");
  const workEmail = requireString(
    body.workEmail,
    "workEmail",
    errors,
    "Work Email",
  );
  if (workEmail && !isValidEmail(workEmail)) {
    errors.workEmail = "Enter a valid email address.";
  }
  const topic = requireString(
    body.topic,
    "topic",
    errors,
    "What can we help you with?",
  );
  assertAllowed(topic, contactTopicValues, "topic", errors);
  const message = requireString(body.message, "message", errors, "Message");

  const company = trim(body.company);
  const phone = trim(body.phone);

  if (Object.keys(errors).length) return { errors };

  return {
    data: { fullName, workEmail, company, phone, topic, message },
    errors,
  };
}
