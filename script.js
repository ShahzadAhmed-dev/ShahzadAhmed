// ── HAMBURGER MENU ──
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });
reveals.forEach(r => revealObserver.observe(r));

// ── ANIMATED COUNTERS ──
const counters = document.querySelectorAll('.stat-num[data-target]');
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = +el.dataset.target;
    const suffix = target === 100 ? '%' : '+';
    let count = 0;
    const step = Math.ceil(target / 50);
    const interval = setInterval(() => {
      count = Math.min(count + step, target);
      el.textContent = count + suffix;
      if (count >= target) clearInterval(interval);
    }, 30);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(c => counterObserver.observe(c));

// ── SKILL BAR ANIMATION ──
const bars = document.querySelectorAll('.skill-bar-fill');
const barObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.width = e.target.dataset.width + '%';
      barObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
bars.forEach(b => barObserver.observe(b));

// ── NAVBAR SCROLL SHADOW ──
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.boxShadow =
    window.scrollY > 20 ? '0 4px 24px rgba(0,0,0,0.4)' : 'none';
});
