# Phase 9: Responsive Refinement - Context

**Gathered:** 2026-07-15  
**Status:** Ready for planning

<domain>
## Phase Boundary

Ship RESP-01: intentional layouts at 1440, 1280, 1024, 768, 390, 360 with no horizontal overflow, no clipped text/controls, and touch-usable carousels/tabs/modals. Fix Phase-1-deferred **768 header crowding**. Screenshot proof matrix per decisions below.

Out of scope: a11y/perf deep gate (Phase 10); redesign of approved section interiors; inventing new marketing pages; counsel legal copy.

</domain>

<decisions>
## Implementation Decisions

### 768 header crowding (user: you decide → 1A)
- **D-01:** Desktop primary nav + header Audit CTA visible from **`lg` (1024px)+** only.
- **D-02:** Below `lg`, **MobileNav** (hamburger) is the sole header nav/CTA chrome (ensure MobileNav also surfaces Start Intelligence Audit if not already).
- **D-03:** Re-measure `--header-scroll-offset` after the change; keep scroll targets clear of sticky header.

### Solutions tabs on small screens (user: you decide → 2A)
- **D-04:** Below desktop tab layout comfort (`md` or `lg` as code dictates today), use a **horizontal scroll-snap tab strip** (not `<select>`). Preserve keyboard operability and visible focus. No page overflow from the strip.

### Modal on ≤768 (user: you decide → 3A)
- **D-05:** DetailModal on small viewports: **near-full** — fills most of the viewport with a small outer margin (not edge-to-edge chrome-less unless already required). Keep dialog a11y (focus trap, Escape, restore focus). Full a11y polish can still refine in Phase 10.

### Screenshot / proof matrix (user: you decide → 4A)
- **D-06:** Homepage composed shots at **all six** widths: 1440, 1280, 1024, 768, 390, 360.
- **D-07:** Secondary pages (network, contact, audit, privacy) at **1440 / 768 / 390** unless a page-specific overflow needs more.
- **D-08:** Report overflow boolean per shot; fix any `overflow: true` before gate.

### Cross-cutting (Claude discretion within RESP-01)
- **D-09:** Audit / contact / legal / network — verify stack patterns already from Phases 6–8; fix residual clipping, 44px touch targets where missed, type scale only if clipping.
- **D-10:** Intelligence / Process / Leverages carousels — ensure peek/scroll usable at 360–768 without horizontal page overflow; adjust visible card counts / padding if needed without redesigning cards.
- **D-11:** Prefer Tailwind breakpoint alignment (`sm`/`md`/`lg`/`xl`) over one-off magic pixels unless matching measured header height.

### Claude's Discretion
Exact near-full modal margin (e.g. 12–16px); whether Solutions strip breakpoint is `md` vs `lg`; carousel peek padding; whether to add a tiny viewport overflow smoke test.

</decisions>

<canonical_refs>
## Canonical References

- `.planning/REQUIREMENTS.md` — RESP-01
- `.planning/ROADMAP.md` — Phase 9
- `.planning/DECISIONS.md` — #15 Phase 9 768 deferral
- `.planning/phases/05-cta-homepage-polish/05-CONTEXT.md` — D-18
- `.cursor/rules/qiera-visual-fidelity.mdc` — responsive checklist
- Prior phase screenshots / components under `src/components/`

</canonical_refs>

<code_context>
## Existing Code Insights

- `Header.tsx` shows nav+CTA at `md:flex` — crowding source at 768
- `MobileNav` exists; may need Audit CTA inside menu
- `SolutionsSection` tabs; `DetailModal` dialog; carousels in Intelligence/Process/Leverages
- `--header-scroll-offset` already bumps at 768–1023

</code_context>

<specifics>
## Specific Ideas

- After raising nav to `lg`, the 768 scroll-offset media query may need simplification (header shorter when hamburger-only).

</specifics>

<deferred>
## Deferred Ideas

- Phase 10 a11y/perf/test/visual gate
- Cookie consent CMP
- Active TOC scroll-spy polish

</deferred>
