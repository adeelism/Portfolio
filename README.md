# Portfolio

My personal portfolio — [muhammad adeel](https://github.com/adeelism), software engineer.

A deliberately minimal, dependency-free static site: dark/light theming, a
projects-first layout, and no framework or build step. It loads instantly and is
served straight from GitHub Pages.

## Stack

- Plain HTML, modern CSS (custom properties, grid, `color-mix`), and a few lines
  of vanilla JavaScript for the theme toggle.
- Inter + JetBrains Mono via Google Fonts.
- No bundler, no dependencies.

## Run locally

It's static, so any file server works:

```bash
python -m http.server 8000   # then open http://localhost:8000
```

## Structure

```text
index.html    # content and structure
styles.css    # design tokens + layout (light/dark via [data-theme])
main.js       # theme toggle (persisted) + footer year
assets/imgs/  # avatar + favicon
```

## Deploy

Hosted on GitHub Pages from the `main` branch root. Any push to `main` updates
the live site.

## License

[MIT](./LICENSE)
