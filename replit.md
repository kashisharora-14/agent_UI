# Running the project on Replit

This project is a Vite + React + TypeScript frontend.

## Development

Install dependencies with the checked-in lockfile, then start the app:

```bash
npm ci
npm run dev -- --host 0.0.0.0 --port 5000
```

The Replit workflow named `Start application` runs the same development command and serves the app through Preview on port 5000.

## Build

```bash
npm run build
```