import { ReactNode } from 'react';
import { Card } from './Card';
import { Badge } from './Badge';

interface ProjectCaseStudyProps {
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  children: ReactNode;
}

export function ProjectCaseStudy({ title, subtitle, summary, tags, children }: ProjectCaseStudyProps) {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500">Case study</p>
        <h1 className="text-4xl font-semibold text-slate-900 dark:text-white md:text-5xl">{title}</h1>
        <p className="text-lg text-slate-600 dark:text-slate-200">{subtitle}</p>
        <p className="text-base text-slate-600 dark:text-slate-200">{summary}</p>
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
