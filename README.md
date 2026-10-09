# Anime Warp Café

A hand-coded, interactive website for a fictional themed café whose menu, decor and playlist re-theme to a different anime every month.

**Live site:** [animewarp.com](https://animewarp.com)

Built by [Cameron Northey](https://blueninja.net) (BlueNinja.net) as a self-initiated concept project. The café, menu items and prices are fictional.

## Highlights

- **Portal Menu Builder.** Pick one of five anime tropes (Isekai, Shōnen, Slice of Life, Mecha, Shōjo) and the menu grid re-renders with three trope-matched dishes. Each trope can be deep-linked (`#builder-mecha`), and Slice of Life is selected on load.
- **Data-driven content.** All tropes and dishes live in one dataset (`js/data.js`). Adding a new trope means adding one object, with no other code changes.
- **No frameworks or build step.** Plain HTML, CSS and vanilla JavaScript.
- **"Kawaii Portal" design.** A pastel cream, pink, mint and lavender palette, Fredoka and Quicksand type, chunky rounded cards and a soft dot texture. It was chosen from three mockup directions.
- **Responsive.** Mobile navigation with a slide-in menu and overlay, closing on outside click, link click or resize.
- **Accessible markup.** Semantic HTML and an `aria-expanded` state on the menu toggle.

## Structure

```
index.html      Home: hero, Portal Menu Builder, features, monthly theme banner
about.html      The café's story and how each month's theme is picked
contact.html    Reservation / contact form (front-end only)
css/style.css   Brand stylesheet
js/data.js      Trope and menu dataset
js/app.js       Menu builder logic and mobile navigation
robots.txt      Keeps the demo out of search engines
```

## Run it locally

No install needed. Open `index.html` in a browser, or serve the folder with any static server.

## Notes

- The contact form doesn't send messages. It's front-end only, as on any static demo.
- The site is intentionally kept out of search engines (`robots.txt` plus `noindex` meta tags) because it isn't a real business.
