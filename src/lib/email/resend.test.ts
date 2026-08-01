import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";

const sendMock = vi.fn();

vi.mock("resend", () => ({
  Resend: class {
    emails = { send: sendMock };
  },
}));

describe("sendContactEmail / sendAuditEmail", () => {
  beforeEach(() => {
    sendMock.mockReset();
    process.env.RESEND_API_KEY = "re_test_key";
    process.env.FORM_TO_EMAIL = "admin@qiera.io";
    process.env.RESEND_FROM_EMAIL = "QIERA <no-reply@qiera.io>";
  });

  afterEach(() => {
    vi.resetModules();
    delete process.env.RESEND_API_KEY;
  });

  it("sends contact payload via Resend", async () => {
    sendMock.mockResolvedValue({ data: { id: "email_1" }, error: null });
    const { sendContactEmail } = await import("@/lib/email/resend");

    const result = await sendContactEmail({
      fullName: "Ada Lovelace",
      workEmail: "ada@example.com",
      company: "Analytical Engines",
      phone: "",
      topic: "general",
      message: "Hello",
    });

    expect(result.ok).toBe(true);
    expect(sendMock).toHaveBeenCalledOnce();
    const arg = sendMock.mock.calls[0][0];
    expect(arg.to).toEqual(["admin@qiera.io"]);
    expect(arg.replyTo).toBe("ada@example.com");
    expect(arg.subject).toContain("Contact");
  });

  it("fails clearly when API key is missing", async () => {
    delete process.env.RESEND_API_KEY;
    const { sendContactEmail } = await import("@/lib/email/resend");

    const result = await sendContactEmail({
      fullName: "Ada Lovelace",
      workEmail: "ada@example.com",
      company: "",
      phone: "",
      topic: "general",
      message: "Hello",
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error).toMatch(/RESEND_API_KEY/i);
    }
    expect(sendMock).not.toHaveBeenCalled();
  });
});
