(function () {
  const supported = ['en', 'ja', 'vi'];
  const url = new URL(window.location.href);
  let saved;
  try { saved = localStorage.getItem('portfolio-language'); } catch (_) {}
  const requested = url.searchParams.get('lang');
  const language = supported.includes(requested) ? requested : supported.includes(saved) ? saved : 'en';
  const column = { ja: 1, vi: 2 }[language];
  const dictionary = new Map(window.profileTranslations.map(row => [row[0], row[column] || row[0]]));
  const translate = text => dictionary.get(text) || text;
  const translateData = value => {
    if (typeof value === 'string') return translate(value);
    if (Array.isArray(value)) return value.map(translateData);
    if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, translateData(item)]));
    return value;
  };
  // Keep filter identifiers stable; only their visible labels are localized.
  window.filterLabels = Object.fromEntries(window.profileData.projectFilters.map(label => [label, translate(label)]));
  const original = window.profileData;
  window.profileData = translateData(original);
  window.profileData.projectFilters = original.projectFilters;
  window.profileData.projects.forEach((project, index) => { project.filterTags = original.projects[index].filterTags; });
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (['SCRIPT', 'STYLE'].includes(node.parentElement.tagName)) continue;
    const key = node.textContent.trim();
    if (dictionary.has(key)) node.textContent = node.textContent.replace(key, translate(key));
  }
  document.querySelectorAll('[aria-label], [alt]').forEach(element => {
    ['aria-label', 'alt'].forEach(attribute => {
      if (element.hasAttribute(attribute)) element.setAttribute(attribute, translate(element.getAttribute(attribute)));
    });
  });
  document.documentElement.lang = language;
  document.title = translate(document.title);
  const description = document.querySelector('meta[name="description"]');
  description.content = translate(description.content);
  document.querySelectorAll('[data-language]').forEach(link => {
    const destination = new URL(url);
    destination.searchParams.set('lang', link.dataset.language);
    link.href = destination.href;
    if (link.dataset.language === language) link.setAttribute('aria-current', 'true');
    link.addEventListener('click', () => {
      try { localStorage.setItem('portfolio-language', link.dataset.language); } catch (_) {}
    });
  });
  try { localStorage.setItem('portfolio-language', language); } catch (_) {}
})();
