// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import astroIcon from "astro-icon"

// https://astro.build/config
export default defineConfig({
  vite: { plugins: [tailwindcss()], },
  integrations: [astroIcon()],
  site: 'https://alejandrolaguna.dev',
  base: "/",
  output: "static",
  server: {
    host: '0.0.0.0',
  },
});
