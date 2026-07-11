# QIERA Marketing Website

## What This Is

A production-quality marketing website for QIERA — an e-commerce growth intelligence and business decision platform. The site recreates supplied Figma/export reference images with extremely high visual fidelity in Next.js App Router, presenting QIERA as one connected methodology (Intelligence → Process → Solutions → Leverages) rather than a collection of unrelated services.

## Core Value

Visitors must experience QIERA as a coherent operating model with pixel-faithful section layouts that match `docs/qiera-reference/` — especially the homepage methodology narrative and primary conversion paths (Start Intelligence Audit, Contact, Network).

## Requirements

### Validated

- ✓ Next.js App Router + TypeScript + Tailwind CSS scaffold exists — existing create-next-app baseline
- ✓ `src/` App Router layout with `@/*` path alias — existing
- ✓ Strict TypeScript + ESLint configured — existing

### Active

- [ ] Recreate homepage (Header, Hero, Intelligence, Process, Solutions, Leverages, Final CTA, Footer) from references
- [ ] Six process steps only; accessible modal detail views for Intelligence, Process, Solutions, Leverages
- [ ] Recreate Network page; Become a Partner → `/contact?topic=partnership`
- [ ] Contact and Start Intelligence Audit forms with client/server validation and typed route handlers (no fake external send)
- [ ] Privacy, Terms, Cookie pages with provisional transcribed copy only
- [ ] Responsive layouts at 1440 / 1280 / 1024 / 768 / 390 / 360
- [ ] Extract design tokens; keep Geist until visual comparison justifies a change; artwork in `public/images/qiera`
- [ ] not-found page in brand language
- [ ] Visual verification against references each phase

### Out of Scope

- Redesigning or modernizing reference layouts — fidelity is the product
- Pages Router or second UI/styling framework
- Authenticated product app / dashboard
- Pricing, Resources, or Security nav items or pages in v1 — no dead links or coming-soon
- Separate detail routes for Intelligence / Process / Solutions / Leverages
- Orchestrate Competency process step — pending approved material
- Leverage Share / Download controls
- Third-party email, CRM, or webhook form integration in v1
- Inventing legally binding copy for unreadable legal sections
- Replacing Geist without screenshot-backed comparison
- Mobile-specific artboards — none supplied; intentional responsive adaptation required
- Automatic git commits — user commits manually

## Context

- **Reference path:** `docs/qiera-reference/` (source of truth)
- **Decisions log:** `.planning/DECISIONS.md`
- **Repo state:** Fresh create-next-app (`next@16.2.10`, `react@19.2.4`, Tailwind v4). Boilerplate homepage only; no QIERA components yet.
- **Visual system:** Dark shell (header/hero/network/forms/legal) + light content sections (Intelligence, Process overview, Solutions, Leverages) with purple accent `#6366F1`–`#7C3AED` range.
- **Brand positioning:** “E-commerce Growth Intelligence”; six-step operating model from references.
- **Existing rule:** `.cursor/rules/qiera-visual-fidelity.mdc`

## Constraints

- **Tech:** Next.js App Router, TypeScript strict, Tailwind CSS only, RSC by default, Client Components only for interaction
- **Typography:** Geist until comparison proves a closer available font
- **Assets:** HTML/CSS for layout/text; reference screenshots are not page backgrounds; extract illustrations to `public/images/qiera`
- **Packages:** No unnecessary libraries; justify any install
- **Git:** Do not commit; user reviews and commits
- **Fidelity:** Desktop references define visual system; mobile must be intentional
- **Forms:** Typed route handlers; honest loading/success/failure; document pending production integration
- **Legal:** Transcribe readable text only; mark provisional pending legal review
- **Copyright:** 2026

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Preserve Next.js 16 / React 19 / Tailwind 4 scaffold | Working config; do not reinitialize | ✓ Locked |
| 10-phase horizontal build order | Section-by-section visual verification | ✓ Locked |
| Reference dir = `docs/qiera-reference/` | Actual filesystem path | ✓ Locked |
| Process = 6 steps; Orchestrate Competency pending | Match supplied references | ✓ Locked |
| Omit Pricing / Resources / Security from nav | No refs; no dead links | ✓ Locked |
| Homepage detail views = accessible modals | No separate detail routes in v1 | ✓ Locked |
| Final CTA derived, data-driven dark band | No dedicated CTA reference | ✓ Locked |
| Omit Share / Download on leverages | No functional workflow | ✓ Locked |
| Become a Partner → `/contact?topic=partnership` | Useful preselect | ✓ Locked |
| Forms: validate + typed handlers; no fake external send | Integration boundary for later | ✓ Locked |
| Audit options in typed data; flag uncertain | Replaceable without UI churn | ✓ Locked |
| Legal: readable transcription only; provisional | Avoid invented binding language | ✓ Locked |
| Copyright year 2026 | Align with legal refs | ✓ Locked |
| Keep Geist initially | No guess-based font swap | ✓ Locked |
| Nav label “Leverages” | Normalize header/footer | ✓ Locked |
| Nav label “Contact” | Normalize header/footer | ✓ Locked |
| `commit_docs: false` | User commits manually | ✓ Locked |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition:**
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone:**
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-07-10 after decision lock-in*
