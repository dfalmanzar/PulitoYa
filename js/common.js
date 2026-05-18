/* ══════════════ Funcionalidad compartida (navbar + menú móvil + WhatsApp) ══════════════ */

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

// ── WhatsApp floating button (injected so it works on both pages)
(function injectWhatsApp() {
  const btn = document.createElement('a');
  btn.id = 'whatsapp-btn';
  btn.href = 'https://wa.me/message/ONDUDQLVQWA2K1';
  btn.target = '_blank';
  btn.rel = 'noopener noreferrer';
  btn.setAttribute('aria-label', 'Chatea con nosotros por WhatsApp');
  btn.innerHTML = `
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2C8.268 2 2 8.268 2 16c0 2.463.664 4.77 1.822 6.762L2 30l7.456-1.793A13.938 13.938 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="#fff"/>
      <path d="M16 4.2c-6.507 0-11.8 5.293-11.8 11.8 0 2.21.615 4.277 1.683 6.038L4.6 27.4l5.535-1.453A11.753 11.753 0 0016 27.8c6.507 0 11.8-5.293 11.8-11.8S22.507 4.2 16 4.2zm5.89 16.677c-.247.693-1.455 1.325-1.99 1.37-.536.046-1.041.24-3.512-.733-2.979-1.168-4.893-4.226-5.04-4.42-.148-.193-1.2-1.6-1.2-3.052 0-1.452.76-2.167 1.03-2.462.27-.295.587-.369.783-.369.196 0 .392.002.564.01.18.01.423-.068.662.506.247.593.839 2.045.912 2.194.074.148.123.32.025.515-.099.196-.148.319-.295.49-.148.172-.311.383-.444.515-.148.148-.302.308-.13.604.172.295.764 1.26 1.64 2.04 1.127 1.004 2.077 1.315 2.372 1.463.296.148.468.123.64-.074.172-.197.738-.86 1.935-.86.041 0 .082.002.12.006.369.025 1.164.148 1.75.713.443.422.713 1.004.713 1.563 0 .246-.123.566-.37 1.261z" fill="#25D366"/>
    </svg>
    <span class="wsp-label">Chatea con nosotros</span>
  `;
  document.body.appendChild(btn);
})();
