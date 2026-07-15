import type { Metadata } from "next";

import { ContactPageContent } from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact — QIERA",
  description:
    "Send QIERA a message — partnership, sales, support, or general questions.",
};

type ContactPageProps = {
  searchParams: Promise<{ topic?: string | string[] }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const raw = Array.isArray(params.topic) ? params.topic[0] : params.topic;
  const initialTopic =
    typeof raw === "string" ? raw.trim().toLowerCase() : "";

  return <ContactPageContent initialTopic={initialTopic} />;
}
