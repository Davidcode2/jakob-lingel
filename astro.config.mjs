// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon(
    { 
      include: 
      {
        lucide: [
          "book-lock",
          "chart-no-axes-gantt",
          "flower",
          "moon-star",
          "pencil-line",
          "route",
          "sparkles",
          "user-round",
          "view",
          "move-up-right",
        ],
        "simple-icons": [
          "angular",
          "astro",
          "dotnet",
          "eleventy",
          "github",
          "kubernetes",
          "linkedin",
          "nextdotjs",
          "strapi",
          "terraform",
        ],
      },
    }
  )]
});
