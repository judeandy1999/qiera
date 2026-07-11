---
phase: 01-foundation-shell
plan: 04
subsystem: layout-shell
tags: [header, footer, mobile-nav, native-dialog, tailwind-v4, rsc]

requires: [01-02, 01-03]
provides:
  - Header (sticky RSC, desktop nav + CTA + MobileNav mount)
  - Footer (RSC, nav parity + legal + © 2026 copyright)
  - MobileNav (client island, native <dialog> mobile menu)
affects: [01-05]

tech-stack:
  added: []
  patterns:
    - "Header/Footer are pure RSCs (no 'use client') consuming the single-source src/data/navigation.ts — the mechanism that guarantees zero nav drift between them"
    - "MobileNav is the only Client Component in the layout tree, built on native <dialog>/showModal()/close() with zero hand-rolled focus-trap or keydown listeners"
    - "jsdom-only <dialog> polyfill added to the Vitest setup file (not production code) since jsdom does not implement showModal()/close()/Escape-cancel at all"

key-files:
  created:
    - src/components/layout/Header.tsx
    - src/components/layout/Footer.tsx
    - src/components/layout/Footer.test.tsx
    - src/components/layout/MobileNav.tsx
    - src/components/layout/MobileNav.test.tsx
    - src/test/setup.ts
  modified:
    - vitest.config.mts

key-decisions:
  - "Header renders Logo without the tagline (mark + wordmark only); Footer renders <Logo showTagline /> — per 01-03-SUMMARY.md's recommendation and UI-SPEC, which only mandates the tagline in the Footer's Row 1."
  - "[Rule 3] Wired @testing-library/jest-dom's matchers (toBeInTheDocument, toBeVisible) via a new src/test/setup.ts + vitest.config.mts setupFiles entry — jest-dom was already a devDependency but had never been registered with Vitest, so TypeScript had no matcher types and tests could not compile. No new package installed."
  - "[Rule 3] Added a jsdom-only <dialog> polyfill inside src/test/setup.ts (showModal()/close()/Escape→cancel+close) — jsdom does not implement any of HTMLDialogElement's interactive methods (confirmed via jsdom's own HTMLDialogElement-impl.js, a stub with no showModal/close; tracked upstream as jsdom/jsdom#3294). The polyfill lives only in the test environment; MobileNav.tsx itself calls only the standard native <dialog> API with no test-specific branching."
  - "MobileNav.test.tsx keeps a reference to the single getByRole('dialog', ...) query result across both assertions (open and closed) instead of re-querying by accessible name after Escape — after close, the <dialog> gets display:none via jsdom's own default UA stylesheet (dialog:not([open]) { display: none }), which empties its computed accessible name, so a fresh name-filtered query would return null even with { hidden: true }. Re-using the original element reference sidesteps this and still asserts the real toBeVisible()/not.toBeVisible() transition."

requirements-completed: [FOUND-03]

duration: 35min
completed: 2026-07-11
---

# Phase 1: Plan 04 — Header, Footer, MobileNav Shell Summary

**Sticky dark RSC `Header` and RSC `Footer`, both driven exclusively by `src/data/navigation.ts`, plus a native-`<dialog>` `MobileNav` client island — zero Pricing/Resources/Security, zero hand-rolled focus trap, Footer nav-parity and MobileNav open/Escape Vitest tests green.**

## Accomplishments

