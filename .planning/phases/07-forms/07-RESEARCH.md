# Phase 7 RESEARCH (condensed)

**Confidence:** HIGH

## Approach

- RSC pages + Client form islands  
- `POST /api/contact` + `POST /api/start-intelligence-audit` with hand-rolled validators (no Zod)  
- Typed options in `src/data/contact-options.ts` + `src/data/audit-options.ts`  
- Pending integration documented in route comments  

## Pitfalls

- Fake “email sent” — forbid  
- XSS via message fields — store/echo only as text, never HTML  
- OpenID topic injection — allowlist topic values  
- Horizontal overflow on audit 5-col — stack below lg  

## Waves

1. Options + validators + API routes + unit tests  
2. Contact page + form + topic preselect + tests  
3. Audit page + form + tests  
4. Screenshots + FORM-05 ASSUMED list + human gate  
