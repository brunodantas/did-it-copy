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

## Licences

- The code (HTML markup, CSS and JavaScript) is under the MIT licence, in `LICENSE`.
- The written content and images are under CC BY 4.0, in `LICENSE-CONTENT`.
- The Switzer typeface comes from [Fontshare](https://www.fontshare.com/fonts/switzer) under the ITF Free Font License. It loads from the Fontshare API, and this repository does not include the font files.
