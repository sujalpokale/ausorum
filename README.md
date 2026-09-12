# Ausorum

Professional full-stack software-company website built with React.js, Vite, Node.js and Express.

## Structure

```text
ausorum/
├── client/                 # React + Vite frontend
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── server/                 # Node.js + Express backend
│   ├── src/
│   │   └── app.js
│   ├── .env.example
│   └── package.json
├── index.html              # Existing static fallback
├── styles.css              # Existing static fallback styles
├── script.js               # Existing static fallback script
├── package.json            # npm workspace configuration
└── .gitignore
```

## Run locally

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Frontend: `http://localhost:5173`  
API: `http://localhost:5000`

The Vite development server proxies `/api` requests to the Express server.

## API

- `GET /api/health` — service health
- `GET /api/services` — service list
- `GET /api/projects` — project list placeholder
- `POST /api/contact` — contact enquiry endpoint

The backend is intentionally MongoDB-ready but does not persist contact submissions yet. Add `MONGODB_URI` to the server environment when database persistence is implemented.

## Production build

```bash
npm run build
npm run start
```
