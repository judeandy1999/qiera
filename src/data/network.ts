import type { NetworkPageContent } from "@/types/network";

/** Transcribed from docs/qiera-reference/Network page/Network.png — do not invent. */
export const networkPage: NetworkPageContent = {
  eyebrow: "NETWORK",
  title: "Stronger Together. Greater Impact.",
  body: "QIERA's network brings together exceptional partners and leaders who extend our capability, scale our impact, and deliver exceptional outcomes for clients.",
  globeSrc: "/images/qiera/network/globe2.png",
  globeAlt:
    "Purple wireframe network globe of connected nodes on a dark background",
  partners: [
    {
      id: "experts",
      title: "Experts and Specialists",
      description:
        "A curated network of top-tier experts across ecommerce, growth, analytics, SEO, paid media, CRO, lifecycle, tech, and data who contribute deep domain knowledge and specialized execution.",
      icon: "award",
      benefits: [
        "Access world-class expertise",
        "Deep domain specialization",
        "Flexible, on-demand engagement",
      ],
    },
    {
      id: "resellers",
      title: "Resellers",
      description:
        "Empower your agency or consultancy to extend your offering with QIERA's frameworks, diagnostics, and solutions—under your brand.",
      icon: "handshake",
      benefits: [
        "Expand your service portfolio",
        "Increase client value and retention",
        "Predictable margins and support",
      ],
    },
    {
      id: "affiliates",
      title: "Affiliates",
      description:
        "Partner with QIERA and earn recurring revenue by referring clients who need growth intelligence, strategy, and systems that drive results.",
      icon: "users",
      benefits: [
        "Attractive recurring commissions",
        "High-converting offers",
        "Marketing and sales resources",
      ],
    },
    {
      id: "white-label",
      title: "White-label Partners",
      description:
        "Deliver QIERA-powered diagnostics, reports, and insights under your brand with full white-labeling and client ownership.",
      icon: "tag",
      benefits: [
        "100% white-label delivery",
        "Own the client relationship",
        "Powered by QIERA intelligence",
      ],
    },
    {
      id: "fractional",
      title: "Fractional Leadership",
      description:
        "Seasoned leaders available on a fractional basis to guide strategy, operations, marketing, analytics, and growth for ecommerce businesses.",
      icon: "userRound",
      benefits: [
        "Executive-level expertise",
        "Flexible engagement models",
        "Accelerate strategic execution",
      ],
    },
    {
      id: "delivery",
      title: "Delivery Partners",
      description:
        "Trusted implementation partners who help execute strategies, build systems, integrate tools, and deliver measurable results.",
      icon: "settings2",
      benefits: [
        "Execution-focused collaboration",
        "Scalable delivery capacity",
        "Aligned quality standards",
      ],
    },
    {
      id: "alliances",
      title: "Strategic Alliances",
      description:
        "We collaborate with complementary platforms, tools, and organizations to co-create value and drive innovation in the ecommerce ecosystem.",
      icon: "globe",
      benefits: [
        "Shared innovation and value",
        "Integrated solutions",
        "Stronger market impact",
      ],
    },
  ],
  cta: {
    body: "Let's build something greater together. Explore partnership opportunities and join the QIERA Network.",
    buttonLabel: "Become a Partner",
    href: "/contact?topic=partnership",
    icon: "network",
  },
};
