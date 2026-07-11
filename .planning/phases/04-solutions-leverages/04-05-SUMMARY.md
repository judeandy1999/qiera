# Plan 04-05 Summary — Leverages typed data

**Phase:** 04-solutions-leverages  
**Plan:** 05  
**Status:** Complete  
**Date:** 2026-07-11

## What shipped

- `src/types/leverages.ts` — exports `Leverage` (+ `LeverageMetricTone`) matching RESEARCH: overview bullets, impact metrics, optional `valueDrivers` / `gapAnalysis` / `drivers`, required `cta`, no Share/Download fields
- `src/data/leverages.ts` — exports `leverages: Leverage[]` with **exactly 11** objects

### Order / ids / titles

1. `revenue` / Revenue Leverage — `valueDrivers` + callout  
2. `conversion` / Conversion Leverage — `drivers` (funnel chart not typed; omitted)  
3. `trust` / Trust Leverage — `gapAnalysis` + `drivers`  
4. `customer` / Customer Leverage — `drivers`  
5. `visibility` / Visibility Leverage — `gapAnalysis` + `drivers`  
6. `positioning` / Positioning Leverage — `gapAnalysis` + `drivers`  
7. `product-offer` / Product-Offer Leverage — `gapAnalysis` + `drivers`  
8. `retention` / Retention Leverage — `gapAnalysis` + `drivers`  
9. `operational` / Operational Leverage — `gapAnalysis` + `drivers`  
10. `decision` / Decision Leverage — `gapAnalysis` + `drivers`  
11. `governance` / Governance Leverage — `gapAnalysis` + `drivers`  

### Chrome / CTA

- Share / Download omitted (DECISIONS #5)
- `opportunitiesFooterLink` omitted (no destination)
- Expert CTA copy in `cta.title` / `cta.body` for DetailModal footer → `/contact` (UI plan)

## TODO: unreadable / transcription notes

1. **conversion / funnel analysis** — Reference shows Visit→Purchase funnel drop-offs; not in `Leverage` contract — omitted intentionally.
2. **customer / insights summary** — Extra score grid on reference not typed — omitted; mid-band mapped to `drivers`.
3. **retention / opportunity descriptions** — Body lines under titles were hard to resolve from the PNG description; short descriptions filled to match sibling leverage style (may need visual re-check at screenshot gate).
4. **retention / Potential LTV Increase** — Callout says 48%; metric transcribed as `+48%` (not `+0.48`).
5. **impactMetrics captions** — Industry-avg / “vs. baseline” captions have no type field; status chips live in `badge` only.
6. **Icon keys** — Mapped to nearest `IntelligenceIcon` names (`compass` for Decision, `lock` for Governance, etc.).

## Verification

- `leverages.length === 11`; first title `Revenue Leverage`
- `npx tsc --noEmit` clean
- No Share/Download chrome fields or labels in data
- No git commits

## Self-Check: PASSED
