# Phase 1: Foundation & Shell - Pattern Map

**Mapped:** 2026-07-10
**Files analyzed:** 13 (new/modified)
**Analogs found:** 13 / 13 (all analogs are the existing boilerplate — this is a near-greenfield scaffold; no prior components/data/lib/types directories exist)

## File Classification

| New/Modified File | Role | Data Flow | Closest Analog | Match Quality |
|---|---|---|---|---|
| `src/app/globals.css` (rewrite) | config (design tokens) | transform (CSS build-time) | `src/app/globals.css` (self, existing) | exact — extend in place |
| `src/app/layout.tsx` (modify) | provider/root-layout | request-response (RSC render) | `src/app/layout.tsx` (self, existing) | exact — extend in place |
| `src/app/page.tsx` (rewrite to placeholder) | component (page) | request-response (RSC render) | `src/app/page.tsx` (self, existing) | exact — extend in place |
| `src/components/layout/Header.tsx` | component (layout, RSC) | request-response | `src/app/page.tsx` (only existing JSX/Tailwind reference in repo) | role-match only (no layout components exist yet) |
| `src/components/layout/Footer.tsx` | component (layout, RSC) | request-response | `src/app/page.tsx` | role-match only |
| `src/components/layout/MobileNav.tsx` | component (client island) | event-driven (open/close state) | none in-repo | no analog — see below |
| `src/components/ui/Button.tsx` | component (ui primitive) | request-response | `src/app/page.tsx` lines 38-60 (existing `<a>` CTA styling pattern) | partial — only inline className precedent exists, no extracted component |
| `src/components/ui/Logo.tsx` | component (ui primitive, inline SVG) | request-response | none in-repo (only raster `<Image>` usage exists) | no analog — see below |
| `src/data/navigation.ts` | model/config (typed data) | CRUD (static read) | none in-repo | no analog — see below |
| `src/lib/cn.ts` | utility | transform | none in-repo | no analog — see below |
| `src/types/navigation.ts` (or co-located in `data/navigation.ts`) | model (type defs) | transform | none in-repo | no analog |
| `vitest.config.mts` | config (test runner) | batch | none in-repo | no analog — use RESEARCH.md Code Examples verbatim |
| `src/data/navigation.test.ts`, `src/components/layout/MobileNav.test.tsx` | test | request-response (assertions) | none in-repo | no analog — use RESEARCH.md Code Examples verbatim |

## Pattern Assignments

### `src/app/globals.css` (config, transform)

**Analog:** `src/app/globals.css` (self — modify in place, do not create a second `@theme` block)

**Current full file** (lines 1-27):
```1:27:src/app/globals.css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}
```

**What to keep:** the `@import "tailwindcss";` line and the existing `@theme inline` block's font lines (`--font-sans: var(--font-geist-sans);` / `--font-mono: var(--font-geist-mono);`) — this is the one part of the boilerplate that is already correct per `01-RESEARCH.md` Pattern 2.

