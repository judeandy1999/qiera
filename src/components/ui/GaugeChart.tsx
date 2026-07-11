type GaugeChartProps = {
  value: number;
  max?: number;
  className?: string;
};

/** Semi-circle SVG gauge. Numeric label is rendered by the parent. */
export function GaugeChart({ value, max = 100, className }: GaugeChartProps) {
  const ratio = Math.min(1, Math.max(0, value / max));
  const radius = 42;
  const circumference = Math.PI * radius; // semi-circle
  const dash = circumference * ratio;

  return (
    <svg
      viewBox="0 0 100 58"
      className={className ?? "h-auto w-full max-w-[160px]"}
      aria-hidden="true"
    >
      <path
        d="M 8 50 A 42 42 0 0 1 92 50"
        fill="none"
        stroke="var(--color-accent-tint)"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M 8 50 A 42 42 0 0 1 92 50"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={`${dash} ${circumference}`}
        pathLength={circumference}
      />
    </svg>
  );
}
