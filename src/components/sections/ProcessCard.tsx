"use client";

import type { Ref } from "react";

import type { ProcessStep } from "@/types/process";
import { IntelligenceIcon } from "@/components/ui/IntelligenceIcon";

type ProcessCardProps = {
  step: ProcessStep;
  onReadMore: () => void;
  readMoreRef?: Ref<HTMLButtonElement>;
};

export function ProcessCard({
  step,
  onReadMore,
  readMoreRef,
}: ProcessCardProps) {
  return (
    <div className="relative mt-4 flex h-full cursor-default flex-col items-center gap-4 rounded-[var(--radius-card)] border border-[var(--color-card-border)] bg-[var(--color-surface)] px-5 pb-6 pt-10 text-center">
      {/* Number badge straddles the top border — half outside, half inside */}
      <div
        className="absolute top-0 left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-accent)] text-xs font-semibold leading-none text-white"
        aria-hidden="true"
      >
        {step.stepNumber}
      </div>

      <div className="flex items-center justify-center" aria-hidden="true">
        <IntelligenceIcon
          name={step.icon}
          size={56}
          strokeWidth={1.5}
          className="text-[var(--color-accent)]"
        />
      </div>

      <p className="text-base font-semibold leading-[1.5] text-[var(--color-ink)]">
        {step.title}
      </p>

      <p className="text-base font-normal leading-relaxed text-[var(--color-ink-secondary)]">
        {step.overviewDescription}
      </p>

      <button
        type="button"
        ref={readMoreRef}
        onClick={onReadMore}
        aria-label={`Read more about ${step.title}`}
        className="mt-auto min-h-[44px] cursor-pointer text-base font-normal leading-relaxed text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2"
      >
        Read more →
      </button>
    </div>
  );
}