**What to delete:** the entire `@media (prefers-color-scheme: dark) { ... }` block (Pitfall 1 — QIERA's dark shell/light content split is a fixed brand design, not an OS toggle) and the bare `font-family: Arial, Helvetica, sans-serif;` override in `body` (fights the Geist chain).

**What to add — into the SAME `@theme inline` block** (per Pitfall 3, never split into a second `@theme` block): all UI-SPEC-derived tokens — `--color-shell`, `--color-secondary` (panel bg `#10121B`), `--color-surface`, `--color-accent`/`--color-accent-strong`, `--color-text-primary`/`--color-text-secondary`, `--color-border`, `--color-focus-ring`, `--radius-button`/`--radius-card`, `--container-max`, spacing tokens (`xs`..`3xl` per UI-SPEC Spacing Scale table), matching the shape already given in `01-RESEARCH.md` Code Examples → "Rewritten `globals.css` skeleton".

**Exact values to use (from UI-SPEC Color / Layout tables, not RESEARCH's placeholder guesses):**
```css
@theme inline {
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);

  --color-shell: #05060B;
  --color-secondary: #10121B;
  --color-accent: #6366F1;
  --color-accent-strong: #7C3AED;
  --color-text-primary: #F5F5F7;
  --color-text-secondary: #9CA3AF;
  --color-border: rgba(255, 255, 255, 0.08);
  --color-focus-ring: #8B7CF6;

  --radius-button: 999px;
  --radius-card: 16px;

  --container-max: 1280px;
}

body {
  background: var(--color-surface, #ffffff);
  color: var(--color-ink, #0b0d17);
}
```

---

### `src/app/layout.tsx` (provider/root-layout, request-response)

**Analog:** `src/app/layout.tsx` (self — modify in place)

**Current full file** (lines 1-33):
```1:33:src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
```

**What to keep unchanged:** the entire `Geist`/`Geist_Mono` `next/font/google` wiring block (lines 5-13) and the `className` chain on `<html>` (line 28) — this is already the correct, documented pattern (FOUND-04, Pitfall 4 — decide once whether to keep `Geist_Mono`, no code change either way).

**What to change:**
1. `metadata` (lines 15-18) — replace `"Create Next App"` / `"Generated by create next app"` with QIERA title/description (FOUND-03 requires "Wire root `layout.tsx` metadata for QIERA").
2. `<body>` (line 30) — wrap `{children}` with `<Header />` above and `<Footer />` below, keeping the existing `min-h-full flex flex-col` classes (they already support a sticky-header + flex-grow-main + footer layout with zero changes needed to the flex direction).

**Target shape:**
```tsx
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
// ...existing Geist/Geist_Mono block unchanged...

export const metadata: Metadata = {
  title: "QIERA — E-commerce Growth Intelligence",
  description: "QIERA E-commerce Growth Intelligence platform.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

---

### `src/app/page.tsx` (component/page, request-response)

**Analog:** `src/app/page.tsx` (self — full rewrite to placeholder, no homepage content this phase)

**Current full file** (lines 1-65) shows the `create-next-app` demo content with `next/image`, dark-mode `dark:` variant classes, and external Vercel/Next.js links — **all of this must be deleted**, not adapted:
```1:14:src/app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
```

**What to reuse:** nothing content-wise. The only transferable idea is the outer `flex flex-col flex-1` container pattern (line 5) — useful for the placeholder's own minimal wrapper — but drop every `dark:` variant (Pitfall 1: no OS-driven dark mode) and every `next.svg`/`vercel.svg`/external-link reference.

**Target shape (placeholder shell only — homepage sections are Phases 2-5):**
```tsx
export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-24 text-center">
      <p className="text-[color:var(--color-ink)]">
        QIERA homepage — sections arriving in later phases.
      </p>
    </div>
  );
}
```

---

### `src/components/layout/Header.tsx` (component, RSC, request-response)

**No true analog exists** (first layout component in the repo). Closest precedent for Tailwind class conventions is the CTA link block in `src/app/page.tsx`:
```38:52:src/app/page.tsx
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
```
Pattern to copy forward: `rounded-full` pill shape + `flex items-center justify-center gap-2` for icon+label pairing — directly maps to the Primary CTA button (UI-SPEC: `--radius-button: 999px`, `4px` gap between label and arrow). Do **not** copy the `dark:`/`hover:bg-[#383838]` hardcoded hex hovers; use token-based colors instead (`bg-[var(--color-accent)]` or a Tailwind arbitrary-value utility referencing the theme token).

**Structural pattern to follow (from RESEARCH.md Architecture Patterns, System Architecture Diagram + Pattern 4):**
```tsx
// src/components/layout/Header.tsx — Server Component
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/layout/MobileNav";
import { primaryNav, primaryCta } from "@/data/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[var(--color-shell)]">
      <div className="mx-auto flex max-w-[var(--container-max)] items-center justify-between px-6 py-6 lg:px-12">
        <Logo />
        <nav className="hidden items-center gap-4 md:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-[var(--color-text-primary)]">
              {item.label}
            </a>
          ))}
        </nav>
        <Button href={primaryCta.href} className="hidden md:inline-flex">
          {primaryCta.label}
        </Button>
        <MobileNav items={primaryNav} />
      </div>
    </header>
  );
}
```
Sticky positioning (`sticky top-0 z-40`), container/padding values, and nav visibility breakpoints come directly from UI-SPEC → Header section, not from any in-repo precedent.

---

### `src/components/layout/Footer.tsx` (component, RSC, request-response)

**No true analog exists.** Same "first layout component" situation as Header — reuses the same `primaryNav` data source per RESEARCH.md's single-source-of-truth requirement (this is the concrete mechanism that satisfies FOUND-03's "no drift between Header/Footer nav" test).

