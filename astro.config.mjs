// @ts-check
import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://short.is',
  integrations: [mdx()],
  markdown: {
    syntaxHighlight: false,
  },
});
