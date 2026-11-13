# TableTap Documentation

This folder is the central place for all project documentation of **TableTap**. Everything that goes beyond a quick overview lives here as Markdown files, so it can be versioned, reviewed and read directly on GitHub.

For a short project overview, setup instructions and the current status, see the [main README](../README.md).

---

## Contents

- [Documentation Index](#documentation-index)
- [Folder Structure](#folder-structure)
- [Writing Guidelines](#writing-guidelines)
- [Adding a New Document](#adding-a-new-document)
- [Sprint Documentation](#sprint-documentation)

---

## Documentation Index

| Document | Description | Status |
| :--- | :--- | :---: |
| [Project Pitch](Pitch/TableTap_Pitch.pdf) | Original pitch: problem, target audience, USP, tech stack, discarded ideas | Done |
| `architecture.md` | System architecture, client/server communication, WebSocket flow | Planned |
| `database.md` | Database model, ER diagram, table descriptions | Planned |
| `api.md` | Full REST API reference with request and response examples | Planned |
| `roles-and-permissions.md` | What each role (service, kitchen, owner) is allowed to see and do | Planned |
| `setup.md` | Detailed local setup, environment variables, troubleshooting | Planned |
| `sprints/` | One file per sprint: goals, results, retrospective | Planned |

> When a planned document is created, turn its name into a link and set its status to **Done**.

---

## Folder Structure

```text
docs/
├── README.md                   # This file: index and guidelines
├── Pitch/
│   └── TableTap_Pitch.pdf      # Project pitch
├── architecture.md             # (planned)
├── database.md                 # (planned)
├── api.md                      # (planned)
├── roles-and-permissions.md    # (planned)
├── setup.md                    # (planned)
├── sprints/                    # (planned) sprint-01.md, sprint-02.md, ...
└── assets/                     # (planned) images and diagrams used in the docs
```

---

## Writing Guidelines

- **Language:** all documentation is written in English.
- **Format:** Markdown (`.md`). Use PDFs only for finished deliverables such as the pitch.
- **File names:** lowercase, words separated by hyphens (`roles-and-permissions.md`).
- **Structure:** every document starts with a `#` title and a one-paragraph summary of what it covers.
- **Diagrams:** prefer [Mermaid](https://mermaid.js.org/) code blocks, which GitHub renders directly. Store images in `docs/assets/`.
- **Links:** use relative links (`../README.md`, `database.md`) so they work on GitHub and locally.
- **Up to date:** if a code change makes a document wrong, update the document in the same pull request.

---

## Adding a New Document

1. Create the `.md` file in `docs/` (or a matching subfolder).
2. Start with a title and a short summary:
   ```markdown
   # Database

   Describes the MySQL data model of TableTap: tables, relations and constraints.
   ```
3. Add it to the [Documentation Index](#documentation-index) above.
4. Link it from the [main README](../README.md) if it is relevant for everyone.

---

## Sprint Documentation

At the end of every sprint:

1. Create `docs/sprints/sprint-XX.md` using this template:
   ```markdown
   # Sprint XX

   **Period:** YYYY-MM-DD to YYYY-MM-DD

   ## Goals
   - ...

   ## Results
   - [x] Done
   - [ ] Not done (moved to next sprint)

   ## Retrospective
   - **Went well:** ...
   - **To improve:** ...
   ```
2. Update the **Project Status**, **Features**, **Sprint Log** and **Roadmap** sections in the [main README](../README.md).
