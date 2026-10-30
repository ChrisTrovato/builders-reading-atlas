# Project work log

This log records actual project work. It is not a record of books read or proof of subject mastery. Implementation and research are AI-assisted; personal learning entries should explain what the owner personally tried and understood.

## 2026-10-30 — Import the existing public site

Imported the public 200-book Reading Atlas into a dedicated Git repository. Preserved the live site's HTML, CSS, JavaScript, JSON, original illustrations, and hosting configuration. The commit was made today; earlier project activity has not been backdated or reconstructed.

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

The project combines content modeling, static-site implementation, information design, browser-local persistence, accessibility review, automated integrity checks, and deployment work. The owner supplied the direction and iterative requirements; Codex assisted with research, writing, code, and validation.

### Limits and next useful work

Bibliographic research does not mean every book has been read. Some publisher pages block automated access, and source registers distinguish direct retrieval from search-based verification. Reading levels and relevance are editorial judgments. Personal study progress remains private in the browser unless deliberately exported and shared.

A useful next learning entry would explain one small implementation or engineering idea in the owner's own words, with a calculation, test, or revision as evidence. See `docs/LEARNING_LOG_TEMPLATE.md`.

### Publication verification

- Published the expanded site at https://ditchthescroll.com/books/.
- Anonymous requests confirmed all 15 deployed site files matched the local release byte for byte.
- Confirmed `/books` and `/books_to_read` redirect to `/books/`; the public page is indexable.
- Verified the existing homepage remained byte-for-byte unchanged and the Factory and Beyond Earth routes still returned successfully.
- Browser checks confirmed the starter picker, a newly added book's source and details, saved reading status and notes after reload, and field URLs after a filter change and reload.
- Pushed the baseline, expansion, and documentation commits to the public GitHub repository. GitHub attributed the commits to the owner’s account. The current canonical repository is https://github.com/ChrisTrovato/builders-reading-atlas.
- The validation workflow was accepted and queued by GitHub Actions. Local validation passed; a queued remote run is not recorded as a pass.

The repository is the ongoing source and project history for this atlas. Future work should add meaningful commits and dated evidence as it occurs; no unattended daily contribution automation has been configured.
