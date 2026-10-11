"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import type { ServiceCta } from "@/types/service-page";

type ServiceStickyCtaProps = {
  cta: ServiceCta;
  pageTitle: string;
};

export function ServiceStickyCta({ cta, pageTitle }: ServiceStickyCtaProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 480);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 border-t border-[var(--color-border)] bg-[var(--color-secondary)]/95 px-4 py-3 backdrop-blur-md md:px-6"
      role="region"
      aria-label={`Quick action: ${pageTitle}`}
    >
      <div className="mx-auto flex max-w-[var(--container-max)] flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-snug text-[var(--color-text-secondary)] sm:max-w-md">
          Ready to discuss your opportunities? Request a free consultation below
          or jump to the form.
        </p>
        <Button
          href={cta.href}
          className="w-full justify-center text-base sm:w-auto sm:text-[18px]"
          analytics={{ location: "sticky_bar", label: cta.label }}
        >
          {cta.label}
        </Button>
      </div>
    </div>
  );
}
