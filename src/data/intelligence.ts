import type { IntelligenceDimension } from "@/types/intelligence";

export const intelligenceDimensions: IntelligenceDimension[] = [
  // ─── 1. MARKET ────────────────────────────────────────────────────────────
  {
    id: "market",
    slug: "market-intelligence",
    categoryLabel: "MARKET INTELLIGENCE",
    title: "Market Intelligence",
    icon: "market",
    overviewDescription:
      "Understand the broader market landscape, identify emerging opportunities, and anticipate shifts that impact your business.",
    overviewBullets: [
      "Understand market size, trends, and dynamics",
      "Spot emerging opportunities and white spaces",
      "Anticipate shifts and demand signals",
    ],
    description:
      "Understand the broader market landscape, identify emerging opportunities, and anticipate shifts that impact your business—so you can make smarter, faster, and more confident growth decisions.",
    delivers: [
      {
        heading: "Market Sizing & Segmentation",
        body: "Quantify total addressable market (TAM), serviceable available market (SAM), and serviceable obtainable market (SOM) to prioritize where you can win and how big the opportunity is.",
      },
      {
        heading: "Trend & Signal Detection",
        body: "Identify early signals, behavioral shifts, and macro or micro trends before they become obvious—so you can move ahead of competitors and market inflections.",
      },
      {
        heading: "Growth Opportunity Identification",
        body: "Uncover white spaces, unmet needs, underserved segments, and adjacent opportunities with the highest potential impact and commercial viability.",
      },
      {
        heading: "Category & Industry Dynamics",
        body: "Analyze category maturity, lifecycle stage, growth drivers, value chain economics, and structural forces shaping demand and competition.",
      },
      {
        heading: "Regulatory & Economic Insights",
        body: "Track regulatory, policy, economic, and geopolitical factors that create risk or unlock opportunity in your market.",
      },
      {
        heading: "Market Forecasting & Scenario Planning",
        body: "Build evidence-based forecasts and scenario models to anticipate market evolution, stress-test assumptions, and guide strategic decisions.",
      },
    ],
    keyQuestions: [
      "How big is the opportunity and how is it growing?",
      "Which segments and sub-markets offer the most potential?",
      "What emerging trends could impact our business?",
      "Where are the white spaces and unmet needs?",
      "What macro or regulatory shifts should we prepare for?",
      "How will the market evolve over the next 1–3 years?",
      "Which factors are most likely to accelerate or constrain growth?",
    ],
    analysisSections: [
      {
        sectionLabel: "WHAT WE ANALYZE",
        items: [
          {
            icon: "globe",
            title: "Market Size & Growth",
            description:
              "Historical and forecasted market size, CAGR, and growth potential.",
          },
          {
            icon: "pie",
            title: "Segments & Sub-Markets",
            description:
              "Detailed analysis of segments, needs, behaviors, and value pools.",
          },
          {
            icon: "trend",
            title: "Trends & Drivers",
            description:
              "Emerging trends, technology shifts, and behavioral changes driving the market.",
          },
          {
            icon: "compass",
            title: "Opportunities & White Spaces",
            description:
              "High-potential opportunities and areas of low competition.",
          },
          {
            icon: "bank",
            title: "Regulatory & Policy",
            description:
              "Regulations, compliance, and policy changes impacting the market.",
          },
          {
            icon: "bars",
            title: "Economic Indicators",
            description:
              "Macro trends, economic indicators, and market sentiment.",
          },
        ],
      },
    ],
    evidenceSectionLabel: "OUR EVIDENCE & QUALITY STANDARDS",
    evidenceItems: [
      {
        icon: "shield",
        title: "Multi-Source Validation",
        description:
          "Triangulate insights across primary, secondary, and expert sources.",
      },
      {
        icon: "check",
        title: "Evidence Grading",
        description:
          "Every insight is rated E0–E5 for evidence strength and transparency.",
      },
      {
        icon: "target",
        title: "Confidence Levels",
        description:
          "Clear confidence levels (C0–C5) assigned to our key findings.",
      },
      {
        icon: "visibility",
        title: "Coverage & Gaps",
        description:
          "Identify what we know, what we don't know, and where evidence is needed.",
      },
      {
        icon: "warning",
        title: "Contradictions Preserved",
        description: "Conflicting data is surfaced not suppressed.",
      },
      {
        icon: "users",
        title: "Expert Review",
        description:
          "Important findings are stress-tested and validated by subject experts.",
      },
    ],
    strategicBenefits: [
      {
        icon: "rocket",
        title: "Act First",
        description:
          "Move ahead of competitors with early insights and emerging signals.",
      },
      {
        icon: "target",
        title: "Invest Wisely",
        description:
          "Allocate resources to the highest-impact opportunities with greater confidence.",
      },
      {
        icon: "shield",
        title: "Reduce Risk",
        description:
          "Anticipate threats, regulatory changes, and market shifts before they hit.",
      },
      {
        icon: "chart",
        title: "Drive Growth",
        description:
          "Identify and capture sustainable growth levers that compound over time.",
      },
      {
        icon: "users",
        title: "Align Teams",
        description:
          "Equip leadership with a shared, evidence-backed view of the market.",
      },
    ],
  },

  // ─── 2. COMPETITOR ────────────────────────────────────────────────────────
  {
    id: "competitor",
    slug: "competitor-intelligence",
    categoryLabel: "COMPETITOR INTELLIGENCE",
    title: "Competitor Intelligence",
    icon: "competitor",
    overviewDescription:
      "Understand exactly what your competitors are doing, why it matters, and where you can win.",
    overviewBullets: [
      "Benchmark competitors and performance",
      "Track strategies, positioning, and moves",
      "Find gaps and leverage competitive advantages",
    ],
    description:
      "Understand exactly what your competitors are doing, why it matters, and where you can win. We help you benchmark performance, decode strategies, and identify gaps and opportunities to outperform.",
    delivers: [
      {
        heading: "Competitive Benchmarking",
        body: "Compare key performance metrics, market positioning, offerings, pricing, and customer experience against your top competitors.",
      },
      {
        heading: "Strategy & Positioning Insights",
        body: "Uncover competitors' strategic priorities, messaging angles, differentiators, and positioning—so you can sharpen yours.",
      },
      {
        heading: "Offer & Product Analysis",
        body: "Evaluate competitor products, features, bundles, content, reviews, and innovation to spot strengths and weaknesses.",
      },
      {
        heading: "Pricing & Promotion Tracking",
        body: "Monitor pricing changes, promotions, discounts, and value propositions to identify opportunities to win on value.",
      },
      {
        heading: "Traffic & Channel Intelligence",
        body: "Analyze competitor traffic sources, paid strategies, content distribution, and channel presence to find growth levers.",
      },
      {
        heading: "Gaps & Opportunity Identification",
        body: "Identify unmet customer needs, content gaps, product gaps, and positioning opportunities to capture more share.",
      },
    ],
    keyQuestions: [
      "Who are our true competitors—and how are they positioned?",
      "What strategies are driving their growth?",
      "How do our offerings, pricing, and messaging compare?",
      "Where are they winning, and where are they vulnerable?",
      "What channels and tactics are they investing in?",
      "What gaps can we exploit to gain competitive advantage?",
      "How is their performance trending over time?",
      "What should we do differently to win more?",
    ],
    analysisSections: [
      {
        sectionLabel: "WHAT WE ANALYZE",
        items: [
          {
            icon: "target",
            title: "Competitor Identification",
            description:
              "Define direct, indirect, emerging, and aspirational competitors.",
          },
          {
            icon: "chart",
            title: "Positioning & Messaging",
            description:
              "Analyze brand positioning, value propositions, and key messages.",
          },
          {
            icon: "compass",
            title: "Products & Offerings",
            description:
              "Review product features, bundles, innovation, and customer reviews.",
          },
          {
            icon: "scale",
            title: "Pricing & Promotions",
            description:
              "Track pricing models, discounts, promotions, and incentives.",
          },
          {
            icon: "bars",
            title: "Traffic & Channels",
            description:
              "Evaluate traffic sources, paid strategies, and channel mix.",
          },
          {
            icon: "shield",
            title: "Strengths, Weaknesses & Gaps",
            description:
              "Identify competitive advantages, weaknesses, and market gaps.",
          },
        ],
      },
      {
        sectionLabel: "OUR RESEARCH APPROACH",
        items: [
          {
            title: "1. Define Scope",
            description:
              "Confirm competitors, markets, objectives, and success metrics.",
          },
          {
            title: "2. Acquire Evidence",
            description:
              "Gather multi-source data across site, content, channels, reviews, and more.",
          },
          {
            title: "3. Validate Quality",
            description:
              "Assess source quality, recency, coverage, and evidence level.",
          },
          {
            title: "4. Analyze & Compare",
            description:
              "Benchmark performance, decode strategies, and identify patterns.",
          },
          {
            title: "5. Identify Gaps",
            description:
              "Find exploitable gaps, white spaces, and differentiation levers.",
          },
          {
            title: "6. Synthesize & Recommend",
            description:
              "Deliver actionable insights and strategic recommendations.",
          },
        ],
      },
    ],
    strategicBenefits: [
      {
        icon: "rocket",
        title: "Outperform Competitors",
        description: "Turn competitor weaknesses into your market advantage.",
      },
      {
        icon: "check",
        title: "Make Smarter Decisions",
        description:
          "Base strategy on reality, not assumptions or incomplete data.",
      },
      {
        icon: "trend",
        title: "Accelerate Growth",
        description:
          "Identify proven plays, high-impact channels, and growth gaps.",
      },
      {
        icon: "shield",
        title: "Reduce Risk",
        description:
          "Anticipate competitor moves and market shifts before they impact you.",
      },
      {
        icon: "target",
        title: "Strengthen Positioning",
        description: "Differentiate with sharper messaging, offers, and value.",
      },
      {
        icon: "pie",
        title: "Win More Market Share",
        description: "Capture demand in underserved areas and white spaces.",
      },
    ],
  },

  // ─── 3. CUSTOMER ──────────────────────────────────────────────────────────
  {
    id: "customer",
    slug: "customer-intelligence",
    categoryLabel: "CUSTOMER INTELLIGENCE",
    title: "Customer Intelligence",
    icon: "customer",
    overviewDescription:
      "Gain a deep, evidence-backed understanding of your customers—their needs, motivations, behaviors, and decision-making.",
    overviewBullets: [
      "Understand needs, intent, and behavior",
      "Map decision journeys and pain points",
      "Segment audiences for personalized growth",
    ],
    description:
      "Gain a deep, evidence-backed understanding of your customers—their needs, motivations, behaviors, and decision-making—so you can create experiences, offers, and messaging that drive stronger relationships and measurable growth.",
    delivers: [
      {
        heading: "Customer Segmentation & Profiling",
        body: "Identify meaningful segments and build rich profiles based on demographics, firmographics, psychographics, behaviors, and value drivers.",
      },
      {
        heading: "Needs, Motivations & Job-to-be-Done",
        body: "Uncover what customers are trying to achieve, why it matters, and the underlying motivations that influence their decisions.",
      },
      {
        heading: "Journey & Touchpoint Intelligence",
        body: "Map end-to-end customer journeys, key touchpoints, and experience moments to identify friction, drop-off, and opportunities to elevate.",
      },
      {
        heading: "Behavior & Intent Analysis",
        body: "Analyze on-site, search, and engagement behavior to understand intent signals, content preferences, and buying readiness.",
      },
      {
        heading: "Voice of the Customer (VoC)",
        body: "Synthesize feedback from reviews, surveys, support tickets, and social conversations to capture what customers are saying—and what they're not.",
      },
      {
        heading: "Customer Value & Loyalty Drivers",
        body: "Identify what drives satisfaction, loyalty, and repeat purchase, including triggers for churn, complaints, and advocacy.",
      },
    ],
    keyQuestions: [
      "Who are our most valuable customers—and why?",
      "What are their biggest needs, goals, and pain points?",
      "What motivates them to buy—and to stay?",
      "How do they discover, evaluate, and decide?",
      "Where do they experience friction or confusion?",
      "What content, messages, and offers resonate most?",
      "What drives loyalty, and what causes churn?",
      "How can we create experiences that delight and retain?",
    ],
    analysisSections: [
      {
        sectionLabel: "WHAT WE ANALYZE",
        items: [
          {
            icon: "users",
            title: "Customer Segments",
            description:
              "Group customers by shared characteristics, behaviors, and value.",
          },
          {
            icon: "target",
            title: "Needs & Motivations",
            description:
              "Identify core needs, goals, and job-to-be-done that drive decisions.",
          },
          {
            icon: "compass",
            title: "Journey & Touchpoints",
            description:
              "Map the complete journey and experience across channels and stages.",
          },
          {
            icon: "chart",
            title: "Behavior & Intent",
            description:
              "Analyze actions, intent signals, and engagement patterns.",
          },
          {
            icon: "bars",
            title: "Voice of the Customer",
            description:
              "Capture qualitative feedback across reviews, surveys, and conversations.",
          },
          {
            icon: "shield",
            title: "Value & Loyalty Drivers",
            description:
              "Understand what drives satisfaction, loyalty, churn, and advocacy.",
          },
        ],
      },
      {
        sectionLabel: "OUR APPROACH",
        items: [
          {
            title: "1. Define Scope & Objectives",
            description:
              "Align on key questions, audience, segments, and success criteria.",
          },
          {
            title: "2. Acquire & Consolidate Data",
            description:
              "Gather multi-source data from analytics, CRM, VoC, reviews, and more.",
          },
          {
            title: "3. Validate & Assess Quality",
            description:
              "Evaluate source quality, coverage, and confidence level (E0–E5).",
          },
          {
            title: "4. Analyze & Synthesize",
            description:
              "Uncover patterns, insights, and contradictions across data.",
          },
          {
            title: "5. Identify Opportunities",
            description:
              "Surface opportunities to better serve, convert, and retain customers.",
          },
          {
            title: "6. Recommend & Report",
            description:
              "Deliver actionable recommendations with evidence, impact, and next steps.",
          },
        ],
      },
    ],
    strategicBenefits: [
      {
        icon: "users",
        title: "Know Your Customers Deeply",
        description:
          "Build a true customer understanding that reduces guesswork and risk.",
      },
      {
        icon: "trend",
        title: "Improve Conversion & Revenue",
        description:
          "Create experiences, offers, and messaging that drive more buying decisions.",
      },
      {
        icon: "shield",
        title: "Increase Retention & Loyalty",
        description:
          "Address churn drivers and strengthen relationships that increase LTV.",
      },
      {
        icon: "warning",
        title: "Reduce Friction & Drop-Off",
        description:
          "Remove barriers across the journey that cause confusion or abandonment.",
      },
      {
        icon: "target",
        title: "Align Teams Around Customers",
        description:
          "Unify efforts across marketing, product, sales, and support with customer truth.",
      },
      {
        icon: "check",
        title: "Lower Risk, Higher Confidence",
        description:
          "Make decisions backed by evidence, not assumptions or opinions.",
      },
    ],
  },

  // ─── 4. BRAND ─────────────────────────────────────────────────────────────
  {
    id: "brand",
    slug: "brand-intelligence",
    categoryLabel: "BRAND INTELLIGENCE",
    title: "Brand Intelligence",
    icon: "brand",
    overviewDescription:
      "Understand how your brand is perceived, differentiated, and positioned in the market.",
    overviewBullets: [
      "Measure brand perception and sentiment",
      "Identify positioning gaps and strengths",
      "Build stronger brand equity and differentiation",
    ],
    description:
      "Understand how your brand is perceived, differentiated, and positioned in the market. We help you strengthen brand equity, clarify messaging, and build a brand that customers prefer—and competitors can't easily replicate.",
    delivers: [
      {
        heading: "Brand Positioning & Differentiation",
        body: "Clarify your unique position in the market and the key differentiators that set you apart from competitors.",
      },
      {
        heading: "Brand Perception & Sentiment Analysis",
        body: "Measure how your brand is perceived across customers, prospects, and stakeholders using qualitative and quantitative signals.",
      },
      {
        heading: "Messaging & Narrative Audit",
        body: "Evaluate the clarity, consistency, and impact of your brand story, value propositions, and core messaging across touchpoints.",
      },
      {
        heading: "Brand Equity & Strength Assessment",
        body: "Assess brand awareness, relevance, trust, advocacy, and loyalty to identify strengths to build on and gaps to close.",
      },
      {
        heading: "Brand Architecture & Portfolio Clarity",
        body: "Review your brand hierarchy, sub-brands, and product naming strategy to ensure clarity and strategic alignment.",
      },
    ],
    keyQuestions: [
      "How is our brand perceived by our target audiences?",
      "What makes our brand unique—and is it resonating?",
      "How does our brand compare to key competitors?",
      "What are the strongest and weakest aspects of our brand equity?",
      "Is our messaging clear, consistent, and compelling?",
      "What brand associations do we own—and which do we not want?",
      "How can we strengthen brand preference and loyalty?",
      "What is our brand's future opportunity space?",
    ],
    analysisSections: [
      {
        sectionLabel: "WHAT WE ANALYZE",
        items: [
          {
            icon: "target",
            title: "Positioning & Differentiation",
            description:
              "Market position, differentiators, and competitive white space ownership.",
          },
          {
            icon: "users",
            title: "Perception & Sentiment",
            description:
              "Brand awareness, perception drivers, sentiment trends, and reputation.",
          },
          {
            icon: "chart",
            title: "Messaging & Narrative",
            description:
              "Value propositions, brand story, tone of voice, and key message clarity.",
          },
          {
            icon: "shield",
            title: "Brand Equity & Strength",
            description:
              "Awareness, relevance, trust, advocacy, loyalty, and overall equity score.",
          },
          {
            icon: "bars",
            title: "Architecture & Portfolio",
            description:
              "Brand hierarchy, sub-brands, naming, and portfolio alignment.",
          },
          {
            icon: "brand",
            title: "Association & Reputation",
            description:
              "Key brand associations, reputation drivers, and risk factors.",
          },
        ],
      },
      {
        sectionLabel: "OUR METHODOLOGY",
        items: [
          {
            title: "1. Define Scope & Objectives",
            description:
              "Align on brand questions, audiences, and success metrics.",
          },
          {
            title: "2. Acquire Evidence",
            description:
              "Gather data from surveys, reviews, social, search, competitors, and industry sources.",
          },
          {
            title: "3. Validate Quality",
            description:
              "Assess source quality, recency, coverage, and confidence level (E0–E5).",
          },
          {
            title: "4. Analyze & Synthesize",
            description:
              "Identify patterns, drivers, and contradictions across evidence.",
          },
          {
            title: "5. Identify Opportunities",
            description: "Pinpoint leverage opportunities, brand gaps, and risks.",
          },
          {
            title: "6. Recommend & Report",
            description:
              "Deliver actionable insights, strategic recommendations, and next steps.",
          },
        ],
      },
    ],
    strategicBenefits: [
      {
        icon: "brand",
        title: "Stronger Brand Differentiation",
        description: "Clarify what makes you unique and why it matters to customers.",
      },
      {
        icon: "shield",
        title: "Greater Trust & Preference",
        description:
          "Build stronger positive perceptions and increase brand preference.",
      },
      {
        icon: "trend",
        title: "Higher Brand Equity",
        description:
          "Increase awareness, relevance, and loyalty that drive long-term value.",
      },
      {
        icon: "bars",
        title: "More Effective Messaging",
        description:
          "Communicate with clarity and consistency across all touchpoints.",
      },
      {
        icon: "shield",
        title: "Resilient Reputation",
        description:
          "Proactively identify and mitigate risks to protect brand trust and value.",
      },
    ],
  },

  // ─── 5. PRODUCT ───────────────────────────────────────────────────────────
  {
    id: "product",
    slug: "product-intelligence",
    categoryLabel: "PRODUCT INTELLIGENCE",
    title: "Product Intelligence",
    icon: "product",
    overviewDescription:
      "Evaluate how your products and offers perform, resonate, and compete.",
    overviewBullets: [
      "Validate product-market fit",
      "Identify opportunities to improve offerings",
      "Optimize assortment and packaging",
    ],
    description:
      "Evaluate how your products and offers perform, resonate, and compete. We help you optimize your product portfolio, features, pricing, and innovation pipeline—so you can build what customers want and drive long-term growth.",
    delivers: [
      {
        heading: "Product Portfolio Analysis",
        body: "Assess your entire product portfolio's performance, contribution, and strategic fit to identify winners, underperformers, and gaps.",
      },
      {
        heading: "Feature & Benefit Effectiveness",
        body: "Determine which features drive value, adoption, and differentiation—and which are underutilized or irrelevant.",
      },
      {
        heading: "Pricing & Packaging Intelligence",
        body: "Evaluate pricing strategy, packaging structures, and perceived value to optimize revenue, margin, and competitiveness.",
      },
      {
        heading: "Innovation & Product Opportunity",
        body: "Identify unmet needs, emerging trends, and adjacent opportunities to build a stronger innovation roadmap.",
      },
      {
        heading: "Product Performance & Analytics",
        body: "Track sales, usage, reviews, returns, and satisfaction to understand performance drivers and product health.",
      },
    ],
    keyQuestions: [
      "How are our products performing across the portfolio?",
      "Which features and benefits matter most to customers?",
      "What pain points or gaps are our products not solving?",
      "How do our products compare to competitors?",
      "What pricing and packaging strategies maximize value?",
      "Where are the biggest opportunities for innovation?",
      "What drives product satisfaction and loyalty?",
      "Which products should we invest in, optimize, or sunset?",
      "How can we improve adoption, retention, and usage?",
      "What should our product roadmap prioritize next?",
    ],
    analysisSections: [
      {
        sectionLabel: "WHAT WE ANALYZE",
        items: [
          {
            icon: "pie",
            title: "Portfolio Performance",
            description:
              "Analyze product sales, revenue, margin, growth, and lifecycle stage.",
          },
          {
            icon: "check",
            title: "Features & Benefits",
            description:
              "Evaluate feature importance, usage, and impact on customer outcomes.",
          },
          {
            icon: "scale",
            title: "Pricing & Packaging",
            description:
              "Assess pricing elasticity, perceived value, and packaging effectiveness.",
          },
          {
            icon: "competitor",
            title: "Competitive Comparison",
            description:
              "Benchmark products against competitors on features, pricing, and positioning.",
          },
          {
            icon: "rocket",
            title: "Innovation Pipeline",
            description:
              "Identify unmet needs, emerging trends, and new product opportunities.",
          },
          {
            icon: "users",
            title: "Customer Feedback & Performance",
            description:
              "Leverage reviews, surveys, returns, NPS, and usage data to drive improvements.",
          },
        ],
      },
      {
        sectionLabel: "INSIGHT TO IMPACT FRAMEWORK",
        items: [
          {
            title: "1. Define Scope & Objectives",
            description:
              "Clarify products, markets, objectives, and success metrics.",
          },
          {
            title: "2. Acquire & Consolidate Data",
            description:
              "Gather data from sales, analytics, reviews, surveys, support, and market sources.",
          },
          {
            title: "3. Validate Quality & Coverage",
            description:
              "Assess data quality, coverage, recency, and confidence level (E0–E5).",
          },
          {
            title: "4. Analyze & Synthesize",
            description:
              "Identify patterns, drivers, strengths, weaknesses, and contradictions.",
          },
          {
            title: "5. Prioritize Opportunities",
            description:
              "Score opportunities by impact, feasibility, and strategic alignment.",
          },
          {
            title: "6. Recommend & Report",
            description:
              "Deliver clear product recommendations, roadmap inputs, and actionable next steps.",
          },
        ],
      },
    ],
    strategicBenefits: [
      {
        icon: "trend",
        title: "Optimize Portfolio Performance",
        description: "Invest in winners, fix underperformers, and maximize returns.",
      },
      {
        icon: "target",
        title: "Build What Customers Want",
        description:
          "Align products with real needs and preferences to drive adoption.",
      },
      {
        icon: "bars",
        title: "Improve Revenue & Margin",
        description:
          "Optimize pricing, packaging, and mix for greater profitability.",
      },
      {
        icon: "shield",
        title: "Mitigate Risk Early",
        description: "Reduce failures by validating ideas and addressing gaps early.",
      },
      {
        icon: "rocket",
        title: "Accelerate Innovation",
        description: "Identify and prioritize high-potential opportunities.",
      },
      {
        icon: "users",
        title: "Strengthen Loyalty & Advocacy",
        description:
          "Deliver products that delight customers and drive long-term loyalty.",
      },
    ],
  },

  // ─── 6. EXPERIENCE ────────────────────────────────────────────────────────
  {
    id: "experience",
    slug: "experience-intelligence",
    categoryLabel: "EXPERIENCE INTELLIGENCE",
    title: "Experience Intelligence",
    icon: "experience",
    overviewDescription:
      "Understand the end-to-end experiences your customers have with your brand across every touchpoint.",
    overviewBullets: [
      "Evaluate end-to-end customer experiences",
      "Identify friction and moments of delight",
      "Design experiences that convert and retain",
    ],
    description:
      "Understand the end-to-end experiences your customers have with your brand across every touchpoint. We help you uncover friction, emotion, expectation gaps, and moments that matter—so you can design experiences that delight, retain, and drive meaningful growth.",
    delivers: [
      {
        heading: "End-to-End Journey Mapping",
        body: "Map the complete customer journey across channels, devices, and touchpoints to reveal real experiences and breakdowns.",
      },
      {
        heading: "Friction & Drop-Off Analysis",
        body: "Identify friction points, blockers, and drop-off locations that reduce conversion, satisfaction, and loyalty.",
      },
      {
        heading: "Emotion & Sentiment Analysis",
        body: "Understand how customers feel at each stage using qualitative feedback, reviews, sessions, and sentiment signals.",
      },
      {
        heading: "Experience Benchmarking",
        body: "Compare your experience performance against competitors and category leaders on key satisfaction and effort metrics.",
      },
      {
        heading: "Opportunity Prioritization",
        body: "Quantify the impact and effort of experience improvements to prioritize what will move the needle most.",
      },
    ],
    keyQuestions: [
      "What is the full customer experience across all stages?",
      "Where do customers encounter friction or confusion?",
      "Which moments have the biggest impact on satisfaction and loyalty?",
      "How do our experiences compare to competitors?",
      "What drives customers to repeat, refer, or churn?",
      "What experience improvements will create the greatest lift?",
      "How can we personalize and simplify without increasing cost?",
      "How do we measure and track experience performance over time?",
    ],
    analysisSections: [
      {
        sectionLabel: "WHAT WE ANALYZE",
        items: [
          {
            icon: "compass",
            title: "Journeys & Touchpoints",
            description:
              "Mapping every step, interaction, and channel across the customer lifecycle.",
          },
          {
            icon: "warning",
            title: "Friction & Barriers",
            description:
              "Identify pain points, confusion, errors, delays, and technical or process issues.",
          },
          {
            icon: "users",
            title: "Emotions & Sentiment",
            description:
              "Track how customers feel at each stage and what drives those emotions.",
          },
          {
            icon: "target",
            title: "Experience Drivers",
            description:
              "Identify the factors that most influence satisfaction, loyalty, and advocacy.",
          },
          {
            icon: "chart",
            title: "Benchmark & Best Practices",
            description:
              "Compare experience performance to competitors and best-in-class brands.",
          },
          {
            icon: "experience",
            title: "Personalization Potential",
            description:
              "Discover opportunities to personalize, simplify, or tailor experiences at scale.",
          },
        ],
      },
      {
        sectionLabel: "OUR METHODOLOGY",
        items: [
          {
            title: "1. Define Scope & Objectives",
            description:
              "Align on experience questions, journey scope, and success metrics.",
          },
          {
            title: "2. Acquire & Consolidate Evidence",
            description:
              "Gather data from analytics, behavior, surveys, sessions, reviews, support, and customer feedback.",
          },
          {
            title: "3. Validate Quality & Coverage",
            description:
              "Assess source quality, recency, coverage, and confidence level (E0–E5).",
          },
          {
            title: "4. Analyze & Synthesize",
            description:
              "Identify friction, emotions, patterns, drivers, and moments that matter.",
          },
          {
            title: "5. Prioritize Opportunities",
            description:
              "Score opportunities by impact, effort, risk, and strategic alignment.",
          },
          {
            title: "6. Recommend & Report",
            description:
              "Deliver actionable experience recommendations and measurement plan.",
          },
        ],
      },
    ],
    strategicBenefits: [
      {
        icon: "users",
        title: "Delight Customers",
        description:
          "Create smoother, more engaging experiences that exceed expectations and build advocacy.",
      },
      {
        icon: "trend",
        title: "Increase Conversions",
        description:
          "Remove friction and optimize key moments to turn more intent into action.",
      },
      {
        icon: "users",
        title: "Boost Retention",
        description:
          "Improve satisfaction and loyalty by addressing pain points and reinforcing positive experiences.",
      },
      {
        icon: "bars",
        title: "Drive Revenue",
        description:
          "Enhance experience quality to increase AOV, repeat purchases, and lifetime value.",
      },
      {
        icon: "shield",
        title: "Reduce Risk",
        description:
          "Mitigate churn, negative reviews, and support costs by solving root experience issues.",
      },
      {
        icon: "target",
        title: "Strengthen Differentiation",
        description:
          "Build a distinct experience advantage that competitors find difficult to replicate.",
      },
    ],
  },

  // ─── 7. CONVERSION ────────────────────────────────────────────────────────
  {
    id: "conversion",
    slug: "conversion-intelligence",
    categoryLabel: "CONVERSION INTELLIGENCE",
    title: "Conversion Intelligence",
    icon: "conversion",
    overviewDescription:
      "Understand how visitors become customers—and where they drop off.",
    overviewBullets: [
      "Diagnose conversion leaks across the funnel",
      "Uncover drop-off drivers and intent gaps",
      "Optimize for higher CVR and revenue",
    ],
    description:
      "Understand how visitors become customers—and where they drop off. We identify conversion barriers, optimize the customer journey, improve UX and offers, and help you increase conversion rate, average order value, and revenue.",
    delivers: [
      {
        heading: "Conversion Funnel Analysis",
        body: "Analyze performance across every step of the funnel to identify drop-offs, friction points, and opportunities to increase conversions.",
      },
      {
        heading: "Journey & Behavior Intelligence",
        body: "Understand user paths, interactions, intent signals, and behavior patterns that impact conversion.",
      },
      {
        heading: "UX, Friction & Barrier Detection",
        body: "Identify usability issues, page-level friction, and conversion barriers that prevent customers from completing actions.",
      },
      {
        heading: "Offer & Message Effectiveness",
        body: "Evaluate offers, incentives, messaging, and trust signals to determine what motivates and converts.",
      },
      {
        heading: "Checkout & Revenue Optimization",
        body: "Optimize checkout flow, payment experience, and AOV drivers to increase completed orders and revenue.",
      },
    ],
    keyQuestions: [
      "Where are customers dropping off in the funnel?",
      "What is our conversion rate by channel, device, or segment?",
      "Which pages drive the most conversions—and why?",
      "What friction points are causing abandonment?",
      "How can we simplify the journey to convert more?",
      "Which offers or messages convert best?",
      "How can we increase average order value (AOV)?",
      "How do we improve checkout completion rate?",
      "What trust or assurance signals are missing?",
      "What tests or optimizations will have the biggest impact?",
    ],
    analysisSections: [
      {
        sectionLabel: "WHAT WE ANALYZE",
        items: [
          {
            icon: "conversion",
            title: "Funnel Performance",
            description:
              "Sessions, steps, drop-off rates, conversion rates, and flow efficiency.",
          },
          {
            icon: "compass",
            title: "User Journey & Behavior",
            description:
              "Paths, interactions, clicks, scroll depth, intent signals, and engagement.",
          },
          {
            icon: "warning",
            title: "Friction & Barriers",
            description:
              "UX issues, slow pages, form friction, field abandonment, and distractions.",
          },
          {
            icon: "chart",
            title: "Offers & Messaging",
            description:
              "Promotions, value propositions, CTAs, personalization, and message resonance.",
          },
          {
            icon: "bank",
            title: "Checkout & Payments",
            description:
              "Cart behavior, guest vs. account, payment methods, errors, and completion rate.",
          },
          {
            icon: "trend",
            title: "AOV & Revenue Drivers",
            description:
              "Upsells, cross-sells, bundles, shipping, discounts, and order value trends.",
          },
        ],
      },
      {
        sectionLabel: "OUR METHODOLOGY",
        items: [
          {
            title: "1. Define Scope & Objectives",
            description:
              "Align on conversion goals, funnel stages, segments, and success metrics.",
          },
          {
            title: "2. Acquire & Consolidate Data",
            description:
              "Collect data from analytics, behavior tools, heatmaps, surveys, and CRM.",
          },
          {
            title: "3. Validate Quality & Coverage",
            description:
              "Assess data quality, completeness, recency, and confidence (E0–E5).",
          },
          {
            title: "4. Analyze & Synthesize",
            description:
              "Identify drop-offs, friction, motivators, patterns, and opportunities.",
          },
          {
            title: "5. Prioritize Opportunities",
            description:
              "Score opportunities by impact, effort, risk, and strategic alignment.",
          },
          {
            title: "6. Recommend & Report",
            description:
              "Deliver actionable recommendations, test roadmap, and measurement plan.",
          },
        ],
      },
    ],
    strategicBenefits: [
      {
        icon: "trend",
        title: "Increase Conversion Rate",
        description:
          "Remove friction and optimize journeys to turn more visitors into customers.",
      },
      {
        icon: "bars",
        title: "Boost Revenue & AOV",
        description:
          "Improve order value with better offers, upsells, and optimized checkout.",
      },
      {
        icon: "users",
        title: "Improve User Experience",
        description:
          "Create smoother, faster, more intuitive experiences customers love.",
      },
      {
        icon: "warning",
        title: "Reduce Abandonment",
        description: "Address barriers and leakage that cause lost sales and revenue.",
      },
      {
        icon: "target",
        title: "Drive Continuous Optimization",
        description:
          "Test, learn, and improve continuously for compounding, measurable results.",
      },
      {
        icon: "shield",
        title: "Strengthen Trust & Confidence",
        description:
          "Build trust with clear signals, secure experiences, and reliable operations.",
      },
    ],
  },

  // ─── 8. COMMERCIAL ────────────────────────────────────────────────────────
  {
    id: "commercial",
    slug: "commercial-intelligence",
    categoryLabel: "COMMERCIAL INTELLIGENCE",
    title: "Commercial Intelligence",
    icon: "commercial",
    overviewDescription:
      "Understand what drives commercial performance—including offers, pricing, promotions, bundles, margins, discounts, market viability, and financial opportunity.",
    overviewBullets: [
      "Analyze revenue, pricing, and promotions",
      "Optimize promotions and margin",
      "Maximize LTV and commercial performance",
    ],
    description:
      "Understand what drives commercial performance—including offers, pricing, promotions, bundles, margins, discounts, market viability, and financial opportunity. We help you make smarter commercial decisions that improve profitability, efficiency, and growth.",
    delivers: [
      {
        heading: "Commercial Performance Analysis",
        body: "Analyze revenue, margin, profit, AOV, ASP, units sold, discounts, and return on promotions by offer, product, segment, and channel.",
      },
      {
        heading: "Offer & Promotion Intelligence",
        body: "Evaluate what offers, bundles, discounts, and promotions drive the best commercial outcomes—and why.",
      },
      {
        heading: "Pricing & Margin Intelligence",
        body: "Assess pricing architecture, elasticity, margin performance, and pricing optimization opportunities.",
      },
      {
        heading: "Discount & Incentive Intelligence",
        body: "Measure the impact of discounts and incentives on demand, profitability, and long-term customer value.",
      },
      {
        heading: "Customer Value & Commercial Segmentation",
        body: "Identify high-value customer segments, price sensitivity, LTV contribution, and commercial preferences.",
      },
    ],
    keyQuestions: [
      "What commercial levers drive the highest profitability?",
      "Which offers, products, or bundles perform best?",
      "Where are we giving too much discount—and losing margin?",
      "What pricing changes could increase profit without reducing demand?",
      "Which customer segments are most commercially valuable?",
      "Which promotions drive incremental lift vs. cannibalization?",
      "What is our true margin after discounts and returns?",
      "How can we improve AOV and revenue per customer?",
      "What commercial risks or exposures should we manage?",
      "What actions will have the biggest commercial impact?",
    ],
    analysisSections: [
      {
        sectionLabel: "WHAT WE ANALYZE",
        items: [
          {
            icon: "bars",
            title: "Commercial Performance",
            description:
              "Revenue, margin, profit, AOV, ASP, units, return rates, and promotion contribution.",
          },
          {
            icon: "commercial",
            title: "Offers & Promotions",
            description:
              "Offers, bundles, discounts, deals, upsells, cross-sells, and promotion performance.",
          },
          {
            icon: "scale",
            title: "Pricing & Margins",
            description:
              "Pricing levels, elasticity, margin by product, category, channel, and customer segment.",
          },
          {
            icon: "chart",
            title: "Discounts & Incentives",
            description:
              "Discount depth, frequency, margin impact, and long-term commercial implications.",
          },
          {
            icon: "users",
            title: "Customer Value & Segments",
            description:
              "LTV, contribution margin, purchase behavior, price sensitivity, and commercial segment opportunities.",
          },
          {
            icon: "market",
            title: "Market & Viability",
            description:
              "Market size, pricing positioning, competitive pricing, and commercial opportunity assessment.",
          },
        ],
      },
      {
        sectionLabel: "OUR METHODOLOGY",
        items: [
          {
            title: "1. Define Scope & Objectives",
            description:
              "Align on commercial goals, KPIs, segments, markets, offers, and success metrics.",
          },
          {
            title: "2. Acquire & Consolidate Data",
            description:
              "Collect data from sales, finance, CRM, pricing tools, promotions, and market sources.",
          },
          {
            title: "3. Validate Quality & Coverage",
            description:
              "Assess data quality, completeness, recency, and confidence level (E0–E5).",
          },
          {
            title: "4. Analyze & Synthesize",
            description:
              "Identify performance drivers, opportunities, risks, and commercial insights.",
          },
          {
            title: "5. Prioritize Opportunities",
            description:
              "Score opportunities by impact, effort, risk, and strategic alignment.",
          },
          {
            title: "6. Recommend & Report",
            description:
              "Deliver actionable recommendations, commercial scenarios, and next steps.",
          },
        ],
      },
    ],
    strategicBenefits: [
      {
        icon: "trend",
        title: "Increase Profitability",
        description:
          "Improve margins and profit through data-driven commercial decisions.",
      },
      {
        icon: "scale",
        title: "Optimize Pricing",
        description:
          "Price smarter with the right balance of demand, margin, and elasticity.",
      },
      {
        icon: "bars",
        title: "Boost AOV & Revenue",
        description: "Increase average order value and revenue per customer.",
      },
      {
        icon: "users",
        title: "Target the Right Segments",
        description: "Focus on high-value customers and improve segment profitability.",
      },
      {
        icon: "shield",
        title: "Reduce Commercial Risk",
        description:
          "Identify margin risks, discount leakage, and promotion inefficiencies.",
      },
      {
        icon: "check",
        title: "Improve Decision Confidence",
        description:
          "Make commercial decisions with clear evidence and governed intelligence.",
      },
    ],
  },

  // ─── 9. VISIBILITY ────────────────────────────────────────────────────────
  {
    id: "visibility",
    slug: "visibility-intelligence",
    categoryLabel: "VISIBILITY INTELLIGENCE",
    title: "Visibility Intelligence",
    icon: "visibility",
    overviewDescription:
      "Understand how your brand, products, and content are discovered across search engines, AI platforms, marketplaces, and other visibility surfaces.",
    overviewBullets: [
      "Track organic, paid, and AI visibility",
      "Monitor share of search and presence",
      "Improve discoverability and reach",
    ],
    description:
      "Understand how your brand, products, and content are discovered across search engines, AI platforms, marketplaces, and other visibility surfaces. We identify gaps, optimize presence, and help you increase discoverability, share of voice, and qualified traffic.",
    delivers: [
      {
        heading: "Search & Organic Visibility Analysis",
        body: "Evaluate keyword rankings, visibility trends, content coverage, and organic performance opportunities.",
      },
      {
        heading: "AI & Generative Visibility Intelligence",
        body: "Analyze how your brand and content appear in AI overviews, generative answers, and AI citations.",
      },
      {
        heading: "Marketplace & Retail Visibility Intelligence",
        body: "Assess product discoverability on marketplaces, category placement, and search performance.",
      },
      {
        heading: "Brand Share of Voice & Sentiment",
        body: "Measure brand prominence vs. competitors across search, social, news, and AI-generated responses.",
      },
      {
        heading: "Technical Visibility & Indexing Health",
        body: "Identify technical issues affecting crawlability, indexation, schema, and performance.",
      },
    ],
    keyQuestions: [
      "How visible are we across search engines and AI platforms?",
      "Which keywords drive visibility—and which are we missing?",
      "Where do competitors outrank or outperform us?",
      "Why isn't our content or brand showing in key results?",
      "How are we performing in AI overviews and citations?",
      "What technical issues are limiting our visibility?",
      "Which platforms or channels drive the most discoverability?",
      "How can we increase share of voice for priority topics?",
      "What content, schema, or structural changes will help most?",
      "What visibility scenarios should we prepare for?",
    ],
    analysisSections: [
      {
        sectionLabel: "WHAT WE ANALYZE",
        items: [
          {
            icon: "globe",
            title: "Search Visibility",
            description:
              "Keyword rankings, visibility score, SERP features, impressions, and CTR.",
          },
          {
            icon: "visibility",
            title: "AI & Generative Visibility",
            description:
              "AI overview presence, citations, sentiment, answer inclusion, and sources.",
          },
          {
            icon: "market",
            title: "Marketplace Visibility",
            description:
              "Search rank, category placement, content quality, reviews, and conversion.",
          },
          {
            icon: "bars",
            title: "Share of Voice & Sentiment",
            description:
              "Brand mentions, share of voice, competitive presence, and sentiment.",
          },
          {
            icon: "shield",
            title: "Technical Visibility",
            description:
              "Indexation, crawl health, schema, Core Web Vitals, and site speed.",
          },
          {
            icon: "globe",
            title: "Channel & Surface Coverage",
            description:
              "Presence across search, social, video, news, forums, and directories.",
          },
        ],
      },
      {
        sectionLabel: "OUR METHODOLOGY",
        items: [
          {
            title: "1. Define Scope & Objectives",
            description:
              "Align on visibility goals, priority topics, markets, platforms, and success metrics.",
          },
          {
            title: "2. Acquire & Consolidate Evidence",
            description:
              "Collect data from search console, rank trackers, AI tools, marketplaces, SEO tools, and more.",
          },
          {
            title: "3. Validate Quality & Coverage",
            description:
              "Assess data quality, coverage depth, recency, and confidence (E0–E5).",
          },
          {
            title: "4. Analyze & Synthesize",
            description:
              "Identify gaps, drivers, opportunities, and technical issues with impact.",
          },
          {
            title: "5. Prioritize Opportunities",
            description:
              "Score opportunities by impact, effort, risk, and strategic alignment.",
          },
          {
            title: "6. Recommend & Report",
            description:
              "Deliver actionable recommendations, roadmap, and measurement plan.",
          },
        ],
      },
    ],
    strategicBenefits: [
      {
        icon: "trend",
        title: "Increase Discoverability & Traffic",
        description:
          "Improve rankings and visibility to attract more qualified visitors.",
      },
      {
        icon: "globe",
        title: "Win in AI & Generative Search",
        description:
          "Increase citations and presence in AI answers and overviews.",
      },
      {
        icon: "chart",
        title: "Outrank & Outperform Competitors",
        description: "Capture more share of voice and dominate priority topics.",
      },
      {
        icon: "bars",
        title: "Drive More Sales & Revenue",
        description:
          "Increase product discoverability and conversion across key surfaces.",
      },
      {
        icon: "shield",
        title: "Strengthen Brand Authority & Trust",
        description:
          "Build credibility through consistent visibility and positive sentiment.",
      },
      {
        icon: "target",
        title: "Optimize Continuously & Efficiently",
        description: "Identify high-impact actions and measure what moves the needle.",
      },
    ],
  },

  // ─── 10. LIFECYCLE ────────────────────────────────────────────────────────
  {
    id: "lifecycle",
    slug: "lifecycle-intelligence",
    categoryLabel: "LIFECYCLE INTELLIGENCE",
    title: "Lifecycle Intelligence",
    icon: "lifecycle",
    overviewDescription:
      "Understand and optimize every stage of the customer lifecycle—from acquisition to advocacy.",
    overviewBullets: [
      "Understand customer lifecycle stages",
      "Identify churn risks and retention levers",
      "Increase repeat purchase and loyalty",
    ],
    description:
      "Understand and optimize every stage of the customer lifecycle—from acquisition to advocacy. We help you improve retention, increase customer lifetime value, reduce churn, and build stronger, longer-lasting customer relationships.",
    delivers: [
      {
        heading: "Lifecycle Stage Performance Analysis",
        body: "Measure performance across acquisition, activation, repeat purchase, retention, loyalty, and advocacy stages to identify gaps and opportunities.",
      },
      {
        heading: "Customer Retention & Churn Intelligence",
        body: "Identify churn drivers, at-risk customers, and retention levers to reduce churn and improve customer lifetime value.",
      },
      {
        heading: "Engagement & Reactivation Intelligence",
        body: "Analyze engagement patterns and reactivation opportunities to bring inactive customers back and increase frequency.",
      },
      {
        heading: "Loyalty & Advocacy Intelligence",
        body: "Understand loyalty behavior, satisfaction, and advocacy potential to grow repeat business and referrals.",
      },
      {
        heading: "Lifecycle Value & Profitability Intelligence",
        body: "Calculate CLV, cohort value, and profitability by segment, channel, and lifecycle stage to focus on the most valuable customers.",
      },
      {
        heading: "Lifecycle Communication Intelligence",
        body: "Optimize messaging, timing, and channel strategy for each stage to increase relevance and conversion.",
      },
    ],
    keyQuestions: [
      "How do customers move through our lifecycle stages?",
      "Where are we losing customers—and why?",
      "Which customers are at risk of churning?",
      "What drives repeat purchases and long-term loyalty?",
      "How can we reactivate inactive or lapsed customers?",
      "What is our customer lifetime value (CLV) by segment?",
      "Which communications drive the best outcomes by stage?",
      "How can we increase referrals and organic advocacy?",
      "What lifecycle initiatives will have the biggest impact?",
      "How do we improve long-term customer profitability?",
    ],
    analysisSections: [
      {
        sectionLabel: "WHAT WE ANALYZE",
        items: [
          {
            icon: "lifecycle",
            title: "Lifecycle Stage Performance",
            description:
              "Acquisition, activation, repeat purchase, retention, loyalty, advocacy metrics.",
          },
          {
            icon: "warning",
            title: "Retention & Churn",
            description:
              "Churn rate, at-risk segments, churn drivers, and retention opportunities.",
          },
          {
            icon: "users",
            title: "Engagement & Reactivation",
            description:
              "Engagement score, frequency, inactivity behavior, patterns, and win-back opportunities.",
          },
          {
            icon: "shield",
            title: "Loyalty & Advocacy",
            description:
              "Repeat rate, loyalty behavior, NPS/CSAT, referrals, and UGC potential.",
          },
          {
            icon: "trend",
            title: "Value & Profitability",
            description:
              "CLV, cohort value, lifecycle margin, LTV/CAC, and segment profitability.",
          },
          {
            icon: "bars",
            title: "Communications & Touchpoints",
            description:
              "Message performance, channel effectiveness, timing, and content impact by stage.",
          },
        ],
      },
      {
        sectionLabel: "OUR METHODOLOGY",
        items: [
          {
            title: "1. Define Scope & Objectives",
            description:
              "Align on lifecycle goals, KPIs, segments, and success metrics.",
          },
          {
            title: "2. Acquire & Consolidate Data",
            description:
              "Collect data from CRM, analytics, email, support, transactions, surveys, and reviews.",
          },
          {
            title: "3. Validate Quality & Coverage",
            description:
              "Assess data quality, completeness, recency, and confidence (E0–E5).",
          },
          {
            title: "4. Analyze & Synthesize",
            description:
              "Identify patterns, drop-offs, drivers, segments, and lifecycle opportunities.",
          },
          {
            title: "5. Prioritize Opportunities",
            description:
              "Score opportunities by impact, effort, risk, and strategic alignment across stages.",
          },
          {
            title: "6. Recommend & Report",
            description:
              "Deliver actionable recommendations, roadmap, and measurement plan.",
          },
        ],
      },
    ],
    strategicBenefits: [
      {
        icon: "users",
        title: "Increase Retention & Reduce Churn",
        description: "Keep more customers longer and reduce revenue leakage.",
      },
      {
        icon: "trend",
        title: "Increase Customer Lifetime Value",
        description:
          "Grow repeat purchases, CLV, and long-term customer profitability.",
      },
      {
        icon: "users",
        title: "Reactivate & Re-Engage More Customers",
        description: "Win back inactive customers and increase purchase frequency.",
      },
      {
        icon: "shield",
        title: "Build Loyalty & Advocacy",
        description: "Increase loyalty, referrals, UGC, and positive word of mouth.",
      },
      {
        icon: "bars",
        title: "Optimize Communications by Stage",
        description:
          "Deliver the right message at the right time on the right channel.",
      },
      {
        icon: "rocket",
        title: "Drive Sustainable Growth",
        description:
          "Build stronger relationships that create predictable, profitable growth.",
      },
    ],
  },

  // ─── 11. OPERATIONAL ──────────────────────────────────────────────────────
  {
    id: "operational",
    slug: "operational-intelligence",
    categoryLabel: "OPERATIONAL INTELLIGENCE",
    title: "Operational Intelligence",
    icon: "operational",
    overviewDescription:
      "Understand how your business operates across processes, systems, people, and technology.",
    overviewBullets: [
      "Identify process bottlenecks and inefficiencies",
      "Optimize workflows and resource use",
      "Drive scalability and execution quality",
    ],
    description:
      "Understand how your business operates across processes, systems, people, and technology. We identify operational inefficiencies, bottlenecks, cost drivers, risks, and improvement opportunities to increase efficiency, quality, scalability, and profitability.",
    delivers: [
      {
        heading: "Operations Performance Analysis",
        body: "Evaluate performance across key operational processes, KPIs, SLAs, throughput, quality, and cost to identify gaps and opportunities.",
      },
      {
        heading: "Process & Workflow Intelligence",
        body: "Map, analyze, and optimize end-to-end workflows to remove waste, reduce cycle time, and improve outcomes.",
      },
      {
        heading: "Systems & Technology Intelligence",
        body: "Assess system performance, integrations, automation opportunities, and data quality to strengthen operations.",
      },
      {
        heading: "People & Capability Intelligence",
        body: "Evaluate team capacity, skills, roles, and performance to identify capability gaps and productivity opportunities.",
      },
      {
        heading: "Risk & Compliance Intelligence",
        body: "Identify operational risks, compliance gaps, control weaknesses, and mitigation priorities.",
      },
      {
        heading: "Cost & Resource Intelligence",
        body: "Analyze cost structure, resource utilization, and cost drivers to improve efficiency and margins.",
      },
    ],
    keyQuestions: [
      "Where are our operational bottlenecks and delays?",
      "Which processes have the highest impact if improved?",
      "What is driving costs and inefficiencies?",
      "How is our team capacity and productivity performing?",
      "Where are quality issues or rework occurring?",
      "Which systems or tools are underperforming?",
      "What risks or compliance issues could disrupt operations?",
      "Where can we automate or simplify manual work?",
      "How can we improve forecasting and planning accuracy?",
      "What SLAs or performance targets should we set?",
      "What operational changes will create the biggest impact?",
      "How do we scale operations without losing quality?",
    ],
    analysisSections: [
      {
        sectionLabel: "WHAT WE ANALYZE",
        items: [
          {
            icon: "operational",
            title: "Operational Performance",
            description:
              "KPIs, throughput, cycle time, quality, SLA adherence, and benchmarks.",
          },
          {
            icon: "compass",
            title: "Processes & Workflows",
            description:
              "Process maps, steps, handoffs, bottlenecks, waste, rework, and improvement areas.",
          },
          {
            icon: "shield",
            title: "Systems & Technology",
            description:
              "System performance, integrations, data quality, automation, and reliability.",
          },
          {
            icon: "users",
            title: "People & Capabilities",
            description:
              "Capacity, roles, skills, training needs, team performance, and productivity.",
          },
          {
            icon: "warning",
            title: "Risk & Compliance",
            description:
              "Operational risks, controls, compliance requirements, and mitigation priorities.",
          },
          {
            icon: "bars",
            title: "Costs & Resources",
            description:
              "Cost drivers, resource utilization, supplier performance, and cost optimization.",
          },
        ],
      },
      {
        sectionLabel: "OUR METHODOLOGY",
        items: [
          {
            title: "1. Define Scope & Objectives",
            description:
              "Align on operational goals, KPIs, processes, systems, and success metrics.",
          },
          {
            title: "2. Acquire & Consolidate Evidence",
            description:
              "Collect data from systems, reports, logs, dashboards, teams, interviews, and docs.",
          },
          {
            title: "3. Validate Quality & Coverage",
            description:
              "Assess data quality, completeness, recency, and confidence (E0–E5).",
          },
          {
            title: "4. Analyze & Synthesize",
            description:
              "Identify bottlenecks, cost drivers, risks, gaps, and root cause patterns.",
          },
          {
            title: "5. Prioritize Opportunities",
            description:
              "Score opportunities by impact, effort, risk, and strategic alignment.",
          },
          {
            title: "6. Recommend & Report",
            description:
              "Deliver actionable recommendations, roadmap, and measurement plan.",
          },
        ],
      },
    ],
    strategicBenefits: [
      {
        icon: "rocket",
        title: "Increase Efficiency",
        description: "Eliminate waste and bottlenecks to improve speed and throughput.",
      },
      {
        icon: "bars",
        title: "Reduce Costs",
        description: "Optimize resources and processes to reduce operating costs.",
      },
      {
        icon: "check",
        title: "Improve Quality",
        description:
          "Reduce errors, rework, and defects to improve customer outcomes.",
      },
      {
        icon: "trend",
        title: "Strengthen Scalability",
        description:
          "Build repeatable, efficient operations that scale without losing quality.",
      },
      {
        icon: "shield",
        title: "Reduce Risk",
        description: "Mitigate operational, compliance, and system risks proactively.",
      },
      {
        icon: "users",
        title: "Empower Teams",
        description: "Improve productivity, clarity, and capability across teams.",
      },
    ],
  },

  // ─── 12. EXECUTIVE ────────────────────────────────────────────────────────
  {
    id: "executive",
    slug: "executive-intelligence",
    categoryLabel: "EXECUTIVE INTELLIGENCE",
    title: "Executive Intelligence",
    icon: "executive",
    overviewDescription:
      "Deliver the highest-value insights executives need to lead with confidence.",
    overviewBullets: [
      "Provide tailored insights for leadership",
      "Prioritize initiatives with highest impact",
      "Align teams around shared growth goals",
    ],
    description:
      "Deliver the highest-value insights executives need to lead with confidence. We synthesize multi-domain intelligence into clear, strategic, decision-ready perspectives that reveal what matters most, why it matters, and what to do next.",
    delivers: [
      {
        heading: "Executive Priorities & Performance Overview",
        body: "Highlight the most important metrics, trends, and risks across the business at a glance.",
      },
      {
        heading: "Strategic Insight & Theme Synthesis",
        body: "Synthesize cross-domain intelligence into key themes, opportunities, and threats shaping the business.",
      },
      {
        heading: "Decision Support & Recommendations",
        body: "Provide evidence-aware recommendations and options to support high-impact executive decisions.",
      },
      {
        heading: "Forward-Looking Outlook & Scenarios",
        body: "Assess likely future outcomes, risks, and upside under multiple scenarios and assumptions.",
      },
      {
        heading: "Governance, Risk & Confidence Overview",
        body: "Surface critical risks, confidence levels, open questions, and governance considerations for leadership.",
      },
    ],
    keyQuestions: [
      "What are the top priorities for executive attention right now?",
      "How is the business performing against its most critical goals?",
      "What are the biggest risks to our growth and profitability?",
      "What opportunities will create the most strategic impact?",
      "Where are we underinvesting—or overinvesting?",
      "How do our performance and risks compare to last quarter?",
      "What decisions require executive action in the next 30–90 days?",
      "What scenarios should we plan for—and how should we prepare?",
      "How confident should we be in our current direction?",
      "What will move the needle the most for the business?",
    ],
    analysisSections: [
      {
        sectionLabel: "WHAT WE ANALYZE",
        items: [
          {
            icon: "bars",
            title: "Business Performance",
            description:
              "Revenue, profit, growth, AOV, conversion, traffic, retention, and key executive KPIs.",
          },
          {
            icon: "compass",
            title: "Strategic Themes & Insights",
            description:
              "Cross-domain themes, patterns, contradictions, and high-leverage insights.",
          },
          {
            icon: "warning",
            title: "Risks & Challenges",
            description:
              "Market, operational, financial, competitive, reputational, and execution risks.",
          },
          {
            icon: "target",
            title: "Opportunities & Growth Levers",
            description:
              "High-impact opportunities, white spaces, and strategic moves that drive growth.",
          },
          {
            icon: "check",
            title: "Decisions & Actions",
            description:
              "Critical decisions, recommended actions, owners, and timing considerations.",
          },
          {
            icon: "trend",
            title: "Outlook & Scenarios",
            description: "Forecasts, scenarios, assumptions, and potential future outcomes.",
          },
        ],
      },
      {
        sectionLabel: "OUR METHODOLOGY",
        items: [
          {
            title: "1. Define Scope & Priorities",
            description:
              "Align on executive agenda, strategic goals, key questions, and success metrics.",
          },
          {
            title: "2. Acquire & Consolidate Intelligence",
            description:
              "Collect and synthesize data from all relevant sources, reports, analytics, research, and expert input.",
          },
          {
            title: "3. Validate Quality & Confidence",
            description:
              "Assess data quality, completeness, recency, and confidence levels (E0–E5).",
          },
          {
            title: "4. Analyze & Synthesize",
            description:
              "Identify what matters most, connections, root causes, and strategic implications across domains.",
          },
          {
            title: "5. Prioritize & Recommend",
            description:
              "Prioritize opportunities and risks by impact, effort, confidence, and strategic alignment.",
          },
          {
            title: "6. Executive Brief & Next Steps",
            description:
              "Deliver a clear, concise executive brief with recommendations, roadmap, and decisions.",
          },
        ],
      },
    ],
    // executiveFooterBadges (Evidence State, Confidence, Governance Level, etc.) are
    // not part of IntelligenceDimension type — omitted intentionally.
    strategicBenefits: [
      {
        icon: "check",
        title: "Better Decisions",
        description:
          "Make faster, smarter, evidence-backed executive decisions.",
      },
      {
        icon: "trend",
        title: "Improve Performance",
        description:
          "Focus resources on the initiatives that drive the greatest results.",
      },
      {
        icon: "shield",
        title: "Reduce Risk & Surprise",
        description: "Identify risks early and prepare for multiple future scenarios.",
      },
      {
        icon: "target",
        title: "Increase Clarity",
        description: "Cut through noise and see what matters most for the business.",
      },
      {
        icon: "users",
        title: "Align Leadership",
        description:
          "Create shared understanding and alignment across the leadership team.",
      },
      {
        icon: "rocket",
        title: "Drive Long-Term Value",
        description:
          "Invest in the right opportunities to build sustainable competitive advantage.",
      },
    ],
  },
];
