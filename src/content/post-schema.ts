import { z } from 'astro/zod';

export const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.string(),
  icon: z.enum([
    'ai',
    'css-env',
    'dark-mode',
    'ethics',
    'favicon',
    'figma',
    'holga',
    'hopper',
    'imposter',
    'internet',
    'new-york',
    'observer',
    'responsive',
    'scanning',
    'share',
    'sprites',
    'website',
    'z-index',
  ]),
  showAgeWarning: z.boolean().optional(),
  published: z.boolean().optional(),
});

export type PostData = z.infer<typeof postSchema>;
