# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2026-09-27

### Added

- Home page with a live copy test. The first copy of the sentence changes nothing on screen, as on every desktop today. A button then turns on the proposed feedback: the copied region flashes, and a copy with nothing selected shakes the focused element. A Copy button under the sentence copies it without a keyboard. With the feedback on, the sentence flashes, and a refused clipboard write shakes the button. On a touch screen the instruction reads "Long-press the sentence".
- What page, with Proposal v0.1 and the demo below it. The proposal has a table of the three signals, eight numbered sections with a link to each, a section on the objection that copy feedback is too intrusive, and numbered footnotes. The current version lives at `what.html#v0-1`. The prose is written, with a plain-language summary first and the normative text in RFC 2119 keywords. The demo has two panels that hold the same text. Copying in the "With copy feedback" panel flashes the copied region, and copying in the "Today" panel changes nothing. Each panel has a "Copy link" button, and in the feedback panel the link it copies flashes. A copy with nothing selected shakes the focused element, except in the "Today" panel. A checkbox switches reduced motion on and off, starting from the system setting.
- Every page has the same header, with What and History in the navigation and the site name linking to Home.
- Light and dark mode, phone-width layout, and a reduced-motion version of the flash and the shake. The site is white with blue links, dark mode is a neutral grey, and text uses the system font, so no page loads a web font. Text selection keeps the browser's selection colour, and the flash strengthens it. With reduced motion the shake is a red dashed outline, so it doesn't look like the focus ring.
- MIT licence for the code, CC BY 4.0 for the content, and the glossary in `CONTEXT.md`.
- Research notes on the menu-title lead in `research/menu-title-lead.md`. Classic Mac OS highlighted the menu title when a Command-key equivalent fired, but the system never beeped on a disabled command.
- Research notes on the history of copy and paste in `research/copy-paste-history.md`, covering Gypsy, the Lisa, the early Macintosh, IBM CUA and early Windows. None of their guidelines gave a successful copy any feedback. The early systems kept the clipboard on screen instead, and later ones hid it behind Show Clipboard and the Clipboard viewer.
- Research notes on the copy feedback that ships today in `research/precedent.md`, covering iOS, iPadOS, macOS 26, Windows 10 and 11, ChromeOS, Android, GNOME, KDE Plasma, iTerm2, Kitty, the main editors, screen readers, web copy buttons and WCAG 4.1.3. Android 13 and later are the only system documented to confirm an ordinary copy. Elsewhere, confirmations cover special copies such as screenshots, links and images, and every editor flash is opt-in. KDE and GNOME both have open proposals for copy feedback from 2026.
- History page, with a timeline of how copy and paste began, a table of where each system showed the copied content, a table of what each guideline said about Copy and about feedback, and the menu hint claim by claim. Its second half covers what ships today, with tables of what systems, editors, web copy buttons and screen readers do after a copy, and the KDE objection with its timeline. Every claim has a numbered footnote, and the prose is written.
- An "On this page" guide on the What and History pages, built from their section headings. On a wide screen it is a sticky rail beside the article that marks the section you are reading, and on a phone it folds under the intro.
- Link previews and search tags. Every page has a canonical URL and Open Graph and Twitter tags with its own title and description, and a shared card that shows "Did it copy?" with a flash over it. The site has a favicon and a `sitemap.xml`, and the Home title now reads "did-it-copy · Copy feedback for the desktop".
- `v0.1.html`, a frozen copy of Proposal v0.1 with its eight sections and the seven sources they cite. Its text never changes, and the What page links to it as the stable URL for this version.

[Unreleased]: https://github.com/brunodantas/did-it-copy/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/brunodantas/did-it-copy/releases/tag/v1.0.0