**Structural pattern (from UI-SPEC → Footer section + RESEARCH.md `navigation.ts` example):**
```tsx
// src/components/layout/Footer.tsx — Server Component
import { Logo } from "@/components/ui/Logo";
import { primaryNav, legalNav } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-[var(--color-shell)] px-6 py-8 lg:px-12">
      <div className="mx-auto max-w-[var(--container-max)]">
        <div className="flex flex-wrap items-start justify-between gap-6 pb-6">
          <div>
            <Logo />
            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
              E-commerce Growth Intelligence
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-4">
            {primaryNav.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-[var(--color-text-primary)]">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-border)] pt-6">
          <p className="text-sm text-[var(--color-text-secondary)]">
            © 2026 QIERA. All rights reserved.
          </p>
          <ul className="flex items-center gap-4">
            {legalNav.map((item, i) => (
              <li key={item.href} className="flex items-center gap-4">
                {i > 0 && <span aria-hidden="true" className="text-[var(--color-border)]">|</span>}
                <a href={item.href} className="text-sm text-[var(--color-text-primary)]">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
```
The pipe-separator-as-styled-span (not literal text) is a UI-SPEC-specific a11y requirement (Footer section: "recreate as a styled `<span aria-hidden="true">`... not literal text, so screen readers don't announce the pipe") with no in-repo precedent.

---

### `src/components/layout/MobileNav.tsx` (client island, event-driven)

**No analog in-repo** (no Client Components exist yet — repo has zero `'use client'` directives currently). Use `01-RESEARCH.md` Architecture Patterns → Pattern 4 verbatim as the base implementation (already vetted against MDN `<dialog>` behavior + 4 accessibility sources):

```270:327:.planning/phases/01-foundation-shell/01-RESEARCH.md
'use client'
import { useEffect, useRef, useState } from 'react'

export function MobileNav({ items }: { items: { href: string; label: string }[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen(true)}
      >
        Menu
      </button>
      <dialog
        id="mobile-nav"
        ref={dialogRef}
        aria-label="Mobile navigation"
        onClose={() => setOpen(false)}
        onCancel={() => setOpen(false)} /* fires on native Escape */
      >
        ...
      </dialog>
    </>
  )
}
```

**Required deltas from the RESEARCH example, per UI-SPEC:**
- Toggle button needs `aria-label="Open menu"` (UI-SPEC Copywriting Contract), min `44×44px` hit area, visible `--color-focus-ring` focus ring — the RESEARCH example's bare `Menu` text button is illustrative only.
- Add a dedicated in-panel close button with `aria-label="Close menu"` (also 44×44px) — RESEARCH example has one but without the exact label; UI-SPEC locks the string.
- Dialog panel background must be `var(--color-secondary)` (`#10121B`), not the default browser `<dialog>` white background — needs explicit CSS.
- No open/close animation in Phase 1 (UI-SPEC: "simplest compliant default is no animation at all"); if added later, must respect `prefers-reduced-motion`.
- `aria-label="Mobile navigation"` on the `<dialog>` is already locked correctly in the RESEARCH example — keep as-is.

---

### `src/components/ui/Button.tsx` (ui primitive, request-response)

