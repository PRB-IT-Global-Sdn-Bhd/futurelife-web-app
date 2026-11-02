# FutureLife Admin Panel (static preview)

Desktop-only HTML prototype of the internal admin panel for the FutureLife product, sales, support and finance teams. It uses the same style as the Marketplace, Jobs and Rentals vendor portals: the same tokens, sidebar, panels, tables, badges, buttons and Preview states panel. All values are sample data or `{{PLACEHOLDER}}`.

Start at `admin-signin.html` or `admin-dashboard.html`. Preview states are switched with URL parameters such as `?state=`, `?type=`, `?tab=`, `?role=` and `?view=`. Each detail page lists its states in its Preview states panel.

This is the 21-page lean set.

| Area | Pages |
|---|---|
| Overview | admin-dashboard |
| Accounts | admin-vendors, admin-vendor-details, admin-users, admin-user-details |
| Review queues | admin-verification-queue, admin-verification-review, admin-moderation-queue (includes Community posts via `?type=community&topic=`), admin-moderation-review, admin-reports-and-disputes, admin-case-details |
| Content | admin-marketplace (`?tab=listings\|sponsored\|deals`), admin-jobs, admin-rentals |
| Finance | admin-orders-and-payouts (`?tab=orders\|schedule\|holds\|statements`), admin-billing-and-revenue (includes `?tab=exceptions` for payment exceptions), admin-fees-and-commissions |
| Configuration | admin-plans-and-pricing, admin-team-and-roles (includes `?view=settings`), admin-audit-log |
| Sign-in | admin-signin |

Pages merged in the lean set are kept as small redirects that keep the query string and hash (they are not counted in the 21):

| Old page | Now opens |
|---|---|
| admin-orders.html | admin-orders-and-payouts.html?tab=orders |
| admin-payouts.html | admin-orders-and-payouts.html (`?tab=` kept, default `schedule`) |
| admin-payment-exceptions.html | admin-billing-and-revenue.html?tab=exceptions |
| admin-community.html | admin-moderation-queue.html?type=community (`?tab=` becomes `?topic=`) |
| admin-deals.html | admin-marketplace.html?tab=deals |
| admin-settings.html | admin-team-and-roles.html?view=settings |

The live build must follow these rules:
- Permissions, state changes, entitlements and payment status come from backend workflows. Payment status comes only from verified Stripe webhooks, never from a redirect or a page field.
- The Verified Seller, Verified Employer and Verified Landlord labels show only after a reviewer approves them. The labels describe an identity or authority check, never the quality of an item, job or property.
- FutureLife makes no guarantees, offers no buyer protection, and does not hold rental deposits.
- Candidate CVs, job applications, rental applications and verification evidence use least-privilege access, and every view is logged.
- Destructive or money-moving actions need confirmation, a reason and an internal note, and are recorded in the audit log.
