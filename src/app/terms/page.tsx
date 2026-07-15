import type { Metadata } from "next";

import { LegalPageContent } from "@/components/legal/LegalPageContent";
import { termsDocument } from "@/data/terms";

export const metadata: Metadata = {
  title: "Terms of Service — QIERA",
  description:
    "Provisional QIERA Terms of Service governing use of QIERA website and services.",
};

export default function TermsPage() {
  return <LegalPageContent document={termsDocument} />;
}
