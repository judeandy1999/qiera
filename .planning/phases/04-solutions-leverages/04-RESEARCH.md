# Phase 4: Solutions & Leverages - Research

**Researched:** 2026-07-11  
**Domain:** Next.js App Router · TypeScript · Tailwind v4 · WAI-ARIA Tabs · CSS/SVG charts · lucide-react · native `<dialog>`  
**Confidence:** HIGH

---

<user_constraints>
## User Constraints (from locked decisions + phase brief)

> No `04-CONTEXT.md` exists. Constraints below are locked from DECISIONS.md, REQUIREMENTS.md, ROADMAP Phase 4, and the approved `04-UI-SPEC.md`.

### Locked Decisions

- **10 solution tabs + inline panels** (not routes). Default selected: `revenue-leaks`. Deeper Solutions DetailModal not required for v1.
- **11 leverage cards + DetailModal**; **omit Share/Download** entirely (DECISIONS #5).
- **Detail views = accessible modals** on homepage (DECISIONS #4) — Escape, focus trap, restore focus, mobile full/near-full screen, `prefers-reduced-motion`.
- **Nav label Leverages** (plural) — DECISIONS #13.
- **Charts:** CSS/SVG only — **no** Chart.js / Recharts / D3.
- **Reuse** `DetailModal`; **extend** `IntelligenceIcon` (never import lucide in section components).
- Section ids: `solutions`, `leverages`; `scroll-mt-[72px]`.
- Home stays RSC; Solutions + Leverages are **client islands only**.
- New tokens: `--color-positive`, `--color-positive-tint`, `--color-warning`, `--color-danger` (hex values **[ASSUMED]** in UI-SPEC — sample/correct at screenshot gate).
- Visual SoT: `docs/qiera-reference/`; follow `.cursor/rules/qiera-visual-fidelity.mdc`.
- **Do not commit** planning or code (`commit_docs: false`).

### Claude's Discretion

- Exact hex for positive/warning/danger after screenshot sampling.
- Solution panel H3 size (Body-Bold vs ~24px).
- Leverages row-2 centering vs stretch (match `Leverages menu.png`).
- Talk to an Expert href (`/contact` vs `/contact?topic=leverage`).
- Which solution illustrations require raster extract vs pure CSS/SVG reconstruction.
- Flexible optional fields in leverage types where Trust differs from Revenue layout.

### Deferred Ideas (OUT OF SCOPE)

- Solutions secondary DetailModal beyond inline panels.
- Share / Download chrome.
- Chart libraries.
- Final CTA band (Phase 5).
- Header/footer hash wiring polish beyond section ids + scroll-mt (Phase 5 owns HOME-01/02 fully).
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| HOME-06 | Solutions section provides tabbed selector for 10 challenges; deeper detail (if opened) uses shared modal — v1 = **inline panels only** | WAI-ARIA Tabs pattern; typed `solutions.ts`; panel anatomy from all 10 refs; CSS/SVG chart helpers |
| HOME-07 | Leverages section shows 11 cards with responsive grid/carousel and modal details; **no** Share/Download | Mirror `IntelligenceSection`; `LeverageDetail` + `DetailModal` footer CTA; omit Share/Download |
| HOME-09 | Shared detail modal: keyboard, Escape, focus trap, restore, mobile full screen, reduced-motion | Reuse existing `DetailModal` (`showModal()`); already covered by `DetailModal.test.tsx` — Leverages integration tests only |
</phase_requirements>

---

## Summary

Phase 4 adds two homepage sections after Process: **Solutions** (10 challenge tabs with rich inline dashboard panels) and **Leverages** (11 overview cards opening detail modals). The stack is already in place from Phases 1–3 — Next.js App Router (16.2.10), React 19, Tailwind v4, TypeScript strict, Vitest, lucide-react via `IntelligenceIcon`, and native `<dialog>` via `DetailModal`. **No new npm packages are required.**

Solutions is a new interaction pattern for this codebase: a real WAI-ARIA **tablist** with automatic activation (panels are static data in the DOM — APG recommends automatic activation when panels display without latency). [CITED: https://www.w3.org/WAI/ARIA/apg/patterns/tabs/] Leverages reuses the Intelligence carousel/grid + modal orchestration pattern, with a new `LeverageDetail` body and `DetailModal` `footer` for the “Talk to an Expert” bar. Charts are hand-built CSS width bars + SVG gauge/sparkline primitives shared by both sections.

**Primary recommendation:** Implement Solutions as a client island with typed panel data + three chart primitives (`ProgressBar`, `GaugeChart`, `Sparkline`); implement Leverages by cloning the IntelligenceSection state machine and swapping card/detail renderers; extract non-reconstructable 3D art into `public/images/qiera/solutions/`; add four color tokens to `globals.css`; extend `IntelligenceIcon` only.

---

## Project Constraints (from .cursor/rules/)

Actionable directives from `qiera-visual-fidelity.mdc` / AGENTS.md that the planner must honor:

| Directive | Implication for Phase 4 |
|-----------|-------------------------|
| References under `docs/qiera-reference/` are visual SoT | Transcribe from Solutions cards / Leverage cards / Leverages menu; do not invent layout |
| No redesign / modernize / simplify | Match tab chrome, dashboard grids, modal structure minus Share/Download |
| Next.js App Router, TS, Tailwind only | No second styling framework; no Pages Router |
| No unnecessary libraries | Zero chart libs; explain before any install |
| RSC default; `"use client"` islands only | Do not make `page.tsx` a client component |
| `src/app`, `src/components`, `src/data`, `src/lib`, `public/images/qiera` | New types/data/sections under those paths |
| `next/image` for rasters; accurate alt/sizes | Solution illustrations via `next/image` |
| Semantic section IDs + `scroll-margin-top` for sticky header | `id="solutions"` / `id="leverages"` + `scroll-mt-[72px]` |
| Visual match order: width → height → grid → … → fine details | Screenshot gate before claiming fidelity |
| Transcribe readable copy; flag unreadable | Data files + SUMMARY questions |
| A11y: tabs keyboard-operable, focus states, ARIA, reduced-motion | APG tabs + DetailModal |
| Responsive validate 1440 / 1280 / 1024 / 768 / 390 / 360; ROADMAP screenshots 1440 / 1024 / 390 | Plan tasks for those widths |
| Lint + TS + tests + screenshots after implementation | Nyquist + visual gates |
| Do not commit | Executor/planner write only; user commits |

---

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Solutions / Leverages section chrome (headers, static copy) | Browser / Client (island) | — | Tabs/carousel require client state; keep page RSC and mount islands |
| Solutions tab selection + panel swap | Browser / Client | — | `useState` + ARIA keyboard handlers |
| Solutions dashboard charts (gauge/bars/sparkline) | Browser / Client | CDN / Static | Pure presentational SVG/CSS from props; no fetch |
| Leverages grid/carousel + Learn more | Browser / Client | — | Same pattern as IntelligenceSection |
| Leverage detail modal content | Browser / Client | — | Inside DetailModal island |
| DetailModal shell (focus/Escape/backdrop) | Browser / Client | — | Native `showModal()` already implemented |
| Typed content (`solutions.ts`, `leverages.ts`) | Frontend Server (RSC import) | — | Static modules; imported into client islands |
| Color tokens in `globals.css` | CDN / Static | — | Compile-time Tailwind `@theme` |
| Raster illustrations | CDN / Static | — | `public/images/qiera/solutions/*` via `next/image` |

---

## Standard Stack

### Core — already installed, no new installs

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js App Router | 16.2.10 [VERIFIED: package.json] | RSC page + islands | Project lock / AGENTS.md |
| React | 19.2.4 [VERIFIED: package.json] | UI | Project lock |
| TypeScript | ^5 [VERIFIED: package.json] | Typed data contracts | FOUND-01 |
| Tailwind CSS | v4 [VERIFIED: package.json] | Styling via `@theme inline` | FOUND-02; no second framework |
| lucide-react | 1.24.0 [VERIFIED: npm view] | Icons via IntelligenceIcon only | Existing pattern; Eye/Funnel/Lock/Gauge/etc. exist |
| Vitest + Testing Library | vitest ^4.1.10 [VERIFIED: package.json] | Unit tests | Existing `ProcessSection.test.tsx` pattern |
| Native `<dialog>` | Platform | Modal a11y | DetailModal — HOME-09 |

### Supporting — no packages; in-repo primitives

| Primitive | Purpose | When to Use |
|-----------|---------|-------------|
| CSS `width` % bars | Category / gap progress | Every Solutions panel + leverage value drivers |
| SVG arc gauge | Semi-circle metric | Solutions “overview” cards |
| SVG sparkline polyline | Uplift trend | Solutions opportunity cards; leverage metrics if green |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| CSS/SVG charts | Recharts / Chart.js / D3 | **Forbidden** by phase lock and UI-SPEC |
| Inline Solutions panels | Per-challenge routes or DetailModal | Locked: tabs + inline; no Solutions modal v1 |
| Extending IntelligenceIcon | Separate SolutionsIcon / LeverageIcon | Extra surface; project rule = single lucide gateway |
| Manual focus trap for leverage modal | Custom hook | DetailModal already correct — do not reimplement |

**Installation:** None.

```bash
# No new packages
```

---

## Package Legitimacy Audit

> Phase 4 installs **zero** external packages.

| Package | Registry | Age | Downloads | Source Repo | slopcheck | Disposition |
|---------|----------|-----|-----------|-------------|-----------|-------------|
| — | — | — | — | — | — | N/A — no installs |

**Packages removed due to slopcheck [SLOP] verdict:** none  
**Packages flagged as suspicious [SUS]:** none

---

## Architecture Patterns

### System Architecture Diagram

```
page.tsx (RSC)
  └─ <SolutionsSection />          [client island]
       ├─ state: activeTabId (default revenue-leaks)
       ├─ tablist (role=tablist) ──► Arrow/Home/End keyboard
       ├─ tabpanel (role=tabpanel) ─► SolutionPanel
       │     ├─ hero / problem card (+ optional next/image art)
       │     ├─ metric + GaugeChart
       │     ├─ category list + ProgressBar rows
       │     ├─ opportunity + Sparkline (+ positive color)
       │     ├─ How We Create Impact (5 steps)
       │     └─ Outcomes You Can Expect (+ optional target art)
       └─ data: src/data/solutions.ts

  └─ <LeveragesSection />          [client island]
       ├─ state: activeIndex, selectedId | null
       ├─ grid (xl 6+5) / scroll-snap (sm/md)
       ├─ carousel controls + dots (NOT role=tablist)
       ├─ LeverageCard → Learn more button
       └─ DetailModal
             ├─ children: LeverageDetail(leverage)
             └─ footer: CTA bar → /contact (Talk to an Expert)
                   data: src/data/leverages.ts
```

### Recommended Project Structure

```
src/
├── types/
│   ├── solutions.ts              # NEW
│   └── leverages.ts              # NEW
├── data/
│   ├── solutions.ts              # NEW — 10 SolutionChallenge objects
│   └── leverages.ts              # NEW — 11 Leverage objects
├── components/
│   ├── ui/
│   │   ├── DetailModal.tsx       # REUSE (footer already exists)
│   │   ├── IntelligenceIcon.tsx  # EXTEND keys
│   │   ├── ProgressBar.tsx       # NEW — CSS width bar
│   │   ├── GaugeChart.tsx        # NEW — SVG semi-circle
│   │   └── Sparkline.tsx         # NEW — SVG polyline
│   └── sections/
│       ├── SolutionsSection.tsx  # NEW client
│       ├── SolutionTabList.tsx   # NEW (or inline)
│       ├── SolutionPanel.tsx     # NEW
│       ├── LeveragesSection.tsx  # NEW client
│       ├── LeverageCard.tsx      # NEW
│       └── LeverageDetail.tsx    # NEW modal body
├── app/
│   ├── globals.css               # ADD 4 color tokens
│   └── page.tsx                  # ADD Solutions then Leverages after Process
public/images/qiera/solutions/    # NEW extracted rasters
```

### Pattern 1: SolutionsSection — WAI-ARIA tabs (automatic activation)

**What:** Client island; one selected tab; panels swap in place.  
**When:** HOME-06.  
**Why automatic:** All panel data is local typed content — zero latency. [CITED: W3C APG Tabs — automatic activation recommended when panels display instantly]

```typescript
// Source: https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-automatic/
"use client";
import { useState, useId } from "react";
import { solutions } from "@/data/solutions";

export function SolutionsSection() {
  const [activeId, setActiveId] = useState(solutions[0].id); // revenue-leaks
  const baseId = useId();
  const active = solutions.find((s) => s.id === activeId)!;

  function onTabKeyDown(e: React.KeyboardEvent, index: number) {
    const last = solutions.length - 1;
    let next = index;
    if (e.key === "ArrowRight") next = index === last ? 0 : index + 1;
    else if (e.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    setActiveId(solutions[next].id);
    // focus the newly selected tab button (roving tabindex)
  }

  return (
    <section id="solutions" className="scroll-mt-[72px] bg-[var(--color-surface)]">
      {/* header … */}
      <div role="tablist" aria-label="Challenge areas" className="flex gap-2 overflow-x-auto [scroll-snap-type:x_mandatory]">
        {solutions.map((s, i) => {
          const selected = s.id === activeId;
          return (
            <button
              key={s.id}
              type="button"
              role="tab"
              id={`${baseId}-tab-${s.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${s.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveId(s.id)}
              onKeyDown={(e) => onTabKeyDown(e, i)}
              className="scroll-snap-align-start …"
            >
              <IntelligenceIcon name={s.icon} />
              <span>{s.tabLabel}</span>
            </button>
          );
        })}
      </div>
      <div
        role="tabpanel"
        id={`${baseId}-panel-${active.id}`}
        aria-labelledby={`${baseId}-tab-${active.id}`}
        tabIndex={0}
      >
        <SolutionPanel challenge={active} />
      </div>
    </section>
  );
}
```

### Pattern 2: LeveragesSection — IntelligenceSection clone

**What:** `activeIndex` for carousel chrome + `selected` for modal; desktop 6+5 grid; mobile scroll-snap.  
**When:** HOME-07.  
**Difference from Intelligence:** 11 cards; row 2 has 5 cards (center or start per screenshot); modal uses `footer` CTA; omit Share/Download.

```typescript
// Mirror IntelligenceSection — selected leverage + DetailModal footer
<DetailModal
  open={selected !== null}
  onClose={closeModal}
  title={selected?.title ?? ""}
  labelledById="leverage-modal-heading"
  footer={
    selected ? (
      <LeverageCtaBar
        copy={selected.cta}
        href="/contact" /* or ?topic=leverage — ASSUMED */
        onNavigate={closeModal}
      />
    ) : null
  }
