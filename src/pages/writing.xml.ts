import type { APIContext } from 'astro';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { PostData } from '../content/post-schema';

type WritingFeedItem = {
  title: string;
  pubDate: string;
  link: string;
};

type PostEntry = {
  id: string;
  data: PostData;
};

export async function GET(context: APIContext) {
  const blog = await getCollection('posts');
  const publishedPosts = blog.filter((post: PostEntry) => post.data.published ?? true);
  const items: WritingFeedItem[] = publishedPosts
    .map((post: PostEntry) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      link: `/writing/${post.id}/`,
    }))
    .sort((a: WritingFeedItem, b: WritingFeedItem) =>
      a.pubDate === b.pubDate ? 0 : a.pubDate < b.pubDate ? 1 : -1,
    );

  return rss({
    title: 'Alan Shortis',
    description: 'Recent writing from short.is',
    site: context.site || '',
    items,
  });
}
