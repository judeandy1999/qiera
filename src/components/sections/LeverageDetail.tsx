import type { Leverage, LeverageMetricTone } from "@/types/leverages";
import { IntelligenceIcon } from "@/components/ui/IntelligenceIcon";
import { ProgressBar } from "@/components/ui/ProgressBar";

type LeverageDetailProps = {
  leverage: Leverage;
  headingId: string;
  onClose: () => void;
};

function toneTextClass(tone: LeverageMetricTone): string {
  switch (tone) {
    case "positive":
      return "text-[var(--color-positive)]";
    case "warning":
      return "text-[var(--color-warning)]";
    case "danger":
      return "text-[var(--color-danger)]";
    default:
      return "text-[var(--color-accent)]";
  }
}

function toneBadgeClass(tone: LeverageMetricTone): string {
  switch (tone) {
    case "positive":
      return "bg-[var(--color-positive-tint)] text-[var(--color-positive)]";
    case "warning":
      return "bg-[rgba(245,158,11,0.12)] text-[var(--color-warning)]";
    case "danger":
      return "bg-[rgba(239,68,68,0.12)] text-[var(--color-danger)]";
    default:
      return "bg-[var(--color-accent-tint)] text-[var(--color-accent)]";
  }
}

function valueToneClass(
  badge?: { text: string; tone: LeverageMetricTone },
): string {
  if (badge?.tone === "positive") return "text-[var(--color-positive)]";
  if (badge?.tone === "danger") return "text-[var(--color-danger)]";
  if (badge?.tone === "warning") return "text-[var(--color-warning)]";
  return "text-[var(--color-accent)]";
}