>
  {selected && (
    <LeverageDetail leverage={selected} headingId="leverage-modal-heading" onClose={closeModal} />
  )}
</DetailModal>
```

Map reference “← Back to Leverages” to a text button calling `onClose` (plus existing ×). Do **not** use routes.

### Pattern 3: Chart primitives (shared)

**ProgressBar:** track + filled div with `style={{ width: `${pct}%` }}`, `role="img"` + `aria-label`.  
**GaugeChart:** SVG path arc + needle or arc endpoint; value + caption as siblings (not only color).  
**Sparkline:** SVG `<polyline>` from number[]; stroke `--color-positive` or `--color-accent`.

Do not animate gauges unless gated behind `prefers-reduced-motion: no-preference`.

### Pattern 4: Flexible LeverageDetail sections

Revenue modal uses bar “value drivers” + opportunity list. Trust modal uses a **gap analysis table** + driver score cards + warning/danger badges. Type optional blocks and omit empty ones:

```typescript
impactMetrics?: MetricCard[];
valueDrivers?: BarRow[];       // Revenue-style
gapAnalysis?: GapRow[];        // Trust-style
opportunities?: Opportunity[];
timeToValue?: TimeStage[];     // 4-stage chevron flow
roadmap?: RoadmapStep[];
outcomes?: string[];
successFactors?: { icon: string; label: string }[];
drivers?: DriverScoreCard[];   // Trust-style mid band
cta: { title: string; body: string };
```

### Anti-Patterns to Avoid

- **Importing lucide in section files** — always extend `IntelligenceIcon`.
- **Installing chart libraries** — locked forbidden.
- **Using `role="tablist"` on Leverages pagination dots** — Intelligence currently misuses this for dots; do **not** copy that for Leverages. Use `role="group"` / `aria-label` + buttons with `aria-current`. [ASSUMED: treat Intelligence dots as legacy debt; Phase 4 must not replicate]
- **Page-level horizontal overflow** — tab strip may scroll; panels must wrap (`min-w-0`).
- **Share / Download buttons** — locked omit; do not stub.
- **Making Solutions panels separate routes** — locked.
- **Hard-coding one leverage layout** — Trust ≠ Revenue; use optional typed sections.
- **Color alone for High/Medium/Low tags** — pair with text labels (a11y rule).

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Modal focus trap / Escape / restore | Custom listeners | `DetailModal` + `<dialog showModal()>` | Already HOME-09 compliant |
| Chart axes, tooltips, scales | Mini chart framework | CSS bars + SVG gauge/sparkline | Marketing data is static illustrative |
| Icon SVGs | Inline path soup | lucide via IntelligenceIcon | Consistency + strokeWidth |
| Mobile carousel physics | Framer / Swiper | CSS scroll-snap (Intelligence pattern) | Zero deps |
| Tab focus management from scratch without ARIA | Div click handlers only | APG tablist roles + roving tabindex | Required for HOME-06 a11y |

**Key insight:** Phase 4 volume is **data transcription + layout**, not new infrastructure. The only net-new primitives are three tiny chart components and flexible detail types.

---

## Common Pitfalls

### Pitfall 1: Solutions tab count / filename drift

**What goes wrong:** Miscounting tabs or mapping wrong PNG (e.g. “growth constrains” typo in filename).  
**How to avoid:** Use exact 10 IDs from UI-SPEC; map files from REFERENCE-INVENTORY (note `growth constrains - solutions.png` spelling).

### Pitfall 2: Treating Solutions panels as modals

**What goes wrong:** Opening DetailModal for every challenge.  
**How to avoid:** UI-SPEC default = inline panels only; no Solutions DetailModal in v1.

### Pitfall 3: Shipping Share/Download

**What goes wrong:** Copying reference chrome into LeverageDetail.  
**How to avoid:** Explicitly omit; map Back → Close only.

### Pitfall 4: Chart library temptation for gauges

**What goes wrong:** Adding Recharts “just for the donut.”  
**How to avoid:** Locked CSS/SVG; implement `GaugeChart` as ~40 lines of SVG.

### Pitfall 5: Missing new color tokens

**What goes wrong:** Hard-coded `#10B981` in classNames; inconsistent Trust tags.  
**How to avoid:** Declare tokens in `globals.css` `@theme inline`; sample hex from 1440 refs at screenshot gate.