**Analog (partial, inline-only):** `src/app/page.tsx` lines 38-60 — the two `<a className="...rounded-full...">` CTA links are the only pill-button precedent in the repo, but as raw inline JSX, not an extracted component.

```53:60:src/app/page.tsx
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
```
This second link is structurally the closest existing precedent for the **secondary/outline** button variant (border + transparent bg + hover fill) that UI-SPEC also calls for — same `rounded-full` + `border` shape, just needs token-based colors instead of `border-black/[.08]`/dark-mode variants.

**Target shape (variant-driven, per UI-SPEC → Buttons table):**
```tsx
// src/components/ui/Button.tsx
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
  children: ReactNode;
};

export function Button({ href, variant = "primary", className, children }: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center gap-1 rounded-[var(--radius-button)] px-5 py-3 text-[20px] font-semibold",
        variant === "primary" &&
          "bg-[var(--color-accent)] text-[var(--color-text-primary)]",
        variant === "secondary" &&
          "border border-[var(--color-accent)]/50 text-[var(--color-accent)]",
        className,
      )}
    >
      {children}
      {variant === "primary" && <span aria-hidden="true">→</span>}
    </a>
  );
}
```

---

### `src/components/ui/Logo.tsx` (ui primitive, inline SVG, request-response)

**No analog in-repo** (only `next/image` raster usage exists via `next.svg`/`vercel.svg` `<Image>` calls in `page.tsx`, which is the pattern being explicitly avoided here per RESEARCH.md Pattern 3 — "recreate as SVG, not raster crop"). Use `01-RESEARCH.md` Pattern 3's example verbatim as the structural starting point:

```256:265:.planning/phases/01-foundation-shell/01-RESEARCH.md
export function Logo({ className }: { className?: string }) {
  return (
    <span className={className} aria-hidden={false}>
      <svg width="32" height="32" viewBox="0 0 32 32" role="img" aria-label="QIERA">
        {/* redrawn ring + tail shape, fill="var(--color-accent)" */}
      </svg>
      <span className="sr-only">QIERA</span>
    </span>
  )
}
```
**Required delta per UI-SPEC → Logo section:** must render mark + wordmark + tagline together (not just the mark) — `svg` (fill `--color-accent`) + `"QIERA"` text (`Heading`/20/600, `--color-text-primary`) + tagline `"E-commerce Growth Intelligence"` (`Label`/14/400, `--color-text-secondary`) stacked beneath. Consider splitting into `Logo` (mark + wordmark only, used standalone in Header) vs. a Header-specific wrapper that also renders the tagline — UI-SPEC doesn't mandate the tagline appear in the Header at all (only explicitly requires it in Footer's Row 1); check reference crop before deciding whether Header needs the tagline row too.

---

### `src/data/navigation.ts` (model/config, static-read/CRUD)

**No analog in-repo** (first typed data file). Use `01-RESEARCH.md` Code Examples → `navigation.ts` verbatim — it is already directly derived from `DECISIONS.md` #2/#13/#14 and needs no structural changes, only confirmation that hrefs match Phase 5's eventual section IDs (Assumption A3, not a Phase 1 blocker):

