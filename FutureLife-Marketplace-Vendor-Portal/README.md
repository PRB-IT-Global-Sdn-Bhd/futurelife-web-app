# FutureLife Marketplace Vendor Portal

## Open the portal

Open `marketplace-vendor-dashboard.html` in a modern web browser.

## Included flows

This archive contains the current Marketplace Vendor Portal preview, including listings, orders, messages, notifications, billing, sponsored listings, listing credits, plan changes, Platform Fees, order earnings breakdowns, payout statements, payout account details, fulfilment settings, account security, and related preview routes.

Checkout return states for sponsored listings, listing credits and plan changes each have a processing (awaiting verified payment confirmation), cancelled and expired page, for example `marketplace-vendor-sponsored-listing-processing.html`, `-cancelled.html` and `-expired.html`. The payment and review pages now open the processing page; success is only shown after server confirmation.

Additional P0 pages (use `?state=` to preview each state where available):

- Account access: `marketplace-vendor-forgot-password.html`, `marketplace-vendor-reset-password.html`, `marketplace-vendor-verify-email.html`, `marketplace-vendor-account-suspended.html`
- Onboarding: `marketplace-vendor-onboarding-business-details.html`, `marketplace-vendor-onboarding-terms.html`, `marketplace-vendor-onboarding-status.html`
- Verified Seller: `marketplace-vendor-verification-application.html`, `marketplace-vendor-verification-status.html`
- Listings: `marketplace-vendor-listing-details.html`, `marketplace-vendor-edit-listing.html`
- Payments: `marketplace-vendor-payment-history.html`, `marketplace-vendor-invoice.html`, `marketplace-vendor-payment-refund-status.html`
- Disputes: `marketplace-vendor-order-dispute.html`
- Payouts: `marketplace-vendor-payout-history.html`, `marketplace-vendor-payout-hold.html`, `marketplace-vendor-payout-failed.html`, `marketplace-vendor-payout-account-setup.html`
- Credits: `marketplace-vendor-credit-history.html`

On screens up to 960px wide the portal navigation opens as a hamburger drawer instead of a bottom tab bar.

`vendor-portal-navigation.js`, `vendor-portal-navigation.css` and `marketplace-vendor-sponsored-listing-flow.css` must remain in the same folder as the HTML files because the linked pages use them.

## Preview-only notice

This is a static visual prototype. It does not include production authentication, database storage, Stripe processing, real messaging, or payout execution. Dynamic values such as `{{ORDER_ID}}` are placeholders for Bubble or backend data.