### Pitfall 6: Modal overflow / nested scroll

**What goes wrong:** Leverage detail wider than dialog; horizontal scroll on page.  
**How to avoid:** `min-w-0` grids; internal wrap; rely on DetailModal’s single `overflow-y-auto` region (Process already uses `footer` for sticky CTA — same pattern).

### Pitfall 7: Active tab indicated by color only

**What goes wrong:** Accent fill without border/underline/text change.  
**How to avoid:** Combine border + accent text/icon + optional underline (UI-SPEC); keep inactive ink-secondary.

### Pitfall 8: Forgetting scroll-mt / section order

**What goes wrong:** Hash `#solutions` / `#leverages` hidden under sticky header; wrong order in `page.tsx`.  
**How to avoid:** `scroll-mt-[72px]`; wire Process → Solutions → Leverages.

### Pitfall 9: Extracting nothing / inventing 3D art

**What goes wrong:** CSS approximations of funnel/shield/target look cheap vs references.  
**How to avoid:** Crop/export non-reconstructable 3D art from refs into `public/images/qiera/solutions/` (same rule as operating-model). Reconstruct only simple line icons via lucide.

### Pitfall 10: Automatic vs manual tabs without keyboard wrap

**What goes wrong:** Arrow keys stop at ends; Home/End missing.  
**How to avoid:** Wrap Left/Right; implement Home/End per APG. [CITED: W3C APG Tabs]

