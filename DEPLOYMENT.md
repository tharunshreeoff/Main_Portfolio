# Deployment Guide

## Option A — Vercel (recommended, made by the Next.js team)

1. Push this folder to a new GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Next.js** (auto-detected). No config needed.
4. Click **Deploy**. You'll get a live URL in ~60 seconds.
5. Optional: add a custom domain under **Project → Settings → Domains**.

Every push to `main` auto-deploys.

## Option B — Netlify

1. Push this folder to GitHub.
2. In Netlify: **Add new site → Import an existing project**.
3. Build command: `npm run build`
4. Publish directory: leave default (Netlify's Next.js runtime handles this automatically via the `@netlify/plugin-nextjs` plugin, which Netlify adds for you when it detects Next.js).
5. Deploy.

## Before you deploy — quick checklist

- [ ] Replace the "TS" monogram in `components/Hero.tsx` with your real photo (`public/profile.jpg`).
- [ ] Update `public/resume-tharun-shree.pdf` whenever your resume changes.
- [ ] Add a real Open Graph image at `public/og-image.png` (1200×630px) — referenced in `app/layout.tsx`.
- [ ] Wire the contact form to a real backend: the easiest options are:
  - **Formspree** — swap the `mailto:` redirect in `components/Contact.tsx` for a `fetch()` POST to your Formspree endpoint.
  - **Next.js Route Handler** — create `app/api/contact/route.ts` and send via [Resend](https://resend.com) or Nodemailer.
- [ ] Update `siteUrl` in `app/layout.tsx` and the `base` URL in `app/sitemap.ts` / `app/robots.ts` if your domain changes from `tharunshree.netlify.app`.

## Local production test

```bash
npm run build
npm run start
```

Visit `http://localhost:3000` to test the production build locally before pushing.
