import type { ServicePageDocument } from "@/types/service-page";

const consultationHref = "/contact?topic=growth-consulting";

export const ecommerceGrowthConsultingPage: ServicePageDocument = {
  hero: {
    eyebrow: "SERVICES",
    title: "Ecommerce Growth Consulting",
    highlights:
      "Deep Research. Competitive Intelligence. Visual Solutions. Smarter Growth Decisions.",
    subhead:
      "Discover What Could Grow Your Ecommerce Business. See the Improvements Before You Invest.",
    paragraphs: [
      "Your next growth opportunity might not require more advertising, another agency, or a complete website rebuild.",
      "It might be hidden in your customer experience, competitive positioning, product presentation, or purchasing journey.",
      "QIERA helps ecommerce businesses uncover growth opportunities through deep research and competitive intelligence, then makes potential improvements tangible with before-and-after visual concepts.",
      "Instead of asking you to commit to development based on a list of recommendations, we help you understand the opportunities, compare possible solutions, and choose which improvements deserve investment.",
    ],
    closingLine:
      "Research the opportunities. Visualize the solutions. Decide what to build.",
    primaryCta: {
      label: "Book a Free Growth Consultation",
      href: consultationHref,
    },
  },
  sections: [
    {
      kind: "prose",
      id: "hidden-opportunities",
      title:
        "Your Biggest Growth Opportunity Might Be Something You're Not Looking At",
      paragraphs: [
        "Ecommerce businesses often invest heavily in acquisition while overlooking opportunities elsewhere in the customer journey.",
        "Individually, these problems can seem small. Together, they may create meaningful commercial friction.",
        "The challenge is identifying which opportunities are relevant to your business—and which improvements are worth developing.",
        "QIERA approaches that challenge through structured research, competitive benchmarking, and visual solution exploration.",
      ],
      bulletsAfterParagraph: 0,
      bullets: [
        "A competitor may communicate product value more clearly.",
        "Your product pages may leave important purchasing questions unanswered.",
        "Your checkout may create unnecessary uncertainty.",
        "Your category navigation may make products harder to discover.",
        "Your offers may not communicate why customers should choose your store.",
      ],
    },
    {
      kind: "prose",
      id: "better-decisions",
      title: "Ecommerce Growth Consulting Built Around Better Decisions",
      paragraphs: [
        "Traditional consulting can leave businesses with long reports and extensive recommendations.",
        "QIERA takes a more visual, decision-oriented approach.",
        "We investigate how your ecommerce business operates, compare it with relevant competitors, identify potential improvement opportunities, and illustrate how selected solutions could work.",
        "You can examine different options before committing development resources.",
        "The objective isn't to recommend as many changes as possible. It's to help you choose the right changes.",
      ],
    },
    {
      kind: "steps",
      id: "how-it-works",
      title: "How QIERA Ecommerce Growth Consulting Works",
      steps: [
        {
          number: "01",
          title: "Deep Ecommerce Research",
          paragraphs: [
            "Understand your business before recommending changes.",
            "We investigate the commercial and customer experience factors that may influence ecommerce growth.",
            "Research can examine your business model, positioning, product experience, website architecture, acquisition journeys, customer trust, search visibility, and retention opportunities.",
            "We also investigate publicly available customer feedback and other relevant market evidence.",
            "Where appropriate, the initial investigation can be completed without access to private company data.",
            "We distinguish observed problems from hypotheses that require further validation.",
          ],
        },
        {
          number: "02",
          title: "Competitive Intelligence",
          paragraphs: [
            "Understand how competitors attract, persuade, and serve customers.",
            "We study relevant competitors to identify differences in customer experience, commercial positioning, product presentation, pricing communication, trust, and visibility.",
            "We examine practices that could be adapted to your business, as well as opportunities to differentiate rather than simply imitate competitors.",
            "A competitor's use of a particular feature does not prove that the feature improves performance. We evaluate its relevance to your business before recommending it.",
          ],
        },
        {
          number: "03",
          title: "Growth Opportunity Identification",
          paragraphs: [
            "Find improvements that deserve serious consideration.",
            "We connect research findings to potential commercial opportunities.",
            "These may involve conversion optimization, product discovery, checkout, trust, customer acquisition, organic visibility, offer presentation, or retention.",
            "We consider the customer problem, available evidence, expected business mechanism, implementation complexity, and strategic importance of each opportunity.",
          ],
        },
        {
          number: "04",
          title: "Before-and-After Visual Solutions",
          paragraphs: [
            "See what proposed improvements could look like.",
            "QIERA turns selected opportunities into visual concepts that demonstrate possible changes to your ecommerce experience.",
            "These may include homepage improvements, product page redesigns, navigation changes, trust elements, checkout enhancements, mobile experiences, and landing pages.",
            "Before-and-after comparisons help your team understand proposed solutions, discuss alternatives, and evaluate whether they fit your brand and business.",
            "Illustrative concepts and reconstructed current-state views are clearly labeled. They are not presented as verified performance improvements.",
          ],
        },
        {
          number: "05",
          title: "Choose Which Developments to Make",
          paragraphs: [
            "Compare opportunities before allocating resources.",
            "We work with you to evaluate possible improvements according to commercial relevance, customer impact, evidence confidence, development effort, dependencies, and implementation risk.",
            "You decide which initiatives to pursue, defer, test, or reject.",
            "This ensures that development priorities reflect your business objectives rather than the number of recommendations generated.",
          ],
        },
        {
          number: "06",
          title: "Move From Decision to Development",
          paragraphs: [
            "Turn selected ideas into actionable next steps.",
            "Once you've selected your preferred improvements, QIERA can help clarify requirements, align stakeholders, and support discussions with your designers, developers, or agencies.",
            "Implementation and development oversight can be arranged separately where needed.",
            "Your business retains control over investment and implementation decisions.",
          ],
        },
      ],
    },
    {
      kind: "areas",
      id: "where-we-look",
      title: "Where We Look for Ecommerce Growth Opportunities",
      areas: [
        {
          title: "Conversion & Customer Experience",
          description:
            "Improve product discovery, usability, navigation, product presentation, and purchasing experiences.",
          icon: "conversion",
        },
        {
          title: "Revenue & Commercial Strategy",
          description:
            "Investigate potential revenue friction, offer communication, merchandising, pricing presentation, and growth constraints.",
          icon: "commercial",
        },
        {
          title: "Competitive Positioning",
          description:
            "Understand competitor strengths and identify ways to communicate a more compelling value proposition.",
          icon: "competitor",
        },
        {
          title: "SEO & AI Visibility",
          description:
            "Explore opportunities to improve search discoverability, content architecture, semantic coverage, and visibility in AI-assisted search.",
          icon: "visibility",
        },
        {
          title: "Customer Trust",
          description:
            "Improve credibility, delivery clarity, purchasing reassurance, customer information, and resolution transparency.",
          icon: "shieldCheck",
        },
        {
          title: "Acquisition & Landing Pages",
          description:
            "Strengthen the relationship between customer intent, marketing messages, and landing page experiences.",
          icon: "target",
        },
        {
          title: "Retention & Lifecycle",
          description:
            "Explore opportunities to improve post-purchase experiences, customer communication, and repeat-purchase journeys.",
          icon: "lifecycle",
        },
      ],
    },
    {
      kind: "why",
      id: "why-qiera",
      title: "Why QIERA?",
      items: [
        {
          title: "Research before recommendations.",
          description:
            "We investigate the business and competitive landscape before suggesting improvements.",
        },
        {
          title: "Visualize before developing.",
          description:
            "We make potential solutions easier to understand through before-and-after concepts.",
        },
        {
          title: "Prioritize instead of overwhelming.",
          description:
            "We focus on helping you select improvements rather than creating an endless task list.",
        },
        {
          title: "Work with your existing team.",
          description:
            "Your developers, designers, and agencies can remain responsible for execution.",
        },
        {
          title: "Keep decisions in your hands.",
          description:
            "QIERA provides research, recommendations, and strategic guidance. You decide what gets built.",
        },
      ],
    },
    {
      kind: "options",
      id: "consulting-options",
      title: "Ecommerce Growth Consulting Options",
      footnote:
        "Project fees are quoted based on business complexity, research depth, competitive scope, and consulting involvement.",
      options: [
        {
          title: "Growth Opportunity Consultation",
          subtitle: "Free introductory consultation",
          description:
            "Discuss your ecommerce business, current challenges, competitive environment, and potential areas for investigation.",
          cta: {
            label: "Book a Free Consultation",
            href: consultationHref,
          },
        },
        {
          title: "Ecommerce Growth Intelligence",
          subtitle: "Project-based engagement",
          description:
            "A structured investigation combining deep research, competitive intelligence, growth opportunity discovery, and visual exploration of selected improvements.",
          bestFor:
            "Best for businesses that want to understand their opportunities before committing to development.",
          cta: {
            label: "Request a Consulting Proposal",
            href: consultationHref,
          },
        },
        {
          title: "Ecommerce Growth Architecture",
          subtitle: "Extended strategic engagement",
          description:
            "A more comprehensive engagement for businesses that want to evaluate multiple improvement directions, compare development alternatives, and establish clear strategic priorities.",
          bestFor:
            "Best for ecommerce businesses planning significant optimization or growth investment.",
          cta: {
            label: "Discuss Your Growth Strategy",
            href: consultationHref,
          },
        },
      ],
    },
    {
      kind: "audience",
      id: "who-we-work-with",
      title: "Who We Work With",
      paragraphs: [
        "QIERA works with ecommerce founders, CEOs, marketing leaders, direct-to-consumer brands, established online retailers, marketplaces, and ecommerce teams seeking an independent strategic perspective.",
        "We are particularly relevant when a business has the resources to implement improvements but needs greater clarity about what should be improved first.",
      ],
    },
    {
      kind: "faq",
      id: "faq",
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What does an ecommerce growth consultant do?",
          answer:
            "An ecommerce growth consultant helps identify growth constraints, evaluate opportunities, develop improvement strategies, and support commercial decisions. QIERA emphasizes deep research, competitive intelligence, visual solution exploration, and development prioritization.",
        },
        {
          question: "Can QIERA start without access to our analytics?",
          answer:
            "Yes. We can begin with publicly accessible website information, competitor research, search visibility, and customer feedback. Actual conversion performance, revenue leakage, and financial impact require appropriate internal data to validate.",
        },
        {
          question: "Will you show us what improvements could look like?",
          answer:
            "Yes. Visual before-and-after concepts are a central part of our consulting approach for opportunities where visual comparison is useful.",
        },
        {
          question: "Are the proposed designs ready for implementation?",
          answer:
            "Not necessarily. Visual concepts communicate proposed solutions. Production development may require further UX, technical, accessibility, content, and feasibility work.",
        },
        {
          question: "Who decides what gets developed?",
          answer:
            "You do. QIERA helps you compare options and make informed decisions, but your business retains final authority.",
        },
        {
          question: "Does QIERA implement the improvements?",
          answer:
            "Our core service focuses on research, strategic consulting, and visual solution exploration. Implementation or development coordination can be arranged separately.",
        },
        {
          question: "How is QIERA different from a CRO or marketing agency?",
          answer:
            "QIERA investigates growth opportunities across multiple commercial systems and helps businesses decide which improvements to pursue. Specialist agencies typically focus on executing work within particular disciplines.",
        },
        {
          question: "Can you guarantee an increase in revenue?",
          answer:
            "No. We help identify and evaluate potential opportunities. Actual commercial impact depends on implementation, customer behavior, business conditions, and validation.",
        },
      ],
    },
  ],
  conversion: {
    insertAfterSectionId: "how-it-works",
    proof: {
      title: "What a Free Consultation Helps You Clarify",
      items: [
        {
          title: "Your context",
          description:
            "Discuss your ecommerce business, current challenges, competitive environment, and potential areas for investigation.",
          icon: "messageCircle",
        },
        {
          title: "Research-led priorities",
          description:
            "Understand how deep research and competitive intelligence inform which improvements deserve serious consideration.",
          icon: "binoculars",
        },
        {
          title: "Decision, not pressure",
          description:
            "Explore whether a structured engagement fits your goals — with no obligation to proceed.",
          icon: "scale",
        },
      ],
    },
    consultation: {
      eyebrow: "FREE CONSULTATION",
      title: "Book a Free Growth Consultation",
      bullets: [
        "Short form — we respond with next steps, not a generic sales sequence.",
        "Bring your store URL if you have one; we can start from public evidence.",
        "All page content above stays available — this is an additional way to reach us.",
      ],
      topic: "growth-consulting",
      submitLabel: "Request Free Consultation",
    },
    stickyCta: {
      label: "Book Free Consultation",
      href: "#book-consultation",
    },
  },
  finalCta: {
    title: "Your Next Growth Opportunity Starts With Better Research.",
    paragraphs: [
      "Before you invest in another redesign, campaign, or development initiative, understand what deserves improvement.",
      "QIERA helps you investigate the opportunities, see possible solutions, and choose your next moves with greater confidence.",
    ],
    primaryCta: {
      label: "Book a Free Growth Consultation",
      href: consultationHref,
    },
    secondaryCta: {
      label: "Explore Fractional Ecommerce CMO",
      href: "/fractional-ecommerce-cmo",
    },
  },
};
