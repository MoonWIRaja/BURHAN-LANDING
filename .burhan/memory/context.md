# Project Context

## Project
- Name: BURHAN-LANDING
- Stack: Next.js App Router, React 19, TypeScript, Tailwind CSS v4, monorepo with `apps/web` and shared `packages/ui`
- Main app worked on: `apps/web`

## Current Direction
- Public site has been redesigned toward a BurhanDev editorial landing style with red/black/white branding.
- Manual dark/light mode is implemented without adding `next-themes`.
- Theme persistence uses `localStorage` key `burhandev-theme`.

## Key Implementation State
- Global marketing shell now wraps public pages from `apps/web/app/layout.tsx`.
- Homepage `/` has been rebuilt to match the provided mockup direction:
  - curved navbar
  - large hero with abstract shape composition
  - business feature strip
  - about cards
  - story section
  - services grid
  - contact CTA
  - oversized footer wordmark
- New content config lives in `apps/web/config/landing.ts`.
- New reusable components live under `apps/web/components/marketing/`.
- Global design tokens and custom utility classes are in `apps/web/app/globals.css`.

## Pages Already Restyled
- `/`
- `/services`
- `/contact`
- `/custom-plan`
- `/ticket-support`
- `/company-home`
- `/features`
- `/team`
- `/hosting` partially aligned through shell/token updates

## Forms / Logic Preserved
- Existing API routes are unchanged:
  - `/api/lead`
  - `/api/ticket`
- Existing form logic is preserved in:
  - `apps/web/components/lead-interest-form.tsx`
  - `apps/web/components/ticket-support-form.tsx`

## Verification Status
- `bun run typecheck` passed in `apps/web`
- `bun run build` passed in `apps/web`

## Follow-up Likely Needed
- Tighten visual parity with the provided screenshots, especially spacing and fine-grain contrast.
- Consider moving public routes into a true `app/(marketing)` route group if the repo wants stricter route separation.
- Continue restyling older hosting-specific showcase components if they still feel visually inconsistent.
