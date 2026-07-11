# Plan 02-01 Summary — Phase 2 tokens, asset, icons

**Phase:** 02-hero-intelligence  
**Plan:** 01  
**Status:** Complete  
**Date:** 2026-07-11

## What shipped

1. **Phase 2 color tokens** appended to the single `@theme inline` block in `src/app/globals.css`:
   - `--color-card-border`, `--color-card-active-border`, `--color-card-active-bg`
   - `--color-accent-tint`, `--color-ink-secondary`
   - `--color-modal-backdrop`, `--color-modal-left-bg`
2. **Operating-model raster** copied to `public/images/qiera/operating-model.png`
3. **`IntelligenceIcon`** Server Component with 12 dimension glyphs + reusable mini-card set

## Operating-model dimensions

- Source file: `docs/qiera-reference/Homepage/1ef8838f-af5b-4a7e-a227-894452882e37.png`
- Measured size: **1254×1254** px (UI-SPEC assumed 834×834 — use measured for `next/image` width/height planning; desktop display still `width={600}` `height={600}` per UI-SPEC)
- File size: ~1.5 MB

## Icon `name`s implemented

**Dimension ids:** `market`, `competitor`, `customer`, `brand`, `product`, `experience`, `conversion`, `commercial`, `visibility`, `lifecycle`, `operational`, `executive`

**Mini-card / utility:** `globe`, `pie`, `trend`, `compass`, `bank`, `bars`, `shield`, `check`, `rocket`, `users`, `target`, `scale`, `warning`, `chart`

Unknown names render a neutral circle fallback (no throw).

## Verification

- `@theme inline` count: 1
- Asset exists and non-empty: yes
- `npx tsc --noEmit`: pass
- ESLint on `IntelligenceIcon.tsx`: pass
- No new `package.json` dependencies

## Task Commits

No commits — `commit_docs: false`; user commits manually.

## Self-Check: PASSED
