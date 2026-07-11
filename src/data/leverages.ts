import type { Leverage } from "@/types/leverages";

export const leverages: Leverage[] = [
  {
    id: "revenue",
    title: "Revenue Leverage",
    icon: "dollarSign",
    overviewBullets: [
      "Increase average order value and lifetime value",
      "Expand revenue streams and upsell opportunities",
      "Improve pricing, offers, and monetization",
    ],
    description:
      "Unlock more revenue from your existing traffic, customers, and assets. Identify and seize opportunities to increase average order value, expand revenue streams, improve monetization, and drive sustainable top-line growth.",
    impactMetrics: [
      {
        icon: "dollarSign",
        value: "$2.8M",
        label: "Potential Annual Impact",
        badge: { text: "High opportunity", tone: "positive" },
      },
      {
        icon: "trend",
        value: "+38%",
        label: "Potential Revenue Increase",
        badge: { text: "vs. current baseline", tone: "accent" },
      },
      {
        icon: "banknote",
        value: "$233K",
        label: "Potential Monthly Impact",
        badge: { text: "High confidence estimate", tone: "positive" },
      },
      {
        icon: "clock",
        value: "3-6 Months",
        label: "Time to Measurable Impact",
        badge: { text: "Quick wins identified", tone: "accent" },
      },
    ],
    valueDrivers: [
      { label: "Increase Average Order Value", percent: 32, icon: "banknote" },
      { label: "Expand Revenue Streams", percent: 24, icon: "layers" },
      { label: "Improve Pricing & Packaging", percent: 18, icon: "percent" },
      { label: "Increase Purchase Frequency", percent: 12, icon: "lifecycle" },
      { label: "Reduce Revenue Leakage", percent: 9, icon: "warning" },
      { label: "Cross-Sell & Upsell", percent: 5, icon: "sparkles" },
    ],
    valueDriversCallout:
      "Focusing on the top 3 drivers can unlock up to 74% of your revenue opportunity.",
    opportunities: [
      {
        icon: "product",
        title: "Optimize product bundles and kits",
        description: "Create high-value bundles to increase AOV",
        annualImpact: "$780K",
        tags: [
          { label: "High Impact", tone: "danger" },
        ],
      },
      {
        icon: "percent",
        title: "Implement volume and tiered pricing",
        description: "Incentivize larger purchases and improve margins",
        annualImpact: "$540K",
        tags: [
          { label: "High Impact", tone: "danger" },
        ],
      },
      {
        icon: "lifecycle",
        title: "Launch subscription or membership",
        description: "Create recurring revenue and increase LTV",
        annualImpact: "$420K",
        tags: [
          { label: "Medium Impact", tone: "warning" },
        ],
      },
      {
        icon: "sparkles",
        title: "Improve cross-sell and upsell flows",
        description: "Recommend relevant products at key moments",
        annualImpact: "$360K",
        tags: [
          { label: "Medium Impact", tone: "warning" },
        ],
      },
      {
        icon: "warning",
        title: "Reduce discounting and leakage",
        description: "Protect margin and capture lost revenue",
        annualImpact: "$320K",
        tags: [
          { label: "Medium Impact", tone: "warning" },
        ],
      },
    ],
    timeToValue: [
      {
        icon: "rocket",
        title: "Quick Wins",
        timeframe: "0-3 Months",
        value: "$620K",
        caption: "22% of total impact",
      },
      {
        icon: "zap",
        title: "Short Term",
        timeframe: "3-6 Months",
        value: "$1.2M",
        caption: "43% of total impact",
      },
      {
        icon: "trend",
        title: "Medium Term",
        timeframe: "6-12 Months",
        value: "$800K",
        caption: "29% of total impact",
      },
      {
        icon: "trophy",
        title: "Long Term",
        timeframe: "12+ Months",
        value: "$180K",
        caption: "6% of total impact",
      },
    ],
    roadmap: [
      {
        step: 1,
        title: "Diagnose Revenue Opportunities",
        description:
          "Analyze current performance, revenue mix, pricing, and customer behavior.",
        duration: "1-2 Weeks",
      },
      {
        step: 2,
        title: "Prioritize High-Impact Levers",
        description:
          "Focus on opportunities with the highest impact and lowest complexity.",
        duration: "1 Week",
      },
      {
        step: 3,
        title: "Design & Plan Solutions",
        description:
          "Define offers, pricing, bundles, and experiences to capture more value.",
        duration: "2-4 Weeks",
      },
      {
        step: 4,
        title: "Implement & Launch",
        description:
          "Execute changes, enable tools, and train teams for adoption.",
        duration: "4-8 Weeks",
      },
      {
        step: 5,
        title: "Measure & Optimize",
        description:
          "Track results, test variations, and continuously refine for maximum impact.",
        duration: "Ongoing",
      },
    ],
    roadmapCallout:
      "Following this roadmap can unlock up to $2.8M in additional annual revenue.",
    outcomes: [
      "Higher average order value and revenue per customer",
      "Increased total revenue and profit margins",
      "More diversified and predictable revenue streams",
      "Improved monetization of traffic and assets",
      "Stronger pricing power and value perception",
      "Better alignment between offers and customer needs",
      "Sustainable, compounding revenue growth",
    ],
    successFactors: [
      { icon: "target", label: "Clear value proposition" },
      { icon: "customer", label: "Customer-centric offers" },
      { icon: "chart", label: "Data-driven decisions" },
      { icon: "crosshair", label: "Continuous testing" },
      { icon: "users", label: "Cross-functional execution" },
    ],
    cta: {
      title: "Ready to Unlock Revenue Growth?",
      body: "Our experts can help you prioritize, implement, and scale the right revenue levers.",
    },
  },
  {
    id: "conversion",
    title: "Conversion Leverage",
    icon: "funnel",
    overviewBullets: [
      "Optimize conversion funnel and user journeys",
      "Remove friction and increase flow",
      "Improve CTAs, pages, and checkout experience",
    ],
    description:
      "Optimize every step of your customer journey to turn more visitors into customers. Identify conversion friction, improve user experience, and implement proven strategies that increase conversion rate and maximize revenue from your existing traffic.",
    impactMetrics: [
      {
        icon: "percent",
        value: "1.82%",
        label: "Current Conversion Rate",
        badge: { text: "Below benchmark", tone: "danger" },
      },
      {
        icon: "trend",
        value: "+0.73%",
        label: "Potential Conversion Lift",
        badge: { text: "High opportunity", tone: "positive" },
      },
      {
        icon: "dollarSign",
        value: "$2.6M",
        label: "Potential Annual Impact",
        badge: { text: "High confidence", tone: "positive" },
      },
      {
        icon: "clock",
        value: "3-6 Months",
        label: "Time to Measurable Impact",
        badge: { text: "Quick wins identified", tone: "accent" },
      },
    ],
    opportunities: [
      {
        icon: "check",
        title: "Simplify Checkout Process",
        description: "Reduce steps, fields, and distractions",
        annualImpact: "+0.35% Conversion Lift",
        tags: [
          { label: "High Impact", tone: "danger" },
          { label: "Low Effort", tone: "positive" },
        ],
      },
      {
        icon: "banknote",
        title: "Improve Pricing & Shipping Clarity",
        description: "Increase trust and reduce hesitation",
        annualImpact: "+0.22% Conversion Lift",
        tags: [
          { label: "High Impact", tone: "danger" },
          { label: "Medium Effort", tone: "accent" },
        ],
      },
      {
        icon: "product",
        title: "Enhance Product Pages",
        description: "Stronger copy, visuals, and social proof",
        annualImpact: "+0.18% Conversion Lift",
        tags: [
          { label: "High Impact", tone: "danger" },
          { label: "Medium Effort", tone: "accent" },
        ],
      },
      {
        icon: "target",
        title: "Optimize CTAs",
        description: "Clearer, more compelling calls to action",
        annualImpact: "+0.12% Conversion Lift",
        tags: [
          { label: "Medium Impact", tone: "warning" },
          { label: "Low Effort", tone: "positive" },
        ],
      },
      {
        icon: "warning",
        title: "Reduce Cart Abandonment",
        description: "Exit intent, reminders, and incentives",
        annualImpact: "+0.08% Conversion Lift",
        tags: [
          { label: "Medium Impact", tone: "warning" },
          { label: "Medium Effort", tone: "accent" },
        ],
      },
    ],
    timeToValue: [
      {
        icon: "rocket",
        title: "Quick Wins",
        timeframe: "0-1 Month",
        value: "+0.20% – 0.30%",
        caption: "Conversion Lift",
      },
      {
        icon: "zap",
        title: "Short Term",
        timeframe: "1-3 Months",
        value: "+0.30% – 0.60%",
        caption: "Conversion Lift",
      },
      {
        icon: "trend",
        title: "Medium Term",
        timeframe: "3-6 Months",
        value: "+0.60% – 1.00%",
        caption: "Conversion Lift",
      },
      {
        icon: "trophy",
        title: "Long Term",
        timeframe: "6+ Months",
        value: "+1.00%+",
        caption: "Conversion Lift",
      },
    ],
    roadmap: [
      {
        step: 1,
        title: "Analyze & Diagnose",
        description:
          "Review data, heatmaps, session recordings, and user feedback.",
        duration: "1-2 Weeks",
      },
      {
        step: 2,
        title: "Prioritize High-Impact Opportunities",
        description:
          "Focus on changes with the highest potential lift and lowest effort.",
        duration: "1 Week",
      },
      {
        step: 3,
        title: "Design & Test Solutions",
        description:
          "Create wireframes, copy, and offers. Set up A/B tests.",
        duration: "2-4 Weeks",
      },
      {
        step: 4,
        title: "Implement & Launch",
        description:
          "Deploy winning variations and optimize across channels.",
        duration: "1-2 Weeks",
      },
      {
        step: 5,
        title: "Measure & Optimize",
        description:
          "Track results, iterate, and compound gains over time.",
        duration: "Ongoing",
      },
    ],
    roadmapCallout:
      "Following this roadmap can improve your conversion rate by 0.73%+ and unlock up to $2.6M in additional annual revenue.",
    outcomes: [
      "Higher conversion rate and revenue from existing traffic",
      "Lower customer acquisition cost (CAC)",
      "Improved user experience and satisfaction",
      "Increased average order value and profit margins",
      "Reduced cart abandonment and lost sales",
      "Stronger trust, credibility, and brand perception",
      "Data-driven optimization culture and continuous growth",
    ],
    successFactors: [
      { icon: "shield", label: "Clear value proposition" },
      { icon: "check", label: "Frictionless experience" },
      { icon: "messageCircle", label: "Relevant offers & messaging" },
      { icon: "users", label: "Social proof & trust signals" },
      { icon: "crosshair", label: "Continuous testing" },
    ],
    drivers: [
      {
        icon: "experience",
        title: "User Experience",
        score: "6.2 / 10",
        status: "Opportunity",
        statusTone: "accent",
      },
      {
        icon: "target",
        title: "Offer Relevance",
        score: "6.8 / 10",
        status: "Opportunity",
        statusTone: "accent",
      },
      {
        icon: "shield",
        title: "Trust & Credibility",
        score: "5.9 / 10",
        status: "Gap",
        statusTone: "warning",
      },
      {
        icon: "warning",
        title: "Friction & Effort",
        score: "4.8 / 10",
        status: "Major Gap",
        statusTone: "danger",
      },
      {
        icon: "layoutTemplate",
        title: "Mobile Experience",
        score: "6.1 / 10",
        status: "Opportunity",
        statusTone: "accent",
      },
      {
        icon: "zap",
        title: "Speed & Performance",
        score: "7.3 / 10",
        status: "Good",
        statusTone: "positive",
      },
    ],
    cta: {
      title: "Ready to Improve Your Conversions?",
      body: "Our experts can help you identify the biggest opportunities and implement proven strategies.",
    },
  },
  {
    id: "trust",
    title: "Trust Leverage",
    icon: "shield",
    overviewBullets: [
      "Strengthen credibility and social proof",
      "Improve transparency and guarantees",
      "Build long-term trust and advocacy",
    ],
    description:
      "Build credibility and confidence at every touchpoint to increase conversions, loyalty, and lifetime value. Identify trust barriers, strengthen proof points, and create transparent experiences that turn prospects into customers and customers into advocates.",
    impactMetrics: [
      {
        icon: "shield",
        value: "64 / 100",
        label: "Trust Score",
        badge: { text: "Above average", tone: "positive" },
      },
      {
        icon: "trend",
        value: "+0.62",
        label: "Potential Trust Lift",
        badge: { text: "High opportunity", tone: "positive" },
      },
      {
        icon: "dollarSign",
        value: "$1.9M",
        label: "Potential Annual Impact",
        badge: { text: "High confidence", tone: "positive" },
      },
      {
        icon: "clock",
        value: "3-6 Months",
        label: "Time to Measurable Impact",
        badge: { text: "Quick wins identified", tone: "accent" },
      },
    ],
    gapAnalysis: [
      {
        element: "Credibility",
        icon: "executive",
        score: 62,
        industryAvg: 54,
        gap: 8,
        impact: "High",
      },
      {
        element: "Transparency",
        icon: "eye",
        score: 58,
        industryAvg: 52,
        gap: 6,
        impact: "High",
      },
      {
        element: "Social Proof",
        icon: "users",
        score: 55,
        industryAvg: 57,
        gap: -2,
        impact: "Medium",
      },
      {
        element: "Security & Privacy",
        icon: "lock",
        score: 66,
        industryAvg: 49,
        gap: 17,
        impact: "High",
      },
      {
        element: "Customer Confidence",
        icon: "customer",
        score: 60,
        industryAvg: 55,
        gap: 5,
        impact: "High",
      },
      {
        element: "Brand Reputation",
        icon: "brand",
        score: 59,
        industryAvg: 53,
        gap: 6,
        impact: "Medium",
      },
    ],
    opportunities: [
      {
        icon: "users",
        title: "Strengthen Reviews & Testimonials",
        description:
          "Collect more authentic reviews and showcase customer stories",
        annualImpact: "+$520K",
        tags: [
          { label: "High Impact", tone: "danger" },
          { label: "Low Effort", tone: "positive" },
        ],
      },
      {
        icon: "fileCheck",
        title: "Improve Transparency & Policies",
        description:
          "Make policies, pricing, and processes clearer and easier to find",
        annualImpact: "+$380K",
        tags: [
          { label: "High Impact", tone: "danger" },
          { label: "Medium Effort", tone: "accent" },
        ],
      },
      {
        icon: "lock",
        title: "Enhance Security Signals",
        description: "Highlight security, certifications, and data protection",
        annualImpact: "+$320K",
        tags: [
          { label: "High Impact", tone: "danger" },
          { label: "Low Effort", tone: "positive" },
        ],
      },
      {
        icon: "shieldCheck",
        title: "Add Trust Badges & Certifications",
        description:
          "Display relevant certifications and trust badges prominently",
        annualImpact: "+$230K",
        tags: [
          { label: "Medium Impact", tone: "warning" },
          { label: "Low Effort", tone: "positive" },
        ],
      },
      {
        icon: "lightbulb",
        title: "Increase Expert Content & Authority",
        description:
          "Publish expert insights, case studies, and media mentions",
        annualImpact: "+$220K",
        tags: [
          { label: "Medium Impact", tone: "warning" },
          { label: "Medium Effort", tone: "accent" },
        ],
      },
    ],
    timeToValue: [
      {
        icon: "rocket",
        title: "Quick Wins",
        timeframe: "0-1 Month",
        value: "+0.15 - 0.30",
        caption: "Trust Lift",
      },
      {
        icon: "zap",
        title: "Short Term",
        timeframe: "1-3 Months",
        value: "+0.30 - 0.50",
        caption: "Trust Lift",
      },
      {
        icon: "trend",
        title: "Medium Term",
        timeframe: "3-6 Months",
        value: "+0.50 - 0.75",
        caption: "Trust Lift",
      },
      {
        icon: "trophy",
        title: "Long Term",
        timeframe: "6+ Months",
        value: "+0.75+",
        caption: "Trust Lift",
      },
    ],
    roadmap: [
      {
        step: 1,
        title: "Diagnose Trust Gaps",
        description:
          "Audit customer feedback, reviews, policies, and experience friction.",
        duration: "1-2 Weeks",
      },
      {
        step: 2,
        title: "Prioritize High-Impact Levers",
        description:
          "Focus on opportunities with the highest trust lift and lowest effort.",
        duration: "1 Week",
      },
      {
        step: 3,
        title: "Design & Create Trust Assets",
        description:
          "Develop content, policies, proof points, and experience improvements.",
        duration: "2-4 Weeks",
      },
      {
        step: 4,
        title: "Implement & Communicate",
        description:
          "Launch changes and clearly communicate to your customers.",
        duration: "2-4 Weeks",
      },
      {
        step: 5,
        title: "Measure & Optimize",
        description:
          "Track trust score, conversions, and retention. Iterate continuously.",
        duration: "Ongoing",
      },
    ],
    roadmapCallout:
      "Following this roadmap can improve your trust score by 0.62 points and unlock up to $1.9M in additional annual revenue.",
    outcomes: [
      "Higher conversion rates and average order value",
      "Increased customer loyalty and repeat purchases",
      "Lower cart abandonment and purchase hesitation",
      "Stronger brand reputation and differentiation",
      "Improved customer lifetime value and retention",
      "More referrals, reviews, and word-of-mouth growth",
      "Reduced support burden and post-purchase issues",
    ],
    successFactors: [
      { icon: "users", label: "Authentic social proof" },
      { icon: "messageCircle", label: "Clear communication" },
      { icon: "check", label: "Consistent experience" },
      { icon: "lock", label: "Secure & protected" },
      { icon: "customer", label: "Empowered customers" },
    ],
    drivers: [
      {
        icon: "users",
        title: "Proof & Social Proof",
        score: "6.6 / 10",
        status: "Opportunity",
        statusTone: "accent",
      },
      {
        icon: "eye",
        title: "Transparency",
        score: "6.3 / 10",
        status: "Opportunity",
        statusTone: "accent",
      },
      {
        icon: "lock",
        title: "Security & Privacy",
        score: "6.8 / 10",
        status: "Strength",
        statusTone: "positive",
      },
      {
        icon: "check",
        title: "Reliability",
        score: "6.4 / 10",
        status: "Opportunity",
        statusTone: "accent",
      },
      {
        icon: "trophy",
        title: "Expertise & Authority",
        score: "6.1 / 10",
        status: "Opportunity",
        statusTone: "accent",
      },
      {
        icon: "messageCircle",
        title: "Empathy & Support",
        score: "6.7 / 10",
        status: "Strength",
        statusTone: "positive",
      },
    ],
    cta: {
      title: "Ready to Strengthen Trust and Grow Revenue?",
      body: "Our experts can help you identify the biggest trust gaps and implement proven strategies.",
    },
  },
  {
    id: "customer",
    title: "Customer Leverage",
    icon: "customer",
    overviewBullets: [
      "Deepen customer understanding",
      "Personalize experience and communication",
      "Increase satisfaction and customer value",
    ],
    description:
      "Deepen customer understanding, personalize experiences, and build stronger relationships to increase satisfaction, lifetime value, and advocacy. Understand your customers better, serve them better, and grow together.",
    impactMetrics: [
      {
        icon: "customer",
        value: "6.7 / 10",
        label: "Customer Health Score",
        badge: { text: "Above average", tone: "positive" },
      },
      {
        icon: "trend",
        value: "+18%",
        label: "Potential CLV Increase",
        badge: { text: "High opportunity", tone: "positive" },
      },
      {
        icon: "dollarSign",
        value: "$1.4M",
        label: "Potential Annual Impact",
        badge: { text: "High confidence", tone: "positive" },
      },
      {
        icon: "clock",
        value: "3-6 Months",
        label: "Time to Measurable Impact",
        badge: { text: "Quick wins identified", tone: "accent" },
      },
    ],
    opportunities: [
      {
        icon: "sparkles",
        title: "Personalize the Customer Experience",
        description:
          "Use data to deliver relevant recommendations and offers.",
        annualImpact: "+$420K",
        tags: [
          { label: "High Impact", tone: "danger" },
          { label: "Medium Effort", tone: "accent" },
        ],
      },
      {
        icon: "messageCircle",
        title: "Improve Customer Communication",
        description:
          "Automate and humanize communications across lifecycle.",
        annualImpact: "+$280K",
        tags: [
          { label: "High Impact", tone: "danger" },
          { label: "Low Effort", tone: "positive" },
        ],
      },
      {
        icon: "users",
        title: "Enhance Customer Support",
        description: "Improve response times and first-contact resolution.",
        annualImpact: "+$240K",
        tags: [
          { label: "High Impact", tone: "danger" },
          { label: "Medium Effort", tone: "accent" },
        ],
      },
      {
        icon: "trophy",
        title: "Build Loyalty & Rewards Programs",
        description: "Incentivize repeat purchases and referrals.",
        annualImpact: "+$200K",
        tags: [
          { label: "Medium Impact", tone: "warning" },
          { label: "Medium Effort", tone: "accent" },
        ],
      },
      {
        icon: "chart",
        title: "Increase Customer Feedback Loop",
        description: "Collect feedback and act on insights continuously.",
        annualImpact: "+$180K",
        tags: [
          { label: "Medium Impact", tone: "warning" },
          { label: "Low Effort", tone: "positive" },
        ],
      },
    ],
    timeToValue: [
      {
        icon: "rocket",
        title: "Quick Wins",
        timeframe: "0-1 Month",
        value: "+5 – 8%",
        caption: "CLV Uplift",
      },
      {
        icon: "zap",
        title: "Short Term",
        timeframe: "1-3 Months",
        value: "+8 – 12%",
        caption: "CLV Uplift",
      },
      {
        icon: "trend",
        title: "Medium Term",
        timeframe: "3-6 Months",
        value: "+12 – 18%",
        caption: "CLV Uplift",
      },
      {
        icon: "trophy",
        title: "Long Term",
        timeframe: "6+ Months",
        value: "+18%+",
        caption: "CLV Uplift",
      },
    ],
    roadmap: [
      {
        step: 1,
        title: "Understand & Segment Customers",
        description:
          "Analyze behavior, value, and needs to create actionable segments.",
        duration: "1-2 Weeks",
      },
      {
        step: 2,
        title: "Identify High-Impact Opportunities",
        description:
          "Prioritize initiatives with the highest potential CLV and retention impact.",
        duration: "1 Week",
      },
      {
        step: 3,
        title: "Design Customer-Centric Solutions",
        description: "Personalize experiences, offers, and communications.",
        duration: "2-4 Weeks",
      },
      {
        step: 4,
        title: "Implement & Integrate",
        description:
          "Launch initiatives and integrate data across touchpoints.",
        duration: "2-4 Weeks",
      },
      {
        step: 5,
        title: "Measure & Optimize",
        description:
          "Track metrics, gather feedback, and continuously refine.",
        duration: "Ongoing",
      },
    ],
    roadmapCallout:
      "Following this roadmap can increase CLV by 18%+ and reduce churn by up to 20%, unlocking up to $1.4M in additional annual value.",
    outcomes: [
      "Higher customer lifetime value (CLV)",
      "Increased repeat purchases and loyalty",
      "Improved satisfaction and Net Promoter Score (NPS)",
      "Reduced churn and retention risk",
      "Stronger customer advocacy and referrals",
      "More effective personalization and engagement",
      "Better alignment between customer needs and offerings",
    ],
    successFactors: [
      { icon: "users", label: "Deep customer understanding" },
      { icon: "sparkles", label: "Relevant experiences" },
      { icon: "messageCircle", label: "Consistent communication" },
      { icon: "brand", label: "Value-driven interactions" },
      { icon: "lifecycle", label: "Continuous improvement" },
    ],
    drivers: [
      {
        icon: "brand",
        title: "Perceived Value",
        score: "6.8 / 10",
        status: "Opportunity",
        statusTone: "accent",
      },
      {
        icon: "product",
        title: "Product Fit",
        score: "6.5 / 10",
        status: "Opportunity",
        statusTone: "accent",
      },
      {
        icon: "check",
        title: "Ease of Doing Business",
        score: "6.3 / 10",
        status: "Opportunity",
        statusTone: "accent",
      },
      {
        icon: "customer",
        title: "Emotional Connection",
        score: "5.9 / 10",
        status: "Gap",
        statusTone: "warning",
      },
      {
        icon: "shield",
        title: "Trust in Brand",
        score: "6.6 / 10",
        status: "Opportunity",
        statusTone: "accent",
      },
      {
        icon: "trophy",
        title: "Advocacy Likelihood",
        score: "5.8 / 10",
        status: "Gap",
        statusTone: "warning",
      },
    ],
    cta: {
      title: "Ready to Leverage Your Customers?",
      body: "Our experts can help you build stronger relationships and grow customer value.",
    },
  },
  {
    id: "visibility",
    title: "Visibility Leverage",
    icon: "eye",
    overviewBullets: [
      "Increase organic and AI visibility",
      "Improve discoverability across channels",
      "Strengthen brand presence and content reach",
    ],
    description:
      "Increase your discoverability across search engines, AI platforms, and digital channels. Improve organic rankings, earn more citations, and own more of the moments your customers are searching for and discovering.",
    impactMetrics: [
      {
        icon: "eye",
        value: "48 / 100",
        label: "Visibility Score",
        badge: { text: "Below average", tone: "danger" },
      },
      {
        icon: "trend",
        value: "+92%",
        label: "Potential Organic Traffic Increase",
        badge: { text: "High opportunity", tone: "positive" },
      },
      {
        icon: "dollarSign",
        value: "$1.3M",
        label: "Potential Annual Impact",
        badge: { text: "High confidence", tone: "positive" },
      },
      {
        icon: "clock",
        value: "3-6 Months",
        label: "Time to Measurable Impact",
        badge: { text: "Quick wins identified", tone: "accent" },
      },
    ],
    gapAnalysis: [
      {
        element: "Organic Rankings",
        icon: "visibility",
        score: 44,
        industryAvg: 56,
        gap: -12,
        impact: "High",
      },
      {
        element: "AI Citations & Mentions",
        icon: "sparkles",
        score: 28,
        industryAvg: 48,
        gap: -20,
        impact: "High",
      },
      {
        element: "Backlink Authority",
        icon: "trend",
        score: 46,
        industryAvg: 58,
        gap: -12,
        impact: "High",
      },
      {
        element: "Technical SEO Health",
        icon: "gauge",
        score: 53,
        industryAvg: 62,
        gap: -9,
        impact: "Medium",
      },
      {
        element: "Content Depth & Coverage",
        icon: "clipboardList",
        score: 42,
        industryAvg: 55,
        gap: -13,
        impact: "High",
      },
      {
        element: "Local & Branded Visibility",
        icon: "globe",
        score: 49,
        industryAvg: 59,
        gap: -10,
        impact: "Medium",
      },
    ],
    opportunities: [
      {
        icon: "layers",
        title: "Build Topical Authority & Content Hubs",
        description:
          "Create comprehensive content clusters around key topics.",
        annualImpact: "+$430K",
        tags: [
          { label: "High Impact", tone: "danger" },
          { label: "Medium Effort", tone: "accent" },
        ],
      },
      {
        icon: "trend",
        title: "Earn High-Quality Backlinks",
        description: "Strengthen domain authority with relevant backlinks.",
        annualImpact: "+$310K",
        tags: [
          { label: "High Impact", tone: "danger" },
          { label: "High Effort", tone: "warning" },
        ],
      },
      {
        icon: "sparkles",
        title: "Improve AI Citations & Brand Mentions",
        description:
          "Increase mentions across AI answers and trusted sources.",
        annualImpact: "+$210K",
        tags: [
          { label: "Medium Impact", tone: "warning" },
          { label: "Medium Effort", tone: "accent" },
        ],
      },
      {
        icon: "operational",
        title: "Fix Technical SEO Issues",
        description: "Improve site speed, indexing, and crawlability.",
        annualImpact: "+$180K",
        tags: [
          { label: "Medium Impact", tone: "warning" },
          { label: "Low Effort", tone: "positive" },
        ],
      },
      {
        icon: "globe",
        title: "Optimize Local & Branded Search Presence",
        description:
          "Increase local pack visibility and branded search volume.",
        annualImpact: "+$170K",
        tags: [
          { label: "Medium Impact", tone: "warning" },
          { label: "Low Effort", tone: "positive" },
        ],
      },
    ],
    timeToValue: [
      {
        icon: "rocket",
        title: "Quick Wins",
        timeframe: "0-3 Months",
        value: "+$120K - $200K",
        caption: "Traffic Potential",
      },
      {
        icon: "zap",
        title: "Short Term",
        timeframe: "3-6 Months",
        value: "+$300K - $520K",
        caption: "Traffic Potential",
      },
      {
        icon: "trend",
        title: "Medium Term",
        timeframe: "6-12 Months",
        value: "+$520K - $900K",
        caption: "Traffic Potential",
      },
      {
        icon: "trophy",
        title: "Long Term",
        timeframe: "12+ Months",
        value: "+$900K+",
        caption: "Traffic Potential",
      },
    ],
    roadmap: [
      {
        step: 1,
        title: "Audit & Benchmark Visibility",
        description:
          "Analyze rankings, backlinks, content, and technical health.",
        duration: "1-2 Weeks",
      },
      {
        step: 2,
        title: "Prioritize High-Impact Opportunities",
        description:
          "Focus on initiatives with the highest traffic potential and lowest effort.",
        duration: "1 Week",
      },
      {
        step: 3,
        title: "Create Content & Authority Plan",
        description:
          "Build topical clusters, pillar pages, and content gap fills.",
        duration: "2-4 Weeks",
      },
      {
        step: 4,
        title: "Implement Technical & On-Page Fixes",
        description:
          "Resolve crawl issues, optimize pages, and improve site speed.",
        duration: "2-4 Weeks",
      },
      {
        step: 5,
        title: "Build Authority & Monitor Results",
        description:
          "Earn links, track rankings, and optimize continuously.",
        duration: "Ongoing",
      },
    ],
    roadmapCallout:
      "Following this roadmap can increase your organic traffic by 92% and unlock up to $1.3M in additional annual value.",
    outcomes: [
      "Significant increase in organic traffic and qualified visits",
      "Higher rankings for valuable keywords",
      "More citations in AI answers and search features",
      "Stronger domain authority and backlink profile",
      "Improved brand visibility and market presence",
      "More leads, sales, and revenue from organic channels",
      "Sustainable visibility growth and compounding results",
    ],
    successFactors: [
      { icon: "clipboardList", label: "Consistent content" },
      { icon: "gauge", label: "Technical excellence" },
      { icon: "trophy", label: "Authority building" },
      { icon: "customer", label: "User-focused experience" },
      { icon: "lifecycle", label: "Continuous optimization" },
    ],
    drivers: [
      {
        icon: "clipboardList",
        title: "Content Relevance",
        score: "5.1 / 10",
        status: "Gap",
        statusTone: "warning",
      },
      {
        icon: "trend",
        title: "Backlink Profile",
        score: "4.8 / 10",
        status: "Major Gap",
        statusTone: "danger",
      },
      {
        icon: "gauge",
        title: "Technical Health",
        score: "6.0 / 10",
        status: "Opportunity",
        statusTone: "accent",
      },
      {
        icon: "sparkles",
        title: "AI Visibility",
        score: "3.9 / 10",
        status: "Major Gap",
        statusTone: "danger",
      },
      {
        icon: "experience",
        title: "User Experience",
        score: "6.2 / 10",
        status: "Opportunity",
        statusTone: "accent",
      },
      {
        icon: "brand",
        title: "Brand Authority",
        score: "5.3 / 10",
        status: "Gap",
        statusTone: "warning",
      },
      {
        icon: "globe",
        title: "Local Presence",
        score: "6.1 / 10",
        status: "Opportunity",
        statusTone: "accent",
      },
    ],
    cta: {
      title: "Ready to Increase Your Visibility?",
      body: "Our experts can help you capture more demand and grow visibility across all key channels.",
    },
  },
  {
    id: "positioning",
    title: "Positioning Leverage",
    icon: "target",
    overviewBullets: [
      "Differentiate clearly in your market",
      "Own a compelling position in the customer's mind",
      "Strengthen value proposition and messaging",
    ],
    description:
      "Differentiate clearly in the minds of your ideal customers and become the obvious choice. Strengthen your unique value, clarify your market position, and own the category narrative so you stand out, win trust, and drive preference.",
    impactMetrics: [
      {
        icon: "target",
        value: "58 / 100",
        label: "Positioning Score",
        badge: { text: "Below average", tone: "danger" },
      },
      {
        icon: "trend",
        value: "+27%",
        label: "Potential Preference Increase",
        badge: { text: "High opportunity", tone: "positive" },
      },
      {
        icon: "dollarSign",
        value: "$1.6M",
        label: "Potential Annual Impact",
        badge: { text: "High confidence", tone: "positive" },
      },
      {
        icon: "clock",
        value: "3-6 Months",
        label: "Time to Measurable Impact",
        badge: { text: "Quick wins identified", tone: "accent" },
      },
    ],
    gapAnalysis: [
      {
        element: "Value Proposition Clarity",
        icon: "lightbulb",
        score: 53,
        industryAvg: 67,
        gap: -14,
        impact: "High",
      },
      {
        element: "Differentiation Strength",
        icon: "sparkles",
        score: 46,
        industryAvg: 60,
        gap: -14,
        impact: "High",
      },
      {
        element: "Category Ownership",
        icon: "trophy",
        score: 41,
        industryAvg: 58,
        gap: -17,
        impact: "High",
      },
      {
        element: "Brand Narrative",
        icon: "brand",
        score: 49,
        industryAvg: 59,
        gap: -10,
        impact: "Medium",
      },
      {
        element: "Messaging Consistency",
        icon: "messageCircle",
        score: 56,
        industryAvg: 63,
        gap: -7,
        impact: "Medium",
      },
      {
        element: "Market Perception",
        icon: "binoculars",
        score: 52,
        industryAvg: 64,
        gap: -12,
        impact: "High",
      },
    ],
    opportunities: [
      {
        icon: "lightbulb",
        title: "Clarify & Strengthen Value Proposition",
        description:
          "Articulate clear, outcome-driven value that sets you apart.",
        annualImpact: "+$420K",
        tags: [
          { label: "High Impact", tone: "danger" },
          { label: "Medium Effort", tone: "accent" },
        ],
      },
      {
        icon: "sparkles",
        title: "Differentiate with Unique Proof Points",
        description:
          "Highlight proprietary methods, results, and customer wins.",
        annualImpact: "+$380K",
        tags: [
          { label: "High Impact", tone: "danger" },
          { label: "Medium Effort", tone: "accent" },
        ],
      },
      {
        icon: "crosshair",
        title: "Own a Specific Market Niche",
        description:
          "Narrow and deepen your focus to dominate a sub-category.",
        annualImpact: "+$280K",
        tags: [
          { label: "Medium Impact", tone: "warning" },
          { label: "Low Effort", tone: "positive" },
        ],
      },
      {
        icon: "brand",
        title: "Refine Brand Story & Messaging",
        description:
          "Build a compelling narrative that resonates with your audience.",
        annualImpact: "+$240K",
        tags: [
          { label: "Medium Impact", tone: "warning" },
          { label: "Medium Effort", tone: "accent" },
        ],
      },
      {
        icon: "scale",
        title: "Strengthen Competitive Contrast",
        description: "Make differences obvious compared to alternatives.",
        annualImpact: "+$180K",
        tags: [
          { label: "Medium Impact", tone: "warning" },
          { label: "Low Effort", tone: "positive" },
        ],
      },
    ],
    timeToValue: [
      {
        icon: "rocket",
        title: "Quick Wins",
        timeframe: "0-1 Month",
        value: "+$160K – $300K",
        caption: "Positioning Uplift",
      },
      {
        icon: "zap",
        title: "Short Term",
        timeframe: "1-3 Months",
        value: "+$300K – $600K",
        caption: "Positioning Uplift",
      },
      {
        icon: "trend",
        title: "Medium Term",
        timeframe: "3-6 Months",
        value: "+$600K – $1.0M",
        caption: "Positioning Uplift",
      },
      {
        icon: "trophy",
        title: "Long Term",
        timeframe: "6+ Months",
        value: "+$1.0M+",
        caption: "Positioning Uplift",
      },
    ],
    roadmap: [
      {
        step: 1,
        title: "Audit & Benchmark Positioning",
        description:
          "Analyze competitor positioning, messaging, and market perception.",
        duration: "1-2 Weeks",
      },
      {
        step: 2,
        title: "Define & Test Value Proposition",
        description:
          "Craft clear value statements and validate with target audience.",
        duration: "1-2 Weeks",
      },
      {
        step: 3,
        title: "Develop Differentiation Framework",
        description:
          "Build proof points, reasons to believe, and competitive contrast.",
        duration: "2-4 Weeks",
      },
      {
        step: 4,
        title: "Refine Messaging & Brand Narrative",
        description:
          "Align messaging across website, products, and key channels.",
        duration: "2-4 Weeks",
      },
      {
        step: 5,
        title: "Implement, Monitor & Optimize",
        description:
          "Track perception, preference, and share of voice continuously.",
        duration: "Ongoing",
      },
    ],
    roadmapCallout:
      "Following this roadmap can increase preference by 27% and unlock up to $1.6M in additional annual value.",
    outcomes: [
      "Stronger differentiation and market presence",
      "Increased customer preference and brand recall",
      "Higher conversion rates and win rates",
      "Reduced price sensitivity and stronger margins",
      "More relevant inbound leads and qualified traffic",
      "Clearer positioning that attracts ideal customers",
      "Stronger competitive advantage and category influence",
    ],
    successFactors: [
      { icon: "lightbulb", label: "Clear value proposition" },
      { icon: "sparkles", label: "Differentiated messaging" },
      { icon: "brand", label: "Consistent brand story" },
      { icon: "scale", label: "Competitive contrast" },
      { icon: "target", label: "Market relevance" },
    ],
    drivers: [
      {
        icon: "lightbulb",
        title: "Value Clarity",
        score: "5.3 / 10",
        status: "Gap",
        statusTone: "warning",
      },
      {
        icon: "sparkles",
        title: "Differentiation",
        score: "4.6 / 10",
        status: "Major Gap",
        statusTone: "danger",
      },
      {
        icon: "trophy",
        title: "Category Perception",
        score: "4.2 / 10",
        status: "Major Gap",
        statusTone: "danger",
      },
      {
        icon: "brand",
        title: "Brand Story",
        score: "5.1 / 10",
        status: "Gap",
        statusTone: "warning",
      },
      {
        icon: "scale",
        title: "Competitive Contrast",
        score: "4.7 / 10",
        status: "Major Gap",
        statusTone: "danger",
      },
      {
        icon: "customer",
        title: "Audience Relevance",
        score: "8.2 / 10",
        status: "Opportunity",
        statusTone: "accent",
      },
      {
        icon: "check",
        title: "Consistency",
        score: "5.8 / 10",
        status: "Gap",
        statusTone: "warning",
      },
    ],
    cta: {
      title: "Ready to Strengthen Your Position?",
      body: "Our experts can help you clarify your value, own your category, and win more customers.",
    },
  },
  {
    id: "product-offer",
    title: "Product-Offer Leverage",
    icon: "product",
    overviewBullets: [
      "Optimize product-market fit and assortment",
      "Refine offers, bundles, and value architecture",
      "Increase perceived value and profitability",
    ],
    description:
      "Create offers and product experiences that better match customer needs, increase perceived value, and drive higher conversion, average order value, and lifetime value. The right product, the right offer, at the right time—delivered with clarity.",
    impactMetrics: [
      {
        icon: "product",
        value: "62 / 100",
        label: "Product-Offer Score",
        badge: { text: "Slightly above average", tone: "positive" },
      },
      {
        icon: "trend",
        value: "+34%",
        label: "Potential AOV Increase",
        badge: { text: "High opportunity", tone: "positive" },
      },
      {
        icon: "dollarSign",
        value: "$2.2M",
        label: "Potential Annual Impact",
        badge: { text: "High confidence", tone: "positive" },
      },
      {
        icon: "clock",
        value: "3-6 Months",
        label: "Time to Measurable Impact",
        badge: { text: "Quick wins identified", tone: "accent" },
      },
    ],
    gapAnalysis: [
      {
        element: "Offer Relevance",
        icon: "target",
        score: 57,
        industryAvg: 62,
        gap: -5,
        impact: "Medium",
      },
      {
        element: "Product Assortment",
        icon: "layers",
        score: 55,
        industryAvg: 60,
        gap: -5,
        impact: "Medium",
      },
      {
        element: "Value Perception",
        icon: "brand",
        score: 48,
        industryAvg: 58,
        gap: -10,
        impact: "High",
      },
      {
        element: "Pricing & Packaging",
        icon: "percent",
        score: 46,
        industryAvg: 56,
        gap: -10,
        impact: "High",
      },
      {
        element: "Differentiation",
        icon: "sparkles",
        score: 44,
        industryAvg: 55,
        gap: -11,
        impact: "High",
      },
      {
        element: "Offer Clarity",
        icon: "eye",
        score: 52,
        industryAvg: 61,
        gap: -9,
        impact: "Medium",
      },
    ],
    opportunities: [
      {
        icon: "product",
        title: "Create High-Value Product Bundles",
        description:
          "Increase AOV and perceived value with curated bundles",
        annualImpact: "+$640K",
        tags: [
          { label: "High Impact", tone: "danger" },
          { label: "Medium Effort", tone: "accent" },
        ],
      },
      {
        icon: "percent",
        title: "Optimize Pricing & Packaging Strategy",
        description: "Improve margins and price perception",
        annualImpact: "+$520K",
        tags: [
          { label: "High Impact", tone: "danger" },
          { label: "Medium Effort", tone: "accent" },
        ],
      },
      {
        icon: "layers",
        title: "Expand Assortment in Key Categories",
        description: "Fill product gaps and capture more demand",
        annualImpact: "+$380K",
        tags: [
          { label: "Medium Impact", tone: "warning" },
          { label: "Medium Effort", tone: "accent" },
        ],
      },
      {
        icon: "sparkles",
        title: "Improve Product Differentiation",
        description: "Stand out with unique features and benefits",
        annualImpact: "+$320K",
        tags: [
          { label: "Medium Impact", tone: "warning" },
          { label: "Low Effort", tone: "positive" },
        ],
      },
      {
        icon: "messageCircle",
        title: "Clarify Offers & Value Communication",
        description: "Make offers easier to understand and act on",
        annualImpact: "+$240K",
        tags: [
          { label: "Medium Impact", tone: "warning" },
          { label: "Low Effort", tone: "positive" },
        ],
      },
    ],
    timeToValue: [
      {
        icon: "rocket",
        title: "Quick Wins",
        timeframe: "0–3 Months",
        value: "+$220K – $430K",
        caption: "AOV & Value Uplift",
      },
      {
        icon: "zap",
        title: "Short Term",
        timeframe: "3–6 Months",
        value: "+$430K – $900K",
        caption: "AOV & Value Uplift",
      },
      {
        icon: "trend",
        title: "Medium Term",
        timeframe: "6–12 Months",
        value: "+$900K – $1.6M",
        caption: "AOV & Value Uplift",
      },
      {
        icon: "trophy",
        title: "Long Term",
        timeframe: "12+ Months",
        value: "+$1.6M+",
        caption: "AOV & Value Uplift",
      },
    ],
    roadmap: [
      {
        step: 1,
        title: "Audit & Benchmark Offers",
        description:
          "Review offers, pricing, packaging, and competitor positioning.",
        duration: "1-2 Weeks",
      },
      {
        step: 2,
        title: "Identify High-Impact Offer Opportunities",
        description:
          "Prioritize wins with the highest potential AOV and margin impact.",
        duration: "1 Week",
      },
      {
        step: 3,
        title: "Design & Test Offer Solutions",
        description:
          "Create bundles, packaging, and messaging variations. Run tests.",
        duration: "2-4 Weeks",
      },
      {
        step: 4,
        title: "Implement & Launch",
        description: "Roll out winning offers and update product pages.",
        duration: "2-4 Weeks",
      },
      {
        step: 5,
        title: "Measure & Optimize",
        description:
          "Track performance, refine offers, and expand successful models.",
        duration: "Ongoing",
      },
    ],
    roadmapCallout:
      "Following this roadmap can increase AOV by 34% and unlock up to $2.2M in additional annual value.",
    outcomes: [
      "Higher average order value and order frequency",
      "Increased conversion rate from more compelling offers",
      "Improved margin and price realization",
      "Greater customer satisfaction and product fit",
      "Stronger differentiation and competitive advantage",
      "More repeat purchases and customer lifetime value",
      "Better inventory turnover and reduced stockouts",
    ],
    successFactors: [
      { icon: "customer", label: "Customer insight" },
      { icon: "sparkles", label: "Compelling offers" },
      { icon: "target", label: "Clear value proposition" },
      { icon: "crosshair", label: "Continuous testing" },
      { icon: "chart", label: "Data-driven optimization" },
    ],
    drivers: [
      {
        icon: "target",
        title: "Offer Relevance",
        score: "6.1 / 10",
        status: "Opportunity",
        statusTone: "accent",
      },
      {
        icon: "layers",
        title: "Assortment Depth",
        score: "5.0 / 10",
        status: "Gap",
        statusTone: "warning",
      },
      {
        icon: "brand",
        title: "Value Perception",
        score: "4.8 / 10",
        status: "Major Gap",
        statusTone: "danger",
      },
      {
        icon: "percent",
        title: "Pricing Power",
        score: "5.2 / 10",
        status: "Gap",
        statusTone: "warning",
      },
      {
        icon: "check",
        title: "Product Quality",
        score: "6.3 / 10",
        status: "Opportunity",
        statusTone: "accent",
      },
      {
        icon: "eye",
        title: "Offer Clarity",
        score: "6.0 / 10",
        status: "Opportunity",
        statusTone: "accent",
      },
      {
        icon: "sparkles",
        title: "Differentiation",
        score: "4.7 / 10",
        status: "Major Gap",
        statusTone: "danger",
      },
    ],
    cta: {
      title: "Ready to Optimize Your Products & Offers?",
      body: "Our experts can help you create offers that convert, increase AOV, and drive profitable growth.",
    },
  },
  {
    id: "retention",
    title: "Retention Leverage",
    icon: "lifecycle",
    overviewBullets: [
      "Reduce churn and increase loyalty",
      "Improve onboarding and engagement",
      "Grow repeat purchase and LTV",
    ],
    description:
      "Increase customer lifetime value by keeping more customers, growing loyalty, and turning one-time buyers into repeat customers and advocates. Reduce churn, increase retention, and build long-term customer relationships.",
    impactMetrics: [
      {
        icon: "lifecycle",
        value: "54 / 100",
        label: "Retention Score",
        badge: { text: "Below average", tone: "danger" },
      },
      {
        icon: "trend",
        value: "+48%",
        label: "Potential LTV Increase",
        badge: { text: "High opportunity", tone: "positive" },
      },
      {
        icon: "dollarSign",
        value: "$1.7M",
        label: "Potential Annual Impact",
        badge: { text: "High confidence", tone: "positive" },
      },
      {
        icon: "clock",
        value: "3-6 Months",
        label: "Time to Measurable Impact",
        badge: { text: "Quick wins identified", tone: "accent" },
      },
    ],
    gapAnalysis: [
      {
        element: "Repeat Purchase Rate",
        icon: "lifecycle",
        score: 42,
        industryAvg: 54,
        gap: -12,
        impact: "High",
      },
      {
        element: "Customer Retention Rate",
        icon: "users",
        score: 46,
        industryAvg: 56,
        gap: -10,
        impact: "High",
      },
      {
        element: "Churn Rate (Inverted)",
        icon: "warning",
        score: 38,
        industryAvg: 52,
        gap: -14,
        impact: "High",
      },
      {
        element: "Customer Loyalty",
        icon: "trophy",
        score: 45,
        industryAvg: 58,
        gap: -13,
        impact: "High",
      },
      {
        element: "Lifecycle Engagement",
        icon: "activity",
        score: 47,
        industryAvg: 55,
        gap: -8,
        impact: "Medium",
      },
      {
        element: "Win-Back Effectiveness",
        icon: "rocket",
        score: 41,
        industryAvg: 53,
        gap: -12,
        impact: "High",
      },
    ],
    opportunities: [
      {
        icon: "check",
        title: "Optimize Post-Purchase Experience",
        description:
          "Improve delivery, onboarding, and follow-up after purchase.",
        annualImpact: "+$460K",
        tags: [
          { label: "High Impact", tone: "danger" },
          { label: "Medium Effort", tone: "accent" },
        ],
      },
      {
        icon: "messageCircle",
        title: "Build Lifecycle Email & SMS Flows",
        description:
          "Automate nurture and re-engagement across the journey.",
        annualImpact: "+$420K",
        tags: [
          { label: "High Impact", tone: "danger" },
          { label: "Medium Effort", tone: "accent" },
        ],
      },
      {
        icon: "trophy",
        title: "Launch Loyalty & Rewards Program",
        description: "Incentivize repeat purchases and advocacy.",
        annualImpact: "+$330K",
        tags: [
          { label: "Medium Impact", tone: "warning" },
          { label: "Medium Effort", tone: "accent" },
        ],
      },
      {
        icon: "users",
        title: "Improve Customer Support & Resolution",
        description: "Faster resolution and better support experience.",
        annualImpact: "+$260K",
        tags: [
          { label: "Medium Impact", tone: "warning" },
          { label: "Low Effort", tone: "positive" },
        ],
      },
      {
        icon: "rocket",
        title: "Win Back At-Risk Customers",
        description:
          "Identify and re-engage customers before they churn.",
        annualImpact: "+$230K",
        tags: [
          { label: "Medium Impact", tone: "warning" },
          { label: "Low Effort", tone: "positive" },
        ],
      },
    ],
    timeToValue: [
      {
        icon: "rocket",
        title: "Quick Wins",
        timeframe: "0-3 Months",
        value: "+$140K – $280K",
        caption: "LTV Uplift",
      },
      {
        icon: "zap",
        title: "Short Term",
        timeframe: "3-6 Months",
        value: "+$280K – $700K",
        caption: "LTV Uplift",
      },
      {
        icon: "trend",
        title: "Medium Term",
        timeframe: "6-12 Months",
        value: "+$700K – $1.2M",
        caption: "LTV Uplift",
      },
      {
        icon: "trophy",
        title: "Long Term",
        timeframe: "12+ Months",
        value: "+$1.2M+",
        caption: "LTV Uplift",
      },
    ],
    roadmap: [
      {
        step: 1,
        title: "Analyze & Diagnose Retention Gaps",
        description:
          "Review cohort data, journey drop-offs, and churn reasons.",
        duration: "1-2 Weeks",
      },
      {
        step: 2,
        title: "Prioritize High-Impact Initiatives",
        description:
          "Focus on actions with the highest LTV impact and lowest effort.",
        duration: "1 Week",
      },
      {
        step: 3,
        title: "Design Retention & Lifecycle Programs",
        description:
          "Create email/SMS flows, loyalty program, and onboarding improvements.",
        duration: "2-4 Weeks",
      },
      {
        step: 4,
        title: "Implement & Launch",
        description:
          "Deploy programs, automate communications, and train teams.",
        duration: "2-4 Weeks",
      },
      {
        step: 5,
        title: "Measure & Optimize",
        description:
          "Track retention, cohorts, and LTV. Iterate continually.",
        duration: "Ongoing",
      },
    ],
    roadmapCallout:
      "Following this roadmap can increase LTV by 48% and unlock up to $1.7M in additional annual value.",
    outcomes: [
      "Higher customer lifetime value (LTV)",
      "Increased repeat purchase rate and frequency",
      "Lower churn and improved customer retention",
      "Stronger customer loyalty and brand advocacy",
      "More stable and predictable revenue",
      "Improved engagement across the customer lifecycle",
      "Reduced acquisition costs through increased retention",
    ],
    successFactors: [
      { icon: "experience", label: "Exceptional customer experience" },
      { icon: "messageCircle", label: "Consistent communication" },
      { icon: "sparkles", label: "Relevant offers & incentives" },
      { icon: "check", label: "Easy issue resolution" },
      { icon: "lifecycle", label: "Continuous optimization" },
    ],
    drivers: [
      {
        icon: "experience",
        title: "Customer Experience",
        score: "6.1 / 10",
        status: "Opportunity",
        statusTone: "accent",
      },
      {
        icon: "product",
        title: "Product Satisfaction",
        score: "5.4 / 10",
        status: "Gap",
        statusTone: "warning",
      },
      {
        icon: "rocket",
        title: "Onboarding Quality",
        score: "4.8 / 10",
        status: "Major Gap",
        statusTone: "danger",
      },
      {
        icon: "users",
        title: "Customer Support",
        score: "5.2 / 10",
        status: "Gap",
        statusTone: "warning",
      },
      {
        icon: "activity",
        title: "Engagement Frequency",
        score: "4.9 / 10",
        status: "Major Gap",
        statusTone: "danger",
      },
      {
        icon: "brand",
        title: "Perceived Value",
        score: "6.0 / 10",
        status: "Opportunity",
        statusTone: "accent",
      },
      {
        icon: "shield",
        title: "Brand Trust",
        score: "6.3 / 10",
        status: "Opportunity",
        statusTone: "accent",
      },
    ],
    cta: {
      title: "Ready to Increase Customer Retention & LTV?",
      body: "Our experts can help you build loyalty, reduce churn, and grow lifetime value.",
    },
  },
  {
    id: "operational",
    title: "Operational Leverage",
    icon: "operational",
    overviewBullets: [
      "Improve efficiency and reduce costs",
      "Optimize workflows, tools, and processes",
      "Increase scalability and operational excellence",
    ],
    description:
      "Increase efficiency, reduce costs, and scale your operations without increasing headcount. Streamline processes, automate repetitive work, and build operational systems that drive consistent performance.",
    impactMetrics: [
      {
        icon: "operational",
        value: "60 / 100",
        label: "Operational Score",
        badge: { text: "Slightly above average", tone: "positive" },
      },
      {
        icon: "trend",
        value: "+32%",
        label: "Potential Efficiency Increase",
        badge: { text: "High opportunity", tone: "positive" },
      },
      {
        icon: "dollarSign",
        value: "$1.4M",
        label: "Potential Annual Impact",
        badge: { text: "High confidence", tone: "positive" },
      },
      {
        icon: "clock",
        value: "3-6 Months",
        label: "Time to Measurable Impact",
        badge: { text: "Quick wins identified", tone: "accent" },
      },
    ],
    gapAnalysis: [
      {
        element: "Process Efficiency",
        icon: "activity",
        score: 54,
        industryAvg: 62,
        gap: -8,
        impact: "Medium",
      },
      {
        element: "Workflow Automation",
        icon: "zap",
        score: 47,
        industryAvg: 59,
        gap: -12,
        impact: "High",
      },
      {
        element: "System Integration",
        icon: "layers",
        score: 45,
        industryAvg: 57,
        gap: -12,
        impact: "High",
      },
      {
        element: "Data & Reporting",
        icon: "chart",
        score: 49,
        industryAvg: 61,
        gap: -12,
        impact: "Medium",
      },
      {
        element: "Resource Utilization",
        icon: "users",
        score: 56,
        industryAvg: 63,
        gap: -7,
        impact: "Medium",
      },
      {
        element: "Operational Scalability",
        icon: "rocket",
        score: 41,
        industryAvg: 54,
        gap: -13,
        impact: "High",
      },
    ],
    opportunities: [
      {
        icon: "zap",
        title: "Automate Repetitive & Manual Workflows",
        description: "Eliminate manual tasks and reduce cycle time.",
        annualImpact: "+$420K",
        tags: [
          { label: "High Impact", tone: "danger" },
          { label: "Medium Effort", tone: "accent" },
        ],
      },
      {
        icon: "layers",
        title: "Integrate Core Systems & Data",
        description: "Connect systems to reduce friction and errors.",
        annualImpact: "+$320K",
        tags: [
          { label: "High Impact", tone: "danger" },
          { label: "Medium Effort", tone: "accent" },
        ],
      },
      {
        icon: "clipboardList",
        title: "Standardize & Optimize Key Processes",
        description: "Build repeatable processes and remove bottlenecks.",
        annualImpact: "+$280K",
        tags: [
          { label: "High Impact", tone: "danger" },
          { label: "Low Effort", tone: "positive" },
        ],
      },
      {
        icon: "gauge",
        title: "Improve Reporting & Decision Visibility",
        description: "Create real-time dashboards and KPI visibility.",
        annualImpact: "+$220K",
        tags: [
          { label: "Medium Impact", tone: "warning" },
          { label: "Low Effort", tone: "positive" },
        ],
      },
      {
        icon: "users",
        title: "Improve Resource Planning & Capacity",
        description: "Optimize workload balance and capacity planning.",
        annualImpact: "+$180K",
        tags: [
          { label: "Medium Impact", tone: "warning" },
          { label: "Medium Effort", tone: "accent" },
        ],
      },
    ],
    timeToValue: [
      {
        icon: "rocket",
        title: "Quick Wins",
        timeframe: "0-3 Months",
        value: "+$120K – $240K",
        caption: "Cost Savings",
      },
      {
        icon: "zap",
        title: "Short Term",
        timeframe: "3-6 Months",
        value: "+$240K – $520K",
        caption: "Efficiency Gains",
      },
      {
        icon: "trend",
        title: "Medium Term",
        timeframe: "6-12 Months",
        value: "+$520K – $1.0M",
        caption: "Operational Impact",
      },
      {
        icon: "trophy",
        title: "Long Term",
        timeframe: "12+ Months",
        value: "+$1.0M+",
        caption: "Scalable Efficiency",
      },
    ],
    roadmap: [
      {
        step: 1,
        title: "Diagnose & Benchmark Operations",
        description:
          "Map current-state processes, systems, and performance.",
        duration: "1-2 Weeks",
      },
      {
        step: 2,
        title: "Prioritize High-Impact Improvements",
        description:
          "Focus on initiatives with the highest efficiency and cost impact.",
        duration: "1 Week",
      },
      {
        step: 3,
        title: "Design Optimized Workflows",
        description:
          "Create future-state processes and automation opportunities.",
        duration: "2-4 Weeks",
      },
      {
        step: 4,
        title: "Implement & Automate",
        description:
          "Deploy tools, integrations, and workflow automation.",
        duration: "2-6 Weeks",
      },
      {
        step: 5,
        title: "Measure & Optimize",
        description:
          "Track KPIs, refine processes, and drive continuous improvement.",
        duration: "Ongoing",
      },
    ],
    roadmapCallout:
      "Following this roadmap can improve efficiency by 32% and unlock up to $1.4M in additional annual value.",
    outcomes: [
      "Lower operating costs and improved margins",
      "Increased process efficiency and productivity",
      "Faster cycle times and improved throughput",
      "Reduced errors, rework, and operational risk",
      "Better data visibility and decision accuracy",
      "Improved scalability without additional headcount",
      "Stronger operational control and consistency",
    ],
    successFactors: [
      { icon: "clipboardList", label: "Clear processes" },
      { icon: "zap", label: "Smart automation" },
      { icon: "layers", label: "Integrated systems" },
      { icon: "chart", label: "Data visibility" },
      { icon: "lifecycle", label: "Continuous optimization" },
    ],
    drivers: [
      {
        icon: "clipboardList",
        title: "Process Maturity",
        score: "5.0 / 10",
        status: "Gap",
        statusTone: "warning",
      },
      {
        icon: "zap",
        title: "Automation Level",
        score: "4.8 / 10",
        status: "Major Gap",
        statusTone: "danger",
      },
      {
        icon: "layers",
        title: "System Integration",
        score: "4.6 / 10",
        status: "Major Gap",
        statusTone: "danger",
      },
      {
        icon: "eye",
        title: "Data Visibility",
        score: "5.2 / 10",
        status: "Gap",
        statusTone: "warning",
      },
      {
        icon: "users",
        title: "Team Efficiency",
        score: "6.1 / 10",
        status: "Opportunity",
        statusTone: "accent",
      },
      {
        icon: "rocket",
        title: "Scalability",
        score: "4.7 / 10",
        status: "Major Gap",
        statusTone: "danger",
      },
      {
        icon: "banknote",
        title: "Cost Efficiency",
        score: "6.0 / 10",
        status: "Opportunity",
        statusTone: "accent",
      },
    ],
    cta: {
      title: "Ready to Optimize Your Operations?",
      body: "Our experts can help you streamline processes, reduce costs, and build scalable systems.",
    },
  },
  {
    id: "decision",
    title: "Decision Leverage",
    icon: "compass",
    overviewBullets: [
      "Turn data into clear strategic actions",
      "Prioritize high-impact opportunities",
      "Speed up decisions and improve outcomes",
    ],
    description:
      "Make better decisions, faster, with confidence and clarity. Turn data and insights into clear options, reduce uncertainty, and align your organization around the right priorities and actions.",
    impactMetrics: [
      {
        icon: "compass",
        value: "63 / 100",
        label: "Decision Score",
        badge: { text: "Slightly above average", tone: "positive" },
      },
      {
        icon: "trend",
        value: "+0.41",
        label: "Potential Decision Quality Lift",
        badge: { text: "High opportunity", tone: "positive" },
      },
      {
        icon: "dollarSign",
        value: "$1.5M",
        label: "Potential Annual Impact",
        badge: { text: "High confidence", tone: "positive" },
      },
      {
        icon: "clock",
        value: "3-6 Months",
        label: "Time to Measurable Impact",
        badge: { text: "Quick wins identified", tone: "accent" },
      },
    ],
    gapAnalysis: [
      {
        element: "Decision Clarity",
        icon: "eye",
        score: 56,
        industryAvg: 63,
        gap: -7,
        impact: "Medium",
      },
      {
        element: "Data Quality & Access",
        icon: "chart",
        score: 48,
        industryAvg: 58,
        gap: -10,
        impact: "High",
      },
      {
        element: "Insight-to-Action Speed",
        icon: "zap",
        score: 44,
        industryAvg: 55,
        gap: -11,
        impact: "High",
      },
      {
        element: "Priority Alignment",
        icon: "target",
        score: 50,
        industryAvg: 60,
        gap: -10,
        impact: "High",
      },
      {
        element: "Scenario Planning",
        icon: "binoculars",
        score: 42,
        industryAvg: 53,
        gap: -11,
        impact: "Medium",
      },
      {
        element: "Decision Governance",
        icon: "scale",
        score: 53,
        industryAvg: 62,
        gap: -9,
        impact: "Medium",
      },
    ],
    opportunities: [
      {
        icon: "clipboardList",
        title: "Implement Decision Frameworks",
        description: "Standardize how decisions are evaluated and made.",
        annualImpact: "+$420K",
        tags: [
          { label: "High Impact", tone: "danger" },
          { label: "Medium Effort", tone: "accent" },
        ],
      },
      {
        icon: "chart",
        title: "Improve Data Quality & Availability",
        description: "Ensure the right data is accurate and accessible.",
        annualImpact: "+$320K",
        tags: [
          { label: "High Impact", tone: "danger" },
          { label: "Medium Effort", tone: "accent" },
        ],
      },
      {
        icon: "users",
        title: "Align Priorities Across Stakeholders",
        description: "Create clarity and alignment on what matters most.",
        annualImpact: "+$280K",
        tags: [
          { label: "High Impact", tone: "danger" },
          { label: "Medium Effort", tone: "accent" },
        ],
      },
      {
        icon: "binoculars",
        title: "Build Scenario Planning Capability",
        description: "Prepare for multiple futures and reduce uncertainty.",
        annualImpact: "+$240K",
        tags: [
          { label: "Medium Impact", tone: "warning" },
          { label: "Low Effort", tone: "positive" },
        ],
      },
      {
        icon: "scale",
        title: "Create Decision Governance & Review Cadence",
        description: "Ensure consistent accountability and learning.",
        annualImpact: "+$220K",
        tags: [
          { label: "Medium Impact", tone: "warning" },
          { label: "Low Effort", tone: "positive" },
        ],
      },
    ],
    timeToValue: [
      {
        icon: "rocket",
        title: "Quick Wins",
        timeframe: "0-3 Months",
        value: "+$140K – $260K",
        caption: "Decision Impact",
      },
      {
        icon: "zap",
        title: "Short Term",
        timeframe: "3-6 Months",
        value: "+$260K – $560K",
        caption: "Decision Impact",
      },
      {
        icon: "trend",
        title: "Medium Term",
        timeframe: "6-12 Months",
        value: "+$560K – $1.1M",
        caption: "Decision Impact",
      },
      {
        icon: "trophy",
        title: "Long Term",
        timeframe: "12+ Months",
        value: "+$1.1M+",
        caption: "Decision Impact",
      },
    ],
    roadmap: [
      {
        step: 1,
        title: "Assess & Benchmark Decisions",
        description:
          "Audit recent decisions, outcomes, and decision-making process.",
        duration: "1-2 Weeks",
      },
      {
        step: 2,
        title: "Prioritize High-Impact Decision Levers",
        description:
          "Focus on the levers with the biggest impact and lowest complexity.",
        duration: "1 Week",
      },
      {
        step: 3,
        title: "Design Decision Frameworks",
        description:
          "Create frameworks, scorecards, and decision rules.",
        duration: "2-4 Weeks",
      },
      {
        step: 4,
        title: "Implement & Operationalize",
        description:
          "Roll out frameworks, tools, and decision cadences.",
        duration: "2-6 Weeks",
      },
      {
        step: 5,
        title: "Measure & Improve",
        description:
          "Track outcomes, refine frameworks, and build learning loops.",
        duration: "Ongoing",
      },
    ],
    roadmapCallout:
      "Following this roadmap can improve decision quality by 41% and unlock up to $1.5M in additional annual value.",
    outcomes: [
      "Better decisions with higher confidence",
      "Faster decision-making and execution",
      "Improved resource allocation and ROI",
      "Reduced risk and decision regret",
      "Stronger alignment across teams and leadership",
      "Continuous learning and decision improvement",
      "Sustainable competitive advantage",
    ],
    successFactors: [
      { icon: "chart", label: "High-quality data" },
      { icon: "clipboardList", label: "Clear decision frameworks" },
      { icon: "users", label: "Aligned stakeholders" },
      { icon: "check", label: "Accountability & cadence" },
      { icon: "lifecycle", label: "Continuous learning" },
    ],
    drivers: [
      {
        icon: "target",
        title: "Clarity & Focus",
        score: "6.0 / 10",
        status: "Opportunity",
        statusTone: "accent",
      },
      {
        icon: "chart",
        title: "Data Quality",
        score: "4.7 / 10",
        status: "Major Gap",
        statusTone: "danger",
      },
      {
        icon: "lightbulb",
        title: "Insight Quality",
        score: "5.6 / 10",
        status: "Gap",
        statusTone: "warning",
      },
      {
        icon: "zap",
        title: "Speed of Decisions",
        score: "4.8 / 10",
        status: "Major Gap",
        statusTone: "danger",
      },
      {
        icon: "users",
        title: "Stakeholder Alignment",
        score: "5.2 / 10",
        status: "Gap",
        statusTone: "warning",
      },
      {
        icon: "shield",
        title: "Risk Management",
        score: "5.7 / 10",
        status: "Opportunity",
        statusTone: "accent",
      },
      {
        icon: "lifecycle",
        title: "Learning & Feedback",
        score: "5.3 / 10",
        status: "Gap",
        statusTone: "warning",
      },
    ],
    cta: {
      title: "Ready to Make Better Decisions?",
      body: "Our experts can help you build clarity, reduce uncertainty, and make decisions that drive results.",
    },
  },
  {
    id: "governance",
    title: "Governance Leverage",
    icon: "lock",
    overviewBullets: [
      "Ensure quality, compliance, and risk management",
      "Strengthen policies, controls, and accountability",
      "Build a foundation for sustainable growth",
    ],
    description:
      "Reduce risk, ensure compliance, and build a resilient foundation for sustainable growth. Strengthen policies, controls, and accountability to protect your business and create long-term value with confidence.",
    impactMetrics: [
      {
        icon: "lock",
        value: "66 / 100",
        label: "Governance Score",
        badge: { text: "Above average", tone: "positive" },
      },
      {
        icon: "trend",
        value: "+0.47",
        label: "Risk Reduction Potential",
        badge: { text: "High opportunity", tone: "positive" },
      },
      {
        icon: "dollarSign",
        value: "$1.2M",
        label: "Potential Annual Impact",
        badge: { text: "High confidence", tone: "positive" },
      },
      {
        icon: "clock",
        value: "3-6 Months",
        label: "Time to Measurable Impact",
        badge: { text: "Quick wins identified", tone: "accent" },
      },
    ],
    gapAnalysis: [
      {
        element: "Policy & Process",
        icon: "clipboardList",
        score: 57,
        industryAvg: 61,
        gap: -4,
        impact: "Medium",
      },
      {
        element: "Risk Management",
        icon: "warning",
        score: 52,
        industryAvg: 57,
        gap: -5,
        impact: "High",
      },
      {
        element: "Compliance Readiness",
        icon: "fileCheck",
        score: 54,
        industryAvg: 60,
        gap: -6,
        impact: "High",
      },
      {
        element: "Data Security",
        icon: "lock",
        score: 61,
        industryAvg: 64,
        gap: -3,
        impact: "Medium",
      },
      {
        element: "Internal Controls",
        icon: "shield",
        score: 53,
        industryAvg: 59,
        gap: -6,
        impact: "High",
      },
      {
        element: "Accountability & Roles",
        icon: "users",
        score: 55,
        industryAvg: 61,
        gap: -6,
        impact: "Medium",
      },
    ],
    opportunities: [
      {
        icon: "clipboardList",
        title: "Strengthen Policies & Procedures",
        description: "Document, update, and communicate policies clearly",
        annualImpact: "+$360K",
        tags: [
          { label: "High Impact", tone: "danger" },
          { label: "Medium Effort", tone: "accent" },
        ],
      },
      {
        icon: "warning",
        title: "Improve Risk Management Framework",
        description: "Identify, assess, and mitigate key business risks",
        annualImpact: "+$300K",
        tags: [
          { label: "High Impact", tone: "danger" },
          { label: "Medium Effort", tone: "accent" },
        ],
      },
      {
        icon: "fileCheck",
        title: "Enhance Compliance Monitoring",
        description: "Automate compliance checks and reporting",
        annualImpact: "+$220K",
        tags: [
          { label: "Medium Impact", tone: "warning" },
          { label: "Low Effort", tone: "positive" },
        ],
      },
      {
        icon: "lock",
        title: "Upgrade Data Security & Access Controls",
        description: "Reduce vulnerabilities and protect sensitive data",
        annualImpact: "+$180K",
        tags: [
          { label: "Medium Impact", tone: "warning" },
          { label: "Medium Effort", tone: "accent" },
        ],
      },
      {
        icon: "users",
        title: "Establish Accountability & Reporting Cadence",
        description: "Clarify ownership and review performance regularly",
        annualImpact: "+$140K",
        tags: [
          { label: "Medium Impact", tone: "warning" },
          { label: "Low Effort", tone: "positive" },
        ],
      },
    ],
    timeToValue: [
      {
        icon: "rocket",
        title: "Quick Wins",
        timeframe: "0-3 Months",
        value: "+$100K - $180K",
        caption: "Risk Reduction",
      },
      {
        icon: "zap",
        title: "Short Term",
        timeframe: "3-6 Months",
        value: "+$180K - $400K",
        caption: "Risk Reduction",
      },
      {
        icon: "trend",
        title: "Medium Term",
        timeframe: "6-12 Months",
        value: "+$400K - $800K",
        caption: "Risk Reduction",
      },
      {
        icon: "trophy",
        title: "Long Term",
        timeframe: "12+ Months",
        value: "+$800K+",
        caption: "Sustainable Value",
      },
    ],
    roadmap: [
      {
        step: 1,
        title: "Assess & Benchmark Governance",
        description:
          "Review current policies, controls, and risk exposure.",
        duration: "1-2 Weeks",
      },
      {
        step: 2,
        title: "Prioritize High-Impact Risks & Controls",
        description:
          "Focus on risks with the highest impact and likelihood.",
        duration: "1 Week",
      },
      {
        step: 3,
        title: "Design Governance Improvements",
        description:
          "Update policies, controls, roles, and reporting frameworks.",
        duration: "2-4 Weeks",
      },
      {
        step: 4,
        title: "Implement & Communicate",
        description: "Roll out updates and ensure team understanding.",
        duration: "2-6 Weeks",
      },
      {
        step: 5,
        title: "Monitor, Audit & Optimize",
        description:
          "Track effectiveness, conduct audits, and refine continuously.",
        duration: "Ongoing",
      },
    ],
    roadmapCallout:
      "Following this roadmap can reduce risk exposure by 47% and unlock up to $1.2M in annual value through avoided losses and efficiency gains.",
    outcomes: [
      "Reduced business risks and potential losses",
      "Improved compliance and audit readiness",
      "Stronger internal controls and process reliability",
      "Increased stakeholder and investor confidence",
      "Better data security and protection",
      "Improved operational discipline and accountability",
      "Sustainable long-term business resilience",
    ],
    successFactors: [
      { icon: "executive", label: "Strong leadership sponsor" },
      { icon: "clipboardList", label: "Clear policies & procedures" },
      { icon: "warning", label: "Effective risk management" },
      { icon: "activity", label: "Consistent monitoring" },
      { icon: "check", label: "Accountability & reporting" },
    ],
    drivers: [
      {
        icon: "executive",
        title: "Leadership Commitment",
        score: "6.1 / 10",
        status: "Opportunity",
        statusTone: "accent",
      },
      {
        icon: "warning",
        title: "Risk Awareness",
        score: "4.9 / 10",
        status: "Major Gap",
        statusTone: "danger",
      },
      {
        icon: "shield",
        title: "Control Effectiveness",
        score: "5.1 / 10",
        status: "Gap",
        statusTone: "warning",
      },
      {
        icon: "fileCheck",
        title: "Compliance Culture",
        score: "5.4 / 10",
        status: "Gap",
        statusTone: "warning",
      },
      {
        icon: "clipboardList",
        title: "Documentation Quality",
        score: "4.8 / 10",
        status: "Major Gap",
        statusTone: "danger",
      },
      {
        icon: "eye",
        title: "Transparency",
        score: "6.2 / 10",
        status: "Opportunity",
        statusTone: "accent",
      },
      {
        icon: "check",
        title: "Audit Readiness",
        score: "5.3 / 10",
        status: "Gap",
        statusTone: "warning",
      },
    ],
    cta: {
      title: "Ready to Strengthen Your Governance?",
      body: "Our experts can help you reduce risk, ensure compliance, and build a stronger foundation for growth.",
    },
  },
];
