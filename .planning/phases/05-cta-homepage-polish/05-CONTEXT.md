# Phase 5: CTA, Nav Wiring & Homepage Refinement - Context

**Gathered:** 2026-07-11  
**Status:** Ready for planning

<domain>
## Phase Boundary

Deliver HOME-01 / HOME-02 / HOME-08: insert a **derived Final CTA dark band** between Leverages and Footer, confirm homepage section order, polish hash navigation with sticky-header offset, and run a composed homepage visual pass — **without inventing marketing copy** and **without changing already-transcribed section text**.

Out of scope: Network page, forms implementation, legal pages, dense 768px header crowding (Phase 9), full a11y/perf gate (Phase 10).

</domain>

<decisions>
## Implementation Decisions

### Copy fidelity (user lock)
- **D-01:** All new visible Final CTA strings must be **word-for-word from `docs/qiera-reference/` images**. Do not invent, paraphrase, or “improve” copy.
- **D-02:** Homepage polish must **keep existing transcribed texts unchanged** (Hero, Intelligence, Process, Solutions, Leverages, Header/Footer labels already locked). Polish geometry/spacing/wiring only unless a string is proven wrong vs its source PNG.
- **D-03:** Unreadable strings → `// TODO: unreadable` + question — never guess.

### Final CTA copy sources (no dedicated Final CTA PNG)
Inventory confirms **no standalone Final CTA band** in `docs/qiera-reference/`. Claude decision: assemble the band **only** from strings that already appear in supplied refs:

| Slot | Exact string | Source image |
|------|--------------|--------------|
| Eyebrow (optional) | `START AN INTELLIGENCE AUDIT` | `Utility pages/Start Intelligence Audit.png` |
| Headline | `Begin with clarity. Grow with intelligence.` | same |
| Body | `Our Intelligence Audit identifies what's holding your eCommerce growth back, uncovers your highest-impact opportunities, and gives you a clear roadmap for what to do next.` | same |
| Primary button | `Start Intelligence Audit` | `Homepage/top section.png`, header crop `75976647-…png` (Button component appends `→`) |
| Secondary button | `Contact` | Header/nav labels in homepage header refs; spelling locked DECISIONS #14 (not “Contact Us”) |
| Optional caption under primary | `Takes less than 2 minutes` | `Utility pages/Start Intelligence Audit.png` (form footer microcopy) |

- **D-04:** Primary href → `/start-intelligence-audit`; secondary href → `/contact`.
- **D-05:** Do **not** use form-only button label `Start My Intelligence Audit` on the homepage band.
- **D-06:** If the user later supplies a dedicated Final CTA PNG, replace D-03 table strings with that transcription — layout tokens stay.

### Final CTA layout / visual (Claude discretion)
- **D-07:** Dark band using `--color-shell` (same family as Header/Footer/Hero), not a new purple-gradient system unless a dedicated ref appears.
- **D-08:** Reuse existing `Button` `primary` + `secondary` variants (HOME-08).
- **D-09:** Desktop: horizontal split — copy block left, CTA cluster right; mobile: stacked, centered or left-aligned consistently with Hero rhythm.
- **D-10:** Section `id="final-cta"` + `scroll-mt` matching other homepage sections; data in `src/data/final-cta.ts` (+ thin type in `src/types/` if needed).
- **D-11:** Decorative extras (waves, stripes) only if clearly present in a Final CTA ref — none today → **omit**.

### Hash / sticky nav (Claude discretion)
- **D-12:** Keep existing hash hrefs in `navigation.ts`: `/#intelligence`, `/#process`, `/#solutions`, `/#leverages`.
- **D-13:** Verify sticky header offset: measure real header height; keep or adjust `scroll-mt-[72px]` so targets aren’t hidden. Prefer one shared token/utility if drift appears.
- **D-14:** No scroll-spy / active-nav-on-scroll in this phase (defer).
- **D-15:** Smoke-test in-page hash clicks from Header + Footer + MobileNav; Logo may link `/` (existing pattern).