---

## TypeScript Type Contracts

```typescript
// src/types/solutions.ts
export type SolutionBarRow = {
  icon: string;
  label: string;
  percent: number;
};

export type SolutionImpactStep = {
  icon: string;
  title: string;
  description: string;
};

export type SolutionChallenge = {
  id: string;                 // "revenue-leaks"
  tabLabel: string;           // "Revenue-Leaks"
  icon: string;               // IntelligenceIcon key
  /** Panel hero */
  title: string;              // "Stop Revenue Leaks."
  description: string;
  bullets: string[];
  illustrationSrc?: string;   // /images/qiera/solutions/...
  illustrationAlt?: string;
  /** Metric / gauge card */
  metricCard: {
    title: string;
    value: string;            // "24" | "1.82%" | "63 / 100"
    valueCaption: string;
    gaugeValue: number;       // 0–100 for arc
    gaugeLabel: string;
    gaugeSubtext?: string;
    callout: { icon: string; text: string };
  };
  /** Category bars */
  categoryCard: {
    title: string;
    rows: SolutionBarRow[];
    callout: { icon: string; text: string };
  };
  /** Opportunity / uplift */
  opportunityCard: {
    title: string;
    value: string;            // "+$2.6M" | "$2.4M"
    valueTone: "accent" | "positive";
    valueCaption: string;
    sparkline: number[];
    rows: { icon: string; label: string; tone?: "accent" | "positive" }[];
  };
  impactSteps: SolutionImpactStep[]; // length 5
  outcomes: { icon: string; label: string }[];
  outcomesIllustrationSrc?: string;
};
```

