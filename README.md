# FutureLife Vendor Portal Previews

This release contains the latest static HTML previews for the FutureLife vendor portals:

- Marketplace Vendor Portal
- Jobs Vendor Portal
- Rentals Vendor Portal

These files are visual and interaction prototypes for review. They are intended to support product design, stakeholder feedback, and Bubble.io implementation planning.

## Release files

| Archive | Open this file after extraction | Main areas included |
|---|---|---|
| `FutureLife_Marketplace_Vendor_Portal v2.0.zip` | `marketplace-vendor-dashboard.html` | Dashboard, Listings, Orders, Messages, Billing, Sponsored Listings, Plan Changes, Payouts, Order Earnings Breakdowns, Payout Statements, Notifications, Profile, Security, Fulfilment Settings, and Payout Details. |
| `FutureLife_Jobs_Vendor_Portal v2.0.zip` | `jobs-vendor-dashboard.html` | Dashboard, job listings, job create/edit flow, applicants, hires and placements, billing plans and plan changes, payment history and invoices, messages, notifications, profile, and settings. |
| `FutureLife_Rentals_Vendor_Portal v2.0.zip` | `rentals-vendor-dashboard.html` | Dashboard, properties and property details, create/edit property, availability and viewings, applications, tenancies, move-in and tenancy-end workflows, messages, billing plans, plan changes, checkout results, payment history, invoices, landlord verification, team members, notifications, profile, and settings. |

## How to view locally

1. Download the required ZIP archive.
2. Extract it without changing its folder structure.
3. Open the stated HTML entry file in a modern browser such as Google Chrome, Microsoft Edge, Safari, or Firefox.
4. Use the visible navigation links and buttons to move between the preview pages.

For the Marketplace ZIP, keep all extracted files in the same folder. Its HTML pages share `vendor-portal-navigation.js`, `vendor-portal-navigation.css`, `vendor-portal.css`, and the page-group stylesheets (`vendor-portal-ledger.css`, `vendor-portal-statement.css`, `vendor-portal-case.css`, `vendor-portal-listings.css`, `vendor-portal-flow.css`, and `vendor-portal-auth.css`).

For the Jobs ZIP, keep all extracted files in the same folder. It has one HTML page per screen (start at `jobs-vendor-dashboard.html` or `jobs-vendor-signin.html`), and the pages share `jobs-vendor-portal.css`, `jobs-vendor-portal.js`, `vendor-portal-navigation.css`, `vendor-portal-navigation.js`, and `vendor-portal-auth.css`. The older `jobs-vendor-portal.html` file now forwards `?view=` links to the matching page.

For the Rentals ZIP, keep all extracted files in the same folder. It has one HTML page per screen (start at `rentals-vendor-dashboard.html` or `rentals-vendor-signin.html`), and the pages share `rentals-vendor-portal.css`, `rentals-vendor-portal.js`, `vendor-portal-navigation.css`, `vendor-portal-navigation.js`, and `vendor-portal-auth.css`. The older `rentals-vendor-portal.html` file now forwards `?view=` links to the matching page.

## Product and implementation notes

All shown values such as `{{ORDER_ID}}`, `{{PAYOUT_AMOUNT}}`, `{{PLAN_PRICE}}`, and `{{PROPERTY_ID}}` are dynamic-data placeholders. Replace them with the corresponding Bubble dynamic expressions or secure backend data when implementing the real portals.

The previews use FutureLife visual conventions: lime green, white, charcoal/grey, responsive desktop/mobile layouts, and square corners for cards, fields, controls, and buttons.

Revenue model: FutureLife earns from vendors only through subscription plans and sponsored listings. There are no listing or job-post credits, placement fees, rental commissions, or order or transaction fees. For Marketplace, card and online payment processing fees are deducted from each order before payout. The Marketplace portal includes preview checkout flows for Sponsored Listings and plan changes; Jobs and Rentals use plan allowances. Retired fee, commission and credit pages redirect to the nearest billing page.

## Preview-only limitations

These ZIP files are not production applications. They do not include:

- Real vendor authentication or permissions
- Database storage or live Bubble data types
- Stripe Checkout, webhook validation, or real payments
- Actual bank payouts or invoices
- Live messaging, notifications, or file uploads
- Production security, audit logs, or admin approval logic

For a live deployment, connect the UX to Bubble workflows and backend services. Treat all client-side placeholders and preview interactions as non-authoritative. Payment-driven entitlements, plan changes, sponsored listings, and payouts must be verified server-side before any permanent record or user entitlement is updated.

## Hosting note

The current Manus development-preview URLs are temporary and depend on the active development environment. To share a stable preview outside Manus, deploy the extracted static files to a static host such as Cloudflare Pages, GitHub Pages, or Netlify.
