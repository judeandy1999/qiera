import type { Metadata } from "next";

import { AuditPageContent } from "@/components/audit/AuditPageContent";

export const metadata: Metadata = {
  title: "Start Intelligence Audit — QIERA",
  description:
    "Begin with clarity. Grow with intelligence. Request a QIERA Intelligence Audit to uncover growth constraints and your highest-impact opportunities.",
};

export default function StartIntelligenceAuditPage() {
  return <AuditPageContent />;
}
