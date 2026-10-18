// 网站的基本信息都在这里，想改名字、签名，改这个文件就行。
// 带 En 的是英文版，切换到 EN 时显示。

export const SITE = {
  name: '青叶 · 小记',
  author: '青叶',
  authorEn: 'Qingye',
  signature: '正在和 AI 一起学做东西的青叶',
  signatureEn: 'Learning to build things with AI',
  heroTitle: '小记',
  heroTitleEn: 'Notes',
  heroText: '把学习和做东西的过程，记成以后可以回看的笔记。',
  heroTextEn: 'Notes on learning and making things, kept so I can look back.',
  douyin: 'https://v.douyin.com/mZNl1iqkl-0/',
};

// 首页（个人介绍页）
export const HOME = {
  role: 'AI 自媒体',
  roleEn: 'AI creator',
  intro: '正在和 AI 一起学做东西，把过程记成可以回看的笔记。',
  introEn: "Learning to build things with AI, and keeping notes I can look back on.",
  // 卡通形象图，放在 public/images 里
  avatar: '/images/qingye.webp',
  // 3D 模型文件，放在 public/models 里。做好后填上，比如 '/models/qingye.glb'；空着就显示卡通图
  model: '',
};

// 文章分类。写文章时 category 只能填下面这几个之一。
export const CATEGORIES = ['学习笔记', '项目复盘', '随笔'] as const;

// 资源分类。资源清单里 category 只能填下面这几个之一。
export const RESOURCE_CATEGORIES = ['AI 工具', '开发工具', '学习资料'] as const;

// 分类的英文名
export const EN: Record<string, string> = {
  全部: 'All',
  学习笔记: 'Notes',
  项目复盘: 'Retrospectives',
  随笔: 'Essays',
  'AI 工具': 'AI tools',
  开发工具: 'Dev tools',
  学习资料: 'Learning',
};
