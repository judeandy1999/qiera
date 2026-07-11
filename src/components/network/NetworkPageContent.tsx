import Image from "next/image";

import { IntelligenceIcon } from "@/components/ui/IntelligenceIcon";
import { networkPage } from "@/data/network";
import type { NetworkPartner } from "@/types/network";

function PartnerRow({ partner }: { partner: NetworkPartner }) {
  return (
    <article className="grid gap-6 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-secondary)]/60 p-6 md:grid-cols-[auto_minmax(0,1.4fr)_minmax(0,1fr)] md:items-start md:gap-8 lg:p-8">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-tint)] shadow-[0_0_24px_rgba(99,102,241,0.35)]">
        <IntelligenceIcon
          name={partner.icon}
          size={28}
          strokeWidth={1.5}
          className="text-[var(--color-accent)]"
        />
      </div>

      <div className="min-w-0">
        <h2 className="text-xl font-semibold leading-[1.2] text-[var(--color-text-primary)]">
          {partner.title}
        </h2>
        <p className="mt-3 text-base font-normal leading-relaxed text-[var(--color-text-secondary)]">
          {partner.description}
        </p>
      </div>

      <div className="min-w-0 border-t border-[var(--color-border)] pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
        <p className="text-xs font-normal uppercase leading-[1.4] tracking-[0.08em] text-[var(--color-accent)]">
          BENEFITS
        </p>
        <ul className="mt-3 flex flex-col gap-2" role="list">
          {partner.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2">
              <span className="mt-0.5 shrink-0" aria-hidden="true">
                <IntelligenceIcon name="check" size={16} />
              </span>
              <span className="text-sm font-normal leading-relaxed text-[var(--color-text-primary)] md:text-base">
                {benefit}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function NetworkPageContent() {
  const { eyebrow, title, body, globeSrc, globeAlt, partners, cta } =
    networkPage;

  return (
    <div className="bg-[var(--color-shell)]">
      <section
        aria-labelledby="network-hero-heading"
        className="relative isolate overflow-hidden bg-[var(--color-shell)]"
      >
        <Image
          src={globeSrc}
          alt=""
          fill
          priority
          aria-hidden
          className="object-contain object-right"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--color-shell)] via-[var(--color-shell)]/85 to-transparent md:via-[var(--color-shell)]/70" />

        <div className="relative z-10 mx-auto max-w-[var(--container-max)] px-6 py-16 md:px-8 md:py-20 lg:px-12 lg:py-24">
          <div className="max-w-xl">
            <p className="text-xs font-normal uppercase leading-[1.4] tracking-[0.08em] text-[var(--color-accent)]">
              {eyebrow}
            </p>
            <h1
              id="network-hero-heading"
              className="mt-4 text-[36px] font-semibold leading-[1.15] text-[var(--color-text-primary)] md:text-[40px] lg:text-[48px]"
            >
              {title}
            </h1>
            <p className="mt-5 text-base font-normal leading-relaxed text-[var(--color-text-secondary)]">
              {body}
            </p>
          </div>
          <span className="sr-only">{globeAlt}</span>
        </div>
      </section>

      <section
        aria-label="Partner types"
        className="mx-auto flex max-w-[var(--container-max)] flex-col gap-5 px-6 pb-12 md:px-8 md:pb-14 lg:px-12 lg:pb-16"
      >
        {partners.map((partner) => (
          <PartnerRow key={partner.id} partner={partner} />
        ))}
      </section>

      <section
        aria-labelledby="network-cta-heading"
        className="mx-auto max-w-[var(--container-max)] px-6 pb-16 md:px-8 lg:px-12 lg:pb-20"
      >
        <div className="flex flex-col gap-6 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-secondary)]/60 p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 lg:p-8">
          <div className="flex min-w-0 flex-1 gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-tint)]">
              <IntelligenceIcon name={cta.icon} size={24} strokeWidth={1.5} />
            </div>
            <p
              id="network-cta-heading"
              className="text-base font-normal leading-relaxed text-[var(--color-text-primary)]"
            >
              {cta.body}
            </p>
          </div>
          <a
            href={cta.href}
            className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-1 rounded-[var(--radius-button)] border border-[var(--color-accent)]/50 bg-transparent px-5 py-3 text-[20px] font-semibold leading-[1.2] text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-shell)]"
          >
            {cta.buttonLabel}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
