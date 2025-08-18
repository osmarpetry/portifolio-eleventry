# osmarpetry.dev — minimal (≤14KB)

## Usage
```bash
npm i
npm run dev           # local server (http://localhost:8080)
npm run build         # builds _site/ + resume.pdf + 14KB guard
```

- Content in `content/articles/*.md` and `content/resume.md`.
- Resume PDF generated with `md-to-pdf` into `_site/resume.pdf`.
- Zero JS on home and /articles.
- Critical CSS inline.
- SEO: sitemap, robots, Atom feed, minimal meta tags, JSON-LD.
- English-only folder names.
```

## Deploy
Cloudflare Pages, Netlify or GitHub Pages. Publish `_site/`.