```typescript
// src/types/leverages.ts
export type Leverage = {
  id: string;
  title: string;
  icon: string;
  overviewBullets: [string, string, string];
  description: string;
  impactMetrics: {
    icon: string;
    value: string;
    label: string;
    badge?: { text: string; tone: "positive" | "accent" | "warning" | "danger" };
  }[];
  valueDrivers?: { label: string; percent: number; icon?: string }[];
  valueDriversCallout?: string;
  gapAnalysis?: {
    element: string;
    icon: string;
    score: number;
    industryAvg: number;
    gap: number;
    impact: "High" | "Medium" | "Low";
  }[];
  opportunities: {
    icon: string;
    title: string;
    description: string;
    annualImpact: string;
    tags: { label: string; tone: "accent" | "positive" | "warning" | "danger" }[];
  }[];
  opportunitiesFooterLink?: string; // display only or omit if no destination
  timeToValue: {
    icon: string;
    title: string;
    timeframe: string;
    value: string;
    caption?: string;
  }[];
  roadmap: {
    step: number;
    title: string;
    description: string;
    duration: string;
  }[];
  roadmapCallout?: string;
  outcomes: string[];
  successFactors: { icon: string; label: string }[];
  drivers?: {
    icon: string;
    title: string;
    score: string;
    status: string;
    statusTone: "positive" | "warning" | "danger" | "accent";
  }[];
  cta: { title: string; body: string };
};
```

