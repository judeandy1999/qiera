import type { SolutionChallenge } from "@/types/solutions";

/** Shared upward sparkline shape when reference shows a green trend (~10 points). */
const upliftSparkline = [18, 22, 20, 28, 34, 40, 48, 55, 62, 72];

export const solutions: SolutionChallenge[] = [
  {
    id: "revenue-leaks",
    tabLabel: "Revenue-Leaks",
    icon: "dollarSign",
    title: "Stop Revenue Leaks.",
    description:
      "We uncover and plug hidden revenue leaks across your marketing, sales, pricing, and operations—so you can stop losing money and start growing profitably.",
    bullets: [
      "Identify hidden revenue leaks",
      "Optimize pricing and packaging",
      "Improve sales conversion",
      "Increase customer lifetime value",
      "Recover lost growth opportunities",
    ],
    metricCard: {
      title: "Leak Detection Overview",
      value: "24",
      valueCaption: "Revenue leaks identified",
      gaugeValue: 73,
      gaugeLabel: "High impact leaks",
      gaugeSubtext: "18 of 24 leaks are high impact",
      callout: {
        icon: "visibility",
        text: "We analyzed 9 key areas across your customer journey to uncover hidden leaks.",
      },
    },
    categoryCard: {
      title: "Top Leak Categories",
      rows: [
        { icon: "banknote", label: "Pricing & Packaging", percent: 32 },
        { icon: "users", label: "Sales Process", percent: 25 },
        { icon: "lifecycle", label: "Customer Churn", percent: 20 },
        { icon: "percent", label: "Discounting", percent: 13 },
        { icon: "trend", label: "Marketing & Traffic", percent: 10 },
      ],
      callout: {
        icon: "bars",
        text: "Focus on the top 2 areas to unlock the biggest impact.",
      },
    },
    opportunityCard: {
      title: "Impact at Stake",
      value: "$2.4M",
      valueTone: "accent",
      valueCaption: "Estimated annual revenue leaking",
      // TODO: unreadable — sparkline not clearly visible on revenue-leaks reference
      sparkline: upliftSparkline,
      rows: [
        {
          icon: "dollarSign",
          label: "$200K Monthly revenue leakage",
        },
        {
          icon: "trend",
          label: "18% Potential growth lift",
          tone: "accent",
        },
        {
          icon: "lightbulb",
          label:
            "Plugging these leaks can unlock significant growth and profitability.",
        },
      ],
    },
    impactSteps: [
      {
        icon: "visibility",
        title: "Diagnose",
        description:
          "Find where revenue is leaking using data, process, and customer journey analysis.",
      },
      {
        icon: "pie",
        title: "Quantify",
        description:
          "Measure the financial impact of each leak and prioritize the biggest opportunities.",
      },
      {
        icon: "layoutTemplate",
        title: "Design",
        description:
          "Create tailored solutions to plug leaks and improve performance across key areas.",
      },
      {
        icon: "rocket",
        title: "Implement",
        description:
          "Execute quickly with clear ownership, tools, and process improvements.",
      },
      {
        icon: "chart",
        title: "Measure & Optimize",
        description:
          "Track results, recover revenue, and continuously optimize for compounding growth.",
      },
    ],
    outcomes: [
      { icon: "trend", label: "Increase in recovered revenue" },
      { icon: "target", label: "Improved conversion & efficiency" },
      { icon: "users", label: "Higher customer lifetime value" },
      { icon: "shieldCheck", label: "Stronger margins and profitability" },
      { icon: "scale", label: "Sustainable, measurable growth" },
    ],
    outcomesIllustrationSrc: "/images/qiera/solutions/outcomes-target.png",
  },
  {
    id: "growth-constraints",
    tabLabel: "Growth-Constraints",
    icon: "trend",
    title: "Remove Growth Constraints.",
    description:
      "We identify what's holding your growth back—internally and externally—so you can remove barriers, unlock capacity, and accelerate sustainable growth.",
    bullets: [
      "Uncover internal and market constraints",
      "Prioritize constraints by impact",
      "Remove barriers and unblock growth",
      "Optimize resources and processes",
      "Build a foundation for scalable growth",
    ],
    metricCard: {
      title: "Growth Constraint Impact",
      value: "$3.1M",
      valueCaption: "Estimated annual growth loss",
      gaugeValue: 68,
      gaugeLabel: "68%",
      gaugeSubtext: "Growth potential being constrained (High impact constraints)",
      callout: {
        icon: "bars",
        text: "Removing constraints can unlock significant growth and efficiency.",
      },
    },
    categoryCard: {
      title: "Top Constraint Categories",
      rows: [
        { icon: "trend", label: "Demand Generation", percent: 28 },
        { icon: "users", label: "Sales Capacity", percent: 22 },
        { icon: "product", label: "Product / Offerings", percent: 18 },
        { icon: "operational", label: "Process & Workflow", percent: 16 },
        { icon: "layers", label: "Technology & Tools", percent: 9 },
        { icon: "chart", label: "Data & Insights", percent: 7 },
      ],
      callout: {
        icon: "target",
        text: "Focus on the top 2–3 constraints to create the biggest lift.",
      },
    },
    opportunityCard: {
      title: "Growth Potential Unlocked",
      value: "$3.1M",
      valueTone: "positive",
      valueCaption: "Potential annual upside",
      sparkline: upliftSparkline,
      rows: [
        {
          icon: "trend",
          label: "+24% Potential revenue growth",
          tone: "positive",
        },
        {
          icon: "clock",
          label: "6–12 Months Time to meaningful impact",
        },
        {
          icon: "lightbulb",
          label: "Unlock hidden growth by addressing the right constraints.",
          tone: "positive",
        },
      ],
    },
    impactSteps: [
      {
        icon: "visibility",
        title: "Diagnose",
        description:
          "Identify internal and external constraints limiting growth using data, interviews, and market analysis.",
      },
      {
        icon: "funnel",
        title: "Quantify",
        description:
          "Measure the financial and strategic impact of each constraint and prioritize the highest leverage.",
      },
      {
        icon: "layoutTemplate",
        title: "Design",
        description:
          "Create tailored solutions to remove constraints, optimize capabilities, and unlock growth opportunities.",
      },
      {
        icon: "rocket",
        title: "Implement",
        description:
          "Execute improvements quickly with clear ownership, tools, and process enablement.",
      },
      {
        icon: "chart",
        title: "Measure & Optimize",
        description:
          "Track results, confirm impact, and continuously optimize to sustain and scale growth.",
      },
    ],
    outcomes: [
      { icon: "trend", label: "Higher revenue growth and market share" },
      { icon: "operational", label: "More efficient operations and resource use" },
      { icon: "conversion", label: "Improved conversion and sales performance" },
      { icon: "users", label: "Stronger customer acquisition and retention" },
      { icon: "target", label: "Better alignment across teams and priorities" },
      { icon: "rocket", label: "Scalable systems for sustained growth" },
    ],
    outcomesIllustrationSrc: "/images/qiera/solutions/outcomes-target.png",
  },
  {
    id: "conversion-problems",
    tabLabel: "Conversion-Problems",
    icon: "funnel",
    title: "Solve Conversion Problems.",
    description:
      "We find and fix friction points across the customer journey—so you can turn more visitors into customers and maximize revenue from your existing traffic.",
    bullets: [
      "Identify conversion barriers and drop-offs",
      "Improve user experience and journey flow",
      "Optimize offers, messaging, and CTAs",
      "Increase conversion rate and revenue",
      "Build tests and iterate for continuous lift",
    ],
    illustrationAlt: "Conversion funnel illustration",
    metricCard: {
      title: "Conversion Performance Overview",
      value: "1.82%",
      valueCaption: "Current conversion rate",
      gaugeValue: 40,
      gaugeLabel: "Below industry benchmark",
      gaugeSubtext: "Below industry benchmark (2.5–3.5%). Opportunity for significant improvement",
      callout: {
        icon: "bars",
        text: "Improving conversion rate by 1% can increase revenue by 10–30%.",
      },
    },
    categoryCard: {
      title: "Top Drop-Off Points",
      rows: [
        { icon: "conversion", label: "Cart / Checkout", percent: 38 },
        { icon: "banknote", label: "Pricing / Shipping", percent: 22 },
        { icon: "customer", label: "Sign Up / Account", percent: 15 },
        { icon: "clipboardList", label: "Form / Information", percent: 12 },
        { icon: "lock", label: "Payment", percent: 8 },
        { icon: "layers", label: "Other", percent: 5 },
      ],
      callout: {
        icon: "target",
        text: "Focus on the top 2–3 drop-off points to create the biggest lift.",
      },
    },
    opportunityCard: {
      title: "Conversion Uplift Opportunity",
      value: "+$2.6M",
      valueTone: "positive",
      valueCaption: "Potential annual revenue uplift",
      sparkline: upliftSparkline,
      rows: [
        {
          icon: "trend",
          label: "+48% Potential increase in conversions",
          tone: "positive",
        },
        {
          icon: "dollarSign",
          label: "$216K Potential monthly uplift",
          tone: "positive",
        },
        {
          icon: "clock",
          label: "3–6 Months Time to measurable impact",
        },
        {
          icon: "lightbulb",
          label: "Reduce friction. Increase trust. Convert more of your traffic.",
        },
      ],
    },
    impactSteps: [
      {
        icon: "visibility",
        title: "Diagnose",
        description:
          "Analyze the full customer journey to find friction points, drop-offs, and lost conversion opportunities.",
      },
      {
        icon: "funnel",
        title: "Quantify",
        description:
          "Measure the impact of each barrier and prioritize by revenue impact and ease of improvement.",
      },
      {
        icon: "layoutTemplate",
        title: "Design",
        description:
          "Create targeted solutions, user experience improvements, and offer optimizations.",
      },
      {
        icon: "rocket",
        title: "Implement",
        description:
          "Execute changes and A/B tests with clear hypotheses and quality control.",
      },
      {
        icon: "chart",
        title: "Measure & Optimize",
        description:
          "Track lift, validate results, iterate, and compound improvements over time.",
      },
    ],
    outcomes: [
      { icon: "trend", label: "Higher conversion rates and more revenue" },
      { icon: "banknote", label: "Increased average order value" },
      { icon: "experience", label: "Better user experience and journey flow" },
      { icon: "target", label: "Stronger ROI from existing traffic" },
      { icon: "users", label: "More customers, less acquisition spend" },
      { icon: "rocket", label: "Continuous improvement and compounding growth" },
    ],
    outcomesIllustrationSrc: "/images/qiera/solutions/outcomes-target.png",
  },
  {
    id: "ai-visibility",
    tabLabel: "AI-Visibility",
    icon: "sparkles",
    title: "Increase Your AI Visibility.",
    description:
      "We help your brand get discovered, recommended, and cited by AI assistants and large language models—so you capture more qualified demand in the AI-driven era.",
    bullets: [
      "Audit current AI visibility and presence",
      "Identify content, entity, and citation gaps",
      "Optimize content for AI discovery and citation",
      "Build authority and strengthen brand signals",
      "Track visibility, citations, and AI-driven traffic",
    ],
    metricCard: {
      title: "AI Visibility Overview",
      value: "42%",
      valueCaption: "AI Visibility Score (Industry Avg: 28%)",
      gaugeValue: 42,
      gaugeLabel: "Moderate visibility",
      gaugeSubtext: "Moderate visibility. Significant room to grow.",
      callout: {
        icon: "bars",
        text: "Improving your AI visibility score can drive 2–4x more AI-driven traffic and brand exposure.",
      },
    },
    categoryCard: {
      title: "Visibility by AI Platform",
      rows: [
        { icon: "sparkles", label: "ChatGPT", percent: 48 },
        { icon: "globe", label: "Google Gemini", percent: 41 },
        { icon: "binoculars", label: "Perplexity", percent: 38 },
        { icon: "layers", label: "Microsoft Copilot", percent: 32 },
        { icon: "messageCircle", label: "Claude", percent: 26 },
      ],
      callout: {
        icon: "target",
        text: "Focus on top platforms where your audience searches and gets answers.",
      },
    },
    opportunityCard: {
      title: "AI Visibility Opportunity",
      value: "$2.7M",
      valueTone: "positive",
      valueCaption: "Potential annual impact",
      sparkline: upliftSparkline,
      rows: [
        {
          icon: "trend",
          label: "+37% Potential increase in AI-driven traffic",
          tone: "positive",
        },
        {
          icon: "dollarSign",
          label: "$224K Potential monthly impact",
          tone: "positive",
        },
        {
          icon: "clock",
          label: "4–8 Months Time to measurable improvement",
        },
        {
          icon: "lightbulb",
          label:
            "Stronger AI visibility drives more discovery, citations, and qualified demand.",
        },
      ],
    },
    impactSteps: [
      {
        icon: "visibility",
        title: "Diagnose",
        description:
          "Audit AI visibility across platforms, citations, content, and brand signals.",
      },
      {
        icon: "funnel",
        title: "Quantify",
        description:
          "Measure current visibility score, citation share, and AI-driven traffic opportunity.",
      },
      {
        icon: "layoutTemplate",
        title: "Design",
        description:
          "Create a tailored plan to close content, entity, and authority gaps for AI discovery.",
      },
      {
        icon: "rocket",
        title: "Implement",
        description:
          "Optimize content, schema, mentions, and distribution to improve AI visibility and citations.",
      },
      {
        icon: "chart",
        title: "Measure & Optimize",
        description:
          "Track visibility score, citations, AI traffic, and iterate to maximize long-term impact.",
      },
    ],
    outcomes: [
      {
        icon: "eye",
        label: "Higher visibility in AI overviews and responses",
      },
      {
        icon: "messageCircle",
        label: "More brand mentions and citations by AI models",
      },
      {
        icon: "trend",
        label: "Increased AI-driven traffic and qualified demand",
      },
      {
        icon: "shieldCheck",
        label: "Stronger authority, relevance, and trust signals",
      },
      {
        icon: "dollarSign",
        label: "Higher conversions and revenue from AI channels",
      },
      {
        icon: "trophy",
        label: "Sustainable competitive advantage in AI search",
      },
    ],
    outcomesIllustrationSrc: "/images/qiera/solutions/outcomes-target.png",
  },
  {
    id: "seo-authority",
    tabLabel: "SEO-Authority",
    icon: "visibility",
    title: "Strengthen Your SEO Authority.",
    description:
      "We improve your search visibility, topical authority, and backlink profile—so you rank higher, attract more qualified traffic, and outperform competitors.",
    bullets: [
      "Audit SEO performance and authority gaps",
      "Build topical authority and content depth",
      "Optimize on-page, technical, and schema",
      "Earn high-quality backlinks and mentions",
      "Improve rankings, traffic, and conversions",
    ],
    metricCard: {
      title: "SEO Authority Overview",
      value: "56",
      valueCaption: "SEO Authority Score (Industry Avg: 38)",
      gaugeValue: 56,
      gaugeLabel: "Above average",
      gaugeSubtext: "Strong foundation with significant growth potential.",
      callout: {
        icon: "bars",
        text: "Improving your authority score by 10 points can increase organic traffic by 50–150%.",
      },
    },
    categoryCard: {
      title: "Top Authority Factors",
      rows: [
        { icon: "fileCheck", label: "Content Quality & Depth", percent: 26 },
        { icon: "globe", label: "Backlink Profile", percent: 24 },
        { icon: "compass", label: "Topical Authority", percent: 20 },
        { icon: "operational", label: "Technical SEO", percent: 16 },
        { icon: "layoutTemplate", label: "On-Page Optimization", percent: 9 },
        { icon: "users", label: "User Signals", percent: 5 },
      ],
      callout: {
        icon: "target",
        text: "Focus on backlink profile and content depth to create the biggest lift.",
      },
    },
    opportunityCard: {
      title: "SEO Growth Opportunity",
      value: "$2.9M",
      valueTone: "positive",
      valueCaption: "Potential annual traffic value",
      sparkline: upliftSparkline,
      rows: [
        {
          icon: "trend",
          label: "+112% Potential increase in organic traffic",
          tone: "positive",
        },
        {
          icon: "dollarSign",
          label: "$241K Potential monthly traffic value",
          tone: "positive",
        },
        {
          icon: "clock",
          label: "6–12 Months Time to measurable impact",
        },
        {
          icon: "lightbulb",
          label: "Stronger SEO authority drives sustainable, compounding growth.",
        },
      ],
    },
    impactSteps: [
      {
        icon: "visibility",
        title: "Diagnose",
        description:
          "Analyze your current SEO performance, technical health, content, and backlink profile.",
      },
      {
        icon: "funnel",
        title: "Quantify",
        description:
          "Measure the impact of SEO gaps and prioritize the opportunities with the highest potential.",
      },
      {
        icon: "layoutTemplate",
        title: "Design",
        description:
          "Create a tailored SEO strategy focused on authority, relevance, and ranking potential.",
      },
      {
        icon: "rocket",
        title: "Implement",
        description:
          "Execute content, technical, and link-building initiatives with clear timelines and quality standards.",
      },
      {
        icon: "chart",
        title: "Measure & Optimize",
        description:
          "Track rankings, traffic, and conversions—and continuously optimize to maximize results.",
      },
    ],
    outcomes: [
      { icon: "trend", label: "Higher rankings for valuable keywords" },
      { icon: "globe", label: "Significant increase in organic traffic" },
      {
        icon: "compass",
        label: "Stronger topical authority and brand visibility",
      },
      { icon: "target", label: "More high-intent leads and conversions" },
      { icon: "dollarSign", label: "Improved ROI from organic search" },
      {
        icon: "trophy",
        label: "Sustainable competitive advantage in search",
      },
    ],
    outcomesIllustrationSrc: "/images/qiera/solutions/outcomes-target.png",
  },
  {
    id: "trust-issues",
    tabLabel: "Trust-Issues",
    icon: "shield",
    title: "Build Trust. Increase Confidence.",
    description:
      "We identify trust gaps across your brand, website, reviews, messaging, and customer experience—so you can remove doubts and convert more prospects into loyal customers.",
    bullets: [
      "Identify trust gaps and risk signals",
      "Strengthen credibility and social proof",
      "Improve transparency and messaging",
      "Enhance reviews, reputation, and ratings",
      "Build long-term customer trust and loyalty",
    ],
    metricCard: {
      title: "Trust Health Overview",
      value: "63 / 100",
      valueCaption: "Trust Health Score (Industry Avg: 72)",
      gaugeValue: 63,
      gaugeLabel: "Building trust",
      gaugeSubtext:
        "Building trust. Room to strengthen key trust signals and perceptions.",
      callout: {
        icon: "bars",
        text: "Improving trust score by 10 points can increase conversions by 15–25%.",
      },
    },
    categoryCard: {
      title: "Top Trust Gaps",
      rows: [
        { icon: "users", label: "Lack of Social Proof", percent: 28 },
        { icon: "messageCircle", label: "Limited Reviews", percent: 22 },
        { icon: "fileCheck", label: "Unclear Guarantees", percent: 18 },
        { icon: "banknote", label: "Pricing Transparency", percent: 14 },
        { icon: "brand", label: "Brand Credibility Signals", percent: 10 },
        { icon: "lock", label: "Security & Privacy Concerns", percent: 8 },
      ],
      callout: {
        icon: "target",
        text: "Focus on the top 2–3 gaps to create the biggest impact.",
      },
    },
    opportunityCard: {
      title: "Trust Impact Potential",
      value: "$2.3M",
      valueTone: "positive",
      valueCaption: "Potential annual revenue impact",
      sparkline: upliftSparkline,
      rows: [
        {
          icon: "trend",
          label: "+31% Potential increase in conversions",
          tone: "positive",
        },
        {
          icon: "dollarSign",
          label: "$192K Potential monthly impact",
          tone: "positive",
        },
        {
          icon: "clock",
          label: "3–6 Months Time to measurable impact",
        },
        {
          icon: "shield",
          label:
            "Stronger trust leads to higher conversions, loyalty, and advocacy.",
        },
      ],
    },
    impactSteps: [
      {
        icon: "visibility",
        title: "Diagnose",
        description:
          "Assess trust signals, reviews, reputation, messaging, and customer experience for gaps.",
      },
      {
        icon: "funnel",
        title: "Quantify",
        description:
          "Measure the impact of trust gaps on conversions, cart abandonment, and customer lifetime value.",
      },
      {
        icon: "layoutTemplate",
        title: "Design",
        description:
          "Create a trust-building plan focused on credibility, transparency, and reducing friction.",
      },
      {
        icon: "rocket",
        title: "Implement",
        description:
          "Execute changes to content, proof points, messaging, reviews, guarantees, and experience.",
      },
      {
        icon: "chart",
        title: "Measure & Optimize",
        description:
          "Track trust score, sentiment, conversions, and revenue impact—continuously optimize and scale.",
      },
    ],
    outcomes: [
      { icon: "trend", label: "Higher conversions and more revenue" },
      {
        icon: "users",
        label: "Increased customer confidence and loyalty",
      },
      {
        icon: "messageCircle",
        label: "More positive reviews and better reputation",
      },
      {
        icon: "lifecycle",
        label: "Lower cart abandonment and refund rates",
      },
      {
        icon: "shieldCheck",
        label: "Stronger brand credibility and authority",
      },
      {
        icon: "scale",
        label: "Sustainable growth through trusted relationships",
      },
    ],
    outcomesIllustrationSrc: "/images/qiera/solutions/outcomes-target.png",
  },
  {
    id: "retention-problems",
    tabLabel: "Retention-Problems",
    icon: "users",
    title: "Improve Retention. Grow Lifetime Value.",
    description:
      "We identify why customers churn or disengage—so you can strengthen relationships, increase retention, and grow predictable, sustainable revenue.",
    bullets: [
      "Identify churn drivers and early warning signals",
      "Improve onboarding and customer activation",
      "Enhance engagement and product experience",
      "Build loyalty and ongoing value",
      "Reduce churn and increase customer lifetime value",
      "Track retention, cohort health, and LTV growth",
    ],
    metricCard: {
      title: "Retention Overview",
      value: "68%",
      valueCaption: "Customer Retention Rate (Industry Avg: 75%)",
      gaugeValue: 68,
      gaugeLabel: "Below industry benchmark",
      gaugeSubtext:
        "Below industry benchmark. Opportunity to reduce churn and increase loyalty.",
      callout: {
        icon: "bars",
        text: "Increasing retention by 5% can increase profits by 25–95%.",
      },
    },
    categoryCard: {
      title: "Top Churn Drivers",
      rows: [
        { icon: "experience", label: "Poor Product Experience", percent: 30 },
        { icon: "activity", label: "Lack of Engagement", percent: 24 },
        { icon: "warning", label: "Limited Perceived Value", percent: 18 },
        { icon: "rocket", label: "Onboarding Issues", percent: 14 },
        { icon: "banknote", label: "Pricing / Cost Concerns", percent: 8 },
        { icon: "competitor", label: "Better Alternatives", percent: 6 },
      ],
      callout: {
        icon: "target",
        text: "Address the top 2–3 drivers to have the biggest impact on retention.",
      },
    },
    opportunityCard: {
      title: "Retention Impact Potential",
      value: "$2.8M",
      valueTone: "positive",
      valueCaption: "Potential annual revenue impact",
      sparkline: upliftSparkline,
      rows: [
        {
          icon: "trend",
          label: "+26% Potential increase in retention rate",
          tone: "positive",
        },
        {
          icon: "dollarSign",
          label: "$233K Potential monthly revenue impact",
          tone: "positive",
        },
        {
          icon: "clock",
          label: "6–12 Months Time to measurable impact",
        },
        {
          icon: "shieldCheck",
          label: "Stronger retention drives higher LTV, growth, and profitability.",
        },
      ],
    },
    impactSteps: [
      {
        icon: "visibility",
        title: "Diagnose",
        description:
          "Analyze retention data, cohorts, feedback, and behavior to identify churn drivers and opportunities.",
      },
      {
        icon: "funnel",
        title: "Quantify",
        description:
          "Measure churn impact, at-risk customers, and lifetime value opportunities for each driver.",
      },
      {
        icon: "layoutTemplate",
        title: "Design",
        description:
          "Create targeted retention strategies and experience improvements focused on the biggest drivers.",
      },
      {
        icon: "rocket",
        title: "Implement",
        description:
          "Execute changes across onboarding, engagement, success, communication, and product experience.",
      },
      {
        icon: "chart",
        title: "Measure & Optimize",
        description:
          "Track retention, churn, LTV, and cohort health—continuously optimize to improve outcomes and loyalty.",
      },
    ],
    outcomes: [
      {
        icon: "trend",
        label: "Higher retention rates and customer lifetime value",
      },
      { icon: "lifecycle", label: "Reduced churn and revenue leakage" },
      { icon: "users", label: "More engaged and satisfied customers" },
      { icon: "brand", label: "Stronger loyalty and brand advocacy" },
      { icon: "chart", label: "Predictable recurring revenue growth" },
      {
        icon: "dollarSign",
        label: "Improved profitability and sustainable growth",
      },
    ],
    outcomesIllustrationSrc: "/images/qiera/solutions/outcomes-target.png",
  },
  {
    id: "positioning-problems",
    tabLabel: "Positioning-Problems",
    icon: "target",
    title: "Clarify Your Position. Win More Customers.",
    description:
      "We help you differentiate clearly in your market, own a compelling position, and communicate a value proposition that attracts and converts the right customers.",
    bullets: [
      "Audit current positioning and messaging",
      "Identify positioning gaps and competitor overlap",
      "Define and communicate unique differentiation",
      "Strengthen value proposition and proof points",
      "Align positioning across all channels",
      "Increase relevance, preference, and market share",
    ],
    metricCard: {
      title: "Positioning Strength Overview",
      value: "57 / 100",
      valueCaption: "Positioning Strength Score (Industry Avg: 68)",
      gaugeValue: 57,
      gaugeLabel: "Developing position",
      gaugeSubtext:
        "Clearer differentiation and messaging will drive stronger results.",
      callout: {
        icon: "bars",
        text: "Improving your positioning score by 15 points can increase win rate by 20–35%.",
      },
    },
    categoryCard: {
      title: "Top Positioning Gaps",
      rows: [
        { icon: "warning", label: "Unclear Differentiation", percent: 28 },
        { icon: "lightbulb", label: "Weak Value Proposition", percent: 23 },
        { icon: "messageCircle", label: "Message Inconsistency", percent: 19 },
        { icon: "competitor", label: "Overlapping Competitors", percent: 14 },
        { icon: "fileCheck", label: "Lack of Proof Points", percent: 9 },
        { icon: "crosshair", label: "Target Audience Misalignment", percent: 7 },
      ],
      callout: {
        icon: "target",
        text: "Address the top 2–3 gaps to create a strong, differentiated market position.",
      },
    },
    opportunityCard: {
      title: "Positioning Impact Potential",
      value: "$3.1M",
      valueTone: "positive",
      valueCaption: "Potential annual revenue impact",
      sparkline: upliftSparkline,
      rows: [
        {
          icon: "trend",
          label: "+29% Potential increase in win rate",
          tone: "positive",
        },
        {
          icon: "dollarSign",
          label: "$258K Potential monthly revenue impact",
          tone: "positive",
        },
        {
          icon: "clock",
          label: "6–12 Months Time to measurable impact",
        },
        {
          icon: "sparkles",
          label:
            "Stronger positioning drives more qualified leads, higher conversions, and premium pricing.",
        },
      ],
    },
    impactSteps: [
      {
        icon: "visibility",
        title: "Diagnose",
        description:
          "Analyze market, competitors, customers, and messaging to identify positioning gaps and opportunities.",
      },
      {
        icon: "funnel",
        title: "Quantify",
        description:
          "Measure the impact of weak positioning on win rate, conversions, pricing power, and market share.",
      },
      {
        icon: "layoutTemplate",
        title: "Design",
        description:
          "Develop a differentiated positioning strategy, value proposition, and key messaging framework.",
      },
      {
        icon: "rocket",
        title: "Implement",
        description:
          "Roll out messaging, proof points, and positioning across channels and customer touchpoints.",
      },
      {
        icon: "chart",
        title: "Measure & Optimize",
        description:
          "Track impact on win rate, revenue, and market position; refine and strengthen continuously.",
      },
    ],
    outcomes: [
      {
        icon: "bars",
        label: "Stronger, differentiated market position",
      },
      {
        icon: "users",
        label: "Higher win rates and more qualified leads",
      },
      {
        icon: "trend",
        label: "Increased conversions and revenue",
      },
      {
        icon: "dollarSign",
        label: "Greater pricing power and margin improvement",
      },
      {
        icon: "shieldCheck",
        label: "Stronger brand preference and loyalty",
      },
      {
        icon: "trophy",
        label: "Sustainable competitive advantage",
      },
    ],
    outcomesIllustrationSrc: "/images/qiera/solutions/outcomes-target.png",
  },
  {
    id: "competitive-pressure",
    tabLabel: "Competitive-Pressure",
    icon: "trophy",
    title: "Outcompete. Protect & Grow Market Share.",
    description:
      "We analyze competitive threats and market shifts—so you can defend your position, differentiate stronger, and capitalize on opportunities.",
    bullets: [
      "Monitor competitor activity and moves",
      "Benchmark positioning, pricing, and offers",
      "Identify threats, gaps, and white spaces",
      "Strengthen differentiation and value",
      "Optimize pricing and promotional strategy",
      "Build competitive moats and switching costs",
      "Increase win rate and market share",
    ],
    metricCard: {
      title: "Competitive Pressure Index",
      value: "64 / 100",
      valueCaption: "Competitive Pressure Score (Industry Avg: 50)",
      gaugeValue: 64,
      gaugeLabel: "Moderate-High Pressure",
      gaugeSubtext:
        "Rising competitive intensity in key areas requires strategic action.",
      callout: {
        icon: "bars",
        text: "Reducing competitive pressure by 10 points can improve market share by 8–15%.",
      },
    },
    categoryCard: {
      title: "Top Competitive Threats",
      rows: [
        { icon: "banknote", label: "Price Competition", percent: 28 },
        { icon: "zap", label: "Aggressive Promotions", percent: 22 },
        { icon: "product", label: "New Entrants", percent: 18 },
        { icon: "sparkles", label: "Feature Parity", percent: 14 },
        { icon: "users", label: "Market Share Shifts", percent: 10 },
        // TODO: unreadable — reference may read "Chum"; transcribed as Churn
        {
          icon: "lifecycle",
          label: "Customer Churn to Competitors",
          percent: 8,
        },
      ],
      callout: {
        icon: "target",
        text: "Focus on the top 2–3 threats to reduce risk and protect share.",
      },
    },
    opportunityCard: {
      title: "Competitive Impact Potential",
      value: "$2.6M",
      valueTone: "positive",
      valueCaption: "Potential annual profit at risk",
      sparkline: upliftSparkline,
      rows: [
        {
          icon: "trend",
          label: "+24% Potential improvement in market share",
          tone: "positive",
        },
        {
          icon: "dollarSign",
          label: "$218K Potential monthly profit protection",
          tone: "positive",
        },
        {
          icon: "clock",
          label: "6–12 Months Time to measurable impact",
        },
        {
          icon: "shield",
          label:
            "Stronger positioning reduces vulnerability and increases pricing power.",
        },
      ],
    },
    // Reference shows Monitor + Optimize as separate steps; collapsed to length 5
    impactSteps: [
      {
        icon: "visibility",
        title: "Diagnose",
        description:
          "Analyze competitors, market trends, and customer perceptions to assess threats.",
      },
      {
        icon: "funnel",
        title: "Quantify",
        description:
          "Measure the financial impact of competitive pressure and share at risk.",
      },
      {
        icon: "layoutTemplate",
        title: "Design",
        description:
          "Develop strategies to differentiate, defend position, and exploit opportunities.",
      },
      {
        icon: "rocket",
        title: "Implement",
        description:
          "Execute pricing, product, messaging, and go-to-market tactics to gain advantage.",
      },
      {
        icon: "chart",
        title: "Measure & Optimize",
        description:
          "Track competitor moves, market shifts, and customer response—refine strategies to strengthen position and maximize market share and profit.",
      },
    ],
    outcomes: [
      {
        icon: "bars",
        label: "Stronger market position and brand differentiation",
      },
      {
        icon: "target",
        label: "Higher win rates and increased market share",
      },
      {
        icon: "shield",
        label: "Protected margins and pricing power",
      },
      {
        icon: "lifecycle",
        label: "Reduced churn to competitors",
      },
      {
        icon: "eye",
        label: "Early detection of threats and market shifts",
      },
      {
        icon: "trophy",
        label: "Sustainable competitive advantage",
      },
    ],
    outcomesIllustrationSrc: "/images/qiera/solutions/outcomes-target.png",
  },
  {
    id: "operational-bottlenecks",
    tabLabel: "Operational-Bottlenecks",
    icon: "operational",
    title: "Eliminate Bottlenecks. Improve Efficiency.",
    description:
      "We identify operational inefficiencies and process bottlenecks—so you can reduce costs, improve speed, and scale with confidence.",
    bullets: [
      "Map and analyze key processes",
      "Identify bottlenecks and root causes",
      "Improve workflows and eliminate waste",
      "Optimize systems, tools, and integrations",
      "Reduce cycle time and operational costs",
      "Increase throughput and scalability",
      "Improve quality, accuracy, and customer experience",
    ],
    metricCard: {
      title: "Operational Efficiency Overview",
      value: "58 / 100",
      valueCaption: "Operational Efficiency Score (Industry Avg: 70)",
      gaugeValue: 58,
      gaugeLabel: "Below average",
      gaugeSubtext:
        "Below average. Significant inefficiencies hindering performance and scale.",
      callout: {
        icon: "bars",
        text: "Improving efficiency score by 15 points can reduce operating costs by 10–20%, and increase capacity by 25–35%.",
      },
    },
    categoryCard: {
      title: "Top Bottlenecks",
      rows: [
        { icon: "clipboardList", label: "Manual Processes", percent: 26 },
        { icon: "layers", label: "System & Tool Limitations", percent: 22 },
        { icon: "clock", label: "Process Delays", percent: 18 },
        { icon: "chart", label: "Data & Reporting Gaps", percent: 14 },
        { icon: "users", label: "Resource Constraints", percent: 11 },
        { icon: "operational", label: "Poor Integrations", percent: 9 },
      ],
      callout: {
        icon: "target",
        text: "Address the top 2–3 bottlenecks to unlock the biggest operational gains.",
      },
    },
    opportunityCard: {
      title: "Efficiency Impact Potential",
      value: "$2.4M",
      valueTone: "positive",
      valueCaption: "Potential annual cost savings and value unlocked",
      sparkline: upliftSparkline,
      rows: [
        {
          icon: "trend",
          label: "+28% Potential increase in process capacity",
          tone: "positive",
        },
        {
          icon: "dollarSign",
          label: "$198K Potential monthly cost savings",
          tone: "positive",
        },
        {
          icon: "clock",
          label: "6–12 Months Time to measurable impact",
        },
        {
          icon: "lightbulb",
          label:
            "More efficient operations enable faster growth, better margins, and improved customer experience.",
        },
      ],
    },
    // Reference may show Prioritize / Monitor / Optimize as extra steps; kept length 5
    impactSteps: [
      {
        icon: "visibility",
        title: "Diagnose",
        description:
          "Assess current operations, processes, systems, and metrics to identify bottlenecks and gaps.",
      },
      {
        icon: "funnel",
        title: "Quantify",
        description:
          "Measure the impact of inefficiencies on time, cost, quality, and capacity.",
      },
      {
        icon: "layoutTemplate",
        title: "Design",
        description:
          "Prioritize bottlenecks by impact and effort, then develop optimized processes, workflows, and system improvements.",
      },
      {
        icon: "rocket",
        title: "Implement",
        description:
          "Execute changes, automate, and integrate tools to remove bottlenecks.",
      },
      {
        icon: "chart",
        title: "Measure & Optimize",
        description:
          "Monitor results and refine operations to sustain efficiency, quality, and scale.",
      },
    ],
    outcomes: [
      {
        icon: "dollarSign",
        label: "Lower operating costs and higher profitability",
      },
      {
        icon: "zap",
        label: "Faster cycle times and improved throughput",
      },
      {
        icon: "rocket",
        label: "Increased capacity and scalability",
      },
      {
        icon: "check",
        label: "Better quality, accuracy, and consistency",
      },
      {
        icon: "experience",
        label: "Improved customer experience and satisfaction",
      },
      {
        icon: "users",
        label: "More efficient teams and resource utilization",
      },
      {
        icon: "trend",
        label: "Stronger ability to grow without increasing costs",
      },
    ],
    outcomesIllustrationSrc: "/images/qiera/solutions/outcomes-target.png",
  },
];
