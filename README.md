# Laura Valentina — Microblading & Nail Salon

Premium beauty services in Biel/Bienne (studio + at-home). Built with Next.js 14, TypeScript, Tailwind CSS, deployed on Netlify.

## Stack
- Next.js 14 App Router + TypeScript
- Tailwind CSS (custom brown / pink / cream theme)
- Bilingual FR/DE (context-based switcher, no Next.js i18n routing)
- Calendly inline + popup booking
- Schema.org `BeautySalon` + `Service` JSON-LD

## Local development
```bash
cp .env.example .env.local   # fill Calendly + WhatsApp + Instagram
npm install
npm run dev
```

## Deploy (Netlify)
- `netlify.toml` already configured (`@netlify/plugin-nextjs`).
- Set env vars in Netlify dashboard:
  - `NEXT_PUBLIC_CALENDLY_URL`
  - `NEXT_PUBLIC_SITE_URL`
  - `NEXT_PUBLIC_WHATSAPP_NUMBER`
  - `NEXT_PUBLIC_INSTAGRAM_HANDLE`

## What's pending from Laura
- Final pricing for each microblading + nail service
- Studio street address (used in schema + Google Maps embed)
- Phone / WhatsApp number
- Calendly account URL with FR/DE event types per service
- Real photography (hero, before/after gallery, portrait)
- Certifications text + bio
- Travel radius + at-home travel fee tiers
