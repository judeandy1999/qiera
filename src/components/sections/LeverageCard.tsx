"use client";

import type { Ref } from "react";

import type { Leverage } from "@/types/leverages";
import { IntelligenceIcon } from "@/components/ui/IntelligenceIcon";

type LeverageCardProps = {
  leverage: Leverage;
  active?: boolean;
  onLearnMore: () => void;
  learnMoreRef?: Ref<HTMLButtonElement>;
};

export function LeverageCard({
  leverage,
  active = false,
  onLearnMore,
  learnMoreRef,
}: LeverageCardProps) {
  return (
    <div
      className={[
        "flex h-full min-h-full w-full flex-1 cursor-default flex-col gap-4 rounded-[var(--radius-card)] border border-[var(--color-card-border)] p-6",
        active
          ? "border-l-2 border-l-[var(--color-card-active-border)] bg-[var(--color-card-active-bg)]"
          : "bg-[var(--color-surface)]",
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-tint)]">
          <IntelligenceIcon
            name={leverage.icon}
            size={24}
            className="text-[var(--color-accent)]"
          />
        </div>
        <p className="text-base font-semibold leading-[1.5] text-[var(--color-ink)]">
          {leverage.title}
        </p>
      </div>

      <ul className="flex flex-col gap-2" role="list">
        {leverage.overviewBullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2">
            <span className="mt-0.5 shrink-0" aria-hidden="true">
              <IntelligenceIcon name="check" size={16} />
            </span>
            <span className="text-base font-normal leading-relaxed text-[var(--color-ink-secondary)]">
              {bullet}
            </span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        ref={learnMoreRef}
        onClick={onLearnMore}
        aria-label={`Learn more about ${leverage.title}`}
        className="mt-auto min-h-[44px] cursor-pointer text-left text-base font-normal leading-relaxed text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2"
      >
        Learn more →
      </button>
    </div>
  );
}
