import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  return rss({
    title: 'Alan Shortis',
    description: 'Recent writing from short.is',
    site: context.site || '',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: '<language>en-GB</language>',
  });
}
