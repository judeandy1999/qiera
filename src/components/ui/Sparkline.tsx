type SparklineProps = {
  values: number[];
  tone?: "accent" | "positive";
  className?: string;
};

export function Sparkline({
  values,
  tone = "positive",
  className,
}: SparklineProps) {
  const stroke =
    tone === "positive" ? "var(--color-positive)" : "var(--color-accent)";

  if (values.length === 0) {
    return (
      <svg
        viewBox="0 0 100 32"
        className={className ?? "h-8 w-full"}
        aria-hidden="true"
      />
    );
  }

  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const points = values
    .map((v, i) => {
      const x = values.length === 1 ? 50 : (i / (values.length - 1)) * 100;
      const y = 28 - ((v - min) / range) * 24;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg
      viewBox="0 0 100 32"
      className={className ?? "h-8 w-full"}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <polyline
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        points={points}
      />
    </svg>
  );
}
