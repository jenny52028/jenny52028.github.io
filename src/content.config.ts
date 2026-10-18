import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { CATEGORIES, RESOURCE_CATEGORIES } from './site.config';

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

// 资源中心：读取「资源/资源清单.yaml」
const resources = defineCollection({
  loader: file('./资源/资源清单.yaml'),
  schema: z.object({
    name: z.string(),
    url: z.string().url(),
    category: z.enum(RESOURCE_CATEGORIES),
    zh: z.string(),
    en: z.string().default(''),
  }),
});

export const collections = { posts, resources };
