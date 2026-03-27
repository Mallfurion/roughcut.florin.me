## Context

The current website is a single Astro landing page backed by one page component, one layout, shared global CSS, and a small client-side script for reveal-on-scroll and card tilt effects. The visual direction is already coherent: dark, premium, editor-focused, and grounded by a real product screenshot. The main gaps are structural rather than stylistic.

The live page currently presents three issues that are visible without inspecting code: primary documentation CTAs route to missing pages, the small-screen experience stops at a "Desktop only" panel, and section visibility depends on JavaScript adding classes after intersection events. These issues reduce credibility and make the site feel less reliable than the desktop product it is describing.

This design stays within the repository's current architecture. The change remains a static landing-page update implemented through `src/pages/index.astro`, `src/layouts/Layout.astro`, `src/styles/global.css`, and `src/scripts/landing.ts`. No client framework, CMS, or major routing expansion is introduced.

## Goals / Non-Goals

**Goals:**
- Clarify the landing page narrative so each section adds distinct value.
- Replace broken CTA paths with valid, verifiable destinations in this repository.
- Preserve the current premium desktop art direction while making the small-screen fallback informative and actionable.
- Make motion and anchor behavior progressive, accessible, and resilient to missing JavaScript or reduced-motion preferences.
- Keep all claims specific to the website and the public-facing understanding of the desktop workflow.

**Non-Goals:**
- Rebrand Roughcut Stdio or replace the existing dark editorial visual language.
- Build a full mobile-first parity version of the hero composition.
- Add application functionality, analytics integrations, or a multi-page product site beyond what is needed to support valid CTA destinations.
- Change the desktop app, packaging pipeline, or product capabilities outside the website copy that describes them.

## Decisions

### 1. Keep the single-page Astro structure, but reorganize section responsibilities

The landing page will remain a single page in `src/pages/index.astro`, because the current site is small and the change is about message clarity rather than navigation depth. The content will be restructured so the hero explains value, the next block proves credibility, the workflow block explains the process, and the final CTA closes with a valid next step.

Alternative considered:
- Split the content into multiple pages immediately. Rejected because it adds routing and maintenance overhead before the core message hierarchy is fixed.

### 2. Replace the hard mobile gate with a simplified summary layout

The current small-screen state blocks users from learning about the product. The replacement will remain intentionally simplified rather than reproducing the full desktop hero: a single-column summary with product value, one proof-oriented screenshot or detail panel, and valid CTAs. This preserves the desktop-first art direction while removing the dead end.

Alternative considered:
- Build full desktop-to-mobile parity. Rejected because it is unnecessary for this repository and would push the redesign toward a broader responsive rebuild.

### 3. Treat CTA destinations as first-class product affordances

CTA targets must resolve to valid site routes or public documentation that can be verified from this repository. If existing markdown documents are intended as destinations, the implementation should either expose them through Astro pages or replace them with destinations that already exist on the website.

Alternative considered:
- Keep relative links to repository files. Rejected because they fail in the built site and create avoidable trust problems.

### 4. Make motion progressive, not required

Reveal and tilt effects will be preserved only as enhancements. Base content will render visible without JavaScript. Motion will be applied behind `prefers-reduced-motion: no-preference`, and the script will enhance already-visible elements rather than rescue hidden ones. This keeps the current style while removing failure modes for JS-disabled and reduced-motion contexts.

Alternative considered:
- Remove all motion. Rejected because restrained motion is part of the current visual tone and can remain if it is non-essential.

### 5. Add minimal shell-level accessibility and metadata support

The layout will gain a skip link, safer anchor target behavior, and metadata that better matches the dark presentation. Images used in the page will receive stable dimensions where practical to reduce layout instability. These changes belong in the existing layout/global CSS split rather than inline page-only patches.

Alternative considered:
- Limit the change to copy and CTA fixes only. Rejected because the current motion and anchor behavior would still create visible UX issues after the content refresh.

## Risks / Trade-offs

- [Simplified mobile fallback may still feel less premium than desktop] → Preserve the same palette, typography, and screenshot treatment so the reduced layout feels intentional rather than downgraded.
- [New CTA destinations may require small supporting pages or routed docs] → Prefer reusing content already in the repo; if a new support page is needed, keep it narrowly scoped and static.
- [Section restructuring can accidentally overstate product claims] → Keep copy tied to behaviors already described in the repository and review all new messaging against the current README and existing page language.
- [Progressive motion refactor can slightly change the visual rhythm of the page] → Preserve the same reveal timing and tilt tone where allowed, but move the default state to visible content.
- [Adding accessibility affordances can alter spacing or header composition] → Implement them at the layout and global CSS level so they integrate with the existing visual system instead of appearing bolted on.

## Migration Plan

1. Update content structure and CTA destinations in `src/pages/index.astro`.
2. Add any required supporting page or route for CTA targets if the current repo lacks a valid public destination.
3. Refactor motion and anchor styling in `src/styles/global.css`.
4. Update `src/scripts/landing.ts` so motion is enhancement-only and reduced-motion aware.
5. Add shell-level improvements in `src/layouts/Layout.astro`.
6. Validate with `npm run build` and a manual browser pass across desktop and narrow widths.

Rollback is straightforward because the change is confined to static website files. Reverting the modified page, layout, styles, script, and any new support page returns the site to its current behavior.

## Open Questions

- Should the primary CTA lead to a website-hosted setup/details page, or should it remain a project/repository-oriented entry point with a valid routed destination?
- Does the product want a lightweight support page for documentation excerpts, or is a single improved landing page with one secondary route sufficient for now?
