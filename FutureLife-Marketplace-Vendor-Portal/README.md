# FutureLife Marketplace Vendor Portal

## Open the portal

Open `marketplace-vendor-dashboard.html` in a modern web browser.

## Included flows

This archive contains the current Marketplace Vendor Portal preview, including listings, orders, messages, notifications, billing, sponsored listings, listing credits, plan changes, Platform Fees, order earnings breakdowns, payout statements, payout account details, fulfilment settings, account security, and related preview routes.

Checkout return states for sponsored listings, listing credits and plan changes share one page, `marketplace-vendor-checkout-result.html?flow=sponsored-listing|listing-credits|plan-change&state=processing|success|failed|cancelled|expired`. The payment and review pages open the processing state (awaiting verified payment confirmation); success is only shown after server confirmation.

Additional P0 pages (use `?state=` to preview each state where available):

- Account access: `marketplace-vendor-forgot-password.html`, `marketplace-vendor-reset-password.html`, `marketplace-vendor-verify-email.html`, `marketplace-vendor-account-suspended.html`
- Onboarding: `marketplace-vendor-onboarding-business-details.html`, `marketplace-vendor-onboarding-terms.html` (`?view=accepted` is the read-only view opened from Profile), `marketplace-vendor-onboarding-status.html`
- Verified Seller: `marketplace-vendor-verification-application.html`, `marketplace-vendor-verification-status.html`
- Listings: `marketplace-vendor-listing-details.html`, `marketplace-vendor-create-listing.html?mode=edit` (edit an existing listing), `marketplace-vendor-listing-guidelines.html`
- Payments: `marketplace-vendor-payment-history.html`, `marketplace-vendor-invoice.html`, `marketplace-vendor-payment-refund-status.html`
- Disputes: `marketplace-vendor-order-dispute.html`
- Payouts: `marketplace-vendor-payout-history.html`, `marketplace-vendor-payout-hold.html`, `marketplace-vendor-payout-account.html` (`?state=pending|verified|action-required|edit|failed`)
- Orders: `marketplace-vendor-order-details.html` (`?state=new|processing|ready-for-dispatch|dispatched|delivered|ready-for-collection|collected|completed|cancelled&method=delivery|collection`)
- Credits: `marketplace-vendor-credit-history.html`

Sign in is `marketplace-vendor-signin.html` (`?loggedout=1` after logout). Retired page URLs are redirected by the site `404.html` to the merged page and state.

On screens up to 960px wide the portal navigation opens as a hamburger drawer instead of a bottom tab bar.

`vendor-portal-navigation.js`, `vendor-portal-navigation.css` and `marketplace-vendor-sponsored-listing-flow.css` must remain in the same folder as the HTML files because the linked pages use them.

## Preview-only notice

This is a static visual prototype. It does not include production authentication, database storage, Stripe processing, real messaging, or payout execution. Dynamic values such as `{{ORDER_ID}}` are placeholders for Bubble or backend data.
