## Why

The current landing page has a strong visual direction, but it underperforms in three visible ways: key calls to action route to missing pages, the small-screen experience stops at a "Desktop only" gate, and below-the-fold content depends on JavaScript-driven reveal behavior to become visible. These issues weaken credibility for evaluators and make the site harder to trust as the public face of Roughcut Stdio.

This change affects the website directly and may require a small amount of public-facing project documentation work if CTA destinations need valid routed pages. It does not change the desktop application itself; it improves how the website presents and links to that workflow.

## What Changes

- Restructure the landing page narrative so the hero, proof, workflow, and final CTA sections each serve a distinct purpose instead of repeating the same claims.
- Replace broken or placeholder CTA destinations with valid website routes or public-facing documentation targets that can be verified in this repository.
- Improve the current small-screen fallback so visitors on phones and narrow tablets can still understand the product and reach a useful next step.
- Make reveal, tilt, and anchor-navigation behavior progressive and resilient, including reduced-motion handling and sticky-header-safe section jumps.
- Preserve the current editorial visual language: dark, premium, glass-panel styling with restrained motion and product-specific copy.

## Capabilities

### New Capabilities
- `landing-page-content-architecture`: Defines the required narrative structure, CTA behavior, and proof-oriented section content for the public landing page.
- `landing-page-mobile-fallback`: Defines the required behavior for small-screen visitors so the site remains informative and actionable without presenting the full desktop composition.
- `landing-page-motion-accessibility`: Defines progressive motion, anchor navigation, and accessibility requirements for the landing page experience.

### Modified Capabilities

None.

## Impact

- Website content and layout in `src/pages/index.astro`
- Document shell and metadata in `src/layouts/Layout.astro`
- Shared theme, motion, and navigation styling in `src/styles/global.css`
- Client-side reveal and tilt behavior in `src/scripts/landing.ts`
- Potential addition of public-facing docs or website routes if CTA destinations need first-class pages in this repository
