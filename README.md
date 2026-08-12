# Liberty Baptist Academy — Website

Standalone website for **Liberty Baptist Academy** in Sarasota, Florida.

## Tech Stack

- Next.js 16 App Router + React 19
- Tailwind CSS v4
- TypeScript
- Vercel deployment

## Routes

| Route | What it is |
|---|---|
| `/` | Main academy homepage |
| `/academy` | Same academy experience, kept as a fallback path |
| `/apply` | Digital school application form |

## Key Facts

- Address: 4249 Bahia Vista Street, Sarasota, FL 34232
- Phone: (941) 371-8239
- Parent ministry: Liberty Baptist Church
- Curriculum: Accelerated Christian Education
- Grades: Kindergarten-12
- Mascot: LBA Hawks
- Facebook: https://facebook.com/LBCsarasota

## Editing

- Main page content lives in `src/app/academy/page.tsx`.
- Application form lives in `src/app/apply/`.
- The root homepage reuses that page from `src/app/page.tsx`.
- Navigation is in `src/components/Navbar.tsx`.
- Footer links and contact details are in `src/components/Footer.tsx`.
- School photos are in `public/academy-*.jpg`.

## Run Locally

```bash
npm install
npm run dev
npm run build
```
