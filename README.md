# Ditch the Scroll · The Builder’s Reading Atlas

A public learning basecamp for people drawn to aerospace, robotics, physical machines, and the future of civilization.

**[Open the live atlas](https://ditchthescroll.com/books/) · [Explore the knowledge map](https://ditchthescroll.com/books/#atlas) · [Browse the library](https://ditchthescroll.com/books/#library)**

The expanded edition contains **500 books: 350 nonfiction and 150 fiction**, connected through **16 knowledge fields and 20 reading routes**. It gives a beginning student somewhere to start and an experienced reader room to keep exploring.

![Speculative orbital construction above Earth](dist/books/assets/orbital-shipyard.png)

*AI-generated concept art. This does not depict an existing facility.*

## What the site does

- Searches and filters the complete catalog by field, subject, reading stage, demand, and type.
- Offers three-book starter shelves and field guides linking each subject to engineering.
- Connects algebra, calculus, physics, materials, writing, and other coursework to physical capabilities through twelve learning bridges.
- Includes six small project briefs and two interactive mechanism models.
- Explores space construction, habitats, factories, oceans, and flight through five frontier dossiers.
- Pairs technical ambition with philosophy, institutional questions, and 150 fictional worlds.
- Saves reading status, book notes, and field notes locally in the visitor’s browser.
- Exports the catalog as CSV, shelf and journey backups as JSON, and learning notes as Markdown for a personal work log.

The library spans mathematics; physics; chemistry and materials; biology; flight; spaceflight and habitats; oceans; robotics; AI and computing; factories and reliability; defense history and responsibility; aging and healthspan; philosophy; institutions; learning; and fiction.

## Why this project exists

The difficult early work of an engineering education can feel far removed from the machines that made the subject exciting. This project connects the two without pretending that a reading list replaces a degree, supervised practice, or independent understanding.

The design goal is a useful small next step inside a much larger horizon. Books have editorial relevance notes, questions, caveats, sources, and demand labels. A technical reference is identified as something to grow into; fiction remains something readers can simply enjoy.

## Run locally

Requires Node.js 22 or newer. There are no runtime packages to install.

```sh
npm run dev
```

Open http://127.0.0.1:4173/books/.

```sh
npm test
```

Validation checks the 500-book catalog, unique IDs, legacy shelf compatibility, source URL structure, all knowledge-field memberships, the 20 reading routes, rendered views, filters, import sanitization, and the two numerical models. It does not prove every external source remains online or verify every claim made in a book.

## Project structure

| File | Purpose |
| --- | --- |
| `dist/books/books.json` | Catalog and bibliographic links |
| `dist/books/domains.json` | Subject membership, starter shelves, and engineering connections |
| `dist/books/app.js` | Library, reading routes, book dialogs, shelf, and backups |
| `dist/books/atlas.js` | Knowledge map, subject guides, starter picker, and Markdown export |
| `dist/books/journey.js` | Coursework bridges, frontier pages, workbench, and journal |
| `dist/books/learning.json` | Worked examples and small projects |
| `dist/books/philosophy.json` | Philosophical lenses, essays, and evidence distinctions |
| `dist/books/frontiers.json` | Frontier dossiers and sources |
| `tests/check.mjs` | Dependency-free integrity and rendering checks |
| `WORK_LOG.md` | Dated record of actual project changes and validation |
| `docs/LEARNING_LOG_TEMPLATE.md` | Template for personal learning evidence |

The site is static HTML, CSS, JavaScript, and JSON. There is no application database, authentication system, analytics script, or AI API call. Vercel serves `dist`; the existing root-domain routing sends `/books/` to this dedicated application.

## Privacy and data

The public repository contains the public site and project documentation. It does not include private conversations, family information, personal study records, passwords, API keys, or private documents.

Book and journey notes are stored only in each visitor’s browser. They are not committed to this repository or sent to a server. Exports may contain whatever the visitor wrote, so they should be reviewed before sharing. Clearing browser data can remove notes; export a backup when needed.

Existing storage keys and the original 200 book IDs remain stable. A knowledge field can contain books that also appear in another field; the catalog counts each selection once.

## Research and editorial boundaries

Bibliographic links favor publishers, authors, universities, institutions, and open textbook projects. Publication dates may refer to a first publication while a linked page describes a later edition; uncertain dates are left blank. The source notes in `docs/research/` record the expansion’s research trail and limitations.

Reading fit, order, questions, and difficulty are editorial judgments. The presence of a book is not an endorsement of every argument inside it. Defense selections concern history, institutions, ethics, and legitimate engineering context. Longevity selections distinguish mechanisms, hypotheses, and evidence; they do not promise immortality or provide personal medical advice.

The book covers are original typographic illustrations rather than publisher jackets. The catalog does not distribute book texts. Frontier concepts and models are educational material, not deployable engineering specifications.

## Related public explorations

- [The Factory That Builds the Future](https://factory-that-builds-the-future.vercel.app/)
- [Beyond Earth — The Engineering of Somewhere to Live](https://civilization-beyond-earth.vercel.app/)

Those are separate projects. This repository tracks the Reading Atlas.
