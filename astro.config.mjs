import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // The modern 2026 way

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
