# AGENTS.md

This file provides guidance to AI coding agents when working with code in this repository.

## Project Overview

- **Framework**: Astro 5.x with static output
- **Language**: TypeScript with strict null checks
- **Styling**: TailwindCSS 4.x with @tailwindcss/vite plugin
- **Content**: Astro Content Collections with JSON data sources
- **Node.js**: 22+ (`engines.node: >=22.0.0`)
- **Package Manager**: Bun (preferred), npm (fallback)

## Quick Commands

### Development
- Dev server: `bun run dev` (fallback: `npm run dev`)
- Build: `bun run build` (fallback: `npm run build`)
- Preview: `bun run preview` (fallback: `npm run preview`)

### Code Quality
- Lint check: `bun run lint:check` (fallback: `npm run lint:check`, uses oxlint)
- Lint fix: `bun run lint:fix` (fallback: `npm run lint:fix`)
- Format check: `bun run format:check` (fallback: `npm run format:check`, uses oxfmt)
- Format write: `bun run format:write` (fallback: `npm run format:write`)
- Astro check: `bun run astro:check` (fallback: `npm run astro:check`)
- Markdown lint: `bun run markdownlint` (fallback: `npm run markdownlint`)

### Maintenance
- Update dependencies: `bun run update-dependencies` (fallback: `npm run update-dependencies`)

## Code Style (Enforced by oxfmt/oxlint)

- **Formatter**: oxfmt (Oxford formatter), not Biome
- **Indentation**: 2 spaces (configured in `.oxfmtrc.json`)
- **Quotes**: Double quotes
- **Semicolons**: Only as needed (omitted where optional)
- **Trailing Commas**: ES5 style
- **Print Width**: 80 characters
- **Import Organization**: Handled automatically by formatter

## Project Architecture

### Directory Structure
```
src/
├── components/
│   ├── block/      # Reusable content blocks (e.g., article-block.astro)
│   ├── inline/     # Inline components (e.g., category-inline.astro)
│   └── structure/  # Layout structure (head, body, meta, etc.)
├── layouts/        # Page layouts (single-column, two-column)
├── pages/          # Astro routes
│   └── post/       # Dynamic post routes
├── content/        # Content collections (JSON data)
│   ├── comics/
│   ├── elsewhere/
│   ├── movies/
│   ├── music/
│   ├── pages/
│   └── posts/
├── config/         # Collection schemas (posts.ts, pages.ts, etc.)
├── data/           # Data utilities (get-posts.ts, get-pages.ts)
├── styles/         # Global styles
└── utils/          # Utility functions
```

### Path Aliases (tsconfig.json)
Always use `@/` prefix for imports:
- `@/components/*` → `src/components/*`
- `@/layouts/*` → `src/layouts/*`
- `@/content/*` → `src/content/*`
- `@/data/*` → `src/data/*`
- `@/utils/*` → `src/utils/*`
- `@/styles/*` → `src/styles/*`
- `@/pages/*` → `src/pages/*`

### Component Patterns

**Block Components** (`src/components/block/`):
- Reusable content sections
- Use descriptive names: `{purpose}-block.astro`
- Example: `article-block.astro`, `movies-block.astro`

**Inline Components** (`src/components/inline/`):
- Small, inline elements
- Use descriptive names: `{purpose}-inline.astro`
- Example: `category-inline.astro`

**Structure Components** (`src/components/structure/`):
- HTML head, meta, body elements
- Example: `head.astro`, `body.astro`, `meta.astro`

## Astro Component Conventions

- Use frontmatter dashes `---` for imports and scripts
- Use TypeScript for props typing when possible
- Access props via `Astro.props`
- Use `<slot />` for content injection
- Leverage View Transitions API (see existing components for patterns)

## Content Collections

Content is stored as JSON in `src/content/{collection}/` and defined by schemas in `src/config/`.

Available collections: `posts`, `pages`, `movies`, `music`, `comics`, `elsewhere`

## Git Workflow

- **Pre-commit hooks**: Lefthook runs lint:fix and format:write automatically
- Staged files are automatically re-staged after fixing
- Files processed: `*.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx,json,jsonc,css,astro}`

## Important Configuration Files

- `astro.config.ts` - Astro configuration (static output, site URL, integrations)
- `tsconfig.json` - TypeScript paths and strict settings
- `mise.toml` - Toolchain versions (Node.js, Bun)
- `lefthook.yml` - Git hook configuration
- `.oxlintrc.json` - Lint rules (unused vars and triple-slash refs disabled)
- `.oxfmtrc.json` - Formatter configuration
- `src/content.config.ts` - Content collection registrations

## Common Pitfalls to Avoid

1. Don't use Biome commands - use oxlint/oxfmt instead
2. Don't assume tab indentation - use 2 spaces
3. Don't forget path aliases - always use `@/` prefix
4. Don't modify files in `dist/` or `.astro/` - these are build outputs
5. Don't skip pre-commit hooks - they ensure code quality
6. Don't use pnpm commands for project tasks - use Bun scripts (npm is fallback)

## Build Output

- Static site generated in `dist/`
- Site URL: https://mightydinosaur.dev/
- HTML compression and inline stylesheets enabled
