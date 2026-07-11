import type { Metadata } from "next";

import { NetworkPageContent } from "@/components/network/NetworkPageContent";

export const metadata: Metadata = {
  title: "Network — QIERA",
  description:
    "QIERA's network brings together exceptional partners and leaders who extend our capability, scale our impact, and deliver exceptional outcomes for clients.",
};

export default function NetworkPage() {
  return <NetworkPageContent />;
}
