# BurHan Hosting Monorepo

Modern game-server hosting landing page built with Bun, Turborepo, Next.js, TypeScript, Tailwind CSS, and shadcn-style shared UI primitives.

## Workspace

- `apps/web`: BurHan Hosting marketing site
- `apps/docs`: placeholder docs app
- `packages/ui`: shared UI primitives, tokens, and utilities
- `packages/eslint-config`: shared ESLint presets
- `packages/typescript-config`: shared TypeScript presets

## Commands

```bash
bun install
bun run dev
bun run build
bun run lint
bun run typecheck
```

## shadcn Structure

- Shared shadcn primitives live in `packages/ui/src/components`
- Shared theme tokens live in `packages/ui/src/styles/globals.css`
- App-local UI integrations live in `apps/web/components/ui`

The landing page navbar is intentionally app-local in `apps/web/components/ui/tubelight-navbar.tsx` because it depends on marketing-site routing and should not be treated as a generic shared primitive.
