# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- Build: `bun run build` or `npm run build`
- Dev server: `bun run dev` or `npm run dev`
- Preview: `bun run preview`
- Lint check: `bun run lint:check`
- Lint fix: `bun run lint:fix`
- Format check: `bun run format:check`
- Format write: `bun run format:write`
- Markdown lint: `bun run markdownlint`

## Code Style
- **Formatting**: Uses Biome with tab indentation
- **Quotes**: Double quotes, semicolons only as needed
- **Imports**: Organized automatically by Biome
- **TypeScript**: Strict null checks enabled
- **Path Aliases**: Use `@/` prefix (e.g., `@/components/*`)
- **Component Structure**: Follows Astro block pattern in `/src/components/`
- **Content**: Markdown files in `/src/content/`
- **Git Hooks**: Uses Lefthook for pre-commit linting/formatting