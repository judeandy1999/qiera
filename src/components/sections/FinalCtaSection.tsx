import { Button } from "@/components/ui/Button";
import { finalCta } from "@/data/final-cta";

export function FinalCtaSection() {
  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-heading"
      className="scroll-mt-[length:var(--header-scroll-offset)] bg-[var(--color-shell)]"
    >
      <div className="mx-auto flex max-w-[var(--container-max)] flex-col gap-8 px-6 py-12 md:px-8 md:py-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-12 lg:py-16">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-normal uppercase leading-[1.4] tracking-[0.08em] text-[var(--color-accent)]">
            {finalCta.eyebrow}
          </p>
          <h2
            id="final-cta-heading"
            className="text-[28px] font-semibold leading-[1.2] text-[var(--color-text-primary)] md:text-[32px]"
          >
            {finalCta.title}
          </h2>
          <p className="max-w-xl text-base font-normal leading-relaxed text-[var(--color-text-secondary)]">
            {finalCta.body}
          </p>
        </div>

        <div className="flex flex-col gap-3 lg:items-end">
          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <Button href={finalCta.primary.href} variant="primary">
              {finalCta.primary.label}
            </Button>
            <Button href={finalCta.secondary.href} variant="secondary">
              {finalCta.secondary.label}
            </Button>
          </div>
          <p className="text-sm font-normal leading-[1.5] text-[var(--color-text-secondary)] lg:text-right">
            {finalCta.caption}
          </p>
        </div>
      </div>
    </section>
  );
}
