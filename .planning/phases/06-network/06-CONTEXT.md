# Phase 6: Network Page - Context

**Gathered:** 2026-07-11  
**Status:** Ready for planning

<domain>
## Phase Boundary

Ship `/network` matching `docs/qiera-reference/Network page/Network.png` (NET-01, NET-02): dark hero + globe, seven partner rows with benefits, Become a Partner → `/contact?topic=partnership`, active Network nav state. Shared Header/Footer.

Out of scope: Contact form `topic` handling (Phase 7); homepage Final CTA on this page; Pricing/Resources/Security; inventing copy.

</domain>

<decisions>
## Implementation Decisions

### Visual fidelity (user lock)
- **D-01:** Match `Network.png` for layout, geometry, chrome, and **word-for-word** visible copy. Do not invent or paraphrase.
- **D-02:** Nav labels stay DECISIONS #13/#14 (**Leverages**, **Contact**) even if the PNG shows “Leverage” / “Contact Us”.
- **D-03:** Copyright stays **© 2026** (Decision #10) even if PNG shows 2025.
- **D-04:** Use shared Header/Footer — do not build a Network-only footer; match page body to PNG.

### Active nav
- **D-05:** On `/network`, Network link gets accent underline + `aria-current="page"` (as in PNG). No active state required for hash homepage links this phase.

### Artwork
- **D-06:** Extract globe/network sphere from `Network.png` into `public/images/qiera/network/` and serve via `next/image`.

### Partner rows & CTA
- **D-07:** Exactly seven partners in PNG order with three benefits each; typed data in `src/data/network.ts`.
- **D-08:** Desktop: icon | copy | BENEFITS column; mobile: stack intentionally without horizontal overflow.
- **D-09:** Become a Partner outline button → `/contact?topic=partnership` (Decision #6). No homepage Final CTA band on `/network`.
- **D-10:** Icons via `IntelligenceIcon` (extend keys as needed); no direct lucide imports in page components.

### Claude's Discretion
Spacing tokens, exact underline thickness, and card border radius — sample from PNG and existing shell tokens.

</decisions>

<canonical_refs>
## Canonical References

- `docs/qiera-reference/Network page/Network.png` — sole visual + copy SoT
- `.planning/DECISIONS.md` — #6, #10, #13, #14
- `.planning/REQUIREMENTS.md` — NET-01, NET-02
- `.planning/ROADMAP.md` — Phase 6
- `.planning/research/REFERENCE-INVENTORY.md` — Network
- `.cursor/rules/qiera-visual-fidelity.mdc`
- `.planning/phases/01-foundation-shell/01-UI-SPEC.md` — shell/button tokens

</canonical_refs>

<code_context>
## Existing Code Insights

- No `/network` route yet; nav already links there
- Header/MobileNav have no active-path styling yet
- Reuse `Button`, `Logo`, shell tokens, `IntelligenceIcon`

</code_context>

<specifics>
## Specific Ideas

User: “just match the images.”

</specifics>

<deferred>
## Deferred Ideas

- Contact `topic=partnership` form preselect (Phase 7)
- Active states for other routes beyond Network
- Matching PNG footer year 2025

</deferred>

<uncertainty>
## Unresolved Questions

None blocking — fidelity to Network.png + locked decisions.
</uncertainty>
