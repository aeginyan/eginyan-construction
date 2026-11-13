// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // TODO: set to the real domain once it's connected, e.g. 'https://example.com'
  // site: 'https://example.com',

  // Normally '/'. The GitHub Pages preview sets BASE_PATH=/eginyan-construction
  // because it serves the site from a subfolder.
  base: process.env.BASE_PATH || '/',
});
