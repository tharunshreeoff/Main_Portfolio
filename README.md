# Tharun Shree B — Portfolio

A production-ready portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Content is sourced from Tharun's resume and lives in one place (`lib/data.ts`) so updates never require touching component code.

## ✨ Features

- Next.js App Router, fully typed with TypeScript
- Tailwind CSS with a CSS-variable color system (instant dark/light theme, no flash on load)
- Framer Motion scroll-reveal animations, animated hero, typing effect, animated counters
- Canvas particle background + custom cursor (desktop only, respects `prefers-reduced-motion`)
- SEO: metadata API, Open Graph/Twitter cards, dynamic `sitemap.xml` and `robots.txt`
- Accessible: semantic sections, keyboard-navigable nav, reduced-motion support
- Custom 404 and error pages
- Contact form with client-side validation (wired for easy Formspree/EmailJS/API-route swap)
- Resume download button (serves the PDF from `/public`)

## 🗂 Project Structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           Assembles all sections
  globals.css        Color system + base styles
  sitemap.ts          Dynamic sitemap
  robots.ts            Dynamic robots.txt
  not-found.tsx        Custom 404
  error.tsx             Error boundary
components/
  Nav, Hero, About, Experience, Projects, Skills,
  Certifications, Contact, Footer, Cursor, ParticleField,
  Loader, Counter, Reveal, SectionHeading, ThemeToggle
lib/
  data.ts             All resume content — edit this file to update the site
public/
  resume-tharun-shree.pdf   Downloadable resume
  favicon.svg
```

## ✏️ Editing Content

Everything text-based (name, roles, summary, experience, projects, skills, certifications) lives in **`lib/data.ts`**. Update that file and every section on the site updates automatically — no need to touch component files.

To replace the resume file, drop a new PDF into `public/` and update `resumeFile` in `lib/data.ts`.

To add a real profile photo, place an image in `public/` (e.g. `public/profile.jpg`) and swap the placeholder monogram block in `components/Hero.tsx` for a Next.js `<Image>` component.

## 🎨 Color System

All colors are CSS variables defined in `app/globals.css` (`:root` for dark, `.light` for light mode) and exposed to Tailwind via `tailwind.config.ts`. Change `--accent` / `--accent2` to re-theme the entire site in two lines.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

See `DEPLOYMENT.md` for deploying to Vercel or Netlify.

## 🧪 Quality Checks

```bash
npm run lint        # ESLint
npx tsc --noEmit     # Type-check
npm run build        # Production build
```

This project was type-checked and linted clean during development. The very first `npm run build` needs internet access (it self-hosts the Google Fonts used — Playfair Display, Inter, JetBrains Mono) — this works automatically on your machine or on Vercel/Netlify's build servers.
