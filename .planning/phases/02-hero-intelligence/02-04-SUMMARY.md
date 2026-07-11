---
phase: 02-hero-intelligence
plan: 04
status: complete
---

# 02-04 Summary — DetailModal Shell

## Outcome

All acceptance criteria met. `npx vitest run src/components/ui/DetailModal.test.tsx` — **4/4 passed**. `npx tsc --noEmit` — clean.

## Artifacts created

| File | Lines | Notes |
|------|-------|-------|
| `src/components/ui/DetailModal.tsx` | 72 | Client component, native `<dialog>`, focus restore, backdrop close |
| `src/components/ui/DetailModal.test.tsx` | 77 | 4 tests: open, Escape-close, button-close, focus-restore |

## Implementation decisions

- **Pattern mirrored from MobileNav**: `useRef<HTMLDialogElement>` + `useEffect([open])` calling `showModal()`/`close()` with `dialog.open` guards.
- **Focus restore**: `triggerRef` stores `document.activeElement` immediately before `showModal()`. Restoration runs in the `else if (!open)` branch of the same effect — fired whenever `open` goes false, regardless of whether `dialog.open` is still true (needed for jsdom compat).
- **Backdrop click**: `onClick` on `<dialog>` with `event.target === dialogRef.current` guard; inner content clicks do not propagate.
- **No manual focus trap / no keydown Escape listener**: entirely delegated to the native `<dialog>` (and the existing test-env polyfill in `src/test/setup.ts`).
- **aria**: `aria-labelledby={labelledById}` when provided; falls back to `aria-label={title}`.
- **Mobile**: `max-md:w-screen max-md:h-[100dvh] max-md:max-w-none max-md:max-h-none max-md:m-0 max-md:rounded-none` — full-screen on ≤767 px, per Decision #4.

## jsdom limitations encountered

### 1. `showModal()` / `close()` not natively implemented

jsdom does not implement `HTMLDialogElement.showModal()` or `.close()`. The existing polyfill in `src/test/setup.ts` patches both methods: `showModal` adds the `open` attribute; `close` removes it and fires a synthetic `close` event. A global `keydown` listener dispatches a synthetic `cancel` event and then calls `close()`. All four modal behaviors (open, Escape, button, focus restore) rely on this polyfill.

### 2. Auto-cleanup not active without `globals: true`

`@testing-library/react` registers `afterEach(cleanup)` by calling the global `afterEach`. Because `vitest.config.mts` does not set `globals: true`, the global is not available at import time and auto-cleanup silently fails. Without cleanup, each `render()` accumulates in the shared `document.body`, causing "Found multiple elements" errors in tests 2-4. **Fix applied**: explicit `afterEach(cleanup)` imported from `vitest` and `@testing-library/react` at the top of the test file.

### 3. Focus restore determinism

jsdom's polyfill calls `dialog.close()` as part of the Escape-key path (before React re-renders), meaning `dialog.open` is already false by the time the `useEffect` runs. The effect is written to restore focus in the `else if (!open)` branch unconditionally (not guarded by `dialog.open`), so the stored trigger receives `.focus()` regardless of the polyfill's timing. All four tests pass, including the focus-restore assertion.

## Verification

```
npx vitest run src/components/ui/DetailModal.test.tsx
# Test Files  1 passed (1)
# Tests       4 passed (4)

npx tsc --noEmit
# (no output — clean)
```
