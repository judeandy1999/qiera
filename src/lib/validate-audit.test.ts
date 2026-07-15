import { describe, expect, it } from "vitest";

import { validateAuditPayload } from "@/lib/validate-audit";

const validBase = {
  companyName: "Acme Co",
  websiteUrl: "https://acme.example",
  industry: "fashion",
  primaryGoal: "increase-revenue",
  secondaryGoals: ["Improve Conversion"],
  biggestChallenge: "conversion-friction",
  challengeNotes: "Needs help with checkout.",
  monthlyRevenue: "250k-1m",
  employees: "11-50",
  role: "founder-ceo",
  fullName: "Test User",
  workEmail: "test@acme.example",
};

describe("validateAuditPayload", () => {
  it("accepts a complete valid payload", () => {
    const { data, errors } = validateAuditPayload(validBase);
    expect(errors).toEqual({});
    expect(data?.companyName).toBe("Acme Co");
    expect(data?.secondaryGoals).toEqual(["Improve Conversion"]);
  });

  it("allows empty optional company-detail selects", () => {
    const { data, errors } = validateAuditPayload({
      ...validBase,
      monthlyRevenue: "",
      employees: "",
      role: "",
      secondaryGoals: [],
      challengeNotes: "",
    });
    expect(errors).toEqual({});
    expect(data?.monthlyRevenue).toBe("");
  });

  it("rejects invalid secondary goals and long notes", () => {
    const { errors } = validateAuditPayload({
      ...validBase,
      secondaryGoals: ["Not A Real Goal"],
      challengeNotes: "x".repeat(501),
    });
    expect(errors.secondaryGoals).toBeTruthy();
    expect(errors.challengeNotes).toMatch(/500/);
  });
});
