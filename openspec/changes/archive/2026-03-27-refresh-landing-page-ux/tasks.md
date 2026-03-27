## 1. Content and CTA restructuring

- [x] 1.1 Rewrite the landing page section order and copy in `src/pages/index.astro` so the hero, proof, workflow, and final CTA each serve a distinct purpose.
- [x] 1.2 Replace broken CTA destinations with valid website routes or public-facing documentation targets that resolve in the built site.
- [x] 1.3 Review all revised copy against existing repository-visible product claims to keep messaging specific and non-speculative.

## 2. Small-screen fallback refresh

- [x] 2.1 Replace the current "Desktop only" blocker with a simplified small-screen layout that explains the product and exposes at least one valid next-step CTA.
- [x] 2.2 Adjust hero media, annotation density, and supporting content so the narrow layout feels intentional while preserving the premium desktop composition on large screens.

## 3. Motion, navigation, and accessibility hardening

- [x] 3.1 Refactor reveal styling in `src/styles/global.css` so core content is visible before JavaScript enhancement.
- [x] 3.2 Update `src/scripts/landing.ts` to apply reveal and tilt behavior only as progressive enhancement and to honor reduced-motion preferences.
- [x] 3.3 Add sticky-header-safe anchor behavior, keyboard skip navigation, and any supporting layout or metadata updates in `src/layouts/Layout.astro` and shared styles.

## 4. Validation

- [x] 4.1 Manually verify desktop and narrow-width layouts in the browser, including CTA routing and anchor navigation.
- [x] 4.2 Run `npm run build` and confirm the landing page changes build successfully.
