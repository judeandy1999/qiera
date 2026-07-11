# 02-02 SUMMARY — Intelligence Data File

## Status: Complete

## What was built

`src/data/intelligence.ts` — exports `intelligenceDimensions: IntelligenceDimension[]` with all 12 objects in canonical order:

| # | id | slug |
|---|-----|------|
| 1 | market | market-intelligence |
| 2 | competitor | competitor-intelligence |
| 3 | customer | customer-intelligence |
| 4 | brand | brand-intelligence |
| 5 | product | product-intelligence |
| 6 | experience | experience-intelligence |
| 7 | conversion | conversion-intelligence |
| 8 | commercial | commercial-intelligence |
| 9 | visibility | visibility-intelligence |
| 10 | lifecycle | lifecycle-intelligence |
| 11 | operational | operational-intelligence |
| 12 | executive | executive-intelligence |

Array length: **12**

## TypeScript check

`npx tsc --noEmit` → **exit 0, no errors**.

## Sources used

- `src/types/intelligence.ts` — type contract (followed exactly)
- `.planning/phases/02-hero-intelligence/_transcription-draft.json` — brand → executive data
- `docs/qiera-reference/Homepage/Intelligence cards/market intelligence card.png` — full market card transcription
- `docs/qiera-reference/Homepage/Intelligence cards/competitor intelligence card.png` — full competitor card transcription
- `docs/qiera-reference/Homepage/Intelligence cards/customer intelligence card.png` — full customer card transcription
- User-supplied `overviewBullets` (Section 2 canonical list) — used verbatim for all 12 dimensions

## Key structural decisions

### market
- Has `evidenceSectionLabel: "OUR EVIDENCE & QUALITY STANDARDS"` and 6 `evidenceItems` (objects with icon/title/description), sourced from the "OUR EVIDENCE & QUALITY STANDARDS" grid visible in the reference image.
- `analysisSections` has 1 section ("WHAT WE ANALYZE") — the evidence grid is in `evidenceItems`, not a second section.

### competitor
- Has 2 `analysisSections`: "WHAT WE ANALYZE" (6 items) + "OUR RESEARCH APPROACH" (6 steps), sourced from image.
- No `evidenceSectionLabel`/`evidenceItems` (card shows only the "Evidence-Aware Intelligence" footer note, which is a fixed UI element rendered by the component).

### customer
- Has 2 `analysisSections`: "WHAT WE ANALYZE" (6 items) + "OUR APPROACH" (6 steps), sourced from image.
- No `evidenceSectionLabel`/`evidenceItems` (same reason as competitor).

### brand → executive (from draft JSON)
- Draft `evidenceSectionLabel` was `"Evidence-Aware Intelligence"` and `evidenceItems` was `string[]` — both removed. The "Evidence-Aware Intelligence" UI note is a fixed component footer, not data.
- `executiveFooterBadges` (executive only) is not in the `IntelligenceDimension` type and has been omitted entirely (no equivalent field available).
- `overviewBullets` updated to match the canonical Section 2 list from the task specification.

## TODO: Unreadable strings

**None.** All text in the three reference card images was clearly legible. All strings have been transcribed verbatim.
