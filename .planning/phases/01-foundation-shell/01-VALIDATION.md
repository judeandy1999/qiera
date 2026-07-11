---
phase: 1
slug: foundation-shell
status: planned
nyquist_compliant: true
wave_0_complete: false
created: 2026-07-10
---

# Phase 1 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.  
> Source: `01-RESEARCH.md` Validation Architecture.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Vitest + React Testing Library (Wave 0 install) |
| **Config file** | `vitest.config.mts` (Wave 0) |
| **Quick run command** | `npx vitest run src/data/navigation.test.ts` |
| **Full suite command** | `npx vitest run` |
| **Estimated runtime** | ~10–30 seconds |

---

## Sampling Rate

- **After every task commit:** Run targeted `npx vitest run <changed test file>`
- **After every plan wave:** Run `npx vitest run` + `npm run lint` + `npx tsc --noEmit`
- **Before `/gsd-verify-work`:** Full suite green + screenshots at 1440 / 768 / 390
- **Max feedback latency:** ~30 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 01-01-T2 | 01-01 | 0 | FOUND-01 | T-01-SC | Test toolchain installed dev-only after legitimacy gate | infra | `npx vitest run` (no config error) | ❌ W0 (creates) | ⬜ pending |
| 01-02-T2 | 01-02 | 1 | FOUND-03 | T-01-02 | Nav hrefs from typed static data only; locked v1 label set | unit | `npx vitest run src/data/navigation.test.ts` | ❌ W0 → created 01-02 | ⬜ pending |
| 01-04-T2 | 01-04 | 3 | FOUND-03 | T-01-06 | Footer uses same nav source as Header; © 2026; no Pricing/Resources/Security | unit | `npx vitest run src/components/layout/Footer.test.tsx` | ❌ → created 01-04 | ⬜ pending |
| 01-04-T3 | 01-04 | 3 | FOUND-03 | T-01-07 | Mobile `<dialog>` opens on toggle; Escape closes | unit/component | `npx vitest run src/components/layout/MobileNav.test.tsx` | ❌ → created 01-04 | ⬜ pending |
| 01-02-T1 | 01-02 | 1 | FOUND-01/02 | T-01-03 | Tokens in single @theme inline block; Geist chain intact; no OS dark-mode | manual+auto | `npx tsc --noEmit` + `npm run lint` + screenshot (Plan 05) | N/A | ⬜ pending |
| 01-03-T1/T2 | 01-03 | 2 | FOUND-02/05 | T-01-05 | Logo SVG (not raster crop) + token-driven Button variants; raster dir exists | manual+auto | `npx tsc --noEmit` + `npm run lint` + screenshot (Plan 05) | N/A | ⬜ pending |
| 01-05-T3 | 01-05 | 4 | FOUND-01/04 | T-01-08 | Structure/tokens/Geist/assets verified via screenshots at 1440/768/390 | manual | lint + tsc + full suite + screenshot comparison | N/A | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*  
*Task IDs assigned by planner (format `{plan}-T{n}`) on 2026-07-10.*

---

## Wave 0 Requirements

- [ ] Install Vitest + Testing Library stack (human-verify `vitest` [SUS] flag per RESEARCH before install)
- [ ] `vitest.config.mts` at project root
- [ ] `"test": "vitest run"` script in `package.json`
- [ ] Stub tests for navigation + MobileNav once components exist

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Header/Footer visual fidelity at 1440 | FOUND-03 | Pixel comparison vs refs | Compare screenshots to header/footer refs; Pricing/Resources/Security absent |
| Design tokens / Geist / assets | FOUND-02/04/05 | Visual + filesystem | Confirm tokens in CSS; Geist loaded; logo under `public/images/qiera` |
| Responsive shell at 768 / 390 | FOUND-03 | Layout judgment | No overflow; mobile menu usable |

---

## Validation Sign-Off

- [x] All tasks have `<automated>` verify or Wave 0 dependencies (manual-only tasks are the two legitimate exceptions: T-01-SC package-legitimacy gate and the Plan 05 visual-fidelity checkpoint)
- [x] Sampling continuity: no 3 consecutive tasks without automated verify (every implementation task runs tsc/lint/vitest)
- [x] Wave 0 covers all MISSING references (vitest install + config in Plan 01; test files created alongside their subjects in Plans 02/04)
- [x] No watch-mode flags (`vitest run` only)
- [x] Feedback latency < 30s
- [x] `nyquist_compliant: true` set in frontmatter after planner maps tasks

**Approval:** planned (task IDs mapped 2026-07-10)
