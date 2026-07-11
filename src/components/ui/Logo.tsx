import Image from "next/image";

import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  showTagline?: boolean;
};

export function Logo({ className, showTagline }: LogoProps) {
  return (
    <span className={cn("inline-flex flex-col", className)}>
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
    </span>
  );
}
