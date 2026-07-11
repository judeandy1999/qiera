# Phase 3: Process - Research

**Researched:** 2026-07-11  
**Domain:** Next.js App Router · TypeScript · Tailwind v4 · lucide-react · native `<dialog>`  
**Confidence:** HIGH

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| HOME-05 | Process section shows **6-step** overview and **modal** detail views for each step (no Orchestrate Competency) | Visual inspection of all 6 process card references; data structure designed; modal layout analysed in detail |
| HOME-09 | Shared detail modal supports keyboard nav, Escape close, focus trap, focus restore, mobile full/near-full screen, and `prefers-reduced-motion` | `DetailModal` component already implements all HOME-09 behaviours via native `<dialog>` — reuse without changes |
</phase_requirements>

---

## Summary

Phase 3 builds the Process section of the QIERA homepage: a six-card overview strip followed by per-step accessible detail modals. The entire technical stack — Next.js App Router, TypeScript, Tailwind v4, lucide-react, native `<dialog>` — is already in the project from Phases 1–2. **No new packages are required.**

The overview strip is a light-surface section (white background, dark text) using the same CSS tokens already declared in `globals.css`. Six cards sit in a 6-column horizontal row at desktop, connected by `→` arrow glyphs. Each card shows a numbered circle, a line-art icon, a bold step title, a short paragraph, and a "Read more →" trigger button that opens the step detail modal.

The step detail modal **reuses the existing `DetailModal` shell** (native `<dialog>`, Escape, focus trap, focus restore, backdrop) but renders an entirely new `ProcessDetail` content component. The process modal layout is substantially different from `IntelligenceDetail`: it has a narrower left panel (~25%) with a step indicator, a wider right panel (~75%) containing an overview paragraph, a horizontal six-sub-step workflow strip, a four-column info grid (Typical Inputs / Key Outputs / Success Criteria / Evidence & Confidence), and a full-width bottom bar ("WHY THIS MATTERS" + "Next Step →" navigation). This within-modal next-step navigation cycles through all six steps without closing and reopening the dialog.

**Primary recommendation:** Follow the exact IntelligenceSection pattern (client component managing `selectedIndex` + modal open state; typed data file; reuse `DetailModal`; new detail renderer). Extend `IntelligenceIcon` with process-specific lucide icons. Write `ProcessDetail` from scratch — do not attempt to generalise with `IntelligenceDetail`.

---

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Process overview strip (static layout + data) | Frontend Server (RSC) | — | Pure display; no interactivity until "Read more" is clicked |
| Process card "Read more" trigger + modal state | Browser / Client | — | Needs `useState` / `useRef` for modal open/close and active step tracking |
| ProcessDetail modal content (renders step data) | Browser / Client | — | Rendered inside a client-component island; data passed as props |
| DetailModal shell (native `<dialog>`) | Browser / Client | — | Requires DOM API (`showModal()`) — already client |
| CSS tokens / Tailwind styles | CDN / Static | — | Already compiled; no new tokens |
| Process step data (typed objects) | Frontend Server (RSC) | — | Static data import; no API call |

---

## Standard Stack

### Core — already installed, no new installs required

| Library | Installed Version | Purpose | Why Standard |
|---------|-------------------|---------|--------------|
| Next.js (App Router) | 15.x (project scaffold) | Routing, RSC, page layout | Project scaffold — locked |
| TypeScript | project tsconfig | Typed data + component contracts | FOUND-01 — locked |
| Tailwind v4 | project config | All styling via utility classes | FOUND-02 — locked |
| lucide-react | 1.24.0 [VERIFIED: npm view] | SVG icon components | Already used by IntelligenceIcon; process icons available |
| Vitest + @testing-library/react | vitest ^4.1.10 | Unit tests | Already wired (vitest.config.mts, `npm test`) |

> **Version verification:** `npm view lucide-react version` returned `1.24.0`. [VERIFIED: npm registry]

### No new packages needed

