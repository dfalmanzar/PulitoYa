/* ══════════════ Lógica específica de servicios.html (tabs) ══════════════ */

const tabs = Array.from(document.querySelectorAll('[data-tab]'));
const panels = {
  casas: document.getElementById('panel-casas'),
  apartamentos: document.getElementById('panel-apartamentos'),
  industrias: document.getElementById('panel-industrias'),
  comercio: document.getElementById('panel-comercio'),
};

function activateTab(key, pushHash = true) {
  if (!panels[key]) return;

  tabs.forEach((btn) => {
    const selected = btn.getAttribute('data-tab') === key;
    btn.setAttribute('aria-selected', selected ? 'true' : 'false');
  });

  Object.entries(panels).forEach(([k, el]) => {
    if (!el) return;
    el.classList.toggle('hidden', k !== key);
  });

  if (pushHash) history.replaceState(null, '', '#' + key);
}

tabs.forEach((btn) => {
  btn.addEventListener('click', () => {
    activateTab(btn.getAttribute('data-tab'));
  });
});

// Default tab via hash
const hash = (location.hash || '').replace('#', '').trim();
if (hash && panels[hash]) activateTab(hash, false);
else activateTab('casas', false);
