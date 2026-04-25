// @ts-check
import mdx from '@astrojs/mdx';
import worker from '@astropub/worker';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://short.is',
  integrations: [mdx(), worker()],
  markdown: {
    syntaxHighlight: false,
  },
  redirects: {
    '/writing/ai-ambivalence/': {
      destination: '/writing/ai-inevitability/',
      status: 301,
    },
  },
});
