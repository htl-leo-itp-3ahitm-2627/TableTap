# TableTap

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-v20+-green.svg)](https://nodejs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-v16-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-v19-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8.svg)](https://tailwindcss.com/)
[![Express](https://img.shields.io/badge/Express-v5-gray.svg)](https://expressjs.com/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-blue.svg)](https://www.mysql.com/)

**From the table to the kitchen. With a single tap.**

TableTap is a web app that lets restaurants manage **orders**, **tables** and the **kitchen** in one place. Guests order from their own phone by scanning a QR code, the order shows up on the kitchen display within seconds, and owners see revenue, peak hours and best-sellers in real time. Built with **Next.js (App Router)**, **Tailwind CSS**, **Express (TypeScript)**, **MySQL** and **WebSockets**.

> ITP school project (3AHITM, HTL Leonding) by **Team TableTap**: Adyan · Valentina · Finn

---

## Project Index

- [Project Status](#project-status)
- [The Problem](#the-problem)
- [Goals](#goals)
- [Features](#features)
- [Target Audience & Roles](#target-audience--roles)
- [Architecture & Tech Stack](#architecture--tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Reference](#api-reference)
- [Sprint Log](#sprint-log)
- [Roadmap](#roadmap)
- [Risks](#risks)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

---

## Project Status

| | |
| :--- | :--- |
| **Current phase** | Sprint 0: project setup |
| **Client** | Next.js + Tailwind CSS set up, empty start page |
| **Server** | Dependencies installed (Express, mysql2, TypeScript), folder structure in place, no implementation yet |
| **Database** | Not created yet |
| **Last updated** | 2026-11-13 |

---

## The Problem

Friday, 7 pm, a full restaurant. The waiter writes the order on a slip of paper and carries it to the kitchen. On the way, a "no onions" easily gets lost.

| | |
| :--- | :--- |
| **3 stations** | before the kitchen even knows about the order |
| **0 status** | nobody can see whether the food is on its way |
| **11 pm** | only then does the owner see the day's revenue |

**Our USP:** Unlike paper slips or a POS system, the order goes from the guest's phone to the kitchen display in seconds, with no app download and no dedicated hardware.

| Existing solution | What is missing |
| :--- | :--- |
| Paper slips | slow, special requests get lost |
| POS system | prints a ticket in the kitchen, but requires expensive hardware |
| QR menu | only shows the menu, no connection to the kitchen |

---

## Goals

### Product goals

1. **Faster orders**: an order reaches the kitchen in seconds instead of passing through three stations.
2. **Fewer mistakes**: special requests (e.g. allergies, "no onions") are stored with the order and cannot get lost.
3. **Full transparency**: guests, service staff and the kitchen always see the current status of every order.
4. **Data for decisions**: owners see revenue, peak hours and best-sellers live, not only after closing time.
5. **No barriers**: works in any browser, with no app installation and no extra hardware.

### Project goals

- Deliver a working MVP (QR ordering + live kitchen display) that is demoed with a real or demo restaurant.
- Work in sprints, with this README updated at the end of every sprint.
- Learn **Next.js** and **WebSockets** as new technologies within the team.
- Keep the codebase strictly typed with TypeScript and documented in [`docs/`](docs/README.md).

---

## Features

| # | Feature | Description | Status |
| :---: | :--- | :--- | :---: |
| 01 | **QR ordering at the table** | Guests scan the QR code on the table and order from their own phone, no app needed. | Planned |
| 02 | **Live kitchen display** | New orders appear instantly via WebSockets, no reload. The kitchen sets the status (`new`, `in progress`, `ready`). | Planned |
| 03 | **Table plan & reservations** | Overview of who sits where and which tables are free. | Planned |
| 04 | **Roles & permissions** | Service staff, kitchen and owners only see their part of the app. | Planned |
| 05 | **Menu management** | Maintain dishes, prices and options in one place. | Planned |
| 06 | **Revenue statistics** | Daily revenue, peak hours and best-sellers at a glance. | Planned |

---

## Target Audience & Roles

| Role | Relation | What they do in TableTap |
| :--- | :--- | :--- |
| **Guests & service** | daily users | Guests order via QR code. Service staff see open tables and finished dishes. |
| **Kitchen** | provides data | Sets the status of every order and maintains the menu and prices. |
| **Owner** | decision maker | Pays for TableTap and decides whether to use it. Wants to see revenue, peak hours and best-sellers. |

---

## Architecture & Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | [Next.js 16](https://nextjs.org/) (App Router), [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS 4](https://tailwindcss.com/) |
| **Backend** | [Node.js](https://nodejs.org/), [Express 5](https://expressjs.com/), [TypeScript](https://www.typescriptlang.org/), [mysql2](https://github.com/sidorares/node-mysql2) |
| **Real-time** | WebSockets (live updates for kitchen and service) |
| **Auth & security** | JWT, password hashing, role-based middleware, CORS |
| **Database** | [MySQL 8.0](https://www.mysql.com/) |

| Already known in the team | New for the team |
| :--- | :--- |
| React + TypeScript, Node.js + Express, MySQL | Next.js (routing & server rendering), WebSockets |

```text
 Guest phone ──► Next.js client ──REST──► Express API ──► MySQL
                       ▲                       │
                       └────── WebSocket ◄─────┘
                (kitchen display & service, live)
```

---

## Project Structure

```text
TableTap/
├── LICENSE                     # MIT license
├── README.md                   # Project overview (this file)
├── docs/                       # Project documentation (see docs/README.md)
│   └── Pitch/                  # Project pitch (PDF)
│
├── client/                     # Next.js frontend
│   ├── app/                    # App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Start page (currently empty)
│   │   └── index.css           # Global styles (Tailwind import)
│   ├── public/                 # Static assets
│   ├── next.config.ts          # Next.js configuration
│   ├── postcss.config.mjs      # Tailwind CSS via PostCSS
│   ├── eslint.config.mjs       # ESLint configuration
│   ├── tsconfig.json           # TypeScript configuration
│   └── package.json            # Frontend dependencies & scripts
│
└── server/                     # Express TypeScript backend
    ├── database/               # Database schema & seed data (MySQL)
    ├── src/
    │   ├── config/             # Configuration (e.g. MySQL connection pool)
    │   ├── routes/             # API routes (auth, orders, tables, menu, ...)
    │   ├── controllers/        # Request handlers for the routes
    │   ├── services/           # Business logic & database access
    │   ├── middleware/         # Auth (JWT), role checks, error handling
    │   ├── sockets/            # WebSocket events (kitchen & service live)
    │   └── types/              # TypeScript types & interfaces
    ├── tsconfig.json           # TypeScript configuration
    └── package.json            # Backend dependencies
```

---

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) v20 or newer
- A running [MySQL](https://www.mysql.com/) 8.0 instance (needed once the backend is implemented)

### Installation

```bash
git clone https://github.com/htl-leo-itp-3ahitm-2627/TableTap.git
cd TableTap
```

### Frontend

```bash
cd client
npm install
npm run dev
```

The client runs at [http://localhost:3000](http://localhost:3000).

| Script | Description |
| :--- | :--- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

### Backend

```bash
cd server
npm install
```

> The backend currently only contains the folder structure and its dependencies. Start scripts, environment variables (`.env`) and database setup will be documented here as soon as they are implemented.

---

## API Reference

No endpoints yet. Endpoints for auth, orders, tables, menu, reservations and statistics will be added here sprint by sprint.

---

## Sprint Log

This section is updated at the end of every sprint.

### Sprint 0: Project setup

**Goal:** a clean, runnable foundation for client and server.

- [x] Project idea chosen and pitched (TableTap over ParkPilot and LernNetz)
- [x] Repository structure with `client/` and `server/`
- [x] Next.js client with TypeScript, ESLint and Tailwind CSS
- [x] Server dependencies installed (Express, mysql2, TypeScript) and folder structure created
- [x] `.gitignore`, MIT license and project documentation

---

## Roadmap

- [x] Project setup (Sprint 0)
- [ ] Database model: users, tables, menu, orders, reservations
- [ ] Express server & MySQL connection
- [ ] Authentication with JWT & roles (service, kitchen, owner)
- [ ] QR ordering at the table
- [ ] Live kitchen display via WebSockets
- [ ] Table plan & reservations
- [ ] Menu management
- [ ] Revenue statistics (daily revenue, peak hours, best-sellers)
- [ ] Test in a real restaurant

---

## Risks

| Risk | Impact | Mitigation |
| :--- | :--- | :--- |
| No restaurant agrees to test TableTap in real operation | No real-world feedback | Contact local restaurants before Sprint 1, otherwise set up a demo restaurant with test data |
| Next.js and WebSockets are new to the team | Slower progress in early sprints | Plan learning time into sprints, start with small prototypes |
| Allergy information gets lost or is shown incorrectly | Health risk for guests | Store special requests and allergens as structured data, show them prominently on the kitchen display |

---

## Documentation

Detailed documentation (architecture, database, API, sprints, meeting notes) lives in [`docs/`](docs/README.md).

---

## Contributing

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/my-feature
   ```
2. **Commit your changes** using [Conventional Commits](https://www.conventionalcommits.org/):
   ```bash
   git commit -m "feat: add kitchen display"
   ```
3. **Push the branch**:
   ```bash
   git push origin feature/my-feature
   ```
4. **Open a pull request** and briefly describe what changed and why.

Before opening a pull request, make sure `npm run lint` and `npm run build` pass in `client/`.

---

## License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.
