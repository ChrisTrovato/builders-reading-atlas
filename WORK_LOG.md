# Project work log

Development notes, changes, and validation for the Reading Atlas.

## 2026-10-30 — Import the existing public site

Imported the public 200-book Reading Atlas into a dedicated Git repository. Preserved the live site's HTML, CSS, JavaScript, JSON, original illustrations, and hosting configuration.

## 2026-10-30 — Expand the atlas and make it easier to enter

### What changed

- Added 300 researched selections, producing 350 nonfiction and 150 fiction books.
- Added a 16-field knowledge map with aerospace connections, starter shelves, questions, and practical observations.
- Expanded from eight to twenty reading routes.
- Added a field filter to the library and shareable field URLs.
- Added a Markdown export of browser-local learning notes for use in a personal GitHub log.
- Kept the original 200 IDs and browser-storage keys stable.
- Updated metadata and navigation for the 500-book edition.
- Added a README, research source registers, learning-log template, future-work instructions, and a GitHub validation workflow.

### Evidence and checks

- Catalog validation: exactly 500 entries, 350/150 split, unique IDs, no normalized duplicate titles, and all required fields present.
- Membership validation: all 500 books appear in at least one field; every field has three starter selections.
- Automated rendering: 68 views, all 20 reading routes, search and field filters, legacy shelf IDs, sanitized imports, and the two numerical models passed.
- Independent review caught and fixed stale field URLs, undersized backup-import limits, misleading persistence notifications, journal overflow, empty imported note IDs, skip-link contrast, and interactive-map semantics.
- Subject review removed misleading keyword matches, such as nuclear-history *Command and Control* from the robotics field and marine engineering texts from biology.
- Reviewed desktop and 390-pixel mobile layouts in Chrome; final publication checks are recorded below when completed.

### What this work demonstrates

The project combines content modeling, static-site implementation, information design, browser-local persistence, accessibility review, automated integrity checks, and deployment work.

### Limits and next useful work

Some publisher pages block automated access, and source registers distinguish direct retrieval from search-based verification. Reading levels and relevance are editorial judgments. Personal study progress remains private in the browser unless deliberately exported and shared.

The learning-log template is available at `docs/LEARNING_LOG_TEMPLATE.md`.

### Publication verification

- Published the expanded site at https://ditchthescroll.com/books/.
- Anonymous requests confirmed all 15 deployed site files matched the local release byte for byte.
- Confirmed `/books` and `/books_to_read` redirect to `/books/`; the public page is indexable.
- Verified the existing homepage remained byte-for-byte unchanged and the Factory and Beyond Earth routes still returned successfully.
- Browser checks confirmed the starter picker, a newly added book's source and details, saved reading status and notes after reload, and field URLs after a filter change and reload.
- Pushed the baseline, expansion, and documentation commits to the public GitHub repository. GitHub attributed the commits to the owner’s account. The current canonical repository is https://github.com/ChrisTrovato/builders-reading-atlas.
- The validation workflow was accepted and queued by GitHub Actions. Local validation passed; a queued remote run is not recorded as a pass.

The repository is the ongoing source and project history for this atlas.

## 2026-10-30 — Simplify project documentation

Removed the unsolicited attribution section and personal-assessment language from the README, work log, and learning template. Kept the documentation focused on the project, its features, and its development.

## 2026-11-01 — Connect the atlas around aerospace missions

### What changed

- Added six mission paths connecting constraints, subsystems, ten engineering disciplines, staged reading, a practical project, and a numerical model.
- Expanded to 25 learning bridges, including arithmetic, fractions, units, graphs, energy, thermodynamics, fluids, aerodynamics, propulsion, orbital motion, feedback, and numerical methods.
- Made arithmetic the default starting point for new visitors while retaining existing valid selected topics.
- Added a spacecraft mass/energy budget project and evidence prompts to the project briefs, producing seven projects.
- Added energy, ideal circular-orbit, and first-order feedback models alongside the existing arm and lever models. New calculations are separated from rendering and tested at known values, boundaries, and trends.
- Added six mission reading routes, producing 26, and a textbook companion with prerequisite guidance and dated, scoped course evidence.
- Preserved the 500-book catalog byte for byte, all 16 fields, fiction, philosophy, original IDs, and existing storage keys.
- Kept the existing visual identity and improved navigation at intermediate widths.

### Validation

- Dependency-free tests passed: catalog integrity, relationships among missions/disciplines/bridges/projects/books, all 26 routes, 117 rendered views, filtering, import sanitization, existing storage compatibility, and all five numerical models.
- Personal-profile Chrome checks used an isolated localhost origin: mission-to-lesson navigation and answer disclosure, book dialog, saved status and note after reload, shelf backup export and import, and keyboard-driven energy calculations and reset.
- Reviewed desktop and phone-width layouts. Resetting saved Chrome device-emulation settings resolved an initially magnified preview. Extension message-channel errors from earlier navigation cleared on reload; the fresh site console showed no application exception.
- Public source review found no local machine paths or credentials. The source register records direct-retrieval and search-only evidence separately.

### Boundaries

The models remain educational approximations, not flight design tools. Reading stages and mission connections are editorial guidance. No study progress is invented or published; visitor records stay in their browser. Public deployment is limited to the existing books project and its established alias.
