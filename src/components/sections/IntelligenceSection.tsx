"use client";

import { useState, useRef, useCallback } from "react";
import type { IntelligenceDimension } from "@/types/intelligence";
import { intelligenceDimensions } from "@/data/intelligence";
import { IntelligenceCard } from "@/components/sections/IntelligenceCard";
import { DetailModal } from "@/components/ui/DetailModal";
import { IntelligenceDetail } from "@/components/sections/IntelligenceDetail";

const TOTAL = intelligenceDimensions.length; // 12

export function IntelligenceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selected, setSelected] = useState<IntelligenceDimension | null>(null);

  // One ref per card's "Learn more" button — used to scroll on mobile/tablet
  const learnMoreRefs = useRef<(HTMLButtonElement | null)[]>(
    Array(TOTAL).fill(null),
  );
  // The scrollable track ref for tablet/mobile carousel
  const trackRef = useRef<HTMLDivElement>(null);

  // ── Navigation helpers ──────────────────────────────────────────────────────

  const goTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(TOTAL - 1, index));
    setActiveIndex(clamped);
    // Sync scroll position on the horizontal track
    if (trackRef.current) {
      const cards = trackRef.current.querySelectorAll<HTMLElement>(
        "[data-card-index]",
      );
      const target = cards[clamped];
      if (target && typeof target.scrollIntoView === "function") {
        target.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
      }
    }
  }, []);

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  // ── Keyboard handler on the carousel region ─────────────────────────────────

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    }
  }

  // ── Modal orchestration ─────────────────────────────────────────────────────

  function openModal(dimension: IntelligenceDimension) {
    setSelected(dimension);
  }

  function closeModal() {
    setSelected(null);
  }

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <>
      <section
        id="intelligence"
        className="scroll-mt-[72px] bg-[var(--color-surface)]"
      >
        <div className="mx-auto max-w-[var(--container-max)] px-4 py-12 md:px-6 md:py-14 lg:px-8 lg:py-16">

          {/* ── Section header ─────────────────────────────────────────────── */}
          <div className="flex flex-wrap items-start justify-between gap-6 mb-10">
            {/* Left: eyebrow + heading + subheading */}
            <div className="flex flex-col gap-3 max-w-xl">
              <p
                className="
                  text-xs font-normal leading-[1.4]
                  uppercase tracking-[0.08em]
                  text-[var(--color-accent)]
                "
              >
                OUR UNIQUE INSIGHTS
              </p>
              <h2
                className="
                  text-[32px] font-semibold leading-[1.2]
                  text-[var(--color-ink)]
                "
              >
                Growth Intelligence Across Every Dimension
              </h2>
              <p
                className="
                  text-base font-normal leading-relaxed
                  text-[var(--color-ink-secondary)]
                "
              >
                Comprehensive intelligence across every layer of your e-commerce
                business to uncover opportunities, diagnose root causes, and
                drive measurable growth.
              </p>
            </div>

            {/* Right: carousel controls */}
            <div className="flex items-center gap-3 shrink-0 self-center">
              <button
                type="button"
                aria-label="Previous intelligence dimension"
                onClick={goPrev}
                disabled={activeIndex === 0}
                aria-disabled={activeIndex === 0}
                className={[
                  "flex items-center justify-center",
                  "w-10 h-10 min-w-[44px] min-h-[44px]",
                  "rounded-full border border-[var(--color-card-border)]",
                  "text-[var(--color-ink)]",
                  "focus-visible:outline-none focus-visible:ring-2",
                  "focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2",
                  activeIndex === 0 ? "opacity-40 cursor-not-allowed" : "cursor-pointer",
                ].join(" ")}
              >
                ←
              </button>

              <span
                data-testid="carousel-counter"
                aria-live="polite"
                aria-atomic="true"
                className="text-base font-normal leading-relaxed text-[var(--color-ink-secondary)] tabular-nums min-w-[3.5rem] text-center"
              >
                {activeIndex + 1} / {TOTAL}
              </span>

              <button
                type="button"
                aria-label="Next intelligence dimension"
                onClick={goNext}
                disabled={activeIndex === TOTAL - 1}
                aria-disabled={activeIndex === TOTAL - 1}
                className={[
                  "flex items-center justify-center",
                  "w-10 h-10 min-w-[44px] min-h-[44px]",
                  "rounded-full border border-[var(--color-card-border)]",
                  "text-[var(--color-ink)]",
                  "focus-visible:outline-none focus-visible:ring-2",
                  "focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2",
                  activeIndex === TOTAL - 1
                    ? "opacity-40 cursor-not-allowed"
                    : "cursor-pointer",
                ].join(" ")}
              >
                →
              </button>
            </div>
          </div>

          {/* ── Cards ─────────────────────────────────────────────────────── */}
          {/*
            Desktop (xl ≥1280): 6-column grid — all 12 visible.
            Tablet / mobile: horizontal scroll-snap track.
            We render a single element that adapts via responsive classes.
          */}
          <div
            ref={trackRef}
            role="region"
            aria-label="Intelligence dimensions carousel"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            className={[
              // Mobile/tablet: horizontal scroll-snap track
              "flex gap-4 overflow-x-auto scroll-smooth",
              "[scroll-snap-type:x_mandatory]",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2",
              // Desktop: 6-column grid with explicit gutters
              "xl:grid xl:grid-cols-6 xl:gap-10 xl:items-stretch xl:overflow-x-visible xl:scroll-snap-none",
            ].join(" ")}
          >
            {intelligenceDimensions.map((dimension, index) => (
              <div
                key={dimension.id}
                data-card-index={index}
                className={[
                  "flex h-full w-[calc(100%-2.5rem)] shrink-0 sm:w-[calc(33.333%-1.5rem)]",
                  "[scroll-snap-align:start]",
                  "xl:w-full",
                ].join(" ")}
              >
                <IntelligenceCard
                  dimension={dimension}
                  active={activeIndex === index}
                  onLearnMore={() => openModal(dimension)}
                  learnMoreRef={(el) => {
                    learnMoreRefs.current[index] = el;
                  }}
                />
              </div>
            ))}
          </div>

          {/* ── Pagination dots ────────────────────────────────────────────── */}
          <div
            role="tablist"
            aria-label="Intelligence dimension pages"
            className="flex justify-center items-center gap-2 mt-8"
          >
            {intelligenceDimensions.map((dimension, index) => (
              <button
                key={dimension.id}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-label={`Go to ${dimension.title}`}
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

      {/* ── Detail Modal ───────────────────────────────────────────────────── */}
      <DetailModal
        open={selected !== null}
        onClose={closeModal}
        title={selected?.title ?? ""}
        labelledById="intelligence-modal-heading"
      >
        {selected && (
          <IntelligenceDetail
            dimension={selected}
            headingId="intelligence-modal-heading"
          />
        )}
      </DetailModal>
    </>
  );
}
