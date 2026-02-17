import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Replace with your actual GitHub username
  site: 'https://karthikmenon.github.io', 
  // If your repo is karthikmenon.github.io, use '/'. 
  // If your repo is named 'portfolio', use '/portfolio/'
  base: '/pwp/', 
  integrations: [tailwind()],
});