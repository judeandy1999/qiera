import type { SelectOption } from "@/data/contact-options";

/**
 * Audit select lists — checkbox goals CONFIRMED from PNG; selects ASSUMED
 * (collapsed in Start Intelligence Audit.png). Flagged in FORM-05 SUMMARY.
 */

export const auditSecondaryGoals = [
  "Increase Revenue",
  "Improve Conversion",
  "Boost Organic Visibility",
  "Improve Retention",
  "Build Brand Authority",
  "Other",
] as const;

/** ASSUMED */
export const auditIndustryOptions: SelectOption[] = [
  { value: "fashion", label: "Fashion & Apparel" },
  { value: "beauty", label: "Beauty & Personal Care" },
  { value: "electronics", label: "Electronics" },
  { value: "health", label: "Health & Wellness" },
  { value: "home", label: "Home & Lifestyle" },
  { value: "food", label: "Food & Beverage" },
  { value: "b2b", label: "B2B Ecommerce" },
  { value: "other", label: "Other" },
];

/** ASSUMED — mirrors visible checkbox set for #1 priority */
export const auditPrimaryGoalOptions: SelectOption[] = [
  { value: "increase-revenue", label: "Increase Revenue" },
  { value: "improve-conversion", label: "Improve Conversion" },
  { value: "boost-organic-visibility", label: "Boost Organic Visibility" },
  { value: "improve-retention", label: "Improve Retention" },
  { value: "build-brand-authority", label: "Build Brand Authority" },
  { value: "other", label: "Other" },
];

/** ASSUMED */
export const auditChallengeOptions: SelectOption[] = [
  { value: "revenue-leaks", label: "Revenue Leaks" },
  { value: "conversion-friction", label: "Conversion Friction" },
  { value: "visibility-gaps", label: "Visibility Gaps" },
  { value: "trust-issues", label: "Trust Issues" },
  { value: "retention-churn", label: "Retention / Churn" },
  { value: "operational-bottlenecks", label: "Operational Bottlenecks" },
  { value: "unclear-strategy", label: "Unclear Strategy" },
  { value: "other", label: "Other" },
];

/** ASSUMED */
export const auditRevenueOptions: SelectOption[] = [
  { value: "under-50k", label: "Under $50k" },
  { value: "50k-250k", label: "$50k–$250k" },
  { value: "250k-1m", label: "$250k–$1M" },
  { value: "1m-5m", label: "$1M–$5M" },
  { value: "5m-plus", label: "$5M+" },
  { value: "prefer-not", label: "Prefer not to say" },
];

/** ASSUMED */
export const auditEmployeeOptions: SelectOption[] = [
  { value: "1-10", label: "1–10" },
  { value: "11-50", label: "11–50" },
  { value: "51-200", label: "51–200" },
  { value: "201-1000", label: "201–1000" },
  { value: "1000-plus", label: "1000+" },
];

/** ASSUMED */
export const auditRoleOptions: SelectOption[] = [
  { value: "founder-ceo", label: "Founder / CEO" },
  { value: "marketing", label: "Marketing" },
  { value: "growth", label: "Growth" },
  { value: "ecommerce-ops", label: "Ecommerce Ops" },
  { value: "agency", label: "Agency Partner" },
  { value: "other", label: "Other" },
];

export const auditIndustryValues = auditIndustryOptions.map((o) => o.value);
export const auditPrimaryGoalValues = auditPrimaryGoalOptions.map((o) => o.value);
export const auditChallengeValues = auditChallengeOptions.map((o) => o.value);
export const auditRevenueValues = auditRevenueOptions.map((o) => o.value);
export const auditEmployeeValues = auditEmployeeOptions.map((o) => o.value);
export const auditRoleValues = auditRoleOptions.map((o) => o.value);

export const auditCopy = {
  eyebrow: "START AN INTELLIGENCE AUDIT",
  title: "Begin with clarity. Grow with intelligence.",
  body: "Our Intelligence Audit identifies what's holding your eCommerce growth back, uncovers your highest-impact opportunities, and gives you a clear roadmap for what to do next.",
  outcomes: [
    { icon: "zap", label: "Identify Growth Constraints" },
    { icon: "crosshair", label: "Uncover Revenue Opportunities" },
    { icon: "bars", label: "Prioritize What Matters Most" },
    { icon: "check", label: "Get an Executive Intelligence Brief" },
  ] as const,
  howHeading: "How it works",
  howSub: "A simple process. Powerful results.",
  steps: [
    "Tell us about your business",
    "Your primary growth goal",
    "What's your biggest challenge right now?",
    "Company details (optional)",
    "Your contact information",
  ] as const,
  submit: "Start My Intelligence Audit",
  caption: "Takes less than 2 minutes",
  privacy: "We respect your privacy. Your information is secure and never shared.",
  success:
    "Thanks — we received your audit request. We'll follow up shortly.",
  failure: "Something went wrong. Please try again.",
  moreGoals: "You can select more (optional):",
  labels: {
    companyName: "Company Name",
    websiteUrl: "Website URL",
    industry: "Industry / Category",
    primaryGoal: "What is your #1 growth priority?",
    biggestChallenge: "Select your biggest challenge:",
    challengeNotes: "Anything else we should know? (optional)",
    monthlyRevenue: "Monthly Revenue Range",
    employees: "Number of Employees",
    role: "Your Role",
    fullName: "Full Name",
    workEmail: "Work Email",
  },
  placeholders: {
    companyName: "Your company name",
    websiteUrl: "https://yourwebsite.com",
    industry: "Select your industry",
    primaryGoal: "Select your primary goal",
    biggestChallenge: "Select your biggest challenge",
    challengeNotes:
      "Share additional context, current initiatives, or key concerns...",
    monthlyRevenue: "Select range",
    employees: "Select range",
    role: "Select your role",
    fullName: "Your full name",
    workEmail: "you@company.com",
  },
} as const;
