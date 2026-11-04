# FutureLife Marketplace Vendor Portal

## Open the portal

Open `marketplace-vendor-dashboard.html` in a modern web browser.

## Included flows

This archive contains the current Marketplace Vendor Portal preview, including listings, orders, messages, notifications, billing, sponsored listings, plan changes, Payouts, payout history, payout statements, order earnings breakdowns, payout account details, fulfilment settings, account security, and related preview routes.

Merged pages (one page, several views):

- Billing: `marketplace-vendor-billing.html` shows the current plan (Marketplace Basic is Free), plan comparison with Manage Plan / Upgrade Plan, the sponsored listing summary, invoices (billing history), and the billing contact & payment method. The sidebar sub-link Plans & Sponsored Listings opens `marketplace-vendor-billing.html#plans-and-fees`.
- Payouts: `marketplace-vendor-payouts.html` (fee-free: sellers receive the full order amount less refunds) (`?view=history` shows Payout History, filterable with `&status=scheduled|paid|held|failed`).
- Payout statement: `marketplace-vendor-payout-statement.html?payout=` (`?view=breakdown&order=` shows the order earnings breakdown).
- Sponsored listing: `marketplace-vendor-sponsored-listing.html?step=choose|review` (choose an option, then review the payment).

Checkout return states for sponsored listings and plan changes share one page, `marketplace-vendor-checkout-result.html?flow=sponsored-listing|plan-change&state=processing|success|failed|cancelled|expired`. The payment and review pages open the processing state (awaiting verified payment confirmation); success is only shown after server confirmation.

Additional P0 pages (use `?state=` to preview each state where available):

- Account access: `marketplace-vendor-forgot-password.html`, `marketplace-vendor-reset-password.html`, `marketplace-vendor-verify-email.html`, `marketplace-vendor-account-suspended.html`
- Onboarding: `marketplace-vendor-onboarding-business-details.html`, `marketplace-vendor-onboarding-terms.html` (`?view=accepted` is the read-only view opened from Profile), `marketplace-vendor-onboarding-status.html`
- Verified Seller: `marketplace-vendor-verification-application.html`, `marketplace-vendor-verification-status.html`
- Listings: `marketplace-vendor-listing-details.html`, `marketplace-vendor-create-listing.html?mode=edit` (edit an existing listing), `marketplace-vendor-listing-guidelines.html`
- Payments: `marketplace-vendor-payment-history.html`, `marketplace-vendor-invoice.html`, `marketplace-vendor-payment-refund-status.html`
- Disputes: `marketplace-vendor-order-dispute.html`
- Payouts: `marketplace-vendor-payouts.html?view=history`, `marketplace-vendor-payout-hold.html`, `marketplace-vendor-payout-account.html` (`?state=pending|verified|action-required|edit|failed`)
- Orders: `marketplace-vendor-order-details.html` (`?state=new|processing|ready-for-dispatch|dispatched|delivered|ready-for-collection|collected|completed|cancelled&method=delivery|collection`)

Revenue model: FutureLife earns from vendors only through subscription plans and sponsored listings. There are no listing or job-post credits, placement fees, rental commissions, or order or transaction fees. `marketplace-vendor-listing-credits.html` and `marketplace-vendor-credit-history.html` are retired and redirect to `marketplace-vendor-billing.html`, keeping the query string and hash.

Sign in is `marketplace-vendor-signin.html` (`?loggedout=1` after logout). Retired page URLs are redirected by the site `404.html` to the merged page and state.

On screens up to 960px wide the portal navigation opens as a hamburger drawer instead of a bottom tab bar.

Shared styles: `vendor-portal.css` (shell and components used by every portal page), the page-group files `vendor-portal-ledger.css`, `vendor-portal-statement.css`, `vendor-portal-case.css`, `vendor-portal-listings.css`, `vendor-portal-flow.css` (payment-review and checkout flows) and `vendor-portal-auth.css` (sign-in and account-access pages), then `vendor-portal-navigation.css` (sidebar, hamburger drawer). Each page keeps only its own unique rules inline.

`vendor-portal-navigation.js` and the `vendor-portal*.css` files must remain in the same folder as the HTML files because the linked pages use them.

## Preview-only notice

This is a static visual prototype. It does not include production authentication, database storage, Stripe processing, real messaging, or payout execution. Dynamic values such as `{{ORDER_ID}}` are placeholders for Bubble or backend data.
