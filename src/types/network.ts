export type NetworkPartner = {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: [string, string, string];
};

export type NetworkPageContent = {
  eyebrow: string;
  title: string;
  body: string;
  globeSrc: string;
  globeAlt: string;
  partners: NetworkPartner[];
  cta: {
    body: string;
    buttonLabel: string;
    href: string;
    icon: string;
  };
};