---

## Icon Extension Contract

Extend `IntelligenceIcon` map (lucide-react 1.24.0 — all exports verified present via `require('lucide-react')`):

| Key | lucide export | Use |
|-----|---------------|-----|
| `eye` | `Eye` | Visibility leverage / AI visibility |
| `funnel` | `Funnel` | Conversion (or reuse existing `conversion` → Filter) |
| `lock` | `Lock` | Governance |
| `gauge` | `Gauge` | Metric cards |
| `activity` | `Activity` | Sparklines / ops |
| `messageCircle` | `MessageCircle` | Talk to an Expert |
| `clock` | `Clock` | Time to impact |
| `zap` | `Zap` | Short-term time-to-value |
| `percent` | `Percent` | Conversion metrics |
| `dollarSign` | `DollarSign` | Revenue (or reuse `banknote` / `commercial`) |
| `layers` | `Layers` | Positioning / product layers |

Reuse existing keys where possible: `shield`, `users`, `target`, `rocket`, `sparkles`, `conversion`, `visibility`, `operational`, `product`, `trend`, `chart`, `lightbulb`, `warning`, `check`.

Do not import lucide outside `IntelligenceIcon.tsx`.

---

## Asset Extraction Plan

| Asset need | Source reference | Destination | Method |
|------------|------------------|-------------|--------|
| Conversion 3D funnel | `conversion problems - solutions.png` | `public/images/qiera/solutions/conversion-funnel.png` | Crop transparent-ish region; WebP optional later |
| Trust 3D shield | `trust issues - solutions.png` | `…/trust-shield.png` | Crop |
| Outcomes target (shared) | Multiple solutions PNGs | `…/outcomes-target.png` | Extract once; reuse across panels if identical |
| Revenue / growth hero art | Per-tab refs | `…/{id}-hero.png` | Extract only if concentric rings / spheres are photographic-3D |
| Operating model precedent | Existing `public/images/qiera/operating-model.png` | — | Follow same folder + `next/image` usage |

**Skip extract when:** Iconography is pure line-art already covered by lucide.  
**Do not invent:** Replacement illustrations if crop is feasible.

---

## Code Examples

### New color tokens

```css
/* Source: 04-UI-SPEC.md — hex ASSUMED until screenshot sample */
@theme inline {
  /* …existing… */
  --color-positive: #10b981;
  --color-positive-tint: rgba(16, 185, 129, 0.1);
  --color-warning: #f59e0b;
  --color-danger: #ef4444;
}
```

### ProgressBar

```tsx
// Source: visual refs — CSS width only [ASSUMED dimensions]
export function ProgressBar({
  value,
  label,
  tone = "accent",
}: {
  value: number;
  label: string;
  tone?: "accent" | "positive";
}) {
  const color =
    tone === "positive"
      ? "var(--color-positive)"
      : "var(--color-accent)";
  return (
    <div
      className="flex flex-col gap-1"
      role="img"
      aria-label={`${label}: ${value}%`}
    >
      <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--color-accent-tint)]">
        <div
          className="h-full rounded-full"
          style={{ width: `${Math.min(100, Math.max(0, value))}%`, background: color }}
        />
      </div>
    </div>
  );
}
```

### GaugeChart (SVG)

```tsx
// Source: Solutions refs — semi-circle gauge [ASSUMED geometry; correct at screenshot]
export function GaugeChart({ value, max = 100 }: { value: number; max?: number }) {
  const pct = Math.min(1, Math.max(0, value / max));
  // Map pct → end angle on semicircle; stroke dasharray approach also fine
  return (
    <svg viewBox="0 0 120 70" className="w-full max-w-[160px]" aria-hidden>
      <path d="M10 60 A50 50 0 0 1 110 60" fill="none" stroke="var(--color-accent-tint)" strokeWidth="10" strokeLinecap="round" />
      <path
        d="M10 60 A50 50 0 0 1 110 60"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="10"
        strokeLinecap="round"
        pathLength={100}
        strokeDasharray={`${pct * 100} 100`}
      />
    </svg>
  );
}
```

