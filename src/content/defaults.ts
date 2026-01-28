import site from './site.json';
import experience from './experience.json';
import projects from './projects.json';
import skills from './skills.json';
import ai from './ai.json';
import caseStudies from './case-studies.json';
import leadership from './leadership.json';

export const defaults = {
  site,
  experience,
  projects,
  skills,
  ai,
  caseStudies,
  leadership
};

export type ContentKeys = keyof typeof defaults;
