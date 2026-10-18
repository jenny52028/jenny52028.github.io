// 网站的基本信息都在这里，想改名字、签名，改这个文件就行。

export const SITE = {
  name: '青叶 · 小记',
  author: '青叶',
  signature: '正在和 AI 一起学做东西的青叶',
  heroTitle: '小记',
  heroText: '把学习和做东西的过程，记成以后可以回看的笔记。',
};

// 文章分类。写文章时 category 只能填下面这几个之一。
export const CATEGORIES = ['学习笔记', '项目复盘', '随笔'] as const;