### Homepage polish scope (Claude discretion)
- **D-16:** Wire order: Header → Hero → Intelligence → Process → Solutions → Leverages → **Final CTA** → Footer.
- **D-17:** Visual pass = composed homepage at 1440 / 1280 / 768 / 390 — major width/height/grid/alignment issues between sections only; do not redesign approved section interiors.
- **D-18:** 768px header CTA crowding remains Phase 9 (DECISIONS #15).

### Claude's Discretion
Layout density, exact padding scale, whether to show eyebrow and/or “Takes less than 2 minutes” caption, and shared `scroll-mt` token naming — choose for visual fidelity to shell + Audit/Hero CTA treatments without inventing copy.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Decisions & requirements
- `.planning/DECISIONS.md` — #3 Final CTA derived dark band + primary/secondary; #13/#14 nav labels; #15 Phase 9 768 deferral
- `.planning/REQUIREMENTS.md` — HOME-01, HOME-02, HOME-08
- `.planning/ROADMAP.md` — Phase 5 goal, acceptance, screenshot widths
- `.planning/PROJECT.md` — Final CTA locked as derived (no dedicated ref)
- `.planning/research/REFERENCE-INVENTORY.md` — missing Final CTA note; homepage/shell inventory
- `.cursor/rules/qiera-visual-fidelity.mdc` — transcription + verification order

### Copy / visual sources for this phase
- `docs/qiera-reference/Homepage/top section.png` — Hero CTA + primary button label
- `docs/qiera-reference/Homepage/75976647-1ef2-4aac-8fab-fcbd143601f5.png` — Header CTA
- `docs/qiera-reference/Homepage/Footer.png` — Footer adjacency (not Final CTA copy source for “Contact Us”; nav lock #14 wins)
- `docs/qiera-reference/Utility pages/Start Intelligence Audit.png` — Final CTA headline/body/eyebrow/caption source strings
- `docs/qiera-reference/Homepage/Leverages menu.png` — preceding section; do not alter card copy

### Prior phase contracts (inherit tokens / patterns)
- `.planning/phases/01-foundation-shell/01-UI-SPEC.md` — Button primary/secondary, shell colors
- `.planning/phases/02-hero-intelligence/02-UI-SPEC.md` — Hero CTA, `scroll-mt` pattern
- `.planning/phases/04-solutions-leverages/04-UI-SPEC.md` — homepage order note (Final CTA later)

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/components/ui/Button.tsx` — primary (accent + →) and secondary (outline) ready for Final CTA
- `src/data/navigation.ts` — hash hrefs already point at section IDs
- Section IDs + `scroll-mt-[72px]` on Intelligence / Process / Solutions / Leverages

### Established Patterns
- Homepage sections as Server/Client islands under `src/components/sections/`
- Typed content under `src/data/` + `src/types/`
- Dark shell via `--color-shell`; sticky Header `top-0 z-40`

### Integration Points
- `src/app/page.tsx` — insert Final CTA after Leverages
- `src/app/layout.tsx` — Header/Footer unchanged except hash smoke via existing nav
- Measure Header height vs `scroll-mt` during polish

</code_context>

<specifics>
## Specific Ideas

- User: “you decide” on gray areas (layout, hash behavior, polish scope).
- User: copy must be **word by word from images**; **texts remain the same** (no rewrite of approved section copy).
- No dedicated Final CTA reference file — strings borrowed from Audit + Hero/Header refs as listed in D-03.

</specifics>

<deferred>
## Deferred Ideas

- Dedicated Final CTA PNG transcription (swap strings if supplied later)
- Scroll-spy active nav state
- Purple-gradient / wavy Final CTA chrome from other QIERA repos (not in this SoT)
- 768px header crowding (Phase 9)
- Form page `/start-intelligence-audit` implementation (Phase 7) — band only links there

</deferred>

<uncertainty>
## Unresolved Questions

1. Prefer confirm: Is borrowing Audit-page headline/body onto the homepage Final CTA acceptable given no Final CTA PNG? (Locked for now per Claude decision D-03; user can override by dropping a Final CTA image.)
2. Optional eyebrow + “Takes less than 2 minutes” caption — include both unless UI-SPEC drops for density.

</uncertainty>
