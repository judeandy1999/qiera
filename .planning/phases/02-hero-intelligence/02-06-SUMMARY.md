---
phase: 02-hero-intelligence
plan: 06
status: complete
completed: 2026-07-11
---

# 02-06 Summary — Intelligence Section Assembly

## What Was Built

Assembled the full, interactive Intelligence section (HOME-04) by composing all prior Wave 1–2 artifacts into three new files and one updated file:

| File | Role |
|------|------|
| `src/components/sections/IntelligenceCard.tsx` | Presentational overview card: icon, title, divider, 3 accent-bulleted items, Learn more `<button>` |
| `src/components/sections/IntelligenceSection.tsx` | Client section: header copy, carousel controls, 12 cards, pagination dots, modal orchestration |
| `src/components/sections/IntelligenceSection.test.tsx` | Vitest carousel tests (2 tests) |
| `src/app/page.tsx` | Added `<IntelligenceSection />` below `<Hero />` |

## Decisions Made

### `'use client'` on IntelligenceCard

Per the plan-checker warning (overriding the plan text which said Server Component): `IntelligenceCard` receives `onLearnMore` (function) and `learnMoreRef` (React ref) as props. Both are incompatible with Server Components, so `'use client'` is required. This is the correct disposition.

### Carousel Layout Strategy

| Viewport | Presentation | Behaviour |
|----------|-------------|-----------|
| Desktop (xl ≥1280px) | CSS Grid `grid-cols-6` × 2 rows — all 12 visible | Prev/Next + dots update the active highlight (left-border accent) |
| Tablet (sm 640–1279px) | Horizontal scroll-snap track, ~3 cards visible (each card `w-[calc(33.333%-1rem)]`) | Prev/Next scroll the active card into view via `scrollIntoView` |
| Mobile (<640px) | Horizontal scroll-snap track, 1 card visible (each card `w-[calc(100%-2rem)]`) | Same as tablet |

### Carousel State

- `activeIndex: number` (0–11) drives the counter (`{n} / 12`), active card highlight, dot selection, and scroll sync.
- Counter is always `n / 12` where `n = activeIndex + 1`.
- Prev disabled at index 0; Next disabled at index 11.
- Dots: 12 buttons (one per dimension), `role="tab"` inside `role="tablist"`.

### Pagination Dots

12 dots always shown (one per card/dimension). Active = `bg-[var(--color-accent)] opacity-100`; inactive = `bg-[var(--color-ink-secondary)] opacity-40`.

### scrollIntoView Guard

`scrollIntoView` is not defined in jsdom. The call is guarded with `typeof target.scrollIntoView === "function"` so tests run cleanly without errors.

### Test Cleanup

`@testing-library/react` auto-cleanup requires `afterEach` to be globally available. Since the vitest config does not set `globals: true`, `afterEach(cleanup)` is imported and registered explicitly in `IntelligenceSection.test.tsx`.

## [ASSUMED] Values for Screenshot Gate

| Value | Token/Property | Assumed | Notes |
|-------|---------------|---------|-------|
| Scroll-margin-top | `scroll-mt-[72px]` | 72px | Matches sticky header height from Phase 1 — verify at 1440px screenshot |
| Section vertical padding | `py-24` (96px) | 96px | Per UI-SPEC — verify at 1440px |
| Container horizontal padding | `px-6 md:px-8 lg:px-12` | 24/32/48px | Matches Phase 1 shell pattern |
| Active card bg | `--color-card-active-bg` | rgba(99,102,241,0.04) | Very subtle — adjust if reference differs |
| Card border radius | `--radius-card` | 16px | Inherited from Phase 1 |
| Icon container radius | `rounded-[12px]` | 12px | Per UI-SPEC assumption |
| Bullet glyph | `◎` | circle-ring | Check against reference — change to `•` or `○` if different |
| Mobile card width | `w-[calc(100%-2rem)]` | 1 card/view | Correct per spec |
| Tablet card width | `sm:w-[calc(33.333%-1rem)]` | ~3 cards/view | Verify at 768px |

## Verification Results

| Check | Result |
|-------|--------|
| `npx vitest run src/components/sections/IntelligenceSection.test.tsx` | ✅ 2/2 tests passed |
| `npx vitest run` (full suite) | ✅ 13/13 tests passed across 5 files |
| `npx tsc --noEmit` | ✅ Clean |
| `npm run lint` | ✅ Clean |
| `id="intelligence"` present | ✅ |
| Prev/Next aria-labels exact | ✅ |
| No `dangerouslySetInnerHTML` | ✅ |
| `'use client'` on section and card | ✅ |
| `IntelligenceSection` in `page.tsx` after `<Hero />` | ✅ |

## Remaining

- Screenshot gate (02-07): capture at 1440, 1024, 390px and compare against reference images; correct any visual deltas before sign-off.
- Verify bullet glyph (`◎`) matches reference — change to `•` or `○` if needed.
- Confirm scroll-margin-top (72px) aligns with actual sticky header height.
