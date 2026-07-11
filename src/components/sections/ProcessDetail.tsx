"use client";

import type { CSSProperties } from "react";

import type { ProcessStep } from "@/types/process";
import { IntelligenceIcon } from "@/components/ui/IntelligenceIcon";

const EVIDENCE_LEVELS = [
  { code: "E0", label: "Hypothesis" },
  { code: "E1", label: "Weak" },
  { code: "E2", label: "Limited" },
  { code: "E3", label: "Moderate" },
  { code: "E4", label: "Strong" },
  { code: "E5", label: "Validated" },
] as const;

type ProcessDetailProps = {
  step: ProcessStep;
  headingId: string;
};

export function ProcessDetail({
  step,
  headingId,
}: ProcessDetailProps) {
  return (
    <div className="flex min-h-full flex-col">
      <div className="flex flex-1 flex-col md:flex-row">
        {/* ── LEFT PANEL ───────────────────────────────────────────────────── */}
        <div className="flex shrink-0 flex-col gap-4 bg-[var(--color-modal-left-bg)] px-6 py-8 md:w-[25%]">
          <p className="text-xs font-normal uppercase leading-[1.4] tracking-[0.1em] text-[var(--color-accent)]">
            STEP {step.stepNumber} OF 6
          </p>

          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-base font-semibold leading-[1.4] text-white"
            aria-hidden="true"
          >
            {step.stepNumber}
          </div>

          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-tint)]"
            aria-hidden="true"
          >
            <IntelligenceIcon
              name={step.icon}
              size={32}
              className="text-[var(--color-accent)]"
            />
          </div>

          <h2
            id={headingId}
            className="text-[32px] font-semibold leading-[1.2] text-[var(--color-ink)]"
          >
            {step.title}
          </h2>

          <p className="text-base font-normal leading-relaxed text-[var(--color-ink-secondary)]">
            {step.overviewDescription}
          </p>

          <hr className="border-t border-[var(--color-card-border)]" />

          <div className="flex flex-col gap-2">
            <p className="text-xs font-normal uppercase leading-[1.4] tracking-[0.1em] text-[var(--color-accent)]">
              PRIMARY OBJECTIVE
            </p>
            <p className="text-base font-normal leading-relaxed text-[var(--color-ink-secondary)]">
              {step.primaryObjective}
            </p>
          </div>

          <hr className="border-t border-[var(--color-card-border)]" />

          <div className="flex gap-3 items-start rounded-[var(--radius-card)] border border-[var(--color-card-border)] bg-[var(--color-surface)] p-4">
            <span className="mt-0.5 shrink-0 text-[var(--color-accent)]">
              <IntelligenceIcon name="shield" size={20} />
            </span>
            <div className="flex flex-col gap-1">
              <p className="text-xs font-normal uppercase leading-[1.4] tracking-[0.1em] text-[var(--color-accent)]">
                EVIDENCE FIRST
              </p>
              <p className="text-xs font-normal leading-[1.4] text-[var(--color-ink-secondary)]">
                {step.evidenceFirst}
              </p>
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL ──────────────────────────────────────────────────── */}
        <div className="flex min-w-0 flex-1 flex-col gap-4 overflow-x-hidden bg-[var(--color-surface)] px-6 py-8">
          <section>
            <div className="mb-4 flex items-center gap-2">
              <span className="text-[var(--color-accent)]" aria-hidden="true">
                <IntelligenceIcon name="crosshair" size={16} />
              </span>
              <p className="text-xs font-normal uppercase leading-[1.4] tracking-[0.1em] text-[var(--color-accent)]">
                OVERVIEW
              </p>
            </div>
            <p className="text-base font-normal leading-relaxed text-[var(--color-ink)]">
              {step.overview}
            </p>
          </section>

          <hr className="border-t border-[var(--color-card-border)]" />

          <section className="min-w-0">
            <p className="mb-4 text-xs font-normal uppercase leading-[1.4] tracking-[0.1em] text-[var(--color-accent)]">
              WHAT WE DO
            </p>
            <div
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:[grid-template-columns:repeat(var(--wwd-cols),minmax(0,1fr))]"
              style={
                {
                  "--wwd-cols": step.whatWeDo.length,
                } as CSSProperties
              }
            >
              {step.whatWeDo.map((substep, index) => (
                <div
                  key={substep.title}
                  className="relative flex min-w-0 flex-col items-center gap-2 text-center"
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent-tint)]"
                    aria-hidden="true"
                  >
                    <IntelligenceIcon
                      name={substep.icon}
                      size={20}
                      className="text-[var(--color-accent)]"
                    />
                  </div>
                  {index < step.whatWeDo.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute top-3 -right-2 hidden text-[var(--color-ink-secondary)] lg:inline"
                    >
                      →
                    </span>
                  )}
                  <span className="text-sm font-semibold leading-[1.5] text-[var(--color-ink)]">
                    {substep.title}
                  </span>
                  <span className="text-xs font-normal leading-[1.4] text-[var(--color-ink-secondary)]">
                    {substep.description}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-t border-[var(--color-card-border)]" />

          <section className="grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            <InfoColumn
              icon="clipboardList"
              label="TYPICAL INPUTS"
              items={step.typicalInputs}
            />
            <InfoColumn
              icon="fileCheck"
              label="KEY OUTPUTS"
              items={step.keyOutputs}
            />
            <InfoColumn
              icon="trophy"
              label="SUCCESS CRITERIA"
              items={step.successCriteria}
            />
            <div className="flex min-w-0 flex-col gap-2 overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-card-border)] bg-[var(--color-accent-tint)] p-3 sm:col-span-2 xl:col-span-1">
              <div className="flex min-w-0 items-center gap-2">
                <span className="shrink-0 text-[var(--color-accent)]" aria-hidden="true">
                  <IntelligenceIcon name="shieldCheck" size={16} />
                </span>
                <p className="min-w-0 text-xs font-normal uppercase leading-[1.4] tracking-[0.1em] text-[var(--color-accent)]">
                  EVIDENCE & CONFIDENCE
                </p>
              </div>

              <p className="mt-2 text-xs font-normal uppercase leading-[1.4] tracking-[0.1em] text-[var(--color-ink-secondary)]">
                Evidence State
              </p>
              <div
                className="grid w-full min-w-0 grid-cols-3 gap-1"
                role="list"
                aria-label="Evidence state"
              >
                {EVIDENCE_LEVELS.map((level, index) => {
                  const active = index === step.evidenceState;
                  return (
                    <div
                      key={level.code}
                      role="listitem"
                      className={[
                        "flex min-w-0 flex-col items-center gap-0.5 overflow-hidden rounded px-1 py-1 text-center",
                        active
                          ? "bg-[var(--color-accent)] text-white"
                          : "bg-[var(--color-surface)] text-[var(--color-ink-secondary)]",
                      ].join(" ")}
                    >
                      <span className="text-xs font-semibold leading-[1.4]">
                        {level.code}
                      </span>
                      <span
                        className={[
                          "w-full truncate text-[10px] font-normal leading-tight",
                          active
                            ? "text-white"
                            : "text-[var(--color-ink-secondary)]",
                        ].join(" ")}
                      >
                        {level.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <p className="mt-3 text-xs font-normal uppercase leading-[1.4] tracking-[0.1em] text-[var(--color-ink-secondary)]">
                Confidence Range
              </p>
              <div className="flex min-w-0 items-center gap-2" aria-hidden="true">
                <span className="shrink-0 text-[10px] text-[var(--color-ink-secondary)]">
                  Very Low
                </span>
                <div className="relative h-1 min-w-0 flex-1 rounded-full bg-[var(--color-surface)]">
                  <span
                    className="absolute top-1/2 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]"
                    style={{
                      left: `${(step.evidenceState / 5) * 100}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </div>
                <span className="shrink-0 text-[10px] text-[var(--color-ink-secondary)]">
                  Very High
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export function ProcessWhyMattersBar({
  whyItMatters,
  nextStepTitle,
  onNextStep,
}: {
  whyItMatters: string;
  nextStepTitle: string;
  onNextStep: () => void;
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
            WHY THIS MATTERS
          </p>
          <p className="text-base font-normal leading-relaxed text-[var(--color-ink-secondary)]">
            {whyItMatters}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onNextStep}
        aria-label={`Next Step: ${nextStepTitle}`}
        className="min-h-[44px] shrink-0 cursor-pointer rounded-[var(--radius-button)] bg-[var(--color-accent)] px-6 py-3 text-base font-semibold leading-[1.5] text-white hover:bg-[var(--color-accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2"
      >
        → Next Step: {nextStepTitle}
      </button>
    </div>
  );
}

function InfoColumn({
  icon,
  label,
  items,
}: {
  icon: string;
  label: string;
  items: string[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="text-[var(--color-accent)]" aria-hidden="true">
          <IntelligenceIcon name={icon} size={16} />
        </span>
        <p className="text-xs font-normal uppercase leading-[1.4] tracking-[0.1em] text-[var(--color-accent)]">
          {label}
        </p>
      </div>
      <ul className="flex flex-col gap-2" role="list">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span
              aria-hidden="true"
              className="shrink-0 text-[var(--color-accent)]"
            >
              •
            </span>
            <span className="text-base font-normal leading-relaxed text-[var(--color-ink-secondary)]">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
