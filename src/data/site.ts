// Business details used across the site. Change them here and every page updates.
export const site = {
  name: 'EginyanConstruction',
  owner: 'Armen Eginyan',
  phoneDisplay: '(778) 987-4471',
  phoneHref: 'tel:+17789874471',
  email: 'armeneginyan@gmail.com',
};

// Gallery categories, in display order. Each one matches a folder in
// src/assets/gallery/<category>/. The displayed name comes from src/i18n/*.json.
export const categories = ['kitchens', 'bathrooms', 'tile', 'flooring', 'stairs'] as const;
export type Category = (typeof categories)[number];

export const langs = ['en', 'ru'] as const;
export type Lang = (typeof langs)[number];

export type Page = 'about' | 'gallery' | 'contact';
