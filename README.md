# Student Task Manager

A responsive task management application designed for students to organize assignments, deadlines and daily tasks.

A front-end project by **Kev Channoeurn**, a Computer Science student and Front-End Developer. It is also shown inside his portfolio: [kev-channoeurn-portfolio](https://github.com/sokhin-devops/kev-channoeurn-portfolio).

Design style: **Minimalist + Ambient**

## Features

- Add, edit and delete tasks
- Mark tasks as completed
- Search tasks by title
- Filter by All, Active or Completed
- Low, Medium and High priority, with a priority filter
- Due dates with "Due today", "Due tomorrow" and "Overdue" labels
- Tasks saved in the browser with LocalStorage
- Helpful empty states and form validation
- Responsive layout with Dark, Light and System themes

## Tech Stack

- React 19 (useState, useMemo, custom hooks)
- JavaScript
- CSS (custom properties, container queries)
- LocalStorage
- [Vite](https://vite.dev)
- [Lucide React](https://lucide.dev) icons

## Getting Started

Requirements: [Node.js](https://nodejs.org) 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Then open the local URL printed in the terminal (usually <http://localhost:5173>).

## Build

```bash
npm run build     # production files go to dist/
npm run preview   # preview the production build locally
npm run lint      # check the code with ESLint
```

## Notes

- Tasks are stored in your browser only (LocalStorage). Clearing site data resets the list.
- Sample tasks are added on the first visit. Use "Load sample tasks" to restore them after deleting everything.

## Project Structure

```
src/
├── main.jsx                  # Entry: theme provider and global styles
├── App.jsx                   # Page shell: top bar, theme switcher, footer
├── features/task-manager/    # The app itself (components, logic and CSS)
├── components/ThemeSwitcher.jsx
├── context/ThemeContext.jsx  # Dark / Light / System theme
├── hooks/                    # useLocalStorage, useTheme
├── styles/                   # Design tokens, base styles, page shell
└── utils/
```
