# ROADMAP: QIERA Marketing Website

**Created:** 2026-07-10  
**Updated:** 2026-07-10 (decision lock-in)  
**Granularity:** Fine (10 phases)  
**Mode:** Horizontal layers (visual-fidelity section build)  
**Decisions:** `.planning/DECISIONS.md`  
**References:** `docs/qiera-reference/`

## Overview

Build the QIERA marketing site by establishing shell/tokens first, then homepage sections in scroll order, then secondary pages, then responsive/a11y/perf polish — verifying each phase against `docs/qiera-reference/`.

| # | Phase | Goal | Requirements | Success Criteria |
|---|-------|------|--------------|------------------|
| 1 | Foundation & Shell | Tokens, Geist, header, footer, architecture | FOUND-01–05 | 6 |
| 2 | Hero & Intelligence | 7/7 | Complete   | 2026-07-11 |
| 3 | Process | 5/5 | Complete   | 2026-07-11 |
| 4 | Solutions & Leverages | 7/7 | Complete   | 2026-07-11 |
| 5 | CTA & Homepage Polish | 3/3 | Complete   | 2026-07-11 |
| 6 | Network | In progress | NET-01, NET-02 | 4 |
| 7 | Forms | Contact + Audit + typed handlers (no fake send) | FORM-01–05 | 5 |
| 8 | Legal & Utility | Provisional legal pages + 404 | LEGAL-01–02, UTIL-01 | 4 |
| 9 | Responsive | Breakpoint refinement | RESP-01 | 3 |
| 10 | A11y, Perf, Tests, Visual QA | Final quality gate | A11Y-01, PERF-01, TEST-01, VIS-01 | 4 |

---

### Phase 1: Foundation & Shell

**Goal:** Architecture, design tokens, Geist fonts, shared Header/Footer ready for all pages.  
**UI hint:** yes  
**Requirements:** FOUND-01, FOUND-02, FOUND-03, FOUND-04, FOUND-05  
**Plans:** 5 plans (5 waves)

Plans:

- [x] 01-01-PLAN.md — Wave 0: Test infrastructure (Vitest + Testing Library) behind vitest legitimacy gate [FOUND-01]
- [x] 01-02-PLAN.md — Wave 1: Design tokens + navigation data + cn() [FOUND-01, FOUND-02]
- [x] 01-03-PLAN.md — Wave 2: Logo + Button + public/images/qiera [FOUND-02, FOUND-05]
- [x] 01-04-PLAN.md — Wave 3: Header + Footer + MobileNav + tests [FOUND-03]
- [x] 01-05-PLAN.md — Wave 4: Layout wire + metadata + screenshot sign-off [FOUND-01, FOUND-04]

**Status:** Complete (human visual approve 2026-07-11). 768px CTA/nav crowding deferred to Phase 9.

**Reference files:**

- `docs/qiera-reference/Homepage/75976647-1ef2-4aac-8fab-fcbd143601f5.png`
- `docs/qiera-reference/Homepage/Footer.png`
- `docs/qiera-reference/Homepage/top section.png` (token + button sampling)
- Network/legal headers for consistency (nav set filtered per decisions)

**Implementation scope:**

- Confirm scaffold; add `src/components`, `src/data`, `src/lib`, `src/types`
- Extract CSS variables into `globals.css` / `@theme` (including primary + secondary button styles)
- Implement Header and Footer with v1 nav only:
  - Intelligence, Process, Solutions, Leverages, Network, Contact (+ Start Intelligence Audit CTA)
  - **Omit** Pricing, Resources, Security
- Copyright: `© 2026 QIERA. All rights reserved.`
- Keep Geist via `next/font`
- Place logo assets under `public/images/qiera`
- Wire root `layout.tsx` metadata for QIERA
- Typed `navigation.ts` as single source for header/footer links

**Files expected to change:**

- `src/app/layout.tsx`, `src/app/globals.css`, `src/app/page.tsx` (placeholder shell)
- `src/components/layout/*`, `src/data/navigation.ts`, `src/types/*`
- `public/images/qiera/*`
- Possibly `next.config.ts` if image config needed

**Dependencies:** None  

**Acceptance criteria:**

1. Project structure matches agreed layout (`components/`, `data/`, `lib/`, `types/`, `public/images/qiera/`) without reinitializing Next.js
2. Design tokens applied for primary/secondary backgrounds, text, accent, borders, radii, container width, page padding, and **primary + secondary button** styles sampled from references
3. Header matches dark-shell reference at 1440 **except** Pricing/Resources/Security are absent (intentional)
4. Footer matches dark-shell reference at 1440 with legal links (Privacy, Terms of Use, Cookie Policy), © **2026**, and the same v1 nav set (no Pricing/Resources/Security)
5. Geist remains the loaded font family; mobile nav opens/closes with keyboard support and visible focus
6. Lint and TypeScript checks pass

