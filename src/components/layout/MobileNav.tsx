"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/Button";
import type { NavItem } from "@/data/navigation";
import { primaryCta } from "@/data/navigation";
import { isNavEntryActive, isNavItemActive } from "@/lib/nav-active";
import { cn } from "@/lib/cn";

export function MobileNav({ items }: { items: NavItem[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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

  function closeMenu() {
    setOpen(false);
    setServicesOpen(false);
  }

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
        onClose={closeMenu}
        onCancel={closeMenu}
        className="m-0 h-full max-h-none w-full max-w-none bg-[var(--color-secondary)] p-6 backdrop:bg-black/60"
      >
        <div className="flex items-center justify-end">
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
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
              if (item.children && item.children.length > 0) {
                const groupActive = isNavEntryActive(pathname, hash, item);
                return (
                  <li key={item.label}>
                    <button
                      type="button"
                      aria-expanded={servicesOpen}
                      onClick={() => setServicesOpen((value) => !value)}
                      className={cn(
                        "flex min-h-11 w-full items-center justify-between rounded text-[16px] font-normal leading-[1.5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-secondary)]",
                        groupActive
                          ? "text-[var(--color-accent)]"
                          : "text-[var(--color-text-primary)]",
                      )}
                    >
                      {item.label}
                      <span aria-hidden="true">{servicesOpen ? "▴" : "▾"}</span>
                    </button>
                    {servicesOpen ? (
                      <ul className="ml-3 mt-1 flex flex-col gap-1 border-l border-[var(--color-border)] pl-3">
                        {item.children.map((child) => {
                          const active = isNavItemActive(
                            pathname,
                            hash,
                            child.href,
                          );
                          return (
                            <li key={child.href}>
                              <a
                                href={child.href}
                                aria-current={active ? "page" : undefined}
                                onClick={closeMenu}
                                className={cn(
                                  "flex min-h-11 items-center rounded text-[15px] font-normal leading-[1.5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-secondary)]",
                                  active
                                    ? "text-[var(--color-accent)]"
                                    : "text-[var(--color-text-primary)]",
                                )}
                              >
                                {child.label}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                  </li>
                );
              }

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
                      closeMenu();
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
              onClick={closeMenu}
            >
              {primaryCta.label}
            </Button>
          </div>
        </nav>
      </dialog>
    </div>
  );
}
