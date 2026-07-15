import {
  assertAllowed,
  isValidEmail,
  requireString,
  trim,
  type FieldErrors,
} from "@/lib/form-validation";
import {
  auditChallengeValues,
  auditEmployeeValues,
  auditIndustryValues,
  auditPrimaryGoalValues,
  auditRevenueValues,
  auditRoleValues,
  auditSecondaryGoals,
} from "@/data/audit-options";

export type AuditPayload = {
  companyName: string;
  websiteUrl: string;
  industry: string;
  primaryGoal: string;
  secondaryGoals: string[];
  biggestChallenge: string;
  challengeNotes: string;
  monthlyRevenue: string;
  employees: string;
  role: string;
  fullName: string;
  workEmail: string;
};

export function validateAuditPayload(raw: unknown): {
  data?: AuditPayload;
  errors: FieldErrors;
} {
  const errors: FieldErrors = {};
  if (!raw || typeof raw !== "object") {
    return { errors: { _form: "Invalid request body." } };
  }
  const body = raw as Record<string, unknown>;

  const companyName = requireString(
    body.companyName,
    "companyName",
    errors,
    "Company Name",
  );
  const websiteUrl = requireString(
    body.websiteUrl,
    "websiteUrl",
    errors,
    "Website URL",
  );
  const industry = requireString(
    body.industry,
    "industry",
    errors,
    "Industry / Category",
  );
  assertAllowed(industry, auditIndustryValues, "industry", errors);

  const primaryGoal = requireString(
    body.primaryGoal,
    "primaryGoal",
    errors,
    "Primary growth priority",
  );
  assertAllowed(primaryGoal, auditPrimaryGoalValues, "primaryGoal", errors);

  const secondaryGoals = Array.isArray(body.secondaryGoals)
    ? body.secondaryGoals.map((g) => String(g)).filter(Boolean)
    : [];
  for (const g of secondaryGoals) {
    if (!(auditSecondaryGoals as readonly string[]).includes(g)) {
      errors.secondaryGoals = "Invalid secondary goal selected.";
      break;
    }
  }

  const biggestChallenge = requireString(
    body.biggestChallenge,
    "biggestChallenge",
    errors,
    "Biggest challenge",
  );
  assertAllowed(
    biggestChallenge,
    auditChallengeValues,
    "biggestChallenge",
    errors,
  );

  const challengeNotes = trim(body.challengeNotes);
  if (challengeNotes.length > 500) {
    errors.challengeNotes = "Notes must be 500 characters or fewer.";
  }

  const monthlyRevenue = trim(body.monthlyRevenue);
  assertAllowed(monthlyRevenue, auditRevenueValues, "monthlyRevenue", errors);
  const employees = trim(body.employees);
  assertAllowed(employees, auditEmployeeValues, "employees", errors);
  const role = trim(body.role);
  assertAllowed(role, auditRoleValues, "role", errors);

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

  if (Object.keys(errors).length) return { errors };

  return {
    data: {
      companyName,
      websiteUrl,
      industry,
      primaryGoal,
      secondaryGoals,
      biggestChallenge,
      challengeNotes,
      monthlyRevenue,
      employees,
      role,
      fullName,
      workEmail,
    },
    errors,
  };
}
