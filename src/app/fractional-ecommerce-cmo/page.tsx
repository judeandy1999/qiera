import type { Metadata } from "next";

import { ServicePageContent } from "@/components/services/ServicePageContent";
import { fractionalEcommerceCmoPage } from "@/data/fractional-ecommerce-cmo";

export const metadata: Metadata = {
  title: "Fractional Ecommerce CMO & Strategic Growth Leadership | QIERA",
  description:
    "Fractional Ecommerce CMO services combining deep research, competitive intelligence, visual solution concepts, development prioritization, and strategic marketing leadership.",
};

export default function FractionalEcommerceCmoPage() {
  return <ServicePageContent document={fractionalEcommerceCmoPage} />;
}
