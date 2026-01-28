import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  tone?: 'dark' | 'light';
}

const tones = {
  dark: 'border-white/30 text-white/80',
  light: 'border-black/30 text-black/70'
};

export function Badge({ children, tone = 'dark' }: BadgeProps) {
  return (
    <span className={`rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.3em] ${tones[tone]}`}>
      {children}
    </span>
  );
}
