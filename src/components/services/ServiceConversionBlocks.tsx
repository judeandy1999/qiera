import { IntelligenceIcon } from "@/components/ui/IntelligenceIcon";
import { ServiceConsultationForm } from "@/components/services/ServiceConsultationForm";
import type { ServiceConversion } from "@/types/service-page";

export function ServiceConversionBlocks({
  conversion,
}: {
  conversion: ServiceConversion;
}) {
  const { proof, consultation } = conversion;

  return (
    <div className="flex flex-col gap-10 border-t border-[var(--color-border)] py-12 md:py-14">
      <section aria-labelledby="service-proof-heading">
        <h2
          id="service-proof-heading"
          className="text-2xl font-semibold leading-[1.2] text-[var(--color-text-primary)] md:text-[28px]"
        >
          {proof.title}
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {proof.items.map((item) => (
            <li key={item.title}>
              <article className="flex h-full flex-col gap-3 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-secondary)]/60 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent-tint)]">
                  <IntelligenceIcon
                    name={item.icon}
                    size={20}
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {item.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="book-consultation"
        aria-labelledby="service-consultation-heading"
        className="scroll-mt-[var(--header-scroll-offset)] rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-secondary)]/60 p-6 md:p-8"
      >
        <p className="text-xs font-normal uppercase leading-[1.4] tracking-[0.08em] text-[var(--color-accent)]">
          {consultation.eyebrow}
        </p>
        <h2
          id="service-consultation-heading"
          className="mt-3 text-2xl font-semibold leading-[1.2] text-[var(--color-text-primary)] md:text-[28px]"
        >
          {consultation.title}
        </h2>
        <ul className="mt-4 flex max-w-2xl flex-col gap-2" role="list">
          {consultation.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span className="mt-0.5 shrink-0" aria-hidden="true">
                <IntelligenceIcon name="check" size={16} />
              </span>
              <span className="text-base leading-relaxed text-[var(--color-text-secondary)]">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-8 max-w-xl">
          <ServiceConsultationForm
            topic={consultation.topic}
            submitLabel={consultation.submitLabel}
          />
        </div>
        <p className="mt-4 text-sm text-[var(--color-text-secondary)]">
          Prefer the full contact form?{" "}
          <a
            href={`/contact?topic=${consultation.topic}`}
            className="text-[var(--color-accent)] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]"
          >
            Open contact page
          </a>
          .
        </p>
      </section>
    </div>
  );
}
