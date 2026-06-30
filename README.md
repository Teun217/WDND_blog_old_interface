# WD&D blog

A portfolio for the **Web Design & Development** minor at the Amsterdam University of Applied Sciences. It presents projects, weekly nerd talks, learning goals, and reflections through an interpretation of old windows interfaces.

## Structure

```
src/
├── components/       # Window components (code, text, note, image, folder)
├── data/items.ts     # All content
├── pages/index.astro # Main page
├── scripts/          # Window dragging & z-index logic
└── styles/style.css  # Global styles
```

All content lives in `src/data/items.ts`. Adding a new item there is enough to make it appear.
