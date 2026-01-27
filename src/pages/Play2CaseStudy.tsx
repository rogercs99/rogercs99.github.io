import { Container } from '../components/Container';
import { ProjectCaseStudy } from '../components/ProjectCaseStudy';
import { Badge } from '../components/Badge';
import { LinkButton } from '../components/Button';

export default function Play2CaseStudy() {
  return (
    <Container>
      <ProjectCaseStudy
        title="Play2"
        subtitle="Plataforma social para descubrir, crear y unirse a eventos deportivos."
        summary="Producto B2C con mapa interactivo, comunidad y chat realtime. Diseñado para activar usuarios y retenerlos con engagement social."
        tags={["React", "Vite", "Fastify", "PostgreSQL", "WebSocket", "Framer Motion"]}
      >
        <div className="space-y-8 text-sm text-slate-600 dark:text-slate-200">
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Problema</h2>
            <p>
              Los usuarios querían encontrar quedadas deportivas de forma rápida, con contexto real (ubicación, nivel,
              participantes) y con feedback inmediato. Las alternativas eran dispersas y con poca interacción social.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Solución</h2>
            <ul className="space-y-2">
              <li>Mapa como núcleo del producto: filtra eventos en tiempo real y muestra detalles esenciales.</li>
              <li>Comunidad y perfiles para generar confianza y retención.</li>
              <li>Chat realtime y notificaciones para acelerar la coordinación.</li>
              <li>Panel de administración para operaciones y soporte interno.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Arquitectura</h2>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 font-mono text-xs text-slate-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-200">
              <pre className="whitespace-pre-wrap">{`graph TD
  UI[React + Vite + Leaflet] --> API[Fastify API]
  API --> DB[(PostgreSQL)]
  API --> AUTH[JWT Auth]
  UI --> WS[WebSocket Chat]
  WS --> API`}</pre>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Stack</h2>
            <div className="flex flex-wrap gap-2">
              {[
                'React + Vite',
                'Tailwind + Framer Motion',
                'Fastify + Prisma',
                'PostgreSQL',
                'WebSocket',
                'JWT + Zod'
              ].map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Decisiones clave</h2>
            <ul className="space-y-2">
              <li>Mapa con tiles dinámicos dark/light para coherencia visual y accesibilidad.</li>
              <li>Re-inicialización del mapa vía query params para filtros consistentes.</li>
              <li>Separación clara entre UI y API para mejorar DX y escalabilidad.</li>
              <li>Componentes UI propios para mantener consistencia visual y velocidad de iteración.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Resultados (potenciales)</h2>
            <ul className="space-y-2">
              <li>Mayor activación con mapa como punto único de descubrimiento.</li>
              <li>Engagement más alto gracias a chat y comunidad integrada.</li>
              <li>Reducción de fricción en creación de eventos con flujo guiado.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Product thinking</h2>
            <ul className="space-y-2">
              <li>Activación: creación de evento y primera asistencia como north star.</li>
              <li>Retención: sesiones semanales y participación en chat.</li>
              <li>Engagement: ratio de eventos vistos → eventos unidos.</li>
              <li>Experimentación: tests A/B sobre filtros, copy y cards de eventos.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Próximos pasos</h2>
            <ul className="space-y-2">
              <li>Personalización basada en preferencias deportivas y contexto de ubicación.</li>
              <li>Recomendaciones de eventos con modelos de similitud y contexto temporal.</li>
              <li>Monetización con partnerships locales y featured events.</li>
            </ul>
          </section>

          <div className="flex flex-wrap gap-3">
            <LinkButton href="/projects" variant="secondary">Volver a proyectos</LinkButton>
            <LinkButton href="/#contacto" variant="primary">Contactar</LinkButton>
          </div>
        </div>
      </ProjectCaseStudy>
    </Container>
  );
}
