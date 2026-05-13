/* ══════════════ Lógica específica de index.html ══════════════ */

// ── Before/After slider
(function () {
  const slider = document.getElementById('ba-slider');
  const after = document.getElementById('ba-after');
  const handle = document.getElementById('ba-handle');
  if (!slider) return;

  let dragging = false;

  function setPos(clientX) {
    const rect = slider.getBoundingClientRect();
    let pct = (clientX - rect.left) / rect.width;
    pct = Math.min(1, Math.max(0, pct));
    const pcStr = (pct * 100).toFixed(1) + '%';
    handle.style.left = pcStr;
    after.style.clipPath = `inset(0 ${(100 - pct * 100).toFixed(1)}% 0 0)`;
  }

  handle.addEventListener('mousedown', (e) => { dragging = true; e.preventDefault(); });
  slider.addEventListener('mousedown', (e) => { dragging = true; setPos(e.clientX); });
  window.addEventListener('mousemove', (e) => { if (dragging) setPos(e.clientX); });
  window.addEventListener('mouseup', () => { dragging = false; });

  handle.addEventListener('touchstart', (e) => { dragging = true; e.preventDefault(); }, { passive: false });
  slider.addEventListener('touchstart', (e) => { dragging = true; setPos(e.touches[0].clientX); }, { passive: true });
  window.addEventListener('touchmove', (e) => { if (dragging) setPos(e.touches[0].clientX); }, { passive: true });
  window.addEventListener('touchend', () => { dragging = false; });
})();

// ── Contact form
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  const text = document.getElementById('btn-text');
  const success = document.getElementById('form-success');
  btn.disabled = true;
  text.textContent = 'Enviando...';
  setTimeout(() => {
    btn.disabled = false;
    text.textContent = 'Enviar Solicitud';
    success.classList.remove('hidden');
    e.target.reset();
    setTimeout(() => success.classList.add('hidden'), 5000);
  }, 1400);
}
