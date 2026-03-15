/* ============================================================
   modal.js — Project detail modal open/close logic
   ============================================================ */

(function () {
  'use strict';

  const PROJECTS = [
    {
      title: 'AI Payment Dashboard',
      label: 'AI · Finance',
      gradient: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
      overview: 'A full-featured payment analytics dashboard powered by AI-driven insights, giving businesses a real-time view of their financial health.',
      problem: 'Payment teams were drowning in raw transaction data with no intelligent layer to surface what actually mattered — anomalies, trends, and risk signals.',
      solution: 'Built an AI layer on top of a standard payments pipeline that classifies transactions, detects anomalies, and generates natural language summaries of key financial events.',
      stack: ['React', 'Node.js', 'GPT-4', 'Stripe API', 'PostgreSQL', 'TailwindCSS'],
      github: 'https://github.com/adityakumar8632-web',
      demo: '#'
    },
    {
      title: 'AI Moderation System',
      label: 'AI · Safety',
      gradient: 'linear-gradient(135deg, #1a0533, #2d1b69, #11998e)',
      overview: 'An automated content moderation pipeline using multiple AI models working in parallel to flag, classify, and remove harmful content at scale.',
      problem: 'Manual moderation doesn\'t scale. Platforms were missing harmful content and drowning moderators in review queues.',
      solution: 'Designed a multi-model AI pipeline where each model specializes in a content category. Results are aggregated and confidence-scored before action is taken, reducing false positives dramatically.',
      stack: ['Python', 'FastAPI', 'Claude API', 'PostgreSQL', 'Redis', 'Docker'],
      github: 'https://github.com/adityakumar8632-web',
      demo: '#'
    },
    {
      title: 'Developer Productivity Tool',
      label: 'Dev · Tools',
      gradient: 'linear-gradient(135deg, #0d1117, #161b22, #58a6ff22)',
      overview: 'A focused workspace application that helps developers eliminate context-switching and stay in a deep work flow state for longer periods.',
      problem: 'Developers lose an average of 23 minutes re-entering flow after each distraction. Existing tools don\'t address the root cause.',
      solution: 'Built a distraction-blocking, session-tracking desktop app that integrates with GitHub activity and nudges developers back to their primary task when drift is detected.',
      stack: ['Electron', 'TypeScript', 'SQLite', 'GitHub API', 'Node.js'],
      github: 'https://github.com/adityakumar8632-web',
      demo: '#'
    },
    {
      title: 'Website UX / Performance Analyser',
      label: 'UX · Performance',
      gradient: 'linear-gradient(135deg, #0f3443, #34e89e22, #0f3443)',
      overview: 'An automated auditing tool that runs UX and performance checks on any website and delivers an AI-generated report with prioritised, actionable improvements.',
      problem: 'Developers and clients have no clear way to benchmark their website\'s UX quality and performance without expensive consultants or technical expertise.',
      solution: 'Wrapped Lighthouse and custom UX heuristics behind a clean UI. An AI layer interprets the raw scores and writes human-readable recommendations specific to the site\'s context.',
      stack: ['Next.js', 'Lighthouse', 'Puppeteer', 'Claude API', 'Vercel'],
      github: 'https://github.com/adityakumar8632-web',
      demo: '#'
    },
    {
      title: 'Law Firm Website',
      label: 'Web · Legal',
      gradient: 'linear-gradient(135deg, #1c1c2e, #2d2d44, #c9a96e22)',
      overview: 'A premium, conversion-focused website for a law firm — built with clean architecture, fast load times, strong UX, and a design language that communicates trust and authority.',
      problem: 'Most law firm websites are outdated, slow, and fail to convert visitors into enquiries. They look like brochures rather than professional digital presences.',
      solution: 'Designed a modern interface with a clear conversion funnel, parallax motion, optimised performance, and a glassmorphism visual system that stands apart from generic legal sites.',
      stack: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
      github: 'https://github.com/adityakumar8632-web/Personal-Portfollio',
      demo: '#'
    }
  ];

  const overlay = document.getElementById('modalOverlay');
  const modal   = document.getElementById('modal');
  const closeBtn = document.getElementById('modalClose');
  const content = document.getElementById('modalContent');

  function openModal(index) {
    const p = PROJECTS[index];
    if (!p) return;

    content.innerHTML = `
      <div class="modal-preview" style="background: ${p.gradient};"></div>
      <p class="modal-eyebrow">${p.label}</p>
      <h2 class="modal-title">${p.title}</h2>
      <div class="modal-section">
        <p class="modal-section-label">Overview</p>
        <p>${p.overview}</p>
      </div>
      <div class="modal-section">
        <p class="modal-section-label">The Problem</p>
        <p>${p.problem}</p>
      </div>
      <div class="modal-section">
        <p class="modal-section-label">The Solution</p>
        <p>${p.solution}</p>
      </div>
      <div class="modal-section">
        <p class="modal-section-label">Tech Stack</p>
        <div class="modal-tags">
          ${p.stack.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
      <div class="modal-actions">
        <a href="${p.github}" target="_blank" rel="noopener" class="btn btn-primary">
          View on GitHub
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
        ${p.demo !== '#' ? `<a href="${p.demo}" target="_blank" rel="noopener" class="btn btn-ghost">Live Demo</a>` : ''}
      </div>
    `;

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    modal.scrollTop = 0;
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  /* ---------- EVENT LISTENERS ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.project-card, .project-open-btn').forEach(el => {
      el.addEventListener('click', (e) => {
        const card = el.closest('.project-card') || el.closest('[data-project]') || el;
        const projectCard = card.dataset.project !== undefined ? card : card.closest('[data-project]');
        if (!projectCard) return;
        const idx = parseInt(projectCard.dataset.project, 10);
        openModal(idx);
      });
    });

    closeBtn.addEventListener('click', closeModal);

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  });

})();
