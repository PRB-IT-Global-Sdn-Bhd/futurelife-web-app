# FutureLife Marketplace Vendor Portal

## Open the portal

Open `marketplace-vendor-dashboard.html` in a modern web browser.

## Included flows

This archive contains the current Marketplace Vendor Portal preview, including listings, orders, messages, notifications, billing, sponsored listings, listing credits, plan changes, Platform Fees, order earnings breakdowns, payout statements, payout account details, fulfilment settings, account security, and related preview routes.

Checkout return states for sponsored listings, listing credits and plan changes each have a processing (awaiting verified payment confirmation), cancelled and expired page, for example `marketplace-vendor-sponsored-listing-processing.html`, `-cancelled.html` and `-expired.html`. The payment and review pages now open the processing page; success is only shown after server confirmation.

On screens up to 960px wide the portal navigation opens as a hamburger drawer instead of a bottom tab bar.

`vendor-portal-navigation.js`, `vendor-portal-navigation.css` and `marketplace-vendor-sponsored-listing-flow.css` must remain in the same folder as the HTML files because the linked pages use them.

## Preview-only notice

This is a static visual prototype. It does not include production authentication, database storage, Stripe processing, real messaging, or payout execution. Dynamic values such as `{{ORDER_ID}}` are placeholders for Bubble or backend data.
