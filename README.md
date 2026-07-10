# print.atonomi.ai

A marketing landing page for atonomi’s apparel printing outreach platform, built with Next.js and Tailwind CSS.

This repository contains the public-facing website experience for the automated postcard + personalized landing page product that helps screen-print, DTG, and embroidery shops win more local B2B orders.

## ✨ Highlights

- Clean, modern landing page design optimized for conversions
- Dedicated sections for hero, problem, solution, features, testimonials, pricing, and FAQ
- Custom postcard showcase and visual product flow
- Responsive layout using the Next.js App Router
- Smooth interactions powered by Framer Motion
- PostHog analytics integration for visitor tracking

## 🛠️ Tech Stack

- `next` 16.2.4
- `react` 19.2.4
- `tailwindcss` 4
- `framer-motion`
- `lucide-react`
- `posthog-js`
- `typescript`
- `eslint`

## 📁 Project Structure

- `src/app/page.tsx` — landing page composition
- `src/components/` — section components used on the page
- `src/app/globals.css` — global styling and base layout rules
- `src/public/assets/` — static assets and illustrations
- `atonomi-Engineering-Landing-Page-Instructions.md` — design and copy brief for the landing page

## 🚀 Get Started

Install dependencies:

```bash
npm install
```

Start development:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## � Preview

- **Local preview:** open [http://localhost:3000](http://localhost:3000) after running `npm run dev`
- **Deployment preview:** if linked to Vercel, preview URLs appear automatically for pull requests.

## �📦 Available Scripts

- `npm run dev` — run the app locally
- `npm run build` — build for production
- `npm run start` — run the production build locally
- `npm run lint` — run ESLint checks

## 🧭 Recommended Workflow

1. Edit or add page sections in `src/components/`
2. Preview changes locally at `http://localhost:3000`
3. Commit copy and UI updates
4. Deploy previews and production builds to Vercel

## 🌐 Deployment

This project is well-suited for Vercel deployment.

1. Connect the repository to Vercel
2. Use the `main` branch for production
3. Enable automatic builds on push

## 📌 Notes

This repo reflects the atonomi landing page brief: automated local lead generation for custom apparel businesses through postcard outreach, AI mockups, and branded landing pages.

For full product and visual guidelines, see `atonomi-Engineering-Landing-Page-Instructions.md`.
