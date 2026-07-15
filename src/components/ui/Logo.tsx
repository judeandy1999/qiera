import Image from "next/image";

import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  showTagline?: boolean;
};

export function Logo({ className, showTagline }: LogoProps) {
  return (
    <a
      href="/"
      aria-label="QIERA home"
      className={cn(
        "inline-flex flex-col rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-shell)]",
        className,
      )}
    >
      <span className="inline-flex items-center gap-2">
        <Image
          src="/images/qiera-logo.webp"
          alt=""
          width={32}
          height={32}
          className="size-8 shrink-0 rounded-sm"
          priority
          aria-hidden
        />
        <span className="text-[20px] font-semibold leading-[1.2] text-[var(--color-text-primary)]">
          QIERA
        </span>
      </span>
      {showTagline && (
        <span className="text-[14px] font-normal leading-[1.5] text-[var(--color-text-secondary)]">
          E-commerce Growth Intelligence
        </span>
      )}
    </a>
  );
}
