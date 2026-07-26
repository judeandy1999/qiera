# Forms — Resend delivery (FORM-06)

## Setup

1. Create a free account at https://resend.com
2. Create an API key → paste into `.env.local` as `RESEND_API_KEY`
3. Copy env template:

```bash
cp .env.example .env.local
```

4. Confirm:

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Resend API key |
| `FORM_TO_EMAIL` | Destination inbox (default `cjudeandy@gmail.com`) |
| `RESEND_FROM_EMAIL` | From address — use `QIERA <onboarding@resend.dev>` until your domain is verified |

## Behavior

- `POST /api/contact` and `POST /api/start-intelligence-audit` validate, then send email via Resend.
- On send failure (missing key / Resend error), APIs return **502** and the form shows the existing failure banner.
- Success only means Resend accepted the message — not that the inbox has been opened.

## Production tip

Verify a domain in Resend (e.g. `mail.qiera.com`) and set:

```env
RESEND_FROM_EMAIL=QIERA <noreply@mail.qiera.com>
```
