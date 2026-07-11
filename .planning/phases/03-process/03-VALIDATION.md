---
phase: 3
slug: process
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-07-11
---

# Phase 3 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Vitest ^4.1.10 + @testing-library/react ^16.3.2 |
| **Config file** | `vitest.config.mts` |
| **Quick run command** | `npm test -- ProcessSection` |
| **Full suite command** | `npm test` |
| **Estimated runtime** | ~10 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npm test -- ProcessSection`
- **After every plan wave:** Run `npm test`
- **Before `/gsd:verify-work`:** Full suite must be green
- **Max feedback latency:** ~15 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| TBD | TBD | TBD | HOME-05 | — | 6 cards / no 7th step / next-step | unit | `npm test -- ProcessSection` | ❌ W0 | ⬜ pending |
| TBD | TBD | TBD | HOME-09 | — | Escape + focus restore via DetailModal | unit | `npm test -- ProcessSection` | ❌ W0 | ⬜ pending |

*Filled completely by planner when PLAN.md files exist. Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `src/components/sections/ProcessSection.test.tsx` — HOME-05 (6 cards, open modal, next step, no 7th step) + HOME-09 integration (Escape, focus restore)
- Existing Vitest / Testing Library infrastructure covers framework needs — no install gap

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Process overview visual match @1440/768/390 | HOME-05 | Visual fidelity | Compare screenshots to `3rd Section - process.png` |
| Process modal content match per step | HOME-05 | Visual fidelity | Compare to `Process cards/*.png` |
| Reduced-motion / mobile full-screen modal | HOME-09 | Browser media query | Toggle prefers-reduced-motion; resize to 390 |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 15s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
