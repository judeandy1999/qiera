import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="bg-[var(--color-shell)]">
      <section
        aria-labelledby="not-found-heading"
        className="mx-auto flex max-w-[var(--container-max)] flex-col items-start px-6 py-24 md:px-8 lg:px-12 lg:py-32"
      >
        <p className="text-xs font-normal uppercase leading-[1.4] tracking-[0.08em] text-[var(--color-accent)]">
          QIERA
        </p>
        <h1
          id="not-found-heading"
          className="mt-4 text-[36px] font-semibold leading-[1.15] text-[var(--color-text-primary)] md:text-[48px]"
        >
          Page not found
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-text-secondary)]">
          The page you’re looking for doesn’t exist or may have moved. Let’s get
          you back to growth intelligence.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button href="/" variant="secondary">
            Home
          </Button>
          <Button href="/start-intelligence-audit" variant="primary">
            Start Intelligence Audit
          </Button>
        </div>
      </section>
    </div>
  );
}
