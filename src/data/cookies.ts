import type { LegalDocument } from "@/types/legal";

export const cookiesDocument: LegalDocument = {
  slug: "cookies",
  eyebrow: "LEGAL",
  title: "Cookie Policy",
  lastUpdated: "Last updated: May 28, 2026",
  provisionalNotice: "Provisional copy — pending legal review.",
  intro:
    "This Cookie Policy explains how QIERA Inc. (“QIERA”, “we”, “our”, or “us”) uses cookies and similar technologies when you visit our website or use our services.",
  contactEmail: "legal@qiera.com",
  sections: [
    {
      id: "what-are-cookies",
      number: 1,
      title: "What Are Cookies",
      icon: "cookie",
      blocks: [
        {
          type: "paragraph",
          text: "Cookies are small text files that are placed on your device when you visit a website. They help websites function properly, improve user experience, and provide insights to enhance our services.",
        },
      ],
    },
    {
      id: "how-we-use-cookies",
      number: 2,
      title: "How We Use Cookies",
      icon: "target",
      blocks: [
        {
          type: "paragraph",
          text: "We use cookies to operate our website, remember your preferences, analyze site usage, improve performance, and support our marketing and measurement efforts.",
        },
      ],
    },
    {
      id: "types-of-cookies-we-use",
      number: 3,
      title: "Types of Cookies We Use",
      icon: "layers",
      blocks: [
        {
          type: "paragraph",
          text: "We use the cookie types listed below. Some cookies are essential for the website to work, while others require your consent.",
        },
      ],
    },
    {
      id: "cookie-details",
      number: 4,
      title: "Cookie Details",
      icon: "clipboardList",
      blocks: [
        {
          type: "paragraph",
          text: "The table below explains the categories of cookies we use, their purposes, and whether they require your consent.",
        },
        {
          type: "table",
          headers: [
            "Cookie Category",
            "Purpose",
            "Examples",
            "Duration",
            "Requires Consent",
          ],
          rows: [
            [
              "Essential Cookies",
              "Required for the website to function securely and properly.",
              "session_id, csrf_token, security_token",
              "Session",
              "No",
            ],
            [
              "Performance Cookies",
              "Help us understand how visitors interact with our website by collecting anonymous data.",
              "_ga, _gid, _gat",
              "Up to 24 months",
              "Yes",
            ],
            [
              "Functionality Cookies",
              "Remember your preferences and settings to provide an enhanced experience.",
              "language, theme, consent_preferences",
              "Up to 12 months",
              "Yes",
            ],
            [
              "Analytics Cookies",
              "Measure effectiveness of content and campaigns to improve engagement.",
              "_fbp, _fbc, analytics_id",
              "Up to 12 months",
              "Yes",
            ],
            [
              "Marketing Cookies",
              "Deliver relevant content and advertisements across websites and measure campaign performance.",
              "_gcl_au, _tt_enable_cookie, and_user_data",
              "Up to 12 months",
              "Yes",
            ],
          ],
        },
      ],
    },
    {
      id: "managing-cookies",
      number: 5,
      title: "Managing Cookies",
      icon: "settings2",
      blocks: [
        {
          type: "paragraph",
          // Cookie Settings control deferred (no CMP in v1) — plain text from PNG.
          text: "You can manage or withdraw your cookie preferences at any time by clicking “Cookie Settings” in the footer of our website. You can also control cookies through your browser settings.",
        },
      ],
    },
    {
      id: "third-party-cookies",
      number: 6,
      title: "Third-Party Cookies",
      icon: "users",
      blocks: [
        {
          type: "paragraph",
          text: "Some cookies are set by third-party services that appear on our pages. These providers may use cookies in accordance with their own privacy policies.",
        },
      ],
    },
    {
      id: "do-not-track-signals",
      number: 7,
      title: "Do Not Track Signals",
      icon: "ban",
      blocks: [
        {
          type: "paragraph",
          text: "Our website does not respond to “Do Not Track” signals or similar mechanisms transmitted by web browsers.",
        },
      ],
    },
    {
      id: "updates-to-this-policy",
      number: 8,
      title: "Updates to This Policy",
      icon: "refresh",
      blocks: [
        {
          type: "paragraph",
          text: "We may update this Cookie Policy from time to time. We will notify you of material changes by updating the “Last updated” date above.",
        },
      ],
    },
    {
      id: "contact-us",
      number: 9,
      title: "Contact Us",
      icon: "mail",
      blocks: [
        {
          type: "paragraph",
          text: "If you have any questions about this Cookie Policy, please contact us at:",
        },
      ],
    },
  ],
};
