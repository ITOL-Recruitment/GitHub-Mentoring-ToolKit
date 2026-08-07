# GitHub Mentor Guide

A professional visual training and presentation website for mentors to teach Git and GitHub workflows during student meetings.

## Purpose

This is **not** a learning management system. It is a clean, developer-focused documentation site (GitHub Docs / freeCodeCamp style) that a mentor can open on a shared screen to explain:

- How Git works
- How GitHub works
- Branches, commits, merges, conflicts
- Pull Requests and team collaboration
- Best practices and common mistakes

## Tech Stack

- React 19 + Vite
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React icons
- React Router

## Project Structure

```
git-github-mentor/
├── public/
│   └── settings.ini          # App settings (INI format)
├── src/
│   ├── components/           # Reusable UI (CodeBlock, Terminal, GitGraph, Sidebar…)
│   ├── data/
│   │   └── sections.json     # Navigation data (JSON)
│   ├── pages/                # All teaching sections
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
└── vite.config.ts
```

## Setup

```bash
cd git-github-mentor
npm install
npm run dev
```

Open http://localhost:5173

## Settings

Configuration lives in `public/settings.ini`. Content structure is driven by `src/data/sections.json`.

## License

MIT — free for educational use.
