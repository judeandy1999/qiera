---
phase: 5
slug: cta-homepage-polish
status: approved
shadcn_initialized: false
preset: none
created: 2026-07-11
---

# Phase 5 — UI Design Contract

> Visual and interaction contract for frontend phases. Generated for `/gsd-ui-phase 5` (inline). Verified against CONTEXT + prior shell contracts.

Sources consulted: `05-CONTEXT.md`, `.planning/DECISIONS.md` (#3, #13–15), `.planning/REQUIREMENTS.md` (HOME-01, HOME-02, HOME-08), `.planning/ROADMAP.md` Phase 5, `.planning/research/REFERENCE-INVENTORY.md`, `01-UI-SPEC.md` / `02-UI-SPEC.md`, `src/app/globals.css`, `src/components/ui/Button.tsx`, `docs/qiera-reference/Homepage/top section.png`, `Homepage/75976647-….png`, `Homepage/Footer.png`, `Utility pages/Start Intelligence Audit.png`.

No dedicated Final CTA PNG — band is **derived**; copy is **transcribed only** from the Audit + Hero/Header refs (CONTEXT D-01–D-06).

---

## Design System

| Property | Value |
|----------|-------|
| Tool | none |
| Preset | not applicable |
| Component library | none — native HTML + Tailwind v4 |
| Icon library | lucide via existing `IntelligenceIcon` only if caption needs lock icon; otherwise omit icons (arrow comes from `Button`) |
| Font | Geist (locked Decision #11) |

---

## Spacing Scale

Inherited Phase 1 multiples of 4:

| Token | Value | Usage this phase |
|-------|-------|------------------|
| xs | 4px | Button label → arrow gap (existing) |
| sm | 8px | Button group gap (mobile stack internal) |
| md | 16px | Copy stack gaps (eyebrow → title → body) |
| lg | 24px | Button cluster gap; section inner vertical rhythm |
| xl | 32px | Desktop copy ↔ CTA column gap |
| 2xl | 48px | Final CTA vertical padding (md+) **[ASSUMED]** |
| 3xl | 64px | Final CTA vertical padding (lg+) **[ASSUMED]** |

Exceptions: touch targets ≥44px on both Final CTA buttons; `scroll-mt` must clear sticky header (see Hash).

---

## Typography

Weights remain **400 / 600** only.

| Role | Size | Weight | Line Height | Final CTA mapping |
|------|------|--------|-------------|-------------------|
| Caption / eyebrow | 12px | 400 | 1.4 | `START AN INTELLIGENCE AUDIT` — uppercase, tracking `0.08em`, accent color (match Hero badge / Audit label treatment) |
| Body | 16px | 400 | 1.5–1.6 | Supporting paragraph; caption `Takes less than 2 minutes` at 12–14px / 400 **[ASSUMED 14px]** muted `--color-text-secondary` |
| Heading | 32px | 600 | 1.2 | H2 `Begin with clarity. Grow with intelligence.` — may scale `28px` md / `32px` lg **[ASSUMED]** |
| Button | 20px | 600 | 1.2 | Locked by `Button` component |

Do not introduce Display/60px hero type into Final CTA.

---

## Color

Reuse shell tokens — **no new gradient system** (CONTEXT D-07, D-11):

| Role | Token / value | Usage |
|------|---------------|-------|
| Dominant | `--color-shell` (`#000310`) | Final CTA section background |
| Text primary | `--color-text-primary` | H2 |
| Text secondary | `--color-text-secondary` | Body + micro caption |
| Accent | `--color-accent` | Eyebrow; primary button fill; secondary border/text |
| Focus | `--color-focus-ring` | Both buttons + any links |

Accent reserved for: eyebrow, primary CTA fill, secondary outline, focus rings — not body text.

Secondary button on dark shell: existing `border-[var(--color-accent)]/50` + accent text — verify contrast on shell in screenshots; if weak, bump border opacity only (no new hex).

---

## Copywriting Contract

**Rule:** Exact strings only (CONTEXT D-01). Sources in table.

| Element | Copy | Source |
|---------|------|--------|
| Eyebrow | START AN INTELLIGENCE AUDIT | Audit PNG |
| H2 | Begin with clarity. Grow with intelligence. | Audit PNG |
| Body | Our Intelligence Audit identifies what's holding your eCommerce growth back, uncovers your highest-impact opportunities, and gives you a clear roadmap for what to do next. | Audit PNG |
| Primary CTA | Start Intelligence Audit | Hero / header (`Button` appends →) |
| Secondary CTA | Contact | Nav label (DECISIONS #14) |
| Caption | Takes less than 2 minutes | Audit PNG form microcopy |
| Empty / error / destructive | N/A | No form states in this phase |

**Include both** eyebrow and caption (resolves CONTEXT uncertainty #2 toward fidelity).

**Forbidden:** `Start My Intelligence Audit`; invented headlines; changing Hero/Intelligence/Process/Solutions/Leverages copy.

---

## Layout Contract — Final CTA (`id="final-cta"`)

```
[shell bg]
  max-w container + horizontal padding matching Header (px-6 / md:px-8 / lg:px-12)
  py: 48px md / 64px lg  [ASSUMED]
  Desktop lg+: grid 2 cols — copy | CTA cluster (items-center)
  <lg: flex-col gap-8; copy first; buttons row or stack
```

- Primary + secondary in a horizontal `flex flex-wrap gap-3` (or `gap-4`); caption under the **primary** (or under the whole cluster, left-aligned with buttons).
- `aria-labelledby` pointing at H2 id `final-cta-heading`.
- Server Component by default; no client state required.

### Data shape (typed)

```ts
// conceptual — planner locks exact types
{
  eyebrow: string;
  title: string;
  body: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  caption: string;
}
```

Hrefs: `/start-intelligence-audit`, `/contact`.

---

## Hash / Sticky Nav Contract (HOME-02)

| Item | Contract |
|------|----------|
| Section IDs | `intelligence`, `process`, `solutions`, `leverages`, `final-cta` |
| Nav hash hrefs | Keep `/#intelligence` … `/#leverages` (no requirement to add Final CTA to primary nav) |
| `scroll-mt` | Shared value clearing sticky header — today `72px`; **measure** Header at 1440/768/390 and unify if wrong (prefer CSS variable e.g. `--header-scroll-offset: 72px` **[ASSUMED]** if changing multiple files) |
| Smooth scroll | Prefer CSS `scroll-behavior: smooth` on `html` only if `prefers-reduced-motion: no-preference`; no JS scroll-spy |
| Active nav | None this phase |

---

## Homepage Order (HOME-01)

`Header` → `Hero` → `Intelligence` → `Process` → `Solutions` → `Leverages` → **`FinalCtaSection`** → `Footer`

Polish: major inter-section geometry only; no redesign of approved interiors (CONTEXT D-17). 768 header crowding → Phase 9.

---

## Registry Safety

| Registry | Blocks Used | Safety Gate |
|----------|-------------|-------------|
| shadcn official | none | N/A |
| third-party | none | N/A |

---

## Responsive / Screenshots

Widths: **1440, 1280, 768, 390** (ROADMAP Phase 5).

Capture at minimum:

| File | Subject |
|------|---------|
| `homepage-1440.png` | Full composed fold through Final CTA |
| `final-cta-1440.png` | Final CTA band crop |
| `homepage-1280.png` | Composed |
| `homepage-768.png` | Composed (note header crowding OK to defer) |
| `homepage-390.png` | Stacked Final CTA |
| `hash-intelligence-1440.png` | After click Intelligence — section under sticky header |

---

## Component Map

| Component | Action |
|-----------|--------|
| `FinalCtaSection` | **New** RSC |
| `src/data/final-cta.ts` + types | **New** |
| `src/app/page.tsx` | Wire after Leverages |
| `Button` | Reuse as-is |
| Section `scroll-mt` | Unify/verify |
| Header / Footer / nav data | No copy changes; hash smoke only |

---

## Checker Sign-Off

- [x] Dimension 1 Copywriting: PASS — all strings cited to refs; no invent
- [x] Dimension 2 Visuals: PASS — derived dark band; split layout; no waves
- [x] Dimension 3 Color: PASS — shell tokens only
- [x] Dimension 4 Typography: PASS — 400/600; sizes mapped
- [x] Dimension 5 Spacing: PASS — 4px scale; ASSUMED padding flagged
- [x] Dimension 6 Registry Safety: PASS — no registries

**Approval:** approved 2026-07-11 (orchestrator + CONTEXT locks; user said continue)
