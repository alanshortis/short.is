import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const posts = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.string(),
      showAgeWarning: z.boolean().optional(),
    }),
});

const reading = defineCollection({
  loader: file('src/content/reading.json'),
  schema: () =>
    z.object({
      url: z.string().url(),
      title: z.string(),
      author: z.string(),
    }),
});

export const collections = {
  posts,
  reading,
};
