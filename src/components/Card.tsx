import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:shadow-glow dark:border-slate-800 dark:bg-slate-900/80 ${className}`}
    >
      {children}
    </div>
  );
}
