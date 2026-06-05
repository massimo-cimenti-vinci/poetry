# Poetry Archive · 诗集

A contemplative personal poetry archive — one poem published each year. Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Note:** Next.js 16 requires Node.js ≥ 20.9. Upgrade Node if `npm run build` fails on engine checks.

This project uses **Tailwind CSS v3** (pure JavaScript, no native `oxide` binary) to avoid Windows install issues.

If you still see a “native binding” error:

1. Stop the dev server (`Ctrl+C` in the terminal running `npm run dev`).
2. Delete `.next`, then `node_modules` and `package-lock.json`.
3. Run `npm install`, then `npm run dev`.

## Adding a new year

Edit `src/data/poems.ts` only — no UI changes required:

```ts
2028: {
  fr: {
    title: "Your title",
    content: `Line one\nLine two`,
  },
  zh: {
    title: "标题",
    content: `第一行\n第二行`,
  },
},
```

Line breaks in `content` are preserved exactly.

## Project structure

- `src/data/poems.ts` — poem content by year and language
- `src/components/` — archive UI
- `src/components/decorations/` — subtle SVG plum blossom, ink stroke, petals

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — serve production build

