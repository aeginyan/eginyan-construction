import en from './en.json';
import ru from './ru.json';
import type { Lang, Page } from '../data/site';

export type Dict = typeof en;

// Missing Russian keys fall back to English instead of showing a blank.
function merge<T>(base: T, over: unknown): T {
  if (Array.isArray(base)) {
    return (Array.isArray(over) ? base.map((b, i) => merge(b, over[i])) : base) as T;
  }
  if (base && typeof base === 'object') {
    const o = (over && typeof over === 'object' ? over : {}) as Record<string, unknown>;
    return Object.fromEntries(
      Object.entries(base).map(([k, v]) => [k, merge(v, o[k])]),
    ) as T;
  }
  return (typeof over === typeof base && over !== '' ? over : base) as T;
}

const dicts: Record<Lang, Dict> = { en, ru: merge(en, ru) };

export const t = (lang: Lang): Dict => dicts[lang];

export const fmt = (s: string, vars: Record<string, string | number>) =>
  s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''));

const slugs: Record<Page, string> = { about: '', gallery: 'gallery/', contact: 'contact/' };

/** Site root without a trailing slash: '' normally, '/eginyan-construction' on the GitHub Pages preview. */
export const root = import.meta.env.BASE_URL.replace(/\/$/, '');

export const pageUrl = (lang: Lang, page: Page) =>
  root + (lang === 'en' ? '/' : `/${lang}/`) + slugs[page];