```421:447:.planning/phases/01-foundation-shell/01-RESEARCH.md
export type NavItem = {
  label: string
  href: string
}

export const primaryNav: NavItem[] = [
  { label: 'Intelligence', href: '/#intelligence' },
  { label: 'Process', href: '/#process' },
  { label: 'Solutions', href: '/#solutions' },
  { label: 'Leverages', href: '/#leverages' },
  { label: 'Network', href: '/network' },
  { label: 'Contact', href: '/contact' },
]

export const primaryCta: NavItem = {
  label: 'Start Intelligence Audit',
  href: '/start-intelligence-audit',
}

export const legalNav: NavItem[] = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Use', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
]
```
**Note on `primaryCta.href`:** RESEARCH.md's example uses `/start-intelligence-audit`; cross-check exact route slug against Phase 7's `Start Intelligence Audit` page plan before finalizing (not blocking — a route that doesn't exist yet 404s harmlessly, same reasoning as A3).

If `NavItem` is split out to `src/types/navigation.ts` per the Recommended Project Structure's alternate note ("or co-located"), keep the type re-exported from `data/navigation.ts` so existing import sites (`import { primaryNav } from "@/data/navigation"`) don't need to know about the split.

---

### `src/lib/cn.ts` (utility, transform)

**No analog in-repo.** Per RESEARCH.md → Alternatives Considered, hand-write rather than installing `clsx`:
```ts
// src/lib/cn.ts
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
```
This is the exact shape implied by RESEARCH.md's recommendation ("write the helper locally in `src/lib/cn.ts`") — no existing code to copy from, but no external dependency needed either.

---

## Shared Patterns

### Design tokens via `@theme inline`
**Source:** `src/app/globals.css` lines 8-13 (existing, correct)
**Apply to:** every new component file that needs a QIERA color/radius/spacing value — always reference via Tailwind arbitrary-value utilities (`bg-[var(--color-shell)]`) or, once tokens are properly namespaced (`--color-shell` etc. are already Tailwind-namespaced prefixes), via generated utilities directly (`bg-shell`) once confirmed working. Never hardcode hex values in component files.
```8:13:src/app/globals.css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

### Single-source navigation data
**Source:** `src/data/navigation.ts` (new, see above)
**Apply to:** `Header.tsx`, `Footer.tsx`, `MobileNav.tsx` (via props passed from `Header`) — all three must import from the same file, never redeclare nav arrays locally. This is the concrete mechanism satisfying the "no drift between Header and Footer nav" test requirement.

### Server Component by default, Client Component only for the nav toggle
**Source:** project rule (`qiera-visual-fidelity.mdc` → Next.js rules) + RESEARCH.md Architectural Responsibility Map
**Apply to:** `Header.tsx` and `Footer.tsx` have no `'use client'` directive; only `MobileNav.tsx` does. `layout.tsx` and `page.tsx` also stay server-only (no directive needed, no existing directive to remove).

### `cn()` for conditional classNames
**Source:** `src/lib/cn.ts` (new, see above)
**Apply to:** `Button.tsx` (variant switching), any future active-nav-link state in `Header.tsx`/`Footer.tsx`.

## No Analog Found

| File | Role | Data Flow | Reason |
|------|------|-----------|--------|
| `src/components/layout/MobileNav.tsx` | client island | event-driven | No Client Components exist in the repo yet (zero `'use client'` directives) — use RESEARCH.md Pattern 4 code example as the base instead of an in-repo analog. |
| `src/components/ui/Logo.tsx` | ui primitive | request-response | No inline-SVG components exist; only raster `next/image` usage (`next.svg`/`vercel.svg`) — use RESEARCH.md Pattern 3 code example instead. |
| `src/data/navigation.ts` / `src/types/navigation.ts` | model | CRUD (static) | No `src/data/` or `src/types/` directory exists yet — use RESEARCH.md Code Examples `navigation.ts` verbatim. |
| `src/lib/cn.ts` | utility | transform | No `src/lib/` directory exists yet — trivial hand-written helper, no analog needed. |
| `vitest.config.mts`, `*.test.ts(x)` | config / test | batch | Zero test infrastructure exists in the repo — use RESEARCH.md Code Examples (`vitest.config.mts`, `navigation.test.ts`, `MobileNav.test.tsx`) verbatim as Wave 0 scaffolding. |

## Metadata

**Analog search scope:** `src/` (entire directory tree — only 3 files exist total: `layout.tsx`, `globals.css`, `page.tsx`); `package.json`, `tsconfig.json`, `next.config.ts`, `eslint.config.mjs` read for conventions (path alias `@/*` → `./src/*` confirmed usable in new imports).
**Files scanned:** 7 (3 `src/app/*` files + 4 config files)
**Pattern extraction date:** 2026-07-10
