import Image from "next/image";

import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="bg-[var(--color-shell)]">
      <div className="mx-auto grid max-w-[var(--container-max)] items-center gap-10 px-6 py-16 md:px-8 md:py-20 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] lg:gap-16 lg:px-12 lg:py-24">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center rounded-[var(--radius-button)] border border-[rgba(99,102,241,0.5)] px-4 py-2 text-[12px] font-normal uppercase leading-[1.4] tracking-[0.08em] text-[var(--color-text-primary)]">
            THE QIERA OPERATING MODEL
          </span>

          <h1 className="mt-6 max-w-[18ch] text-[40px] font-semibold leading-[1.1] tracking-tight md:text-[52px] lg:text-[60px]">
            <span className="text-[var(--color-text-primary)]">
              A proven system to turn intelligence into{" "}
            </span>
            <span className="text-[var(--color-accent)]">measurable growth.</span>
          </h1>

          <p className="mt-6 max-w-[480px] text-[16px] font-normal leading-[1.6] text-[var(--color-text-secondary)]">
            QIERA is an ecommerce growth intelligence platform that helps
            businesses discover opportunities, diagnose root causes, architect
            solutions, build capabilities, de-risk projects, and measure impact
            - all on one governed platform.
          </p>

          <div className="mt-8">
            <Button href="/start-intelligence-audit" variant="primary">
              Start Intelligence Audit
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src="/images/qiera/operating-model.png"
            alt="QIERA Operating Model: six-step circular process — 01 Discover Opportunities, 02 Identify Growth Constraints, 03 Architect Solutions, 04 Build Capabilities, 05 De-Risk Projects, 06 Measure Impacts — with the QIERA Q at the centre"
            width={600}
            height={600}
            priority
            sizes="(max-width: 767px) 100vw, 56vw"
            className="h-auto w-full max-w-[560px]"
          />
        </div>
      </div>
    </section>
  );
}