**Tests:** Navigation data renders expected v1 links only; mobile menu toggle + Escape  
**Screenshot widths:** 1440, 768, 390  
**Unresolved questions:** None — labels locked: Leverages, Contact (2026-07-10).

---

### Phase 2: Hero & Intelligence

**Goal:** Hero + Intelligence carousel with accessible modal details.  
**UI hint:** yes  
**Requirements:** HOME-03, HOME-04, HOME-09  
**Plans:** 7/7 plans complete

Plans:
**Wave 1**

- [x] 02-01-PLAN.md — Wave 1: Phase 2 tokens + operating-model asset + IntelligenceIcon SVG component [HOME-03, HOME-04]
 (completed 2026-07-11)
- [x] 02-02-PLAN.md — Wave 1: Intelligence type contract + 12 dimension data objects [HOME-04]

**Wave 2** *(blocked on Wave 1 completion)*

- [x] 02-03-PLAN.md — Wave 2: Hero split section + wire onto homepage [HOME-03]
- [x] 02-04-PLAN.md — Wave 2: Generic accessible DetailModal shell + a11y test [HOME-09]
- [x] 02-05-PLAN.md — Wave 2: IntelligenceDetail two-panel content renderer [HOME-04, HOME-09]

**Wave 3** *(blocked on Wave 2 completion)*

- [x] 02-06-PLAN.md — Wave 3: IntelligenceCard + carousel section + modal wiring + carousel test [HOME-04, HOME-09]

**Wave 4** *(blocked on Wave 3 completion)*

- [x] 02-07-PLAN.md — Wave 4: Screenshot verification gate (1440/1024/390) + human sign-off [HOME-03, HOME-04, HOME-09]

**Reference files:**

- `Homepage/top section.png`, `c3448e9e-….png`, `1ef8838f-….png`
- `Homepage/Section 2.png`
- `Homepage/Intelligence cards/*.png` (12)

**Implementation scope:**

- Hero split layout + operating model graphic
- Intelligence data + overview cards + carousel
- Shared accessible `DetailModal` (or equivalent) for intelligence details
- Modal: Escape, focus trap, restore focus, mobile full/near-full, reduced-motion

**Dependencies:** Phase 1  
**Acceptance criteria:**

1. Hero matches reference geometry/copy at 1440
2. All 12 intelligence cards present with correct bullets
3. Carousel operable via mouse, keyboard, and touch
4. Detail modal matches corresponding intelligence card references
5. Modal a11y behaviors from HOME-09 verified

**Tests:** Carousel next/prev; modal open/close/Escape/focus restore  
**Screenshot widths:** 1440, 1024, 390  
**Unresolved questions:** None blocking (no detail routes)

---

### Phase 3: Process

**Goal:** Six-step process overview + accessible modal details.  
**UI hint:** yes  
**Requirements:** HOME-05, HOME-09  
**Plans:** 5 plans (4 waves)

Plans:

- [x] 03-01-PLAN.md — Wave 1: Extend IntelligenceIcon with process lucide keys [HOME-05]
- [x] 03-02-PLAN.md — Wave 1: Process types + 6-step data (no Orchestrate) [HOME-05]
- [x] 03-03-PLAN.md — Wave 2: ProcessCard + ProcessDetail [HOME-05, HOME-09]
- [x] 03-04-PLAN.md — Wave 3: ProcessSection + tests + page wire [HOME-05, HOME-09]
- [x] 03-05-PLAN.md — Wave 4: Screenshots + human visual sign-off [HOME-05, HOME-09]

**Status:** Complete (human visual approve 2026-07-11).  

**Reference files:**

- `Homepage/3rd Section - process.png`
- `Homepage/Process cards/*.png` (exclude duplicate overview)

**Implementation scope:**

- Process overview strip with connectors
- Reuse shared detail modal pattern for step details
- Data for **6 steps only**

**Dependencies:** Phase 1–2  
**Acceptance criteria:**

1. Overview matches 6-card reference
2. Each step detail matches corresponding process card
3. Modal keyboard/focus/mobile/reduced-motion behaviors work
4. No seventh “Orchestrate Competency” step

**Tests:** Open step 1; next-step control; Escape closes; focus restore  
**Screenshot widths:** 1440, 768, 390  
**Unresolved questions:** None

