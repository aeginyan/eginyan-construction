# EginyanConstruction website

Static site for EginyanConstruction (Armen Eginyan), renovations in Metro Vancouver.
Built with [Astro](https://astro.build), photos managed through [Pages CMS](https://pagescms.org).
Currently previewed on GitHub Pages; Cloudflare Pages with the real domain is planned.

## Run it locally

```sh
npm install
npm run dev        # http://localhost:4321 — live-reloads while editing
npm run build      # production build into dist/
npm run preview    # serve the built dist/ folder
```

Requires Node.js 22.23+ (see `.node-version`).

## Where things live

| What | Where |
|---|---|
| Phone, email, online profiles, category list | `src/data/site.ts` |
| All English text | `src/i18n/en.json` |
| All Russian text | `src/i18n/ru.json` (same keys as English; missing keys fall back to English) |
| Gallery photos | `src/assets/gallery/<kitchens\|bathrooms\|tile\|flooring\|stairs>/` |
| Home hero / About photo | `src/assets/site/hero.jpg`, `src/assets/site/owner.jpg` (optional) |
| Page layouts | `src/views/` (one per page, shared by both languages) |
| Header / footer / shared bits | `src/components/`, `src/layouts/Base.astro` |
| Colours & fonts | `src/styles/global.css` |

URLs: `/`, `/gallery/`, `/contact/` (English) and `/ru/`, `/ru/gallery/`, `/ru/contact/` (Russian).

## Photos

- Any JPG/PNG/WebP dropped in a category folder shows up automatically, sorted by filename.
- Upload originals — the build resizes and converts them to WebP.
- If there is no `hero.*` the first gallery photo is used; if there is no `owner.*` the About section goes full width.
- Categories with no photos show a "Photos coming soon" card.
- `_test-*` images are local test placeholders and are git-ignored.

## Deploying

- **GitHub Pages preview:** every push to `main` runs `.github/workflows/deploy.yml`, which builds with
  `BASE_PATH=/<repo>` (the site lives in a subfolder there) and marks pages `noindex`.
  Delete the workflow once the real host is live.
- **Cloudflare Pages:** build command `npm run build`, output directory `dist`.
  `public/_headers` keeps the temporary `*.pages.dev` address out of search engines.
- Once the domain is connected, set `site` in `astro.config.mjs`.
