import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://karthik-kgm2003.github.io',
  base: '/pwp',
  vite: {
    plugins: [tailwindcss()],
  },
});
