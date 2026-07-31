# Hanin Ashraf Refat — Portfolio

A premium, dark-themed personal portfolio built with React (Vite), Tailwind CSS, Framer Motion,
React Icons, React Scroll and React Type Animation.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Where to edit content

Almost all text content (name, projects, skills, certificates, services, testimonials, gallery
items, timeline, contact info) lives in a single file:

```
src/data.js
```

Edit the values there and every section updates automatically.

## Placeholders to replace

- **Email / phone / GitHub / LinkedIn** — update in `src/data.js` under `personalInfo`.
- **Download CV button** — add your PDF at `public/Hanin-Ashraf-CV.pdf` (the Hero button already
  links to that path).
- **Project images / gallery images / certificate images** — the design currently uses styled
  gradient placeholders instead of real images so the project runs immediately without missing
  assets. Drop real images into `src/assets/` and swap the placeholder `<div>` blocks in
  `ProjectCard.jsx`, `Gallery.jsx` and `Certificates.jsx` for `<img>` tags.
- **Google Map** — the Contact section has a styled placeholder; swap it for a real embedded
  `<iframe>` from Google Maps once you have an address to point to.

## Folder structure

```
src/
  components/       All UI sections and reusable pieces
  context/           ThemeContext (dark / light mode)
  assets/             Place images/icons here
  data.js            All editable site content
  App.jsx            Composes every section
  main.jsx           React entry point
  index.css          Tailwind + global styles
```

## Features included

- Animated "HA" loading screen
- Sticky, blurring navbar with active-section highlighting and mobile menu
- Hero with typing animation, floating chips and animated blob background
- About section with animated counters
- Skills split into Development / Graphic Design categories
- Animated vertical timeline ("My Journey")
- Featured Projects with 3D tilt hover cards
- Pinterest-style Design Gallery with category filter and lightbox
- Certificates grid
- Services grid
- Auto-rotating testimonials slider
- Contact form + social links + map placeholder
- Dark / light mode toggle, scroll progress bar, back-to-top button, cursor glow,
  scroll-reveal animations throughout
