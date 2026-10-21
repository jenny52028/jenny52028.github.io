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
};

// 青心桌面宠的下载。上传好文件后，把百度网盘链接、提取码和 GitHub 链接填进对应的引号里；空着的按钮会显示「即将上线」
export const QINGXIN = {
  version: '0.3.0',
  updated: '2026-10-21',
  // 桌面真实截图（青叶自己截），放在 public/works/qingxin 里，比如 '/works/qingxin/desktop.webp'；空着就不显示
  screenshot: '/works/qingxin/desktop.webp',
  downloads: [
    {
      os: 'windows',
      zh: 'Windows 安装版',
      en: 'Windows installer',
      noteZh: '推荐。双击安装，桌面会有图标，可以在系统设置里卸载',
      noteEn: 'Recommended. Double-click to install; uninstall from Settings',
      size: '116 MB',
      file: 'QingXin-0.3.0-Windows-Setup.exe',
      sha256: '4D77D69089C840679D1250FF33D4BB2D6A421E1DC3D9696B001EA947F0DB5B66',
      baidu: 'https://pan.baidu.com/s/1NgceJwp3s8Mvhf4NFm652g?pwd=rexn',
      baiduCode: 'rexn',
      github: 'https://github.com/jenny52028/jenny52028.github.io/releases/download/qingxin-v0.3.0/QingXin-0.3.0-Windows-Setup.exe',
    },
    {
      os: 'windows',
      zh: 'Windows 免安装版',
      en: 'Windows portable',
      noteZh: '解压后双击 QingXin.exe 就能用，不想要了直接删掉文件夹',
      noteEn: 'Unzip and double-click QingXin.exe; delete the folder to remove',
      size: '161 MB',
      file: 'QingXin-0.3.0-Windows-Portable.zip',
      sha256: '2505F8EEEDA6979FCB2D3781D15081E62EC7C6DA7EFE757BC7A7D26A7EB40FDF',
      baidu: 'https://pan.baidu.com/s/1N6t_EYch5bVAWy7CEUBFGw?pwd=gngr',
      baiduCode: 'gngr',
      github: 'https://github.com/jenny52028/jenny52028.github.io/releases/download/qingxin-v0.3.0/QingXin-0.3.0-Windows-Portable.zip',
    },
    {
      os: 'mac',
      zh: '苹果电脑版（测试版）',
      en: 'macOS (beta)',
      noteZh: '还没在真的苹果电脑上测过，遇到问题欢迎告诉我',
      noteEn: "Not yet tested on a real Mac. Let me know if anything goes wrong",
      size: '236 MB',
      file: 'QingXin-0.3.0-macOS.dmg',
      sha256: '583B0D7ED5FEC551CF971EDF1026E7802F7161848CE26BD0B6795E962A07A5C6',
      baidu: 'https://pan.baidu.com/s/1_JgT3jreML-3vqF3bHA28A?pwd=rdrg',
      baiduCode: 'rdrg',
      github: 'https://github.com/jenny52028/jenny52028.github.io/releases/download/qingxin-v0.3.0/QingXin-0.3.0-macOS.dmg',
    },
  ],
};

// 文章分类。写文章时 category 只能填下面这几个之一。
export const CATEGORIES = ['学习笔记', '项目复盘', '随笔'] as const;

// 资源分类。资源清单里 category 只能填下面这几个之一。
export const RESOURCE_CATEGORIES = ['我的作品', 'AI 工具', '开发工具', '学习资料'] as const;

// 分类的英文名
export const EN: Record<string, string> = {
  全部: 'All',
  学习笔记: 'Notes',
  项目复盘: 'Retrospectives',
  随笔: 'Essays',
  我的作品: 'My work',
  'AI 工具': 'AI tools',
  开发工具: 'Dev tools',
  学习资料: 'Learning',
};
