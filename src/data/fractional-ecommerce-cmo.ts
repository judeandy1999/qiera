import type { ServicePageDocument } from "@/types/service-page";

const fractionalHref = "/contact?topic=fractional-cmo";
const growthHref = "/ecommerce-growth-consulting";

export const fractionalEcommerceCmoPage: ServicePageDocument = {
  hero: {
    eyebrow: "SERVICES",
    title: "Fractional Ecommerce CMO",
    highlights:
      "Strategic Ecommerce Leadership. Research-Informed Decisions. Better Development Priorities.",
    subhead:
      "Stop Guessing What to Build Next. Get an Ecommerce Growth Leader Who Helps You Decide.",
    paragraphs: [
      "Your business may already have developers, designers, SEO specialists, advertising agencies, and marketing teams.",
      "But who is deciding which opportunities deserve investment?",
      "Who is connecting competitive intelligence, customer experience, commercial strategy, and development priorities?",
      "Who is ensuring that the work being done contributes to a coherent growth strategy?",
      "QIERA provides Fractional Ecommerce CMO services combining senior strategic marketing leadership with deep research, competitive intelligence, visual solution exploration, and development prioritization.",
      "We help you understand your growth opportunities, see proposed improvements, choose which developments to pursue, and coordinate the strategy behind their execution.",
    ],
    closingLine: "",
    primaryCta: {
      label: "Book a Free Fractional CMO Consultation",
      href: fractionalHref,
    },
  },
  sections: [
    {
      kind: "prose",
      id: "needs-direction",
      title:
        "Your Ecommerce Business Doesn't Just Need More Marketing Activity. It Needs Direction.",
      paragraphs: [
        "Many growing ecommerce businesses have specialists responsible for different parts of marketing and development.",
        "But who is connecting these activities to the business's most important growth opportunities?",
        "Without unified strategic leadership, teams may work on initiatives that are individually reasonable but collectively misaligned.",
        "QIERA helps establish a clearer connection between research, commercial priorities, development decisions, and execution.",
      ],
      bulletsAfterParagraph: 0,
      bullets: [
        "Your PPC agency focuses on advertising.",
        "Your SEO team focuses on organic traffic.",
        "Your developers work on technical changes.",
        "Your designers improve interfaces.",
        "Your lifecycle team manages customer communication.",
      ],
    },
    {
      kind: "prose",
      id: "what-is-fractional-cmo",
      title: "What Is a Fractional Ecommerce CMO?",
      paragraphs: [
        "A Fractional Ecommerce Chief Marketing Officer provides senior marketing leadership on a part-time or contracted basis.",
        "Rather than employing a full-time executive, your business gains strategic guidance and coordination appropriate to its needs.",
        "QIERA's approach emphasizes identifying opportunities through deep research and competitive intelligence, making potential improvements visible, and helping leadership select the initiatives that deserve implementation.",
        "The service can also cover broader marketing strategy, agency coordination, acquisition, conversion, retention, and executive decision support within the agreed scope.",
      ],
    },
    {
      kind: "steps",
      id: "how-it-works",
      title: "How QIERA Fractional Ecommerce CMO Works",
      steps: [
        {
          number: "01",
          title: "Understand Your Business and Growth Objectives",
          paragraphs: [
            "We begin by understanding your business model, commercial priorities, competitive environment, marketing structure, and available development resources.",
            "We clarify what success means for your company and which decisions require senior leadership support.",
          ],
        },
        {
          number: "02",
          title: "Establish a Research-Based Strategic Foundation",
          paragraphs: [
            "The engagement begins with deep ecommerce research and competitive intelligence.",
            "We investigate relevant customer experiences, commercial opportunities, competitor practices, growth constraints, and strategic alternatives.",
            "Where internal data is available, it can support validation of the findings and help connect the analysis to actual business performance.",
            "Research informs the strategy. It is not an ongoing research-production subscription.",
          ],
        },
        {
          number: "03",
          title: "Identify and Visualize Growth Opportunities",
          paragraphs: [
            "We evaluate the opportunities uncovered during the investigation and develop before-and-after concepts for suitable proposed improvements.",
            "These concepts allow your leadership team to examine potential changes before assigning development resources.",
            "The emphasis is on understanding alternatives and their strategic rationale, not generating a fixed quantity of visual assets.",
          ],
        },
        {
          number: "04",
          title: "Choose Development Priorities",
          paragraphs: [
            "We help your leadership team compare proposed initiatives based on their potential business value, customer impact, evidence confidence, development effort, dependencies, and risks.",
            "You decide what should be implemented, tested, postponed, or rejected.",
            "QIERA supports those decisions with a structured strategic perspective.",
          ],
        },
        {
          number: "05",
          title: "Lead Strategic Coordination",
          paragraphs: [
            "After development priorities are agreed, your Fractional Ecommerce CMO helps align the people responsible for execution.",
            "This can involve coordinating marketing agencies and specialists, clarifying development priorities, reviewing proposed implementation approaches, aligning UX, acquisition, SEO, and retention objectives, facilitating leadership discussions, resolving strategic conflicts and dependencies, and supporting marketing investment decisions.",
            "Your existing teams and approved specialists remain responsible for their assigned implementation work.",
          ],
        },
        {
          number: "06",
          title: "Review Progress and Guide Decisions",
          paragraphs: [
            "As selected initiatives move forward, QIERA supports leadership with progress reviews, strategic decisions, and performance interpretation where suitable data is available.",
            "New evidence, implementation constraints, or changes in business priorities may justify adjustments to the plan.",
            "The focus remains on leadership and decision quality rather than producing continuous research reports.",
          ],
        },
      ],
    },
    {
      kind: "areas",
      id: "responsibilities",
      title: "Fractional Ecommerce CMO Responsibilities",
      areas: [
        {
          title: "Ecommerce Growth Strategy",
          description:
            "Establish strategic priorities across customer acquisition, conversion, product experience, trust, retention, and competitive positioning.",
          icon: "compass",
        },
        {
          title: "Development Prioritization",
          description:
            "Help determine which website, customer experience, and commercial improvements deserve investment.",
          icon: "clipboardList",
        },
        {
          title: "Marketing Leadership",
          description:
            "Provide senior strategic direction to internal marketing teams and external specialists.",
          icon: "executive",
        },
        {
          title: "Agency Coordination",
          description:
            "Align the work of PPC, SEO, CRO, creative, development, and lifecycle partners with agreed business priorities.",
          icon: "handshake",
        },
        {
          title: "Commercial Decision Support",
          description:
            "Advise leadership on growth opportunities, marketing investment considerations, trade-offs, and strategic risks.",
          icon: "scale",
        },
        {
          title: "UX & Conversion Strategy",
          description:
            "Guide the evaluation of customer experience improvements and help connect visual concepts to development decisions.",
          icon: "layoutTemplate",
        },
        {
          title: "Competitive Positioning",
          description:
            "Apply the findings of competitive intelligence to strategic choices, differentiation, and market positioning.",
          icon: "binoculars",
        },
        {
          title: "Performance Oversight",
          description:
            "Interpret available marketing and commercial data to support decisions and assess the progress of selected initiatives.",
          icon: "chart",
        },
      ],
    },
    {
      kind: "why",
      id: "why-qiera",
      title: "Why Choose QIERA?",
      items: [
        {
          title: "Research-Led Strategic Leadership",
          description:
            "Important decisions begin with a structured understanding of the business, market, and competitors.",
        },
        {
          title: "Visualize Improvements Before Development",
          description:
            "Before-and-after concepts help stakeholders understand proposed changes and compare alternatives.",
        },
        {
          title: "Clearer Development Priorities",
          description:
            "QIERA helps connect potential improvements to business goals, implementation feasibility, and available resources.",
        },
        {
          title: "Leadership Across Marketing and Development",
          description:
            "We help align marketing strategy, customer experience, and technical implementation priorities.",
        },
        {
          title: "Your Existing Team Can Stay in Place",
          description:
            "QIERA can coordinate with your current specialists, developers, and agencies.",
        },
        {
          title: "You Retain Final Decision-Making Authority",
          description:
            "QIERA advises and coordinates. Your company approves investments, development decisions, and implementation.",
        },
      ],
    },
    {
      kind: "options",
      id: "engagement-options",
      title: "Fractional Ecommerce CMO Engagement Options",
      options: [
        {
          title: "Strategic Ecommerce CMO Advisor",
          subtitle:
            "For founders and leadership teams that need independent senior marketing advice and help with strategic decisions.",
          description: "Typical involvement:",
          bullets: [
            "Strategic consultations",
            "Review of growth and development priorities",
            "Marketing investment advice",
            "Guidance on selected opportunities",
            "Executive decision support",
          ],
        },
        {
          title: "Fractional Ecommerce CMO",
          subtitle:
            "For growing ecommerce businesses that need an ongoing strategic marketing leader.",
          description: "Typical involvement:",
          bullets: [
            "Ecommerce growth strategy",
            "Development prioritization",
            "Agency and specialist coordination",
            "Marketing leadership meetings",
            "Oversight of selected growth initiatives",
            "Strategic performance reviews",
            "Executive decision support",
          ],
          cta: {
            label: "Book a Fractional CMO Consultation",
            href: fractionalHref,
          },
        },
        {
          title: "Embedded Fractional Ecommerce CMO",
          subtitle:
            "For businesses with more complex marketing operations, multiple agencies, and significant development activity.",
          description: "Typical involvement:",
          bullets: [
            "Higher-involvement strategic leadership",
            "Cross-functional marketing coordination",
            "Development and investment prioritization",
            "Executive planning participation",
            "Agency and specialist oversight",
            "Strategic initiative governance",
            "Support for major commercial decisions",
          ],
          cta: {
            label: "Request a Leadership Proposal",
            href: fractionalHref,
          },
        },
      ],
    },
    {
      kind: "audience",
      id: "who-is-this-for",
      title: "Who Is This Service For?",
      segments: [
        {
          title: "Ecommerce Founders & CEOs",
          description:
            "You want experienced marketing leadership without making a full-time executive hire.",
        },
        {
          title: "Growing DTC Brands",
          description:
            "You need stronger coordination between acquisition, conversion, customer experience, and retention.",
        },
        {
          title: "Established Ecommerce Retailers",
          description:
            "You already have agencies and specialists but need clearer strategic direction.",
        },
        {
          title: "Ecommerce Marketplaces",
          description:
            "Your business faces complex decisions involving customer trust, product discovery, commercial positioning, and platform experience.",
        },
        {
          title: "Businesses Planning Significant Development",
          description:
            "You want to understand which improvements deserve investment before committing your development budget.",
        },
      ],
      paragraphs: [],
    },
    {
      kind: "compare",
      id: "consulting-vs-cmo",
      title: "Fractional Ecommerce CMO vs. Ecommerce Growth Consulting",
      paragraphs: [
        "Ecommerce Growth Consulting is best when you need a defined research and strategy engagement to identify opportunities, visualize improvements, and decide what to build.",
        "Fractional Ecommerce CMO is best when you also need ongoing senior leadership to coordinate the people, priorities, and decisions involved in moving selected initiatives forward.",
        "Both services use the same research-first, visual, decision-oriented approach.",
        "The difference is the level and continuity of leadership involvement.",
      ],
    },
    {
      kind: "faq",
      id: "faq",
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How is QIERA different from a traditional Fractional CMO?",
          answer:
            "QIERA places deep research, competitive intelligence, visual solution exploration, and development prioritization at the foundation of its strategic leadership approach. The ongoing role focuses on marketing leadership, coordination, and business decisions rather than continuous research production.",
        },
        {
          question: "Will you create before-and-after designs?",
          answer:
            "Visual concepts are used where they help evaluate meaningful growth opportunities. Their scope is agreed according to the business's priorities and the engagement.",
        },
        {
          question: "Will you keep researching our competitors every month?",
          answer:
            "Not as a standard recurring obligation. Deep research and competitive intelligence establish the strategic foundation. Additional investigation can be commissioned when new questions or decisions justify it.",
        },
        {
          question: "Who decides which developments get implemented?",
          answer:
            "Your leadership team. QIERA supports the decision with research, strategic analysis, visual concepts, and implementation considerations.",
        },
        {
          question: "Will you manage our agencies?",
          answer:
            "Strategic agency coordination can be included. Responsibilities and authority are agreed in advance.",
        },
        {
          question: "Do you personally implement website developments?",
          answer:
            "The core Fractional CMO role is strategic leadership and coordination. Technical implementation remains with your development team or separately contracted specialists unless otherwise agreed.",
        },
        {
          question: "Do we need to share internal analytics?",
          answer:
            "Initial research can begin with public evidence. Effective ongoing marketing leadership generally requires appropriate access to relevant business performance data.",
        },
        {
          question: "Can you manage our marketing budget?",
          answer:
            "QIERA can advise on investment priorities and budget scenarios. Final spending authority remains with your company unless separately and explicitly authorized.",
        },
        {
          question: "How many hours will you work each month?",
          answer:
            "The time commitment depends on the engagement. Meeting cadence, availability, responsibilities, and service levels are agreed before work begins.",
        },
        {
          question: "Do you guarantee revenue growth?",
          answer:
            "No. QIERA provides strategic leadership and decision support. Results depend on implementation, customer behavior, market conditions, and business economics.",
        },
        {
          question:
            "Can we begin with Ecommerce Growth Consulting and later move to Fractional CMO?",
          answer:
            "Yes. A defined consulting engagement can establish the strategic foundation before you decide whether ongoing leadership support is needed.",
        },
      ],
    },
  ],
  conversion: {
    insertAfterSectionId: "how-it-works",
    proof: {
      title: "What a Fractional CMO Consultation Covers",
      items: [
        {
          title: "Leadership fit",
          description:
            "Clarify whether you need ongoing strategic marketing leadership or a defined research and strategy engagement first.",
          icon: "executive",
        },
        {
          title: "Connected strategy",
          description:
            "Review how QIERA links research, competitive intelligence, visual concepts, and development prioritization.",
          icon: "layers",
        },
        {
          title: "Your team stays in place",
          description:
            "Align on how we coordinate with your existing specialists, developers, and agencies within agreed scope.",
          icon: "handshake",
        },
      ],
    },
    consultation: {
      eyebrow: "FREE CONSULTATION",
      title: "Book a Free Fractional CMO Consultation",
      bullets: [
        "Share where strategic direction feels unclear today — acquisition, conversion, retention, or development priorities.",
        "We can begin from public evidence; ongoing leadership works best with appropriate performance access later.",
        "Full service details on this page remain unchanged — this form is a faster path to talk.",
      ],
      topic: "fractional-cmo",
      submitLabel: "Request Fractional CMO Consultation",
    },
    stickyCta: {
      label: "Book Fractional CMO Call",
      href: "#book-consultation",
    },
  },
  finalCta: {
    title: "Your Next Growth Opportunity Deserves Better Leadership.",
    paragraphs: [
      "Your ecommerce business may already have the resources to grow.",
      "What it needs is clarity about which opportunities matter, which improvements deserve development, and how to align the people responsible for making them happen.",
      "QIERA combines research-led strategy, visual solution exploration, and senior ecommerce marketing leadership to help you make those decisions.",
    ],
    primaryCta: {
      label: "Book a Free Fractional CMO Consultation",
      href: fractionalHref,
    },
    secondaryCta: {
      label: "Explore Ecommerce Growth Consulting",
      href: growthHref,
    },
  },
};
