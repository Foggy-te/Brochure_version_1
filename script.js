document.addEventListener('DOMContentLoaded', () => {
  const revealEls = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));

  const btn = document.getElementById('mockConsultBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      const original = btn.innerHTML;
      btn.innerHTML = '✓ Запрос отправлен';
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = original;
        btn.disabled = false;
      }, 1800);
      alert('📬 Запрос на персональный расчёт налоговой экономии отправлен (демо-режим брошюры).\nРекомендуем обратиться в Корпорацию развития Иркутской области.');
    });
  }
});