All capabilities (modal, icons, styling, testing) are covered by the existing stack. Phase 3 introduces zero new npm dependencies.

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Extending IntelligenceIcon with new names | A separate ProcessIcon component | Extending is simpler — same render pattern, one lookup table |
| Within-modal index state in ProcessSection | URL hash routing | Modals-only decision (#4) — no separate routes |
| CSS `→` glyph connectors | SVG arrow line elements | Glyph is sufficient and avoids positioning complexity; matches reference visual weight |

**Installation:** None required.

---

## Package Legitimacy Audit

> No new packages are installed in Phase 3. All code reuses existing project dependencies.

**Packages removed due to slopcheck [SLOP] verdict:** none  
**Packages flagged as suspicious [SUS]:** none

---

## Architecture Patterns

### System Architecture Diagram

```
User clicks "Read more" on ProcessCard
        │
        ▼
ProcessSection (Client Component)
  ├─ manages: selectedIndex (0-5 or null)
  ├─ renders: 6 × ProcessCard (Client)
  │           └─ onReadMore → setSelectedIndex
  └─ renders: DetailModal (Client)
               open={selectedIndex !== null}
               onClose={() => setSelectedIndex(null)}
               └─ ProcessDetail (renders inside modal scroll region)
                   step={processSteps[selectedIndex]}
                   onNextStep={() => setSelectedIndex((i+1) % 6)}
                   totalSteps={6}
```

Data flow:
```
src/data/process.ts  →  ProcessSection  →  ProcessCard (overview)
                                        →  DetailModal + ProcessDetail (modal)
```

### Recommended Project Structure

```
src/
├── types/
│   ├── intelligence.ts        (existing — untouched)
│   └── process.ts             (NEW — ProcessStep type)
├── data/
│   ├── intelligence.ts        (existing — untouched)
│   └── process.ts             (NEW — 6 ProcessStep objects)
├── components/
│   ├── ui/
│   │   ├── DetailModal.tsx         (existing — reuse without changes)
│   │   └── IntelligenceIcon.tsx    (MODIFY — add process icons)
│   └── sections/
│       ├── IntelligenceSection.tsx  (existing — untouched)
│       ├── ProcessSection.tsx       (NEW — client; owns modal state)
│       ├── ProcessCard.tsx          (NEW — overview card)
│       └── ProcessDetail.tsx        (NEW — modal content renderer)
└── app/
    └── page.tsx               (MODIFY — add <ProcessSection />)
```

### Pattern 1: ProcessSection follows IntelligenceSection exactly

**What:** Client island managing `selectedIndex` (which step modal is open) and delegating all rendering to sub-components.

**When to use:** Whenever a section needs modal state without making the whole page client-side.

```typescript
// src/components/sections/ProcessSection.tsx
"use client";
import { useState, useRef } from "react";
import { processSteps } from "@/data/process";
import { ProcessCard } from "./ProcessCard";
import { ProcessDetail } from "./ProcessDetail";
import { DetailModal } from "@/components/ui/DetailModal";

export function ProcessSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>(Array(6).fill(null));

  function openStep(index: number) { setSelectedIndex(index); }
  function closeModal() { setSelectedIndex(null); }
  function goNextStep() {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % processSteps.length);
  }

  const step = selectedIndex !== null ? processSteps[selectedIndex] : null;

  return (
    <>
      <section id="process" className="scroll-mt-[72px] bg-[var(--color-surface)]">
        {/* … header + card grid … */}
      </section>

      <DetailModal
        open={selectedIndex !== null}
        onClose={closeModal}
        title={step?.title ?? ""}
        labelledById="process-modal-heading"
      >
        {step && (
          <ProcessDetail
            step={step}
            headingId="process-modal-heading"
            onNextStep={goNextStep}
          />
        )}
      </DetailModal>
    </>
  );
}
```

### Pattern 2: ProcessCard — overview card with numbered circle

**What:** Renders a single step overview card. Has a filled accent-colour numbered circle, a line-art icon, bold title, short description, and "Read more →" trigger.

**Key visual differences from IntelligenceCard:**
- Numbered circle (filled `--color-accent`, white number) at top
- Arrow connector between cards (rendered by parent, not by card)
- Link copy: "Read more →" (not "Learn more →")
- No active/selected border state on overview (modal is the primary detail view)

```typescript
// Simplified anatomy
<div className="flex flex-col items-center text-center gap-4 p-6 rounded-[var(--radius-card)] border border-[var(--color-card-border)] bg-[var(--color-surface)]">
  {/* Numbered circle */}
  <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
    <span className="text-sm font-semibold text-white">{step.stepNumber}</span>
  </div>
  {/* Icon */}
  <IntelligenceIcon name={step.icon} size={48} />
  {/* Title */}
  <h3 className="text-base font-semibold leading-[1.4] text-[var(--color-ink)]">{step.title}</h3>
  {/* Description */}
  <p className="text-base font-normal leading-relaxed text-[var(--color-ink-secondary)]">{step.overviewDescription}</p>
  {/* Trigger */}
  <button ref={triggerRef} onClick={onReadMore} aria-label={`Read more about ${step.title}`}>
    Read more →
  </button>
</div>
```

### Pattern 3: ProcessDetail — modal content renderer

**What:** Renders the two-panel + bottom-bar layout inside `DetailModal`'s scroll region. Accepts `step`, `headingId`, and `onNextStep`.

**Left panel (~25%):**
- "STEP X OF 6" label (Caption, accent, uppercase)
- Large numbered circle (64×64px, filled accent)
- Large icon in `--color-accent-tint` circle
- Step title (H2, `id={headingId}`, Heading 32px/600)
- Overview description (Body 16px/400)
- Divider
- "PRIMARY OBJECTIVE" label + body (Caption + Body)
- Divider
- "EVIDENCE FIRST" box: shield icon + label (Body-Bold, accent) + body (Caption)

**Right panel (~75%):**
- "OVERVIEW" section (target icon + label + paragraph — full width of right panel)
- "WHAT WE DO" section: horizontal scrollable flex row of 6 substeps, each with icon-in-circle, arrow, title, description
- Bottom info grid (4 columns desktop, 2 tablet, 1 mobile):
  - TYPICAL INPUTS (bulleted list)
  - KEY OUTPUTS (bulleted list)
  - SUCCESS CRITERIA (bulleted list)
  - EVIDENCE & CONFIDENCE (Evidence State E0-E5 bar + Confidence Range visual)

**Bottom bar (full-width, below both panels):**
- Light-bulb icon + "WHY THIS MATTERS" label (Body-Bold, ink) + body text (Body)
- "Next Step →" pill button (filled accent bg, white text, pill radius)
  - `aria-label={`Next Step: ${nextStep.title}`}`
  - onClick: `onNextStep()`
  - At step 6: wraps to step 1 ("Discover Opportunities")

### Pattern 4: Evidence State bar

**What:** A static visual indicator showing E0–E5 levels with one cell highlighted. No JavaScript state — rendered purely from data field `evidenceState: number`.

```tsx
// Evidence State cells
{["E0","E1","E2","E3","E4","E5"].map((label, i) => (
  <div key={label} className={[
    "flex flex-col items-center gap-0.5 px-2 py-1 rounded",
    i === step.evidenceState
      ? "bg-[var(--color-accent)] text-white"
      : "bg-[var(--color-accent-tint)] text-[var(--color-ink-secondary)]"
  ].join(" ")}>
    <span className="text-xs font-semibold">{label}</span>
    <span className="text-[10px]">{evidenceLabels[i]}</span>
  </div>
))}
// Labels: Hypothesis, Weak, Limited, Moderate, Strong, Validated
```

### Pattern 5: Arrow connectors between overview cards

**What:** Simple `→` glyph rendered between each pair of cards at desktop; hidden at mobile/tablet where cards stack or scroll.

```tsx
// In the card grid, between each card:
{index < processSteps.length - 1 && (
  <div aria-hidden="true" className="hidden xl:flex items-center justify-center shrink-0 text-[var(--color-ink-secondary)] text-xl self-start mt-16">
    →
  </div>
)}
```

*Alternative: use `after:` pseudo-element on card wrapper via Tailwind. Either approach is valid; the inline element approach is simpler to implement correctly.*

### Anti-Patterns to Avoid

- **Generalising ProcessDetail and IntelligenceDetail into a shared component:** The layouts are too different (left-panel proportions, WHAT WE DO workflow, 4-column grid, bottom bar, next-step nav). A shared component would require so many conditional branches it would be harder to maintain than two separate components.
- **Making ProcessSection a Server Component with modal state:** Modal requires `useState` — it must be a client island. Keep the section header/content as much RSC-friendly as possible within that constraint.
- **Reinventing focus management:** `DetailModal` already handles it via native `<dialog>`. Do not add manual `tabIndex`, `focus()`, or portal logic.
- **Using CSS `display:none` to hide modal instead of `<dialog>`:** `<dialog>` is the inert/hidden manager; toggling display directly bypasses the browser's focus/keyboard trap.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Focus trap inside modal | Custom tab-cycle JS | Native `<dialog>.showModal()` | Browser manages inert background + focus loop correctly; already wired in `DetailModal` |
| Escape key listener | `keydown` event handler | Native `<dialog>` cancel event | Already handled by `DetailModal` via `onCancel` prop |
| Modal backdrop | Custom positioned overlay div | `::backdrop` on `<dialog>` | Already in `DetailModal` as `backdrop:bg-[...]` Tailwind class |
| Focus restore | Manual `element.focus()` on close | `DetailModal` `triggerRef` pattern | Already implemented in `DetailModal` |
| Carousel/scroll at mobile | JS-driven slide animation library | CSS `scroll-snap-type: x mandatory` | Same as Intelligence section — no library; native scroll snap |
| Icon SVGs | Custom path drawing | lucide-react (already installed) | `Telescope`, `LayoutTemplate`, `PencilRuler`, `AlertTriangle`, etc. all available |
| Evidence State bar animation | Custom JS slider | Static CSS grid with accent background | Reference shows static visual; no animation needed |

**Key insight:** Every interaction primitive (dialog, focus trap, Escape, mobile scroll) is already solved by the Phase 2 implementation. Phase 3 is 80% data + layout work, 20% interaction wiring.

---

## Common Pitfalls

### Pitfall 1: Duplicate process overview image in Process cards folder

**What goes wrong:** `docs/qiera-reference/Homepage/Process cards/3rd Section - process.png` is a copy of the main `3rd Section - process.png`. Using it as a distinct "card" reference will create confusion.  
**Why it happens:** Folder contains 7 files but only 6 are unique step cards.  
**How to avoid:** Use exactly these 6 files as step card references (in order):
1. `Discover opportunities - process.png`
2. `Identify Constraints -process.png`
3. `architect solutions - process.png`
4. `build capabilities - process.png`
5. `de-risk projects - process.png`
6. `measure impacts - process.png`

Ignore `3rd Section - process.png` in the Process cards subdirectory.

### Pitfall 2: Wrong section background colour

**What goes wrong:** Implementing the process section on the dark shell (`--color-shell`) instead of white.  
**Why it happens:** The hero and page shell are dark; it's tempting to assume continuity.  
**How to avoid:** Reference image confirms white background. Use `bg-[var(--color-surface)]` on the section, same as `IntelligenceSection`.

### Pitfall 3: "Next Step" at step 6 navigating to nothing

**What goes wrong:** Step 6's "Next Step" button is disabled or throws an index-out-of-bounds error.  
**Why it happens:** Naive `selectedIndex + 1` without wrapping.  
**How to avoid:** Use `(selectedIndex + 1) % processSteps.length`. The reference image for step 6 shows "Next Step: Discover Opportunities" — the cycle is intentional.  
**Warning signs:** Console error, disabled button, missing next step label.

### Pitfall 4: Modal `aria-labelledby` mismatch

**What goes wrong:** Modal is not announced correctly by screen readers because the `labelledById` prop passed to `DetailModal` doesn't match the `id` on the H2 in `ProcessDetail`.  
**Why it happens:** Copy-paste from Intelligence section without updating the heading ID.  
**How to avoid:** Use `labelledById="process-modal-heading"` in `ProcessSection`, and `id={headingId}` on the step title `<h2>` in `ProcessDetail`. The `headingId` prop is passed down from `ProcessSection` → `ProcessDetail`.

### Pitfall 5: Missing `scroll-mt` on section

**What goes wrong:** Hash navigation (`#process`) scrolls to the correct element, but the sticky header covers the section heading.  
**Why it happens:** Section lacks `scroll-margin-top` accounting for the 72px header.  
**How to avoid:** Add `scroll-mt-[72px]` to the section element (same as `IntelligenceSection`).

### Pitfall 6: Overview card layout breaks with connector arrows at smaller widths

**What goes wrong:** The `→` connector arrows between cards cause layout overflow or wrapping issues at 768px or 390px.  
**Why it happens:** Arrows are inline elements that don't collapse correctly when the grid switches to a scroll or stacked layout.  
**How to avoid:** Render connectors only at `xl:` breakpoint (`hidden xl:flex`). Below xl, the arrows are hidden and the cards scroll horizontally or stack.

---

## Visual Analysis: Process Overview Strip (3rd Section - process.png)

> Transcribed from direct image inspection.

**Section header:**
| Element | Copy | Style |
|---------|------|-------|
| Eyebrow | OUR PROCESS | Caption (12px/400), uppercase, letter-spacing 0.08em, `--color-accent` |
| H2 | A Proven 6-Step Methodology | Heading (32px/600/1.2), `--color-ink` |

**No subheading visible** in the overview reference — omit unless found in a higher-resolution reference.

**Cards (6, left to right):**

| # | Title | Short Description (overview card) |
|---|-------|-----------------------------------|
| 1 | Discover Opportunities | Identify high-potential opportunities based on data, market signals, customer insights, and strategic priorities. |
| 2 | Identify Constraints | Uncover the root constraints limiting growth, performance, or customer value. |
| 3 | Architect Solutions | Design tailored, high-impact solutions that directly address root causes and unlock opportunities. |
| 4 | Build Capabilities | Develop the systems, processes, tools, and assets needed to execute with excellence. |
| 5 | De-Risk Projects | Anticipate risks early, validate assumptions, and remove roadblocks before they impact results. |
| 6 | Measure Impact | Track what matters, learn continuously, and optimize to improve outcomes over time. |

**Card trigger copy:** "Read more →" (not "Learn more →" — different from Intelligence cards).

---

## Visual Analysis: Process Step Modal Cards

> Transcribed from direct inspection of all 6 card references.

### Common modal layout structure (all 6 steps)

**Left panel (~25% width, `--color-modal-left-bg` background):**
- "STEP X OF 6" label (Caption, accent, uppercase, tracking 0.1em)
- Large numbered circle (64×64px, filled `--color-accent`, white number inside, semibold)
- Icon in accent-tint circle (same icon as overview card)
- Step title: H2 (Heading 32px/600/1.2, `--color-ink`)
- Overview description (Body 16px/400/1.6, `--color-ink-secondary`)
- Divider
- "PRIMARY OBJECTIVE" label (Caption, accent) + body (Body 16px)
- Divider
- "EVIDENCE FIRST" box:
  - Shield icon (20×20, `--color-accent`)
  - "EVIDENCE FIRST" label (Caption, accent, uppercase)
  - Body text (Caption 12px)

**Right panel (~75% width, `--color-surface` background):**

*Section 1: OVERVIEW*
- Target/crosshair icon (accent) + "OVERVIEW" label (Caption, accent, uppercase)
- Overview paragraph (Body 16px/400, `--color-ink`)

*Section 2: WHAT WE DO*
- "WHAT WE DO" label (Caption, accent, uppercase)
- Horizontal row of 6 substeps (scrollable on mobile), each:
  - Icon in `--color-accent-tint` circle (40×40px)
  - → connector (hidden on mobile between steps, or overlaid)
  - Substep title (Body-Bold 16px/600, `--color-ink`)
  - Substep description (Caption 12px/400, `--color-ink-secondary`)

*Section 3: Four-column info grid*

| Column | Label | Content |
|--------|-------|---------|
| 1 | TYPICAL INPUTS | Bulleted list (5–8 items) |
| 2 | KEY OUTPUTS | Bulleted list (5–8 items) |
| 3 | SUCCESS CRITERIA | Bulleted list (4–6 items) |
| 4 | EVIDENCE & CONFIDENCE | Evidence State E0–E5 bar + Confidence Range visual |

*Each column header:* Caption (12px, accent, uppercase, with relevant icon)

**Bottom bar (full-width, `--color-accent-tint` background or subtle light bg):**
- Light-bulb icon (24×24, `--color-accent`)
- "WHY THIS MATTERS" label (Body-Bold, `--color-ink`)
- Body text (Body 16px/400, `--color-ink-secondary`)
- "Next Step →" pill button: `bg-[var(--color-accent)]`, white text, `rounded-[--radius-button]`, padding 12px 24px
  - Shows next step name (e.g. "Next Step: Identify Constraints")
  - Step 6 → "Next Step: Discover Opportunities"

### Step-by-step data summary

**Step 1: Discover Opportunities**
- Icon: `telescope` (add to IntelligenceIcon)
- Evidence State: E2 (Limited) highlighted
- Substeps: Scan & Collect Signals → Identify Patterns → Evaluate Potential → Prioritize Opportunities → Document & Frame
- Primary Objective: "Surface the right opportunities that can create meaningful business impact and align with your strategic goals."
- Evidence First: "All opportunities are grounded in verifiable evidence and transparent methodology—not assumptions or opinions."
- Why It Matters: "You can't optimize what you haven't identified. Discovering the right opportunities ensures your time, budget, and effort are invested where they can create the most value for the business and your customers."
- Next Step: Identify Constraints

**Step 2: Identify Constraints**
- Icon: `search` (already in IntelligenceIcon)
- Evidence State: E2 (Limited) highlighted
- Substeps: Map the System → Detect Constraints → Find Root Causes → Validate & Prioritize → Quantify Impact → Document Insights
- Primary Objective: "Find and validate the key constraints (limiting factors) that are preventing your business from achieving its full potential."
- Evidence First: "Constraints are identified through evidence, not assumptions. We validate root causes using data, observations, and stakeholder insights."
- Why It Matters: "Solving the wrong problem wastes time and resources. Identifying the true constraints ensures we focus on the changes that will unlock the biggest gains."
- Next Step: Architect Solutions

**Step 3: Architect Solutions**
- Icon: `layoutTemplate` (add to IntelligenceIcon — `LayoutTemplate` from lucide-react)
- Evidence State: E2 (Limited) highlighted
- Substeps: Define Solution Goals → Explore Approaches → Design Architecture → Assess Feasibility → Create Roadmap → Validate & Refine
- Primary Objective: "Create a clear, actionable solution architecture that defines the right approach, capabilities, and roadmap to deliver measurable outcomes."
- Evidence First: "Solutions are designed based on validated insights, constraints, and prioritized opportunities—not assumptions or generic frameworks."
- Why It Matters: "Well-architected solutions increase the likelihood of success by ensuring the right problems are solved with the right capabilities, in the right way, at the right time."
- Next Step: Build Capabilities

**Step 4: Build Capabilities**
- Icon: `boxes` (already in IntelligenceIcon)
- Evidence State: E3 (Moderate) highlighted
- Substeps: Define Capability Needs → Design Operating Model → Build & Configure → Enable & Train → Test & Validate → Operationalize
- Primary Objective: "Build the right capabilities that enable your team and organization to deliver results consistently and at scale."
- Evidence First: "Capabilities are built based on validated requirements and proven best practices—not assumptions or generic templates."
- Why It Matters: "Strong capabilities turn plans into performance. Investing in the right capabilities ensures your organization has the foundation to execute today and adapt for tomorrow."
- Next Step: De-Risk Projects

**Step 5: De-Risk Projects**
- Icon: `shield` (already in IntelligenceIcon as "shield" → `ShieldCheck`)
- Evidence State: E3 (Moderate) highlighted
- Substeps: Identify Risks → Assess & Prioritize → Validate Assumptions → Develop Mitigations → Test & De-Risk → Go / No-Go Decision
- Primary Objective: "Reduce uncertainty and increase the likelihood of success by proactively identifying, assessing, and mitigating risks."
- Evidence First: "Risk decisions are based on evidence, scenario analysis, and real-world data—not assumptions or optimism bias. We test what matters before we invest further."
- Why It Matters: "De-risking early prevents costly surprises, accelerates execution, and builds stakeholder confidence. It's how we increase the odds of success—before we commit fully."
- Next Step: Measure Impact

**Step 6: Measure Impact**
- Icon: `trendingUp` (already in IntelligenceIcon as "trend" → `TrendingUp`)
- Evidence State: E3 (Moderate) highlighted
- Substeps: Define What Matters → Collect & Validate Data → Analyze Performance → Quantify Impact → Generate Insights → Iterate & Improve
- Primary Objective: "Quantify outcomes, validate value creation, and learn what to scale, adjust, or stop."
- Evidence First: "Impact is measured using verified data, defined metrics, and transparent methodology—never assumptions or anecdotal evidence."
- Why It Matters: "You can't improve what you don't measure. Measuring impact proves value, builds trust, and ensures we invest in what works more—and less in what doesn't."
- Next Step: Discover Opportunities (wraps to step 1)

---

## TypeScript Type Contract

```typescript
// src/types/process.ts

export type ProcessSubstep = {
  /** IntelligenceIcon name */
  icon: string;
  title: string;
  description: string;
};

export type ProcessStep = {
  id: string;                    // e.g. "discover"
  stepNumber: number;            // 1–6
  title: string;                 // "Discover Opportunities"
  /** IntelligenceIcon name — same as overview card */
  icon: string;
  /** Short paragraph for overview card (below title) */
  overviewDescription: string;
  /** PRIMARY OBJECTIVE body */
  primaryObjective: string;
  /** EVIDENCE FIRST body */
  evidenceFirst: string;
  /** OVERVIEW section paragraph */
  overview: string;
  /** WHAT WE DO: 6 substeps */
  whatWeDo: ProcessSubstep[];
  typicalInputs: string[];
  keyOutputs: string[];
  successCriteria: string[];
  /** Index 0–5 indicating which E-level is highlighted (E0=Hypothesis … E5=Validated) */
  evidenceState: number;
  /** WHY THIS MATTERS body */
  whyItMatters: string;
  /** Next step title for the "Next Step →" button label */
  nextStepTitle: string;
};
```

---

## New lucide-react Icons Required

The following icon names must be added to `IntelligenceIcon.tsx`:

| Icon Name (key) | lucide-react export | Used For |
|-----------------|---------------------|----------|
| `telescope` | `Telescope` | Step 1 Discover overview + modal |
| `layoutTemplate` | `LayoutTemplate` | Step 3 Architect overview + modal |
| `target` | `Target` | Already in icons ✓ | OVERVIEW section icon |
| `lightbulb` | `Lightbulb` | WHY THIS MATTERS icon |
| `fileCheck` | `FileCheck` | Document substep icons |
| `clipboardList` | `ClipboardList` | TYPICAL INPUTS / KEY OUTPUTS column icon |
| `trophy` | `Trophy` | SUCCESS CRITERIA column icon |
| `crosshair` | `Crosshair` | OVERVIEW section icon (alternative) |

> **Note:** `Telescope`, `LayoutTemplate`, `Lightbulb`, `FileCheck`, `ClipboardList`, `Trophy`, `Crosshair` all exist in lucide-react 1.24.0 [VERIFIED: runtime check via `require('./node_modules/lucide-react')`]. Existing icons `Search`, `Boxes`, `ShieldCheck`, `TrendingUp`, `Target`, `AlertTriangle`, `CheckCircle2` already cover other needed icons.

---

## Code Examples

### Verified reuse: DetailModal (no changes needed)

```typescript
// Source: src/components/ui/DetailModal.tsx (existing Phase 2 component)
<DetailModal
  open={selectedIndex !== null}
  onClose={closeModal}
  title={step?.title ?? ""}
  labelledById="process-modal-heading"
>
  {step && (
    <ProcessDetail
      step={step}
      headingId="process-modal-heading"
      onNextStep={goNextStep}
    />
  )}
</DetailModal>
```

### Evidence State E0–E5 bar pattern

```typescript
// Source: visual inspection of process card references [ASSUMED layout — correct after 1440 screenshot]
const EVIDENCE_LABELS = ["Hypothesis", "Weak", "Limited", "Moderate", "Strong", "Validated"];

{EVIDENCE_LABELS.map((label, i) => (
  <div
    key={label}
    className={[
      "flex flex-col items-center gap-0.5 rounded px-2 py-1",
      i === step.evidenceState
        ? "bg-[var(--color-accent)] text-white"
        : "bg-[var(--color-accent-tint)] text-[var(--color-ink-secondary)]",
    ].join(" ")}
  >
    <span className="text-xs font-semibold">{`E${i}`}</span>
    <span className="text-[10px] text-center">{label}</span>
  </div>
))}
```

### Next Step button pattern

```typescript
// Source: visual inspection [ASSUMED — correct after screenshot comparison]
<button
  type="button"
  onClick={onNextStep}
  aria-label={`Next Step: ${step.nextStepTitle}`}
  className="flex items-center gap-2 rounded-[var(--radius-button)] bg-[var(--color-accent)] px-6 py-3 text-base font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2"
>
  <span aria-hidden="true">→</span>
  <span>Next Step</span>
  <span className="font-normal">{step.nextStepTitle}</span>
</button>
```

### Horizontal substep flow (WHAT WE DO)

```typescript
// Source: visual inspection — steps connected by → arrows, scrollable on mobile [ASSUMED]
<div className="flex gap-4 overflow-x-auto [scroll-snap-type:x_mandatory] md:overflow-x-visible">
  {step.whatWeDo.map((substep, i) => (
    <div key={substep.title} className="flex shrink-0 items-start gap-3 [scroll-snap-align:start]">
      <div className="flex flex-col items-center gap-2 w-32">
        <div className="w-10 h-10 rounded-full bg-[var(--color-accent-tint)] flex items-center justify-center">
          <IntelligenceIcon name={substep.icon} size={20} />
        </div>
        <span className="text-base font-semibold text-[var(--color-ink)] text-center">{substep.title}</span>
        <span className="text-xs text-[var(--color-ink-secondary)] text-center">{substep.description}</span>
      </div>
      {i < step.whatWeDo.length - 1 && (
        <span aria-hidden="true" className="mt-4 shrink-0 text-[var(--color-ink-secondary)]">→</span>
      )}
    </div>
  ))}
</div>
```

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Custom portal + focus-trap lib | Native `<dialog>` + `showModal()` | Browsers 2022+ | Zero dependencies; browser-managed inert/focus/Escape |
| Heroicons / react-icons | lucide-react | Project Phase 1 setup | Single icon library; consistent `strokeWidth` |
| Page Router | App Router | Next.js 13+ | Server Components default; `"use client"` islands only |

**Deprecated/outdated in this project:**
- `React.createPortal` for modals: Not needed — `<dialog>` handles stacking context natively
- `useEffect` Escape keydown listener: `<dialog>` fires `cancel` event natively (already handled by `DetailModal`)

---

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | Process section background is `--color-surface` (#FFFFFF) | Visual Analysis | Visual mismatch; easy to correct after screenshot |
| A2 | Left panel is ~25% width, right panel ~75% | Visual Analysis | Layout mismatch; correct from 1440 screenshot |
| A3 | Evidence State bar uses same accent fill for highlighted cell | Code Examples | Minor visual difference; low impact |
| A4 | Bottom "WHY THIS MATTERS" bar uses `--color-accent-tint` background | Visual Analysis | Colour mismatch; correct after screenshot |
| A5 | WHAT WE DO substep icons are ~40×40px circles with `--color-accent-tint` | Code Examples | Proportion mismatch; correct after screenshot |
| A6 | No section subheading below "A Proven 6-Step Methodology" | Visual Analysis (overview) | Missing copy if subheading exists in higher-res source |
| A7 | Card layout at 768px: 3-column × 2-row grid or horizontal scroll | Responsive | Implementer decision — screenshot proof required |
| A8 | Numbered circle in overview card is 32×32px | Visual Analysis | Proportion mismatch; low impact |

---

## Open Questions

1. **Is there a section subheading below "A Proven 6-Step Methodology"?**
   - What we know: Not visible in the reference image at current resolution
   - What's unclear: May be present but very light/small
   - Recommendation: Implement without subheading; add if screenshot comparison reveals a gap

2. **Overview card: centered or left-aligned text?**
   - What we know: Reference appears to show left-aligned text and left-aligned numbered circle
   - What's unclear: Card could be centered at desktop if the column is narrow enough
   - Recommendation: Default to left-aligned (consistent with Intelligence cards); adjust if 1440 screenshot shows centered

3. **Confidence Range slider: static or interactive?**
   - What we know: Appears as a static visual in all card references (dot on a line)
   - What's unclear: Whether it is interactive
   - Recommendation: Render as a static visual (non-interactive, decorative) — no `<input type="range">`

---

## Environment Availability

> Step 2.6: Dependencies are all pre-existing — no new external tools required.

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js | Next.js dev server | ✓ | project runtime | — |
| lucide-react | ProcessIcon lookup | ✓ | 1.24.0 | — |
| Vitest | Process tests | ✓ | ^4.1.10 | — |
| @testing-library/react | Process tests | ✓ | ^16.3.2 | — |
| next/image | Reference assets (if any) | ✓ | project | — |

**Missing dependencies with no fallback:** None.  
**Missing dependencies with fallback:** None.

---

## Validation Architecture

> `workflow.nyquist_validation: true` — section included.

### Test Framework

| Property | Value |
|----------|-------|
| Framework | Vitest ^4.1.10 + @testing-library/react ^16.3.2 |
| Config file | `vitest.config.mts` (exists at project root) |
| Quick run command | `npm test -- --reporter=dot` |
| Full suite command | `npm test` |

### Phase Requirements → Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| HOME-05 | 6 "Read more" buttons render (one per step) | unit | `npm test -- ProcessSection` | ❌ Wave 0 |
| HOME-05 | Clicking step 1 "Read more" opens modal with correct title | unit | `npm test -- ProcessSection` | ❌ Wave 0 |
| HOME-05 | No 7th step rendered | unit | `npm test -- ProcessSection` | ❌ Wave 0 |
| HOME-05 | "Next step" control inside modal advances to step 2 content | unit | `npm test -- ProcessSection` | ❌ Wave 0 |
| HOME-09 | Escape closes modal | unit | `npm test -- ProcessSection` | ❌ Wave 0 |
| HOME-09 | Focus restores to trigger button on modal close | unit | `npm test -- ProcessSection` | ❌ Wave 0 |

> **Note:** `DetailModal` HOME-09 behaviours (Escape, focus restore, close button) are already covered by `DetailModal.test.tsx`. Phase 3 tests verify the ProcessSection integration layer and the "Next Step" control — behaviours unique to this phase.

### Sampling Rate

- **Per task commit:** `npm test -- ProcessSection`
- **Per wave merge:** `npm test`
- **Phase gate:** Full suite green before `/gsd-verify-work`

### Wave 0 Gaps

- [ ] `src/components/sections/ProcessSection.test.tsx` — covers HOME-05 (6 cards, open modal, next step, no 7th step) and HOME-09 integration (Escape, focus restore)
- [ ] All test infrastructure (vitest, testing-library) already installed — no setup gap

---

## Security Domain

> `security_enforcement` not explicitly set to `false` — section included.

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V2 Authentication | no | N/A — static marketing section |
| V3 Session Management | no | N/A |
| V4 Access Control | no | N/A |
| V5 Input Validation | no | No user input in Phase 3 |
| V6 Cryptography | no | N/A |

**No security controls are applicable.** Phase 3 is purely a static display + modal interaction layer with no user input, no data mutation, and no authentication. All data is typed and hardcoded in `src/data/process.ts`.

---

## Sources

### Primary (HIGH confidence)

- Direct visual inspection of `docs/qiera-reference/Homepage/3rd Section - process.png` — overview layout, copy, card structure
- Direct visual inspection of all 6 process card modal references — left/right panel anatomy, section labels, copy, evidence state values, next-step links
- `src/components/ui/DetailModal.tsx` (project source) — confirmed reuse contract
- `src/components/sections/IntelligenceSection.tsx` (project source) — confirmed modal state pattern
- `src/components/ui/IntelligenceIcon.tsx` (project source) — confirmed icon extension approach
- `src/app/globals.css` (project source) — confirmed all needed tokens already declared
- `npm view lucide-react version` output — confirmed 1.24.0 installed [VERIFIED]
- `require('./node_modules/lucide-react')` runtime check — confirmed `Telescope`, `LayoutTemplate`, `Lightbulb` exist [VERIFIED]

### Secondary (MEDIUM confidence)

- `.planning/DECISIONS.md` — locked decision #4 (modal only, no routes), #1 (6 steps only)
- `.planning/phases/02-hero-intelligence/02-UI-SPEC.md` — typography scale, spacing tokens, modal dimensions

### Tertiary (LOW confidence)

- None — no claims rely solely on unverified sources.

---

## Metadata

**Confidence breakdown:**

| Area | Level | Reason |
|------|-------|--------|
| Standard stack | HIGH | All from existing project — no new packages |
| Process overview layout | HIGH | Reference image directly inspected |
| Process modal layout | HIGH | All 6 card references directly inspected |
| Data content (copy) | HIGH | Transcribed from references; marked ASSUMED where text was unclear |
| Responsive behaviour at 768/390 | MEDIUM | No tablet/mobile process references; implementer decision within established patterns |
| Evidence State bar dimensions | ASSUMED | Visual approximation from references |

**Research date:** 2026-07-11  
**Valid until:** 2026-09-11 (stable stack; lucide-react minor updates only)
