---
phase: 01-foundation-shell
plan: 02
subsystem: design-tokens-and-nav-data
tags: [tailwind-v4, theme-tokens, navigation, typed-data]

requires: [01-01]
provides:
  - QIERA design tokens in the single @theme inline block (colors, radii, container width)
  - Typed navigation single-source-of-truth (primaryNav, primaryCta, legalNav)
  - cn() className helper (no clsx dependency)
affects: [01-03, 01-04, 01-05]

tech-stack:
  added: []
  patterns:
    - "Single @theme inline block extended in place — never split into a second @theme block"
    - "Type-only import + re-export so consumers only need @/data/navigation"
    - "Nav data locked and test-enforced against DECISIONS.md #2/#13/#14"

key-files:
  created:
    - src/types/navigation.ts
    - src/data/navigation.ts
    - src/data/navigation.test.ts
    - src/lib/cn.ts
  modified:
    - src/app/globals.css

key-decisions:
  - "NavItem type split into src/types/navigation.ts (not co-located), re-exported from src/data/navigation.ts so import sites are unaffected"
  - "--color-surface and --color-ink included in the @theme inline block (used by body background/color) alongside the shell/secondary/accent/text/border/focus tokens named in acceptance criteria"
  - "No commits made — commit_docs: false; user commits manually"

requirements-completed: [FOUND-01, FOUND-02]

duration: 15min
completed: 2026-07-10
---

# Phase 1: Plan 02 — Design Tokens & Navigation Data Summary

**QIERA design tokens now live in one `@theme inline` block with the Geist chain intact; boilerplate dark-mode/Arial removed; typed nav single-source locks the v1 link set with a passing Vitest suite.**

## Accomplishments

- Rewrote `src/app/globals.css`: kept `@import "tailwindcss";` and the existing font lines, added all QIERA tokens into the same `@theme inline` block, deleted the `@media (prefers-color-scheme: dark)` block and the `Arial, Helvetica, sans-serif` body override, set `body` to `var(--color-surface)` / `var(--color-ink)`.
- Created `src/types/navigation.ts` exporting `NavItem`.
- Created `src/data/navigation.ts` — type-only imports and re-exports `NavItem`, exports `primaryNav` (Intelligence/Process/Solutions/Leverages/Network/Contact), `primaryCta` (Start Intelligence Audit), `legalNav` (Privacy Policy/Terms of Use/Cookie Policy).
- Created `src/data/navigation.test.ts` (Vitest) — 5 tests locking exact label order, excluding Pricing/Resources/Security, asserting the locked spelling ("Leverages"/"Contact"), and asserting the CTA/legal link contents.
- Created `src/lib/cn.ts` — 3-line conditional-className helper, no new dependency.

## Final Token Values Used

All values sourced from `01-UI-SPEC.md` / `01-PATTERNS.md`, treated as `[ASSUMED]` screenshot-sample placeholders per `qiera-visual-fidelity.mdc` (final verification happens in Plan 05's screenshot comparison, not this plan):

```css
@theme inline {
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);

  --color-shell: #05060b;
  --color-secondary: #10121b;
  --color-surface: #ffffff;
  --color-ink: #0b0d17;
  --color-accent: #6366f1;
  --color-accent-strong: #7c3aed;
  --color-text-primary: #f5f5f7;
  --color-text-secondary: #9ca3af;
  --color-border: rgba(255, 255, 255, 0.08);
  --color-focus-ring: #8b7cf6;

  --radius-button: 999px;
  --radius-card: 16px;

  --container-max: 1280px;
}
```

## NavItem Location

`NavItem` was **split** into `src/types/navigation.ts` (not co-located in `src/data/navigation.ts`), per the plan's explicit instruction. `src/data/navigation.ts` imports it as a type-only import and re-exports it, so any consumer can `import { NavItem } from "@/data/navigation"` without knowing about the split — satisfying the plan's "key_links" contract (`src/data/navigation.ts` → `src/types/navigation.ts` via `import type NavItem`).

## Files Created/Modified

- `src/app/globals.css` — modified (token rewrite)
- `src/types/navigation.ts` — created
- `src/data/navigation.ts` — created
- `src/data/navigation.test.ts` — created
- `src/lib/cn.ts` — created

No commits made this plan — `commit_docs: false`, user commits manually.

## Verification

- `npx tsc --noEmit` — clean, no errors.
- `npm run lint` — clean, no errors/warnings.
- `npx vitest run src/data/navigation.test.ts` — 5/5 tests passed.
- Manual grep of `globals.css` confirms: exactly one `@theme` occurrence (the single `@theme inline` block), zero `prefers-color-scheme` occurrences, zero `Arial`/`Helvetica` occurrences.

## Deviations from Plan

None — plan executed exactly as written. `--color-surface` and `--color-ink` were included in the token block as explicitly listed in the plan's `<action>` and interface spec text (used by the `body` rule), in addition to the tokens named in the acceptance-criteria bullet list.

## Known Stubs

None. All exported values are final locked data (not placeholders) — `primaryNav`/`primaryCta`/`legalNav` are the real v1 content per `DECISIONS.md`, not mock/empty data. The hash-based hrefs (`/#intelligence`, etc.) and not-yet-built routes (`/network`, `/contact`, `/start-intelligence-audit`) are documented forward-looking placeholders per `01-RESEARCH.md` Assumption A3 (harmless no-ops/404s until later phases build those routes/sections), not stubs blocking this plan's goal.

## Threat Flags

None — no new network endpoints, auth paths, or trust-boundary changes introduced. Nav data remains fully developer-authored (T-01-02, T-01-03 in the plan's threat model both remain `accept`, unchanged by this implementation).

## Self-Check: PASSED

- FOUND: src/app/globals.css (modified, contains `--color-shell`, one `@theme` block)
- FOUND: src/types/navigation.ts
- FOUND: src/data/navigation.ts
- FOUND: src/data/navigation.test.ts
- FOUND: src/lib/cn.ts
- FOUND: `npx tsc --noEmit` exit 0
- FOUND: `npm run lint` exit 0
- FOUND: `npx vitest run src/data/navigation.test.ts` — 5 passed, exit 0