export function LeverageDetail({
  leverage,
  headingId,
  onClose,
}: LeverageDetailProps) {
  return (
    <div className="flex min-w-0 flex-col gap-8 p-6 md:p-8">
      {/* Header */}
      <header className="flex min-w-0 flex-col gap-4">
        <button
          type="button"
          onClick={onClose}
          className="self-start min-h-[44px] cursor-pointer text-left text-base font-normal leading-relaxed text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2"
        >
          ← Back to Leverages
        </button>

        <div className="flex min-w-0 items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-tint)]">
            <IntelligenceIcon
              name={leverage.icon}
              size={28}
              className="text-[var(--color-accent)]"
            />
          </div>
          <div className="flex min-w-0 flex-col gap-2">
            <h2
              id={headingId}
              className="text-[32px] font-semibold leading-[1.2] text-[var(--color-ink)]"
            >
              {leverage.title}
            </h2>
            <p className="text-base font-normal leading-relaxed text-[var(--color-ink-secondary)]">
              {leverage.description}
            </p>
          </div>
        </div>
      </header>

      {/* Impact metrics */}
      <section aria-label="Impact overview" className="min-w-0">
        <h3 className="mb-4 text-xs font-normal uppercase tracking-[0.08em] text-[var(--color-accent)]">
          Impact Overview
        </h3>
        <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {leverage.impactMetrics.map((metric) => (
            <div
              key={metric.label}
              className="flex min-w-0 flex-col gap-2 rounded-[var(--radius-card)] border border-[var(--color-card-border)] p-4"
            >
              <div className="flex items-center gap-2">
                <IntelligenceIcon name={metric.icon} size={18} />
                <span className="text-xs text-[var(--color-ink-secondary)]">
                  {metric.label}
                </span>
              </div>
              <p
                className={[
                  "text-[40px] font-semibold leading-[1.1]",
                  valueToneClass(metric.badge),
                ].join(" ")}
              >
                {metric.value}
              </p>
              {metric.badge ? (
                <span
                  className={[
                    "inline-flex w-fit rounded-full px-2 py-0.5 text-xs font-semibold",
                    toneBadgeClass(metric.badge.tone),
                  ].join(" ")}
                >
                  {metric.badge.text}
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* Mid band: valueDrivers | gapAnalysis | drivers */}
      {(leverage.valueDrivers ||
        leverage.gapAnalysis ||
        leverage.drivers) && (
        <section
          aria-label="Analysis"
          className="grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-2"
        >
          {leverage.valueDrivers ? (
            <div className="flex min-w-0 flex-col gap-4 rounded-[var(--radius-card)] border border-[var(--color-card-border)] p-5">
              <h3 className="text-xs font-normal uppercase tracking-[0.08em] text-[var(--color-accent)]">
                Value Drivers
              </h3>
              <ul className="flex flex-col gap-3" role="list">
                {leverage.valueDrivers.map((driver) => (
                  <li key={driver.label} className="flex min-w-0 flex-col gap-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex min-w-0 items-center gap-2 text-sm text-[var(--color-ink)]">
                        {driver.icon ? (
                          <IntelligenceIcon name={driver.icon} size={14} />
                        ) : null}
                        <span className="truncate">{driver.label}</span>
                      </span>
                      <span className="shrink-0 text-sm font-semibold text-[var(--color-accent)]">
                        {driver.percent}%
                      </span>
                    </div>
                    <ProgressBar
                      value={driver.percent}
                      label={driver.label}
                      tone="accent"
                    />
                  </li>
                ))}
              </ul>
              {leverage.valueDriversCallout ? (
                <p className="rounded-[var(--radius-card)] bg-[var(--color-accent-tint)] p-3 text-sm text-[var(--color-ink-secondary)]">
                  {leverage.valueDriversCallout}
                </p>
              ) : null}
            </div>
          ) : null}

          {leverage.gapAnalysis ? (
            <div className="flex min-w-0 flex-col gap-4 overflow-x-auto rounded-[var(--radius-card)] border border-[var(--color-card-border)] p-5">
              <h3 className="text-xs font-normal uppercase tracking-[0.08em] text-[var(--color-accent)]">
                Gap Analysis
              </h3>
              <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-[var(--color-card-border)] text-[var(--color-ink-secondary)]">
                    <th className="py-2 pr-2 font-normal">Element</th>
                    <th className="py-2 pr-2 font-normal">Score</th>
                    <th className="py-2 pr-2 font-normal">Industry Avg</th>
                    <th className="py-2 pr-2 font-normal">Gap</th>
                    <th className="py-2 font-normal">Impact</th>
                  </tr>
                </thead>
                <tbody>
                  {leverage.gapAnalysis.map((row) => (
                    <tr
                      key={row.element}
                      className="border-b border-[var(--color-card-border)] last:border-0"
                    >
                      <td className="py-2 pr-2">
                        <span className="flex items-center gap-2 text-[var(--color-ink)]">
                          <IntelligenceIcon name={row.icon} size={14} />
                          {row.element}
                        </span>
                      </td>
                      <td className="py-2 pr-2 font-semibold text-[var(--color-ink)]">
                        {row.score}
                      </td>
                      <td className="py-2 pr-2 text-[var(--color-ink-secondary)]">
                        {row.industryAvg}
                      </td>
                      <td
                        className={[
                          "py-2 pr-2 font-semibold",
                          row.gap >= 0
                            ? "text-[var(--color-positive)]"
                            : "text-[var(--color-danger)]",
                        ].join(" ")}
                      >
                        {row.gap > 0 ? `+${row.gap}` : row.gap}
                      </td>
                      <td className="py-2">
                        <span
                          className={[
                            "inline-flex rounded-full px-2 py-0.5 text-xs font-semibold",
                            row.impact === "High"
                              ? toneBadgeClass("danger")
                              : row.impact === "Medium"
                                ? toneBadgeClass("warning")
                                : toneBadgeClass("positive"),
                          ].join(" ")}
                        >
                          {row.impact} Impact
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}

          {leverage.drivers ? (
            <div
              className={[
                "flex min-w-0 flex-col gap-4 rounded-[var(--radius-card)] border border-[var(--color-card-border)] p-5",
                leverage.valueDrivers || leverage.gapAnalysis
                  ? ""
                  : "lg:col-span-2",
              ].join(" ")}
            >
              <h3 className="text-xs font-normal uppercase tracking-[0.08em] text-[var(--color-accent)]">
                Key Drivers
              </h3>
              <ul
                className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
                role="list"
              >
                {leverage.drivers.map((driver) => (
                  <li
                    key={driver.title}
                    className="flex min-w-0 flex-col gap-2 rounded-[var(--radius-card)] border border-[var(--color-card-border)] p-3"
                  >
                    <div className="flex items-center gap-2">
                      <IntelligenceIcon name={driver.icon} size={16} />
                      <span className="text-sm font-semibold text-[var(--color-ink)]">
                        {driver.title}
                      </span>
                    </div>
                    <p className="text-lg font-semibold text-[var(--color-accent)]">
                      {driver.score}
                    </p>
                    <span
                      className={[
                        "inline-flex w-fit rounded-full px-2 py-0.5 text-xs font-semibold",
                        toneBadgeClass(driver.statusTone),
                      ].join(" ")}
                    >
                      {driver.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>
      )}

      {/* Opportunities */}
      <section aria-label="Top opportunities" className="min-w-0">
        <h3 className="mb-4 text-xs font-normal uppercase tracking-[0.08em] text-[var(--color-accent)]">
          Top Opportunities
        </h3>
        <ul className="flex flex-col gap-3" role="list">
          {leverage.opportunities.map((opp) => (
            <li
              key={opp.title}
              className="flex min-w-0 flex-col gap-2 rounded-[var(--radius-card)] border border-[var(--color-card-border)] p-4 sm:flex-row sm:items-start sm:justify-between"
            >
              <div className="flex min-w-0 gap-3">
                <span className="mt-0.5 shrink-0">
                  <IntelligenceIcon name={opp.icon} size={20} />
                </span>
                <div className="flex min-w-0 flex-col gap-1">
                  <p className="text-base font-semibold text-[var(--color-ink)]">
                    {opp.title}
                  </p>
                  <p className="text-sm text-[var(--color-ink-secondary)]">
                    {opp.description}
                  </p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {opp.tags.map((tag) => (
                      <span
                        key={`${opp.title}-${tag.label}`}
                        className={[
                          "inline-flex rounded-full px-2 py-0.5 text-xs font-semibold",
                          toneBadgeClass(tag.tone),
                        ].join(" ")}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p
                className={[
                  "shrink-0 text-base font-semibold",
                  toneTextClass("positive"),
                ].join(" ")}
              >
                {opp.annualImpact}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Time to Value */}
      <section aria-label="Impact potential and time to value" className="min-w-0">
        <h3 className="mb-4 text-xs font-normal uppercase tracking-[0.08em] text-[var(--color-accent)]">
          Impact Potential & Time to Value
        </h3>
        <ol className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {leverage.timeToValue.map((stage, index) => (
            <li
              key={stage.title}
              className="relative flex min-w-0 flex-col gap-2 rounded-[var(--radius-card)] border border-[var(--color-card-border)] p-4"
            >
              <div className="flex items-center gap-2">
                <IntelligenceIcon name={stage.icon} size={18} />
                <span className="text-xs font-semibold uppercase tracking-[0.06em] text-[var(--color-ink-secondary)]">
                  Stage {index + 1}
                </span>
              </div>
              <p className="text-base font-semibold text-[var(--color-ink)]">
                {stage.title}
              </p>
              <p className="text-xs text-[var(--color-ink-secondary)]">
                {stage.timeframe}
              </p>
              <p className="text-xl font-semibold text-[var(--color-accent)]">
                {stage.value}
              </p>
              {stage.caption ? (
                <p className="text-xs text-[var(--color-ink-secondary)]">
                  {stage.caption}
                </p>
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      {/* Roadmap */}
      <section aria-label="Recommended action roadmap" className="min-w-0">
        <h3 className="mb-4 text-xs font-normal uppercase tracking-[0.08em] text-[var(--color-accent)]">
          Recommended Action Roadmap
        </h3>
        <ol className="flex flex-col gap-3">
          {leverage.roadmap.map((step) => (
            <li
              key={step.step}
              className="flex min-w-0 flex-col gap-2 rounded-[var(--radius-card)] border border-[var(--color-card-border)] p-4 sm:flex-row sm:items-start sm:gap-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-semibold text-white">
                {step.step}
              </span>
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-base font-semibold text-[var(--color-ink)]">
                    {step.title}
                  </p>
                  <span className="inline-flex rounded-full bg-[var(--color-accent-tint)] px-2 py-0.5 text-xs font-semibold text-[var(--color-accent)]">
                    {step.duration}
                  </span>
                </div>
                <p className="text-sm text-[var(--color-ink-secondary)]">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
        {leverage.roadmapCallout ? (
          <p className="mt-4 rounded-[var(--radius-card)] bg-[var(--color-accent-tint)] p-3 text-sm text-[var(--color-ink-secondary)]">
            {leverage.roadmapCallout}
          </p>
        ) : null}
      </section>

      {/* Outcomes + Success Factors */}
      <section className="grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="min-w-0">
          <h3 className="mb-4 text-xs font-normal uppercase tracking-[0.08em] text-[var(--color-accent)]">
            Expected Outcomes
          </h3>
          <ul className="flex flex-col gap-2" role="list">
            {leverage.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0" aria-hidden="true">
                  <IntelligenceIcon name="check" size={16} />
                </span>
                <span className="text-base text-[var(--color-ink-secondary)]">
                  {outcome}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0">
          <h3 className="mb-4 text-xs font-normal uppercase tracking-[0.08em] text-[var(--color-accent)]">
            Key Success Factors
          </h3>
          <ul className="flex flex-col gap-3" role="list">
            {leverage.successFactors.map((factor) => (
              <li key={factor.label} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-tint)]">
                  <IntelligenceIcon name={factor.icon} size={16} />
                </span>
                <span className="text-base font-semibold text-[var(--color-ink)]">
                  {factor.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export function LeverageCtaBar({
  title,
  body,
  href = "/contact",
  onNavigate,
}: {
  title: string;
  body: string;
  href?: string;
  onNavigate?: () => void;
}) {
  return (
    <div className="flex flex-col gap-4 border-t border-[var(--color-card-border)] bg-[var(--color-accent-tint)] p-6 md:flex-row md:items-center md:justify-between">
      <div className="flex min-w-0 flex-1 gap-3">
        <span
          className="mt-0.5 shrink-0 text-[var(--color-accent)]"
          aria-hidden="true"
        >
          <IntelligenceIcon name="lightbulb" size={24} />
        </span>
        <div className="flex min-w-0 flex-col gap-1">
          <p className="text-base font-semibold leading-[1.5] text-[var(--color-ink)]">
            {title}
          </p>
          <p className="text-base font-normal leading-relaxed text-[var(--color-ink-secondary)]">
            {body}
          </p>
        </div>
      </div>

      <a
        href={href}
        onClick={onNavigate}
        className="inline-flex min-h-[44px] shrink-0 cursor-pointer items-center justify-center rounded-[var(--radius-button)] bg-[var(--color-accent)] px-6 py-3 text-base font-semibold leading-[1.5] text-white hover:bg-[var(--color-accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2"
      >
        Talk to an Expert
      </a>
    </div>
  );
}
