/* =========================================
   MAIRI — Soham Katlariwala Portfolio
   main.js
   ========================================= */

/* LOADER */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hidden');
    // trigger AOS for hero elements
    triggerAOS();
  }, 1300);
});

/* NAVBAR scroll shrink */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

/* HAMBURGER MENU */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMobile() {
  mobileMenu.classList.remove('open');
}

/* EXPERIENCE TABS */
function showExp(idx) {
  document.querySelectorAll('.exp-tab').forEach((tab, i) => {
    tab.classList.toggle('active', i === idx);
  });
  document.querySelectorAll('.exp-panel').forEach((panel, i) => {
    panel.classList.toggle('active', i === idx);
  });
}

/* AOS — Animate on Scroll */
function triggerAOS() {
  const elements = document.querySelectorAll('[data-aos]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.getAttribute('data-aos-delay') || 0;
        setTimeout(() => el.classList.add('visible'), parseInt(delay));
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* smooth-scroll for nav links */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
