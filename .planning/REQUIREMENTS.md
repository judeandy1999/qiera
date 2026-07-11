# Requirements: QIERA Marketing Website

**Defined:** 2026-07-10  
**Updated:** 2026-07-10 (decision lock-in)  
**Core Value:** Pixel-faithful presentation of QIERA as one connected growth-intelligence methodology, matching `docs/qiera-reference/`.  
**Decisions:** See `.planning/DECISIONS.md`

## v1 Requirements

### Foundation

- [x] **FOUND-01**: Project uses existing Next.js App Router + TypeScript + Tailwind v4 scaffold without reinitialization
- [x] **FOUND-02**: Design tokens (colors, type, radii, spacing, widths, primary/secondary buttons) live in CSS custom properties / Tailwind theme
- [x] **FOUND-03**: Shared Header and Footer match dark-shell references; omit Pricing, Resources, and Security; copyright © 2026
- [x] **FOUND-04**: Fonts via `next/font` using **Geist** initially; change only after screenshot comparison proves a closer match
- [x] **FOUND-05**: Raster artwork for non-reconstructable illustrations under `public/images/qiera` via `next/image`

### Homepage

- [ ] **HOME-01**: Homepage includes Header, Hero, Intelligence, Process, Solutions, Leverages, Final CTA, Footer in that order
- [ ] **HOME-02**: Section IDs `intelligence`, `process`, `solutions`, `leverages` support hash navigation with sticky-header offset
- [ ] **HOME-03**: Hero matches `top section.png` (copy, CTA, operating-model graphic)
- [ ] **HOME-04**: Intelligence section shows 12 dimensions with carousel controls and **modal** detail views matching Intelligence cards
- [x] **HOME-05**: Process section shows **6-step** overview and **modal** detail views for each step (no Orchestrate Competency)
- [x] **HOME-06**: Solutions section provides tabbed selector for 10 challenges; deeper detail (if opened from UI) uses the shared **modal** pattern matching references
- [x] **HOME-07**: Leverages section shows 11 cards with responsive grid/carousel and **modal** details; **no** Share/Download controls
- [ ] **HOME-08**: Final CTA is a derived dark band using primary/secondary button styles; copy lives in typed data
- [x] **HOME-09**: Shared detail modal supports keyboard nav, Escape close, focus trap, focus restore, mobile full/near-full screen, and `prefers-reduced-motion`

### Network

- [ ] **NET-01**: `/network` recreates Network.png; Become a Partner links to `/contact?topic=partnership`
- [ ] **NET-02**: Network cards cover Experts, Resellers, Affiliates, White-label, Fractional Leadership, Delivery Partners, Strategic Alliances

### Forms

- [ ] **FORM-01**: `/contact` implements Contact fields, labels, validation, loading/success/failure; honors `topic` query (e.g. partnership)
- [ ] **FORM-02**: `/start-intelligence-audit` implements 5-step audit form; dropdown options from typed data files
- [ ] **FORM-03**: Typed Next.js route handlers with client + server validation; document pending production integration; do not fake external submission success
- [ ] **FORM-04**: Forms are keyboard accessible and responsive
- [ ] **FORM-05**: Uncertain audit/contact option lists flagged in the phase implementation report

### Legal & Utility

- [ ] **LEGAL-01**: Shared legal layout for Privacy, Terms, Cookies with “On This Page” nav
- [ ] **LEGAL-02**: Routes `/privacy`, `/terms`, `/cookies` with **provisional** copy transcribed only where clearly readable; no invented binding language; marked pending legal review
- [ ] **UTIL-01**: Custom `not-found` page uses QIERA brand language

### Quality

- [ ] **A11Y-01**: Landmarks, heading order, focus states, ARIA for tabs/carousel/dialog/menu, reduced-motion support
- [ ] **RESP-01**: Layouts validated at 1440, 1280, 1024, 768, 390, 360 without overflow/clipping
- [ ] **PERF-01**: Static sections remain Server Components; interactive islands isolated; images sized correctly
- [ ] **TEST-01**: Meaningful tests for nav, mobile menu, tabs, modal/carousel controls, form validation
- [ ] **VIS-01**: Each phase compared to listed reference files via screenshots before marked complete

## v2 Requirements

- **PAGE-01**: Pricing page (if designed)
- **PAGE-02**: Resources page (if designed)
- **PAGE-03**: Security page (if reference supplied)
- **PROC-01**: Seventh process step “Orchestrate Competency” if approved artwork/copy supplied
- **LEV-01**: Leverage Share / Download if real workflow defined
- **FORM-06**: Live email/CRM/webhook integration for form submissions
- **LEGAL-03**: Counsel-approved final legal copy
- **TYPE-01**: Font swap after visual comparison against references

## Out of Scope

| Feature | Reason |
|---------|--------|
| Redesign / modernization | Fidelity mandate |
| Pages Router / second CSS framework | Stack constraint |
| Authenticated product app | Marketing site only |
| Pricing / Resources / Security in v1 nav or routes | Decision #2 — no dead links |
| Separate detail routes | Decision #4 — modals only |
| Orchestrate Competency in v1 | Decision #1 — pending material |
| Share / Download on leverages | Decision #5 |
| Fake external form success / third-party send in v1 | Decision #7 |
| Invented legal binding language | Decision #9 |
| Guess-based font replacement | Decision #11 |
| Full-page screenshots as backgrounds | Asset rules |
| Automatic git commits | User commits manually |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| FOUND-01 | 1 | Complete |
| FOUND-02 | 1 | Complete |
| FOUND-03 | 1 | Complete |
| FOUND-04 | 1 | Complete |
| FOUND-05 | 1 | Complete |
| HOME-03 | 2 | Complete |
| HOME-04 | 2 | Complete |
| HOME-09 | 2–4 | Complete |
| HOME-05 | 3 | Complete |
| HOME-06 | 4 | Complete |
| HOME-07 | 4 | Complete |
| HOME-01 | 5 | Pending |
| HOME-02 | 5 | Pending |
| HOME-08 | 5 | Pending |
| NET-01 | 6 | Pending |
| NET-02 | 6 | Pending |
| FORM-01 | 7 | Pending |
| FORM-02 | 7 | Pending |
| FORM-03 | 7 | Pending |
| FORM-04 | 7 | Pending |
| FORM-05 | 7 | Pending |
| LEGAL-01 | 8 | Pending |
| LEGAL-02 | 8 | Pending |
| UTIL-01 | 8 | Pending |
| RESP-01 | 9 | Pending |
| A11Y-01 | 10 | Pending |
| PERF-01 | 10 | Pending |
| TEST-01 | 10 | Pending |
| VIS-01 | 10 | Pending |

**Coverage:**
- v1 requirements: 29 total
- Mapped to phases: 29
- Unmapped: 0 ✓

---
*Requirements defined: 2026-07-10*  
*Last updated: 2026-07-10 after decision lock-in*
