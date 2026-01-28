import { Link } from 'react-router-dom';
import { loadAllContent } from '../hooks/useEditableContent';
import { ProjectCaseStudy } from '../components/ProjectCaseStudy';
import { Badge } from '../components/Badge';
import { Card } from '../components/Card';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';

function SectionBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-[18px] font-bold text-white">{title}</h2>
      {children}
    </section>
  );
}

export default function GameModAICaseStudy() {
  const { caseStudies, site } = loadAllContent();
  const study = caseStudies.gamemodai;
  const overviewBlocks = Array.isArray(study.overview) ? study.overview : [study.overview];

  return (
    <div className="bg-ink-900 text-white min-h-screen">
      <Nav />
      <main className="wrap pb-20 pt-24 md:pt-32">
        <ScrollReveal>
          <img
            src={study.heroImage}
            alt={study.title}
            className="w-full max-h-[420px] rounded-[24px] border border-white/10 bg-[#121212] p-6 object-contain"
            loading="lazy"
          />
        </ScrollReveal>
        <div className="mt-10">
          <ScrollReveal>
            <ProjectCaseStudy
              title={study.title}
              subtitle={study.subtitle}
              summary={study.summary}
              status={study.status}
              tags={study.tags}
            >
              <div className="space-y-8 text-sm text-ink-300">
              <SectionBlock title="Contexto">
                <div className="space-y-3">
                  {overviewBlocks.map((paragraph: string) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </SectionBlock>

                <SectionBlock title="Rol y alcance">
                  <p>{study.role}</p>
                  <p className="text-white/70">{study.scope}</p>
                </SectionBlock>

                <SectionBlock title="Qué incluye">
                  <ul className="space-y-2">
                    {study.highlights.map((item: string) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-ink-200" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </SectionBlock>

                <SectionBlock title="Skills que se ven">
                  <ul className="space-y-2">
                    {study.skillsShown.map((item: string) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-ink-200" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </SectionBlock>

                <SectionBlock title="Tecnología (alto nivel)">
                  <div className="flex flex-wrap gap-2">
                    {study.stack.map((item: string) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </SectionBlock>

                <SectionBlock title="Impacto esperado">
                  <ul className="space-y-2">
                    {study.impact.map((item: string) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-ink-200" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </SectionBlock>

                <Card>
                  <h3 className="text-[16px] font-bold text-white">CTA rápido</h3>
                  <p className="mt-2 text-ink-300">
                    Si quieres profundizar en arquitectura o decisiones de producto, hablemos.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link className="btn-shadow-soft" to="/projects">VOLVER A PROYECTOS</Link>
                    <a className="btn-shadow-hot" href={`mailto:${site.email}`}>CONTACTAR</a>
                  </div>
                </Card>
              </div>
            </ProjectCaseStudy>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
