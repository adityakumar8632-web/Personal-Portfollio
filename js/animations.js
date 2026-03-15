/* ============================================================
   animations.js — Button, card, magnetic cursor interactions
   ============================================================ */

(function () {
  'use strict';

  const isMobile = () => window.matchMedia('(pointer: coarse)').matches;

  /* ---------- BUTTON PRESS FEEDBACK ---------- */
  function initButtonAnimations() {
    document.querySelectorAll('.btn, .nav-cta, .project-open-btn').forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (isMobile()) return;
        el.style.transition = 'transform 0.12s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.2s';
        el.style.transform = 'scale(1.04)';
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = 'scale(1)';
      });
      el.addEventListener('mousedown', () => {
        el.style.transform = 'scale(0.96)';
      });
      el.addEventListener('mouseup', () => {
        el.style.transform = 'scale(1.04)';
      });
    });
  }

  /* ---------- CARD HOVER ---------- */
  function initCardAnimations() {
    document.querySelectorAll('.cap-card, .project-card, .timeline-card').forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (isMobile()) return;
        el.style.transition = 'transform 0.25s cubic-bezier(0.25,0.46,0.45,0.94), border-color 0.3s, box-shadow 0.3s';
        el.style.transform = 'translateY(-8px) scale(1.02)';
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = 'translateY(0) scale(1)';
      });
      el.addEventListener('mousedown', () => {
        el.style.transform = 'translateY(-4px) scale(0.97)';
      });
      el.addEventListener('mouseup', () => {
        el.style.transform = 'translateY(-8px) scale(1.02)';
      });
    });
  }

  /* ---------- MAGNETIC CURSOR ---------- */
  function initMagneticCursor() {
    if (isMobile()) return;

    document.querySelectorAll('.magnetic').forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) * 0.12;
        const dy = (e.clientY - cy) * 0.12;
        const maxShift = 10;
        const tx = Math.max(-maxShift, Math.min(maxShift, dx));
        const ty = Math.max(-maxShift, Math.min(maxShift, dy));
        el.style.transition = 'transform 0.15s linear';
        el.style.transform = `translate(${tx}px, ${ty}px)`;
      });

      el.addEventListener('mouseleave', () => {
        el.style.transition = 'transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94)';
        el.style.transform = 'translate(0,0)';
      });
    });
  }

  /* ---------- NAV SCROLL EFFECT ---------- */
  function initNavScroll() {
    const nav = document.getElementById('nav');
    if (!nav) return;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        nav.style.background = 'rgba(8,8,16,0.92)';
      } else {
        nav.style.background = 'rgba(8,8,16,0.7)';
      }
    }, { passive: true });
  }

  /* ---------- HAMBURGER ---------- */
  function initHamburger() {
    const hamburger = document.getElementById('hamburger');
    const navMobile = document.getElementById('navMobile');
    if (!hamburger || !navMobile) return;

    hamburger.addEventListener('click', () => {
      navMobile.classList.toggle('open');
    });

    navMobile.querySelectorAll('.nav-mobile-link').forEach(link => {
      link.addEventListener('click', () => navMobile.classList.remove('open'));
    });
  }

  /* ---------- INIT ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    initButtonAnimations();
    initCardAnimations();
    initMagneticCursor();
    initNavScroll();
    initHamburger();
  });

})();
