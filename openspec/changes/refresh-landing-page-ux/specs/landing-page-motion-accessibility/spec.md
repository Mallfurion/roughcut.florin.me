## ADDED Requirements

### Requirement: Landing page content is visible without client-side enhancement
The website SHALL render core landing page content in a visible state before client-side JavaScript runs, and motion scripts MUST enhance that content rather than reveal otherwise hidden sections.

#### Scenario: Client-side enhancement does not run
- **WHEN** landing page JavaScript fails to execute or is unavailable
- **THEN** the hero, major content sections, and calls to action MUST remain visible and readable

### Requirement: Motion honors reduced-motion preferences
The website SHALL disable or substantially reduce non-essential reveal and tilt motion when the visitor prefers reduced motion.

#### Scenario: Visitor prefers reduced motion
- **WHEN** the visitor has `prefers-reduced-motion: reduce`
- **THEN** non-essential reveal and tilt effects MUST be disabled or reduced so that content appears without animated entrance behavior

### Requirement: Sticky-header navigation preserves section readability
The website SHALL ensure that in-page navigation targets remain readable when reached from the sticky header and that keyboard users can bypass repeated navigation.

#### Scenario: Visitor uses in-page navigation
- **WHEN** a visitor activates a header navigation link to a section anchor
- **THEN** the destination heading or section start MUST not be obscured by the sticky header

#### Scenario: Keyboard user enters the page
- **WHEN** a keyboard user tabs into the document from the top
- **THEN** the page MUST provide a mechanism to skip repeated navigation and reach the main content directly
