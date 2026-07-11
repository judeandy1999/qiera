---
phase: 4
slug: solutions-leverages
status: approved
shadcn_initialized: false
preset: none
created: 2026-07-11
reviewed_at: 2026-07-11T12:48:00Z
---

# Phase 4 — UI Design Contract

> Visual and interaction contract for frontend phases. Generated for `/gsd-ui-phase 4` (inline; UI researcher agent resource-exhausted). Verified by gsd-ui-checker next.

Sources consulted: `docs/qiera-reference/Homepage/Solutions cards/*` (10), `Homepage/Leverages menu.png`, `Homepage/Leverage cards/*` (11), `.planning/research/REFERENCE-INVENTORY.md`, `.planning/DECISIONS.md` (#4, #5, #13), `.planning/REQUIREMENTS.md` (HOME-06, HOME-07, HOME-09), `.planning/phases/03-process/03-UI-SPEC.md` + `02-UI-SPEC.md` (inherited tokens/typography ceiling), `src/app/globals.css`, `.cursor/rules/qiera-visual-fidelity.mdc`, existing `DetailModal` / `IntelligenceSection` / `ProcessSection` patterns.

No CONTEXT.md / RESEARCH.md for Phase 4. Locked decisions + references answer the contract — no user questions required. Values sampled from screenshots marked **[ASSUMED]** — self-correct at screenshot gate.

---

## Design System

| Property | Value |
|----------|-------|
| Tool | none |
| Preset | not applicable |
| Component library | none — native HTML + Tailwind v4 only (no shadcn, no second styling framework) |
| Icon library | lucide-react — access **only** via `IntelligenceIcon.tsx` (extend map; never import lucide in section components) |
| Font | Geist (`next/font/google` via `@theme inline`) — locked |

`components.json` not found. shadcn gate: N/A. Prefer **zero new tokens** except the positive/metric accents required by Solutions/Leverage dashboards (see Color).

---

## Spacing Scale

Inherited from Phases 1–3. Multiples of 4.

| Token | Value | Phase 4 usage |
|-------|-------|---------------|
| xs | 4px | Icon-to-label gaps; tag/pill internal gap |
| sm | 8px | Tab icon-to-label; list row gaps; chart bar track gaps |
| md | 16px | Card internal gaps; tab card padding; metric card padding |
| lg | 24px | Panel section gaps; modal section gaps |
| xl | 32px | Section header → content gap |
| 2xl | 48px | Between major panel bands (dashboard ↔ How We Create Impact) **[ASSUMED]** |
| 3xl | 64px | Reserved — prefer tighter section py (see below) |
| panel | 40px | Modal panel padding (reuse DetailModal content patterns) |

**Section container padding (match Phase 3 polish, not original 96/48):**

- Horizontal: `px-4 md:px-6 lg:px-8` (16 / 24 / 32)
- Vertical: `py-12 md:py-14 lg:py-16` (48 / 56 / 64)

**Touch targets:** tab buttons, Learn more, carousel prev/next, modal close, Talk to an Expert — min 44×44px hit area.

---

## Typography

Ceiling: **≤4 sizes, ≤2 weights** (Phase 2–3). Font: Geist. Weights: **400** and **600** only.

| Role | Size | Weight | Line Height | Notes |
|------|------|--------|-------------|-------|
| Caption | 12px | 400 | 1.4 | Eyebrows, tab labels (may wrap), chart category labels, tags, roadmap duration pills, uppercase section labels |
| Body | 16px | 400 | 1.6 | Descriptions, bullet copy, subheadings, Learn more |
| Body-Bold | 16px | 600 | 1.5 | Card titles, tab active emphasis if needed, roadmap step titles, opportunity titles |
| Heading | 32px | 600 | 1.2 | Section H2s; leverage modal title; solution panel hero title |

**Metric exception (dashboard fidelity):** Large KPI numerals (`$2.8M`, `+38%`, `1.82%`) render at **40px / 600 / 1.1** **[ASSUMED]** — single-purpose exception for Solutions tab panels + Leverage modals (same justification class as Phase 3’s 10px E-bar labels). Do not proliferate; secondary metrics use Heading or Body-Bold.

Active combinations:

- Solutions eyebrow — Caption, uppercase, tracking 0.08em, accent: **3. SOLUTIONS**
- Solutions H2 — Heading, ink: **Solving Your Most Critical Challenges.**
- Solutions subhead — Body, ink-secondary
- Leverages eyebrow — Caption, uppercase, accent: **2. OUR LEVERAGES**
- Leverages H2 — Heading, ink: **High-Impact Leverages Across Every Growth Dimension**
- Leverages subhead — Body, ink-secondary
- Tab labels — Caption, ink (active: accent)
- Leverage card titles — Body-Bold, ink
- Learn more — Body, accent
- Modal KPI numerals — Metric exception 40px / 600, accent **or** `--color-positive` when green in reference

---

## Color

### Inherited (do not redeclare)

| Token | Value | Phase 4 usage |
|-------|-------|---------------|
| `--color-surface` | `#FFFFFF` | Section bg, cards, tab panels |
| `--color-ink` | `#0B0D17` | Headings, titles |
| `--color-ink-secondary` | `#6B7280` | Body, inactive tabs, muted labels |
| `--color-accent` | `#6366F1` | Eyebrows, active tab border/icon, progress bars, numbered circles, Learn more, primary CTA fill |
| `--color-accent-tint` | `rgba(99,102,241,0.08)` | Icon wells, callout boxes, leverage CTA bar, active tab bg tint |
| `--color-accent-strong` | `#7C3AED` | CTA hover |
| `--color-card-border` | `rgba(0,0,0,0.08)` | Cards, tabs |
| `--color-card-active-border` | `#6366F1` | Active solution tab |
| `--color-card-active-bg` | `rgba(99,102,241,0.04)` | Active solution tab fill **[ASSUMED reuse]** |
| `--color-modal-backdrop` | `rgba(0,0,0,0.70)` | DetailModal |
| `--color-modal-left-bg` | `rgba(99,102,241,0.06)` | Optional modal tint bands |
| `--color-focus-ring` | `#8B7CF6` | Focus rings |
| `--radius-card` | `16px` | Cards, tabs, panels |
| `--radius-button` | `999px` | Talk to an Expert pill; duration pills may use smaller radius |

### New tokens (Phase 4 — required by references)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-positive` | `#10B981` **[ASSUMED]** | Uplift metrics, green sparklines, “High opportunity” / positive badges |
| `--color-positive-tint` | `rgba(16,185,129,0.10)` **[ASSUMED]** | Positive badge / callout backgrounds |
| `--color-warning` | `#F59E0B` **[ASSUMED]** | Medium Impact tags (Trust Gap etc.) |
| `--color-danger` | `#EF4444` **[ASSUMED]** | High Gap / High Impact (negative severity) tags only — not destructive actions |

Accent reserved for: eyebrows, active tabs, progress fills, numbered roadmap circles, Learn more, primary CTA, icon strokes in accent context. **Never** for default body text.

Positive reserved for: growth/uplift numerals and charts that are green in references.

---

## Layout & Component Contracts

### Shared shell

- Homepage order: … Process → **Solutions** → **Leverages** → (Final CTA later) → Footer
- Both sections: `scroll-mt-[72px]`, `bg-[var(--color-surface)]`, container `max-w-[var(--container-max)]` with Phase 4 px/py above
- Home page stays RSC; Solutions + Leverages are Client islands (tabs / carousel / modal)

### Solutions Section — `id="solutions"` (HOME-06)

**Primary UX:** Accessible **tablist + tabpanels**. Challenge content lives **inline** in the selected panel (references are full-section dashboards, not separate routes). Deeper chrome beyond the panel is **not** required as a second modal for v1 unless a panel contains an explicit Learn more that exceeds panel scope — default: **no Solutions DetailModal**.

**Header**

| Element | Copy |
|---------|------|
| Eyebrow | 3. SOLUTIONS |
| H2 | Solving Your Most Critical Challenges. |
| Subhead | Choose a challenge area to see how we identify issues, quantify impact, and deliver results. |

**Tablist — exactly 10** (REFERENCE-INVENTORY + REQUIREMENTS; ignore any “11” miscounts):

| # | id (slug) | Tab label (display) |
|---|-----------|---------------------|
| 1 | revenue-leaks | Revenue-Leaks |
| 2 | growth-constraints | Growth-Constraints |
| 3 | conversion-problems | Conversion-Problems |
| 4 | ai-visibility | AI-Visibility |
| 5 | seo-authority | SEO-Authority |
| 6 | trust-issues | Trust-Issues |
| 7 | retention-problems | Retention-Problems |
| 8 | positioning-problems | Positioning-Problems |
| 9 | competitive-pressure | Competitive-Pressure |
| 10 | operational-bottlenecks | Operational-Bottlenecks |

**Tab chrome**

- Horizontal row of equal-ish cards: icon (IntelligenceIcon) above Caption label
- Inactive: surface bg, card-border, ink-secondary icon/label
- Active: `border-[var(--color-card-active-border)]`, optional underline accent, `bg-[var(--color-card-active-bg)]`, accent icon/label
- Keyboard: Arrow Left/Right move selection; Home/End; Tab moves into panel; `role="tablist"` / `role="tab"` / `aria-selected` / `aria-controls` / `role="tabpanel"`
- Mobile: horizontal scroll-snap **allowed for tabs only** (dense 10-tab strip); panel content must not force page-level horizontal overflow
- Default selected: `revenue-leaks` (canonical layout reference)

**Tab panel anatomy** (same structure per challenge; data-driven):

1. **Hero / problem card** — H3-style title (Body-Bold or Heading collapsed to 24px **[ASSUMED use Body-Bold + larger leading]**), Body description, check-bullet list (accent checks), optional **illustration** (`next/image` extracted raster under `public/images/qiera/solutions/`)
2. **Metric / gauge card** — large Metric numeral + CSS/SVG gauge or donut + Caption callout
3. **Category / bar list card** — 4–6 rows: icon, label, CSS progress bar, % 
4. **Opportunity / uplift card** — large Metric (often `--color-positive`) + sparkline (SVG) + supporting rows
5. **How We Create Impact** — 5 numbered steps (accent circles 1–5), dashed connector, icon + Body-Bold title + Caption/Body description. Titles default pattern: Diagnose → Quantify → Design → Implement → Measure & Optimize (per-challenge copy may vary — transcribe from each reference)
6. **Outcomes You Can Expect** — icon list + optional target illustration asset

**Charts:** CSS width bars + SVG gauges/sparklines only. **No** Chart.js / Recharts / D3 unless later phase explicitly unlocks.

**Illustrations:** Extract non-reconstructable 3D art from references into `public/images/qiera/solutions/*` (same rule as operating-model). Do not invent replacements.

---

### Leverages Section — `id="leverages"` (HOME-07)

**Header**

| Element | Copy |
|---------|------|
| Eyebrow | 2. OUR LEVERAGES |
| H2 | High-Impact Leverages Across Every Growth Dimension |
| Subhead | Strategic levers that unlock growth, remove constraints, and accelerate performance across your e-commerce business. |

**Overview pattern:** Mirror IntelligenceSection — client island with prev/next, live counter `N / 11`, pagination dots; desktop grid.

**11 cards** (exact set):

| # | id | Title |
|---|-----|-------|
| 1 | revenue | Revenue Leverage |
| 2 | conversion | Conversion Leverage |
| 3 | trust | Trust Leverage |
| 4 | customer | Customer Leverage |
| 5 | visibility | Visibility Leverage |
| 6 | positioning | Positioning Leverage |
| 7 | product-offer | Product-Offer Leverage |
| 8 | retention | Retention Leverage |
| 9 | operational | Operational Leverage |
| 10 | decision | Decision Leverage |
| 11 | governance | Governance Leverage |

**Card anatomy**

```
[Icon in accent-tint circle] [Title Body-Bold]
• bullet (3 overview bullets — transcribe per card)
Learn more →
```

- Border card-border, radius-card, padding md/lg
- Learn more = `<button>` with `aria-label={`Learn more about ${title}`}` — opens DetailModal
- Desktop ≥1280: prefer **6 + 5** grid (row2 centered or left-aligned — match Leverages menu.png) **[ASSUMED implement 6-col then 5 with justify]**
- Tablet: 3-col grid
- Mobile: stack or 1-col; carousel controls still advance focus/active card like Intelligence

**Detail modal (HOME-09 + DECISIONS #4, #5)**

- Reuse `DetailModal` unchanged API (`open`, `onClose`, `title`, `labelledById`, optional `footer`)
- Content component: `LeverageDetail` (new) — data-driven from `src/data/leverages.ts`
- **Omit Share and Download** entirely (locked #5)
- Map reference “Back to Leverages” to **Close** control (DetailModal × and/or text button `Back to Leverages` that calls `onClose`) — do not navigate routes
- Structure (common across leverage references; fields typed; empty sections omit):

  1. Header: icon + H2 (`labelledById`) + description  
  2. Impact overview: 4 metric cards  
  3. Mid grid: value drivers / gap analysis (bars or table) + top opportunities list  
  4. Impact Potential & Time to Value: 4-stage horizontal flow  
  5. Recommended Action Roadmap (numbered 1–5 + duration pills) + Outcomes + Key Success Factors  
  6. Footer bar (DetailModal `footer`): lightbulb + “Ready to…” copy + **Talk to an Expert** → `/contact` (or `/contact?topic=leverage` **[ASSUMED]**)

- Positive metrics use `--color-positive`
- No page-level horizontal overflow; internal grids wrap (`min-w-0`); avoid overflow-x scroll regions except intentional tab strip

---

## Copywriting Contract

### Solutions (section chrome)

| Element | Copy |
|---------|------|
| Eyebrow | 3. SOLUTIONS |
| H2 | Solving Your Most Critical Challenges. |
| Subhead | Choose a challenge area to see how we identify issues, quantify impact, and deliver results. |
| How we create impact (label) | How We Create Impact |
| Outcomes (label) | Outcomes You Can Expect |

Per-tab body copy, metrics, and illustrations: **transcribe from each Solutions card PNG** into typed data. Unreadable strings → `// TODO: unreadable` + question in SUMMARY.

### Leverages (section chrome)

| Element | Copy |
|---------|------|
| Eyebrow | 2. OUR LEVERAGES |
| H2 | High-Impact Leverages Across Every Growth Dimension |
| Subhead | Strategic levers that unlock growth, remove constraints, and accelerate performance across your e-commerce business. |
| Card CTA | Learn more → |
| Modal close affordance | Back to Leverages (optional text) + DetailModal Close |
| Share / Download | **OMITTED** |
| Expert CTA | Talk to an Expert |

Per-leverage modal copy: transcribe from Leverage cards PNGs into typed data.

### States

| State | Copy / behavior |
|-------|-----------------|
| Empty | N/A — static typed data |
| Error | N/A — no network fetch |
| Destructive | None |

---

## Accessibility Contract

| Behavior | Implementation |
|----------|----------------|
| Solutions tabs | WAI-ARIA Tabs pattern; roving tabindex or automatic activation on Arrow keys |
| Leverages Learn more | `<button>` Enter/Space opens modal |
| Escape / focus trap / restore | DetailModal native `<dialog showModal()>` |
| Modal mobile | Existing DetailModal full-viewport contract |
| prefers-reduced-motion | No required enter animations; any decorative motion gated |
| Heading order | Section H2s; modal H2 via labelledById; no skipped levels |
| Icon-only controls | aria-label on prev/next, close, tabs with visible text preferred |
| scroll-mt | `scroll-mt-[72px]` on `#solutions` and `#leverages` |

---

## Responsive Behavior

| Width | Solutions | Leverages |
|-------|-----------|-----------|
| 1440 | 10 tabs in one row if fit; else scroll-snap tabs; 4-card dashboard grid | 6+5 card grid; controls visible |
| 1024 | Tabs scroll-snap; panel stacks 2×2 then full-width bands | 3-col grid |
| 390 | Tabs scroll-snap one/two visible; panel single column; How We Create Impact stacks or 2-col wrap; Outcomes stack | 1-col cards; carousel controls |

No page-level horizontal overflow. Validate screenshot widths: **1440, 1024, 390**.

---

## Component Inventory

| Component | Action |
|-----------|--------|
| `DetailModal` | Reuse (footer slot for leverage CTA bar) |
| `IntelligenceIcon` | Extend with Solutions + Leverage icons (eye, funnel already, etc.) |
| `SolutionsSection` | **New** client — tabs + panels |
| `SolutionTab` / panel pieces | **New** presentational |
| `SolutionCharts` (gauge, bars, sparkline) | **New** CSS/SVG helpers — no chart lib |
| `LeveragesSection` | **New** client — grid/carousel + modal |
| `LeverageCard` | **New** |
| `LeverageDetail` | **New** modal body |
| `src/types/solutions.ts`, `src/data/solutions.ts` | **New** |
| `src/types/leverages.ts`, `src/data/leverages.ts` | **New** |
| `src/app/page.tsx` | Wire Solutions then Leverages after Process |

---

## Icon Extension Contract

Extend `IntelligenceIcon` as needed (examples — finalize during research/plan from references):

| Likely key | Use |
|------------|-----|
| `eye` | Visibility leverage |
| `funnel` / reuse `conversion` | Conversion |
| `lock` | Governance |
| `gauge` / `activity` | Solution metrics |
| `sparkles` | already present |
| `messageCircle` | Talk to an Expert |

Do not import lucide outside IntelligenceIcon.

---

## Screenshot Verification (mandatory)

| Capture | Reference |
|---------|-----------|
| `solutions-1440.png` | `revenue-leaks - 4th section.png` (canonical chrome) |
| `solutions-tab-conversion-1440.png` | `conversion problems - solutions.png` |
| `solutions-1024.png` / `solutions-390.png` | responsive |
| `leverages-1440.png` | `Leverages menu.png` |
| `leverages-1024.png` / `leverages-390.png` | responsive |
| `modal-revenue-leverage-1440.png` | `revenue leverages.png` minus Share/Download |
| `modal-leverage-390.png` | mobile full modal |

Compare order: width → height → grid → alignment → type → spacing → color → details.

---

## Registry / Safety

No third-party UI registries. No new npm chart libraries. Playwright one-shot for screenshots only (no package.json dep required).

---

## Open [ASSUMED] list for planner/executor

1. Exact hex for `--color-positive` / warning / danger — sample from 1440 screenshots  
2. Solution panel H3 size (24 vs Body-Bold)  
3. Leverages row-2 centering vs stretch  
4. Talk to an Expert href query param  
5. Which solution illustrations require raster extract vs pure CSS  

---

## Pre-Populated From

| Source | Decisions used |
|--------|----------------|
| DECISIONS.md | Modals #4; omit Share/Download #5; Leverages plural #13 |
| REQUIREMENTS.md | HOME-06/07/09; 10 solutions; 11 leverages |
| REFERENCE-INVENTORY.md | File map; section numbering 2/3 |
| 03/02 UI-SPEC | Tokens, typography ceiling, DetailModal, spacing polish |
| User input this session | 0 (none required) |