### page.tsx wiring

```tsx
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { LeveragesSection } from "@/components/sections/LeveragesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <IntelligenceSection />
      <ProcessSection />
      <SolutionsSection />
      <LeveragesSection />
    </>
  );
}
```

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Chart.js / Recharts for marketing dashboards | Inline CSS/SVG | Phase 4 lock | Zero bundle cost; fidelity control |
| Separate detail routes | Homepage modals | DECISIONS #4 | Single-page marketing UX |
| Manual focus-trap libraries | Native `<dialog>` | Phase 2 | HOME-09 without deps |
| Automatic vs manual tabs | APG automatic when panels instant | WAI-ARIA APG | Prefer automatic for Solutions |

**Deprecated/outdated for this phase:**
- Adding npm chart packages
- Recreating Share/Download product chrome
- Copying Intelligence dots’ incorrect `role="tablist"` onto Leverages pagination

---

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | `--color-positive` ≈ `#10B981`, warning `#F59E0B`, danger `#EF4444` | Color tokens | Visual mismatch — sample from refs |
| A2 | Solutions panel H3 ≈ Body-Bold / 24px | Typography | Spacing/type hierarchy tweak |
| A3 | Leverages row 2: 5 cards left-aligned or centered | Layout | Adjust justify after 1440 screenshot |
| A4 | Expert CTA → `/contact` without query | Leverage footer | Prefer `?topic=leverage` if product wants tracking |
| A5 | Gauge geometry (radius/stroke) approximate until screenshot | Charts | Tune SVG viewBox |
| A6 | “View all N opportunities →” is non-navigating or omitted | LeverageDetail | No destination defined — omit link or `button` that no-ops with TODO |
| A7 | Intelligence pagination `role="tablist"` is incorrect for dots | Anti-patterns | Phase 4 Leverages should not copy; fixing Intelligence is optional out of scope |
| A8 | Some solution illustrations need raster extract | Assets | Confirm per-tab at implement time |
| A9 | Trust leverage optional sections (gap table, drivers) | Types | Required for Trust fidelity |
| A10 | Automatic tab activation is correct choice | Tabs | Manual activation acceptable but worse UX for static panels |

---

## Open Questions (RESOLVED)

1. **Talk to an Expert href**
   - What we know: UI-SPEC allows `/contact` or `/contact?topic=leverage`
   - Recommendation: `/contact` for v1 unless Phase 7 forms already key off `topic` — then use `?topic=leverage`
   - **RESOLVED:** `/contact` (locked in 04-06 plan)

2. **“View all opportunities” links**
   - What we know: Present on leverage refs; no destination in v1 scope
   - Recommendation: Omit or render as non-link text; do not invent routes
   - **RESOLVED:** Omit / no invented routes (04-05 / 04-06)

3. **Which 3D assets are mandatory extracts**
   - What we know: Conversion funnel, trust shield, outcomes target clearly photographic-3D
   - Recommendation: Extract those three first; decide others at screenshot gate
   - **RESOLVED:** Extract funnel, shield, outcomes-target first (04-07); others at screenshot gate

4. **Leverages desktop row-2 alignment**
   - What we know: 6 + 5 layout; centering vs stretch unclear without pixel measure
   - Recommendation: Implement `xl:grid-cols-6` for row1 + row2 `xl:col-span` / flex with `justify-center`; correct from `Leverages menu.png`
   - **RESOLVED:** ASSUMED `justify-center` for row 2; correct at screenshot gate (04-06 / 04-07)

---

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js | Dev / Vitest | ✓ | v22.13.0 | — |
| npm | Scripts | ✓ | 10.9.2 | — |
| Next.js | App | ✓ | 16.2.10 | — |
| lucide-react | Icons | ✓ | 1.24.0 | — |
| Vitest | Tests | ✓ | ^4.1.10 | — |
| @testing-library/react | Tests | ✓ | ^16.3.2 | — |
| Reference PNGs | Transcription / extract | ✓ | 10 + 11 + menu | — |
| `public/images/qiera/` | Raster output | ✓ | operating-model exists | Create `solutions/` subfolder |
| Chart npm libs | — | N/A | — | Must not install |

**Missing dependencies with no fallback:** None.  
**Missing dependencies with fallback:** None.

Step 2.6: External tools beyond Node/npm not required.

---

## Validation Architecture

> `workflow.nyquist_validation: true` — see also `04-VALIDATION.md`.

### Test Framework

