# FutureLife Admin Panel (static preview)

Desktop-only HTML prototype of the internal admin panel for the FutureLife product, sales, support and finance teams. It uses the same style as the Marketplace, Jobs and Rentals vendor portals: the same tokens, sidebar, panels, tables, badges, buttons and Preview states panel. All values are sample data or `{{PLACEHOLDER}}`.

Start at `admin-signin.html` or `admin-dashboard.html`. Preview states are switched with URL parameters such as `?state=`, `?type=`, `?tab=`, `?role=` and `?view=`. Each detail page lists its states in its Preview states panel.

| Area | Pages |
|---|---|
| Overview | admin-dashboard |
| Accounts | admin-vendors, admin-vendor-details, admin-users, admin-user-details |
| Review queues | admin-verification-queue, admin-verification-review, admin-moderation-queue, admin-moderation-review, admin-reports-and-disputes, admin-case-details |
| Content | admin-marketplace, admin-deals, admin-jobs, admin-rentals, admin-community |
| Finance | admin-orders, admin-payouts, admin-billing-and-revenue, admin-fees-and-commissions, admin-payment-exceptions |
| Configuration | admin-plans-and-pricing, admin-team-and-roles, admin-audit-log, admin-settings |
| Sign-in | admin-signin |

The live build must follow these rules:
- Permissions, state changes, entitlements and payment status come from backend workflows. Payment status comes only from verified Stripe webhooks, never from a redirect or a page field.
- The Verified Seller, Verified Employer and Verified Landlord labels show only after a reviewer approves them. The labels describe an identity or authority check, never the quality of an item, job or property.
- FutureLife makes no guarantees, offers no buyer protection, and does not hold rental deposits.
- Candidate CVs, job applications, rental applications and verification evidence use least-privilege access, and every view is logged.
- Destructive or money-moving actions need confirmation, a reason and an internal note, and are recorded in the audit log.
