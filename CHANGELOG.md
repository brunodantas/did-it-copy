# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Home page with a live copy test. The first copy of the sentence changes nothing on screen, as on every desktop today. A button then turns on the proposed feedback: the copied region flashes, and a copy with nothing selected shakes the focused element.
- Demo page with two panels that hold the same text. Copying in the "With copy feedback" panel flashes the copied region, and copying in the "Today" panel changes nothing. Each panel has a "Copy link" button, and in the feedback panel the button flashes, because a button copy has no copied region. A copy with nothing selected shakes the focused element, except in the "Today" panel. A checkbox switches reduced motion on and off, starting from the system setting.
- Stub pages for History, Precedents and Proposal, with the same header and navigation as Home.
- Light and dark mode, phone-width layout, and a reduced-motion version of the flash and the shake.
- MIT licence for the code, CC BY 4.0 for the content, and the glossary in `CONTEXT.md`.
- Research notes on the menu-title lead in `research/menu-title-lead.md`. Classic Mac OS highlighted the menu title when a Command-key equivalent fired, but the system never beeped on a disabled command.
