---
phase: 7
slug: forms
status: approved
shadcn_initialized: false
preset: none
created: 2026-07-15
---

# Phase 7 — UI Design Contract

Sources: `07-CONTEXT.md`, contact form.png, Start Intelligence Audit.png, shell tokens.

## Design System

Shell dark theme; Geist; IntelligenceIcon for field icons; no new UI libs; native validation (no Zod).

## Forms chrome

| Token use | Value |
|-----------|-------|
| Page bg | `--color-shell` |
| Input bg | `--color-secondary` or `rgba(255,255,255,0.04)` |
| Input border | `--color-border` |
| Label | 14px / 400 / text-primary |
| Required * | danger/red `#EF4444` or `--color-danger` |
| Focus | `--color-focus-ring` |
| Submit | primary Button treatment (full-width contact; centered audit) |

## Contact copy (exact)

- Eyebrow: CONTACT  
- H1: Send us a message  
- Body: Fill out the form below and a member of our team will get back to you shortly.  
- Fields/labels/placeholders per CONTEXT + PNG  
- CTA: Send Message →  
- Privacy: We respect your privacy. Your information will never be shared.

## Audit copy (exact)

- Eyebrow: START AN INTELLIGENCE AUDIT  
- H1: Begin with clarity. Grow with intelligence.  
- Body: Our Intelligence Audit identifies what's holding your eCommerce growth back, uncovers your highest-impact opportunities, and gives you a clear roadmap for what to do next.  
- Outcomes (4): Identify Growth Constraints · Uncover Revenue Opportunities · Prioritize What Matters Most · Get an Executive Intelligence Brief  
- How it works / A simple process. Powerful results.  
- Submit: Start My Intelligence Audit →  
- Caption: Takes less than 2 minutes  
- Privacy (step 5): We respect your privacy. Your information is secure and never shared.

## Layout

- Contact: max-w form card/stack; 2-col name/email + company/phone; full-width topic + message  
- Audit desktop: 5-col grid; mobile: stack 1→5  
- States: inline banner above submit (success/error); button loading  

## Screenshots

`contact-1440/768/390`, `audit-1440/768/390`, `contact-topic-partnership-1440`

## Checker Sign-Off

- [x] Copy / Visual / Color / Type / Spacing / Registry PASS  

**Approval:** approved 2026-07-15 (continue)
