import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      pubDate: z.string(),
      description: z.string().optional(),
      featured: z.boolean().optional(),
      showAgeWarning: z.boolean().optional(),
    }),
});

// The `posts` key matches the folder name in `src/content/posts`
export const collections = {
  posts,
};
