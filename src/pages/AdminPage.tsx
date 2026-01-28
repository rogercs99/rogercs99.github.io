import { useMemo, useState } from 'react';
import { defaults, type ContentKeys } from '../content/defaults';
import { getContent, saveContent, resetContent } from '../hooks/useEditableContent';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';

const adminKey = 'admin-auth';
const contentSections: { key: ContentKeys; label: string }[] = [
  { key: 'site', label: 'Site' },
  { key: 'experience', label: 'Experience' },
  { key: 'projects', label: 'Projects' },
  { key: 'skills', label: 'Skills' },
  { key: 'ai', label: 'Personalización' },
  { key: 'caseStudies', label: 'Case studies' },
  { key: 'leadership', label: 'Leadership' }
];

export default function AdminPage() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem(adminKey) === '1');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const secret = import.meta.env.VITE_ADMIN_PASS || '';

  const initialData = useMemo(() => {
    return contentSections.reduce<Record<string, string>>((acc, section) => {
      acc[section.key] = JSON.stringify(getContent(section.key), null, 2);
      return acc;
    }, {});
  }, []);

  const [drafts, setDrafts] = useState<Record<string, string>>(initialData);

  const onLogin = () => {
    if (!secret) {
      setMessage('Define VITE_ADMIN_PASS en .env.local para habilitar el acceso.');
      return;
    }
    if (password === secret) {
      sessionStorage.setItem(adminKey, '1');
      setAuthed(true);
      setMessage('');
    } else {
      setMessage('Password incorrecta.');
    }
  };

  if (!authed) {
    return (
      <div className="bg-ink-900 text-white min-h-screen">
        <Nav />
        <main className="wrap pb-20 pt-24 md:pt-32">
          <h1 className="text-[28px] font-bold">Zona admin</h1>
          <p className="mt-2 text-white/70">
            Acceso privado. Define una contraseña en <code>.env.local</code> con{' '}
            <code>VITE_ADMIN_PASS</code>.
          </p>
          <div className="mt-6 max-w-[420px] space-y-3">
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              className="w-full rounded-[10px] border border-white/20 bg-transparent px-4 py-3 text-white"
            />
            <button className="btn-shadow-hot" type="button" onClick={onLogin}>
              ENTRAR
            </button>
            {message && <p className="text-sm text-[#facdcd]">{message}</p>}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const onSave = (key: ContentKeys) => {
    try {
      const parsed = JSON.parse(drafts[key]);
      saveContent(key, parsed);
      setMessage(`Guardado: ${key}`);
    } catch {
      setMessage(`JSON inválido en ${key}`);
    }
  };

  const onReset = (key: ContentKeys) => {
    resetContent(key);
    setDrafts((prev) => ({
      ...prev,
      [key]: JSON.stringify(defaults[key], null, 2)
    }));
    setMessage(`Restaurado: ${key}`);
  };

  return (
    <div className="bg-ink-900 text-white min-h-screen">
      <Nav />
      <main className="wrap pb-20 pt-24 md:pt-32">
        <h1 className="text-[28px] font-bold">Zona admin</h1>
        <p className="mt-2 text-white/70">
          Aquí puedes editar todo el contenido en formato JSON. Los cambios se guardan en tu navegador.
        </p>
        {message && <p className="mt-4 text-sm text-[#facdcd]">{message}</p>}

        <div className="mt-8 space-y-10">
          {contentSections.map((section) => (
            <div key={section.key} className="rounded-[18px] border border-white/10 bg-[#151515] p-6">
              <h2 className="text-[18px] font-bold">{section.label}</h2>
              <textarea
                value={drafts[section.key]}
                onChange={(event) =>
                  setDrafts((prev) => ({
                    ...prev,
                    [section.key]: event.target.value
                  }))
                }
                className="mt-4 h-[260px] w-full rounded-[12px] border border-white/20 bg-transparent p-4 font-mono text-xs text-white"
              />
              <div className="mt-4 flex flex-wrap gap-3">
                <button className="btn-shadow-hot" type="button" onClick={() => onSave(section.key)}>
                  GUARDAR
                </button>
                <button className="btn-shadow-soft" type="button" onClick={() => onReset(section.key)}>
                  RESTAURAR
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
