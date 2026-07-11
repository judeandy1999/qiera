export type SolutionBarRow = {
  icon: string;
  label: string;
  percent: number;
};

export type SolutionImpactStep = {
  icon: string;
  title: string;
  description: string;
};

export type SolutionChallenge = {
  id: string;
  tabLabel: string;
  icon: string;
  title: string;
  description: string;
  bullets: string[];
  illustrationSrc?: string;
  illustrationAlt?: string;
  metricCard: {
    title: string;
    value: string;
    valueCaption: string;
    gaugeValue: number;
    gaugeLabel: string;
    gaugeSubtext?: string;
    callout: { icon: string; text: string };
  };
  categoryCard: {
    title: string;
    rows: SolutionBarRow[];
    callout: { icon: string; text: string };
  };
  opportunityCard: {
    title: string;
    value: string;
    valueTone: "accent" | "positive";
    valueCaption: string;
    sparkline: number[];
    rows: { icon: string; label: string; tone?: "accent" | "positive" }[];
  };
  impactSteps: SolutionImpactStep[];
  outcomes: { icon: string; label: string }[];
  outcomesIllustrationSrc?: string;
};
