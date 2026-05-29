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
    after.style.clipPath = `inset(0 0 0 ${(pct * 100).toFixed(1)}%)`;
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

// ── Testimonials carousel
(function () {
  const reviews = [
    { name: "Cecilia Cárdenas", role: "Apartamento", initials: "CC", color: "bg-blue-100", text: "Los vidrios de los ventanales y barandas quedaron realmente transparentes. Se notó perfectamente al atardecer, que es cuando entra la luz del sol. El robot que ellos tienen es fabuloso." },
    { name: "Luz Angela Sguerra", role: "Cliente", initials: "LA", color: "bg-sky-100", text: "Excelente servicio, profesionales, cumplidos, amables e impecables. Sorprendente cómo han elevado un servicio y lo han profesionalizado cubriendo 360 grados las expectativas del cliente." },
    { name: "Guillaume", role: "Apartamento", initials: "GU", color: "bg-indigo-100", text: "Excelente atención, servicio impecable, equipo de trabajo ordenado y profesional. Dejaron los vidrios de mi apto perfectos. 100% recomendados." },
    { name: "Janice Brieva", role: "Residencial", initials: "JB", color: "bg-blue-100", text: "Excelente producto! Mis ventanas quedaron relucientes." },
    { name: "Piedad Henao", role: "Cliente", initials: "PH", color: "bg-sky-100", text: "El equipo coordinado por Angélica es cumplido, profesional y amable. Los recomiendo completamente." },
    { name: "Belvy de Bermudez", role: "Pérgola de vidrio", initials: "BB", color: "bg-indigo-100", text: "Muy buen servicio, muy profesional. Mi pérgola de vidrio quedó como nueva y el precio me pareció muy accesible." },
    { name: "José Joaquín Ortiz", role: "Cliente", initials: "JO", color: "bg-blue-100", text: "Servicio puntual, amable y de alta calidad. La tecnología que usan realmente produce resultados visibles. Nos veremos nuevamente en 4 meses." },
    { name: "MARIAP REY", role: "Cliente", initials: "MR", color: "bg-sky-100", text: "Vale mucho la pena contratar el servicio con Pulitoya. Cambian totalmente las superficies de vidrio/cristal, renuevan totalmente." },
    { name: "Sonia Celis", role: "Cliente", initials: "SC", color: "bg-indigo-100", text: "Excelente trabajo, pulidos, responsables, seguros. Gracias el mejor servicio. Quedamos felices 👏🏻👏🏻👏🏻" },
    { name: "Alexandra Cifuentes", role: "Ventanas de altura", initials: "AC", color: "bg-blue-100", text: "Me ayudaron a limpiar mis ventanas que son muy altas con equipos especiales y sin necesidad de andamios. Servicio bastante profesional y de calidad." },
    { name: "Gina Vaca", role: "Casa", initials: "GV", color: "bg-sky-100", text: "Muy buen servicio, las ventanas y pérgolas de mi casa quedaron muy bien. 100% recomendados." },
    { name: "Anyi Gonzalez", role: "Conjunto residencial", initials: "AG", color: "bg-indigo-100", text: "El servicio es muy completo y profesional. Las ventanas del conjunto quedaron como nuevas. Muy recomendados, muchas gracias." },
    { name: "Alejandra Moreno", role: "Cliente", initials: "AM", color: "bg-blue-100", text: "Felicitaciones. Fue un gran trabajo y linda experiencia!!! Recomendadísimos 👍🏻" },
    { name: "Ana María Enciso", role: "Cliente", initials: "AE", color: "bg-sky-100", text: "Excelente servicio, muy profesional y puntuales. Quedé muy satisfecha, súper recomendado." },
    { name: "Andrés Ortiz", role: "Cliente", initials: "AO", color: "bg-indigo-100", text: "Un trabajo muy bueno y profesional. Cumplidos." },
    { name: "Amelia Pajoy Galvis", role: "Cliente", initials: "AP", color: "bg-blue-100", text: "Excelente servicio, todo quedó impecable." },
  ];

  const PER_PAGE = 3;
  let current = 0;
  const track = document.getElementById('testimonials-track');
  const dotsContainer = document.getElementById('testimonials-dots');
  const totalPages = Math.ceil(reviews.length / PER_PAGE);

  if (!track) return;

  function renderCards(page) {
    const start = page * PER_PAGE;
    const slice = reviews.slice(start, start + PER_PAGE);
    track.innerHTML = slice.map(r => `
      <div class="bg-white rounded-3xl p-8 editorial-shadow border-t-4 border-primary/20 border border-outline-variant/20 flex flex-col justify-between">
        <div>
          <div class="flex gap-1 mb-5" style="color:#F59E0B;font-size:1.2rem;">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
          <p class="text-on-surface-variant italic leading-relaxed mb-8">"${r.text}"</p>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-11 h-11 rounded-full ${r.color} flex items-center justify-center font-heading font-bold text-sm text-primary">${r.initials}</div>
          <div>
            <div class="font-heading font-bold text-on-surface">${r.name}</div>
            <div class="text-xs text-on-surface-variant uppercase tracking-widest">${r.role}</div>
          </div>
        </div>
      </div>
    `).join('');
  }

  function renderDots(page) {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = Array.from({ length: totalPages }, (_, i) => `
      <button class="w-2 h-2 rounded-full transition-all duration-300 ${i === page ? 'bg-primary w-6' : 'bg-outline-variant'}" data-page="${i}" aria-label="Página ${i+1}"></button>
    `).join('');
    dotsContainer.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => goTo(parseInt(btn.dataset.page)));
    });
  }

  function goTo(page) {
    track.classList.add('fade-out');
    setTimeout(() => {
      current = (page + totalPages) % totalPages;
      renderCards(current);
      renderDots(current);
      track.classList.remove('fade-out');
    }, 300);
  }

  // Initial render
  renderCards(current);
  renderDots(current);
  track.classList.add('fade-in');

  // Navigation buttons
  document.getElementById('prev-testimonial')?.addEventListener('click', () => goTo(current - 1));
  document.getElementById('next-testimonial')?.addEventListener('click', () => goTo(current + 1));

  // Auto advance every 6s
  setInterval(() => goTo(current + 1), 6000);
})();
