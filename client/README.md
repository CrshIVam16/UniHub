# UniHub Client

This folder contains the frontend for UniHub, a demo university community portal built with React and Vite.

## What is inside

- `src/main.jsx` — app bootstrap and provider setup
- `src/App.jsx` — route definitions and protected route handling
- `src/components/` — reusable UI components like sidebar, topbar, alerts, and theme switch
- `src/context/` — app-level state providers for authentication and theme
- `src/layouts/` — page layout wrapper with navigation and topbar
- `src/lib/` — shared utilities, API wrapper, constants, and URL helpers
- `src/pages/` — individual screens for dashboards, uploads, notices, opportunities, alumni posts, profile, and auth
- `src/routes/ProtectedRoute.jsx` — route guard for authenticated access and role-based restrictions

## Run locally

```bash
cd client
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Environment

- Copy `client/.env.example` to `client/.env`
- Update `VITE_API_BASE` to your backend API URL

Example:

```text
VITE_API_BASE=https://api.yourdomain.com/api
```

## Notes

- The frontend uses token-based auth stored in `localStorage`.
- The API wrapper automatically attaches the JWT bearer token to requests.
- `NotFound.jsx` now handles unmatched routes.

## Deployment guidance

- Make sure the deployed backend URL is configured in `client/.env`.
- Ensure the backend CORS settings allow the frontend origin.
- Keep secrets out of source control and use `.env` files on the deployment server.

## Useful commands

- `npm run dev` — start local development
- `npm run build` — build production assets
- `npm run lint` — run ESLint checks
