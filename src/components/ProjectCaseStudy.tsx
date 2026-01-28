import { ReactNode } from 'react';
import { Card } from './Card';
import { Badge } from './Badge';

interface ProjectCaseStudyProps {
  title: string;
  subtitle: string;
  summary: string;
  status?: string;
  tags: string[];
  children: ReactNode;
}

export function ProjectCaseStudy({ title, subtitle, summary, status, tags, children }: ProjectCaseStudyProps) {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-ink-300">Caso de estudio</p>
        <h1 className="text-4xl font-bold text-white md:text-5xl">{title}</h1>
        {status && <Badge>{status}</Badge>}
        <p className="text-lg text-ink-300">{subtitle}</p>
        <p className="text-base text-ink-300">{summary}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
      <Card>{children}</Card>
    </section>
  );
}
