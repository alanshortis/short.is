import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import readingItems from './content/reading.json';
import { postSchema } from './content/post-schema';
import { Camera, Lens, Film, Ratio, photographyData } from './content/photography';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/posts' }),
  schema: () => postSchema,
});

const reading = defineCollection({
  loader: async () => [{ id: 'reading', items: readingItems }],
  schema: () =>
    z.object({
      items: z.array(
        z.object({
          slug: z.url(),
          title: z.string(),
          author: z.string(),
        })
      ),
    }),
});

const photography = defineCollection({
  loader: async () => photographyData,
  schema: () =>
    z.object({
      photos: z.array(
        z.object({
          name: z.string(),
          location: z.string(),
          camera: z.enum(Camera),
          lens: z.enum(Lens).optional(),
          film: z.enum(Film).optional(),
          altText: z.string(),
          ratio: z.enum(Ratio),
        })
      ),
    }),
});

export const collections = {
  posts,
  reading,
  photography,
};
