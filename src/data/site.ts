// Business details used across the site. Change them here and every page updates.
export const site = {
  name: 'EginyanConstruction',
  owner: 'Armen Eginyan',
  phoneDisplay: '(778) 918-5188',
  phoneHref: 'tel:+17789185188',
  email: 'armeneginyan@gmail.com',
};

// Online profiles. Set any link to '' to hide it everywhere on the site.
export const links = {
  // Google Business Profile (the share link from Google Maps).
  google: 'https://share.google/EPf5F4oHhC922KhzR',
  // Direct "write a review" link from the Business Profile
  // (Google: "Ask for reviews" → copy link; looks like https://g.page/r/XXXX/review).
  // While empty, the "Leave a review" button uses the profile link above instead.
  googleReview: '',
  instagram: 'https://www.instagram.com/eginyanconstruction/',
  facebook: 'https://www.facebook.com/profile.php?id=100041851131138',
};

// Profiles shown as icon links in the footer and on the contact page (empty ones are skipped).
export const profiles = (
  [
    { id: 'google', label: 'Google', url: links.google },
    { id: 'instagram', label: 'Instagram', url: links.instagram },
    { id: 'facebook', label: 'Facebook', url: links.facebook },
  ] as const
).filter((p) => p.url !== '');

// Where the "Leave a review" button points; '' hides the review box.
export const reviewUrl = links.googleReview || links.google;

// Gallery categories, in display order. Each one matches a folder in
// src/assets/gallery/<category>/. The displayed name comes from src/i18n/*.json.
export const categories = ['kitchens', 'bathrooms', 'tile', 'flooring', 'stairs'] as const;
export type Category = (typeof categories)[number];

export type Lang = 'en' | 'ru';

// Site pages, in navigation order.
export const pages = ['about', 'gallery', 'contact'] as const;
export type Page = (typeof pages)[number];
