# AFTERDARK

An editorial newsletter publication built with Next.js, TypeScript, and Tailwind CSS.

## Run locally

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`.

## Included

- App Router routes for the homepage, story archive, four editorial sections, story templates, newsletter archive, Issue 001, and About.
- Local, structured publication content in `data/content.ts` so a CMS or newsletter provider can replace it later without redesigning routes.
- Client-side newsletter form that provides a success state but does not send data. Connect it to Beehiiv, Kit, Substack, Ghost, ConvertKit, or a custom endpoint when the destination is ready.
- Local editorial imagery served from `public/assets`.
