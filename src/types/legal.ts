export type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "labeled"; label: string; text: string }
  | { type: "pending" }
  | {
      type: "table";
      caption?: string;
      headers: string[];
      rows: string[][];
    };

export type LegalSection = {
  id: string;
  number: number;
  title: string;
  icon: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  slug: "privacy" | "terms" | "cookies";
  eyebrow: string;
  title: string;
  lastUpdated: string;
  provisionalNotice: string;
  intro: string;
  sections: LegalSection[];
  contactEmail?: string;
};
