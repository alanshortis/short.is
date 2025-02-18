import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import type { APIContext } from 'astro';

const PATH = './**/*.md';

export async function GET(context: APIContext) {
  return rss({
    title: 'Alan Shortis',
    description: 'Recent writing from short.is',
    site: context.site || '',
    items: await pagesGlobToRssItems(import.meta.glob(PATH)),
    customData: '<language>en-GB</language>',
  });
}
