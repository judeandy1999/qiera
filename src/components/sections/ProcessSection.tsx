"use client";

import { useRef, useState } from "react";

import { processSteps } from "@/data/process";
import { ProcessCard } from "@/components/sections/ProcessCard";
import {
  ProcessDetail,
  ProcessWhyMattersBar,
} from "@/components/sections/ProcessDetail";
import { DetailModal } from "@/components/ui/DetailModal";

const TOTAL = processSteps.length; // 6

export function ProcessSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const readMoreRefs = useRef<(HTMLButtonElement | null)[]>(
    Array(TOTAL).fill(null),
  );

  function openModal(index: number) {
    setSelectedIndex(index);
  }

  function closeModal() {
    setSelectedIndex(null);
  }

  function goNextStep() {
    setSelectedIndex((current) =>
      current === null ? 0 : (current + 1) % TOTAL,
    );
  }

  const selected =
    selectedIndex !== null ? processSteps[selectedIndex] : null;

  return (
    <>
      <section
        id="process"
        className="scroll-mt-[length:var(--header-scroll-offset)] bg-[var(--color-surface)]"
      >
        <div className="mx-auto max-w-[var(--container-max)] px-4 py-12 md:px-6 md:py-14 lg:px-8 lg:py-16">
          <div className="mb-10 flex flex-col gap-3">
            <p className="text-xs font-normal uppercase leading-[1.4] tracking-[0.08em] text-[var(--color-accent)]">
              OUR PROCESS
            </p>
            <h2 className="text-[32px] font-semibold leading-[1.2] text-[var(--color-ink)]">
              A Proven 6-Step Methodology
            </h2>
          </div>

          <div
            role="list"
            aria-label="Process steps"
            className={[
              "grid grid-cols-1 gap-4 overflow-visible sm:grid-cols-2",
              "md:grid-cols-3 md:gap-6",
              "xl:flex xl:items-stretch xl:gap-0",
            ].join(" ")}
          >
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                role="listitem"
                className="flex min-w-0 overflow-visible xl:flex-1 xl:items-stretch"
              >
                <div className="min-w-0 flex-1 overflow-visible">
                  <ProcessCard
                    step={step}
                    onReadMore={() => openModal(index)}
                    readMoreRef={(el) => {
                      readMoreRefs.current[index] = el;
                    }}
                  />
                </div>
                {index < TOTAL - 1 && (
                  <span
                    aria-hidden="true"
                    className="mt-12 hidden shrink-0 self-start px-2 text-xl text-[var(--color-accent)] xl:inline"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <DetailModal
        open={selectedIndex !== null}
        onClose={closeModal}
        title={selected?.title ?? ""}
        labelledById="process-modal-heading"
        footer={
          selected ? (
            <ProcessWhyMattersBar
              whyItMatters={selected.whyItMatters}
              nextStepTitle={selected.nextStepTitle}
              onNextStep={goNextStep}
            />
          ) : null
        }
      >
        {selected && (
          <ProcessDetail
            step={selected}
            headingId="process-modal-heading"
          />
        )}
      </DetailModal>
    </>
  );
}
