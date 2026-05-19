// Nav scroll
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 80);
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile menu
const toggle = document.getElementById('navToggle');
const menu   = document.getElementById('navMenu');
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.classList.toggle('active', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('open');
  toggle.classList.remove('active');
  document.body.style.overflow = '';
}));

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.1 });

const revealSelectors = [
  '.service-card', '.brand-item', '.stat',
  '.intro__text', '.intro__stats',
  '.feature__content', '.feature__media',
  '.gallery__item', '.gallery__header',
  '.contact__info', '.contact__form',
  '.services__header', '.brands__header',
  '.footer__brand', '.footer__col'
];
document.querySelectorAll(revealSelectors.join(',')).forEach((el, i) => {
  el.classList.add('reveal');
  const d = i % 5;
  if (d) el.classList.add(`reveal-d${d}`);
  io.observe(el);
});

// Smooth scroll with nav offset
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.offsetTop - nav.offsetHeight - 16, behavior: 'smooth' });
  });
});

// Contact form
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Request Sent ✓';
  btn.style.background = '#00b4d8';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Send Request';
    btn.style.background = '';
    btn.disabled = false;
    e.target.reset();
  }, 4000);
});
