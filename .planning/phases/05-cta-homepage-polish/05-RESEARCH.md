# Phase 5: CTA, Nav Wiring & Homepage Polish - Research

**Researched:** 2026-07-11  
**Domain:** Next.js App Router · TypeScript · Tailwind v4 · sticky hash nav · derived Final CTA  
**Confidence:** HIGH

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

#### Copy fidelity (user lock)
- **D-01:** All new visible Final CTA strings must be **word-for-word from `docs/qiera-reference/` images**. Do not invent, paraphrase, or “improve” copy.
- **D-02:** Homepage polish must **keep existing transcribed texts unchanged** (Hero, Intelligence, Process, Solutions, Leverages, Header/Footer labels already locked). Polish geometry/spacing/wiring only unless a string is proven wrong vs its source PNG.
- **D-03:** Unreadable strings → `// TODO: unreadable` + question — never guess.

#### Final CTA copy sources (no dedicated Final CTA PNG)
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

#### Final CTA layout / visual (Claude discretion)
- **D-07:** Dark band using `--color-shell` (same family as Header/Footer/Hero), not a new purple-gradient system unless a dedicated ref appears.
- **D-08:** Reuse existing `Button` `primary` + `secondary` variants (HOME-08).
- **D-09:** Desktop: horizontal split — copy block left, CTA cluster right; mobile: stacked, centered or left-aligned consistently with Hero rhythm.
- **D-10:** Section `id="final-cta"` + `scroll-mt` matching other homepage sections; data in `src/data/final-cta.ts` (+ thin type in `src/types/` if needed).
- **D-11:** Decorative extras (waves, stripes) only if clearly present in a Final CTA ref — none today → **omit**.

#### Hash / sticky nav (Claude discretion)
- **D-12:** Keep existing hash hrefs in `navigation.ts`: `/#intelligence`, `/#process`, `/#solutions`, `/#leverages`.
- **D-13:** Verify sticky header offset: measure real header height; keep or adjust `scroll-mt-[72px]` so targets aren’t hidden. Prefer one shared token/utility if drift appears.
- **D-14:** No scroll-spy / active-nav-on-scroll in this phase (defer).
- **D-15:** Smoke-test in-page hash clicks from Header + Footer + MobileNav; Logo may link `/` (existing pattern).

