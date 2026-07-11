type ProgressBarProps = {
  value: number;
  label: string;
  tone?: "accent" | "positive";
};

export function ProgressBar({
  value,
  label,
  tone = "accent",
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));
  const color =
    tone === "positive" ? "var(--color-positive)" : "var(--color-accent)";

  return (
    <div
      className="flex w-full min-w-0 flex-col gap-1"
      role="img"
      aria-label={`${label}: ${clamped}%`}
    >
      <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--color-accent-tint)]">
        <div
          className="h-full rounded-full"
          style={{ width: `${clamped}%`, background: color }}
        />
      </div>
    </div>
  );
}
