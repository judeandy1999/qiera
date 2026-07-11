# Plan 05-02 Summary — Hash / scroll-mt polish

**Phase:** 05-cta-homepage-polish  
**Plan:** 02  
**Status:** Complete  
**Date:** 2026-07-11

## Header measurements (estimated from layout; confirm in 05-03 screenshots)

| Width | Header anatomy | Measured / chosen |
|-------|----------------|-------------------|
| 1440 | `py-6`×2 (48px) + logo 32px + tagline ~18px + gaps ≈ 98–108px | **104px** |
| 768 | Same sticky header (CTA/nav still present at md+) | **104px** |
| 390 | Logo+tagline + hamburger only (`py-6`) | **104px** (safe clearance) |

Prior hard-coded `72px` was likely short for logo+tagline header.

## What shipped

- `:root { --header-scroll-offset: 104px; }` in `globals.css`
- All five sections use `scroll-mt-[length:var(--header-scroll-offset)]`
- `html { scroll-behavior: smooth }` only under `prefers-reduced-motion: no-preference`
- `homepage-anchors.test.tsx` + nav hash assertions
- No scroll-spy; nav hrefs unchanged

## Self-Check: PASSED
