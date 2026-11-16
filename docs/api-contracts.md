# FutureLife API contracts (draft)

**Status:** Phase 0 draft — endpoints and payloads are **stubs** until reviewed with the Node.js backend owner (VPAP-5).  
**Authority:** Node.js on AWS is the only source of truth. Portals do not grant entitlements from the browser.

Base URL (per environment):

| Environment | Base URL (TBD) |
|-------------|----------------|
| Development | `_TBD_` |
| Staging | `_TBD_` |
| Production | `_TBD_` |

Common conventions (proposed):

- JSON over HTTPS; `Authorization: Bearer <session>` or HTTP-only session cookie (exact mechanism TBD with backend).
- Errors: `{ "error": { "code": string, "message": string, "requestId": string } }`.
- Pagination: `{ "items": [], "nextCursor": string | null }`.
- Idempotency-Key header on mutating billing endpoints (Stripe checkout sessions).

---

## Auth

| Method | Path | Purpose |
|--------|------|---------|
| POST | `/auth/vendor/sign-up` | Vendor registration — **TBD** |
| POST | `/auth/vendor/sign-in` | Email + password → session — **TBD** |
| POST | `/auth/vendor/sign-out` | End session — **TBD** |
| POST | `/auth/vendor/forgot-password` | Password reset email — **TBD** |
| POST | `/auth/vendor/reset-password` | Complete reset — **TBD** |
| POST | `/auth/staff/sign-in` | Admin panel staff sign-in — **TBD** |
| GET | `/auth/session` | Current user, roles, org — **TBD** |

---

## Vendors

| Method | Path | Purpose |
|--------|------|---------|
| GET | `/vendors/me` | Current vendor organisation — **TBD** |
| PATCH | `/vendors/me` | Update profile — **TBD** |
| GET | `/vendors/me/team` | Team members — **TBD** |
| POST | `/vendors/me/team` | Invite team member — **TBD** |
| DELETE | `/vendors/me/team/{userId}` | Remove member — **TBD** |
| GET | `/vendors/me/verification` | Verification state (6 states) — **TBD** |
| POST | `/vendors/me/verification` | Submit verification — **TBD** |

---

## Listings (Marketplace)

| Method | Path | Purpose |
|--------|------|---------|
| GET | `/marketplace/listings` | List vendor listings — **TBD** |
| POST | `/marketplace/listings` | Create draft — **TBD** |
| GET | `/marketplace/listings/{id}` | Details — **TBD** |
| PATCH | `/marketplace/listings/{id}` | Update — **TBD** |
| POST | `/marketplace/listings/{id}/submit` | Submit for moderation — **TBD** |

---

## Jobs

| Method | Path | Purpose |
|--------|------|---------|
| GET | `/jobs/posts` | Job listings — **TBD** |
| POST | `/jobs/posts` | Create job — **TBD** |
| GET | `/jobs/posts/{id}` | Job details — **TBD** |
| GET | `/jobs/posts/{id}/candidates` | Candidates (employer-scoped) — **TBD** |
| GET | `/jobs/candidates/{id}` | Candidate detail (privacy rules) — **TBD** |
| POST | `/jobs/interviews` | Propose interview — **TBD** |

---

## Properties (Rentals)

| Method | Path | Purpose |
|--------|------|---------|
| GET | `/rentals/properties` | List properties — **TBD** |
| POST | `/rentals/properties` | Create property — **TBD** |
| GET | `/rentals/properties/{id}` | Details (public vs private address split) — **TBD** |
| GET | `/rentals/viewings` | Viewings — **TBD** |

---

## Applications

| Method | Path | Purpose |
|--------|------|---------|
| GET | `/rentals/applications` | Rental applications — **TBD** |
| GET | `/rentals/applications/{id}` | Application detail — **TBD** |
| PATCH | `/rentals/applications/{id}` | Status updates — **TBD** |

---

## Messages

| Method | Path | Purpose |
|--------|------|---------|
| GET | `/messages/threads` | Inbox threads — **TBD** |
| GET | `/messages/threads/{id}` | Thread messages — **TBD** |
| POST | `/messages/threads/{id}` | Send message — **TBD** |
| GET | `/notifications` | Notification feed — **TBD** |

---

## Billing

| Method | Path | Purpose |
|--------|------|---------|
| GET | `/billing/plans` | Plans for module (Marketplace / Jobs / Rentals) — **TBD** |
| GET | `/billing/subscription` | Current subscription — **TBD** |
| POST | `/billing/checkout/subscription` | Stripe Checkout session — **TBD** |
| POST | `/billing/checkout/sponsored` | Sponsored listing purchase — **TBD** |
| GET | `/billing/invoices` | Payment history — **TBD** |
| POST | `/webhooks/stripe` | **Node.js only** — signature verified, idempotent — **TBD** |

Entitlements activate **only** after verified Stripe webhooks in Node.js (never from redirect URLs).

---

## Admin

| Method | Path | Purpose |
|--------|------|---------|
| GET | `/admin/vendors` | Vendor directory — **TBD** |
| GET | `/admin/users` | Student users — **TBD** |
| GET | `/admin/verification-queue` | Verification queue — **TBD** |
| POST | `/admin/verification-queue/{id}/decision` | Approve / reject / etc. — **TBD** |
| GET | `/admin/moderation-queue` | Content moderation — **TBD** |
| POST | `/admin/audit-events` | Append audit event (or internal only) — **TBD** |
| GET | `/admin/team` | Staff roles — **TBD** |

Sales role must not receive candidate/applicant PII (enforced server-side).

---

## Marketplace orders & payouts (portal section outside Billing)

| Method | Path | Purpose |
|--------|------|---------|
| GET | `/marketplace/orders` | Orders — **TBD** |
| GET | `/marketplace/payouts` | Payout summary — **TBD** |
| GET | `/marketplace/payouts/statement` | Statement with processing-fee line — **TBD** |

---

## Open items (VPAP-5)

- Confirm OpenAPI vs markdown as the contract source of truth.
- Staging base URL, auth cookie names, and CSRF strategy.
- Webhook event types and entitlement mapping per plan tier.
- File upload URLs for listings/properties (S3 presigned, etc.).