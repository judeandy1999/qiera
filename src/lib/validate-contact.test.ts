import { describe, expect, it } from "vitest";

import { validateContactPayload } from "@/lib/validate-contact";

describe("validateContactPayload", () => {
  it("accepts a valid partnership payload", () => {
    const { data, errors } = validateContactPayload({
      fullName: "Ada Lovelace",
      workEmail: "ada@example.com",
      company: "Analytical Engines",
      phone: "302-319-1312",
      topic: "partnership",
      message: "Interested in partnering.",
    });
    expect(errors).toEqual({});
    expect(data?.topic).toBe("partnership");
    expect(data?.fullName).toBe("Ada Lovelace");
  });

  it("rejects missing required fields and bad email", () => {
    const { data, errors } = validateContactPayload({
      fullName: "",
      workEmail: "not-an-email",
      topic: "",
      message: "",
    });
    expect(data).toBeUndefined();
    expect(errors.fullName).toBeTruthy();
    expect(errors.workEmail).toMatch(/valid email/i);
    expect(errors.topic).toBeTruthy();
    expect(errors.message).toBeTruthy();
  });

  it("rejects unknown topic values", () => {
    const { errors } = validateContactPayload({
      fullName: "Test",
      workEmail: "t@example.com",
      topic: "spam",
      message: "Hi",
    });
    expect(errors.topic).toMatch(/invalid/i);
  });
});
