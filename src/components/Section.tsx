import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, eyebrow, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="mb-10">
          {eyebrow && <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500">{eyebrow}</p>}
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">{title}</h2>
        </div>
        {children}
      </motion.div>
    </section>
  );
}
