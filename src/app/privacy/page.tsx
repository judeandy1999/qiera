import type { Metadata } from "next";

import { LegalPageContent } from "@/components/legal/LegalPageContent";
import { privacyDocument } from "@/data/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy — QIERA",
  description:
    "Provisional QIERA Privacy Policy — how we collect, use, and protect information.",
};

export default function PrivacyPage() {
  return <LegalPageContent document={privacyDocument} />;
}
