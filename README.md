# IshConnect

IshConnect is a Kigali-based technology studio website built with React, Vite, TypeScript, and Tailwind CSS. The repository includes the public website and an Express API for admin authentication, events, submissions, widgets, and uploads.

## Requirements

- Node.js 24 (the version used by the Render deployment)
- npm
- MongoDB for the API and admin tools

## Local development

```powershell
Copy-Item .env.example .env
npm ci
npm run dev
```

To use the admin editor locally, set `VITE_ADMIN_API_URL=http://localhost:4000` and `ADMIN_ORIGIN=http://localhost:5173` in `.env`, configure `MONGODB_URI`, `ADMIN_EMAIL`, either `ADMIN_PASSWORD` or `ADMIN_PASSWORD_HASH`, and `JWT_SECRET`, then start the API in another terminal:

```powershell
npm run server
```

To seed only the admin record in the database configured by `MONGODB_URI`, run:

```powershell
npm run seed:admin
```

The seed command requires `ADMIN_EMAIL` and either `ADMIN_PASSWORD` or a valid bcrypt `ADMIN_PASSWORD_HASH`. When using `ADMIN_PASSWORD`, the API hashes it with bcrypt before storing it; the plaintext is never written to MongoDB.

Generate the admin password hash with:

```powershell
node --input-type=module -e "import bcrypt from 'bcryptjs'; console.log(await bcrypt.hash(process.argv[1], 12))" "your-admin-password"
```

Keep `.env` and generated secrets private. `VITE_*` values are compiled into the browser bundle and must never contain server secrets.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run server` | Start the API using `.env` |
| `npm run build` | Type-check, build the site, generate the sitemap, and prerender routes |
| `npm start` | Start the production API and serve the built site |
| `npm run preview` | Preview the Vite build locally |
| `npm run lint` | Run ESLint |

## Admin and API

The **Admin Login** link in the footer and `/admin` open the admin editor. If no admin exists, the registration form allows the first admin account to be created; registration closes automatically afterward. A signed-in admin can reopen or close registration from the editor. The API syncs configured `ADMIN_EMAIL` and `ADMIN_PASSWORD_HASH` into MongoDB when that configuration changes, then records a fingerprint so ordinary restarts do not overwrite credentials changed through the editor. After signing in, use **Change login** in the editor to update them. The access token is held in `sessionStorage` and expires after eight hours.

Required server environment variables:

- `MONGODB_URI`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD` (plaintext secret, bcrypt-hashed by the API) or `ADMIN_PASSWORD_HASH` (bcrypt hash)
- `JWT_SECRET` (use a long, random value)

Optional variables:

- `ADMIN_ORIGIN` — comma-separated frontend origins when the frontend is hosted separately. Leave unset for same-origin deployment.
- `API_PORT` — local fallback; production hosts provide `PORT`.
- `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` — enable widget image uploads.
- `VITE_ADMIN_API_URL` — API origin for a separately hosted frontend. Leave empty when site and API share an origin.

## Render deployment

The repository includes [`render.yaml`](render.yaml) for a Node web service rooted at the repository root. Deploy it as a Render Blueprint, then provide the values for its `sync: false` variables. The service builds with `npm ci && npm run build`, starts with `npm start`, and uses `/api/health` for health checks.

If the service is configured directly in the Render Dashboard, leave **Root Directory** empty (repository root), set Build Command to `npm ci && npm run build`, and set Start Command to `npm start`. The API requires MongoDB to be configured before it will start. Set `ADMIN_EMAIL`, either `ADMIN_PASSWORD` or `ADMIN_PASSWORD_HASH`, and `JWT_SECRET` in Render before deployment. When you intentionally change the configured email or password, the next startup syncs that change once; later restarts do not overwrite credential changes made through the editor.

## Vercel deployment

`vercel.json` configures the frontend as a static Vite deployment. The API runs at `https://ishconnlab.onrender.com`, configured in `.env.production`. The API allows the production website origins in `ADMIN_ORIGIN`. Rebuild after changing Vite environment variables or the API host.

For EmailJS forms, configure the `VITE_EMAILJS_*` variables listed in [`.env.example`](.env.example). These values are public client configuration, not secrets.
