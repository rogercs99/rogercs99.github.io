import { Link } from 'react-router-dom';
import { loadAllContent } from '../hooks/useEditableContent';
import { Card } from '../components/Card';
import { Timeline } from '../components/Timeline';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { Badge } from '../components/Badge';
import { ScrollReveal } from '../components/ScrollReveal';

export default function HomePage() {
  const { site, projects, experience, skills, ai, leadership, caseStudies } = loadAllContent();
  const featuredProject = projects.find((project) => project.featured) ?? projects[0];
  const featuredCase =
    featuredProject.slug === 'play2'
      ? caseStudies.play2
      : featuredProject.slug === 'gamemodai'
        ? caseStudies.gamemodai
        : caseStudies.deltai;
  const hasCv = Boolean(site.cvUrl && site.cvUrl.trim().length > 0);
  const hasGithub = Boolean(site.github && site.github.trim().length > 0);
  const aiCards = [
    {
      title: 'Personalización aplicada',
      image: '/assets/ai-context.svg',
      bullets: ai.personalization
    },
    {
      title: 'De datos a producto',
      image: '/assets/ai-decision.svg',
      bullets: ai.modelToFeature
    },
    {
      title: 'Impacto y métricas',
      image: '/assets/ai-metrics.svg',
      bullets: ai.impactMetrics
    },
    {
      title: 'Liderazgo técnico',
      image: '/assets/ai-leadership.svg',
      bullets: ai.leadership
    }
  ];

  return (
    <div className="bg-ink-900 text-white">
      <section className="relative bg-ink-900">
        <Nav absolute />
        <div className="wrap pb-24 pt-40 md:pb-[130px] md:pt-[220px]">
          <p className="text-[12px] font-semibold uppercase tracking-[0.4em] text-ink-300">
            {site.name} · {site.location}
          </p>
          <h1 className="mt-6 max-w-[900px] text-[34px] font-extrabold uppercase leading-[1.1] text-white md:text-[60px]">
            Líder técnico con visión de producto y{' '}
            <span className="text-ink-200">arquitectura backend</span>
          </h1>
          <h2 className="mt-6 text-[20px] font-light tracking-[0.2em] text-stroke-pink md:text-[29px]">
            {site.headline}
          </h2>
          <p className="mt-6 max-w-[720px] text-[16px] text-ink-300">
            Me gusta construir sistemas robustos, liderar equipos y convertir ideas en productos que funcionan bien en el
            día a día.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/projects" className="btn-shadow-soft">VER PROYECTOS</Link>
            <a href={`mailto:${site.email}`} className="btn-shadow-hot">CONTACTAR</a>
            {hasCv && <a href={site.cvUrl} className="btn-shadow-soft">DESCARGAR CV</a>}
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-3 text-[16px] text-ink-300">
              <p>{site.summary}</p>
              <div className="flex flex-wrap gap-2">
                <Badge>Producto digital</Badge>
                <Badge>Arquitectura backend</Badge>
                <Badge>Calidad y delivery</Badge>
              </div>
            </div>
            <div className="rounded-[18px] border border-white/20 p-5">
              <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-white">Datos clave</p>
              <ul className="mt-4 space-y-2 text-sm text-ink-300">
                {site.quickFacts.map((fact) => (
                  <li key={fact} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-ink-200" aria-hidden />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 space-y-1 text-sm text-ink-300">
                <p>
                  <span className="text-white">Email:</span> {site.email}
                </p>
                <p>
                  <span className="text-white">Tel:</span> {site.phone}
                </p>
                <p>
                  <span className="text-white">LinkedIn:</span>{' '}
                  <a className="underline" href={site.linkedin} target="_blank" rel="noreferrer">
                    {site.linkedin}
                  </a>
                </p>
                {hasGithub && (
                  <p>
                    <span className="text-white">GitHub:</span> {site.github}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="scroller absolute bottom-[70px] left-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="56.402" height="71.552" viewBox="0 0 56.402 71.552">
            <g transform="translate(56.402) rotate(90)" fill="none" strokeLinecap="round">
              <path
                d="M0,22.689V33.349H51.621L36.77,48.632,43.8,56.4,71.552,28.2,43.8,0,36.77,7.63,51.621,22.637Z"
                stroke="none"
              />
              <path
                d="M 43.82506561279297 1.449832916259766 L 38.15225601196289 7.605030059814453 L 52.33216094970703 21.93354415893555 L 54.01552963256836 23.63454437255859 L 51.62239074707031 23.63695526123047 L 1 23.68783187866211 L 1 32.34949493408203 L 51.62137985229492 32.34949493408203 L 53.98759841918945 32.34949493408203 L 52.33853149414062 34.04641723632812 L 38.14043807983398 48.65647125244141 L 43.83177947998047 54.94513320922852 L 70.14895629882812 28.20094871520996 L 43.82506561279297 1.449832916259766 M 43.80134963989258 -3.814697265625e-06 L 71.55191802978516 28.2009449005127 L 43.80134963989258 56.40178680419922 L 36.76968002319336 48.63212585449219 L 51.62137985229492 33.34949493408203 L 0 33.34949493408203 L 0 22.68883514404297 L 51.62137985229492 22.63695526123047 L 36.76968002319336 7.629604339599609 L 43.80134963989258 -3.814697265625e-06 Z"
                fill="#ffffff"
                stroke="none"
              />
            </g>
          </svg>
        </div>
      </section>

      <section className="bg-ink-100 py-16 text-black md:py-[85px]">
        <ScrollReveal className="wrap grid gap-12 lg:grid-cols-[3fr_2fr]">
          <div className="relative">
            {featuredProject.labelImage && (
              <img
                src={featuredProject.labelImage}
                alt="Play2 case study"
                className="w-[55%] max-w-[240px]"
              />
            )}
            <img
              src={featuredProject.coverImage}
              alt={featuredProject.title}
              className="mt-6 w-full"
              loading="lazy"
            />
            <div className="ring-wrap">
              <svg className="ring-spin" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <path
                    id="circlePath"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                  />
                </defs>
                <text fill="#fa4777" fontSize="10" fontFamily="Arial, sans-serif" letterSpacing="2">
                  <textPath href="#circlePath">
                    ROGER CAMPOS SANS · LEAD ENGINEER · PRODUCT ENGINEERING ·
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[#9d9d9d]">
              CASO DE ESTUDIO PRINCIPAL
            </p>
            <Card variant="light">
              <h2 className="text-[28px] font-bold text-black md:text-[36px]">{featuredProject.title}</h2>
              {featuredProject.status && (
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#333]">
                  {featuredProject.status}
                </p>
              )}
              <p className="mt-3 text-[15px] leading-relaxed text-[#333]">{featuredProject.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-[#444]">
                {featuredCase.highlights.slice(0, 3).map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-ink-900" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link className="btn-shadow-hot" to={featuredProject.href ?? '/projects'}>
                  VER CASO
                </Link>
              </div>
            </Card>
          </div>
        </ScrollReveal>
      </section>

      <section id="projects" className="bg-ink-900 py-20 md:py-[108px]">
        <ScrollReveal className="wrap border-b border-white pb-6">
          <img src="/assets/selected.svg" alt="Proyectos destacados" className="w-[220px]" />
        </ScrollReveal>
        <div className="wrap mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                  {project.href ? (
                    <div className="mt-8">
                      <Link className="btn-shadow-soft" to={project.href}>
                        {project.cta}
                      </Link>
                    </div>
                  ) : (
                    <div className="mt-8 text-[12px] uppercase tracking-[0.3em] text-ink-300">{project.cta}</div>
                  )}
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="about" className="bg-ink-200 py-24 text-black md:py-[222px]">
        <ScrollReveal className="wrap grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[#9d9d9d]">SOBRE MÍ</p>
            <h2 className="text-[32px] font-bold md:text-[42px]">
              Liderazgo técnico con foco en producto y ejecución
            </h2>
            <p className="text-[16px] font-medium">{site.summary}</p>
            <div className="grid gap-4 md:grid-cols-2">
              <Card variant="light">
                <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-[#444]">Idiomas</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {site.languages.map((lang) => (
                    <li key={lang} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-ink-900" aria-hidden />
                      <span>{lang}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            <Card variant="light">
              <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-[#444]">Datos clave</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {site.quickFacts.map((fact) => (
                    <li key={fact} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-ink-900" aria-hidden />
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
            {hasCv && (
              <div className="pt-2">
                <a className="btn-shadow-hot" href={site.cvUrl}>DESCARGAR CV</a>
              </div>
            )}
          </div>
          <div className="w-full">
            <img
              src="/assets/about-illustration.svg"
              alt="Ilustración de arquitectura"
              className="h-full w-full rounded-[20px]"
              loading="lazy"
            />
          </div>
        </ScrollReveal>
      </section>

      <section id="experience" className="bg-ink-100 py-20 text-black md:py-[110px]">
        <ScrollReveal className="wrap">
          <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[#9d9d9d]">EXPERIENCIA</p>
          <h2 className="mt-3 text-[32px] font-bold md:text-[42px]">Experiencia con impacto</h2>
          <div className="mt-10">
            <Timeline items={experience} tone="light" />
          </div>
        </ScrollReveal>
      </section>

      <section id="leadership" className="bg-ink-200 py-20 text-black md:py-[110px]">
        <ScrollReveal className="wrap">
          <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[#9d9d9d]">LIDERAZGO</p>
          <h2 className="mt-3 text-[32px] font-bold md:text-[42px]">Liderazgo y forma de trabajo</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {leadership.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.05}>
                <Card variant="light">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm text-[#444]">{item.body}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section id="ai" className="bg-ink-900 py-20 md:py-[110px]">
        <ScrollReveal className="wrap text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-ink-300">PERSONALIZACIÓN</p>
          <h2 className="mt-4 text-[35px] font-bold text-white md:text-[42px]">
            Cómo puedo aportar en personalización
          </h2>
        </ScrollReveal>
        <div className="wrap mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {aiCards.map((card, index) => (
            <ScrollReveal key={card.title} delay={index * 0.05}>
              <Card className="text-center">
                <img src={card.image} alt={card.title} className="rounded-[20px]" loading="lazy" />
                <div className="px-2 pb-2 pt-5">
                  <h3 className="text-[18px] font-black text-white">{card.title}</h3>
                  <ul className="mt-3 space-y-2 text-left text-[14px] text-ink-300">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-ink-200" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="wrap mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h3 className="text-[20px] font-bold text-white">Por qué puedo aportar valor</h3>
            <ul className="mt-4 space-y-3 text-[15px] text-ink-300">
              {ai.whyMe.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-ink-200" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card className="h-full">
            <h3 className="text-[18px] font-bold text-white">Cómo suelo enfocar el problema</h3>
            <ul className="mt-4 space-y-2 text-[14px] text-ink-300">
              {ai.mindset.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-ink-200" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </ScrollReveal>

        <ScrollReveal className="wrap mt-16 text-center">
          <h4 className="text-[18px] font-bold text-ink-300">Vista rápida de arquitectura</h4>
          <img
            src="/assets/ai-diagram.svg"
            alt="Diagrama de arquitectura"
            className="mt-8 w-full rounded-[20px]"
            loading="lazy"
          />
        </ScrollReveal>
      </section>

      <section id="skills" className="bg-ink-100 py-20 text-black md:py-[110px]">
        <ScrollReveal className="wrap">
          <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[#9d9d9d]">HABILIDADES</p>
          <h2 className="mt-3 text-[32px] font-bold md:text-[42px]">Habilidades & Stack</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <ScrollReveal delay={0.05}>
              <Card variant="light">
                <h3 className="text-lg font-semibold">Base</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {skills.core.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-ink-900" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Card variant="light">
                <h3 className="text-lg font-semibold">Ingeniería</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {skills.engineering.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-ink-900" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <Card variant="light">
                <h3 className="text-lg font-semibold">Seguridad</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {skills.security.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-ink-900" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Card variant="light">
                <h3 className="text-lg font-semibold">Datos & producto</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {skills.data.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-ink-900" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.25} className="md:col-span-2">
              <Card variant="light">
                <h3 className="text-lg font-semibold">Flujo de trabajo con IA</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {skills.aiWorkflow.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-ink-900" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <Card variant="light">
                <h3 className="text-lg font-semibold">Educación</h3>
                <p className="mt-3 text-sm">
                  Computer Engineering — Universitat Pompeu Fabra (UPF), Barcelona (Sep 2018 – Jun 2022).
                </p>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <Card variant="light">
                <h3 className="text-lg font-semibold">Idiomas</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {site.languages.map((lang) => (
                    <li key={lang} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-ink-900" aria-hidden />
                      <span>{lang}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </section>

      <section id="contacto" className="bg-ink-900 py-24 md:py-[170px]">
        <ScrollReveal className="wrap space-y-6">
          <h2 className="text-[34px] font-extrabold leading-[1.3] text-white md:text-[50px]">
            ¿Hablamos de producto y backend?
          </h2>
          <p className="max-w-[640px] text-[16px] text-white">
            Abierto a oportunidades donde pueda liderar equipos y construir sistemas sólidos. Respondo rápido a propuestas
            con contexto claro.
          </p>
          <div className="flex flex-wrap gap-4">
            <a className="btn-shadow-hot" href={`mailto:${site.email}`}>CONTACTAR</a>
            <a className="btn-shadow-soft" href={site.linkedin} target="_blank" rel="noreferrer">VER LINKEDIN</a>
            {hasCv && <a className="btn-shadow-soft" href={site.cvUrl}>DESCARGAR CV</a>}
          </div>
          <div className="pt-6">
            <a className="portfolio-cta" href={`mailto:${site.email}`}>
              <span className="portfolio-text">CONTACTEMOS!</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="71.552" height="56.402" aria-hidden="true">
                <path
                  d="M0 22.689v10.66h51.621L36.77 48.632 43.8 56.4l27.752-28.2L43.8 0l-7.03 7.63 14.851 15.007z"
                  fill="transparent"
                />
                <path
                  d="M43.849 2.9l-4.314 4.68 13.508 13.65 3.367 3.402-4.787.005L2 24.687v6.662h54.354l-3.298 3.394L39.51 48.681l4.351 4.807 24.884-25.287L43.849 2.9M43.8 0l27.75 28.2-27.75 28.202-7.031-7.77L51.62 33.35H0V22.69l51.621-.052L36.77 7.63 43.8 0z"
                  fill="#ffffff"
                />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}
