import { Resend } from "resend";

import type { AuditPayload } from "@/lib/validate-audit";
import type { ContactPayload } from "@/lib/validate-contact";

export type SendEmailResult =
  | { ok: true; id?: string }
  | { ok: false; error: string };

function getResendConfig() {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.FORM_TO_EMAIL?.trim() || "cjudeandy@gmail.com";
  const from =
    process.env.RESEND_FROM_EMAIL?.trim() ||
    "QIERA <onboarding@resend.dev>";

  return { apiKey, to, from };
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function rowsToHtml(rows: Array<[string, string]>): string {
  return rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px 6px 0;vertical-align:top;color:#64748b;white-space:nowrap;"><strong>${escapeHtml(label)}</strong></td><td style="padding:6px 0;">${escapeHtml(value || "—")}</td></tr>`,
    )
    .join("");
}

function rowsToText(rows: Array<[string, string]>): string {
  return rows.map(([label, value]) => `${label}: ${value || "—"}`).join("\n");
}

async function sendViaResend(input: {
  subject: string;
  replyTo: string;
  rows: Array<[string, string]>;
}): Promise<SendEmailResult> {
  const { apiKey, to, from } = getResendConfig();

  if (!apiKey) {
    return {
      ok: false,
      error: "Email is not configured (missing RESEND_API_KEY).",
    };
  }

  const resend = new Resend(apiKey);
  const html = `
    <div style="font-family:ui-sans-serif,system-ui,sans-serif;font-size:14px;line-height:1.5;color:#0f172a;">
      <p style="margin:0 0 16px;">New QIERA form submission.</p>
      <table style="border-collapse:collapse;">${rowsToHtml(input.rows)}</table>
    </div>
  `;

  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: input.replyTo,
    subject: input.subject,
    html,
    text: rowsToText(input.rows),
  });

  if (error) {
    return { ok: false, error: error.message || "Failed to send email." };
  }

  return { ok: true, id: data?.id };
}

export async function sendContactEmail(
  data: ContactPayload,
): Promise<SendEmailResult> {
  return sendViaResend({
    subject: `[QIERA Contact] ${data.topic} — ${data.fullName}`,
    replyTo: data.workEmail,
    rows: [
      ["Full name", data.fullName],
      ["Work email", data.workEmail],
      ["Company", data.company],
      ["Phone", data.phone],
      ["Topic", data.topic],
      ["Message", data.message],
    ],
  });
}

export async function sendAuditEmail(
  data: AuditPayload,
): Promise<SendEmailResult> {
  return sendViaResend({
    subject: `[QIERA Audit] ${data.companyName} — ${data.fullName}`,
    replyTo: data.workEmail,
    rows: [
      ["Company", data.companyName],
      ["Website", data.websiteUrl],
      ["Industry", data.industry],
      ["Primary goal", data.primaryGoal],
      ["Secondary goals", data.secondaryGoals.join(", ")],
      ["Biggest challenge", data.biggestChallenge],
      ["Challenge notes", data.challengeNotes],
      ["Monthly revenue", data.monthlyRevenue],
      ["Employees", data.employees],
      ["Role", data.role],
      ["Full name", data.fullName],
      ["Work email", data.workEmail],
    ],
  });
}
