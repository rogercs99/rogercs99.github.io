import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
  tone?: 'dark' | 'light';
}

const tones = {
  dark: {
    eyebrow: 'text-ink-300',
    title: 'text-white'
  },
  light: {
    eyebrow: 'text-[#9d9d9d]',
    title: 'text-black'
  }
};

export function Section({ id, title, eyebrow, children, className = '', tone = 'dark' }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="mb-10">
          {eyebrow && (
            <p className={`text-[12px] font-semibold uppercase tracking-[0.25em] ${tones[tone].eyebrow}`}>
              {eyebrow}
            </p>
          )}
          <h2 className={`mt-3 text-[32px] font-bold md:text-[42px] ${tones[tone].title}`}>{title}</h2>
        </div>
        {children}
      </motion.div>
    </section>
  );
}
