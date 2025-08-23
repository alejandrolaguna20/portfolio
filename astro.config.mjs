// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import astroIcon from "astro-icon"

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  vite: { plugins: [tailwindcss()], },
  integrations: [astroIcon()],
  server: {
    host: '0.0.0.0'
  },
  adapter: node({
    mode: "standalone",
  }),
});