- Created `src/components/layout/Header.tsx` — Server Component (no `'use client'`), root `<header>` with `sticky top-0 z-40` and `bg-[var(--color-shell)]`. Renders `<Logo />` (no tagline), a desktop `<nav aria-label="Primary">` mapping `primaryNav` (hidden below `md`), the primary CTA via `<Button href={primaryCta.href}>` (hidden below `md`), and `<MobileNav items={primaryNav} />`. Responsive container padding (`px-6 md:px-8 lg:px-12`, `~24px` vertical) inside `max-w-[var(--container-max)]`. All nav links carry a token-based focus-visible ring.
- Created `src/components/layout/Footer.tsx` — Server Component, same shell background/container pattern. Row 1: `<Logo showTagline />` + `<nav aria-label="Footer">` (same `primaryNav`). Divider: `border-t border-[var(--color-border)]`. Row 2: `© 2026 QIERA. All rights reserved.` (left) + `legalNav` links separated by `<span aria-hidden="true">|</span>` (right, not literal text so screen readers don't announce the pipe).
- Created `src/components/layout/Footer.test.tsx` — renders `<Footer />` and asserts all six `primaryNav` labels, the exact copyright string, and all three `legalNav` labels are present, and that Pricing/Resources/Security are absent.
- Created `src/components/layout/MobileNav.tsx` — `'use client'`, `useRef<HTMLDialogElement>` + `useState(open)` effect calling `showModal()`/`close()` exactly per RESEARCH Pattern 4; no manual `keydown` listener anywhere in the file. Toggle button: icon-only, `aria-label="Open menu"`, `aria-haspopup="dialog"`, `aria-expanded`, `aria-controls="mobile-nav"`, `h-11 w-11` (44×44px) hit area, focus ring. Dialog: `id="mobile-nav"`, `aria-label="Mobile navigation"`, panel background `bg-[var(--color-secondary)]`, syncs closed state via `onClose`/`onCancel`. Close button: `aria-label="Close menu"`, also 44×44px. Nav links mapped from the `items` prop, each closing the panel on click, no animation.
- Created `src/components/layout/MobileNav.test.tsx` — opens the dialog via the "Open menu" button, asserts it's visible, presses Escape, asserts it's no longer visible.
- Wired up `@testing-library/jest-dom` (already a devDependency, never registered) via a new `src/test/setup.ts` + `setupFiles` entry in `vitest.config.mts`, and added a jsdom-only `<dialog>` polyfill in that same setup file so `showModal()`/`close()`/Escape actually function under jsdom (see Deviations).

## Header/Footer Tagline Decision

Followed `01-03-SUMMARY.md`'s recommendation exactly: Header renders `<Logo />` (mark + wordmark only), Footer renders `<Logo showTagline />` (adds "E-commerce Growth Intelligence"). This matches UI-SPEC's Header content-row spec (lists only `Logo`, no tagline) versus its Footer Row 1 spec (explicitly "Logo + tagline"). Not re-verified against the raw reference crop pixel-by-pixel this plan — flagged for the mandatory screenshot-comparison pass.

## `<dialog>` Under jsdom — A11y Observations

jsdom's `HTMLDialogElement` implementation (`node_modules/jsdom/lib/jsdom/living/nodes/HTMLDialogElement-impl.js`) is an empty stub extending `HTMLElement` — it does **not** implement `showModal()`, `close()`, focus trapping, `inert` background, or Escape-triggered `cancel`/`close` events at all (this is a long-standing jsdom gap, tracked upstream as jsdom/jsdom#3294). Without a polyfill, `MobileNav.test.tsx` fails immediately with `dialog.showModal is not a function`.

Added a minimal, test-only polyfill in `src/test/setup.ts` that:
- Adds `showModal()` (sets the `open` attribute) and `close()` (removes it + dispatches a `close` event) to `HTMLDialogElement.prototype` if missing.
- Adds a `document`-level `keydown` listener that, on `Escape`, dispatches a cancelable `cancel` event at the currently-open `<dialog>` and calls `close()` if not prevented — mirroring native browser behavior (`cancel` fires before `close`).

This polyfill is entirely test-environment scoped; `MobileNav.tsx` itself contains zero jsdom-specific branching and calls only the standard `<dialog>` API, exactly as it would in a real browser.

**Focus trap / focus restore:** jsdom's `<dialog>` stub also does not implement the browser's native top-layer rendering, `inert`-ing of background content, or automatic focus return to the trigger element on close — none of that is testable under jsdom even with the polyfill above (the polyfill only restores the open/close state machine, not focus management). This is expected: the plan's own instruction was to verify focus trap/restore "manually at screenshot widths if jsdom does not assert it" — that manual verification is deferred to Plan 05's full-shell screenshot pass, not blocking for this plan.

**`toBeVisible()` after close, technical note:** jsdom ships the same default UA stylesheet rule browsers use (`dialog:not([open]) { display: none; }`), so once `close()` removes the `open` attribute, the dialog genuinely becomes `display: none` in jsdom too — `MobileNav.test.tsx` asserts against a real CSS-driven visibility change, not a mocked one.

## Files Created/Modified

- `src/components/layout/Header.tsx` — created
- `src/components/layout/Footer.tsx` — created
- `src/components/layout/Footer.test.tsx` — created
- `src/components/layout/MobileNav.tsx` — created
- `src/components/layout/MobileNav.test.tsx` — created
- `src/test/setup.ts` — created (jest-dom matcher registration + jsdom `<dialog>` polyfill)
- `vitest.config.mts` — modified (added `test.setupFiles: ["./src/test/setup.ts"]`)

No commits made this plan — `commit_docs: false`, user commits manually.

## Verification

- `npx tsc --noEmit` — clean, no errors.
- `npm run lint` — clean, no errors/warnings.
- `npx vitest run src/components/layout/Footer.test.tsx src/components/layout/MobileNav.test.tsx` — both pass.
- `npx vitest run` (full suite: navigation + Footer + MobileNav) — 3 files / 7 tests, all pass.
- Manual grep: zero occurrences of "Pricing"/"Resources"/"Security" in `Header.tsx` or `Footer.tsx`; only `MobileNav.tsx` contains `'use client'`; zero `keydown`/`addEventListener` calls inside `MobileNav.tsx` itself (the Escape-handling `keydown` listener lives only in the test-only jsdom polyfill, not in application code).

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking issue] Registered `@testing-library/jest-dom` matchers with Vitest**
- **Found during:** Task 2 (Footer.test.tsx), Task 3 (MobileNav.test.tsx)
- **Issue:** `jest-dom` was already listed in `package.json` devDependencies (installed in an earlier plan's Wave 0 setup) but was never wired into the Vitest config or a setup file. `toBeInTheDocument()`/`toBeVisible()` failed to compile (`tsc` errors: "Property does not exist on type 'Assertion'").
- **Fix:** Created `src/test/setup.ts` importing `@testing-library/jest-dom/vitest` (the subpath that also augments Vitest's `expect` types) and added `test.setupFiles: ["./src/test/setup.ts"]` to `vitest.config.mts`.
- **Files modified:** `src/test/setup.ts` (new), `vitest.config.mts`.
- **Package installs:** none — `jest-dom` was already an installed devDependency; this only wired up existing tooling.

**2. [Rule 3 - Blocking issue] Polyfilled `<dialog>` `showModal()`/`close()`/Escape for jsdom**
- **Found during:** Task 3 (MobileNav.test.tsx)
- **Issue:** jsdom's `HTMLDialogElement` implementation is a no-op stub — `showModal` and `close` don't exist as functions at all, and Escape never fires a `cancel` event, so the RESEARCH-pattern test failed with `TypeError: dialog.showModal is not a function`.
- **Fix:** Added a jsdom-only polyfill inside `src/test/setup.ts` (see "`<dialog>` Under jsdom" section above) that restores just the open/close state machine and Escape→`cancel`→`close` event sequence needed to exercise `MobileNav.tsx`'s real logic. Zero changes to `MobileNav.tsx` itself — it remains a pure native-`<dialog>` consumer.
- **Files modified:** `src/test/setup.ts`.
- **Package installs:** none.

**3. [Rule 1 - Test bug] Reused the dialog element reference across both test assertions**
- **Found during:** Task 3 (MobileNav.test.tsx)
- **Issue:** Re-querying `screen.queryByRole("dialog", { name: "Mobile navigation" })` after Escape returned `null` (even with `{ hidden: true }`) because the now-`display:none` dialog's computed accessible name becomes empty, failing the name filter.
- **Fix:** Captured the dialog element once via `getByRole` right after opening it, then reused that same reference for the post-Escape `not.toBeVisible()` assertion instead of re-querying by name.
- **Files modified:** `src/components/layout/MobileNav.test.tsx`.
- **Commit:** none (`commit_docs: false`).

## Known Stubs

None. All three components render real data from `src/data/navigation.ts` — no hardcoded/empty/placeholder nav arrays.

## Threat Flags

None. Matches the plan's own threat model: all `href` values remain sourced from the developer-controlled `navigation.ts` (T-01-06, `accept`, unchanged); `<dialog>` renders in the browser top layer, no new clickjacking surface introduced (T-01-07, `accept`, unchanged); all labels render as plain JSX text, no `dangerouslySetInnerHTML` anywhere in Header/Footer/MobileNav (T-01-05, `mitigate`, satisfied).

## Self-Check: PASSED

- FOUND: src/components/layout/Header.tsx
- FOUND: src/components/layout/Footer.tsx
- FOUND: src/components/layout/Footer.test.tsx
- FOUND: src/components/layout/MobileNav.tsx
- FOUND: src/components/layout/MobileNav.test.tsx
- FOUND: src/test/setup.ts
- FOUND: `npx tsc --noEmit` exit 0
- FOUND: `npm run lint` exit 0
- FOUND: `npx vitest run` — 3 test files, 7 tests, all passed
