---
phase: 4
slug: solutions-leverages
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-07-11
---

# Phase 4 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution. Companion to `04-RESEARCH.md`.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Vitest ^4.1.10 + @testing-library/react ^16.3.2 + user-event |
| **Config file** | `vitest.config.mts` |
| **Quick run command** | `npm test -- SolutionsSection LeveragesSection` |
| **Full suite command** | `npm test` |
| **Estimated runtime** | ~15 seconds |

---

## Sampling Rate

- **After every task:** Run the relevant section test file (`SolutionsSection` or `LeveragesSection`)
- **After every plan wave:** Run `npm test`
- **Before `/gsd-verify-work`:** Full suite green + screenshot gates below
- **Max feedback latency:** ~20 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 04-04-T2 | 04-04 | 2 | HOME-06 | T-04-05 | 10 tabs / default / panel swap / arrows | unit | `npx vitest run src/components/sections/SolutionsSection.test.tsx` | ❌ W0 | ⬜ pending |
| 04-06-T2 | 04-06 | 3 | HOME-07 | T-04-10 | 11 cards / modal open / no Share·Download | unit | `npx vitest run src/components/sections/LeveragesSection.test.tsx` | ❌ W0 | ⬜ pending |
| 04-06-T2 | 04-06 | 3 | HOME-09 | T-04-11 | Escape + focus restore on leverage modal | unit | `npx vitest run src/components/sections/LeveragesSection.test.tsx` | ❌ W0 | ⬜ pending |

*Planner fills Task/Plan/Wave IDs when PLAN.md exists. Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `src/components/sections/SolutionsSection.test.tsx`
  - Renders 10 tabs (`role="tab"`)
  - Default `aria-selected` on Revenue-Leaks
  - Click Conversion-Problems updates visible panel content (heading/text)
  - ArrowRight from first tab selects second (`aria-selected`)
  - Section has `id="solutions"`
- [ ] `src/components/sections/LeveragesSection.test.tsx`
  - Renders 11 “Learn more about …” buttons
  - Opens Revenue Leverage `role="dialog"`
  - `queryByText(/Share|Download/i)` absent inside dialog
  - Escape closes dialog; focus returns to trigger
  - Section has `id="leverages"`
- Existing Vitest / Testing Library — no install gap
- `DetailModal.test.tsx` remains the HOME-09 shell suite; Leverages tests cover integration only

---

## Screenshot Gates (mandatory)

| Capture | Width | Compare to | Pass criteria |
|---------|-------|------------|---------------|
| `solutions-1440.png` | 1440 | `Solutions cards/revenue-leaks - 4th section.png` | Header, 10 tabs, active chrome, 4-card dashboard, impact + outcomes |
| `solutions-tab-conversion-1440.png` | 1440 | `conversion problems - solutions.png` | Funnel art present; green uplift metric; bars |
| `solutions-1024.png` | 1024 | same family (responsive) | Tab scroll-snap; panel stacks without page overflow |
| `solutions-390.png` | 390 | same family | Single-column panel; tabs usable |
| `leverages-1440.png` | 1440 | `Leverages menu.png` | 6+5 cards; `1 / 11`; dots |
| `leverages-1024.png` | 1024 | menu (responsive) | ~3-col; controls |
| `leverages-390.png` | 390 | menu (responsive) | 1-col / carousel; no overflow |
| `modal-revenue-leverage-1440.png` | 1440 | `revenue leverages.png` | Structure match **minus** Share/Download; CTA present |
| `modal-leverage-390.png` | 390 | revenue/trust leverage | Full-viewport modal; scrollable; close works |

Compare order (visual fidelity rule): width → height → grid → alignment → type → spacing → color → details.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Active tab border/underline/tint vs ref | HOME-06 | Visual | Toggle tabs at 1440; compare Revenue vs Conversion |
| Positive/warning/danger token hex | HOME-07 | Visual sample | Eyedropper Trust leverage tags vs `--color-*` |
| CSS/SVG charts look non-broken | HOME-06/07 | Visual | Gauge needle/arc, bar lengths, sparkline trend |
| 3D illustration fidelity | HOME-06 | Visual | Funnel/shield/target vs extracted assets |
| prefers-reduced-motion | HOME-09 | Media query | Disable motion; no mandatory enter animations |
| Page overflow | HOME-06/07 | Layout | Resize 1440→390; no document `overflow-x` |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING test files above
- [ ] No watch-mode flags in CI commands
- [ ] Feedback latency < 20s
- [ ] Screenshot gates captured and compared
- [ ] `nyquist_compliant: true` set in frontmatter when Wave 0 + gates pass

**Approval:** pending
