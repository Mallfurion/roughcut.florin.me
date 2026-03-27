## ADDED Requirements

### Requirement: Small-screen visitors receive an informative fallback instead of a dead end
The website SHALL provide a simplified small-screen landing-page experience that communicates the product value, shows at least one proof-oriented visual or summary block, and offers at least one valid next-step CTA.

#### Scenario: Phone visitor opens the page
- **WHEN** a visitor opens the landing page on a narrow viewport
- **THEN** the page MUST render a usable single-column or otherwise simplified layout instead of only instructing the visitor to switch devices
- **AND THEN** the visitor MUST be able to reach a valid next-step destination from that layout

### Requirement: Desktop-first composition remains the premium presentation
The website SHALL preserve the current desktop-first art direction on larger viewports while allowing the narrow-screen fallback to simplify layout density, annotation count, and screenshot treatment.

#### Scenario: Visitor compares narrow and wide layouts
- **WHEN** the landing page is rendered on a desktop-width viewport and a narrow viewport
- **THEN** the desktop layout MUST retain the richer composition and premium presentation
- **AND THEN** the narrow layout MAY simplify content arrangement as long as it preserves the core product message and valid CTA access
