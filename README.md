# Saffron & Stone

A premium, single-page website for **Saffron & Stone**, a fictional contemporary Indian fine-dining restaurant in Bandra West, Mumbai. Built as a freelance portfolio project.

> **Demo content:** the restaurant, its address, phone number, email, menu, prices and opening hours are fictional and do not represent a real business.

## Tech stack

- React 19 + Vite 8 (JavaScript)
- Plain CSS with design tokens (no UI framework)
- Lucide React icons
- ESLint

## Getting started

Requires Node.js `^20.19.0` or `>=22.12.0`.

```bash
npm install
npm run dev       # start the dev server
npm run lint      # run ESLint
npm run build     # production build to dist/
npm run preview   # preview the production build
```

> **Windows PowerShell:** if script execution policy blocks `npm`, use `npm.cmd` (e.g. `npm.cmd run dev`) or run the commands from Command Prompt.

## Project structure

```
src/
  assets/images/   Optimised WebP photography
  components/      Section components (Navbar, Hero, ...)
  data/            Site details, navigation and image references
  hooks/           useScrolled, useActiveSection
  styles/          Global tokens (index.css) and per-section styles
```

## Image credits & licensing

All photographs are downloaded from Unsplash, resized and converted to WebP via the Unsplash image CDN, and stored locally in `src/assets/images`. Each photo's Unsplash page was checked and states **"Free to use under the Unsplash License"** (not Unsplash+). The [Unsplash License](https://unsplash.com/license) allows free commercial and non-commercial use without attribution, but not selling unaltered copies or compiling photos to build a competing service. Credit is given here as good practice.

| File(s) | Used in | Photographer | Source |
| --- | --- | --- | --- |
| `hero-thali-768/1280/1920.webp` | Hero | Outcast India ([@outcast_india](https://unsplash.com/@outcast_india)) | [unsplash.com/photos/aVCyDXjU5rs](https://unsplash.com/photos/cooked-rice-and-different-foods-in-bowl-on-table-aVCyDXjU5rs) |

Photographs depict real dishes and venues, not the fictional restaurant.

## Fonts

Playfair Display and DM Sans are loaded from Google Fonts (SIL Open Font License).

## Status

Work in progress. Navigation and hero are complete; remaining sections are in development.
