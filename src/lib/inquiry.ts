export const PROJECT_TYPES = {
  fix: 'Corrección puntual Java / Python / Docker',
  api: 'Automatización o integración de API',
  vps: 'Diagnóstico Linux / Docker / VPS',
} as const;

export const TIMEFRAMES = {
  flexible: 'Sin fecha fija',
  soon: 'Durante las próximas semanas',
  urgent: 'Incidencia urgente (sujeto a disponibilidad)',
} as const;

export function buildInquiryMailto(
  recipient: string,
  projectType: string,
  problem: string,
  timeframe: string,
): string | null {
  const email = recipient.trim();
  if (!/^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(email)) return null;
  if (!Object.prototype.hasOwnProperty.call(PROJECT_TYPES, projectType)) return null;
  if (!Object.prototype.hasOwnProperty.call(TIMEFRAMES, timeframe)) return null;
  const description = problem.trim();
  if (description.length < 30 || description.length > 500) return null;
  if (new TextEncoder().encode(description).length > 1500) return null;

  const typeLabel = PROJECT_TYPES[projectType as keyof typeof PROJECT_TYPES];
  const timeframeLabel = TIMEFRAMES[timeframe as keyof typeof TIMEFRAMES];
  const subject = 'Consulta técnica: ' + typeLabel;
  const body = [
    'Hola,',
    '',
    'Me gustaría consultar la viabilidad de un proyecto técnico:',
    'Tipo: ' + typeLabel,
    'Plazo deseado: ' + timeframeLabel,
    '',
    description,
    '',
    'No incluyo secretos, contraseñas ni datos de terceros.',
    'Entiendo que este correo no confirma presupuesto, encargo ni disponibilidad.',
  ].join('\n');

  // An explicitly user-opened mailto URL, not an email send.
  // No cookies, third-party tracking, local storage or payment.
  return 'mailto:' + email + '?subject=' + encodeURIComponent(subject)
    + '&body=' + encodeURIComponent(body);
}
