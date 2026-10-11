import Image from "next/image";

import { ServiceConversionBlocks } from "@/components/services/ServiceConversionBlocks";
import { ServiceStickyCta } from "@/components/services/ServiceStickyCta";
import { Button } from "@/components/ui/Button";
import { IntelligenceIcon } from "@/components/ui/IntelligenceIcon";
import type {
  ServicePageDocument,
  ServiceSection,
} from "@/types/service-page";

function ProseSection({
  section,
}: {
  section: Extract<ServiceSection, { kind: "prose" }>;
}) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className="scroll-mt-[var(--header-scroll-offset)] border-t border-[var(--color-border)] py-12 md:py-14"
    >
      <h2
        id={`${section.id}-heading`}
        className="max-w-3xl text-2xl font-semibold leading-[1.2] text-[var(--color-text-primary)] md:text-[28px]"
      >
        {section.title}
      </h2>
      <div className="mt-6 flex max-w-3xl flex-col gap-4">
        {(() => {
          const bullets = section.bullets ?? [];
          if (bullets.length === 0) {
            return section.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base font-normal leading-relaxed text-[var(--color-text-secondary)]"
              >
                {paragraph}
              </p>
            ));
          }
          const insertAfter = section.bulletsAfterParagraph ?? 0;
          const before = section.paragraphs.slice(0, insertAfter + 1);
          const after = section.paragraphs.slice(insertAfter + 1);
          return (
            <>
              {before.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base font-normal leading-relaxed text-[var(--color-text-secondary)]"
                >
                  {paragraph}
                </p>
              ))}
              <ul className="flex flex-col gap-2" role="list">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0" aria-hidden="true">
                      <IntelligenceIcon name="check" size={16} />
                    </span>
                    <span className="text-base font-normal leading-relaxed text-[var(--color-text-secondary)]">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
              {after.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base font-normal leading-relaxed text-[var(--color-text-secondary)]"
                >
                  {paragraph}
                </p>
              ))}
            </>
          );
        })()}
      </div>
    </section>
  );
}

function StepsSection({
  section,
}: {
  section: Extract<ServiceSection, { kind: "steps" }>;
}) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className="scroll-mt-[var(--header-scroll-offset)] border-t border-[var(--color-border)] py-12 md:py-14"
    >
      <h2
        id={`${section.id}-heading`}
        className="text-2xl font-semibold leading-[1.2] text-[var(--color-text-primary)] md:text-[28px]"
      >
        {section.title}
      </h2>
      <ol className="mt-10 flex flex-col gap-5" role="list">
        {section.steps.map((step) => (
          <li key={step.number}>
            <article className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-secondary)]/60 p-6 lg:p-8">
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-accent)]">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold leading-snug text-[var(--color-text-primary)]">
                  {step.title}
                </h3>
              </div>
              <div className="mt-4 flex flex-col gap-3">
                {step.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base font-normal leading-relaxed text-[var(--color-text-secondary)]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}

