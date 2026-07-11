"use client";

import { useId, useRef, useState } from "react";

import { solutions } from "@/data/solutions";
import { SolutionPanel } from "@/components/sections/SolutionPanel";
import { IntelligenceIcon } from "@/components/ui/IntelligenceIcon";

export function SolutionsSection() {
  const [activeId, setActiveId] = useState(solutions[0].id);
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = solutions.find((s) => s.id === activeId) ?? solutions[0];

  function selectIndex(index: number) {
    const next = solutions[index];
    if (!next) return;
    setActiveId(next.id);
    tabRefs.current[index]?.focus();
  }

  function onTabKeyDown(e: React.KeyboardEvent, index: number) {
    const last = solutions.length - 1;
    let next = index;
    if (e.key === "ArrowRight") next = index === last ? 0 : index + 1;
    else if (e.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    selectIndex(next);
  }

  return (
    <section
      id="solutions"
      className="scroll-mt-[length:var(--header-scroll-offset)] bg-[var(--color-surface)]"
    >
      <div className="mx-auto max-w-[var(--container-max)] px-4 py-12 md:px-6 md:py-14 lg:px-8 lg:py-16">
        <div className="mb-8 flex max-w-3xl flex-col gap-3">
          <p className="text-xs font-normal uppercase leading-[1.4] tracking-[0.08em] text-[var(--color-accent)]">
            SOLUTIONS
          </p>
          <h2 className="text-[32px] font-semibold leading-[1.2] text-[var(--color-ink)]">
            Solving Your Most Critical Challenges.
          </h2>
          <p className="text-base font-normal leading-relaxed text-[var(--color-ink-secondary)]">
            Choose a challenge area to see how we identify issues, quantify
            impact, and deliver results.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Challenge areas"
          className="mb-8 flex gap-2 overflow-x-auto pb-2 [scroll-snap-type:x_mandatory]"
        >
          {solutions.map((s, i) => {
            const selected = s.id === activeId;
            return (
              <button
                key={s.id}
                type="button"
                role="tab"
                id={`${baseId}-tab-${s.id}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel-${s.id}`}
                tabIndex={selected ? 0 : -1}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                onClick={() => setActiveId(s.id)}
                onKeyDown={(e) => onTabKeyDown(e, i)}
                className={[
                  "flex min-h-[44px] w-[7.5rem] shrink-0 cursor-pointer flex-col items-center gap-2 rounded-[var(--radius-card)] border px-2 py-3 text-center [scroll-snap-align:start]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2",
                  selected
                    ? "border-[var(--color-card-active-border)] bg-[var(--color-card-active-bg)] text-[var(--color-accent)]"
                    : "border-[var(--color-card-border)] bg-[var(--color-surface)] text-[var(--color-ink-secondary)]",
                ].join(" ")}
              >
                <IntelligenceIcon
                  name={s.icon}
                  size={22}
                  className={
                    selected
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-ink-secondary)]"
                  }
                />
                <span className="text-xs font-normal leading-[1.3]">
                  {s.tabLabel}
                </span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`${baseId}-panel-${active.id}`}
          aria-labelledby={`${baseId}-tab-${active.id}`}
          tabIndex={0}
          className="min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2"
        >
          <SolutionPanel challenge={active} />
        </div>
      </div>
    </section>
  );
}
