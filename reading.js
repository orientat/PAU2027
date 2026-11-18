const root = document.documentElement;
const settings = [['plain-font','plain-font'],['large-text','large-text'],['calm-view','calm-view']];
for (const [id, cls] of settings) {
 const button = document.getElementById(id);
 let enabled = false;
 try { enabled = localStorage.getItem('mariam-pau-' + id) === 'true'; } catch {}
 root.classList.toggle(cls, enabled); button.setAttribute('aria-pressed', String(enabled));
 button.addEventListener('click', () => {
  const next = !root.classList.contains(cls);
  root.classList.toggle(cls, next); button.setAttribute('aria-pressed', String(next));
  try { localStorage.setItem('mariam-pau-' + id, String(next)); } catch {}
 });
}
