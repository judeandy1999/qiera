import type { Metadata } from "next";

import { LegalPageContent } from "@/components/legal/LegalPageContent";
import { cookiesDocument } from "@/data/cookies";

export const metadata: Metadata = {
  title: "Cookie Policy — QIERA",
  description:
    "Provisional QIERA Cookie Policy explaining cookies and similar technologies.",
};

export default function CookiesPage() {
  return <LegalPageContent document={cookiesDocument} />;
}
