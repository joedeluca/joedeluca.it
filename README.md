# joedeluca.it

Senior copywriter and creative director. US agency pedigree. Works in English. Based in Sardinia.

Built on Next.js 16, Tailwind, Supabase auth, deployed on Vercel.

## Setup

```bash
npm install
cp .env.local.example .env.local   # fill in your credentials
npm run dev
```

## Environment

Copy `.env.local` and fill in:

- **Supabase** — create a new project at [supabase.com](https://supabase.com)
- **iCloud email** — SMTP via iCloud for contact/notification emails
- **Resend** — transactional email (optional)
- **Google Analytics** — replace `G-PLACEHOLDER` in `app/layout.tsx`

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [Tailwind CSS](https://tailwindcss.com)
- [Supabase](https://supabase.com) — auth + database
- [Vercel](https://vercel.com) — deployment
- [Biome](https://biomejs.dev) — linting / formatting

## Deploy

Push to `main` → auto-deploys on Vercel. Set all env vars in the Vercel project settings.
