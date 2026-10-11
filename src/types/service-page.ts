export type ServiceCta = {
  label: string;
  href: string;
};

export type ServiceProseSection = {
  kind: "prose";
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  /** Insert bullets after this paragraph index (default 0). */
  bulletsAfterParagraph?: number;
};

export type ServiceStep = {
  number: string;
  title: string;
  paragraphs: string[];
};

export type ServiceStepsSection = {
  kind: "steps";
  id: string;
  title: string;
  steps: ServiceStep[];
};

export type ServiceArea = {
  title: string;
  description: string;
  icon: string;
};

export type ServiceAreasSection = {
  kind: "areas";
  id: string;
  title: string;
  areas: ServiceArea[];
};

export type ServiceWhyItem = {
  title: string;
  description: string;
};

export type ServiceWhySection = {
  kind: "why";
  id: string;
  title: string;
  items: ServiceWhyItem[];
};

export type ServiceOption = {
  title: string;
  subtitle: string;
  description: string;
  bestFor?: string;
  bullets?: string[];
  cta?: ServiceCta;
};

export type ServiceOptionsSection = {
  kind: "options";
  id: string;
  title: string;
  footnote?: string;
  options: ServiceOption[];
};

export type ServiceAudienceSegment = {
  title: string;
  description: string;
};

export type ServiceAudienceSection = {
  kind: "audience";
  id: string;
  title: string;
  paragraphs: string[];
  segments?: ServiceAudienceSegment[];
};

export type ServiceFaqItem = {
  question: string;
  answer: string;
};

export type ServiceFaqSection = {
  kind: "faq";
  id: string;
  title: string;
  items: ServiceFaqItem[];
};

export type ServiceCompareSection = {
  kind: "compare";
  id: string;
  title: string;
  paragraphs: string[];
};

export type ServiceSection =
  | ServiceProseSection
  | ServiceStepsSection
  | ServiceAreasSection
  | ServiceWhySection
  | ServiceOptionsSection
  | ServiceAudienceSection
  | ServiceFaqSection
  | ServiceCompareSection;

export type ServiceProofItem = {
  title: string;
  description: string;
  icon: string;
};

export type ServiceConversion = {
  insertAfterSectionId: string;
  proof: {
    title: string;
    items: ServiceProofItem[];
  };
  consultation: {
    eyebrow: string;
    title: string;
    bullets: string[];
    topic: "growth-consulting" | "fractional-cmo";
    submitLabel: string;
  };
  stickyCta: ServiceCta;
};

export type ServicePageDocument = {
  hero: {
    eyebrow: string;
    title: string;
    highlights: string;
    subhead: string;
    paragraphs: string[];
    closingLine: string;
    primaryCta: ServiceCta;
  };
  sections: ServiceSection[];
  finalCta: {
    title: string;
    paragraphs: string[];
    primaryCta: ServiceCta;
    secondaryCta: ServiceCta;
  };
  conversion: ServiceConversion;
};
