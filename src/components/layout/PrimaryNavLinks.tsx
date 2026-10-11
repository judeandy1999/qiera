"use client";

import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import type { NavItem } from "@/data/navigation";
import { isNavEntryActive, isNavItemActive } from "@/lib/nav-active";
import { cn } from "@/lib/cn";

type PrimaryNavLinksProps = {
  items: NavItem[];
  className?: string;
  linkClassName?: string;
};

function NavLink({
  item,
  pathname,
  hash,
  linkClassName,
  onHashNavigate,
}: {
  item: NavItem;
  pathname: string;
  hash: string;
  linkClassName?: string;
  onHashNavigate?: (hash: string) => void;
}) {
  const active = isNavItemActive(pathname, hash, item.href);
  return (
    <a
      href={item.href}
      aria-current={active ? "page" : undefined}
      onClick={() => {
        if (item.href.startsWith("/#")) {
          onHashNavigate?.(item.href.slice(2));
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
}

function ServicesNavDropdown({
  item,
  pathname,
  hash,
  linkClassName,
}: {
  item: NavItem;
  pathname: string;
  hash: string;
  linkClassName?: string;
}) {
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const active = isNavEntryActive(pathname, hash, item);
  const children = item.children ?? [];

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(event) => {
        if (!rootRef.current?.contains(event.relatedTarget as Node)) {
          setOpen(false);
        }
      }}
    >
      <button
        type="button"
        id={`${menuId}-trigger`}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={`${menuId}-menu`}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "inline-flex items-center gap-1 rounded text-[14px] font-normal leading-[1.5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-shell)]",
          active
            ? "border-b-2 border-[var(--color-accent)] pb-0.5 text-[var(--color-accent)]"
            : "text-[var(--color-text-primary)]",
          linkClassName,
        )}
      >
        {item.label}
        <span aria-hidden="true" className="text-[10px]">
          ▾
        </span>
      </button>
      {/* pt-2 bridges the gap so pointer movement from trigger → panel stays inside the hover target */}
      <div
        className={cn(
          "absolute left-0 top-full z-50 min-w-[260px] pt-2",
          open ? "block" : "hidden",
        )}
      >
        <ul
          id={`${menuId}-menu`}
          role="menu"
          aria-labelledby={`${menuId}-trigger`}
          className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-secondary)] p-2 shadow-lg"
        >
          {children.map((child) => {
            const childActive = isNavItemActive(pathname, hash, child.href);
            return (
              <li key={child.href} role="none">
                <a
                  href={child.href}
                  role="menuitem"
                  aria-current={childActive ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded px-3 py-2.5 text-[14px] leading-snug focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]",
                    childActive
                      ? "bg-[var(--color-accent-tint)] text-[var(--color-accent)]"
                      : "text-[var(--color-text-primary)] hover:bg-[var(--color-accent-tint)]/60",
                  )}
                >
                  {child.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

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
      {items.map((item) =>
        item.children && item.children.length > 0 ? (
          <ServicesNavDropdown
            key={item.label}
            item={item}
            pathname={pathname}
            hash={hash}
            linkClassName={linkClassName}
          />
        ) : (
          <NavLink
            key={item.href}
            item={item}
            pathname={pathname}
            hash={hash}
            linkClassName={linkClassName}
            onHashNavigate={setHash}
          />
        ),
      )}
    </nav>
  );
}
