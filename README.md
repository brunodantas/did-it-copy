# did-it-copy

Press Ctrl+C or Cmd+C on a desktop computer and nothing on screen changes. This site argues that the OS should flash what you copied, and shake the focused element when a copy fails.

Live at <https://brunodantas.github.io/did-it-copy/>.

## Running it locally

The site is plain HTML, CSS and JavaScript with no build step. Serve the folder with any static server, for example:

```bash
python3 -m http.server 8321
```

Then open <http://localhost:8321>. Opening `index.html` from disk won't work, because browsers block JavaScript modules on `file://` URLs.

`js/copy-feedback.js` draws the flash and the shake. `CONTEXT.md` defines the terms the site uses.

## The social card

Link previews show `social/card.png`, a 1200×630 screenshot of `social/card.html`. After changing the template, render it again with Chrome from the repository root:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --hide-scrollbars --window-size=1200,630 --screenshot=social/card.png "file://$PWD/social/card.html"
```

An image can't take the viewer's theme or selection colour, so the card and `favicon.svg` hard-code a light background and the macOS default selection blue, `#b3d7ff`. Both show the flash over that selection, which comes out as `#7eb5ff`. A palette change means editing them by hand.

Search engines only read `robots.txt` at the root of `brunodantas.github.io`, so nothing points them at `sitemap.xml`. Submit it in Google Search Console.

## Licences

- The code (HTML markup, CSS and JavaScript) is under the MIT licence, in `LICENSE`.
- The written content and images are under CC BY 4.0, in `LICENSE-CONTENT`.
