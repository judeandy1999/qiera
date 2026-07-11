# Phase 1: Foundation & Shell - Research

**Researched:** 2026-07-10
**Domain:** Next.js 16 App Router foundation — Tailwind v4 design tokens, next/font, shared Header/Footer shell, accessible mobile navigation
**Confidence:** HIGH

<user_constraints>
## User Constraints (from CONTEXT.md)

No CONTEXT.md exists for this phase (user chose to continue plan-phase without `/gsd-discuss-phase`). Per orchestrator instruction, `.planning/DECISIONS.md` is used as the locked-constraint substitute. All items below are **non-negotiable** for planning and execution.

### Locked Decisions (from `.planning/DECISIONS.md` and `.planning/ROADMAP.md` Phase 1 section)

- Preserve the existing Next.js `16.2.10` / React `19.2.4`(→`19.2.7` on registry, upgrade not required) / Tailwind v4 scaffold — **do not** run `create-next-app` again or reinitialize config.
- Reference path is singular: `docs/qiera-reference/` — no other reference directory exists.
- Omit **Pricing**, **Resources**, **Security** from header and footer nav — no placeholder routes, no dead links, no "coming soon" pages.
- Nav labels are locked: **Leverages** (not "Leverage") and **Contact** (not "Contact Us") — header and footer must use identical spelling. The two supplied references disagree (`Leverages`/`Contact` in `top section.png` header vs `Leverage`/`Contact Us` in `Footer.png`) — the locked spelling wins for **both**.
- Copyright: `© 2026 QIERA. All rights reserved.` (footer reference shows 2025 — locked decision overrides the artifact).
- Keep **Geist** (`next/font/google`, already wired in `layout.tsx`) — do not swap fonts on a guess; only replace after a future screenshot-backed comparison (out of Phase 1 scope).
- `commit_docs: false` — the researcher/planner/executor must not run git commits; the user commits manually.
- Do not install unnecessary packages; every dependency addition must be justified in the plan.
- React Server Components by default; Client Components only for interactive islands (mobile nav toggle/panel).
- Both primary and secondary button design tokens must be derived from the reference images.
- Required new top-level structure: `src/components`, `src/data`, `src/lib`, `src/types`, `public/images/qiera`.

### Claude's Discretion

- Exact hex/oklch values for tokens beyond the already-identified accent range (`#6366F1`–`#7C3AED`, recorded in `PROJECT.md` from prior reference inspection) — sample precisely from reference PNGs during implementation and verify with screenshots.
- Whether to hand-write a tiny `cn()` class-join helper vs. installing `clsx` (see Standard Stack → Alternatives Considered).
- Exact container max-width / breakpoint values (reference exports are inconsistently sized — see Open Questions).
- Internal file/component naming within `src/components/layout/`.
- Test runner choice for the Vitest-based suite requested by the phase (Vitest is the Next.js-documented standard — see Validation Architecture).

### Deferred Ideas (OUT OF SCOPE for Phase 1)

