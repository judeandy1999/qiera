export type LeverageMetricTone = "positive" | "accent" | "warning" | "danger";

export type Leverage = {
  id: string;
  title: string;
  icon: string;
  overviewBullets: [string, string, string];
  description: string;
  impactMetrics: {
    icon: string;
    value: string;
    label: string;
    badge?: { text: string; tone: LeverageMetricTone };
  }[];
  valueDrivers?: { label: string; percent: number; icon?: string }[];
  valueDriversCallout?: string;
  gapAnalysis?: {
    element: string;
    icon: string;
    score: number;
    industryAvg: number;
    gap: number;
    impact: "High" | "Medium" | "Low";
  }[];
  opportunities: {
    icon: string;
    title: string;
    description: string;
    annualImpact: string;
    tags: { label: string; tone: LeverageMetricTone }[];
  }[];
  /** Prefer omit — no destination route defined. */
  opportunitiesFooterLink?: string;
  timeToValue: {
    icon: string;
    title: string;
    timeframe: string;
    value: string;
    caption?: string;
  }[];
  roadmap: {
    step: number;
    title: string;
    description: string;
    duration: string;
  }[];
  roadmapCallout?: string;
  outcomes: string[];
  successFactors: { icon: string; label: string }[];
  drivers?: {
    icon: string;
    title: string;
    score: string;
    status: string;
    statusTone: LeverageMetricTone;
  }[];
  cta: { title: string; body: string };
};
