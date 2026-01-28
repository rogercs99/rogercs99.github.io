# Portfolio – Roger Campos Sans

Portfolio profesional orientado a liderazgo técnico y backend.

## Stack
- React + Vite + TypeScript
- Tailwind CSS
- Framer Motion

## Requisitos
- Node.js 18+

## Desarrollo local
```bash
npm install
npm run dev
```
Abre `http://127.0.0.1:5173`.

## Build
```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages)
Este repo está preparado para GitHub Pages con Actions y un fallback para rutas SPA.

Pasos:
1) Sube el repo a GitHub en `rogercs99/rogercs99.github.io`.
2) En GitHub → Settings → Pages → Source: **GitHub Actions**.
3) Cada push a `main` hará deploy automático.

## Contenido editable
- `src/content/site.json`
- `src/content/experience.json`
- `src/content/projects.json`
- `src/content/skills.json`
- `src/content/ai.json`
- `src/content/case-studies.json`
- `src/content/leadership.json`
