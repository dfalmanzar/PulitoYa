/* ══════════════ Funcionalidad compartida (navbar + menú móvil) ══════════════ */

// ── Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  if (window.scrollY > 30) {
    nav.classList.add('shadow-md');
  } else {
    nav.classList.remove('shadow-md');
  }
});

// ── Mobile menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const icon = menuBtn.querySelector('.material-symbols-outlined');
    if (icon) {
      icon.textContent = mobileMenu.classList.contains('open') ? 'close' : 'menu';
    }
  });
}

function closeMobile() {
  if (!mobileMenu || !menuBtn) return;
  mobileMenu.classList.remove('open');
  const icon = menuBtn.querySelector('.material-symbols-outlined');
  if (icon) icon.textContent = 'menu';
}