function AreasSection({
  section,
}: {
  section: Extract<ServiceSection, { kind: "areas" }>;
}) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className="scroll-mt-[var(--header-scroll-offset)] border-t border-[var(--color-border)] py-12 md:py-14"
    >
      <h2
        id={`${section.id}-heading`}
        className="text-2xl font-semibold leading-[1.2] text-[var(--color-text-primary)] md:text-[28px]"
      >
        {section.title}
      </h2>
      <ul
        className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        role="list"
      >
        {section.areas.map((area) => (
          <li key={area.title}>
            <article className="flex h-full flex-col gap-3 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-secondary)]/60 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent-tint)]">
                <IntelligenceIcon
                  name={area.icon}
                  size={22}
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-lg font-semibold leading-snug text-[var(--color-text-primary)]">
                {area.title}
              </h3>
              <p className="text-base font-normal leading-relaxed text-[var(--color-text-secondary)]">
                {area.description}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

function WhySection({
  section,
}: {
  section: Extract<ServiceSection, { kind: "why" }>;
}) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className="scroll-mt-[var(--header-scroll-offset)] border-t border-[var(--color-border)] py-12 md:py-14"
    >
      <h2
        id={`${section.id}-heading`}
        className="text-2xl font-semibold leading-[1.2] text-[var(--color-text-primary)] md:text-[28px]"
      >
        {section.title}
      </h2>
      <ul className="mt-8 flex flex-col gap-4" role="list">
        {section.items.map((item) => (
          <li
            key={item.title}
            className="flex gap-4 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-secondary)]/40 p-5 md:p-6"
          >
            <span className="mt-0.5 shrink-0" aria-hidden="true">
              <IntelligenceIcon name="check" size={20} />
            </span>
            <p className="text-base leading-relaxed text-[var(--color-text-secondary)]">
              <span className="font-semibold text-[var(--color-text-primary)]">
                {item.title}
              </span>{" "}
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function OptionsSection({
  section,
}: {
  section: Extract<ServiceSection, { kind: "options" }>;
}) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className="scroll-mt-[var(--header-scroll-offset)] border-t border-[var(--color-border)] py-12 md:py-14"
    >
      <h2
        id={`${section.id}-heading`}
        className="text-2xl font-semibold leading-[1.2] text-[var(--color-text-primary)] md:text-[28px]"
      >
        {section.title}
      </h2>
      <ul className="mt-10 flex flex-col gap-5" role="list">
        {section.options.map((option) => (
          <li key={option.title}>
            <article className="flex h-full flex-col gap-4 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-secondary)]/60 p-6 lg:flex-row lg:items-start lg:justify-between lg:gap-8 lg:p-8">
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                  {option.title}
                </h3>
                <p className="mt-1 text-sm font-normal uppercase tracking-[0.06em] text-[var(--color-accent)]">
                  {option.subtitle}
                </p>
                <p className="mt-3 text-base leading-relaxed text-[var(--color-text-secondary)]">
                  {option.description}
                </p>
                {option.bullets && option.bullets.length > 0 ? (
                  <ul className="mt-3 flex flex-col gap-1.5" role="list">
                    {option.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-base text-[var(--color-text-secondary)]"
                      >
                        <span className="mt-0.5 shrink-0" aria-hidden="true">
                          <IntelligenceIcon name="check" size={14} />
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {option.bestFor ? (
                  <p className="mt-4 text-base leading-relaxed text-[var(--color-text-primary)]">
                    {option.bestFor}
                  </p>
                ) : null}
              </div>
              {option.cta ? (
                <Button
                  href={option.cta.href}
                  variant="secondary"
                  className="shrink-0 text-base md:text-[18px]"
                  analytics={{
                    location: "service_options",
                    label: option.cta.label,
                  }}
                >
                  {option.cta.label}
                </Button>
              ) : null}
            </article>
          </li>
        ))}
      </ul>
      {section.footnote ? (
        <p className="mt-6 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {section.footnote}
        </p>
      ) : null}
    </section>
  );
}

function AudienceSection({
  section,
}: {
  section: Extract<ServiceSection, { kind: "audience" }>;
}) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className="scroll-mt-[var(--header-scroll-offset)] border-t border-[var(--color-border)] py-12 md:py-14"
    >
      <h2
        id={`${section.id}-heading`}
        className="text-2xl font-semibold leading-[1.2] text-[var(--color-text-primary)] md:text-[28px]"
      >
        {section.title}
      </h2>
      {section.paragraphs.length > 0 ? (
        <div className="mt-6 flex max-w-3xl flex-col gap-4">
          {section.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base leading-relaxed text-[var(--color-text-secondary)]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      ) : null}
      {section.segments && section.segments.length > 0 ? (
        <ul className="mt-8 grid gap-4 sm:grid-cols-2" role="list">
          {section.segments.map((segment) => (
            <li key={segment.title}>
              <article className="h-full rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-secondary)]/60 p-6">
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  {segment.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[var(--color-text-secondary)]">
                  {segment.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

function FaqSection({
  section,
}: {
  section: Extract<ServiceSection, { kind: "faq" }>;
}) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className="scroll-mt-[var(--header-scroll-offset)] border-t border-[var(--color-border)] py-12 md:py-14"
    >
      <h2
        id={`${section.id}-heading`}
        className="text-2xl font-semibold leading-[1.2] text-[var(--color-text-primary)] md:text-[28px]"
      >
        {section.title}
      </h2>
      <dl className="mt-8 flex flex-col gap-4">
        {section.items.map((item) => (
          <div
            key={item.question}
            className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-secondary)]/40 p-5 md:p-6"
          >
            <dt className="text-base font-semibold leading-snug text-[var(--color-text-primary)]">
              {item.question}
            </dt>
            <dd className="mt-2 text-base leading-relaxed text-[var(--color-text-secondary)]">
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function CompareSection({
  section,
}: {
  section: Extract<ServiceSection, { kind: "compare" }>;
}) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className="scroll-mt-[var(--header-scroll-offset)] border-t border-[var(--color-border)] py-12 md:py-14"
    >
      <h2
        id={`${section.id}-heading`}
        className="text-2xl font-semibold leading-[1.2] text-[var(--color-text-primary)] md:text-[28px]"
      >
        {section.title}
      </h2>
      <div className="mt-6 flex max-w-3xl flex-col gap-4 rounded-[var(--radius-card)] border border-[var(--color-accent)]/30 bg-[var(--color-accent-tint)] p-6 md:p-8">
        {section.paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="text-base leading-relaxed text-[var(--color-text-secondary)]"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

function ServiceSectionBlock({ section }: { section: ServiceSection }) {
  switch (section.kind) {
    case "prose":
      return <ProseSection section={section} />;
    case "steps":
      return <StepsSection section={section} />;
    case "areas":
      return <AreasSection section={section} />;
    case "why":
      return <WhySection section={section} />;
    case "options":
      return <OptionsSection section={section} />;
    case "audience":
      return <AudienceSection section={section} />;
    case "faq":
      return <FaqSection section={section} />;
    case "compare":
      return <CompareSection section={section} />;
    default:
      return null;
  }
}

export function ServicePageContent({
  document,
}: {
  document: ServicePageDocument;
}) {
  const { hero, sections, finalCta, conversion } = document;

  return (
    <div className="bg-[var(--color-shell)] pb-24">
      <section
        aria-labelledby="service-hero-heading"
        className="mx-auto max-w-[var(--container-max)] px-6 py-16 md:px-8 md:py-20 lg:px-12 lg:py-24"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <div>
            <p className="text-xs font-normal uppercase leading-[1.4] tracking-[0.08em] text-[var(--color-accent)]">
              {hero.eyebrow}
            </p>
            <h1
              id="service-hero-heading"
              className="mt-4 text-[36px] font-semibold leading-[1.15] text-[var(--color-text-primary)] md:text-[40px] lg:text-[48px]"
            >
              {hero.title}
            </h1>
            <p className="mt-4 text-base font-normal leading-relaxed text-[var(--color-accent)] md:text-lg">
              {hero.highlights}
            </p>
            <p className="mt-4 text-xl font-semibold leading-snug text-[var(--color-text-primary)] md:text-2xl">
              {hero.subhead}
            </p>
            <div className="mt-5 flex max-w-xl flex-col gap-4">
              {hero.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base font-normal leading-relaxed text-[var(--color-text-secondary)]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            {hero.closingLine ? (
              <p className="mt-6 text-base font-semibold leading-relaxed text-[var(--color-text-primary)]">
                {hero.closingLine}
              </p>
            ) : null}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href={hero.primaryCta.href}
                analytics={{
                  location: "service_hero",
                  label: hero.primaryCta.label,
                }}
              >
                {hero.primaryCta.label}
              </Button>
              <Button
                href={conversion.stickyCta.href}
                variant="secondary"
                analytics={{
                  location: "service_hero",
                  label: conversion.stickyCta.label,
                }}
              >
                {conversion.stickyCta.label}
              </Button>
            </div>
          </div>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg lg:max-w-none">
            <Image
              src="/images/qiera/operating-model.png"
              alt=""
              fill
              priority
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 480px"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[var(--container-max)] px-6 pb-16 md:px-8 lg:px-12 lg:pb-20">
        {sections.map((section) => (
          <div key={section.id}>
            <ServiceSectionBlock section={section} />
            {section.id === conversion.insertAfterSectionId ? (
              <ServiceConversionBlocks conversion={conversion} />
            ) : null}
          </div>
        ))}

        <section
          aria-labelledby="service-final-cta-heading"
          className="mt-4 border-t border-[var(--color-border)] pt-12 md:pt-14"
        >
          <div className="flex flex-col gap-8 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-secondary)]/60 p-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8 lg:p-8">
            <div>
              <h2
                id="service-final-cta-heading"
                className="text-[28px] font-semibold leading-[1.2] text-[var(--color-text-primary)] md:text-[32px]"
              >
                {finalCta.title}
              </h2>
              <div className="mt-4 flex flex-col gap-3">
                {finalCta.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-relaxed text-[var(--color-text-secondary)]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Button
                  href={finalCta.primaryCta.href}
                  analytics={{
                    location: "service_final",
                    label: finalCta.primaryCta.label,
                  }}
                >
                  {finalCta.primaryCta.label}
                </Button>
                <Button
                  href={finalCta.secondaryCta.href}
                  variant="secondary"
                  analytics={{
                    location: "service_final",
                    label: finalCta.secondaryCta.label,
                  }}
                >
                  {finalCta.secondaryCta.label}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ServiceStickyCta cta={conversion.stickyCta} pageTitle={hero.title} />
    </div>
  );
}
