/* theme-init.js — MDOThree shared template (shared/mdothree/theme-init.js), mdo3d.com copy: same logic; the storage key is
 * the one the mdo3d.com home page already uses ("mdo3d-theme") and :root.light is kept in sync, so one choice holds site-wide.
 * Load it in <head> as a plain, non-deferred external script BEFORE the stylesheets:
 *   <script src="/js/theme-init.js"></script>
 * It sets <html data-theme="light|dark"> before first paint, so there is no flash of the wrong theme.
 * The CSP forbids inline scripts, which is why this is a file and not an inline snippet.
 * Order: the visitor's saved choice (localStorage "mdo3d-theme") > the OS preference (prefers-color-scheme).
 * The toggle itself lives in site-chrome.js.
 */
(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = window.localStorage.getItem('mdo3d-theme'); } catch (e) { saved = null; }
  var theme = saved === 'light' || saved === 'dark' ? saved : null;
  if (!theme) {
    var dark = false;
    try { dark = !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches); } catch (e) { dark = false; }
    theme = dark ? 'dark' : 'light';
    root.setAttribute('data-theme-source', 'os');
  }
  root.setAttribute('data-theme', theme);
  root.classList.toggle('light', theme === 'light'); // mdo3d.com home page styles key off :root.light
})();
