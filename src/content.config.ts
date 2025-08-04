import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.date(),
    readTime: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    description: z.string(),
    lang: z.enum(['en', 'th']),
  }),
});

export const collections = { blog };