---
phase: 01-foundation-shell
plan: 05
subsystem: ui
tags: [layout, header, footer, geist, screenshots]

requires:
  - phase: 01-foundation-shell
    provides: Header/Footer/MobileNav + tokens + nav data
provides:
  - Root layout with Header/Footer + QIERA metadata
  - Placeholder homepage
  - Screenshots at 1440/768/390
affects: [02-hero-intelligence]

tech-stack:
  added: []
  patterns:
    - Shared shell in root layout
    - Geist preserved via next/font
    - Screenshot gate before phase close

key-files:
  created:
    - .planning/phases/01-foundation-shell/screenshots/shell-1440.png
    - .planning/phases/01-foundation-shell/screenshots/shell-768.png
    - .planning/phases/01-foundation-shell/screenshots/shell-390.png
  modified:
    - src/app/layout.tsx
    - src/app/page.tsx
    - src/app/globals.css
    - src/components/layout/Header.tsx

key-decisions:
  - "Kept Geist and Geist_Mono next/font wiring unchanged (FOUND-04)"
  - "Header Logo uses showTagline to match header reference"
  - "Body default bg/color use shell tokens (not surface/ink) so dark shell is consistent"
  - "Desktop CTA wrapped in hidden md:block to avoid Tailwind display conflict with Button inline-flex"
  - "No git commit (commit_docs: false)"

patterns-established:
  - "Root layout owns Header + main + Footer"
  - "Visual fidelity requires screenshot comparison before phase sign-off"

requirements-completed: [FOUND-01, FOUND-04]

duration: 20min
completed: 2026-07-11
---

# Phase 1: Plan 05 — Layout Wire + Screenshot Gate Summary

**Shared Header/Footer wired into root layout with QIERA metadata; screenshots captured for human visual sign-off.**

## Accomplishments

- Replaced Create Next App metadata with QIERA title/description
- Mounted Header + Footer around `<main className="flex-1">`
- Placeholder homepage (no boilerplate / dark: / next.svg)
- Full suite green: 7 tests, lint, tsc
- Screenshots at 1440 / 768 / 390 under `screenshots/`

## Remaining visual differences (honest — pending human approve)

1. Logo Q-mark SVG geometry is approximate vs reference ring mark
2. CTA uses full pill (`999px`); reference may be slightly less rounded
3. Nav/CTA spacing and type weight may differ slightly from reference crop
4. Placeholder main is empty dark band (intentional — sections in Phases 2–5)
5. Pricing intentionally absent from nav (Decision #2)
6. At 768px Tailwind `md` kicks in (desktop nav) — expected

## Verification

- `npx vitest run` — 7/7 pass
- `npm run lint` — clean
- `npx tsc --noEmit` — clean
- Screenshots: `shell-1440.png`, `shell-768.png`, `shell-390.png`

## Commits

None — user commits manually.
