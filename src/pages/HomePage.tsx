import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import site from '../content/site.json';
import experience from '../content/experience.json';
import skills from '../content/skills.json';
import projects from '../content/projects.json';
import { Badge } from '../components/Badge';
import { Button, LinkButton } from '../components/Button';
import { Card } from '../components/Card';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Timeline } from '../components/Timeline';

export default function HomePage() {
  return (
    <div>
      <section className="section-grid hero-glow border-b border-slate-200/70 bg-white/60 py-20 dark:border-slate-800/70 dark:bg-slate-950">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap gap-2">
                <Badge>Lead Engineer · AI & Personalization</Badge>
                <Badge>Producto B2C</Badge>
                <Badge>Arquitectura backend</Badge>
              </div>
              <h1 className="text-4xl font-semibold text-slate-900 dark:text-white md:text-5xl">
                {site.name}
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-200">{site.headline}</p>
              <p className="text-base text-slate-600 dark:text-slate-200">
                Lead Engineer con mentalidad de producto y foco en conversión, revenue y personalización. Diseño
                sistemas backend críticos, lidero equipos y convierto IA/ML en features medibles en producción.
              </p>
              <div className="flex flex-wrap gap-3">
                <LinkButton href="#contacto" variant="primary">Contactar</LinkButton>
                <LinkButton href="/projects" variant="secondary">Ver proyectos</LinkButton>
                <LinkButton href={site.downloadCv} variant="ghost">Descargar CV</LinkButton>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-300">
                <span>{site.location}</span>
                <span>·</span>
                <span>{site.email}</span>
                <span>·</span>
                <span>{site.phone}</span>
              </div>
            </motion.div>
            <div className="space-y-6">
              <Card className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Quick facts</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">Impacto y contexto rápido</h2>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-200">
                  {site.quickFacts.map((fact) => (
                    <li key={fact} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" aria-hidden />
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
                <div className="grid gap-3 text-sm text-slate-600 dark:text-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Links</p>
                    <div className="mt-1 flex flex-wrap gap-3">
                      <a href={site.social.linkedin} className="text-indigo-500" target="_blank" rel="noreferrer">
                        LinkedIn
                      </a>
                      <a href={`mailto:${site.social.email}`} className="text-indigo-500">Email</a>
                      <span className="text-slate-400">GitHub: {site.social.github}</span>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="grid gap-4 bg-slate-900 text-white dark:bg-slate-900">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300">Leadership snapshot</p>
                  <h3 className="mt-2 text-xl font-semibold">Resultados que busco</h3>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { label: 'Conversión', value: '+Optimización continua' },
                    { label: 'Revenue', value: 'Focus en margin/booking' },
                    { label: 'Latency', value: 'Guardrails < 200ms' },
                    { label: 'Calidad', value: 'SLOs + observabilidad' }
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-xs uppercase text-indigo-200">{stat.label}</p>
                      <p className="text-sm font-semibold text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <Section id="about" title="Sobre mí" eyebrow="About">
          <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr]">
            <p className="text-base text-slate-600 dark:text-slate-200">{site.summary}</p>
            <Card>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Propuesta de valor</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-200">
                <li>Arquitectura backend + delivery con foco en resultados medibles.</li>
                <li>Equipo + producto: convierto necesidades en features con métricas claras.</li>
                <li>IA aplicada: de modelos a APIs y experiencias de usuario con feedback loops.</li>
              </ul>
            </Card>
          </div>
        </Section>

        <Section id="experience" title="Experiencia" eyebrow="Impacto y liderazgo">
          <Timeline items={experience} />
        </Section>

        <Section id="projects" title="Proyectos destacados" eyebrow="Case studies">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.slug}>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-300">{project.subtitle}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-200">{project.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  <LinkButton href={`/projects/${project.slug}`} variant="secondary">
                    {project.cta}
                  </LinkButton>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="ai" title="AI & Personalization" eyebrow="Fit directo con eDreams">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <Card className="space-y-5">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">How I operate</h3>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-200">
                <li>Hiper-personalización: combino targeting, contexto, relevancia y restricciones para decisiones en tiempo real.</li>
                <li>De modelos a features: APIs de decisión, eventos bien definidos, experimentación A/B y feedback loop continuo.</li>
                <li>Impacto medible: conversion rate, attach rate (ancillaries), margin/booking, CTR, latencia y error rate.</li>
                <li>Liderazgo: code reviews, design reviews, estándares, ownership y cadence de delivery alineada a producto.</li>
              </ul>
              <div className="rounded-xl border border-dashed border-indigo-300 bg-indigo-50/60 p-4 text-sm text-indigo-900 dark:border-indigo-500/40 dark:bg-indigo-500/10 dark:text-indigo-100">
                <p className="font-semibold">Personalization mindset</p>
                <p>Contexto + intención + constraints → propuesta óptima.</p>
                <p>Reglas + modelos ML → decisioning en tiempo real.</p>
                <p>Medición: experimentación, cohorts, attach rate, margin, conversion funnel, guardrails.</p>
                <p>Colaboración: Product + Data Science + UX + Engineering con ownership claro.</p>
              </div>
            </Card>
            <Card className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Why me for Lead Engineer – AI & Personalization</h3>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-200">
                <li>He liderado equipos y he sido responsable de arquitectura y delivery en entornos regulados.</li>
                <li>Diseño APIs en producción con seguridad, observabilidad y control operativo.</li>
                <li>Convierto problemas de negocio en features con métricas claras y narrativa de impacto.</li>
                <li>Experiencia real con fraude y data mindset en banca.</li>
                <li>GameModAI demuestra orquestación asíncrona, UX orientada a producto e IA aplicada.</li>
                <li>Play2 demuestra producto B2C con mapa, comunidad, chat y journeys de engagement.</li>
                <li>Trabajo AI-augmented para acelerar desarrollo con calidad y criterio.</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge>Producto + Revenue</Badge>
                <Badge>IA en producción</Badge>
                <Badge>Leadership</Badge>
              </div>
            </Card>
          </div>
        </Section>

        <Section id="leadership" title="Leadership & Ways of Working" eyebrow="Cómo lidero equipos">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Ownership y calidad',
                body: 'Estándares técnicos claros, code reviews estrictas y diseño orientado a mantenimiento y observabilidad.'
              },
              {
                title: 'Delivery y alineación',
                body: 'Roadmaps realistas, métricas de entrega, coordinación con producto y QA sin fricción.'
              },
              {
                title: 'Mentoring y cultura',
                body: 'Crecimiento del equipo con sesiones de pairing, feedback continuo y documentación útil.'
              }
            ].map((item) => (
              <Card key={item.title}>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-200">{item.body}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills & Stack" eyebrow="Hard skills relevantes">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Core</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-200">
                {skills.core.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Product & Data</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-200">
                {skills.productData.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Engineering</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-200">
                {skills.engineering.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">AI workflow</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-200">
                {skills.ai.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Section>

        <Section id="education" title="Educación & Idiomas" eyebrow="Background">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Educación</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-200">
                Computer Engineering — Universitat Pompeu Fabra (UPF), Barcelona (Sep 2018 – Jun 2022).
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Idiomas</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-200">
                {site.languages.map((lang) => (
                  <li key={lang} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" aria-hidden />
                    <span>{lang}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Section>

        <Section id="contacto" title="Contacto" eyebrow="Let's build">
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <Card>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Hablemos</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-200">
                Estoy abierto a oportunidades Lead Engineer en AI & Personalization con foco en producto y revenue.
                Respondo rápido a propuestas con contexto técnico claro.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <LinkButton href={`mailto:${site.email}`} variant="primary">Contactar</LinkButton>
                <LinkButton href={site.social.linkedin} variant="secondary" target="_blank" rel="noreferrer">Ver LinkedIn</LinkButton>
              </div>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Quick contact</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-200">
                <li><strong>Email:</strong> {site.email}</li>
                <li><strong>Tel:</strong> {site.phone}</li>
                <li><strong>Location:</strong> {site.location}</li>
              </ul>
              <div className="mt-4">
                <Button type="button" variant="ghost">Disponibilidad híbrida · Barcelona/Madrid/Milan</Button>
              </div>
            </Card>
          </div>
        </Section>

        <Section id="missing" title="Missing info" eyebrow="TODOs">
          <Card>
            <p className="text-sm text-slate-600 dark:text-slate-200">
              Completar cuando esté disponible: enlace de GitHub, URL pública para descargar CV, demos live de Play2 y
              GameModAI, métricas reales de impacto si las hay.
            </p>
          </Card>
        </Section>
      </Container>
    </div>
  );
}
