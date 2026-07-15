"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/Button";
import type { NavItem } from "@/data/navigation";
import { primaryCta } from "@/data/navigation";
import { isNavItemActive } from "@/lib/nav-active";
import { cn } from "@/lib/cn";

export function MobileNav({ items }: { items: NavItem[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "/";
  const [hash, setHash] = useState("");

  useEffect(() => {
    const sync = () => setHash(window.location.hash.replace(/^#/, ""));
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="flex h-11 w-11 items-center justify-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-shell)]"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M3 6h18M3 12h18M3 18h18"
            stroke="var(--color-text-primary)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <dialog
        id="mobile-nav"
        ref={dialogRef}
        aria-label="Mobile navigation"
        onClose={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        className="m-0 h-full max-h-none w-full max-w-none bg-[var(--color-secondary)] p-6 backdrop:bg-black/60"
      >
        <div className="flex items-center justify-end">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="flex h-11 w-11 items-center justify-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-secondary)]"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="var(--color-text-primary)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <nav aria-label="Mobile" className="mt-4">
          <ul className="flex flex-col gap-2">
            {items.map((item) => {
              const active = isNavItemActive(pathname, hash, item.href);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => {
                      if (item.href.startsWith("/#")) {
                        setHash(item.href.slice(2));
                      }
                      setOpen(false);
                    }}
                    className={cn(
                      "flex min-h-11 items-center rounded text-[16px] font-normal leading-[1.5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-secondary)]",
                      active
                        ? "text-[var(--color-accent)]"
                        : "text-[var(--color-text-primary)]",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mt-8">
            <Button
              href={primaryCta.href}
              className="w-full justify-center"
              onClick={() => setOpen(false)}
            >
              {primaryCta.label}
            </Button>
          </div>
        </nav>
      </dialog>
    </div>
  );
}
