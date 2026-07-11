"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import type { NavItem } from "@/data/navigation";
import { isNavItemActive } from "@/lib/nav-active";
import { cn } from "@/lib/cn";

type PrimaryNavLinksProps = {
  items: NavItem[];
  className?: string;
  linkClassName?: string;
};

export function PrimaryNavLinks({
  items,
  className,
  linkClassName,
}: PrimaryNavLinksProps) {
  const pathname = usePathname() ?? "/";
  const [hash, setHash] = useState("");

  useEffect(() => {
    const sync = () => setHash(window.location.hash.replace(/^#/, ""));
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  return (
    <nav aria-label="Primary" className={className}>
      {items.map((item) => {
        const active = isNavItemActive(pathname, hash, item.href);
        return (
          <a
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            onClick={() => {
              if (item.href.startsWith("/#")) {
                setHash(item.href.slice(2));
              }
            }}
            className={cn(
              "rounded text-[14px] font-normal leading-[1.5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-shell)]",
              active
                ? "border-b-2 border-[var(--color-accent)] pb-0.5 text-[var(--color-accent)]"
                : "text-[var(--color-text-primary)]",
              linkClassName,
            )}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
