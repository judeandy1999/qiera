# Plan 04-03 Summary — Solutions typed data

**Phase:** 04-solutions-leverages  
**Plan:** 03  
**Status:** Complete  
**Date:** 2026-07-11

## What shipped

- `src/types/solutions.ts` — already present (`SolutionChallenge`, `SolutionBarRow`, `SolutionImpactStep`)
- `src/data/solutions.ts` — exports `solutions: SolutionChallenge[]` with **exactly 10** challenges

### Order / ids / tabLabels

1. `revenue-leaks` / Revenue-Leaks  
2. `growth-constraints` / Growth-Constraints  
3. `conversion-problems` / Conversion-Problems  
4. `ai-visibility` / AI-Visibility  
5. `seo-authority` / SEO-Authority  
6. `trust-issues` / Trust-Issues  
7. `retention-problems` / Retention-Problems  
8. `positioning-problems` / Positioning-Problems  
9. `competitive-pressure` / Competitive-Pressure  
10. `operational-bottlenecks` / Operational-Bottlenecks  

### Illustrations (paths stubbed; assets Plan 07)

- `conversion-problems` → `/images/qiera/solutions/conversion-funnel.png`
- `trust-issues` → `/images/qiera/solutions/trust-shield.png`
- Shared outcomes → `/images/qiera/solutions/outcomes-target.png`

## TODO: unreadable / transcription notes

1. **revenue-leaks / opportunityCard.sparkline** — No clear sparkline on the revenue-leaks reference; used shared uplift series as placeholder (`// TODO: unreadable`).
2. **competitive-pressure / category row** — Sixth threat label may read “Chum” in the PNG; transcribed as **Customer Churn to Competitors**.
3. **competitive-pressure / impactSteps** — Reference appears to show Monitor + Optimize as separate steps; collapsed into **Measure & Optimize** to keep length 5.
4. **operational-bottlenecks / impactSteps** — Reference may show Prioritize / Monitor / Optimize as extra steps; Design step absorbs prioritize; Measure & Optimize covers monitor/refine (length 5).
5. **conversion-problems / metricCard.gaugeValue** — Exact gauge fill % not labeled as a number; `gaugeValue: 40` is approximate from needle position vs industry band.
6. **Per-row category icons** — Icons mapped to nearest `IntelligenceIcon` keys; some reference glyphs (megaphone, cart, price tag) have no exact key.

## Verification

- `solutions.length === 10`; first id `revenue-leaks`
- No 11th tab
- `npx tsc --noEmit` clean
- No git commits

## Self-Check: PASSED
