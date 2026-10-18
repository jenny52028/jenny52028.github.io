import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORIES } from './site.config';

// 读取「文章」文件夹里的所有 .md 文件；文件名以 _ 开头的（比如模板）不会显示
const posts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './文章' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(CATEGORIES),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
