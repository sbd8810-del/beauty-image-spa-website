# Beauty Image Spa Website

A premium, elegant, and conversion-focused website built with Next.js for a nail salon and beauty business.

## Tech Stack
- Next.js 14 (App Router)
- React 18
- Plain CSS (easy to edit)

## Pages
- Home (`/`)
- Services (`/services`)
- About (`/about`)
- Contact (`/contact`)

## Run Locally
```bash
npm install
npm run dev
```

## Production Build
```bash
npm run build
npm start
```

## Deploy on Vercel
1. Push this project to a Git repository.
2. Import the repository into Vercel.
3. Vercel auto-detects Next.js and deploys with default settings.

## Easy Content Editing
Business details and placeholders are marked with code comments like:
- `Replace with real phone, address, and email`
- `Replace with professional hero image`
- `Connect form action to your CRM, email service, or booking software`

Update those sections to publish real business info, media, and booking links.

## Vercel Routing Reliability
This repository includes `vercel.json` forcing the **Next.js framework preset** and standard install/build commands.

If you saw `404 NOT_FOUND` on Vercel before, it is usually because the project was detected/deployed with the wrong framework or root/output settings.
