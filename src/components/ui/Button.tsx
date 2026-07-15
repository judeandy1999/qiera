import type { MouseEventHandler, ReactNode } from "react";

import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  onClick,
}: ButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1 rounded-[var(--radius-button)] px-5 py-3 text-[20px] font-semibold leading-[1.2] transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-shell)]",
        variant === "primary" && "bg-[var(--color-accent)] text-[var(--color-text-primary)]",
        variant === "secondary" &&
          "border border-[var(--color-accent)]/50 bg-transparent text-[var(--color-accent)]",
        className,
      )}
    >
      {children}
      {variant === "primary" && <span aria-hidden="true">→</span>}
    </a>
  );
}
