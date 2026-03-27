# Roughcut Stdio Website

This repository contains the marketing site for Roughcut Stdio, a local-first desktop workflow for video editors. The site is built as a single-page Astro experience that presents the product story, workflow, and key capabilities for the packaged desktop application.

This repo does not contain the Roughcut Stdio desktop app itself. It contains the website that describes it.

## What The Product Is

Based on the current site content, Roughcut Stdio is positioned as:

- A local-first footage screening workflow
- An AI-assisted rough-cut tool for editors
- A system that scans raw footage, surfaces promising segments, grades moments, and assembles a first-pass timeline
- A review flow that can export to DaVinci Resolve through FCPXML

The site emphasizes editorial usefulness over generic AI messaging: discover, analyze, select, and assemble.

## What This Repository Contains

- A single landing page at `src/pages/index.astro`
- A shared page shell in `src/layouts/Layout.astro`
- Global styling and theme tokens in `src/styles/global.css`
- Lightweight front-end interactions in `src/scripts/landing.ts`
- Public assets in `public/`
- OpenSpec project guidance in `openspec/config.yaml`

## Tech Stack

- Astro 5
- TypeScript
- Tailwind CSS 4
- Vite

## Local Development

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Build the site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Current UX Notes

- The landing page is intentionally desktop-first.
- Screens below the large-layout breakpoint show a simplified fallback message instead of the full hero composition.
- Front-end behavior is deliberately minimal: reveal-on-scroll transitions and a subtle hero-card tilt interaction.

## Repository Structure

```text
.
├── openspec/
│   └── config.yaml
├── public/
├── src/
│   ├── layouts/
│   ├── pages/
│   ├── scripts/
│   └── styles/
├── astro.config.mjs
└── package.json
```

## OpenSpec

The project uses the `spec-driven` OpenSpec workflow. The config in `openspec/config.yaml` now captures the repository scope, product context, and artifact-writing rules so future proposals and tasks stay aligned with the actual codebase.
