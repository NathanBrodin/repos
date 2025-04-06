# Repos

A React application to explore GitHub repositories by username with search, filtering, and sorting capabilities.
UI is a clone of Github itself.

## Tech Stack
- [Vite](https://vite.dev): Build Tool
- [React](https://react.dev/): JS Framework
- [Redux Toolkit](https://redux-toolkit.js.org/): State Management and Data Fetching
- [Tailwindcss](https://tailwindcss.com/): Styling
- [Shadcn/ui](https://ui.shadcn.com/): Component library fondations

## Running locally
- Install dependencies

```sh
npm install
```

Or with a better package manager:

```sh
bun install
```

- Run the dev server
```sh
npm run dev
```

Repos is now running on [http://localhost:5173/](http://localhost:5173/)

## Instructions
Create a simple React app using Redux that does the following:

- [x] Fetches a list of GitHub repositories for a given username.
- [x] Displays the repositories in a list with name and description.
- [x] Allows users to filter repositories by name using an input field.

**Requirements:**

- [x] Use Redux Toolkit for state management.
- [x] Handle loading and error states.
- [ ] Implement a debounced search to avoid unnecessary API calls. *The app implements debouncing by fetching repositories only on form submit rather than real-time, and filtering happens client-side, which prevents excessive API calls.*
- [x] Use TypeScript in the project.
