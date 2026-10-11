import type { Metadata } from "next";

import { ServicePageContent } from "@/components/services/ServicePageContent";
import { ecommerceGrowthConsultingPage } from "@/data/ecommerce-growth-consulting";

export const metadata: Metadata = {
  title: "Ecommerce Growth Consulting & Competitive Intelligence | QIERA",
  description:
    "Research-led ecommerce growth consulting combining competitive intelligence, before-and-after UX concepts, and strategic development prioritization.",
};

export default function EcommerceGrowthConsultingPage() {
  return <ServicePageContent document={ecommerceGrowthConsultingPage} />;
}
