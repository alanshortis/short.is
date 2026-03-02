import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const cameras = z.enum(['Leica M6', 'Leica M10 Monochrom', 'Leica M10-P', 'Leica M-D', 'Fujifilm GW670ii']);

const lenses = z.enum(['Leica Summicron-M 35mm f/2.0 ASPH', 'Leica Summicron 50mm f/2.0']);

const film = z.enum(['Kodak Portra 400', 'Ilford Delta 3200']);

const photographySchema = z.array(
  z.object({
    name: z.string(),
    location: z.string(),
    camera: cameras,
    lens: lenses.optional(),
    film: film.optional(),
    altText: z.string(),
  })
);

const photography = defineCollection({
  loader: file('src/content/photography.json'),
  schema: () => photographySchema,
});

const posts = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.string(),
      icon: z.enum([
        'ai',
        'website',
        'observer',
        'hopper',
        'ethics',
        'new-york',
        'imposter',
        'internet',
        'share',
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

export const collections = {
  posts,
  reading,
  photography,
};
