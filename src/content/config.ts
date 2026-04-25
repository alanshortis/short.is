import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';
import { Camera, Lens, Film, Ratio, photographyData } from './photography';

const posts = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.string(),
      icon: z.enum([
        'ai',
        'css-env',
        'dark-mode',
        'favicon',
        'figma',
        'website',
        'observer',
        'hopper',
        'ethics',
        'new-york',
        'imposter',
        'internet',
        'responsive',
        'scanning',
        'share',
        'z-index',
        'sprites',
      ]),
      showAgeWarning: z.boolean().optional(),
      published: z.boolean().optional(),
    }),
});

const reading = defineCollection({
  loader: file('src/content/reading.json'),
  schema: () =>
    z.object({
      slug: z.string().url(),
      title: z.string(),
      author: z.string(),
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
          camera: z.nativeEnum(Camera),
          lens: z.nativeEnum(Lens).optional(),
          film: z.nativeEnum(Film).optional(),
          altText: z.string(),
          ratio: z.nativeEnum(Ratio),
        })
      ),
    }),
});

export const collections = {
  posts,
  reading,
  photography,
};
