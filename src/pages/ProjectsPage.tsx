import projects from '../content/projects.json';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { LinkButton } from '../components/Button';

export default function ProjectsPage() {
  return (
    <Container>
      <Section title="Projects" eyebrow="Case studies">
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
    </Container>
  );
}
