# Project Memory Log

## 2026-03-24

### Homepage founder-story rewrite and CTA cleanup
- Reworked homepage copy in `apps/web/app/page.tsx` to reflect a founder-story / Malaysia-first direction.
- Hero headline now reads `Build your journey` / `with us.` with red text emphasis on `journey`.
- Hero body now emphasizes:
  - four young minds
  - friendly
  - stable
  - high-quality
  services for Malaysians.
- About section heading was simplified to `ABOUT US` and restyled to match the serif display treatment used by `Our Story`.

### About grid content rewrite
- Replaced old generic about-card messaging with:
  - `4 YOUNG MINDS`
  - `AFFORDABLE PRICING`
  - `BUILT FOR MALAYSIA`
- Updated descriptions to focus on:
  - founder inspiration
  - fair pricing for Malaysians
  - local relevance and service quality

### Story timeline rewrite
- Rewrote `landingStoryItems` in `apps/web/config/landing.ts` to reflect the actual brand narrative:
  - `2023: The Beginning of Game Hosting`
  - `2025: The First Step`
  - `04.03.2026: The Birth of BURHAN HOSTING`
- Updated first story to explain that one of the four teenagers started learning servers/local hosting due to laggy overseas hosting.
- Updated second story to center around the start of the `BURHAN BISTRO` community.
- Added support for one inline story link in `apps/web/components/marketing/story-section.tsx`.
- `BURHAN BISTRO` now links to `https://discord.burhan.my`.
- Updated third story to describe the launch of BURHAN HOSTING with affordable pricing and ease of use.

### CTA and route exposure changes
- Final story CTA block now says `GO TO BURHAN HOTING` with supporting text `Start your hosting journey with us.`
- Final story CTA button now says `BURHAN CONSOLE` and links to `https://console.burhan.my/`.
- Replaced homepage hero CTAs:
  - primary -> `/hosting`
  - secondary -> `https://console.burhan.my/`
- Removed `/services` and `/contact` from top-level site navigation in `apps/web/config/site.ts`.
- Replaced cafe/community contact-style links with `https://discord.burhan.my` in homepage/community-facing surfaces.

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
