// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://short.is',
  output: 'server',
  adapter: cloudflare(),
  integrations: [mdx(), sitemap()],
  markdown: {
    syntaxHighlight: false,
  },
});
