/* nav.js — shared across all pages */

// Mark active nav link based on current page filename
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === 'index.html' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

// Animate timeline items into view on scroll
const timelineObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });

document.querySelectorAll('.timeline-item').forEach((el, i) => {
  el.style.transitionDelay = i * 0.1 + 's';
  timelineObserver.observe(el);
});
