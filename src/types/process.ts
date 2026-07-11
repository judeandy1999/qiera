export type ProcessSubstep = {
  /** IntelligenceIcon name */
  icon: string;
  title: string;
  description: string;
};

export type ProcessStep = {
  id: string; // e.g. "discover"
  stepNumber: number; // 1–6
  title: string; // "Discover Opportunities"
  /** IntelligenceIcon name — same as overview card */
  icon: string;
  /** Short paragraph for overview card (below title) */
  overviewDescription: string;
  /** PRIMARY OBJECTIVE body */
  primaryObjective: string;
  /** EVIDENCE FIRST body */
  evidenceFirst: string;
  /** OVERVIEW section paragraph */
  overview: string;
  /** WHAT WE DO: 6 substeps */
  whatWeDo: ProcessSubstep[];
  typicalInputs: string[];
  keyOutputs: string[];
  successCriteria: string[];
  /** Index 0–5 indicating which E-level is highlighted (E0=Hypothesis … E5=Validated) */
  evidenceState: number;
  /** WHY THIS MATTERS body */
  whyItMatters: string;
  /** Next step title for the "Next Step →" button label */
  nextStepTitle: string;
};
