# Plan 05-02 Summary — Hash / scroll-mt polish

**Phase:** 05-cta-homepage-polish  
**Plan:** 02  
**Status:** Complete  
**Date:** 2026-07-11

## Header measurements (Playwright)

| Width | Header height | Chosen `--header-scroll-offset` |
|-------|---------------|----------------------------------|
| 1440 | 101px | 104px |
| 1280 | 101px | 104px |
| 768 | 144px | **152px** (md–lg media query) |
| 390 | 101px | 104px |

Nav click → `#intelligence`: sectionTop 104, gap ≈ 3px under sticky header (pass).

Prior hard-coded `72px` was insufficient for logo+tagline header.

## What shipped

- `--header-scroll-offset` in `globals.css` (+ 768 bump)
- Five sections use `scroll-mt-[length:var(--header-scroll-offset)]`
- Smooth scroll only when `prefers-reduced-motion: no-preference`
- `homepage-anchors.test.tsx` + nav hash assertions
- No scroll-spy

## Self-Check: PASSED
