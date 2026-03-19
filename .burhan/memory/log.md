# Project Memory Log

## 2026-03-20

### BurhanDev landing redesign implemented
- Reworked `apps/web` public-facing UI into a new BurhanDev marketing shell.
- Added manual light/dark mode with persistence via `burhandev-theme`.
- Replaced old cyber-blue homepage direction with a red/black/white editorial landing page.
- Added new reusable marketing components:
  - `marketing-header`
  - `marketing-footer`
  - `theme-toggle`
  - `hero-shape-composition`
  - `feature-strip`
  - `about-grid`
  - `story-section`
  - `services-grid`
  - `contact-cta`
  - `visual-placeholder`
- Added structured landing content config in `apps/web/config/landing.ts`.
- Updated global tokens and utilities in `apps/web/app/globals.css`.
- Updated shared UI surfaces in `packages/ui` for better compatibility with the new light/dark system.
- Restyled several internal marketing pages to inherit the new shell without changing existing support/contact logic.

### Notes
- Root `app/layout.tsx` now applies the marketing shell globally instead of a separate `app/(marketing)` route group.
- `.burhan/memory` was missing before this save and has now been created.
