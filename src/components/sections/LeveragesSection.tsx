"use client";

import { useState, useRef, useCallback } from "react";

import type { Leverage } from "@/types/leverages";
import { leverages } from "@/data/leverages";
import { LeverageCard } from "@/components/sections/LeverageCard";
import {
  LeverageDetail,
  LeverageCtaBar,
} from "@/components/sections/LeverageDetail";
import { DetailModal } from "@/components/ui/DetailModal";

const TOTAL = leverages.length; // 11

export function LeveragesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selected, setSelected] = useState<Leverage | null>(null);

  const learnMoreRefs = useRef<(HTMLButtonElement | null)[]>(
    Array(TOTAL).fill(null),
  );
  const trackRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(TOTAL - 1, index));
    setActiveIndex(clamped);
    if (trackRef.current) {
      const cards = trackRef.current.querySelectorAll<HTMLElement>(
        "[data-card-index]",
      );
      const target = cards[clamped];
      if (target && typeof target.scrollIntoView === "function") {
        target.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
      }
    }
  }, []);

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    }
  }

  function openModal(leverage: Leverage) {
    setSelected(leverage);
  }

  function closeModal() {
    setSelected(null);
  }

  return (
    <>
      <section
        id="leverages"
        className="scroll-mt-[length:var(--header-scroll-offset)] bg-[var(--color-surface)]"
      >
        <div className="mx-auto max-w-[var(--container-max)] px-4 py-12 md:px-6 md:py-14 lg:px-8 lg:py-16">
          <div className="mb-10 flex flex-wrap items-start justify-between gap-6">
            <div className="flex max-w-xl flex-col gap-3">
              <p className="text-xs font-normal uppercase leading-[1.4] tracking-[0.08em] text-[var(--color-accent)]">
                OUR LEVERAGES
              </p>
              <h2 className="text-[32px] font-semibold leading-[1.2] text-[var(--color-ink)]">
                High-Impact Leverages Across Every Growth Dimension
              </h2>
              <p className="text-base font-normal leading-relaxed text-[var(--color-ink-secondary)]">
                Strategic levers that unlock growth, remove constraints, and
                accelerate performance across your e-commerce business.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3 self-center">
              <button
                type="button"
                aria-label="Previous leverage"
                onClick={goPrev}
                disabled={activeIndex === 0}
                aria-disabled={activeIndex === 0}
                className={[
                  "flex h-10 w-10 min-h-[44px] min-w-[44px] items-center justify-center",
                  "rounded-full border border-[var(--color-card-border)]",
                  "text-[var(--color-ink)]",
                  "focus-visible:outline-none focus-visible:ring-2",
                  "focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2",
                  activeIndex === 0
                    ? "cursor-not-allowed opacity-40"
                    : "cursor-pointer",
                ].join(" ")}
              >
                ←
              </button>

              <span
                data-testid="leverages-carousel-counter"
                aria-live="polite"
                aria-atomic="true"
                className="min-w-[3.5rem] text-center text-base font-normal leading-relaxed tabular-nums text-[var(--color-ink-secondary)]"
              >
                {activeIndex + 1} / {TOTAL}
              </span>

              <button
                type="button"
                aria-label="Next leverage"
                onClick={goNext}
                disabled={activeIndex === TOTAL - 1}
                aria-disabled={activeIndex === TOTAL - 1}
                className={[
                  "flex h-10 w-10 min-h-[44px] min-w-[44px] items-center justify-center",
                  "rounded-full border border-[var(--color-card-border)]",
                  "text-[var(--color-ink)]",
                  "focus-visible:outline-none focus-visible:ring-2",
                  "focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2",
                  activeIndex === TOTAL - 1
                    ? "cursor-not-allowed opacity-40"
                    : "cursor-pointer",
                ].join(" ")}
              >
                →
              </button>
            </div>
          </div>

          {/*
            Mobile: 1-col scroll-snap carousel
            Tablet (md): 3-col grid (equal row heights)
            Desktop (xl): 12-col grid, each card spans 2; 7th starts at col 2 to center 5 cards
          */}
          <div
            ref={trackRef}
            role="region"
            aria-label="Leverages carousel"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            className={[
              "flex items-stretch gap-4 overflow-x-auto scroll-smooth",
              "[scroll-snap-type:x_mandatory]",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2",
              "md:grid md:grid-cols-3 md:gap-6 md:overflow-x-visible md:scroll-snap-none",
              "xl:grid xl:grid-cols-12 xl:gap-4 xl:overflow-x-visible xl:scroll-snap-none",
            ].join(" ")}
          >
            {leverages.map((leverage, index) => (
              <div
                key={leverage.id}
                data-card-index={index}
                className={[
                  "flex h-full min-h-0 w-[calc(100%-2.5rem)] shrink-0",
                  "[scroll-snap-align:start]",
                  "md:w-auto md:min-w-0",
                  "xl:col-span-2",
                  index === 6 ? "xl:col-start-2" : "",
                ].join(" ")}
              >
                <LeverageCard
                  leverage={leverage}
                  active={activeIndex === index}
                  onLearnMore={() => openModal(leverage)}
                  learnMoreRef={(el) => {
                    learnMoreRefs.current[index] = el;
                  }}
                />
              </div>
            ))}
          </div>

          <div
            role="group"
            aria-label="Leverage pages"
            className="mt-8 flex items-center justify-center gap-2"
          >
            {leverages.map((leverage, index) => (
              <button
                key={leverage.id}
                type="button"
                aria-current={activeIndex === index ? "true" : undefined}
                aria-label={`Go to ${leverage.title}`}
                onClick={() => goTo(index)}
                className={[
                  "h-2 w-2 cursor-pointer rounded-full transition-opacity",
                  "focus-visible:outline-none focus-visible:ring-2",
                  "focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2",
                  activeIndex === index
                    ? "bg-[var(--color-accent)] opacity-100"
                    : "bg-[var(--color-ink-secondary)] opacity-40",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </section>

      <DetailModal
        open={selected !== null}
        onClose={closeModal}
        title={selected?.title ?? ""}
        labelledById="leverage-modal-heading"
        footer={
          selected ? (
            <LeverageCtaBar
              title={selected.cta.title}
              body={selected.cta.body}
              href="/contact"
              onNavigate={closeModal}
            />
          ) : null
        }
      >
        {selected && (
          <LeverageDetail
            leverage={selected}
            headingId="leverage-modal-heading"
            onClose={closeModal}
          />
        )}
      </DetailModal>
    </>
  );
}
