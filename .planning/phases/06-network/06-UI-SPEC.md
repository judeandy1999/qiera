---
phase: 6
slug: network
status: approved
shadcn_initialized: false
preset: none
created: 2026-07-11
---

# Phase 6 — UI Design Contract

> Match `Network page/Network.png`. Copy transcribed below — do not invent.

Sources: `06-CONTEXT.md`, `Network.png`, DECISIONS #6/#10/#13/#14, shell tokens.

---

## Design System

| Property | Value |
|----------|-------|
| Tool | none |
| Font | Geist |
| Icons | IntelligenceIcon / lucide via map only |

---

## Spacing / Color / Type

Inherit Phase 1 shell: `--color-shell`, text primary/secondary, accent `#6366F1`, radii card/button.

| Role | Size | Weight | Use |
|------|------|--------|-----|
| Eyebrow | 12px | 400 | `NETWORK` uppercase accent tracking |
| Display | 40–48px | 600 | Hero H1 **[ASSUMED 40px md / 48px lg]** |
| Body | 16px | 400 | Hero sub, card descriptions |
| Card title | 20px | 600 | Partner titles |
| Benefits label | 12px | 400 | `BENEFITS` uppercase accent |
| Benefit item | 14–16px | 400 | Check rows |

Page bg: `--color-shell`. Cards: slightly elevated dark surface (`--color-secondary` or `rgba(255,255,255,0.03)` + border `--color-border`) **[ASSUMED]**.

---

## Copywriting Contract (exact)

| Element | Copy |
|---------|------|
| Eyebrow | NETWORK |
| H1 | Stronger Together. Greater Impact. |
| Hero body | QIERA's network brings together exceptional partners and leaders who extend our capability, scale our impact, and deliver exceptional outcomes for clients. |
| CTA band | Let's build something greater together. Explore partnership opportunities and join the QIERA Network. |
| CTA button | Become a Partner (append →) |
| Benefits label | BENEFITS |

### Partners (order locked)

1. **Experts and Specialists** — A curated network of top-tier experts across ecommerce, growth, analytics, SEO, paid media, CRO, lifecycle, tech, and data who contribute deep domain knowledge and specialized execution.  
   Benefits: Access world-class expertise · Deep domain specialization · Flexible, on-demand engagement

2. **Resellers** — Empower your agency or consultancy to extend your offering with QIERA's frameworks, diagnostics, and solutions—under your brand.  
   Benefits: Expand your service portfolio · Increase client value and retention · Predictable margins and support

3. **Affiliates** — Partner with QIERA and earn recurring revenue by referring clients who need growth intelligence, strategy, and systems that drive results.  
   Benefits: Attractive recurring commissions · High-converting offers · Marketing and sales resources

4. **White-label Partners** — Deliver QIERA-powered diagnostics, reports, and insights under your brand with full white-labeling and client ownership.  
   Benefits: 100% white-label delivery · Own the client relationship · Powered by QIERA intelligence

5. **Fractional Leadership** — Seasoned leaders available on a fractional basis to guide strategy, operations, marketing, analytics, and growth for ecommerce businesses.  
   Benefits: Executive-level expertise · Flexible engagement models · Accelerate strategic execution

6. **Delivery Partners** — Trusted implementation partners who help execute strategies, build systems, integrate tools, and deliver measurable results.  
   Benefits: Execution-focused collaboration · Scalable delivery capacity · Aligned quality standards

7. **Strategic Alliances** — We collaborate with complementary platforms, tools, and organizations to co-create value and drive innovation in the ecommerce ecosystem.  
   Benefits: Shared innovation and value · Integrated solutions · Stronger market impact

---

## Layout

1. **Hero** — split: copy left, globe `next/image` right; stack on mobile  
2. **Partner list** — 7 rows; desktop 3 zones (icon | title+body | BENEFITS); stack on ≤768  
3. **Partner CTA band** — icon + copy + outline Become a Partner → `/contact?topic=partnership`  
4. Shared Footer (not PNG-year)

**Active nav:** accent bottom border / underline on Network when `pathname === "/network"`; `aria-current="page"`.

---

## Screenshots

`network-1440.png`, `network-768.png`, `network-390.png` under phase `screenshots/`.

---

## Checker Sign-Off

- [x] Copywriting PASS (transcribed)
- [x] Visuals PASS (match PNG)
- [x] Color PASS (shell)
- [x] Typography PASS
- [x] Spacing PASS (ASSUMED flagged)
- [x] Registry PASS

**Approval:** approved 2026-07-11 (user: match the images)
