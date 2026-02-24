# AGENTS.md

## Language

- Think in English, but output all user-facing text in Japanese.

## Package Manager

- Use **pnpm** for project management and dependency resolution.
- To add a dependency, run: `pnpm install <package>`
- To add a dev dependency, run: `pnpm install -D <package>`
- To add a dependency to a specific workspace app, run: `pnpm --filter <app-name> install <package>`
- Never use `npm` or `yarn`.

## Monorepo Structure

This project uses a pnpm workspace monorepo. The workspace is organized as follows:

```
apps/
  homepage/    — Homepage & MyPage for the certification (Next.js)
  exam/        — Certification exam application (Next.js)
  ec-site/     — External e-commerce site (Next.js)
```

## Coding Standards

- Use TypeScript for all source code.
- Use ESLint and Prettier for linting and formatting.
- Follow the Next.js App Router conventions.
- Keep shared logic in the `packages/` directory.
