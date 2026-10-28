# FutureLife Vendor Portal Previews

This release contains the latest static HTML previews for the FutureLife vendor portals:

- Marketplace Vendor Portal
- Jobs Vendor Portal
- Rentals Vendor Portal

These files are visual and interaction prototypes for review. They are intended to support product design, stakeholder feedback, and Bubble.io implementation planning.

## Release files

| Archive | Open this file after extraction | Main areas included |
|---|---|---|
| `FutureLife_Marketplace_Vendor_Portal_Latest.zip` | `marketplace-vendor-dashboard.html` | Dashboard, Listings, Orders, Messages, Billing, Sponsored Listings, Listing Credits, Plan Changes, Platform Fees, Order Earnings Breakdowns, Payout Statements, Notifications, Profile, Security, Fulfilment Settings, and Payout Details. |
| `FutureLife_Jobs_Vendor_Portal_Latest.zip` | `jobs-vendor-portal.html` | Dashboard, job listings, job create/edit flow, applicants, hires and placements, billing, job-posting and placement-fee views, messages, notifications, profile, and settings. |
| `FutureLife_Rentals_Vendor_Portal_Latest.zip` | `rentals-vendor-portal.html` | Dashboard, properties, applications, tenancies, move-in workflows, messages, billing plans, listing fees, rental commissions, notifications, profile, and related settings. |

## How to view locally

1. Download the required ZIP archive.
2. Extract it without changing its folder structure.
3. Open the stated HTML entry file in a modern browser such as Google Chrome, Microsoft Edge, Safari, or Firefox.
4. Use the visible navigation links and buttons to move between the preview pages.

For the Marketplace ZIP, keep all extracted files in the same folder. Its HTML pages share `vendor-portal-navigation.js` and `marketplace-vendor-sponsored-listing-flow.css`.

## Product and implementation notes

All shown values such as `{{ORDER_ID}}`, `{{PAYOUT_AMOUNT}}`, `{{PLAN_PRICE}}`, and `{{PROPERTY_ID}}` are dynamic-data placeholders. Replace them with the corresponding Bubble dynamic expressions or secure backend data when implementing the real portals.

The previews use FutureLife visual conventions: lime green, white, charcoal/grey, responsive desktop/mobile layouts, and square corners for cards, fields, controls, and buttons.

The Marketplace settlement flow shows platform fees as automatically deducted from eligible order earnings before vendor payout. Standard Marketplace order fees should not create a separate manual vendor checkout. The portal also includes separate preview flows for elective vendor purchases such as Sponsored Listings, Listing Credits, and plan changes.

## Preview-only limitations

These ZIP files are not production applications. They do not include:

- Real vendor authentication or permissions
- Database storage or live Bubble data types
- Stripe Checkout, webhook validation, or real payments
- Actual bank payouts, commission calculation, or invoices
- Live messaging, notifications, or file uploads
- Production security, audit logs, or admin approval logic

For a live deployment, connect the UX to Bubble workflows and backend services. Treat all client-side placeholders and preview interactions as non-authoritative. Payment-driven entitlements, plan changes, listing credits, and payouts must be verified server-side before any permanent record or user entitlement is updated.

## Hosting note

The current Manus development-preview URLs are temporary and depend on the active development environment. To share a stable preview outside Manus, deploy the extracted static files to a static host such as Cloudflare Pages, GitHub Pages, or Netlify.