---

### Phase 4: Solutions & Leverages

**Goal:** Solutions tabs (10) + Leverages (11) with modals; no Share/Download.  
**UI hint:** yes  
**Requirements:** HOME-06, HOME-07, HOME-09  
**Plans:** 7 plans (4 waves)

Plans:

**Wave 1**

- [x] 04-01-PLAN.md — Wave 1: Color tokens + IntelligenceIcon Phase 4 keys [HOME-06, HOME-07]
- [x] 04-02-PLAN.md — Wave 1: ProgressBar / GaugeChart / Sparkline CSS-SVG primitives [HOME-06, HOME-07]
- [x] 04-03-PLAN.md — Wave 1: Solutions types + 10 challenge data objects [HOME-06]

**Wave 2** *(blocked on Wave 1 for Solutions UI; leverages data only needs 04-01)*

- [x] 04-04-PLAN.md — Wave 2: SolutionsSection + SolutionPanel + tests + page wire [HOME-06]
- [x] 04-05-PLAN.md — Wave 2: Leverages types + 11 leverage data objects [HOME-07]

**Wave 3** *(blocked on Wave 2)*

- [x] 04-06-PLAN.md — Wave 3: LeverageCard + LeverageDetail + LeveragesSection + tests + page wire [HOME-07, HOME-09]

**Wave 4** *(blocked on Wave 3)*

- [x] 04-07-PLAN.md — Wave 4: Asset extracts + screenshots + human visual sign-off [HOME-06, HOME-07, HOME-09]

**Status:** Complete (human visual approve 2026-07-11).

**Reference files:**

- `Homepage/Solutions cards/*`
- `Homepage/Leverages menu.png`
- `Homepage/Leverage cards/*`

**Implementation scope:**

- Solutions tablist + panels
- Leverages overview + modal details **without** Share/Download chrome
- Extract illustration assets as needed

**Dependencies:** Phase 1  
**Acceptance criteria:**

1. All 10 solution tabs switch content correctly
2. Active tab styling matches reference
3. All 11 leverages present; modal details match structure minus Share/Download
4. Shared modal a11y behaviors hold
5. Prefer CSS/SVG charts over heavy chart libraries

**Tests:** Tab selection; leverage modal open/close  
**Screenshot widths:** 1440, 1024, 390  
**Unresolved questions:** None for Share/Download (omitted)

---

### Phase 5: CTA, Nav Wiring & Homepage Refinement

**Goal:** Derived Final CTA, hash nav, homepage visual pass.  
**UI hint:** yes  
**Requirements:** HOME-01, HOME-02, HOME-08  
**Plans:** 3 plans (3 waves)

Plans:

- [x] 05-01-PLAN.md — Wave 1: Types + final-cta data + FinalCtaSection RSC + page wire [HOME-01, HOME-08]
- [x] 05-02-PLAN.md — Wave 2: Hash/scroll-mt polish + anchors smoke [HOME-02]
- [x] 05-03-PLAN.md — Wave 3: Homepage screenshots + human visual sign-off [HOME-01, HOME-02, HOME-08]

**Status:** Complete (human visual approve 2026-07-11).

**Reference files:** Full homepage set; Header; Footer; CTA treatments from hero/header buttons; Audit utility page strings for derived Final CTA

**Implementation scope:**

- Data-driven Final CTA dark band (`src/data/final-cta.ts` or similar)
- Primary + secondary buttons from token system
- Hash links + scroll-margin; homepage visual regression pass

**Dependencies:** Phases 2–4  
**Acceptance criteria:**

1. Full homepage order correct
2. Section anchors work with sticky header
3. Final CTA is dark-band, data-driven, uses primary/secondary button styles
4. Major geometry differences vs refs resolved for composed homepage

**Tests:** Hash navigation smoke; CTA links resolve  
**Screenshot widths:** 1440, 1280, 768, 390  
**Unresolved questions:** None — Final CTA strings locked in 05-CONTEXT / 05-UI-SPEC (derived from Audit + Hero/Header refs; no dedicated Final CTA PNG)

---

### Phase 6: Network Page

**Goal:** Ship `/network` matching Network.png.  
**UI hint:** yes  
**Requirements:** NET-01, NET-02  
**Reference files:** `Network page/Network.png`

**Implementation scope:**

- Network hero + globe artwork
- Partner cards
- Become a Partner → `/contact?topic=partnership`

**Dependencies:** Phase 1  
**Acceptance criteria:**

1. All 7 partner types present with benefits
2. Dark theme matches reference
3. Active Network nav state
4. Become a Partner navigates to `/contact?topic=partnership`

