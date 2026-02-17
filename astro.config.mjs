import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://karthikmenon.info',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