| Property | Value |
|----------|-------|
| Framework | Vitest ^4.1.10 + @testing-library/react ^16.3.2 |
| Config file | `vitest.config.mts` |
| Quick run command | `npm test -- SolutionsSection LeveragesSection` |
| Full suite command | `npm test` |

### Phase Requirements → Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| HOME-06 | 10 tabs render; default Revenue-Leaks selected | unit | `npm test -- SolutionsSection` | ❌ Wave 0 |
| HOME-06 | Click Conversion-Problems updates panel title | unit | `npm test -- SolutionsSection` | ❌ Wave 0 |
| HOME-06 | ArrowRight moves selection / aria-selected | unit | `npm test -- SolutionsSection` | ❌ Wave 0 |
| HOME-07 | 11 Learn more buttons; no Share/Download text | unit | `npm test -- LeveragesSection` | ❌ Wave 0 |
| HOME-07 | Opens Revenue Leverage dialog | unit | `npm test -- LeveragesSection` | ❌ Wave 0 |
| HOME-09 | Escape closes leverage modal; focus restore | unit | `npm test -- LeveragesSection` | ❌ Wave 0 |

### Sampling Rate

- **Per task:** `npm test -- SolutionsSection` or `LeveragesSection` as relevant  
- **Per wave:** `npm test`  
- **Phase gate:** Full suite green + screenshot comparisons

### Wave 0 Gaps

- [ ] `src/components/sections/SolutionsSection.test.tsx`
- [ ] `src/components/sections/LeveragesSection.test.tsx`
- [ ] Optional: `src/components/ui/ProgressBar.test.tsx` / `GaugeChart.test.tsx` (aria-label + clamp)
- Framework already installed — no install gap

---

## Security Domain

> `security_enforcement` not set to `false` — included.

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V2 Authentication | no | Static marketing |
| V3 Session Management | no | — |
| V4 Access Control | no | — |
| V5 Input Validation | no | No user input; static typed data |
| V6 Cryptography | no | — |

### Known Threat Patterns

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| XSS via CMS | Tampering | N/A — hardcoded TS data, not user HTML |
| Open redirect on CTA | Spoofing | Hardcode `/contact` Link; no user-supplied href |
| Dependency supply chain | Tampering | No new packages |

---

## Sources

### Primary (HIGH confidence)

- Direct inspection: `docs/qiera-reference/Homepage/Solutions cards/revenue-leaks - 4th section.png`
- Direct inspection: `conversion problems - solutions.png`, `trust issues - solutions.png`
- Direct inspection: `Homepage/Leverages menu.png`
- Direct inspection: `Leverage cards/revenue leverages.png`, `trust leverage.png`
- `04-UI-SPEC.md` (approved design contract)
- `src/components/ui/DetailModal.tsx`, `IntelligenceSection.tsx`, `ProcessSection.tsx`, `IntelligenceIcon.tsx`, `globals.css`, `page.tsx`
- `.planning/phases/03-process/03-RESEARCH.md` (pattern reference)
- `.planning/research/REFERENCE-INVENTORY.md`
- `.planning/DECISIONS.md` (#4, #5, #13), REQUIREMENTS HOME-06/07/09, ROADMAP Phase 4
- W3C APG Tabs: https://www.w3.org/WAI/ARIA/apg/patterns/tabs/ [CITED]
- `npm view lucide-react version` → 1.24.0; runtime export check for Eye/Funnel/Lock/Gauge/etc. [VERIFIED]
- `package.json` Next 16.2.10 / React 19.2.4 [VERIFIED]

### Secondary (MEDIUM confidence)

- MDN tablist/tab keyboard notes (aligned with APG)
- Phase 2/3 UI-SPEC token inheritance

### Tertiary (LOW confidence)

- Exact pixel metrics for gauges and 6+5 centering — pending screenshot gate

---

## Metadata

**Confidence breakdown:**

| Area | Level | Reason |
|------|-------|--------|
| Standard stack | HIGH | Zero new deps; versions verified |
| Solutions architecture | HIGH | UI-SPEC + 3 panel refs inspected + APG cited |
| Leverages architecture | HIGH | Menu + 2 modal refs + Intelligence/Process reuse |
| Chart approach | HIGH | Locked + visually confirmed CSS/SVG-feasible |
| Copy completeness | MEDIUM | Full transcription deferred to execution from all 21 PNGs |
| Token hex values | ASSUMED | UI-SPEC; sample at gate |
| Responsive 390 details | MEDIUM | Spec table exists; no dedicated mobile refs |

**Research date:** 2026-07-11  
**Valid until:** 2026-08-11 (stable marketing stack; re-check if lucide major bumps)
