# ZAYN1x — GitHub Pages Starter

This repository is a lightweight, motion-first static site scaffold for GitHub Pages.
It reproduces the "shine / glow / Lottie" style and is ready to be customized for ZAYN1x.

## What you get
- `index.html` — landing page with hero, Lottie wrapper, and sections.
- `css/styles.css` — styles and motion helpers (shine, glow).
- `js/main.js` — small JS for entrance animations and lottie loader.
- `assets/` — folders for `lottie`, `svg`, and `videos` (place your assets here).
- `README.md` — this file.

## How to use
1. Clone this repo locally:
   ```
   git clone <YOUR-REPO-URL>
   ```
2. Replace the placeholder asset `assets/lottie/hero.json` with your Lottie JSON (optional).
3. Edit copy, images, links and deploy.

## Deploy to GitHub Pages (quick)
- Create a GitHub repo and push this project to `main`.
- In the repository Settings → Pages, set the source to the `main` branch and the root folder (`/`).
- Save — your site will be published at `https://<your-username>.github.io/<repo-name>/` shortly.

## Tips
- For single-page sites, GitHub Pages serves static files perfectly. Use Vite/React build if you want to use React — then push the build output.
- Prefer `.webm` for animated backgrounds.
- Keep Lottie files optimized (<500KB when possible).

## License
MIT — use & adapt.
