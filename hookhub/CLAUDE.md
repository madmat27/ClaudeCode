# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important: Next.js Version Warning

This is **NOT** the Next.js you know. Version 16.2.1 has breaking changes — APIs, conventions, and file structure may all differ from your training data. **Read the relevant guide in `node_modules/next/dist/docs/` before writing any code.** Heed deprecation notices.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
npm start        # Start production server
```

## Architecture

Next.js 16 App Router project with TypeScript and Tailwind CSS v4.

- `app/` — App Router directory. `layout.tsx` is the root layout (loads Geist fonts, wraps all pages). `page.tsx` files are route entry points.
- `app/globals.css` — Tailwind v4 imported via `@import "tailwindcss"`. CSS variables for light/dark theming defined inline here.
- `public/` — Static assets served at `/`
- Path alias `@/*` maps to the project root

**Styling**: Tailwind CSS v4 uses a new CSS-first configuration approach — theme customization goes in `globals.css` using `@theme`, not `tailwind.config.js`.
