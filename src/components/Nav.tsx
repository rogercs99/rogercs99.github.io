import { useState } from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'SOBRE MI', href: '/#about' },
  { label: 'EXPERIENCIA', href: '/#experience' },
  { label: 'PROYECTOS', href: '/#projects' },
  { label: 'CONTACTO', href: '/#contacto' }
];

interface NavProps {
  absolute?: boolean;
}

export function Nav({ absolute = false }: NavProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className={`${absolute ? 'absolute' : 'relative'} left-0 top-0 z-20 w-full`}>
      <div className="wrap flex items-center justify-between py-8">
        <Link to="/" className="text-[12px] font-semibold uppercase tracking-[0.3em] text-white">
          Roger Campos Sans
        </Link>
        <nav className="hidden items-center gap-8 text-[12px] uppercase tracking-[0.3em] text-white md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-ink-200">
              {item.label}
            </a>
          ))}
          <a href="/projects" className="transition hover:text-ink-200">
            CASOS
          </a>
        </nav>
        <button
          type="button"
          className="md:hidden rounded-full border border-white/40 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-white"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'CERRAR' : 'MENÚ'}
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 z-30 bg-ink-900/95 backdrop-blur">
          <div className="wrap flex h-full flex-col justify-between py-10 text-white">
            <div>
              <div className="flex items-center justify-between">
                <Link
                  to="/"
                  className="text-[12px] font-semibold uppercase tracking-[0.3em] text-white"
                  onClick={() => setOpen(false)}
                >
                  Roger Campos Sans
                </Link>
                <button
                  type="button"
                  className="rounded-full border border-white/40 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em]"
                  onClick={() => setOpen(false)}
                >
                  Cerrar
                </button>
              </div>
              <div className="mt-10 space-y-6 text-[18px] font-semibold uppercase tracking-[0.2em]">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block text-white/80 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a href="/projects" className="block text-white/80 hover:text-white" onClick={() => setOpen(false)}>
                  CASOS
                </a>
              </div>
            </div>
            <p className="text-[12px] uppercase tracking-[0.3em] text-white/60">
              Navegación
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