#### Homepage polish scope (Claude discretion)
- **D-16:** Wire order: Header → Hero → Intelligence → Process → Solutions → Leverages → **Final CTA** → Footer.
- **D-17:** Visual pass = composed homepage at 1440 / 1280 / 768 / 390 — major width/height/grid/alignment issues between sections only; do not redesign approved section interiors.
- **D-18:** 768px header CTA crowding remains Phase 9 (DECISIONS #15).

### Claude's Discretion
Layout density, exact padding scale, whether to show eyebrow and/or “Takes less than 2 minutes” caption, and shared `scroll-mt` token naming — choose for visual fidelity to shell + Audit/Hero CTA treatments without inventing copy.

**UI-SPEC resolution:** Include **both** eyebrow and caption (05-UI-SPEC Copywriting Contract).

### Deferred Ideas (OUT OF SCOPE)
- Dedicated Final CTA PNG transcription (swap strings if supplied later)
- Scroll-spy active nav state
- Purple-gradient / wavy Final CTA chrome from other QIERA repos (not in this SoT)
- 768px header crowding (Phase 9)
- Form page `/start-intelligence-audit` implementation (Phase 7) — band only links there
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| HOME-01 | Homepage includes Header, Hero, Intelligence, Process, Solutions, Leverages, Final CTA, Footer in that order | Wire `FinalCtaSection` in `page.tsx` after Leverages; Header/Footer already in `layout.tsx` |
| HOME-02 | Section IDs `intelligence`, `process`, `solutions`, `leverages` support hash navigation with sticky-header offset | IDs + `scroll-mt-[72px]` exist; measure header; optional `--header-scroll-offset` unify; Vitest hash smoke |
| HOME-08 | Final CTA is a derived dark band using primary/secondary button styles; copy lives in typed data | New RSC + `final-cta.ts`; reuse `Button`; shell bg; no new packages |
</phase_requirements>

---

## Summary

Phase 5 closes the homepage composition: a **derived** Final CTA dark band (no dedicated PNG), sticky-header hash polish, and a composed visual pass. The stack is already complete — Next.js App Router, Tailwind v4 tokens, `Button` primary/secondary, Vitest + Testing Library. **No new npm packages.**

Today `page.tsx` ends at Leverages; Header/Footer wrap via layout. Section anchors `intelligence` / `process` / `solutions` / `leverages` already use `scroll-mt-[72px]`. Nav hash hrefs in `navigation.ts` already match. Final CTA must use only the locked Audit + Hero/Header strings (UI-SPEC includes eyebrow + caption).

**Primary recommendation:** Add `FinalCtaSection` (RSC) + `src/data/final-cta.ts` (+ thin type); wire after Leverages; verify/unify `scroll-mt`; smoke-test hash hrefs and CTA links with existing Vitest stack.

---

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Final CTA band (copy + buttons) | Frontend Server (RSC) | — | Static typed data; no client state |
| Homepage section order | Frontend Server (RSC) | — | Compose in `page.tsx` + layout shell |
| Hash targets + `scroll-mt` | Browser / Client (CSS) | CDN / Static | Native hash scroll + scroll-margin; no JS spy |
| Sticky Header | Browser / Client (CSS) | Frontend Server | Existing sticky `header`; measure height for offset |
| CTA / hash smoke tests | Browser / Client (jsdom) | — | Vitest + Testing Library already wired |

---

## Project Constraints (from .cursor/rules/)

From `qiera-visual-fidelity.mdc` (actionable for this phase):

- Reference images under `docs/qiera-reference/` are visual SoT — do not invent/redesign.
- Transcribe visible text carefully; unclear → question, never guess.
- Stack: Next.js App Router, TypeScript, Tailwind, RSC default, no extra styling frameworks, no unnecessary libraries.
- Architecture: routes in `src/app`, components in `src/components`, data in `src/data`, utils in `src/lib`.
- Semantic section IDs + sticky-header `scroll-margin-top`.
- Do not commit code (user commits manually) — matches `commit_docs: false`.
- Verification: lint, tsc, tests, screenshots vs refs, honest remaining diffs.
- Responsive minimums include 1440 / 1280 / 768 / 390 (Phase 5 ROADMAP widths).

---

## Standard Stack

### Core — already installed, no new installs

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js App Router | 16.2.10 [VERIFIED: package.json] | RSC page + layout | Project scaffold |
| React | 19.2.4 [VERIFIED: package.json] | UI | Locked stack |
| TypeScript | ^5 [VERIFIED: package.json] | Typed `final-cta` data | FOUND-01 |
| Tailwind CSS v4 | ^4 [VERIFIED: package.json] | Shell tokens + layout | FOUND-02 |
| Vitest | ^4.1.10 [VERIFIED: package.json] | Unit/smoke tests | Existing `npm test` |
| @testing-library/react | ^16.3.2 [VERIFIED: package.json] | Component assertions | Existing section tests |

### No new packages needed

All Phase 5 work is composition, CSS tokens, and tests on the current stack.

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Derived Audit copy | Invent marketing CTA copy | Forbidden by D-01 / visual-fidelity |
| New CTA component library | Existing `Button` | HOME-08 + D-08 lock reuse |
| JS scroll-spy / smooth-scroll polyfill | CSS `scroll-mt` (+ optional `scroll-behavior` behind reduced-motion) | D-14 forbids spy; keep CSS-only |
| Client Final CTA | RSC | No interaction beyond `<a>` |

**Installation:** None.

---

## Package Legitimacy Audit

> No new packages are installed in Phase 5.

**Packages removed due to slopcheck [SLOP] verdict:** none  
**Packages flagged as suspicious [SUS]:** none

---

## Architecture Patterns

### System Architecture Diagram

```
Browser hash click (Header / Footer / MobileNav)
        │  href="/#intelligence" etc.  [existing navigation.ts]
        ▼
Sticky Header (layout) ── obscures top of viewport
        │
        ▼
<main> page.tsx
  Hero → Intelligence → Process → Solutions → Leverages → FinalCtaSection → (Footer in layout)
        │
        └─ #intelligence|#process|#solutions|#leverages|#final-cta
             each: scroll-mt clears header height
```

Data flow:

```
src/data/final-cta.ts  →  FinalCtaSection (RSC)  →  Button primary + secondary
src/data/navigation.ts →  Header / Footer / MobileNav (unchanged copy)
```

### Recommended Project Structure

```
src/
├── types/
│   └── final-cta.ts              # NEW — thin FinalCtaContent type (optional if colocated)
├── data/
│   └── final-cta.ts              # NEW — locked strings + hrefs
├── components/sections/
│   ├── FinalCtaSection.tsx       # NEW — RSC dark band
│   └── FinalCtaSection.test.tsx  # NEW — copy/href/id smoke
├── app/
│   ├── page.tsx                  # EDIT — import + render after Leverages
│   └── globals.css               # EDIT optional — --header-scroll-offset + smooth scroll
```

### Pattern 1: Typed section data + RSC (match prior phases)

**What:** Export a const object from `src/data/`; render in a Server Component; reuse `Button`.  
**When:** Static marketing sections with no local state.  
**Example:**

```tsx
// Conceptual — strings must match CONTEXT D-03 / UI-SPEC exactly
import { Button } from "@/components/ui/Button";
import { finalCta } from "@/data/final-cta";

export function FinalCtaSection() {
  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-heading"
      className="scroll-mt-[var(--header-scroll-offset,72px)] bg-[var(--color-shell)]"
    >
      {/* eyebrow, h2#final-cta-heading, body, Button primary+secondary, caption */}
    </section>
  );
}
```

### Pattern 2: Optional shared scroll offset token

**What:** If measuring Header shows `72px` is wrong or drift appears across sections, define `--header-scroll-offset: 72px` in `globals.css` and use `scroll-mt-[var(--header-scroll-offset)]` on all five hash targets.  
**When:** D-13 — only if needed; do not churn four files if `72px` already clears sticky header.

### Anti-Patterns to Avoid

- **Inventing Final CTA copy** — only locked table strings.
- **Using `Start My Intelligence Audit`** — form-only label (D-05).
- **Purple-gradient / wave decorations** — no Final CTA ref (D-11).
- **`"use client"` on Final CTA** — links only; stay RSC.
- **Editing approved Hero/Intelligence/Process/Solutions/Leverages copy** — D-02.
- **Fixing 768 header crowding** — Phase 9 (D-18).

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Primary/secondary CTA chrome | Custom button CSS | Existing `Button` | HOME-08; arrow + focus already correct |
| Hash scroll offset | JS scrollIntoView hacks | CSS `scroll-mt` (+ optional CSS var) | Native, a11y-friendly, matches Phases 2–4 |
| Smooth scroll | Scroll libraries | Optional `html { scroll-behavior }` + `prefers-reduced-motion` | UI-SPEC; zero deps |
| Active nav on scroll | IntersectionObserver spy | Nothing this phase | D-14 deferred |

**Key insight:** Phase 5 is wiring and fidelity, not new infrastructure.

---

## Current Codebase State [VERIFIED: codebase]

| Item | State |
|------|--------|
| Final CTA | **Absent** — no `FinalCta*`, no `final-cta` data |
| `page.tsx` | Hero → Intelligence → Process → Solutions → Leverages only |
| Layout | `Header` + `<main>{children}</main>` + `Footer` |
| Section IDs | `intelligence`, `process`, `solutions`, `leverages` present |
| `scroll-mt` | `scroll-mt-[72px]` on those four sections |
| `navigation.ts` | `/#intelligence` … `/#leverages`; CTA → `/start-intelligence-audit`; Contact → `/contact` |
| `Button` | `primary` (accent + →) / `secondary` (accent border/50 + accent text); focus ring offset shell |
| `globals.css` | Shell tokens present; **no** `--header-scroll-offset`; **no** `scroll-behavior` |
| Tests | Vitest + RTL; `navigation.test.ts` already locks CTA/Contact spelling |

Header sticky: `sticky top-0 z-40` + `py-6` container — `72px` is a plausible offset; **measure** at 1440/768/390 before changing. [VERIFIED: Header.tsx]

---

## Common Pitfalls

### Pitfall 1: Inventing copy
**What goes wrong:** Paraphrased headline/body that isn’t in refs.  
**How to avoid:** Copy paste from CONTEXT D-03 / UI-SPEC table only.  
**Warning signs:** Strings not findable in Audit/Hero/Header PNGs.

### Pitfall 2: Sticky header covers section titles
**What goes wrong:** Hash land with H2 under sticky header.  
**How to avoid:** Measure header height; keep or bump shared `scroll-mt`; screenshot `/#intelligence`.  
**Warning signs:** Title clipped under header in `hash-intelligence-1440.png`.

### Pitfall 3: Secondary button contrast on dark shell
**What goes wrong:** `border-accent/50` looks washed on `#000310`.  
**How to avoid:** Screenshot Final CTA; if weak, bump border opacity only (UI-SPEC) — no new hex.  
**Warning signs:** Outline invisible in `final-cta-1440.png`.

### Pitfall 4: Wrong primary label (`Start My Intelligence Audit`)
**What goes wrong:** Form-page label leaks onto homepage band (D-05).  
**How to avoid:** Assert exact `Start Intelligence Audit` in data + test (`Button` still appends →).  
**Warning signs:** Test or screenshot shows “My”.

### Pitfall 5: Changing approved section copy during polish
**What goes wrong:** “Cleanup” rewrites Hero/cards.  
**How to avoid:** Scope polish to geometry/wiring between sections only (D-02, D-17).  
**Warning signs:** Diffs in `src/data/intelligence|process|solutions|leverages.ts` or Hero strings.

### Pitfall 6: Treating 768 header crowding as Phase 5
**What goes wrong:** Time spent on dense header at tablet.  
**How to avoid:** Note and defer to Phase 9 (D-18 / DECISIONS #15).  
**Warning signs:** Header.tsx layout refactors in this phase.

---

## Code Examples

### Final CTA data shape (from UI-SPEC)

```ts
// src/data/final-cta.ts — exact strings from CONTEXT D-03
export const finalCta = {
  eyebrow: "START AN INTELLIGENCE AUDIT",
  title: "Begin with clarity. Grow with intelligence.",
  body: "Our Intelligence Audit identifies what's holding your eCommerce growth back, uncovers your highest-impact opportunities, and gives you a clear roadmap for what to do next.",
  primary: { label: "Start Intelligence Audit", href: "/start-intelligence-audit" },
  secondary: { label: "Contact", href: "/contact" },
  caption: "Takes less than 2 minutes",
} as const;
```

### Hash smoke (extend existing patterns)

```ts
// Assert nav hashes match section IDs + Final CTA links
import { primaryNav, primaryCta } from "@/data/navigation";
import { finalCta } from "@/data/final-cta";

test("hash nav targets exist as section ids", () => {
  expect(primaryNav.map((i) => i.href)).toEqual(
    expect.arrayContaining([
      "/#intelligence",
      "/#process",
      "/#solutions",
      "/#leverages",
    ]),
  );
});

test("final CTA links resolve to locked routes", () => {
  expect(finalCta.primary).toEqual({
    label: "Start Intelligence Audit",
    href: "/start-intelligence-audit",
  });
  expect(finalCta.secondary).toEqual({ label: "Contact", href: "/contact" });
  expect(finalCta.primary.label).not.toMatch(/My Intelligence Audit/);
  expect(primaryCta.href).toBe(finalCta.primary.href);
});
```

Render `FinalCtaSection` and assert `id="final-cta"`, heading text, and both link `href`s via `getByRole("link", …)` — same style as `Footer.test.tsx` / section id tests.

### Optional smooth scroll [CITED: MDN scroll-behavior / prefers-reduced-motion]

```css
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}
```

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Dedicated Final CTA PNG | Derived band from Audit + Hero/Header strings | PROJECT / CONTEXT 2026-07 | Copy locked to table; layout from shell |
| Invented CTA marketing | Transcription-only | visual-fidelity rule | No paraphrase |

**Deprecated/outdated:** N/A for this phase.

---

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | Final CTA vertical padding 48px md / 64px lg | UI-SPEC Spacing | Adjust after screenshot compare |
| A2 | H2 28px md / 32px lg | UI-SPEC Typography | Visual tweak only |
| A3 | Caption ~14px muted secondary | UI-SPEC Typography | Visual tweak only |
| A4 | `--header-scroll-offset: 72px` if unifying | UI-SPEC Hash | Keep literal `72px` if measure confirms |
| A5 | Borrowing Audit page headline/body onto homepage Final CTA is acceptable | CONTEXT uncertainty #1 | User may supply dedicated PNG later (D-06) |

**Locked (not assumed):** Exact copy strings, hrefs, shell bg, Button reuse, include eyebrow+caption (UI-SPEC), no new packages.

---

## Open Questions

1. **Dedicated Final CTA PNG later?**  
   - What we know: Derived copy locked for now (D-03/D-06).  
   - Recommendation: Implement derived band; swap strings if PNG arrives — keep layout tokens.

2. **Is 72px still correct after Logo/tagline?**  
   - What we know: Four sections use it; Header uses `py-6`.  
   - Recommendation: Measure in browser at Phase 5 widths; unify only if wrong.

---

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js | Next / Vitest | ✓ | v22.13.0 | — |
| npm | scripts | ✓ | 10.9.2 | — |
| Vitest + RTL | Hash/CTA smoke | ✓ | in package.json | — |
| Dev browser / screenshots | Visual pass | ✓ (local) | — | Manual capture |

**Missing dependencies with no fallback:** none  
Step 2.6: No new external services — existing toolchain only.

---

## Validation Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | Vitest ^4.1.10 + @testing-library/react ^16.3.2 |
| Config file | `vitest.config.mts` |
| Quick run command | `npm test` |
| Full suite command | `npm test` |

### Phase Requirements → Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| HOME-08 | Final CTA exact copy, primary/secondary hrefs, `id=final-cta`, no “My” label | unit | `npm test -- FinalCtaSection` | ❌ Wave 0 |
| HOME-08 | `final-cta` data matches locked strings | unit | `npm test -- final-cta` | ❌ Wave 0 |
| HOME-02 | `primaryNav` hashes remain `/#intelligence`…`/#leverages` | unit | `npm test -- navigation` | ✅ extend |
| HOME-02 | Section components expose matching `id` + scroll-mt class/token | unit | existing section id tests + Final CTA | ✅ partial |
| HOME-01 | `page.tsx` renders Final CTA after Leverages | unit/smoke | render Home or static import order check | ❌ Wave 0 |
| HOME-02 | Sticky offset visually correct | manual screenshot | `hash-intelligence-1440.png` | manual |
| HOME-01/08 | Composed geometry | manual screenshot | homepage + final-cta crops per UI-SPEC | manual |

### Sampling Rate

- **Per task commit:** `npm test`
- **Per wave merge:** `npm test` + lint/tsc as project norms
- **Phase gate:** Suite green + screenshots vs shell/Audit/Hero refs before `/gsd-verify-work`

### Wave 0 Gaps

- [ ] `src/components/sections/FinalCtaSection.test.tsx` — HOME-08 copy/href/id
- [ ] Optional `src/data/final-cta.test.ts` — locked string regression
- [ ] Optional homepage order smoke if easy without heavy layout mocks
- [ ] Framework install: **none** — Vitest already present

---

## Security Domain

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V2 Authentication | no | — |
| V3 Session Management | no | — |
| V4 Access Control | no | — |
| V5 Input Validation | minimal | Static typed hrefs only; no user input this phase |
| V6 Cryptography | no | — |

### Known Threat Patterns for static marketing CTA

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Open redirect via CTA href | Spoofing | Hardcode `/start-intelligence-audit` and `/contact` in data; tests lock values |
| XSS via copy injection | Tampering | Static TS strings, no `dangerouslySetInnerHTML` |

---

## Sources

### Primary (HIGH confidence)
- `.planning/phases/05-cta-homepage-polish/05-CONTEXT.md` — locked decisions D-01–D-18
- `.planning/phases/05-cta-homepage-polish/05-UI-SPEC.md` — layout/copy/hash contract
- `.planning/REQUIREMENTS.md` — HOME-01, HOME-02, HOME-08
- `.planning/ROADMAP.md` — Phase 5 acceptance + screenshot widths
- `.planning/DECISIONS.md` — #3, #13–15
- Codebase: `page.tsx`, `Button.tsx`, `navigation.ts`, `Header.tsx`, `Footer.tsx`, `Hero.tsx`, `globals.css`, section `scroll-mt` usages
- `package.json` — dependency versions
- `.cursor/rules/qiera-visual-fidelity.mdc` — transcription + stack constraints

### Secondary (MEDIUM confidence)
- Prior phase pattern: `.planning/phases/03-process/03-RESEARCH.md` (structure reference; Phase 5 kept shorter)

### Tertiary (LOW confidence)
- Assumed padding/type scales flagged in UI-SPEC (A1–A3)

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — no new deps; versions from package.json
- Architecture: HIGH — matches Phases 1–4 RSC + data pattern; codebase state verified
- Pitfalls: HIGH — drawn from CONTEXT/UI-SPEC locks + measured current gaps

**Research date:** 2026-07-11  
**Valid until:** 2026-08-10 (stable marketing-site phase; re-check if Final CTA PNG is supplied)