- All homepage sections (Hero, Intelligence, Process, Solutions, Leverages, Final CTA) — Phases 2–5.
- Hash navigation / `scroll-margin-top` wiring for section IDs — Phase 5 (`HOME-02`). Phase 1 only needs the header to be **sticky-ready** (see Common Pitfalls) so Phase 5 doesn't have to restructure it.
- Network, Contact, Start Intelligence Audit, Legal pages — Phases 6–8. Phase 1's Header/Footer nav must still **link** to `/network` and `/contact`, but the destination pages don't exist yet (this is expected and not a "dead link" in the Decision #2 sense, which is specifically about Pricing/Resources/Security).
- Full a11y/perf/test/visual-QA gate — Phase 10.
- Any Orchestrate Competency, Leverage Share/Download, fake form submission, invented legal copy — permanently out of v1 per `DECISIONS.md`.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| FOUND-01 | Project uses existing Next.js App Router + TypeScript + Tailwind v4 scaffold without reinitialization | Confirmed via `package.json`/`tsconfig.json`/`next.config.ts` read — scaffold is a stock `create-next-app` TS+Tailwind v4 App Router project; no reinit needed. See Environment Availability and Standard Stack. |
| FOUND-02 | Design tokens (colors, type, radii, spacing, widths, primary/secondary buttons) live in CSS custom properties / Tailwind theme | Tailwind v4 `@theme` / `@theme inline` research (Architecture Patterns → Pattern 1, Pattern 2) gives the exact CSS-first token pattern and explains why `inline` is required for `next/font` variables. |
| FOUND-03 | Shared Header and Footer match dark-shell references; omit Pricing, Resources, Security; copyright © 2026 | Reference images read directly (`75976647-…png`, `top section.png`, `Footer.png`); nav data model in Architecture Patterns → Pattern 3; accessible mobile nav in Pattern 4 / Don't Hand-Roll. |
| FOUND-04 | Fonts via `next/font` using Geist initially; change only after screenshot comparison | Confirmed current `layout.tsx` already wires `Geist`/`Geist_Mono` via `next/font/google`; official Next.js 16 fonts doc read directly from `node_modules/next/dist/docs` (this repo's actual shipped docs, not training data). See Common Pitfalls (Geist Mono unused). |
| FOUND-05 | Raster artwork for non-reconstructable illustrations under `public/images/qiera` via `next/image` | `next/image` local-images doc read directly; Don't Hand-Roll table; logo-extraction guidance in Architecture Patterns → Pattern 3 (recommends SVG recreation over raster crop for the simple "Q" mark). |
</phase_requirements>

## Summary

Phase 1 is a pure **architecture/shell** phase: no homepage content sections, no forms, no data fetching. The existing repo is a completely stock, unmodified `create-next-app` TypeScript + Tailwind v4 App Router scaffold (`next@16.2.10`, `react@19.2.4`, `tailwindcss@^4`) — nothing needs reinitializing, only extending. This project's `AGENTS.md` correctly warns that Next.js docs may differ from training data; this research reads the **actual shipped docs at `node_modules/next/dist/docs/`** for fonts, metadata, images, CSS, and directives, and confirms that for this phase's scope (fonts, metadata, CSS, Image, `'use client'`) the App Router APIs match well-known patterns — no breaking surprises were found for what Phase 1 needs.

The two things that most determine plan quality are (1) getting Tailwind v4's CSS-first `@theme`/`@theme inline` token system right — including the specific reason the scaffold uses `inline` for font variables — and (2) building the mobile nav disclosure on the **native `<dialog>` element** (`showModal()`), which gives focus trap, Escape-to-close, inert background, and focus restore for free, satisfying the phase's a11y bar (FOUND-03 acceptance criterion 5) with **zero new dependencies**. The existing `globals.css` also ships a `prefers-color-scheme: dark` media query from the boilerplate that is actively wrong for this brand (QIERA's dark shell/light content split is a fixed design decision, not an OS-preference toggle) and must be removed as part of the token rewrite.

**Primary recommendation:** Extend the existing `@theme inline` block in `globals.css` with QIERA's own token namespace (colors, radii, container width, button variants), delete the boilerplate `prefers-color-scheme` block, build Header/Footer as Server Components fed by a single typed `src/data/navigation.ts`, and implement the mobile nav as a small Client Component wrapping a native `<dialog>` — no new runtime dependencies required for Phase 1's UI. Add Vitest (the Next.js-documented test runner) as a dev-only dependency to satisfy the phase's testing requirement.

## Architectural Responsibility Map

Single-tier Next.js App Router application — there is no separate backend/API tier in this project (forms in Phase 7 will use Next.js Route Handlers within the same app, not an external API). All Phase 1 capabilities live in the Frontend Server / Browser tiers:

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Design tokens (colors, radii, spacing, buttons) | Frontend Server (build-time CSS) | Browser (CSS custom properties at runtime) | Tailwind v4 compiles `@theme` tokens into static CSS at build; browser reads the resulting custom properties for `var()` usage in bespoke CSS. |
| Font loading (Geist) | Frontend Server | CDN/Static (self-hosted font files) | `next/font/google` downloads and self-hosts font files at build time; served as static assets, zero runtime network calls to Google. |
| Header/Footer markup, nav data | Frontend Server (RSC) | — | Static content, no interactivity — stays a Server Component per project's RSC-by-default rule. |
| Mobile nav open/close, focus/Escape handling | Browser/Client | — | Requires `useState`, `ref`, and the native `<dialog>` API — must be a Client Component (`'use client'`). |
| Logo/illustration assets | CDN/Static (`public/`, served via `next/image`) | Browser (rendering) | Static raster files optimized and served by Next's built-in Image Optimization. |
| Route metadata (title/description) | Frontend Server | — | `export const metadata` in Server Component layout/page files; resolved server-side into `<head>`. |

## Standard Stack

### Core (already installed — no action needed)
| Library | Version (installed) | Version (registry, verified) | Purpose | Why Standard |
|---------|---------|---------|---------|--------------|
| next | 16.2.10 | 16.2.10 [VERIFIED: npm registry] | App Router framework | Locked scaffold — do not reinstall/upgrade |
| react / react-dom | 19.2.4 | 19.2.7 [VERIFIED: npm registry] | UI runtime | Locked scaffold; patch upgrade optional, not required for this phase |
| tailwindcss | `^4` (installed 4.x) | 4.3.2 [VERIFIED: npm registry] | Utility CSS + CSS-first theme | Locked scaffold |
| @tailwindcss/postcss | `^4` | matches tailwindcss major | PostCSS plugin for Tailwind v4 | Already wired in `postcss.config.mjs` |
| typescript | `^5` | — | Strict typing | Project constraint (`AGENTS.md`, `PROJECT.md`) |
| eslint / eslint-config-next | `^9` / `16.2.10` | — | Linting | Already configured (`eslint.config.mjs`, flat config, `core-web-vitals` + `typescript` rule sets) |

### Supporting (new, dev-only — for TEST-01 / phase testing requirement)
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|-------------|
| vitest | 4.1.10 [VERIFIED: npm registry] | Unit test runner | **[CITED: node_modules/next/dist/docs/01-app/02-guides/testing/vitest.md]** — this is Next.js's own documented, first-party-supported unit-test setup for the App Router. |
| @vitejs/plugin-react | 6.0.3 [VERIFIED: npm registry] | Vite/Vitest JSX transform | Required by the official Next.js Vitest guide for React component tests. |
| vite-tsconfig-paths | 6.1.1 [VERIFIED: npm registry] | Resolves `@/*` alias inside Vitest | Required so tests can `import` from `@/data/navigation` etc., matching `tsconfig.json` paths. |
| jsdom | 29.1.1 [VERIFIED: npm registry] | DOM environment for Vitest | Required environment for rendering React components (incl. `<dialog>`) outside a browser. |
| @testing-library/react | 16.3.2 [VERIFIED: npm registry] | Component rendering/queries | Official Next.js Vitest guide's paired library for RTL-style assertions. |
| @testing-library/dom | 10.4.1 [VERIFIED: npm registry] | Query engine RTL depends on | Direct dependency listed in the official guide's install command. |
| @testing-library/user-event | 14.6.1 [VERIFIED: npm registry] | Simulates real keyboard/click sequences | Needed for the phase's own test requirement — "mobile menu toggle + Escape" — `fireEvent` alone does not reliably simulate a real `Escape` keydown + focus sequence; `user-event` does. |
| @testing-library/jest-dom | 6.9.1 [VERIFIED: npm registry] | DOM-specific matchers (`toBeVisible`, `toHaveAttribute`) | Widely paired with RTL for more readable assertions; optional but recommended for the nav/mobile-menu tests this phase requires. |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Hand-written `cn()` helper (≈5 lines) for conditional classNames | `clsx` (npm) | `clsx` is the ecosystem standard and tiny, but Phase 1's conditional-class needs are limited to a couple of boolean toggles (active nav link, open/closed mobile nav, button variant). Installing a package for that is not justified yet under the "no unnecessary packages" constraint. **Recommendation: write the helper locally in `src/lib/cn.ts`; revisit installing `clsx` only if a later phase's Button/variant matrix grows complex.** |
| Native `<dialog>` for mobile nav | `@radix-ui/react-dialog`, `react-aria`, `focus-trap-react` | These libraries solve the same problem (focus trap, Escape, restore-focus) but the native element does it with **zero JS and zero dependencies** for this exact use case, satisfying the "accessible dialog/disclosure pattern without heavy libraries" instruction directly (see Don't Hand-Roll and Architecture Patterns → Pattern 4). |
| Vitest + RTL for component tests | Jest (`node_modules/next/dist/docs/.../testing/jest.md` also exists) | Both are Next.js-documented options; Vitest was chosen because it's faster with Vite's native ESM/TS handling and is the modern default recommendation; either would satisfy the requirement, but do not install both. |
| `next/image` for the wordmark logo | Recreate the "Q" mark as inline SVG | See Architecture Patterns → Pattern 3 — the "Q" mark is a simple geometric ring shape and should be **recreated as SVG**, not cropped from the reference PNG (raster is reserved for non-reconstructable art per FOUND-05 and the visual-fidelity rule against using screenshots as backgrounds/assets). |

**Installation:**
```bash
npm install -D vitest @vitejs/plugin-react vite-tsconfig-paths jsdom @testing-library/react @testing-library/dom @testing-library/user-event @testing-library/jest-dom
```

**Version verification:** Ran `npm view <pkg> version` against the live npm registry on 2026-07-10 for every package above (see Package Legitimacy Audit for full detail); all versions shown are current as of research time, not stale training-data guesses.

## Package Legitimacy Audit

Ran `slopcheck scan --pkg npm <name> --json` (v0.6.1, installed via `pip install slopcheck --break-system-packages`) against every new package, plus `npm view <name> version time.created repository.url` for registry corroboration.

| Package | Registry | Age (first published) | Source Repo | slopcheck | Disposition |
|---------|----------|-----|-------------|-----------|-------------|
| vitest | npm | 2021-12-03 (~4.5 yrs) | github.com/vitest-dev/vitest | **[SUS]** — flagged `TYPOSQUAT_RISK`: "Suspiciously close to 'vite'. Could be a typosquat." | **Approved with warning** — this is a well-documented slopcheck false positive: `vitest` and `vite` are both maintained by the same organization (`vitest-dev`/Vite team), `vitest` has 4.5 years of history and 400+ published versions up to a `5.0.0-beta` line, and it is explicitly the test runner named in Next.js's own official docs (`node_modules/next/dist/docs/.../testing/vitest.md`). `` `vitest` [WARNING: slopcheck flagged as suspicious — verify before install if running outside this research session; verified here via npm registry age/repo + official Next.js docs citation.] `` |
| @vitejs/plugin-react | npm | 2021-09-20 | github.com/vitejs/vite-plugin-react (via monorepo) | [OK] | Approved |
| vite-tsconfig-paths | npm | 2020-08-05 | github.com/aleclarson/vite-tsconfig-paths | [OK] | Approved |
| jsdom | npm | 2011-11-21 (~14 yrs) | github.com/jsdom/jsdom | [OK] | Approved |
| @testing-library/react | npm | 2019-05-30 | github.com/testing-library/react-testing-library | [OK] | Approved |
| @testing-library/dom | npm | 2019-05-30 | github.com/testing-library/dom-testing-library | [OK] | Approved |
| @testing-library/user-event | npm | 2019-06-06 | github.com/testing-library/user-event | [OK] | Approved |
| @testing-library/jest-dom | npm | 2019-07-08 | github.com/testing-library/jest-dom | [OK] | Approved |

**Packages removed due to slopcheck [SLOP] verdict:** none.
**Packages flagged as suspicious [SUS]:** `vitest` — flagged as a possible typosquat of `vite`. Evidence overwhelmingly indicates this is a false positive (see table above), but per the Package Legitimacy Protocol the planner should still insert a lightweight `checkpoint:human-verify` before the `npm install` step in Wave 0, so a human explicitly confirms `vitest` (not `vite`, not a similarly-named package) before it's added to `package.json`.

## Architecture Patterns

### System Architecture Diagram

```
Browser Request (any route)
        │
        ▼
┌───────────────────────────┐
│ app/layout.tsx (RSC)      │  ← loads Geist via next/font, imports globals.css,
│  - <html> + font vars     │     sets base <html>/<body> metadata
│  - metadata export        │
└──────────────┬────────────┘
               │ renders children
               ▼
┌───────────────────────────┐
│ Header (RSC)              │  ← reads src/data/navigation.ts (single source)
│  - Logo (RSC, inline SVG) │
│  - Desktop <nav> links    │
│  - "Start Intelligence    │
│     Audit" CTA (Button)   │
│  - <MobileNav /> ─────────┼──┐
└───────────────────────────┘  │ passes nav items as props (serializable)
                                ▼
                  ┌─────────────────────────────┐
                  │ MobileNav ('use client')     │
                  │  - useState(open)            │
                  │  - <dialog ref> .showModal() │  ← native focus trap + Escape +
                  │  - toggle <button>            │     inert background + focus restore
                  └─────────────────────────────┘
               │
               ▼ (page-specific content — out of scope this phase)
┌───────────────────────────┐
│ page.tsx (per route, RSC) │
└──────────────┬────────────┘
               ▼
┌───────────────────────────┐
│ Footer (RSC)               │  ← reads the SAME src/data/navigation.ts
│  - Logo, nav links, legal  │     + src/data/legal-links.ts (or same file)
│  - © 2026 QIERA            │
└───────────────────────────┘
```

Data flow: `src/data/navigation.ts` is the single source of truth consumed identically by `Header` and `Footer` (both Server Components), guaranteeing the v1 link set (Intelligence, Process, Solutions, Leverages, Network, Contact) never drifts between the two — this directly satisfies the phase's own test requirement ("Navigation data renders expected v1 links only").

### Recommended Project Structure
```
src/
├── app/
│   ├── layout.tsx        # root layout: fonts, metadata, <Header>/<Footer> wrap
│   ├── globals.css       # @theme / @theme inline tokens (rewritten this phase)
│   └── page.tsx          # placeholder homepage shell (content in Phases 2-5)
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # RSC
│   │   ├── Footer.tsx        # RSC
│   │   └── MobileNav.tsx     # 'use client' — native <dialog> panel
│   └── ui/
│       ├── Button.tsx        # RSC-safe primitive; primary/secondary variants from tokens
│       └── Logo.tsx          # RSC; inline SVG "Q" mark + wordmark
├── data/
│   └── navigation.ts     # typed nav items + legal links (single source of truth)
├── lib/
│   └── cn.ts              # tiny conditional-className helper (see Alternatives Considered)
├── types/
│   └── navigation.ts     # NavItem / NavLink shared types (or co-located in data/navigation.ts)
public/
└── images/
    └── qiera/             # non-reconstructable raster art only (none needed yet in Phase 1
                            # if the "Q" mark is recreated as SVG — see Pattern 3)
```

### Pattern 1: Tailwind v4 CSS-first tokens with `@theme`
**What:** Define design tokens as CSS custom properties inside an `@theme` block in `globals.css`. Each namespaced variable (`--color-*`, `--radius-*`, `--spacing-*`, `--font-*`, `--breakpoint-*`) both becomes a plain CSS variable **and** generates a matching Tailwind utility class.
**When to use:** Any token that should be usable both as a Tailwind utility (`bg-shell`, `rounded-button`) and as a raw `var()` in bespoke CSS.
**Example:**
```css
/* Source: https://tailwindcss.com/docs/theme (verified 2026-07-10) */
@import "tailwindcss";

@theme {
  /* Brand surfaces */
  --color-shell: #05060d;        /* dark shell background — sample exact value from refs */
  --color-shell-foreground: #f5f5f7;
  --color-surface: #ffffff;      /* light content sections */
  --color-ink: #0b0d17;

  /* Accent (already identified in PROJECT.md from reference inspection) */
  --color-accent: #6366f1;
  --color-accent-strong: #7c3aed;

  /* Radii */
  --radius-button: 999px;   /* pill CTA seen in top section.png */
  --radius-card: 1rem;

  /* Layout */
  --container-max: 80rem;   /* verify exact px against reference geometry — see Open Questions */
}
```
**[ASSUMED]** exact hex values beyond the accent range — must be sampled from reference PNGs and confirmed with screenshot comparison per the visual-fidelity rule before being treated as final.

### Pattern 2: `@theme inline` for values that reference other CSS variables (required for `next/font`)
**What:** `@theme` normally has Tailwind's generated utility reference the theme variable (`.font-sans { font-family: var(--font-sans) }`), which breaks when `--font-sans` is defined as `var(--font-geist-sans)` and `--font-geist-sans` itself is only set deeper in the DOM (on `<html className={geistSans.variable}>`, not at `:root`). `@theme inline` makes Tailwind **inline the resolved value directly into the utility**, avoiding that scope mismatch.
**When to use:** Any theme token whose value is itself a `var(...)` reference — this project's font tokens (`--font-sans: var(--font-geist-sans)`) and the color tokens already present in the boilerplate.
**Example:**
```css
/* Source: https://tailwindcss.com/docs/theme "Referencing other variables" (verified 2026-07-10),
   cross-verified against Tailwind Labs GitHub discussion #17826 (verified 2026-07-10) */
@theme inline {
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --color-shell: var(--shell-raw);   /* if you keep raw values in a separate :root block */
}
```
**Existing code already does this correctly** (`src/app/globals.css` lines 8-13) — extend this same `@theme inline` block with the new brand tokens rather than creating a second competing block.

### Pattern 3: Logo as inline SVG component, not a raster crop
**What:** The "Q" mark in the references (`75976647-…png`, `Footer.png`, `top section.png`) is a simple stylized ring/letterform in the accent purple, not a complex illustration. Recreate it as a small inline SVG `<Logo />` component (RSC) rather than cropping a PNG out of a reference screenshot.
**When to use:** Any brand mark that is geometrically simple enough to redraw — this is consistent with the project rule that reference screenshots are "not page backgrounds" / not to be used as raw assets, and that `public/images/qiera` (`next/image`) is reserved for genuinely **non-reconstructable** illustrations (e.g., the circular 6-node operating-model graphic in `1ef8838f-….png`, which belongs to Phase 2's Hero, not Phase 1).
**Example:**
```tsx
// src/components/ui/Logo.tsx (RSC) — illustrative shape; exact path data must be
// redrawn by hand/vector-traced from the reference at implementation time.
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
**[ASSUMED]** — whether the exact mark is simple enough to redraw pixel-faithfully without vector source files is a judgment call; if the redrawn SVG doesn't match the reference closely enough after a screenshot comparison, falling back to a cropped PNG under `public/images/qiera/logo.png` via `next/image` (with explicit `width`/`height`) remains the documented fallback (FOUND-05 explicitly allows raster for this purpose).

### Pattern 4: Accessible mobile nav via native `<dialog>`
**What:** Wrap the mobile nav panel in a native `<dialog>` element, controlled imperatively via `ref.current.showModal()` / `ref.current.close()` from a small Client Component. The browser provides focus trapping (Tab cycles inside), Escape-to-close, `inert`-ing of background content, and (per current browser behavior) automatic focus return to the triggering element on close.
**When to use:** Any full-panel disclosure that should behave like a modal on mobile (this project's mobile nav; later phases' detail modals for Intelligence/Process/Solutions/Leverages will reuse the same base pattern per `HOME-09`, though the actual shared `DetailModal` component itself is built starting Phase 2).
**Example:**
```tsx
// Source: pattern verified against a11ypath.com/patterns/modal, cssportal.com dialog guide,
// and nutrient.io accessible-modals guide (all 2026, cross-checked against MDN <dialog> spec
// behavior) — [CITED, cross-verified across 4 sources 2026-07-10]
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
        <button type="button" onClick={() => setOpen(false)} aria-label="Close menu">
          Close
        </button>
        <nav>
          <ul>
            {items.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </dialog>
    </>
  )
}
```
**Good to know:** `dialog`'s `cancel` event fires on Escape *before* `close`; listening to `onCancel` (or just `onClose`, which fires either way once the dialog closes) is enough to sync React state — no manual `keydown` listener needed. Style the `::backdrop` pseudo-element for the dim overlay, and style `dialog[open]` for the panel itself; `<dialog>` renders in the top layer so no z-index management is needed against the sticky header.

### Anti-Patterns to Avoid
- **Reintroducing `prefers-color-scheme: dark` for brand colors:** The boilerplate's `@media (prefers-color-scheme: dark)` block flips `--background`/`--foreground` based on the visitor's OS setting. QIERA's dark shell (header/hero/footer/network/forms/legal) vs. light content sections (Intelligence/Process/Solutions/Leverages) is a **fixed brand design**, not a user preference toggle — keeping this media query would make the site look wrong for any visitor with OS light/dark mode set opposite to what the current section expects. Remove it; define shell/surface tokens as fixed values instead.
- **Building a custom JS focus-trap for the mobile nav:** Unnecessary — the native `<dialog>` element does this already (see Pattern 4 and Don't Hand-Roll).
- **Cropping the reference screenshot as a CSS/HTML background image anywhere:** Explicitly forbidden by the project's asset rules and `qiera-visual-fidelity.mdc` — always rebuild layout in HTML/CSS; only use `next/image` for genuinely non-reconstructable illustrations.
- **Defining the same token twice (once in a bare `@theme`, once in `@theme inline`):** Pick one block per token family to avoid conflicting generated CSS; extend the single existing `@theme inline` block already in `globals.css`.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Mobile nav focus trap / Escape-to-close / focus restore | Custom `keydown` listener cycling `Tab` between first/last focusable elements, manual `document.activeElement` save/restore | Native `<dialog>` + `showModal()`/`close()` | Browser implements this natively and correctly (top-layer rendering, `inert` background, automatic focus return); hand-rolled versions are "exactly the kind of code that's easy to get subtly wrong" per multiple 2026 accessibility guides reviewed. |
| Font self-hosting, preloading, layout-shift prevention | Manual `@font-face` + `<link rel="preload">` tags | `next/font/google` (already wired) | Automatic self-hosting, zero external network requests, automatic `size-adjust` to prevent CLS — reinventing this is strictly worse and was already solved by the existing scaffold. |
| Responsive raster image serving (if any raster logo/art is used) | Manual `<img srcset>` + manual width/height | `next/image` | Automatic responsive `srcset`, format negotiation (WebP), lazy loading, and CLS prevention via inferred/declared dimensions. |
| Design-token duplication between CSS and a JS config object | A `theme.ts`/`tokens.js` object mirrored into Tailwind's old `tailwind.config.js` | Tailwind v4 `@theme`/`@theme inline` in `globals.css` | v4's CSS-first model makes the CSS file itself the single source of truth; a parallel JS object would drift out of sync and duplicates work v4 already does for you. |
| `<head>` meta tag construction | Manual `<meta>` JSX in `layout.tsx` `<head>` | Next.js `Metadata` object (`export const metadata`) | Framework-generated, SSR-safe, deduplicated across nested layouts; manual head tags fight the framework's own head-management. |

**Key insight:** Every "Don't Hand-Roll" item above already has a **zero-additional-dependency** solution built into either the browser (`<dialog>`) or the already-installed framework (`next/font`, `next/image`, Next.js Metadata, Tailwind v4). Phase 1 should ship with no new production dependencies — the only new packages are dev-only test tooling.

## Common Pitfalls

### Pitfall 1: `prefers-color-scheme` dark-mode override fighting the intentional dark/light brand shell
**What goes wrong:** The current `globals.css` boilerplate swaps `--background`/`--foreground` when the visitor's OS is in dark mode, independent of which section (dark shell vs. light content) is being rendered.
**Why it happens:** `create-next-app`'s default template assumes a single-theme app that should respect OS dark-mode preference; QIERA's design instead has **both** a permanently-dark shell and permanently-light content sections coexisting on the same page.
**How to avoid:** Delete the `@media (prefers-color-scheme: dark)` block entirely in Phase 1; define `--color-shell`/`--color-surface` (etc.) as fixed values, not preference-dependent ones.
**Warning signs:** Header/footer/hero look correct in a light-OS-mode screenshot but invert unexpectedly when a screenshot tool or browser is set to dark OS mode.

### Pitfall 2: Accidentally copying the reference nav's extra items (Pricing, Resources, Security) into code
**What goes wrong:** Every supplied header/footer reference image includes "Pricing" (and the Audit page header additionally shows "Resources"); copying the visual nav 1:1 without cross-checking `DECISIONS.md` reintroduces items that are explicitly locked **out** of v1.
**Why it happens:** The reference images were exported from a more complete design file; the v1 scope deliberately trims them.
**How to avoid:** Drive Header/Footer exclusively from `src/data/navigation.ts`, and hard-code that file's contents from `DECISIONS.md` (`Intelligence, Process, Solutions, Leverages, Network, Contact` + `Start Intelligence Audit` CTA) rather than reading the array length/order directly off a reference screenshot.
**Warning signs:** A visual diff against the reference looks "closer" than the locked nav set — that's a signal the extra items were included, not a bonus.

### Pitfall 3: Breaking the `next/font` → Tailwind `font-sans` chain when adding new tokens
**What goes wrong:** Adding brand color tokens to a **plain** `@theme` block instead of the existing `@theme inline` block (or accidentally creating a second `@theme` block) can produce a `font-sans` utility that silently falls back to the browser default sans-serif instead of Geist, because of how CSS custom-property scoping resolves `var(--font-sans)` relative to where `--font-geist-sans` is actually defined (on `<html>`, via `next/font`'s `variable` option).
**Why it happens:** This is a documented, common v4 + `next/font` gotcha (see Architecture Patterns → Pattern 2 sources) — not obvious from reading the CSS alone, since it only manifests visually (wrong rendered font), not as a build error.
**How to avoid:** Keep exactly one `@theme inline` block; add all new tokens (including ones with plain literal values like colors) into it rather than splitting definitions across `@theme` and `@theme inline`.
**Warning signs:** Body text silently renders in a generic sans-serif instead of Geist despite `next/font` being configured correctly; DevTools computed styles show `font-family: sans-serif` instead of the Geist variable chain.

### Pitfall 4: Loading Geist Mono without ever using it
**What goes wrong:** The scaffold loads both `Geist` and `Geist_Mono` via `next/font/google` and exposes both as CSS variables, but nothing in any supplied reference uses a monospace typeface (no code blocks on a marketing site).
**Why it happens:** Copied verbatim from the `create-next-app` default template, which always loads both.
**How to avoid:** Either keep `Geist_Mono` loaded but genuinely unused (harmless — self-hosted subset fonts have a small, one-time cost and no runtime penalty if the CSS variable is simply never referenced by any utility) or explicitly remove it if a phase-1 code review prefers a leaner font payload. **[ASSUMED]** — this is a judgment call flagged for the planner/implementer; either choice satisfies FOUND-04 ("Keep Geist"), since the decision is about the Sans family, not Mono. Recommend documenting the choice made in the phase's implementation notes either way.

### Pitfall 5: Header not "sticky-ready," creating rework in Phase 5
**What goes wrong:** `REFERENCE-INVENTORY.md` flags the header's sticky behavior as an open/uncertain interaction ("Sticky?"). If Header is built as a normal static block now, Phase 5's hash-navigation work (`HOME-02`, sticky-header scroll offset) will require restructuring markup that's already in use across every future page.
**Why it happens:** The header reference is a static crop; sticky behavior isn't directly visible in a single screenshot.
**How to avoid:** Build the header with `sticky top-0 z-40` (or `fixed` + a spacer, whichever proves visually closer once real content exists) now, even though no section IDs/anchors exist yet to scroll to. This matches the project rule ("Account for the sticky header using scroll-margin-top") which presupposes a sticky header exists.
**Warning signs:** Phase 5 plan needs to touch `Header.tsx` layout/positioning again just to add stickiness — a sign this should have shipped in Phase 1.

## Code Examples

### Rewritten `globals.css` skeleton (extends, does not replace, the existing font-variable wiring)
```css
/* Source: next/font wiring pattern from existing src/app/layout.tsx (unchanged);
   @theme inline pattern from https://tailwindcss.com/docs/theme (verified 2026-07-10) */
@import "tailwindcss";

@theme inline {
  /* Fonts (existing — keep) */
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);

  /* Brand surfaces — sample exact values from docs/qiera-reference, then screenshot-verify */
  --color-shell: #05060d;
  --color-shell-foreground: #f5f5f7;
  --color-surface: #ffffff;
  --color-ink: #0b0d17;
  --color-ink-muted: #6b7280;

  /* Accent — anchor is already locked in PROJECT.md from prior reference inspection */
  --color-accent: #6366f1;
  --color-accent-strong: #7c3aed;

  /* Radii */
  --radius-button: 999px;
  --radius-card: 1rem;

  /* Layout */
  --container-max: 80rem; /* verify against reference geometry — see Open Questions */
}

/* NOTE: the boilerplate's `@media (prefers-color-scheme: dark)` block is intentionally
   removed here — see Common Pitfalls #1. */

body {
  background: var(--color-surface);
  color: var(--color-ink);
}
```

### `src/data/navigation.ts` — single source of truth for Header + Footer
```ts
// Source: DECISIONS.md #2, #13, #14 — locked nav set and labels
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
**[ASSUMED]** the hash-based hrefs (`/#intelligence`, etc.) for in-page sections are forward-looking placeholders for Phase 5's `HOME-02` section IDs; since those sections don't exist until Phases 2-5, clicking them in Phase 1 will simply do nothing harmful (no matching `id` yet) rather than 404 — this is preferable to linking to non-existent routes. Confirm this approach doesn't conflict with the Phase 5 plan when it's written.

### Minimal `vitest.config.mts` for this project
```ts
// Source: node_modules/next/dist/docs/01-app/02-guides/testing/vitest.md (this repo's
// shipped Next.js docs, verified 2026-07-10)
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
  },
})
```

### Example nav data test (satisfies "Navigation data renders expected v1 links only")
```tsx
// src/data/navigation.test.ts
import { expect, test } from 'vitest'
import { primaryNav } from './navigation'

test('primary nav contains exactly the locked v1 link set, no Pricing/Resources/Security', () => {
  const labels = primaryNav.map((item) => item.label)
  expect(labels).toEqual([
    'Intelligence',
    'Process',
    'Solutions',
    'Leverages',
    'Network',
    'Contact',
  ])
  expect(labels).not.toContain('Pricing')
  expect(labels).not.toContain('Resources')
  expect(labels).not.toContain('Security')
})
```

### Example mobile nav interaction test (satisfies "mobile menu toggle + Escape")
```tsx
// src/components/layout/MobileNav.test.tsx
import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MobileNav } from './MobileNav'

test('mobile nav opens on toggle and closes on Escape', async () => {
  const user = userEvent.setup()
  render(<MobileNav items={[{ href: '/network', label: 'Network' }]} />)

  await user.click(screen.getByRole('button', { name: /menu/i }))
  expect(screen.getByRole('dialog', { name: /mobile navigation/i })).toBeVisible()

  await user.keyboard('{Escape}')
  expect(screen.queryByRole('dialog', { name: /mobile navigation/i })).not.toBeVisible()
})
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `tailwind.config.js` JS theme object | CSS-first `@theme` directive in the imported CSS file | Tailwind v4.0 (Jan 2025) | This project was already scaffolded on v4 — no migration needed, but any training-data instinct to reach for `tailwind.config.js` for new tokens should be resisted; extend `globals.css` instead. |
| Custom JS focus-trap libraries for accessible modals/drawers | Native `<dialog>` + `showModal()` | Broad browser support since 2022; treated as the default recommendation in 2026 accessibility guidance reviewed during this research | Removes an entire class of hand-rolled a11y bugs and (for this phase) an entire dependency category. |
| `next/font`'s `.className` prop applied per-component | `.variable` prop applied once at `<html>`, consumed via Tailwind `@theme inline` | Documented pattern in current Next.js fonts guide's "Root Layout" note; already how this repo's scaffold works | No change needed — just confirms the existing scaffold pattern is still the recommended one, not a training-data assumption. |

**Deprecated/outdated:** None identified that affect this phase — Next 16's App Router font/image/metadata/CSS/`use client` APIs read directly from `node_modules/next/dist/docs` match what this research assumed going in; no surprise breaking changes for Phase 1's scope.

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | Exact hex/oklch values for `--color-shell`, `--color-surface`, `--color-ink`, radii pixel values, and `--container-max` beyond the already-locked accent range | Standard Stack, Architecture Patterns → Pattern 1, Code Examples | Low-medium — these are placeholder starting values explicitly flagged for screenshot-based verification during implementation, per the project's own visual-fidelity workflow (steps 5-8: implement → screenshot → compare → correct). Getting them slightly wrong at plan time is expected and self-correcting. |
| A2 | The QIERA "Q" mark is simple enough to recreate as inline SVG rather than a raster crop | Architecture Patterns → Pattern 3 | Medium — if the redrawn SVG doesn't visually match after a screenshot comparison, the documented fallback (raster PNG via `next/image`, FOUND-05) absorbs this risk with no rework beyond swapping the `Logo` component's internals. |
| A3 | Hash-based `href`s (`/#intelligence`, etc.) in `navigation.ts` are acceptable placeholders before Phase 5 creates the actual section IDs | Code Examples (`navigation.ts`) | Low — worst case, clicking these links in Phase 1 does nothing (no matching anchor) rather than erroring; Phase 5 will wire real anchors. Flag for the Phase 5 planner to confirm hrefs match the IDs chosen there (`intelligence`, `process`, `solutions`, `leverages` per `HOME-02`). |
| A4 | Whether to keep or drop the unused `Geist_Mono` font load | Common Pitfalls #4 | Low — either choice satisfies FOUND-04; purely a payload-size/cleanliness judgment call, not a visual-fidelity risk. |
| A5 | Header should be `sticky` starting in Phase 1 (reference marks stickiness as "uncertain") | Common Pitfalls #5 | Low-medium — if the reference actually intends a non-sticky header, removing `sticky` later is a one-line change; the bigger risk (structural rework in Phase 5) is avoided by defaulting to sticky now. |

## Open Questions (RESOLVED)

1. **Exact container max-width / horizontal padding in px** — **RESOLVED:** `01-UI-SPEC.md` locks `--container-max: 1280px` with responsive gutters (desktop ≥1280 = 48px, tablet = 32px, mobile = 24px). Values remain **[ASSUMED]** pending screenshot comparison against `top section.png` / header / footer refs at 1440.

2. **Secondary button visual style** — **RESOLVED:** `01-UI-SPEC.md` locks secondary as outlined pill (transparent bg, 1px accent border, accent text), derived from the "THE QIERA OPERATING MODEL" badge pattern in `top section.png`. Flagged for Phase 5 refinement if card refs show a different secondary pattern.

3. **Should `/network` and `/contact` links 404 gracefully before Phases 6-7 exist?** — **RESOLVED:** Do not add interim `not-found.tsx` in Phase 1. Leave branded `UTIL-01` not-found to Phase 8; default Next.js 404 during in-progress development is acceptable.

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js | Next.js dev/build | ✓ | v22.13.0 | — |
| npm | Package install | ✓ | 10.9.2 | — |
| git | Version control (user commits manually) | ✓ | 2.53.0 | — |
| Next.js (installed) | Framework | ✓ | 16.2.10 (matches npm registry latest) | — |
| Tailwind CSS (installed) | Styling | ✓ | `^4` resolves to a 4.x satisfying `4.3.2` latest | — |
| Context7 MCP | Library doc lookups during this research | ✗ (not registered in this environment) | — | Used official Next.js docs shipped in `node_modules/next/dist/docs/` (this repo's actual version) plus WebSearch cross-verified against `tailwindcss.com/docs` and multiple 2026 accessibility guides instead. No blocking impact — sufficient primary-source coverage was available without Context7. |
| slopcheck (Python CLI) | Package Legitimacy Audit | ✓ (installed this session via `pip install slopcheck --break-system-packages`) | 0.6.1 | — |

**Missing dependencies with no fallback:** none — nothing in Phase 1's scope is blocked.
**Missing dependencies with fallback:** Context7 (fallback used successfully — see above).

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Vitest 4.1.10 + @testing-library/react 16.3.2 (not yet installed — Wave 0 gap) |
| Config file | none yet — `vitest.config.mts` must be created in Wave 0 (see Code Examples) |
| Quick run command | `npx vitest run src/data/navigation.test.ts` (single file, fast feedback) |
| Full suite command | `npx vitest run` |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| FOUND-03 | `primaryNav` contains exactly the locked v1 label set; no Pricing/Resources/Security | unit | `npx vitest run src/data/navigation.test.ts` | ❌ Wave 0 |
| FOUND-03 | Footer renders the same nav set as Header (single source of truth, no drift) | unit | `npx vitest run src/components/layout/Footer.test.tsx` | ❌ Wave 0 |
| FOUND-03 | Mobile nav: toggle button opens the `<dialog>`; `Escape` closes it and (implicitly, per native behavior) returns focus to the toggle | unit/component | `npx vitest run src/components/layout/MobileNav.test.tsx` | ❌ Wave 0 |
| FOUND-01, FOUND-02, FOUND-04, FOUND-05 | Structural/visual outcomes (scaffold untouched, tokens applied, Geist loaded, assets placed correctly) | manual-only (screenshot comparison + `npm run lint` + `tsc --noEmit`) | `npm run lint`; `npx tsc --noEmit`; manual screenshot diff at 1440/768/390 per phase's own "Screenshot widths" spec | N/A — not unit-testable; covered by acceptance criterion 6 and the mandatory visual-fidelity workflow |

### Sampling Rate
- **Per task commit:** `npx vitest run <changed test file>` (fast, targeted)
- **Per wave merge:** `npx vitest run` (full suite) + `npm run lint` + `npx tsc --noEmit`
- **Phase gate:** Full suite green, lint clean, `tsc --noEmit` clean, and all three screenshot widths (1440/768/390) visually compared against the phase's reference files before `/gsd-verify-work`.

### Wave 0 Gaps
- [ ] `npm install -D vitest @vitejs/plugin-react vite-tsconfig-paths jsdom @testing-library/react @testing-library/dom @testing-library/user-event @testing-library/jest-dom` — gate behind `checkpoint:human-verify` per the `vitest` [SUS] flag above.
- [ ] `vitest.config.mts` at project root (see Code Examples)
- [ ] `"test": "vitest run"` script added to `package.json`
- [ ] `src/data/navigation.ts` + its test file
- [ ] `src/components/layout/MobileNav.tsx` + its test file

*(No existing test infrastructure to build on — this is a from-scratch Wave 0 setup.)*

## Security Domain

`security_enforcement` is absent from `.planning/config.json`, so per protocol it is treated as enabled. Phase 1 has no authentication, no data persistence, and no user input (forms are Phase 7) — most ASVS categories are not applicable yet, but the categories that do apply to a public marketing shell are covered below.

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V2 Authentication | No | No auth surface exists anywhere in this project (marketing site only, per `PROJECT.md` Out of Scope). |
| V3 Session Management | No | No sessions/cookies introduced in this phase. |
| V4 Access Control | No | No protected resources in this phase. |
| V5 Input Validation | No | No user input accepted in this phase (nav is static data; forms arrive Phase 7 with their own validation research). |
| V6 Cryptography | No | Nothing to encrypt/hash in this phase. |
| V14 Configuration (adjacent — HTML/asset hygiene) | Yes | `next/font` self-hosts Geist (no third-party font CDN request, reducing external origins the site depends on / simplifying any future CSP); `next/image` serves only same-origin local assets from `public/`; no `dangerouslySetInnerHTML` anywhere in Header/Footer/nav rendering — nav labels/hrefs come from a typed, developer-controlled data file, never from user input. |

### Known Threat Patterns for this stack

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Open redirect via nav `href` values | Tampering | N/A for this phase — all `href` values in `navigation.ts` are hard-coded, developer-controlled strings, not derived from any request input; nothing to mitigate yet. Revisit if `topic` query params (Phase 7, `Become a Partner` → `/contact?topic=partnership`) ever construct hrefs dynamically from user-influenced data. |
| Clickjacking of the mobile nav `<dialog>` | Tampering/Spoofing | Native `<dialog>` renders in the browser's top layer and is not `iframe`-embeddable content itself; standard `X-Frame-Options`/`frame-ancestors` CSP for the whole site (a Phase 10 / deployment concern) is the actual mitigation boundary, not something Phase 1 needs to add. |

## Sources

### Primary (HIGH confidence)
- `node_modules/next/dist/docs/01-app/01-getting-started/13-fonts.md` — this repo's actual shipped Next.js 16 fonts documentation (per `AGENTS.md` instruction to read shipped docs, not rely on training data)
- `node_modules/next/dist/docs/01-app/01-getting-started/14-metadata-and-og-images.md` — Metadata API
- `node_modules/next/dist/docs/01-app/01-getting-started/11-css.md` — Tailwind/CSS Next.js integration
- `node_modules/next/dist/docs/01-app/01-getting-started/12-images.md` — `next/image` local images
- `node_modules/next/dist/docs/01-app/03-api-reference/01-directives/use-client.md` — `'use client'` boundary rules
- `node_modules/next/dist/docs/01-app/02-guides/testing/vitest.md` — official Next.js Vitest setup guide (package list, config, first test example)
- `https://tailwindcss.com/docs/theme` — Tailwind v4 `@theme`/`@theme inline` official docs (fetched 2026-07-10)
- `npm view <pkg> version / time.created / repository.url` — live npm registry queries for every recommended package (2026-07-10)
- `slopcheck scan --pkg npm <pkg> --json` v0.6.1 — package legitimacy scan for every new dependency (2026-07-10)
- Direct image reads of `docs/qiera-reference/Homepage/75976647-1ef2-4aac-8fab-fcbd143601f5.png`, `Footer.png`, `top section.png` — this session

### Secondary (MEDIUM confidence)
- GitHub Tailwind Labs discussion #17826 on `@theme` vs `@theme inline` — verified against and consistent with the official docs above
- Multiple 2026 accessibility-focused articles on native `<dialog>` for accessible modals (bfsg-experte.de, cssportal.com, nutrient.io, a11ypath.com, uxpin.com) — cross-checked, all converge on the same recommendation and mechanism, consistent with known `<dialog>` browser behavior

### Tertiary (LOW confidence)
- Medium.com "Next.js 16 Roadmap Day 4/30" blog post on Tailwind v4 + fonts — used only as a secondary confirmation of the `@theme inline` + `next/font` pattern already established by the primary sources; not relied on for any claim not otherwise corroborated.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — installed versions read directly from `package.json`; new package versions verified live against npm registry; Next.js APIs read from this repo's actual shipped docs, not assumed from training data.
- Architecture: HIGH — Tailwind v4 theme patterns and native `<dialog>` patterns both cross-verified across ≥3 independent sources with full agreement.
- Pitfalls: HIGH for the `@theme inline`/font-scoping pitfall (directly documented, reproducible cause) and the `prefers-color-scheme` pitfall (directly observed in the current `globals.css`); MEDIUM for the sticky-header recommendation (inferred from project rules + reference-inventory uncertainty, not a directly-stated requirement for Phase 1).
- Exact visual token values (colors/radii/container width): LOW/ASSUMED by design — intentionally deferred to the screenshot-verification workflow mandated by `qiera-visual-fidelity.mdc`; see Assumptions Log A1.

**Research date:** 2026-07-10
**Valid until:** 2026-08-09 (30 days — Next.js/Tailwind/testing-library ecosystem here is stable; re-verify package versions if planning is delayed past this window)
