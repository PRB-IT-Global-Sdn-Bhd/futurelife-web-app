# FutureLife vendor portals & admin (Next.js)

Production app for **FL-VPAP-2026**. Static HTML prototypes remain at the repository root for **GitHub Pages** — this package does not replace them.

## Structure

```
apps/portals/
  src/app/          App Router routes
  src/components/   Shared UI (shell, later kit)
  src/lib/          Observability helpers, API client (later)
  .env.example      Env var template (no secrets)
```

Entry routes:

- `/` — foundation landing (Vercel only)
- `/shell` — layout proof (1440×900 desktop, 390×844 mobile)

## Scripts

```bash
npm ci
npm run dev        # http://localhost:3000
npm run typecheck
npm run lint
npm run build
```

## Environments

| Variable | Dev | Staging | Production |
|----------|-----|---------|------------|
| `NEXT_PUBLIC_APP_ENV` | `development` | `staging` | `production` |
| `NEXT_PUBLIC_API_BASE_URL` | localhost or TBD | Mahir provides | Mahir provides |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | `pk_test_…` | `pk_test_…` | `pk_live_…` |
| `STRIPE_SECRET_KEY` | `sk_test_…` (server) | `sk_test_…` | `sk_live_…` |
| `STRIPE_WEBHOOK_SECRET` | Stripe CLI / dashboard | Staging endpoint | Production endpoint |

See `.env.example` for the full list.

## Preview deploys (Vercel)

1. Import the GitHub repo in Vercel.
2. Set **Root Directory** to `apps/portals` *or* use the repo-root `vercel.json` (builds this app).
3. Enable **Preview Deployments** for pull requests.
4. Open `/shell` on the preview URL for layout screenshots.

GitHub Actions workflow `.github/workflows/portals-ci.yml` runs typecheck, lint, and build on PRs.

## Style guide

Matches static prototypes: lime green (`#78be21`), white, charcoal/grey, **square corners**. Hamburger nav **below 960px** only. Admin panel (later) is desktop-only.

## API contracts

Draft: [`/docs/api-contracts.md`](../../docs/api-contracts.md) (stubs until Node.js review).