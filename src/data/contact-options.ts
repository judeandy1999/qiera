export type SelectOption = { value: string; label: string };

/** Contact help-topic options — labels not visible in PNG; locked in 07-CONTEXT. */
export const contactTopicOptions: SelectOption[] = [
  { value: "partnership", label: "Partnership Inquiry" },
  { value: "general", label: "General Question" },
  { value: "sales", label: "Sales / Demo" },
  { value: "support", label: "Support" },
  { value: "other", label: "Other" },
];

export const contactTopicValues = contactTopicOptions.map((o) => o.value);

export const contactCopy = {
  eyebrow: "CONTACT",
  title: "Send us a message",
  body: "Fill out the form below and a member of our team will get back to you shortly.",
  submit: "Send Message",
  privacy: "We respect your privacy. Your information will never be shared.",
  success:
    "Thanks — we received your request. We'll follow up shortly.",
  failure: "Something went wrong. Please try again.",
  placeholders: {
    fullName: "Your full name",
    workEmail: "you@company.com",
    company: "Your company name",
    phone: "(302) 319-1312",
    topic: "Select an option",
    message: "Tell us about your challenge or goal...",
  },
  labels: {
    fullName: "Full Name",
    workEmail: "Work Email",
    company: "Company",
    phone: "Phone Number",
    topic: "What can we help you with?",
    message: "Message",
  },
} as const;
