# FutureLife Rentals Vendor Portal

## Open the portal

Open `rentals-vendor-dashboard.html` in a modern web browser (or `rentals-vendor-signin.html` for the owner / agent login). The former single-page file `rentals-vendor-portal.html` now forwards old `?view=` links to the matching page (`login` → sign in, `billing` → Plans & Subscriptions, `security` → account security); other query parameters and the hash are kept.

## Included areas

This portal preview has one page per screen (28 pages). Screens with several states use `?state=`, `?step=`, `?status=`, `?flow=`, `?mode=`, or `?view=` and include a "Preview states" panel.

- Sign-in and account: `rentals-vendor-signin.html`, `rentals-vendor-signup.html`, `rentals-vendor-verify-email.html`, `rentals-vendor-forgot-password.html`, `rentals-vendor-reset-password.html`, `rentals-vendor-account-suspended.html`
- Onboarding and verification: `rentals-vendor-onboarding.html` (`?step=profile|contact|terms`), `rentals-vendor-landlord-verification.html`
- Properties and viewings: `rentals-vendor-dashboard.html`, `rentals-vendor-properties.html`, `rentals-vendor-property-details.html`, `rentals-vendor-create-property.html` (`?mode=edit`), `rentals-vendor-availability.html`, `rentals-vendor-viewing-details.html`
- Applications and tenancies: `rentals-vendor-applications.html`, `rentals-vendor-application-details.html`, `rentals-vendor-tenancies.html`, `rentals-vendor-tenancy-details.html`, `rentals-vendor-move-in-checklist.html`, `rentals-vendor-tenancy-end-renewal.html`, `rentals-vendor-messages.html`
- Billing (sidebar group with two pages, Plans & Subscriptions and Sponsored Listings): `rentals-vendor-plans-and-subscriptions.html` holds the plan, plan change, checkout result, payment history and invoice screens as `?tab=plans` (default) `|change|checkout|history|invoice`; each tab keeps its own `?step=` / `?state=` preview states.
- Revenue model: FutureLife earns from vendors only through subscription plans and sponsored listings. There are no listing or job-post credits, placement fees, rental commissions, or order or transaction fees. Property listings and featured placements come from the plan allowance.
- Sponsored listings: `rentals-vendor-sponsored-listings.html` covers choosing a listing, duration and placement, review, Stripe checkout (MYR), and Processing / Paid / Failed states (`?step=` / `?state=`). Prices use `{{SPONSORED_PRICE}}` placeholders; a listing is sponsored only after a verified Stripe webhook confirms payment.
- Retired pages (redirect to `rentals-vendor-plans-and-subscriptions.html`, keeping the query string and hash): `rentals-vendor-billing-plans.html`, `rentals-vendor-plan-change.html` (`?tab=change`), `rentals-vendor-checkout-result.html` (`?tab=checkout`), `rentals-vendor-payment-history.html` (`?tab=history`), `rentals-vendor-invoice.html` (`?tab=invoice`), `rentals-vendor-listing-fees.html`, `rentals-vendor-listing-credits.html`, `rentals-vendor-rental-commissions.html`, `rentals-vendor-commission-dispute.html`
- Profile and settings: `rentals-vendor-profile.html`, `rentals-vendor-team-members.html`, `rentals-vendor-applicant-data-privacy.html`, `rentals-vendor-notifications.html` (`?view=preferences`), `rentals-vendor-account-security.html`

Shared files: `rentals-vendor-portal.css`, `rentals-vendor-portal.js`, `vendor-portal-navigation.css`, `vendor-portal-navigation.js` (hamburger drawer below 960px), and `vendor-portal-auth.css` (sign-in pages).

## Preview-only notice

This is a static visual prototype. It does not include production authentication, database storage, Stripe processing, real messaging, or actual rental operations. FutureLife does not hold deposits. Dynamic values such as `{{PROPERTY_ID}}` and `{{TENANCY_REFERENCE}}` are placeholders for Bubble or backend data.