**Tests:** Partner CTA href; cards render  
**Screenshot widths:** 1440, 768, 390  
**Unresolved questions:** None

---

### Phase 7: Contact & Start Intelligence Audit

**Goal:** Validated forms with typed route handlers; honest states; no fake external send.  
**UI hint:** yes  
**Requirements:** FORM-01, FORM-02, FORM-03, FORM-04, FORM-05  
**Reference files:**

- `Utility pages/contact form.png`
- `Utility pages/Start Intelligence Audit.png`

**Implementation scope:**

- Contact page + `topic` query handling (e.g. partnership)
- Audit page + typed option lists in `src/data/`
- Route handlers with client + server validation
- Loading / success / failure UI
- Document pending production integration in code comments + phase report
- Flag uncertain dropdown options in implementation report

**Dependencies:** Phase 1  
**Acceptance criteria:**

1. Fields match references (required markers included)
2. Client and server validation reject invalid payloads
3. UI shows loading, success, and failure without claiming external delivery
4. Pending integration documented
5. Uncertain options listed in phase report

**Tests:** Required field errors; invalid server payload; success path of typed handler  
**Screenshot widths:** 1440, 768, 390  
**Unresolved questions:** Production destination deferred to v2 (documented, not blocking)

---

### Phase 8: Legal & Utility Pages

**Goal:** Legal layout + provisional Privacy/Terms/Cookies + not-found.  
**UI hint:** yes  
**Requirements:** LEGAL-01, LEGAL-02, UTIL-01  
**Reference files:**

- `Utility pages/privacy policy.png`
- `Utility pages/terms of service.png`
- `Utility pages/cookies policy.png`

**Implementation scope:**

- Shared legal layout + TOC
- Transcribe only clearly readable text; mark provisional / pending legal review
- Do not invent binding language for unreadable gaps
- `not-found.tsx`; no Security route

**Dependencies:** Phase 1  
**Acceptance criteria:**

1. Legal pages match two-column dark layout
2. TOC links scroll to sections
3. Copy is provisional and gaps are explicit (not invented)
4. 404 is on-brand

**Tests:** TOC targets exist  
**Screenshot widths:** 1440, 768, 390  
**Unresolved questions:** Counsel review is post-v1 (not blocking implementation of provisional pages)

---

### Phase 9: Responsive Refinement

**Goal:** Intentional layouts at all target widths.  
**UI hint:** yes  
**Requirements:** RESP-01  
**Reference files:** All desktop refs as proportion guides  

**Implementation scope:**

- Stack heroes; scrollable/select tabs; carousel card counts
- Modal full/near-full on small screens
- Fix overflow, touch targets, type scaling

**Dependencies:** Phases 1–8  
**Acceptance criteria:**

1. No horizontal scroll at 360–1440
2. No clipped text/controls
3. Carousels/tabs/modals usable on touch
4. Screenshots at all six widths for key pages

**Tests:** Optional viewport smoke  
**Screenshot widths:** 1440, 1280, 1024, 768, 390, 360  
**Unresolved questions:** Solutions mobile control pattern chosen during phase (scroll vs select) — implementer decision with screenshot proof

---

### Phase 10: Accessibility, Performance, Testing, Visual Regression

**Goal:** Production-quality gate.  
**UI hint:** yes  
**Requirements:** A11Y-01, PERF-01, TEST-01, VIS-01  
**Reference files:** Full inventory under `docs/qiera-reference/`

**Implementation scope:**

- A11y audit fixes (especially modal/carousel/tabs/menu)
- Image sizing, lazy-load, RSC boundaries
- Tests for critical interactions
- Final visual comparison; honest remaining diffs
- Font remains Geist unless comparison proves a better match

**Dependencies:** Phases 1–9  
**Acceptance criteria:**

1. Critical a11y issues resolved
2. Perf sanity (no oversized unused JS)
3. Tests cover nav/menu/tabs/carousel/modal/forms
4. Remaining visual diffs listed; no pixel-perfect claim without screenshots

**Tests:** Full meaningful suite as scoped  
**Screenshot widths:** 1440, 390 (full site)  
**Unresolved questions:** Hosting/analytics out of site-build scope unless later specified

---

## Phase 1 blockers

None. Nav labels locked: **Leverages**, **Contact** (header and footer).

---

## Next Action

Phase 1 complete. Next: `/gsd-discuss-phase 2` or `/gsd-plan-phase 2`.

---
*Roadmap updated: 2026-07-10 after decision lock-in*
