---
phase: 01-foundation-shell
plan: 03
subsystem: ui-primitives
tags: [inline-svg, tailwind-v4, tokens, rsc]

requires: [01-02]
provides:
  - Logo (inline-SVG "Q" mark + wordmark + optional tagline)
  - Button (token-driven primary/secondary pill, RSC)
  - public/images/qiera raster-asset directory (FOUND-05)
affects: [01-04, 01-05]

tech-stack:
  added: []
  patterns:
    - "Inline <svg> mark (fillRule evenodd ring + stroked diagonal tail) instead of a raster crop of the reference PNG"
    - "cn() from src/lib/cn.ts used for all conditional/variant classNames"
    - "All colors/radii referenced via var(--token) arbitrary-value utilities — zero hardcoded hex in either component"

key-files:
  created:
    - src/components/ui/Logo.tsx
    - src/components/ui/Button.tsx
    - public/images/qiera/.gitkeep
  modified: []

key-decisions:
  - "SVG mark redrawn as a hand-authored ring (evenodd-filled circle-in-circle path) + stroked diagonal tail, both using fill/stroke var(--color-accent) — no raster fallback needed this plan (screenshot comparison against the reference deferred to Plan 05 per the plan's own note)"
  - "Accessible name resolved to exactly one 'QIERA' announcement: the svg carries role=\"img\" aria-label=\"QIERA\" (interface-mandated); the adjacent visible wordmark text is marked aria-hidden=\"true\" since it would otherwise duplicate the same accessible name. The tagline (different text, not \"QIERA\") is left in the accessibility tree normally."
  - "Button includes a token-based focus-visible ring (var(--color-focus-ring)) per the project's accessibility rule requiring visible focus states — trivial addition, not a deviation requiring Rule 2 documentation since the plan explicitly permitted adding one 'if trivial'"
  - "No commits made — commit_docs: false; user commits manually"

requirements-completed: [FOUND-02, FOUND-05]

duration: 10min
completed: 2026-07-10
---

# Phase 1: Plan 03 — Logo & Button UI Primitives Summary

**`Logo` renders a hand-drawn inline-SVG "Q" ring+tail mark plus the wordmark/tagline, and `Button` renders token-only primary (accent-filled pill + arrow) / secondary (accent-outline pill) variants — both zero-hardcoded-hex Server Components.**

## Accomplishments

- Created `src/components/ui/Logo.tsx` — Server Component (no `'use client'`) exporting `Logo({ className?, showTagline? })`. Renders an inline `<svg viewBox="0 0 32 32" role="img" aria-label="QIERA">` containing an evenodd ring path and a stroked diagonal tail, both colored via `fill`/`stroke="var(--color-accent)"`. Wordmark "QIERA" renders at 20px/600/`var(--color-text-primary)` beside the mark (marked `aria-hidden="true"` to avoid double-announcing the accessible name already provided by the svg's `aria-label`). When `showTagline` is true, renders "E-commerce Growth Intelligence" at 14px/400/`var(--color-text-secondary)` beneath.
- Created `src/components/ui/Button.tsx` — Server Component exporting `Button({ href, variant = 'primary', className, children })`. Renders an `<a>` pill (`rounded-[var(--radius-button)]`, 20px/600 text, composed via `cn()` from `@/lib/cn`). Primary: `bg-[var(--color-accent)]` + `text-[var(--color-text-primary)]` + trailing `<span aria-hidden="true">→</span>` with a 4px (`gap-1`) label/arrow gap. Secondary: transparent background, `border border-[var(--color-accent)]/50`, `text-[var(--color-accent)]`, no arrow. Added a token-based `focus-visible` ring (`var(--color-focus-ring)`) on both variants.
- Created `public/images/qiera/.gitkeep` — establishes the FOUND-05 raster-asset directory now, even though Phase 1 ships the logo as SVG (raster fallback was not needed this plan).

## SVG Mark vs. Raster Fallback

The SVG mark was used as planned; the raster fallback (`public/images/qiera/logo.png` via `next/image`) was **not** invoked. Exact geometry fidelity against the reference PNG is `[ASSUMED]` per the plan and `01-UI-SPEC.md` — this plan did not run a screenshot comparison (Plan 05 owns that verification step across the full assembled shell). If Plan 05's comparison shows the redrawn mark diverges too far from the reference, swapping to the raster fallback only requires editing `Logo.tsx`'s render body — the component's public interface (`{ className?, showTagline? }`) does not change.

## Header/Footer `showTagline` Usage Note (for Plan 04)

Per `01-UI-SPEC.md`'s Header/Footer contracts: the tagline is only explicitly required in the Footer's Row 1 ("Logo + tagline (left)"). The Header content-row spec lists only `Logo` (no tagline) among its elements. Recommendation for Plan 04: Footer should render `<Logo showTagline />`; Header should render `<Logo />` (tagline omitted, matching the UI-SPEC's Header row description). This is a recommendation, not a lock — Plan 04's executor should re-check the reference crops before finalizing.

## Files Created/Modified

- `src/components/ui/Logo.tsx` — created
- `src/components/ui/Button.tsx` — created
- `public/images/qiera/.gitkeep` — created

No commits made this plan — `commit_docs: false`, user commits manually.

## Verification

- `npx tsc --noEmit` — clean, no errors.
- `npm run lint` — clean, no errors/warnings.
- Manual grep of both component files for `use client` and hex patterns (`#[0-9a-fA-F]{3,6}`) — zero matches in either file.
- `public/images/qiera/.gitkeep` confirmed present on disk.

## Deviations from Plan

None — plan executed exactly as written. The focus-visible ring on `Button` was explicitly pre-authorized by the plan ("add a token-based focus-visible ring if trivial"), so it is not logged as a Rule 2 deviation.

## Known Stubs

None. Both components are fully functional primitives with real rendering logic — no placeholder/mock data paths exist in either file.

## Threat Flags

None. Both files match the plan's own threat model exactly: `Button`'s `href` prop remains developer-controlled (T-01-04, `accept`, unchanged), and both components render only static JSX/inline SVG with no `dangerouslySetInnerHTML` (T-01-05, `mitigate`, satisfied — React auto-escapes all text content).

## Self-Check: PASSED

- FOUND: src/components/ui/Logo.tsx
- FOUND: src/components/ui/Button.tsx
- FOUND: public/images/qiera/.gitkeep
- FOUND: `npx tsc --noEmit` exit 0
- FOUND: `npm run lint` exit 0
