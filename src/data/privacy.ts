import type { LegalDocument } from "@/types/legal";

export const privacyDocument: LegalDocument = {
  slug: "privacy",
  eyebrow: "LEGAL",
  title: "Privacy Policy",
  lastUpdated: "Last updated: May 28, 2026",
  provisionalNotice: "Provisional copy — pending legal review.",
  intro:
    "QIERA Inc. (“QIERA”, “we”, “our”, or “us”) respects your privacy and is committed to protecting the personal information you share with us.",
  contactEmail: "privacy@qiera.com",
  sections: [
    {
      id: "information-we-collect",
      number: 1,
      title: "Information We Collect",
      icon: "userRound",
      blocks: [
        {
          type: "paragraph",
          text: "We collect information you provide directly to us and information collected automatically when you use our website, tools, and services.",
        },
        {
          type: "labeled",
          label: "Information you provide:",
          text: "name, email address, company name, job title, messages, evidence files, datasets, and other information you choose to submit.",
        },
        {
          type: "labeled",
          label: "Information collected automatically:",
          text: "usage data, device information, browser type, pages visited, IP address, and interaction data.",
        },
      ],
    },
    {
      id: "how-we-use-information",
      number: 2,
      title: "How We Use Information",
      icon: "bars",
      blocks: [
        {
          type: "paragraph",
          text: "We use information to provide, operate, and improve our services, generate intelligence, personalize your experience, communicate with you, and ensure the security and reliability of our platform.",
        },
      ],
    },
    {
      id: "information-sharing",
      number: 3,
      title: "Information Sharing",
      icon: "users",
      blocks: [
        {
          type: "paragraph",
          text: "We do not sell your personal information. We may share information with trusted service providers who support our operations under strict confidentiality agreements and only as necessary to deliver our services.",
        },
      ],
    },
    {
      id: "data-security",
      number: 4,
      title: "Data Security",
      icon: "shieldCheck",
      blocks: [
        {
          type: "paragraph",
          text: "We implement industry-standard technical, administrative, and organizational measures designed to protect your information. However, no method of transmission or storage is 100% secure.",
        },
      ],
    },
    {
      id: "your-rights-and-choices",
      number: 5,
      title: "Your Rights and Choices",
      icon: "userRound",
      blocks: [
        {
          type: "paragraph",
          text: "You may access, update, or delete your personal information at any time. You may also opt out of marketing communications.",
        },
      ],
    },
    {
      id: "data-retention",
      number: 6,
      title: "Data Retention",
      icon: "clock",
      blocks: [
        {
          type: "paragraph",
          text: "We retain information only as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce agreements.",
        },
      ],
    },
    {
      id: "international-transfers",
      number: 7,
      title: "International Transfers",
      icon: "globe",
      blocks: [
        {
          type: "paragraph",
          text: "Your information may be processed in countries outside your own. We ensure appropriate safeguards are in place to protect your information in accordance with applicable laws.",
        },
      ],
    },
    {
      id: "cookies-and-tracking",
      number: 8,
      title: "Cookies and Tracking",
      icon: "cookie",
      blocks: [
        {
          type: "paragraph",
          text: "We use cookies and similar technologies to enhance your experience, analyze usage, and support platform functionality. You can manage cookie preferences in your browser.",
        },
      ],
    },
    {
      id: "third-party-services",
      number: 9,
      title: "Third-Party Services",
      icon: "link2",
      blocks: [
        {
          type: "paragraph",
          text: "Our services may integrate with third-party platforms (e.g., analytics, hosting, payment). These providers have their own privacy policies governing their use of your information.",
        },
      ],
    },
    {
      id: "childrens-privacy",
      number: 10,
      title: "Children’s Privacy",
      icon: "users",
      blocks: [
        {
          type: "paragraph",
          text: "Our services are not intended for children under 13. We do not knowingly collect personal information from children.",
        },
      ],
    },
    {
      id: "changes-to-this-policy",
      number: 11,
      title: "Changes to This Policy",
      icon: "fileText",
      blocks: [
        {
          type: "paragraph",
          text: "We may update this policy from time to time. We will notify you of material changes by updating the “Last updated” date above.",
        },
      ],
    },
    {
      id: "contact-us",
      number: 12,
      title: "Contact Us",
      icon: "mail",
      blocks: [
        {
          type: "paragraph",
          text: "If you have questions about this Privacy Policy, please contact us at:",
        },
      ],
    },
  ],
};
