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

## 2026-03-20

### Navbar, theme toggle, and hosting page follow-up updates
- Updated navbar interactions so `Home` scrolls to hero and clears the hash back to `/`.
- Removed `Sign in` and `GET STARTED` from the main navbar.
- Fixed navbar theme-sync behavior so color changes update immediately without page refresh.
- Replaced the old icon button theme toggle with a styled `SkyToggle` component in `apps/web/components/ui/sky-toggle.tsx`.
- Added `styled-components` support to `apps/web`:
  - `styled-components` dependency installed
  - Next compiler support enabled
  - SSR registry added via `apps/web/lib/styled-components-registry.tsx`

### Hosting page refinements
- Made hosting hero/wavy background theme-aware for both light and dark modes.
- Reworked the old hosting `OurStoryBentoGrid` into a hosting-features section inspired by the provided reference image.
- Adjusted hosting layout sections to use full-width wrappers instead of `section-shell`.
- Removed a custom hosting contact section and replaced it with the shared `ContactCta`.

### Ongoing polish notes
- User is highly sensitive to exact visual parity, especially for navbar theme states, contrast in light mode, and layout spacing.
- Brave browser may show stale styling longer than Chrome, so browser cache can affect user verification.
