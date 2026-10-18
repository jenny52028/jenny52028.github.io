import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** 给站内链接加上网站根路径，以后换发布地址也不用改链接 */
export const url = (path: string) => base + path;

/** 所有已发布的文章，从新到旧 */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

const pad = (n: number) => String(n).padStart(2, '0');

/** 2026-10-18 → 2026.10.18 */
export function formatDate(d: Date) {
  return `${d.getUTCFullYear()}.${pad(d.getUTCMonth() + 1)}.${pad(d.getUTCDate())}`;
}

/** 每个标签用了几次，用得多的排前面 */
export function tagCounts(posts: Post[]) {
  const counts = new Map<string, number>();
  for (const p of posts) for (const t of p.data.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
  return [...counts].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'zh'));
}

/** 英文单复数：1 post / 2 posts */
export const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? '' : 's'}`;

export const tagUrl = (tag: string) => url(`/tags/${encodeURIComponent(tag)}/`);
export const postUrl = (post: Post) => url(`/posts/${post.id}/`);
