import { Card } from './Card';
import { Badge } from './Badge';

interface TimelineItem {
  role: string;
  company: string;
  period: string;
  location: string;
  stack: string[];
  highlights: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <Card key={`${item.role}-${item.company}`} className="border-l-4 border-indigo-500">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.role}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-300">{item.company} · {item.location}</p>
            </div>
            <Badge>{item.period}</Badge>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {item.stack.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-200">
            {item.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" aria-hidden />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
