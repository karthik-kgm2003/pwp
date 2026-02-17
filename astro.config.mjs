import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Your site and base config here
  vite: {
    plugins: [tailwindcss()],
  },
});
