import { Link, NavLink } from 'react-router-dom';
import { LinkButton } from './Button';
import { useTheme } from '../hooks/useTheme';

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Proyectos', href: '/projects' },
  { label: 'AI & Personalization', href: '/#ai' },
  { label: 'Contacto', href: '/#contacto' }
];

export function Nav() {
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/80">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-sm font-semibold text-slate-900 dark:text-white">
          Roger Campos Sans
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-200 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `transition hover:text-indigo-500 ${isActive ? 'text-indigo-600' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label="Alternar modo oscuro"
            className="rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:text-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-slate-800 dark:text-slate-200"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <LinkButton href="/#contacto" className="hidden md:inline-flex" variant="primary">\n            Contactar\n          </LinkButton>
        </div>
      </div>
    </header>
  );
}
