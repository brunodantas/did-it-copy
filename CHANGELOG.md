# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Home page with a live copy test. The first copy of the sentence changes nothing on screen, as on every desktop today. A button then turns on the proposed feedback: the copied region flashes, and a copy with nothing selected shakes the focused element.
- What page, a stub for the proposal with the demo below it. The demo has two panels that hold the same text. Copying in the "With copy feedback" panel flashes the copied region, and copying in the "Today" panel changes nothing. Each panel has a "Copy link" button, and in the feedback panel the button flashes, because a button copy has no copied region. A copy with nothing selected shakes the focused element, except in the "Today" panel. A checkbox switches reduced motion on and off, starting from the system setting.
- Stub page for History. Every page has the same header, with What, Precedent and History in the navigation and the site name linking to Home.
- Light and dark mode, phone-width layout, and a reduced-motion version of the flash and the shake.
- MIT licence for the code, CC BY 4.0 for the content, and the glossary in `CONTEXT.md`.
- Research notes on the menu-title lead in `research/menu-title-lead.md`. Classic Mac OS highlighted the menu title when a Command-key equivalent fired, but the system never beeped on a disabled command.
- Research notes on the history of copy and paste in `research/copy-paste-history.md`, covering Gypsy, the Lisa, the early Macintosh, IBM CUA and early Windows. None of their guidelines gave a successful copy any feedback. The early systems kept the clipboard on screen instead, and later ones hid it behind Show Clipboard and the Clipboard viewer.
- Research notes on the copy feedback that ships today in `research/precedent.md`, covering iOS, iPadOS, macOS 26, Windows 10 and 11, ChromeOS, Android, GNOME, KDE Plasma, iTerm2, Kitty, the main editors, screen readers, web copy buttons and WCAG 4.1.3. Android 13 and later are the only system documented to confirm an ordinary copy. Elsewhere, confirmations cover special copies such as screenshots, links and images, and every editor flash is opt-in. KDE and GNOME both have open proposals for copy feedback from 2026.
- Precedent page, with tables of what systems, editors, web copy buttons and screen readers do after a copy, and the KDE objection with its timeline. Every claim has a numbered footnote. The prose is still to come.
