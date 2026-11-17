import { useState, type FormEvent } from 'react';
import { buildInquiryMailto, PROJECT_TYPES, TIMEFRAMES } from '../lib/inquiry';

export function ProjectInquiry({ recipient }: { recipient: string }) {
  const [draftLink, setDraftLink] = useState<string | null>(null);
  const [error, setError] = useState('');

  function prepareDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const link = buildInquiryMailto(
      recipient,
      String(fields.get('projectType') ?? ''),
      String(fields.get('problem') ?? ''),
      String(fields.get('timeframe') ?? ''),
    );
    setDraftLink(link);
    setError(link ? '' : 'Revisa el servicio y describe el problema con 30 a 500 caracteres.');
  }

  function invalidateDraft() {
    if (draftLink) setDraftLink(null);
    if (error) setError('');
  }

  return (
    <section id="consulta-tecnica" aria-labelledby="consulta-tecnica-titulo" className="bg-ink-900 py-20 md:py-24">
      <div className="wrap grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-200">
            Contacto técnico directo
          </p>
          <h2 id="consulta-tecnica-titulo" className="mt-4 text-3xl font-extrabold md:text-4xl">
            ¿Tienes un fallo o integración que resolver?
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-300">
            Describe el objetivo y el entorno. Preparamos un correo para que lo envíes desde tu propia cuenta,
            sin registrarte ni dejar datos en esta página.
          </p>
          <p className="mt-5 text-sm leading-relaxed text-ink-300">
            No envíes contraseñas, tokens, código privado ni datos de terceros.
            Esto es una consulta inicial, no una contratación ni una pasarela de pago.
          </p>
        </div>
        <form
          onSubmit={prepareDraft}
          onChange={invalidateDraft}
          className="space-y-5 rounded-2xl border border-white/20 bg-white/5 p-6 md:p-8"
        >
          <label className="block text-sm font-semibold" htmlFor="rf-project-type">
            ¿Qué necesitas?
          </label>
          <select
            id="rf-project-type"
            name="projectType"
            required
            defaultValue="fix"
            className="w-full rounded-md border border-white/30 bg-ink-900 p-3 text-white"
          >
            {Object.entries(PROJECT_TYPES).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
          <label className="block text-sm font-semibold" htmlFor="rf-timeframe">
            ¿Para cuándo?
          </label>
          <select
            id="rf-timeframe"
            name="timeframe"
            required
            defaultValue="flexible"
            className="w-full rounded-md border border-white/30 bg-ink-900 p-3 text-white"
          >
            {Object.entries(TIMEFRAMES).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
          <label className="block text-sm font-semibold" htmlFor="rf-problem">
            Describe el problema y el resultado deseado
          </label>
          <textarea
            id="rf-problem"
            name="problem"
            rows={5}
            required
            minLength={30}
            maxLength={500}
            placeholder="Por ejemplo: mi API Java devuelve errores 500 tras un despliegue y quiero localizar la causa con pruebas reproducibles."
            className="w-full rounded-md border border-white/30 bg-ink-900 p-3 text-white placeholder:text-ink-300"
          />
          <button type="submit" className="btn-shadow-hot">
            PREPARAR CORREO
          </button>
          <p role="status" aria-live="polite" className="text-sm text-ink-300">
            El formulario no envía nada por sí solo ni guarda tu información.
          </p>
          {error && <p role="alert" className="text-sm text-rose-300">{error}</p>}
          {draftLink && (
            <div className="space-y-2 rounded-lg border border-white/20 p-4">
              <p className="text-sm text-ink-300">
                Tu consulta está preparada. Al abrirla podrás revisarla antes de enviarla.
              </p>
              <a href={draftLink} className="inline-block underline underline-offset-4">
                ABRIR MI APLICACIÓN DE CORREO
              </a>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
