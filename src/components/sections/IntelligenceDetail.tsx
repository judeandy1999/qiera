import type { IntelligenceDimension } from "@/types/intelligence";
import { IntelligenceIcon } from "@/components/ui/IntelligenceIcon";

type IntelligenceDetailProps = {
  dimension: IntelligenceDimension;
  headingId: string;
};

export function IntelligenceDetail({
  dimension,
  headingId,
}: IntelligenceDetailProps) {
  return (
    <div className="flex min-h-full flex-col md:flex-row">
      {/* ── LEFT PANEL ─────────────────────────────────────────────────────── */}
      <div
        className="
          flex shrink-0 flex-col gap-5
          bg-[var(--color-modal-left-bg)]
          px-8 py-10
          md:w-[36%]
        "
      >
        {/* Icon container */}
        <div
          className="
            w-16 h-16 shrink-0
            flex items-center justify-center
            rounded-[var(--radius-card)]
            bg-[var(--color-accent-tint)]
          "
        >
          <IntelligenceIcon
            name={dimension.icon}
            size={32}
            className="text-[var(--color-accent)]"
          />
        </div>

        {/* Category label */}
        <p
          className="
            text-xs font-normal leading-[1.4]
            uppercase tracking-[0.1em]
            text-[var(--color-accent)]
          "
        >
          {dimension.categoryLabel}
        </p>

        {/* H2 title */}
        <h2
          id={headingId}
          className="
            text-[32px] font-semibold leading-[1.2]
            text-[var(--color-ink)]
            -mt-2
          "
        >
          {dimension.title}
        </h2>

        {/* Description */}
        <p
          className="
            text-base font-normal leading-relaxed
            text-[var(--color-ink-secondary)]
          "
        >
          {dimension.description}
        </p>

        {/* Divider */}
        <hr className="border-t border-[var(--color-card-border)] my-1" />

        {/* WHAT IT DELIVERS */}
        <div className="flex flex-col gap-4">
          <p
            className="
              text-xs font-normal leading-[1.4]
              uppercase tracking-[0.1em]
              text-[var(--color-accent)]
            "
          >
            WHAT IT DELIVERS
          </p>

          <ul className="flex flex-col gap-4" role="list">
            {dimension.delivers.map((item) => (
              <li key={item.heading} className="flex gap-3 items-start">
                <span className="shrink-0 mt-0.5 text-[var(--color-accent)]">
                  <IntelligenceIcon name="check" size={20} />
                </span>
                <div className="flex flex-col gap-0.5">
                  <span
                    className="
                      text-base font-semibold leading-[1.5]
                      text-[var(--color-ink)]
                    "
                  >
                    {item.heading}
                  </span>
                  <span
                    className="
                      text-xs font-normal leading-[1.4]
                      text-[var(--color-ink-secondary)]
                    "
                  >
                    {item.body}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <hr className="border-t border-[var(--color-card-border)] my-1" />

        {/* Evidence note */}
        <div className="flex gap-3 items-start">
          <span className="shrink-0 mt-0.5 text-[var(--color-accent)]">
            <IntelligenceIcon name="shield" size={20} />
          </span>
          <div className="flex flex-col gap-1">
            <span
              className="
                text-base font-semibold leading-[1.5]
                text-[var(--color-accent)]
              "
            >
              Evidence-Aware Intelligence
            </span>
            <span
              className="
                text-xs font-normal leading-[1.4]
                text-[var(--color-ink-secondary)]
              "
            >
              All insights are grounded in verifiable sources and transparent
              methodology—so you can act with clarity and confidence.
            </span>
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL ────────────────────────────────────────────────────── */}
      <div
        className="
          flex min-w-0 flex-1 flex-col gap-6
          bg-[var(--color-surface)]
          px-8 py-10
        "
      >
        {/* KEY QUESTIONS */}
        <section>
          <p
            className="
              text-xs font-normal leading-[1.4]
              uppercase tracking-[0.1em]
              text-[var(--color-accent)]
              mb-4
            "
          >
            KEY QUESTIONS WE ANSWER
          </p>
          <ul
            className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3"
            role="list"
          >
            {dimension.keyQuestions.map((question) => (
              <li key={question} className="flex gap-2 items-start">
                <span
                  aria-hidden="true"
                  className="shrink-0 text-[var(--color-accent)] font-semibold leading-relaxed"
                >
                  &bull;
                </span>
                <span
                  className="
                    text-base font-normal leading-relaxed
                    text-[var(--color-ink)]
                  "
                >
                  {question}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* ANALYSIS SECTIONS */}
        {dimension.analysisSections.map((section) => (
          <section key={section.sectionLabel}>
            <hr className="border-t border-[var(--color-card-border)] mb-6" />
            <p
              className="
                text-xs font-normal leading-[1.4]
                uppercase tracking-[0.1em]
                text-[var(--color-accent)]
                mb-4
              "
            >
              {section.sectionLabel}
            </p>
            <ul
              className="
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                gap-4
              "
              role="list"
            >
              {section.items.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col gap-2 p-4 rounded-[var(--radius-card)] border border-[var(--color-card-border)]"
                >
                  <span className="text-[var(--color-accent)]">
                    <IntelligenceIcon name={item.icon ?? "chart"} size={32} />
                  </span>
                  <span
                    className="
                      text-base font-semibold leading-[1.5]
                      text-[var(--color-ink)]
                    "
                  >
                    {item.title}
                  </span>
                  <span
                    className="
                      text-xs font-normal leading-[1.4]
                      text-[var(--color-ink-secondary)]
                    "
                  >
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* EVIDENCE SECTION (optional) */}
        {dimension.evidenceItems && dimension.evidenceItems.length > 0 && (
          <section>
            <hr className="border-t border-[var(--color-card-border)] mb-6" />
            {dimension.evidenceSectionLabel && (
              <p
                className="
                  text-xs font-normal leading-[1.4]
                  uppercase tracking-[0.1em]
                  text-[var(--color-accent)]
                  mb-4
                "
              >
                {dimension.evidenceSectionLabel}
              </p>
            )}
            <ul
              className="
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                gap-4
              "
              role="list"
            >
              {dimension.evidenceItems.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col gap-2 p-4 rounded-[var(--radius-card)] border border-[var(--color-card-border)]"
                >
                  <span className="text-[var(--color-accent)]">
                    <IntelligenceIcon name={item.icon ?? "shield"} size={32} />
                  </span>
                  <span
                    className="
                      text-base font-semibold leading-[1.5]
                      text-[var(--color-ink)]
                    "
                  >
                    {item.title}
                  </span>
                  <span
                    className="
                      text-xs font-normal leading-[1.4]
                      text-[var(--color-ink-secondary)]
                    "
                  >
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* STRATEGIC BENEFITS */}
        <section>
          <hr className="border-t border-[var(--color-card-border)] mb-6" />
          <p
            className="
              text-xs font-normal leading-[1.4]
              uppercase tracking-[0.1em]
              text-[var(--color-accent)]
              mb-4
            "
          >
            STRATEGIC BENEFITS
          </p>
          <ul
            className="
              grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5
              gap-4
            "
            role="list"
          >
            {dimension.strategicBenefits.map((benefit) => (
              <li key={benefit.title} className="flex flex-col gap-2">
                <span className="text-[var(--color-accent)]">
                  <IntelligenceIcon name={benefit.icon ?? "rocket"} size={24} />
                </span>
                <span
                  className="
                    text-base font-semibold leading-[1.5]
                    text-[var(--color-ink)]
                  "
                >
                  {benefit.title}
                </span>
                <span
                  className="
                    text-xs font-normal leading-[1.4]
                    text-[var(--color-ink-secondary)]
                  "
                >
                  {benefit.description}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
