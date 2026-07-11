/** Intelligence dimension contract for overview cards + detail modals. */

export type IntelligenceDeliverable = {
  heading: string;
  body: string;
};

export type IntelligenceMiniItem = {
  /** IntelligenceIcon name (inline SVG), not a file path */
  icon?: string;
  title: string;
  description: string;
};

export type IntelligenceAnalysisSection = {
  sectionLabel: string;
  items: IntelligenceMiniItem[];
};

/**
 * Full typed shape for one of the 12 growth-intelligence dimensions.
 * `icon` is an IntelligenceIcon name (inline SVG per plan 02-01), NOT a file path.
 */
export type IntelligenceDimension = {
  id: string;
  slug: string;
  categoryLabel: string;
  title: string;
  /** IntelligenceIcon name (inline SVG), not a file path */
  icon: string;
  overviewDescription: string;
  overviewBullets: string[];
  description: string;
  delivers: IntelligenceDeliverable[];
  keyQuestions: string[];
  analysisSections: IntelligenceAnalysisSection[];
  evidenceSectionLabel?: string;
  evidenceItems?: IntelligenceMiniItem[];
  strategicBenefits: IntelligenceMiniItem[];
};
