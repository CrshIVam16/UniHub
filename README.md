# 🏫UniHub

UniHub is a demo university community portal with a React + Vite frontend and an Express + MongoDB backend.

## Repository structure

- `client/` — frontend app built with React, Vite, Tailwind CSS, and React Router.
- `server/` — backend API built with Express, MongoDB, JWT authentication, and file upload support.

## Client overview

The frontend includes:
- Authentication and role-based routing (`AuthContext`, `ProtectedRoute`)
- Role-specific dashboards and pages for Student, Teacher, Alumni, and Admin
- Shared components and layout wrappers
- API wrapper with JWT bearer token support
- Dark mode support via `ThemeContext`

## Server overview

The backend includes:
- `server/src/server.js` — startup entrypoint. Connects to MongoDB and starts the API server.
- `server/src/app.js` — Express app configuration, CORS, middleware, and route registration.
- `server/src/config/env.js` — environment variable loader and validation.
- `server/src/config/db.js` — MongoDB connection logic.
- `server/src/middleware/` — authentication and role-based authorization.
- `server/src/routes/` — API routes grouped by feature.
- `server/src/controllers/` — request handlers.
- `server/src/models/` — Mongoose schemas.

## Setup

### Prerequisites

- Node.js 18+ installed
- npm installed
- MongoDB Atlas cluster or local MongoDB instance available

### Install dependencies

```bash
cd D:\Git\UniHub\client
npm install 

cd D:\Git\UniHub\server
npm install

or just *npm i* in both
```

### Environment files

Copy example env files and update values:

```bash
cp client/.env.example client/.env
cp server/.env.example server/.env
```

Configure `client/.env`:

```text
VITE_API_BASE=http://localhost:5000/api
```

Configure `server/.env`:

```text
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb+srv://<user>:<password>@cluster0.example.mongodb.net/unihub?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
CORS_ORIGINS=http://localhost:5173
```

> Make sure `MONGO_URI` includes the database name (`/unihub`) and your Atlas cluster allows connections from your IP or app.

## Running locally

### Start the backend

```bash
cd D:\Git\UniHub\server
node src/server.js
```

### Start the frontend

```bash
cd D:\Git\UniHub\client
npm run dev
```

### Confirm working setup

- Frontend should be available at `http://localhost:5173`
- Backend health endpoint should respond at `http://localhost:5000/api/health`

## Deployment notes

- Update `client/.env` to use your deployed backend URL.
- Ensure `server/.env` has production values and a strong `JWT_SECRET`.
- Add the deployed frontend origin to `CORS_ORIGINS`.
- Do not commit `.env` files to Git.

## Project notes

- The app currently uses localStorage for JWT storage. This is acceptable for a demo, but not ideal for production security.
- Route protection is handled both in the frontend and backend. Backend authorization is enforced with `auth` and `allowRoles` middleware.
