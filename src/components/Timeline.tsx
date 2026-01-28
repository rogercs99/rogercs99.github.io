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
  tone?: 'dark' | 'light';
}

export function Timeline({ items, tone = 'light' }: TimelineProps) {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <Card
          key={`${item.role}-${item.company}`}
          variant={tone === 'light' ? 'light' : 'dark'}
          className={tone === 'light' ? 'border-l-4 border-ink-900' : 'border-l-4 border-ink-200'}
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">{item.role}</h3>
              <p className={tone === 'light' ? 'text-sm text-[#444]' : 'text-sm text-ink-300'}>
                {item.company} · {item.location}
              </p>
            </div>
            <Badge tone={tone === 'light' ? 'light' : 'dark'}>{item.period}</Badge>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {item.stack.map((skill) => (
              <Badge key={skill} tone={tone === 'light' ? 'light' : 'dark'}>
                {skill}
              </Badge>
            ))}
          </div>
          <ul className={`mt-4 space-y-2 text-sm ${tone === 'light' ? 'text-black' : 'text-ink-300'}`}>
            {item.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span
                  className={`mt-1 h-2 w-2 rounded-full ${tone === 'light' ? 'bg-ink-900' : 'bg-ink-200'}`}
                  aria-hidden
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
