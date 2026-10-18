// 列表的「分类按钮 + 搜索框」筛选，博客首页和资源中心共用

type Bilingual = { zh: string; en: string };

const bilingual = (m: Bilingual) => `<span class="i18n-zh">${m.zh}</span><span class="i18n-en" lang="en">${m.en}</span>`;

export function setupFilter(opts: {
  itemSelector: string;
  noResult: Bilingual;
  emptyCategory: Bilingual;
}) {
  const buttons = [...document.querySelectorAll<HTMLButtonElement>('[data-filter]')];
  const input = document.getElementById('search') as HTMLInputElement | null;
  const items = [...document.querySelectorAll<HTMLElement>(opts.itemSelector)];
  const empty = document.getElementById('empty') as HTMLElement | null;
  if (!input || !empty) return;
  let category = '全部';

  function apply() {
    const words = input!.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    let shown = 0;
    for (const item of items) {
      const okCategory = category === '全部' || item.dataset.category === category;
      const okSearch = words.every((w) => item.dataset.search!.includes(w));
      item.hidden = !(okCategory && okSearch);
      if (!item.hidden) shown++;
    }
    if (items.length === 0) return;
    empty!.hidden = shown > 0;
    empty!.innerHTML = bilingual(words.length > 0 ? opts.noResult : opts.emptyCategory);
  }

  for (const btn of buttons) {
    btn.addEventListener('click', () => {
      category = btn.dataset.filter!;
      buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      apply();
    });
  }
  input.addEventListener('input', apply);
}
