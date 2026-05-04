// Tokyo Strata · i18n runtime
// Reads window.I18N_STRINGS, applies language to data-i18n[/data-i18n-html] elements
// and exposes window.I18N { get, currentLang, applyLang, onChange }.
(function () {
  const SUPPORTED = ['ja', 'zh', 'en'];
  const FALLBACK = 'ja';
  const STORAGE_KEY = 'tokyo-strata-lang';

  let currentLang = FALLBACK;

  function detect() {
    // Default is always JA. Browser locale is intentionally ignored — Jada's call.
    // Stored choice persists across sessions once the user picks via the menu.
    const stored = (() => {
      try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
    })();
    if (stored && SUPPORTED.includes(stored)) return stored;
    return FALLBACK;
  }

  function get(key, lang) {
    const dict = window.I18N_STRINGS;
    if (!dict || !dict[key]) return null;
    const entry = dict[key];
    return entry[lang || currentLang] ?? entry[FALLBACK] ?? null;
  }

  function applyLang(lang) {
    if (!SUPPORTED.includes(lang)) lang = FALLBACK;
    currentLang = lang;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;

    // Text content
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const val = get(el.getAttribute('data-i18n'), lang);
      if (val == null) return;
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    // Attribute translations: data-i18n-attr="title:keyA,placeholder:keyB"
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      const spec = el.getAttribute('data-i18n-attr');
      for (const pair of spec.split(',')) {
        const [attr, key] = pair.split(':').map((s) => s.trim());
        const val = get(key, lang);
        if (val != null) el.setAttribute(attr, val);
      }
    });

    // <title>
    const titleKey = document.documentElement.getAttribute('data-i18n-title');
    if (titleKey) {
      const val = get(titleKey, lang);
      if (val) document.title = val;
    }

    // og:locale
    const ogLocale = { ja: 'ja_JP', zh: 'zh_CN', en: 'en_US' }[lang];
    document.querySelectorAll('meta[property="og:locale"]').forEach((m) => m.setAttribute('content', ogLocale));

    // Switcher state
    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    document.dispatchEvent(new CustomEvent('lang:changed', { detail: { lang } }));
  }

  function onChange(fn) {
    document.addEventListener('lang:changed', (e) => fn(e.detail.lang));
  }

  function setMenuOpen(open) {
    const menu = document.querySelector('#lang-menu');
    const toggle = document.querySelector('#lang-toggle');
    if (!menu || !toggle) return;
    if (open) {
      menu.removeAttribute('hidden');
      toggle.setAttribute('aria-expanded', 'true');
    } else {
      menu.setAttribute('hidden', '');
      toggle.setAttribute('aria-expanded', 'false');
    }
  }

  function init() {
    applyLang(detect());

    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      btn.addEventListener('click', () => {
        applyLang(btn.getAttribute('data-lang-btn'));
        setMenuOpen(false);
      });
    });

    const toggle = document.querySelector('#lang-toggle');
    if (toggle) {
      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        setMenuOpen(!expanded);
      });
      // Click outside / Escape closes
      document.addEventListener('click', (e) => {
        if (!e.target.closest('#lang-switch')) setMenuOpen(false);
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') setMenuOpen(false);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.I18N = { get, currentLang: () => currentLang, applyLang, onChange };
})();
