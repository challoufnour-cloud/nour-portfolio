# Nour Challouf | Portfolio

React + TypeScript + Vite.

## Run it

```
npm install
npm run dev
```

The site opens in your browser (usually <http://localhost:5173>).

## Good to know

- Needs Node.js 18 or newer.
- Fonts are self-hosted through `@fontsource` packages, so the site works offline.
- Photos are in `src/assets/` (`hero.webp` is the cut-out portrait in the hero, `card.jpg` is the ID card photo). Replace the files, keep the names.
- Your CV is `public/Nour_Challouf_CV.pdf`. Replace it to update the download.
- Projects, skills, education, contact details and links live in `src/data.ts`.
- The "Pick your mood" section changes the accent colors of the whole page (see `src/components/Mood.tsx` and the `data-mood` rules at the end of `src/styles.css`).
- Colors and spacing live in `src/styles.css`.

## Build for deployment

```
npm run build
```

The `dist/` folder can be deployed on Vercel or Netlify.
