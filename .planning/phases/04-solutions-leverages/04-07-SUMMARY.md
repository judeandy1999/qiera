# Plan 04-07 Summary — Assets + visual gate

**Phase:** 04-solutions-leverages  
**Plan:** 07  
**Status:** Awaiting human sign-off  
**Date:** 2026-07-11

## Assets

Under `public/images/qiera/solutions/`:

| File | Notes |
|------|-------|
| `conversion-funnel.png` | Placeholder stand-in (operating-model copy) — **needs proper crop** from conversion reference |
| `trust-shield.png` | Placeholder — **needs proper crop** from trust-issues reference |
| `outcomes-target.png` | Placeholder — **needs proper crop** from outcomes target art |

## Screenshots captured

`.planning/phases/04-solutions-leverages/screenshots/`:

- solutions-1440 / 1024 / 390
- solutions-tab-conversion-1440
- leverages-1440 / 1024 / 390
- modal-revenue-leverage-1440
- modal-leverage-390

No horizontal overflow at 1440/1024/390. Console errors during capture: none (aside from possible stale HMR noise).

## Remaining visual diffs (honest)

1. Solution 3D illustrations are **placeholders**, not cropped reference art
2. Tab/dashboard density vs reference (spacing, gauge geometry, sparkline shape) — ASSUMED
3. Leverages 6+5 row-2 centering ASSUMED
4. Positive/warning/danger hex not re-sampled from screenshots yet
5. Some solution impact-step / sparkline data marked TODO in 04-03-SUMMARY

## Automated

- Vitest 30/30; tsc clean
- No Share/Download in leverage modal (tested)
- No git commits

## Human gate

Resume: type **approved** or list diffs to fix.
