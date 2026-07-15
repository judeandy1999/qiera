# Phase 8: Legal & Utility Pages - Context

**Gathered:** 2026-07-15  
**Status:** Ready for planning

<domain>
## Phase Boundary

Ship shared legal layout + `/privacy`, `/terms`, `/cookies` (LEGAL-01/02) matching Utility page references: LEGAL eyebrow, title, last-updated, intro, sticky “On This Page” TOC + numbered icon sections. Transcribe only clearly readable copy; mark gaps per decisions below. Ship branded `not-found` (UTIL-01). No Security route.

Out of scope: counsel-approved final legal language (LEGAL-03 / v2); cookie consent banner / CMP; inventing binding clauses for unreadable gaps; Pricing/Resources/Security nav.

</domain>

<decisions>
## Implementation Decisions

### Unreadable body gaps (user: 1A)
- **D-01:** Keep section heading (+ icon/number as in PNG). Where body text is truncated/unreadable, render a short non-binding note: **“Full text pending legal review.”** Do not invent replacement legal clauses.
- **D-02:** Transcribe word-for-word every clearly readable paragraph, list, table cell, email, and heading from the PNGs.

### Provisional banner (user: 2A)
- **D-03:** Under hero metadata (after “Last updated: …”), show one line: **“Provisional copy — pending legal review.”** Styled as secondary text (not a red error alert). Same on all three legal pages.
- **D-04:** Phase SUMMARY + code comments also note provisional / counsel pending.

### Mobile TOC (user: 3A)
- **D-05:** Desktop (`lg+`): sticky left “On This Page” sidebar card matching PNG.
- **D-06:** Below `lg`: stack TOC **above** main content (not sticky); preserve hash links to `#section-…` anchors. No horizontal overflow.

### 404 page (user: 4A)
- **D-07:** Custom `src/app/not-found.tsx` — QIERA brand language (shell bg, Logo optional via layout already wrapping? Note: root layout includes Header/Footer — 404 sits inside main). Eyebrow + “Page not found” + short supporting line. CTAs: **Home** (`/`) + **Start Intelligence Audit** (`/start-intelligence-audit`) using Button primary/secondary as appropriate.
- **D-08:** No Security page / route.

### Labels & structure (locked from prior decisions + refs)
- **D-09:** Footer / legalNav: Privacy Policy → `/privacy`, Terms of Use → `/terms`, Cookie Policy → `/cookies`. H1 on terms page = **Terms of Use** (footer label) even if file is named `terms of service.png` — unless PNG title clearly says otherwise; prefer visible H1 from PNG if it reads “Terms of Service”, but keep footer label “Terms of Use” unchanged (locked). *Executor: match PNG H1 exactly; if PNG says Terms of Service, use that as page title while footer stays Terms of Use.*
- **D-10:** Last updated: **May 28, 2026** if readable on PNGs.
- **D-11:** Contact emails from PNG (`privacy@qiera.com`, `legal@qiera.com`, etc.) as `mailto:` links when visible.
- **D-12:** Cookie details table from cookies PNG — transcribed categories/columns when readable.
- **D-13:** Section `id`s for TOC scroll; `scroll-margin-top` for sticky header (`--header-scroll-offset`).
- **D-14:** Active TOC item optional; if implemented, IntersectionObserver client island — otherwise simple hash links only is OK for v1.

### Claude's Discretion
Exact truncation points per section; icon mapping via IntelligenceIcon; 404 secondary sentence wording (brand-aligned, non-legal); whether terms H1 follows PNG “Terms of Service” vs footer “Terms of Use” — prefer PNG H1 fidelity with SUMMARY note if labels differ.

</decisions>

<canonical_refs>
## Canonical References

### Decisions & requirements
- `.planning/DECISIONS.md` — #9 legal transcription; #10 copyright 2026
- `.planning/REQUIREMENTS.md` — LEGAL-01, LEGAL-02, UTIL-01
- `.planning/ROADMAP.md` — Phase 8
- `.planning/research/REFERENCE-INVENTORY.md` — Utility legal pages

### Visual / copy sources
- `docs/qiera-reference/Utility pages/privacy policy.png`
- `docs/qiera-reference/Utility pages/terms of service.png`
- `docs/qiera-reference/Utility pages/cookies policy.png`

### Prior contracts / code
- `.planning/phases/01-foundation-shell/01-UI-SPEC.md` — shell tokens, Footer legal
- `src/data/navigation.ts` — `legalNav`
- `src/app/layout.tsx` — Header/Footer wrap
- `.cursor/rules/qiera-visual-fidelity.mdc`

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- Shell tokens, Header/Footer, Button, Logo, IntelligenceIcon
- `legalNav` already points at `/privacy`, `/terms`, `/cookies`
- `--header-scroll-offset` for hash anchors

### Integration Points
- New routes under `src/app/{privacy,terms,cookies}/page.tsx`
- Shared `LegalPageLayout` + typed legal document data in `src/data/`
- `src/app/not-found.tsx`

### Watch Outs
- Do not invent binding legal language
- Dense PNG body — prefer conservative “pending legal review” over guessing
- No cookie consent UI in this phase

</code_context>

<specifics>
## Specific Ideas

- Eyebrow **LEGAL** (purple) on all three legal pages
- TOC heading **ON THIS PAGE**
- Numbered purple TOC indices + section icons matching PNG themes where IntelligenceIcon allows

</specifics>

<deferred>
## Deferred Ideas

- LEGAL-03 counsel-approved final copy
- Cookie consent / CMP banner
- Security page

</deferred>
