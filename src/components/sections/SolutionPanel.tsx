import Image from "next/image";

import type { SolutionChallenge } from "@/types/solutions";
import { IntelligenceIcon } from "@/components/ui/IntelligenceIcon";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { GaugeChart } from "@/components/ui/GaugeChart";
import { Sparkline } from "@/components/ui/Sparkline";

type SolutionPanelProps = {
  challenge: SolutionChallenge;
};

export function SolutionPanel({ challenge }: SolutionPanelProps) {
  const valueColor =
    challenge.opportunityCard.valueTone === "positive"
      ? "text-[var(--color-positive)]"
      : "text-[var(--color-accent)]";

  return (
    <div className="flex min-w-0 flex-col gap-8 overflow-x-hidden">
      {/* Dashboard grid */}
      <div className="grid min-w-0 grid-cols-1 gap-4 lg:grid-cols-12">
        {/* Hero */}
        <div className="flex min-w-0 flex-col gap-4 rounded-[var(--radius-card)] border border-[var(--color-card-border)] bg-[var(--color-surface)] p-6 lg:col-span-4">
          <h3 className="text-2xl font-semibold leading-tight text-[var(--color-ink)]">
            {challenge.title}
          </h3>
          <p className="text-base font-normal leading-relaxed text-[var(--color-ink-secondary)]">
            {challenge.description}
          </p>
          <ul className="flex flex-col gap-2" role="list">
            {challenge.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-[var(--color-accent)]">
                  <IntelligenceIcon name="check" size={18} />
                </span>
                <span className="text-base text-[var(--color-ink)]">{bullet}</span>
              </li>
            ))}
          </ul>
          {challenge.illustrationSrc ? (
            <div className="relative mt-auto aspect-square w-full max-w-[200px] self-center">
              <Image
                src={challenge.illustrationSrc}
                alt={challenge.illustrationAlt ?? ""}
                fill
                className="object-contain"
                sizes="200px"
              />
            </div>
          ) : null}
        </div>

        {/* Metric / gauge */}
        <div className="flex min-w-0 flex-col gap-3 rounded-[var(--radius-card)] border border-[var(--color-card-border)] p-6 lg:col-span-3">
          <p className="text-xs font-normal uppercase tracking-[0.08em] text-[var(--color-ink-secondary)]">
            {challenge.metricCard.title}
          </p>
          <p className="text-[40px] font-semibold leading-[1.1] text-[var(--color-accent)]">
            {challenge.metricCard.value}
          </p>
          <p className="text-sm text-[var(--color-ink-secondary)]">
            {challenge.metricCard.valueCaption}
          </p>
          <div className="flex flex-col items-center gap-1 py-2">
            <GaugeChart value={challenge.metricCard.gaugeValue} />
            <p className="text-center text-sm font-semibold text-[var(--color-accent)]">
              {challenge.metricCard.gaugeLabel}
            </p>
            {challenge.metricCard.gaugeSubtext ? (
              <p className="text-center text-xs text-[var(--color-ink-secondary)]">
                {challenge.metricCard.gaugeSubtext}
              </p>
            ) : null}
          </div>
          <div className="mt-auto flex gap-2 rounded-[var(--radius-card)] bg-[var(--color-accent-tint)] p-3">
            <IntelligenceIcon
              name={challenge.metricCard.callout.icon}
              size={16}
            />
            <p className="text-xs leading-[1.4] text-[var(--color-ink-secondary)]">
              {challenge.metricCard.callout.text}
            </p>
          </div>
        </div>

        {/* Category bars */}
        <div className="flex min-w-0 flex-col gap-3 rounded-[var(--radius-card)] border border-[var(--color-card-border)] p-6 lg:col-span-3">
          <p className="text-xs font-normal uppercase tracking-[0.08em] text-[var(--color-ink-secondary)]">
            {challenge.categoryCard.title}
          </p>
          <ul className="flex flex-col gap-3" role="list">
            {challenge.categoryCard.rows.map((row) => (
              <li key={row.label} className="flex min-w-0 flex-col gap-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="flex min-w-0 items-center gap-2 text-sm text-[var(--color-ink)]">
                    <IntelligenceIcon name={row.icon} size={14} />
                    <span className="truncate">{row.label}</span>
                  </span>
                  <span className="shrink-0 text-sm font-semibold text-[var(--color-accent)]">
                    {row.percent}%
                  </span>
                </div>
                <ProgressBar value={row.percent} label={row.label} />
              </li>
            ))}
          </ul>
          <div className="mt-auto flex gap-2 rounded-[var(--radius-card)] bg-[var(--color-accent-tint)] p-3">
            <IntelligenceIcon
              name={challenge.categoryCard.callout.icon}
              size={16}
            />
            <p className="text-xs leading-[1.4] text-[var(--color-ink-secondary)]">
              {challenge.categoryCard.callout.text}
            </p>
          </div>
        </div>

        {/* Opportunity */}
        <div className="flex min-w-0 flex-col gap-3 rounded-[var(--radius-card)] border border-[var(--color-card-border)] p-6 lg:col-span-2">
          <p className="text-xs font-normal uppercase tracking-[0.08em] text-[var(--color-ink-secondary)]">
            {challenge.opportunityCard.title}
          </p>
          <p className={`text-[40px] font-semibold leading-[1.1] ${valueColor}`}>
            {challenge.opportunityCard.value}
          </p>
          <p className="text-sm text-[var(--color-ink-secondary)]">
            {challenge.opportunityCard.valueCaption}
          </p>
          <Sparkline
            values={challenge.opportunityCard.sparkline}
            tone={challenge.opportunityCard.valueTone}
          />
          <ul className="mt-auto flex flex-col gap-2" role="list">
            {challenge.opportunityCard.rows.map((row) => (
              <li key={row.label} className="flex items-start gap-2">
                <IntelligenceIcon name={row.icon} size={14} />
                <span className="text-xs text-[var(--color-ink-secondary)]">
                  {row.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* How We Create Impact + Outcomes */}
      <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-2">
        <section>
          <h3 className="mb-6 text-base font-semibold text-[var(--color-ink)]">
            How We Create Impact
          </h3>
          <ol className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {challenge.impactSteps.map((step, index) => (
              <li
                key={step.title}
                className="relative flex flex-col items-center gap-2 text-center"
              >
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-accent)] text-xs font-semibold text-white"
                  aria-hidden="true"
                >
                  {index + 1}
                </div>
                <IntelligenceIcon
                  name={step.icon}
                  size={28}
                  strokeWidth={2}
                />
                <span className="text-sm font-semibold text-[var(--color-ink)]">
                  {step.title}
                </span>
                <span className="text-xs text-[var(--color-ink-secondary)]">
                  {step.description}
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h3 className="mb-6 text-base font-semibold text-[var(--color-ink)]">
            Outcomes You Can Expect
          </h3>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <ul className="flex flex-1 flex-col gap-3" role="list">
              {challenge.outcomes.map((outcome) => (
                <li key={outcome.label} className="flex items-start gap-3">
                  <IntelligenceIcon name={outcome.icon} size={20} />
                  <span className="text-base text-[var(--color-ink)]">
                    {outcome.label}
                  </span>
                </li>
              ))}
            </ul>
            {challenge.outcomesIllustrationSrc ? (
              <div className="relative mx-auto aspect-square w-44 shrink-0 sm:mx-0 sm:w-48">
                <Image
                  src="/images/qiera/solutions/outcome-target.png"
                  alt="3D target with arrow in the bullseye"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 176px, 192px"
                />
              </div>
            ) : null}
          </div>
        </section>
      </div>
    </div>
  );
}
