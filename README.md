# VPN Portal

Private frontend portal for a small JP node setup. This repo is now prepared for `GitHub Pages` static deployment.

## What this repo is

- public landing page
- login and member dashboard mock
- Clash subscription and one-click import UI
- traffic / purity display layout
- GitHub Pages deployment workflow

## What this repo is not

`GitHub Pages` cannot safely host:

- real user authentication
- real passwords or sessions
- private subscription generation
- Xray usage APIs
- live `ping0.cc` proxy/cache logic

Those must live on your VPS or another backend.

## Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- local shadcn-style UI components
- Radix UI primitives
- local fonts: IBM Plex Mono + Space Grotesk

## Commands

```bash
npm run dev
npm run lint
npm run build
```

`npm run build` uses `webpack` because `Turbopack` hit sandbox/process restrictions in this environment.

## Static deployment

This project is configured with:

- `output: "export"`
- `trailingSlash: true`
- auto `basePath` handling for GitHub project pages
- `.github/workflows/deploy-pages.yml`

### GitHub setup

1. Push this repo to GitHub.
2. In GitHub, open `Settings -> Pages`.
3. Set `Source` to `GitHub Actions`.
4. Keep your default branch as `main`.
5. Push to `main` to trigger deployment.

If your repo name is not `username.github.io`, the workflow automatically uses `/<repo-name>` as `basePath`.

## Environment variables

Copy `.env.example` when you want to point the frontend at your real backend:

```bash
NEXT_PUBLIC_API_BASE_URL=https://your-vps-domain-or-ip/api
NEXT_PUBLIC_DEPLOYMENT_TARGET=github-pages
```

For GitHub Pages, set `NEXT_PUBLIC_API_BASE_URL` in:

- `Settings -> Secrets and variables -> Actions -> Variables`

Recommended value right now:

```bash
https://103.25.100.166/api
```

Use a real domain later if you add HTTPS.

## Routes

- `/` landing + login pitch
- `/login` portal entry
- `/dashboard` member dashboard mock

## Next backend steps

1. Add a VPS backend for users, sessions, usage, and subscription tokens.
2. Move subscription YAML generation to a protected API route on the VPS.
3. Sync Xray traffic stats into a database or cached snapshots.
4. Add a cached purity-check worker for `ping0.cc`.
5. Replace mock data in `src/lib/mock-data.ts`.
