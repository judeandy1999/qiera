import type { ProcessStep } from "@/types/process";

export const processSteps: ProcessStep[] = [
  {
    id: "discover",
    stepNumber: 1,
    title: "Discover Opportunities",
    icon: "telescope",
    overviewDescription:
      "Identify high-potential opportunities based on data, market signals, customer insights, and strategic priorities.",
    primaryObjective:
      "Surface the right opportunities that can create meaningful business impact and align with your strategic goals.",
    evidenceFirst:
      "All opportunities are grounded in verifiable evidence and transparent methodology—not assumptions or opinions.",
    overview:
      "This first step focuses on scanning the landscape to uncover opportunities with the highest potential for impact. We combine quantitative data, qualitative insights, and market intelligence to reveal where the biggest gains may be possible.",
    whatWeDo: [
      {
        icon: "visibility",
        title: "Scan & Collect Signals",
        description:
          "Gather data from internal sources, market trends, competitors, customer behavior, and external intelligence.",
      },
      {
        icon: "bars",
        title: "Identify Patterns",
        description:
          "Analyze signals to detect patterns, anomalies, gaps, emerging trends, and areas of significant movement.",
      },
      {
        icon: "sparkles",
        title: "Evaluate Potential",
        description:
          "Assess each opportunity against impact potential, feasibility, and strategic alignment.",
      },
      {
        icon: "check",
        title: "Prioritize Opportunities",
        description:
          "Rank opportunities based on value, urgency, confidence, and resource implications.",
      },
      {
        icon: "check",
        title: "Document & Frame",
        description:
          "Document top opportunities with clear problem statements, potential outcomes, and initial hypotheses.",
      },
    ],
    typicalInputs: [
      "Analytics & performance data",
      "Customer feedback & VOC",
      "Market & industry reports",
      "Competitor intelligence",
      "Search & behavior data",
      "Internal stakeholder insights",
      "Financial & operational data",
    ],
    keyOutputs: [
      "Opportunity Map",
      "Opportunity Shortlist",
      "Opportunity Profiles",
      "Impact vs. Effort Assessment",
      "Initial Hypotheses",
      "Evidence Summary",
      "Recommended Next Steps",
    ],
    successCriteria: [
      "High-potential opportunities are clearly identified",
      "Evidence supports the opportunity thesis",
      "Opportunities align with strategic objectives",
      "Clear rationale for why each opportunity matters",
    ],
    evidenceState: 2,
    whyItMatters:
      "You can't optimize what you haven't identified. Discovering the right opportunities ensures your time, budget, and effort are invested where they can create the most value for the business and your customers.",
    nextStepTitle: "Identify Constraints",
  },
  {
    id: "identify",
    stepNumber: 2,
    title: "Identify Constraints",
    icon: "visibility",
    overviewDescription:
      "Uncover the root constraints limiting growth, performance, or customer value.",
    primaryObjective:
      "Find and validate the key constraints (limiting factors) that are preventing your business from achieving its full potential.",
    evidenceFirst:
      "Constraints are identified through evidence, not assumptions. We validate root causes using data, observations, and stakeholder insights.",
    overview:
      "Every business has constraints that limit its ability to grow, scale, or deliver value. In this step, we uncover the root causes behind performance gaps and growth barriers. By identifying what's holding you back, we create clarity on where to focus for the greatest impact.",
    whatWeDo: [
      {
        icon: "conversion",
        title: "Map the System",
        description:
          "Understand how your business works today across people, processes, systems, and technology.",
      },
      {
        icon: "warning",
        title: "Detect Constraints",
        description:
          "Identify symptoms, friction points, and bottlenecks that are limiting outcomes.",
      },
      {
        icon: "target",
        title: "Find Root Causes",
        description:
          "Drill down to uncover the underlying root causes—not just the visible issues.",
      },
      {
        icon: "check",
        title: "Validate & Prioritize",
        description:
          "Validate constraints with evidence and prioritize by impact and controllability.",
      },
      {
        icon: "trend",
        title: "Quantify Impact",
        description:
          "Estimate the impact of each constraint on growth, cost, quality, or customer value.",
      },
      {
        icon: "check",
        title: "Document Insights",
        description:
          "Capture key constraints, evidence, impact, and implications to guide solution design.",
      },
    ],
    typicalInputs: [
      "Performance & KPI data",
      "Process & workflow maps",
      "Customer feedback & VOC",
      "Employee & stakeholder interviews",
      "System & tool diagnostics",
      "Financial & operational data",
      "Past project & audit reports",
    ],
    keyOutputs: [
      "Constraint Map",
      "Root Cause Analysis",
      "Evidence Log",
      "Constraint Prioritization Matrix",
      "Impact Assessment",
      "Key Insights Summary",
      "Recommended Focus Areas",
    ],
    successCriteria: [
      "Root constraints are clearly identified and validated",
      "Evidence supports each constraint and root cause",
      "Constraints are prioritized by impact and feasibility",
      "Stakeholders align on the key constraints to address",
    ],
    evidenceState: 2,
    whyItMatters:
      "Solving the wrong problem wastes time and resources. Identifying the true constraints ensures we focus on the changes that will unlock the biggest gains.",
    nextStepTitle: "Architect Solutions",
  },
  {
    id: "architect",
    stepNumber: 3,
    title: "Architect Solutions",
    icon: "layoutTemplate",
    overviewDescription:
      "Design tailored, high-impact solutions that directly address root causes and unlock opportunities.",
    primaryObjective:
      "Create a clear, actionable solution architecture that defines the right approach, capabilities, and roadmap to deliver measurable outcomes.",
    evidenceFirst:
      "Solutions are designed based on validated insights, constraints, and prioritized opportunities—not assumptions or generic frameworks.",
    overview:
      "With constraints and opportunities clearly defined, we design solution architectures that are feasible, differentiated, and scalable. This step translates insight into a structured plan for value creation—balancing impact, effort, risk, and strategic alignment.",
    whatWeDo: [
      {
        icon: "target",
        title: "Define Solution Goals",
        description:
          "Translate opportunity and constraint insights into clear solution objectives and success outcomes.",
      },
      {
        icon: "compass",
        title: "Explore Approaches",
        description:
          "Evaluate potential strategies and solution patterns to address root causes and achieve goals.",
      },
      {
        icon: "layoutTemplate",
        title: "Design Architecture",
        description:
          "Define the solution architecture, key components, integrations, and operating model.",
      },
      {
        icon: "scale",
        title: "Assess Feasibility",
        description:
          "Evaluate technical, operational, financial, and organizational feasibility and risks.",
      },
      {
        icon: "chart",
        title: "Create Roadmap",
        description:
          "Develop a phased roadmap with milestones, quick wins, dependencies, and resource considerations.",
      },
      {
        icon: "check",
        title: "Validate & Refine",
        description:
          "Review with stakeholders, refine the design, and confirm alignment with priorities and constraints.",
      },
    ],
    typicalInputs: [
      "Opportunity & constraint insights",
      "Root cause analysis",
      "Market & competitive data",
      "Customer needs & feedback",
      "Business strategy & goals",
      "Current state assessments",
      "Technology & data landscape",
      "Budget & resource guidelines",
    ],
    keyOutputs: [
      "Solution Architecture",
      "Target Operating Model",
      "Capability Requirements",
      "Technology Blueprint",
      "Integration & Data Flow",
      "Implementation Roadmap",
      "Resource Plan & Estimates",
      "Success Metrics & KPIs",
    ],
    successCriteria: [
      "Solution directly addresses root causes and objectives",
      "Architecture is feasible, scalable, and sustainable",
      "Risks and assumptions are identified",
      "Stakeholders are aligned on the solution approach",
      "Clear roadmap and investment rationale",
    ],
    evidenceState: 2,
    whyItMatters:
      "Well-architected solutions increase the likelihood of success by ensuring the right problems are solved with the right capabilities, in the right way, at the right time.",
    nextStepTitle: "Build Capabilities",
  },
  {
    id: "build",
    stepNumber: 4,
    title: "Build Capabilities",
    icon: "product",
    overviewDescription:
      "Develop the systems, processes, tools, and assets needed to execute with excellence.",
    primaryObjective:
      "Build the right capabilities that enable your team and organization to deliver results consistently and at scale.",
    evidenceFirst:
      "Capabilities are built based on validated requirements and proven best practices—not assumptions or generic templates.",
    overview:
      "Strategy becomes reality when the right capabilities are in place. This step focuses on building the people, processes, technology, and assets that bring the solution to life and empower your organization to execute with excellence.",
    whatWeDo: [
      {
        icon: "users",
        title: "Define Capability Needs",
        description:
          "Identify the capabilities, skills, tools, processes, and resources required to execute the solution successfully.",
      },
      {
        icon: "operational",
        title: "Design Operating Model",
        description:
          "Design roles, workflows, processes, and governance structures that support efficient, effective execution.",
      },
      {
        icon: "product",
        title: "Build & Configure",
        description:
          "Develop or configure systems, tools, and infrastructure to meet requirements and standards.",
      },
      {
        icon: "users",
        title: "Enable & Train",
        description:
          "Equip teams with the knowledge, skills, and resources they need through training and enablement.",
      },
      {
        icon: "check",
        title: "Test & Validate",
        description:
          "Validate that capabilities work as intended, integrate seamlessly, and meet quality standards.",
      },
      {
        icon: "trend",
        title: "Operationalize",
        description:
          "Launch capabilities into operation with clear support, monitoring, and continuous improvement.",
      },
    ],
    typicalInputs: [
      "Solution architecture",
      "Capability requirements",
      "Process & workflow designs",
      "Technology standards",
      "Current state assessment",
      "Tooling & vendor evaluations",
      "Budget & resource plan",
      "Change management plan",
    ],
    keyOutputs: [
      "Capability Framework",
      "Process & Workflow Docs",
      "System / Tool Configuration",
      "Role & Responsibility Matrix",
      "Training Materials & Plan",
      "Implementation Playbook",
      "Support & Operations Plan",
      "Go-Live Readiness Assessment",
    ],
    successCriteria: [
      "Capabilities are available and ready for use",
      "Teams are trained and confident",
      "Systems and processes perform as expected",
      "Quality and security standards are met",
      "Organization is ready for scale and change",
    ],
    evidenceState: 3,
    whyItMatters:
      "Strong capabilities turn plans into performance. Investing in the right capabilities ensures your organization has the foundation to execute today and adapt for tomorrow.",
    nextStepTitle: "De-Risk Projects",
  },
  {
    id: "derisk",
    stepNumber: 5,
    title: "De-Risk Projects",
    icon: "shield",
    overviewDescription:
      "Anticipate risks early, validate assumptions, and remove roadblocks before they impact results.",
    primaryObjective:
      "Reduce uncertainty and increase the likelihood of success by proactively identifying, assessing, and mitigating risks.",
    evidenceFirst:
      "Risk decisions are based on evidence, scenario analysis, and real-world data—not assumptions or optimism bias. We test what matters before we invest further.",
    overview:
      "Every initiative carries risk. This step ensures we anticipate what could go wrong, challenge key assumptions, and validate critical dependencies early. By de-risking upfront, we protect time, budget, and credibility while increasing confidence in the path forward.",
    whatWeDo: [
      {
        icon: "warning",
        title: "Identify Risks",
        description:
          "Surface potential risks across strategy, operations, technology, people, financial, and external factors.",
      },
      {
        icon: "scale",
        title: "Assess & Prioritize",
        description:
          "Evaluate probability and impact to prioritize risks based on severity and exposure.",
      },
      {
        icon: "visibility",
        title: "Validate Assumptions",
        description:
          "Test critical assumptions, hypotheses, and dependencies that could affect success or outcomes.",
      },
      {
        icon: "shield",
        title: "Develop Mitigations",
        description:
          "Define mitigation strategies, contingency plans, and controls to reduce likelihood and impact.",
      },
      {
        icon: "check",
        title: "Test & De-Risk",
        description:
          "Run pilots, prototypes, or simulations to validate solutions and reduce uncertainty.",
      },
      {
        icon: "target",
        title: "Go / No-Go Decision",
        description:
          "Provide clear risk status and recommendations to proceed, pivot, or pause.",
      },
    ],
    typicalInputs: [
      "Project scope & requirements",
      "Assumptions & hypotheses",
      "Technical architecture",
      "Market & competitive data",
      "Financial models",
      "Dependency & integration maps",
      "Stakeholder feedback",
      "Historical project data",
      "Compliance & regulatory inputs",
    ],
    keyOutputs: [
      "Risk Register",
      "Assumption Log",
      "Risk Assessment Matrix",
      "Mitigation & Contingency Plan",
      "Pilot / Test Results",
      "Go / No-Go Recommendation",
      "Risk Status Summary",
      "Decision Brief",
    ],
    successCriteria: [
      "High-priority risks are identified and mitigated",
      "Critical assumptions are validated",
      "Mitigation plans are in place and resourced",
      "Risk exposure is reduced to an acceptable level",
      "Clear readiness to move forward with confidence",
    ],
    evidenceState: 3,
    whyItMatters:
      "De-risking early prevents costly surprises, accelerates execution, and builds stakeholder confidence. It's how we increase the odds of success—before we commit fully.",
    nextStepTitle: "Measure Impact",
  },
  {
    id: "measure",
    stepNumber: 6,
    title: "Measure Impact",
    icon: "trend",
    overviewDescription:
      "Track what matters, learn continuously, and optimize to improve outcomes over time.",
    primaryObjective:
      "Quantify outcomes, validate value creation, and learn what to scale, adjust, or stop.",
    evidenceFirst:
      "Impact is measured using verified data, defined metrics, and transparent methodology—never assumptions or anecdotal evidence.",
    overview:
      "Measurement closes the loop. We establish the right metrics, collect reliable data, and analyze results to understand performance against goals. This ensures accountability, demonstrates value, and informs the next cycle of opportunities.",
    whatWeDo: [
      {
        icon: "target",
        title: "Define What Matters",
        description:
          "Align on success metrics and KPIs that reflect strategic objectives and stakeholder priorities.",
      },
      {
        icon: "chart",
        title: "Collect & Validate Data",
        description:
          "Gather data from trusted sources and validate for accuracy, completeness, and consistency.",
      },
      {
        icon: "chart",
        title: "Analyze Performance",
        description:
          "Compare results against targets and baselines to identify drivers, trends, and variances.",
      },
      {
        icon: "commercial",
        title: "Quantify Impact",
        description:
          "Translate results into business impact across revenue, cost, efficiency, risk, and customer value.",
      },
      {
        icon: "sparkles",
        title: "Generate Insights",
        description:
          "Identify what worked, what didn't, and why—and derive actionable recommendations.",
      },
      {
        icon: "lifecycle",
        title: "Iterate & Improve",
        description:
          "Use insights to refine strategy, optimize execution, and drive continuous improvement.",
      },
    ],
    typicalInputs: [
      "Defined KPIs & targets",
      "Project goals & success criteria",
      "Operational & financial data",
      "Customer feedback & NPS",
      "Usage & adoption analytics",
      "Market & competitive data",
      "Baseline / historical data",
      "Attribution & methodology frameworks",
    ],
    keyOutputs: [
      "Performance Dashboard",
      "Impact Report",
      "KPI Scorecard",
      "ROI / Financial Analysis",
      "Variance & Driver Analysis",
      "Outcome Summary",
      "Lessons Learned",
      "Recommendations",
      "Next Cycle Opportunity List",
    ],
    successCriteria: [
      "KPIs are tracked and reported consistently",
      "Outcomes meet or exceed target thresholds",
      "Impact is quantified and validated",
      "Insights drive decisions and improvements",
      "Stakeholders confirm value has been delivered",
    ],
    evidenceState: 3,
    whyItMatters:
      "You can't improve what you don't measure. Measuring impact proves value, builds trust, and ensures we invest more in what works—and less in what doesn't.",
    nextStepTitle: "Discover Opportunities",
  },
];
