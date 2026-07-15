/** Decorative radar/check graphic for Audit hero — CSS-only, no external asset. */
export function AuditHeroGraphic() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[360px] lg:max-w-none"
      aria-hidden="true"
    >
      <div className="absolute inset-[8%] rounded-full border border-[var(--color-accent)]/20" />
      <div className="absolute inset-[18%] rounded-full border border-[var(--color-accent)]/30" />
      <div className="absolute inset-[28%] rounded-full border border-[var(--color-accent)]/45 shadow-[0_0_48px_rgba(99,102,241,0.35)]" />
      <div className="absolute inset-[38%] flex items-center justify-center rounded-full bg-[var(--color-accent)]/15">
        <svg
          viewBox="0 0 48 48"
          className="h-16 w-16 text-[var(--color-accent)]"
          fill="none"
        >
          <path
            d="M12 25.5 20.5 34 36 16"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18)_0%,transparent_65%)]" />
    </div>
  );
}
