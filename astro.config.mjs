// @ts-check
import mdx from '@astrojs/mdx';
import worker from '@astropub/worker';
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';

export default defineConfig({
  site: 'https://short.is',
  integrations: [mdx(), worker()],
  markdown: {
    syntaxHighlight: false,
    processor: satteri({
      features: { directive: true },
    }),
  },
  redirects: {
    '/sketches': {
      destination: '/writing/sketch-in-code',
      status: 301,
    },
  },
});
