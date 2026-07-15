# Phase 7: Contact & Start Intelligence Audit - Context

**Gathered:** 2026-07-15  
**Status:** Ready for planning

<domain>
## Phase Boundary

Ship `/contact` and `/start-intelligence-audit` matching Utility page references (FORM-01–05): transcribed form chrome/copy, typed option lists in `src/data/`, client + server validation via typed route handlers, loading/success/failure UI that does **not** claim external delivery, keyboard-accessible responsive layouts. Honor `?topic=partnership` on Contact (Decision #6).

Out of scope: real email/CRM integration (document pending); Pricing/Resources/Security nav; Network page changes; inventing marketing copy beyond flagged dropdown values.

</domain>

<decisions>
## Implementation Decisions

### Copy fidelity
- **D-01:** Visible labels, placeholders, headings, buttons, privacy lines, and Audit hero/outcomes copy = **word-for-word** from `contact form.png` and `Start Intelligence Audit.png`. Do not invent page chrome copy.
- **D-02:** Nav/header labels stay DECISIONS #2/#13/#14 (no Pricing/Resources; Leverages; Contact). Audit page uses shared Header/Footer.
- **D-03:** Unreadable / collapsed dropdown **options** → typed sensible lists + `// TODO: unreadable` or FORM-05 report flags — never invent button labels that appear in the PNG.

### Contact help-topic options + `topic` (user: you decide → 1A)
- **D-04:** Contact select options (values / labels):

  | value | label |
  |-------|--------|
  | `partnership` | Partnership Inquiry |
  | `general` | General Question |
  | `sales` | Sales / Demo |
  | `support` | Support |
  | `other` | Other |

- **D-05:** When `searchParams.topic=partnership` (case-insensitive), preselect `partnership`. Unknown/missing topic → empty “Select an option”.
- **D-06:** Expert leverage CTA and Final CTA secondary stay plain `/contact` (no query) — intentional.

### Audit dropdown lists (user: you decide → 2A)
- **D-07:** Store options in typed data files under `src/data/` (e.g. `audit-options.ts`, `contact-options.ts`).
- **D-08:** Secondary growth-goal checkboxes exactly as PNG: Increase Revenue, Improve Conversion, Boost Organic Visibility, Improve Retention, Build Brand Authority, Other.
- **D-09:** Primary selects (Industry, #1 growth priority, biggest challenge, Monthly Revenue, Employees, Role) — provide sensible ecommerce-oriented lists; mark each list as **CONFIRMED** (from PNG checkboxes / visible labels) or **ASSUMED** in FORM-05 section of phase SUMMARY. Prefer short lists (6–12 items).
- **D-10:** ASSUMED starter sets (planner/executor may refine if references clarify):

  - Industry: Fashion & Apparel, Beauty & Personal Care, Electronics, Health & Wellness, Home & Lifestyle, Food & Beverage, B2B Ecommerce, Other  
  - #1 growth priority: Increase Revenue, Improve Conversion, Boost Organic Visibility, Improve Retention, Build Brand Authority, Other  
  - Biggest challenge: Revenue Leaks, Conversion Friction, Visibility Gaps, Trust Issues, Retention / Churn, Operational Bottlenecks, Unclear Strategy, Other  
  - Monthly Revenue: Under $50k, $50k–$250k, $250k–$1M, $1M–$5M, $5M+, Prefer not to say  
  - Employees: 1–10, 11–50, 51–200, 201–1000, 1000+  
  - Role: Founder / CEO, Marketing, Growth, Ecommerce Ops, Agency Partner, Other  

### Honest success / failure / loading (user: you decide → 3A)
- **D-11:** Handlers validate and accept typed payloads; persist is **not** production-integrated — comment + SUMMARY: “Pending production email/CRM integration.” Do **not** say “email sent” or similar.
- **D-12:** Submit UX: button shows loading (disabled + “Sending…” or busy state). Success: keep form structure; show inline alert/banner — Contact: “Thanks — we received your request. We’ll follow up shortly.” Audit: “Thanks — we received your audit request. We’ll follow up shortly.” Failure: “Something went wrong. Please try again.” Retry allowed.
- **D-13:** Success = validated acceptance of the request locally (200 + typed JSON `{ ok: true }`), not proof of downstream delivery.

### Audit mobile layout (user: you decide → 4A)
- **D-14:** Desktop ≥1024: 5-column “How it works” grid matching PNG. Below that: **stack columns 1→5 vertically** in one scroll (not wizard/accordion). Touch targets ≥44px; no horizontal overflow.

### Validation & handlers
- **D-15:** `POST /api/contact` and `POST /api/start-intelligence-audit` (or App Router `route.ts` under those paths). Shared pattern: parse JSON → Zod (or equivalent native schema) on server; mirror required rules client-side.
- **D-16:** Contact required: Full Name, Work Email, help topic, Message. Optional: Company, Phone. Audit required per PNG asterisks; optional company-details column and optional challenge notes (max 500).
- **D-17:** Email format validation; trim strings; reject unknown topic/option values server-side.

### Claude's Discretion
Exact ASSUMED dropdown wording within D-10; field input chrome styling within shell tokens; form component split (ContactForm / AuditForm); Zod vs hand-rolled schema if Zod already unavailable — prefer zero new deps unless validation needs justify (native is fine).

</decisions>

<canonical_refs>
## Canonical References

### Decisions & requirements
- `.planning/DECISIONS.md` — #6 topic partnership, #7 typed handlers / no fake send, #8 typed option lists
- `.planning/REQUIREMENTS.md` — FORM-01 … FORM-05
- `.planning/ROADMAP.md` — Phase 7
- `.planning/research/REFERENCE-INVENTORY.md` — Utility pages contact + audit

### Visual / copy sources
- `docs/qiera-reference/Utility pages/contact form.png`
- `docs/qiera-reference/Utility pages/Start Intelligence Audit.png`

### Prior contracts
- `.planning/phases/01-foundation-shell/01-UI-SPEC.md` — shell, Button
- `.planning/phases/05-cta-homepage-polish/05-CONTEXT.md` — Audit hero strings already used; form button may use “Start My Intelligence Audit”
- `.planning/phases/06-network/06-CONTEXT.md` — deferred topic preselect → this phase
- `.cursor/rules/qiera-visual-fidelity.mdc`

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `Button` primary for submit chrome (or native submit styled like Button)
- Shared Header/Footer/layout; Contact nav active via pathname
- Shell tokens / focus rings

### Integration Points
- Links already point to `/contact`, `/contact?topic=partnership`, `/start-intelligence-audit`
- No form routes or API handlers exist yet

### Patterns to establish
- Client form islands + server `route.ts` handlers
- Typed option data modules under `src/data/`

</code_context>

<specifics>
## Specific Ideas

- User selected all gray areas then **you decide for all** → locks 1A / 2A / 3A / 4A above.
- Match images for labels/layout; only invent collapsed dropdown *options* with ASSUMED flags.

</specifics>

<deferred>
## Deferred Ideas

- Production email/CRM/webhook integration
- Wizard/stepper UX for Audit (not chosen)
- Additional `topic` query values beyond partnership

</deferred>

<uncertainty>
## Unresolved Questions

None blocking. Dropdown lists ASSUMED — correct if user later supplies exact options from Figma.
</uncertainty>
