import type { APIContext } from 'astro';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const blog = await getCollection('posts');
  return rss({
    title: 'Alan Shortis',
    description: 'Recent writing from short.is',
    site: context.site || '',
    items: blog
      .map(post => ({
        title: post.data.title,
        pubDate: new Date(post.data.pubDate),
        link: `/writing/${post.slug}/`,
      }))
      .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime()),
  });
}
