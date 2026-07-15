import { AuditHeroGraphic } from "@/components/audit/AuditHeroGraphic";
import { AuditForm } from "@/components/forms/AuditForm";
import { IntelligenceIcon } from "@/components/ui/IntelligenceIcon";
import { auditCopy } from "@/data/audit-options";

export function AuditPageContent() {
  const { eyebrow, title, body, outcomes, howHeading, howSub } = auditCopy;

  return (
    <div className="bg-[var(--color-shell)]">
      <section
        aria-labelledby="audit-hero-heading"
        className="mx-auto max-w-[var(--container-max)] px-6 py-16 md:px-8 md:py-20 lg:px-12 lg:py-24"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div>
            <p className="text-xs font-normal uppercase leading-[1.4] tracking-[0.08em] text-[var(--color-accent)]">
              {eyebrow}
            </p>
            <h1
              id="audit-hero-heading"
              className="mt-4 text-[36px] font-semibold leading-[1.15] text-[var(--color-text-primary)] md:text-[40px] lg:text-[48px]"
            >
              {title}
            </h1>
            <p className="mt-5 max-w-xl text-base font-normal leading-relaxed text-[var(--color-text-secondary)]">
              {body}
            </p>
            <ul
              className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
              role="list"
              aria-label="Audit outcomes"
            >
              {outcomes.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 text-sm font-normal text-[var(--color-text-primary)] md:text-base"
                >
                  <IntelligenceIcon name={item.icon} size={20} strokeWidth={1.5} />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
          <AuditHeroGraphic />
        </div>
      </section>

      <section
        aria-labelledby="audit-how-heading"
        className="mx-auto max-w-[var(--container-max)] px-6 pb-16 md:px-8 lg:px-12 lg:pb-24"
      >
        <h2
          id="audit-how-heading"
          className="text-2xl font-semibold text-[var(--color-text-primary)] md:text-[28px]"
        >
          {howHeading}
        </h2>
        <p className="mt-2 text-base text-[var(--color-text-secondary)]">
          {howSub}
        </p>
        <div className="mt-10">
          <AuditForm />
        </div>
      </section>
    </div>
  );
}
