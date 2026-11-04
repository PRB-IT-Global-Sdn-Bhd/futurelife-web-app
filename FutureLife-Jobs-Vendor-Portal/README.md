# FutureLife Jobs Vendor Portal

## Open the portal

Open `jobs-vendor-dashboard.html` in a modern web browser (or `jobs-vendor-signin.html` for the employer login). The former single-page file `jobs-vendor-portal.html` now forwards old `?view=` links to the matching page.

## Included areas

This portal preview has one page per screen (30 pages). Screens with several states use `?state=`, `?step=`, `?status=`, `?flow=`, `?mode=`, or `?view=` and include a "Preview states" panel.

- Sign-in and account: `jobs-vendor-signin.html`, `jobs-vendor-signup.html`, `jobs-vendor-verify-email.html`, `jobs-vendor-forgot-password.html`, `jobs-vendor-reset-password.html`, `jobs-vendor-account-suspended.html`
- Onboarding and verification: `jobs-vendor-onboarding.html` (`?step=organisation|contact|terms`), `jobs-vendor-employer-verification.html`
- Hiring: `jobs-vendor-dashboard.html`, `jobs-vendor-job-listings.html`, `jobs-vendor-job-details.html`, `jobs-vendor-create-job.html` (`?mode=edit`), `jobs-vendor-candidates.html`, `jobs-vendor-candidate-details.html`, `jobs-vendor-interviews.html`, `jobs-vendor-interview-details.html`, `jobs-vendor-hires.html`, `jobs-vendor-offer-and-hire.html`, `jobs-vendor-placement-details.html`, `jobs-vendor-messages.html`
- Billing: `jobs-vendor-billing-plans.html`, `jobs-vendor-plan-change.html`, `jobs-vendor-checkout-result.html`, `jobs-vendor-payment-history.html`, `jobs-vendor-invoice.html`
- Revenue model: FutureLife earns from vendors only through subscription plans and sponsored listings. There are no listing or job-post credits, placement fees, rental commissions, or order or transaction fees. Job posts and featured jobs come from the plan allowance.
- Retired pages (redirect to `jobs-vendor-billing-plans.html`, keeping the query string and hash): `jobs-vendor-job-post-credits.html`, `jobs-vendor-placement-fees.html`, `jobs-vendor-placement-fee-dispute.html`
- Organisation and settings: `jobs-vendor-company-profile.html`, `jobs-vendor-team-members.html`, `jobs-vendor-candidate-data-privacy.html`, `jobs-vendor-notifications.html` (`?view=preferences`), `jobs-vendor-account-security.html`

## Preview-only notice

This is a static visual prototype. It does not include production authentication, database storage, Stripe processing, real messaging, or actual hiring and billing workflows. Dynamic values such as `{{JOB_ID}}` are placeholders for Bubble or backend data.
