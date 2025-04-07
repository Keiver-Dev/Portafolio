import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://keiver-dev.github.io',
  base: '/Portafolio/', // Asegúrate de que coincida con el nombre de tu repositorio
  integrations: [react(), tailwind()],
});