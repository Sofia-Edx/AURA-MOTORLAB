// ── NAV SCROLL ──────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ── MOBILE MENU ─────────────────────────────────────
const toggle = document.getElementById('navToggle');
const menu   = document.getElementById('navMenu');
toggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});
menu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => menu.classList.remove('open'));
});

// ── SCROLL REVEAL ────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── CONTACT FORM ─────────────────────────────────────
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    btn.textContent = 'SOLICITUD ENVIADA ✓';
    btn.style.background = '#1a8a6e';
    setTimeout(() => {
      btn.textContent = 'ENVIAR SOLICITUD';
      btn.style.background = '';
      form.reset();
    }, 3500);
  });
}

// ── SMOOTH ANCHOR SCROLL ─────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  });
});
