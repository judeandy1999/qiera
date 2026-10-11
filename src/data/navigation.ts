import type { NavItem } from "@/types/navigation";

export type { NavItem };

export const servicesNav: NavItem[] = [
  {
    label: "Ecommerce Growth Consulting",
    href: "/ecommerce-growth-consulting",
  },
  {
    label: "Fractional Ecommerce CMO",
    href: "/fractional-ecommerce-cmo",
  },
];

export const primaryNav: NavItem[] = [
  { label: "Intelligence", href: "/#intelligence" },
  { label: "Process", href: "/#process" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Leverages", href: "/#leverages" },
  {
    label: "Services",
    href: "/ecommerce-growth-consulting",
    children: servicesNav,
  },
  { label: "Network", href: "/network" },
  { label: "Contact", href: "/contact" },
];

export const primaryCta: NavItem = {
  label: "Start Intelligence Audit",
  href: "/start-intelligence-audit",
};

export const legalNav: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];
