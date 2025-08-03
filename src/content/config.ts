import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    author: z.string(),
    date: z.date(),
    readTime: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    description: z.string(),
    lang: z.enum(['th', 'en']),
  }),
});

export const collections = {
  blog,
};