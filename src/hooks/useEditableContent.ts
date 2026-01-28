import { defaults, type ContentKeys } from '../content/defaults';

const storageKey = (key: ContentKeys) => `content:${key}`;

export function getContent<T>(key: ContentKeys): T {
  const raw = window.localStorage.getItem(storageKey(key));
  if (!raw) return defaults[key] as T;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return defaults[key] as T;
  }
}

export function saveContent(key: ContentKeys, value: unknown) {
  window.localStorage.setItem(storageKey(key), JSON.stringify(value, null, 2));
}

export function resetContent(key: ContentKeys) {
  window.localStorage.removeItem(storageKey(key));
}

export function loadAllContent() {
  return {
    site: getContent<typeof defaults.site>('site'),
    experience: getContent<typeof defaults.experience>('experience'),
    projects: getContent<typeof defaults.projects>('projects'),
    skills: getContent<typeof defaults.skills>('skills'),
    ai: getContent<typeof defaults.ai>('ai'),
    caseStudies: getContent<typeof defaults.caseStudies>('caseStudies'),
    leadership: getContent<typeof defaults.leadership>('leadership')
  };
}
