# Portfolio – Roger Campos Sans

Portfolio profesional orientado a la posición **Lead Engineer – AI & Personalization**.

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

## Build
```bash
npm run build
npm run preview
```

## Despliegue
Listo para deploy en Vercel o Netlify (SPA). Asegura configurar redirects para React Router.

## Script rápido (Ubuntu + túnel temporal con Cloudflare)
> Copia/pega y presiona Enter en una máquina Ubuntu para clonar, instalar dependencias, levantar el dev server y abrir un túnel temporal.

```bash
set -euo pipefail

sudo apt-get update -y
sudo apt-get install -y git curl ca-certificates

if ! command -v node >/dev/null 2>&1; then
  curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
  sudo apt-get install -y nodejs
fi

if ! command -v cloudflared >/dev/null 2>&1; then
  curl -fsSL -o /tmp/cloudflared.deb https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
  sudo dpkg -i /tmp/cloudflared.deb
fi

git clone https://github.com/TODO/portfolio.git
cd portfolio
npm install
npm run dev -- --host 0.0.0.0 --port 4173 &
sleep 2
cloudflared tunnel --url http://localhost:4173
```

## Contenido editable
- `src/content/site.json`
- `src/content/experience.json`
- `src/content/projects.json`
- `src/content/skills.json`

## TODOs
- Sustituir `TODO` en enlaces de GitHub y descarga de CV cuando estén disponibles.
- Cambiar `https://example.com` en `public/sitemap.xml` y `index.html`.
 - Actualizar la URL del repositorio en el script rápido cuando esté publicada.
