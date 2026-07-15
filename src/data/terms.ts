import type { LegalDocument } from "@/types/legal";

/** H1 matches PNG “Terms of Service”; footer legalNav remains “Terms of Use”. */
export const termsDocument: LegalDocument = {
  slug: "terms",
  eyebrow: "LEGAL",
  title: "Terms of Service",
  lastUpdated: "Last updated: May 28, 2026",
  provisionalNotice: "Provisional copy — pending legal review.",
  intro:
    "Welcome to QIERA. These Terms of Service (“Terms”) govern your access to and use of QIERA’s website, tools, services, content, and any related offerings (collectively, the “Services”). By accessing or using our Services, you agree to these Terms.",
  contactEmail: "legal@qiera.com",
  sections: [
    {
      id: "acceptance-of-terms",
      number: 1,
      title: "Acceptance of Terms",
      icon: "check",
      blocks: [
        {
          type: "paragraph",
          text: "By accessing or using QIERA’s Services, you agree to be bound by these Terms and all applicable laws and regulations.",
        },
      ],
    },
    {
      id: "description-of-services",
      number: 2,
      title: "Description of Services",
      icon: "product",
      blocks: [
        {
          type: "paragraph",
          text: "QIERA provides advisory, analytical, diagnostic, strategic, research, reporting, and tool generation services to support eCommerce growth and decision-making.",
        },
      ],
    },
    {
      id: "advisory-nature-of-services",
      number: 3,
      title: "Advisory Nature of Services",
      icon: "info",
      blocks: [
        {
          type: "paragraph",
          text: "QIERA’s Services are advisory only. We do not make guarantees or promises regarding outcomes. All decisions and actions taken based on our Services are at your sole discretion and risk.",
        },
      ],
    },
    {
      id: "user-responsibilities",
      number: 4,
      title: "User Responsibilities",
      icon: "userRound",
      blocks: [
        {
          type: "paragraph",
          text: "You agree to use our Services only for lawful purposes and in a manner that does not infringe or violate the rights of others or restrict their use of the Services.",
        },
      ],
    },
    {
      id: "intellectual-property",
      number: 5,
      title: "Intellectual Property",
      icon: "fileText",
      blocks: [
        {
          type: "paragraph",
          text: "All content, frameworks, methodologies, tools, and materials provided by QIERA are our intellectual property and are protected by copyright, trademark, and other laws.",
        },
      ],
    },
    {
      id: "user-content",
      number: 6,
      title: "User Content",
      icon: "upload",
      blocks: [
        {
          type: "paragraph",
          text: "You retain ownership of any data, files, or information you submit. You grant QIERA a limited license to use this information solely to provide the Services.",
        },
      ],
    },
    {
      id: "confidentiality",
      number: 7,
      title: "Confidentiality",
      icon: "lock",
      blocks: [
        {
          type: "paragraph",
          text: "QIERA will treat your information as confidential in accordance with our Privacy Policy and industry-standard practices.",
        },
      ],
    },
    {
      id: "payments-and-subscriptions",
      number: 8,
      title: "Payments and Subscriptions",
      icon: "creditCard",
      blocks: [
        {
          type: "paragraph",
          text: "Fees for Services are described at the time of purchase. Subscriptions renew automatically unless cancelled. All payments are non-refundable unless required by law.",
        },
      ],
    },
    {
      id: "termination",
      number: 9,
      title: "Termination",
      icon: "x",
      blocks: [
        {
          type: "paragraph",
          text: "Either party may terminate access to the Services at any time. Upon termination, your right to use the Services will cease.",
        },
      ],
    },
    {
      id: "disclaimers",
      number: 10,
      title: "Disclaimers",
      icon: "warning",
      blocks: [
        {
          type: "paragraph",
          text: "The Services are provided “as is” and “as available” without warranties of any kind, express or implied.",
        },
      ],
    },
    {
      id: "limitation-of-liability",
      number: 11,
      title: "Limitation of Liability",
      icon: "shieldCheck",
      blocks: [
        {
          type: "paragraph",
          text: "QIERA shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Services.",
        },
      ],
    },
    {
      id: "indemnification",
      number: 12,
      title: "Indemnification",
      icon: "handshake",
      blocks: [
        {
          type: "paragraph",
          text: "You agree to indemnify and hold QIERA harmless from any claims, damages, or expenses arising from your misuse of the Services or violation of these Terms.",
        },
      ],
    },
    {
      id: "governing-law",
      number: 13,
      title: "Governing Law",
      icon: "scale",
      blocks: [
        {
          type: "paragraph",
          text: "These Terms are governed by the laws of the State of Delaware, USA, without regard to its conflict of law principles.",
        },
      ],
    },
    {
      id: "changes-to-terms",
      number: 14,
      title: "Changes to Terms",
      icon: "refresh",
      blocks: [
        {
          type: "paragraph",
          text: "We may update these Terms from time to time. We will notify you of material changes by updating the “Last updated” date above.",
        },
      ],
    },
    {
      id: "contact-us",
      number: 15,
      title: "Contact Us",
      icon: "mail",
      blocks: [
        {
          type: "paragraph",
          text: "If you have questions about these Terms, please contact us at:",
        },
      ],
    },
  ],
};
