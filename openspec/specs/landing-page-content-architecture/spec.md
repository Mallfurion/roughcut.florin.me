# Capability: Landing Page Content Architecture

## Purpose
Define how the landing page communicates Roughcut Stdio's product value, section hierarchy, and public-facing claims.

## Requirements

### Requirement: Landing page hero presents a clear product promise and valid next steps
The website SHALL present a hero section that explains Roughcut Stdio's value to editors, identifies the product as a desktop workflow, and provides at least one primary CTA and one secondary CTA that resolve to valid website or public documentation destinations in the built site.

#### Scenario: Desktop visitor lands on the page
- **WHEN** a visitor opens the landing page on a desktop-width viewport
- **THEN** the hero MUST show the product headline, supporting copy, and at least two actionable CTA links
- **AND THEN** each CTA destination MUST resolve without a 404 in the built site

### Requirement: Major sections provide distinct proof-oriented roles
The website SHALL organize its major sections so that each block contributes a distinct purpose such as product value, workflow explanation, proof, or closing action, rather than repeating the same claim in multiple sections.

#### Scenario: Visitor scans the page from top to bottom
- **WHEN** a visitor scrolls through the landing page
- **THEN** the page MUST include a proof-oriented section that grounds the product claims in concrete workflow details or outputs
- **AND THEN** adjacent sections MUST not merely restate the same promise with different headings

### Requirement: Public-facing copy stays grounded in repository-visible claims
The website SHALL describe the desktop workflow using language that is specific to editorial review, local-first processing, and export behavior without implying capabilities that cannot be supported by the public-facing materials in this repository.

#### Scenario: Maintainer updates product messaging
- **WHEN** a maintainer revises landing page copy under this capability
- **THEN** the resulting language MUST remain specific to the desktop workflow described by the repository
- **AND THEN** the copy MUST avoid generic AI-marketing phrasing that is not tied to observable product framing in the site
