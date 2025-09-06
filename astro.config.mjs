// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import astroIcon from "astro-icon"
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  vite: { plugins: [tailwindcss()], },
  integrations: [
    astroIcon(),
  ],
  site: 'https://alejandrolaguna.dev',
  base: "/",
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: "vesper",
    }
  },
  output: "static",
  server: {
    host: '0.0.0.0',
  },
});
