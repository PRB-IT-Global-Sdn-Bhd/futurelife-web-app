# FutureLife Marketplace Vendor Portal

## Open the portal

Open `marketplace-vendor-dashboard.html` in a modern web browser.

## Included flows

This archive contains the current Marketplace Vendor Portal preview, including listings, orders, messages, notifications, billing, sponsored listings, plan changes, Payouts, payout history, payout statements, order earnings breakdowns, payout account details, fulfilment settings, account security, and related preview routes.

Merged pages (one page, several views):

- Billing (sidebar group with exactly two pages, Plans & Subscriptions and Sponsored Listings): `marketplace-vendor-plans-and-subscriptions.html` shows the current plan, plan comparison, invoices and the billing contact & payment method (default `?tab=plans`), plus `?tab=change` (plan change), `?tab=review&target=` (plan change review), `?tab=checkout&flow=plan-change&state=` (checkout result), `?tab=history` (payment history), `?tab=invoice` (invoice) and `?tab=refund` (refund / dispute status).
- Payouts (its own top-level sidebar item, not part of Billing; payouts are vendor earnings): `marketplace-vendor-payouts.html` (payouts are sent to the vendor’s bank account; card and online payment processing fees are deducted from each order before payout) (`?view=history` shows Payout History, filterable with `&status=scheduled|paid|held|failed`).
- Payout statement: `marketplace-vendor-payout-statement.html?payout=` (`?view=breakdown&order=` shows the order earnings breakdown).
- Sponsored Listings: `marketplace-vendor-sponsored-listings.html?step=choose|review` (choose an option, then review the payment); `?tab=checkout&flow=sponsored-listing&state=` shows the checkout result.

Checkout return states for sponsored listings and plan changes use `?tab=checkout&state=processing|success|failed|cancelled|expired` on Sponsored Listings (`flow=sponsored-listing`) and Plans & Subscriptions (`flow=plan-change`). The payment and review pages open the processing state (awaiting verified payment confirmation); success is only shown after server confirmation.

Additional P0 pages (use `?state=` to preview each state where available):

- Account access: `marketplace-vendor-forgot-password.html`, `marketplace-vendor-reset-password.html`, `marketplace-vendor-verify-email.html`, `marketplace-vendor-account-suspended.html`
- Onboarding: `marketplace-vendor-onboarding-business-details.html`, `marketplace-vendor-onboarding-terms.html` (`?view=accepted` is the read-only view opened from Profile), `marketplace-vendor-onboarding-status.html`
- Verified Seller: `marketplace-vendor-verification-application.html`, `marketplace-vendor-verification-status.html`
- Listings: `marketplace-vendor-listing-details.html`, `marketplace-vendor-create-listing.html?mode=edit` (edit an existing listing), `marketplace-vendor-listing-guidelines.html`
- Payments: `marketplace-vendor-payment-history.html`, `marketplace-vendor-invoice.html`, `marketplace-vendor-payment-refund-status.html`
- Disputes: `marketplace-vendor-order-dispute.html`
- Payouts: `marketplace-vendor-payouts.html?view=history`, `marketplace-vendor-payout-hold.html`, `marketplace-vendor-payout-account.html` (`?state=pending|verified|action-required|edit|failed`)
- Orders: `marketplace-vendor-order-details.html` (`?state=new|processing|ready-for-dispatch|dispatched|delivered|ready-for-collection|collected|completed|cancelled&method=delivery|collection`)

Revenue model: FutureLife earns from vendors only through subscription plans and sponsored listings. There are no listing or job-post credits, placement fees, rental commissions, or order or transaction fees. Card and online payment processing fees are deducted from each Marketplace order before payout. `marketplace-vendor-listing-credits.html` and `marketplace-vendor-credit-history.html` are retired and redirect to `marketplace-vendor-plans-and-subscriptions.html`, keeping the query string and hash.

Retired billing pages redirect (keeping the query string and hash) to the matching page and tab: `marketplace-vendor-billing.html` → Plans & Subscriptions; `plan-change` → `?tab=change`; `plan-change-review` → `?tab=review`; `payment-history` → `?tab=history`; `invoice` → `?tab=invoice`; `payment-refund-status` → `?tab=refund`; `checkout-result` → `?tab=checkout` on Sponsored Listings when `flow=sponsored-listing`, otherwise on Plans & Subscriptions; `marketplace-vendor-sponsored-listing.html` → `marketplace-vendor-sponsored-listings.html`.

Sign in is `marketplace-vendor-signin.html` (`?loggedout=1` after logout). Retired page URLs are redirected by the site `404.html` to the merged page and state.

On screens up to 960px wide the portal navigation opens as a hamburger drawer instead of a bottom tab bar.

Shared styles: `vendor-portal.css` (shell and components used by every portal page), the page-group files `vendor-portal-ledger.css`, `vendor-portal-statement.css`, `vendor-portal-case.css`, `vendor-portal-listings.css`, `vendor-portal-flow.css` (payment-review and checkout flows) and `vendor-portal-auth.css` (sign-in and account-access pages), then `vendor-portal-navigation.css` (sidebar, hamburger drawer). Each page keeps only its own unique rules inline.

`vendor-portal-navigation.js` and the `vendor-portal*.css` files must remain in the same folder as the HTML files because the linked pages use them.

## Preview-only notice

This is a static visual prototype. It does not include production authentication, database storage, Stripe processing, real messaging, or payout execution. Dynamic values such as `{{ORDER_ID}}` are placeholders for Bubble or backend data.
