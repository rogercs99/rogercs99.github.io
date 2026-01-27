import { Container } from '../components/Container';
import { ProjectCaseStudy } from '../components/ProjectCaseStudy';
import { Badge } from '../components/Badge';
import { LinkButton } from '../components/Button';

export default function GameModAICaseStudy() {
  return (
    <Container>
      <ProjectCaseStudy
        title="GameModAI"
        subtitle="Plataforma para mejorar assets de videojuegos con IA y pipeline asíncrono."
        summary="De subida a descarga en minutos: FastAPI + Celery + Kaggle GPU con UX de progreso, RGPD y paneles de admin."
        tags={["FastAPI", "Celery", "Redis", "Docker", "Kaggle", "React"]}
      >
        <div className="space-y-8 text-sm text-slate-600 dark:text-slate-200">
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Problema</h2>
            <p>
              Mejorar assets de videojuegos con IA suele ser un proceso manual, costoso y difícil de escalar. Faltaba
              una experiencia web simple que orquestara subida, procesamiento y entrega en un pipeline GPU.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Solución</h2>
            <ul className="space-y-2">
              <li>Frontend con tool de upscale y estados claros de progreso.</li>
              <li>Backend FastAPI con auth JWT y gestión de jobs.</li>
              <li>Celery + Redis para orquestar tareas y escalado asíncrono.</li>
              <li>Pipeline GPU en Kaggle con descarga automática del ZIP final.</li>
              <li>RGPD: consentimiento de cookies y tracking responsable.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Arquitectura Docker</h2>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 font-mono text-xs text-slate-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-200">
              <pre className="whitespace-pre-wrap">{`graph TD
  UI[React + Tailwind] --> API[FastAPI]
  API --> DB[(Postgres)]
  API --> REDIS[(Redis)]
  REDIS --> WORKER[Celery Worker]
  WORKER --> GPU[Kaggle GPU Kernel]
  GPU --> ZIP[ZIP Result]
  API --> UI`}</pre>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Stack</h2>
            <div className="flex flex-wrap gap-2">
              {[
                'FastAPI + Celery',
                'Redis + Postgres',
                'Docker Compose',
                'React + Tailwind',
                'JWT + Admin panel',
                'Consentimiento RGPD'
              ].map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Decisiones clave</h2>
            <ul className="space-y-2">
              <li>Jobs asíncronos para escalar sin bloquear el UX.</li>
              <li>Separación de servicios con Docker para despliegue reproducible.</li>
              <li>UX de progreso + descarga final para minimizar incertidumbre.</li>
              <li>Consentimiento RGPD para eventos y tracking responsable.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Resultados (potenciales)</h2>
            <ul className="space-y-2">
              <li>Pipeline automatizado que reduce horas de trabajo manual.</li>
              <li>Escalado GPU on-demand con costes controlados.</li>
              <li>Experiencia consistente desde marketing hasta herramienta de upscale.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Consideraciones de producto</h2>
            <ul className="space-y-2">
              <li>Latencia percibida: estados claros y estimaciones de progreso.</li>
              <li>Coste por job: guardrails para limitar tamaño y frecuencia.</li>
              <li>UX: onboarding rápido, resultados visibles y panel de historial.</li>
              <li>Seguridad: aislamiento de jobs, expiración de assets y tokens JWT.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Próximos pasos</h2>
            <ul className="space-y-2">
              <li>Optimizar colas por prioridad (beta vs. premium).</li>
              <li>Feature de comparación antes/después en frontend.</li>
              <li>Observabilidad con métricas de coste, latencia y conversión.</li>
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
