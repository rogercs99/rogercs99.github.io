import { Link } from 'react-router-dom';
import { loadAllContent } from '../hooks/useEditableContent';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';

export default function ProjectsPage() {
  const { projects } = loadAllContent();

  return (
    <div className="bg-ink-900 text-white min-h-screen">
      <Nav />
      <section className="wrap pb-16 pt-24 md:pt-32">
        <ScrollReveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-ink-300">CASOS DE ESTUDIO</p>
          <h1 className="mt-4 text-[36px] font-bold md:text-[48px]">Proyectos principales</h1>
          <p className="mt-4 max-w-[680px] text-ink-300">
            Proyectos personales en desarrollo que resumen mi forma de trabajar: claridad, orden y foco en que el usuario entienda el valor rápido.
          </p>
        </ScrollReveal>
      </section>
      <section className="wrap pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal key={project.slug} delay={index * 0.05}>
              <Card className="text-center">
                <img src={project.cardImage} alt={project.title} className="rounded-[28px]" loading="lazy" />
                <div className="px-2 pb-2 pt-5">
                  <h3 className="text-[24px] font-extrabold text-white">{project.title}</h3>
                  {project.status && (
                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-ink-200">
                      {project.status}
                    </p>
                  )}
                  <p className="mt-2 text-[13px] font-bold uppercase tracking-[0.2em] text-white">
                    {project.subtitle}
                  </p>
                  <p className="mt-4 text-[14px] text-ink-300">{project.summary}</p>
                  <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  {project.href && (
                    <div className="mt-8">
                      <Link className="btn-shadow-soft" to={project.href}>
                        {project.cta}
                      </Link>
                    </div>
                  )}
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
