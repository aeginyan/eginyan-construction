import type { ImageMetadata } from 'astro';
import { categories, type Category } from '../data/site';

// Every photo in src/assets/gallery/<category>/ is picked up automatically.
// Uploading through Pages CMS just adds files to those folders.
const galleryFiles = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/gallery/*/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true },
);

// Optional site photos: src/assets/site/hero.* and src/assets/site/owner.*
const siteFiles = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/site/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true },
);

export type Photo = { src: ImageMetadata; file: string };

export function getGallery(): Record<Category, Photo[]> {
  const out = Object.fromEntries(categories.map((c) => [c, [] as Photo[]])) as Record<Category, Photo[]>;
  for (const [path, mod] of Object.entries(galleryFiles)) {
    const [, , , , folder, file] = path.split('/');
    if ((categories as readonly string[]).includes(folder)) {
      out[folder as Category].push({ src: mod.default, file });
    }
  }
  for (const c of categories) {
    out[c].sort((a, b) => a.file.localeCompare(b.file, undefined, { numeric: true }));
  }
  return out;
}

function siteImage(name: string): ImageMetadata | undefined {
  const hit = Object.entries(siteFiles).find(([p]) =>
    p.split('/').pop()!.toLowerCase().startsWith(name + '.'),
  );
  return hit?.[1].default;
}

/** Hero photo: site/hero.*, otherwise the first gallery photo found. */
export function getHeroImage(): ImageMetadata | undefined {
  const g = getGallery();
  return siteImage('hero') ?? categories.map((c) => g[c][0]?.src).find(Boolean);
}

export const getOwnerImage = () => siteImage('owner');
