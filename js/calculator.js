/* HARTION STUDIO - Interactive Scope & Quote Calculator */

document.addEventListener('DOMContentLoaded', () => {
  const serviceOptions = document.querySelectorAll('.calc-service-btn');
  const scopeBtns = document.querySelectorAll('.calc-scope-btn');
  const timelineBtns = document.querySelectorAll('.calc-time-btn');

  const selectedServiceEl = document.getElementById('calc-service-val');
  const selectedScopeEl = document.getElementById('calc-scope-val');
  const selectedTimeEl = document.getElementById('calc-time-val');
  const totalPriceEl = document.getElementById('calc-price-val');

  let state = {
    service: '3D Design & CGI',
    servicePrice: 1200,
    scope: 'Medium Project Scope',
    scopeMult: 1.0,
    timeline: 'Standard (2-3 Weeks)',
    timeMult: 1.0
  };

  function updateCalculator() {
    if (!totalPriceEl) return;

    const base = state.servicePrice * state.scopeMult * state.timeMult;
    const finalPrice = Math.round(base);

    if (selectedServiceEl) selectedServiceEl.textContent = state.service;
    if (selectedScopeEl) selectedScopeEl.textContent = state.scope;
    if (selectedTimeEl) selectedTimeEl.textContent = state.timeline;

    // Animate price change
    totalPriceEl.textContent = `$${finalPrice.toLocaleString()}`;
  }

  serviceOptions.forEach(btn => {
    btn.addEventListener('click', () => {
      serviceOptions.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      state.service = btn.dataset.service;
      state.servicePrice = parseInt(btn.dataset.price, 10);
      updateCalculator();
    });
  });

  scopeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      scopeBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      state.scope = btn.dataset.scope;
      state.scopeMult = parseFloat(btn.dataset.mult);
      updateCalculator();
    });
  });

  timelineBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      timelineBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      state.timeline = btn.dataset.time;
      state.timeMult = parseFloat(btn.dataset.mult);
      updateCalculator();
    });
  });

  updateCalculator();
});
