import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 py-10 text-sm text-slate-500 dark:border-slate-800/80 dark:text-slate-300">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 md:flex-row">
        <div className="space-y-2">
          <p className="font-semibold text-slate-700 dark:text-slate-100">Roger Campos Sans</p>
          <p>Lead Engineer · AI & Personalization · Barcelona</p>
        </div>
        <div className="flex gap-6">
          <Link to="/projects" className="transition hover:text-indigo-500">Proyectos</Link>
          <a href="mailto:rogercampos18@gmail.com" className="transition hover:text-indigo-500">Email</a>
          <a href="https://www.linkedin.com/in/rogercs99" target="_blank" rel="noreferrer" className="transition hover:text-indigo-500">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
