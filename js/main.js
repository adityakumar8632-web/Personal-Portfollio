/* ============================================================
   main.js — Scroll reveal, nav active states, smooth scroll
   ============================================================ */

(function () {
  'use strict';

  /* ---------- SCROLL REVEAL (Intersection Observer) ---------- */
  function initReveal() {
    const els = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        const delay = parseInt(el.dataset.delay || '0', 10);

        setTimeout(() => {
          el.classList.add('visible');
        }, delay);

        observer.unobserve(el);
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    els.forEach(el => observer.observe(el));
  }

  /* ---------- ACTIVE NAV LINK ---------- */
  function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === `#${id}`
            ? 'var(--text-1)'
            : 'var(--text-2)';
        });
      });
    }, {
      threshold: 0.4
    });

    sections.forEach(s => observer.observe(s));
  }

  /* ---------- SMOOTH SCROLL FOR ALL ANCHOR LINKS ---------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ---------- HERO REVEAL ON LOAD ---------- */
  function initHeroReveal() {
    const heroCard = document.querySelector('.hero-card');
    if (!heroCard) return;
    // hero-card is already a .reveal element, handled by IntersectionObserver
    // but let's force it visible immediately on load
    requestAnimationFrame(() => {
      setTimeout(() => {
        heroCard.classList.add('visible');
      }, 120);
    });
  }

  /* ---------- INIT ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    initReveal();
    initActiveNav();
    initSmoothScroll();
    initHeroReveal();
  });

})();
