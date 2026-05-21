/* ═══════════════════════════════════════════════════════
   IFEOLUWA OPAWOYE — Website Script
   ═══════════════════════════════════════════════════════ */

'use strict';

/* ─── Navbar: scroll state + active link ─────────────────── */
(function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const navLinks  = document.querySelectorAll('.nav-link');
  const sections  = document.querySelectorAll('main > section[id]');

  function onScroll() {
    // Scrolled class for background
    navbar.classList.toggle('scrolled', window.scrollY > 40);

    // Active link based on scroll position
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 90;
      if (window.scrollY >= top) current = section.id;
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.section === current);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ─── Hamburger / mobile menu ────────────────────────────── */
(function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    navLinks.classList.toggle('open', open);
  });

  // Close on link click
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
})();

/* ─── Scroll-reveal (Intersection Observer) ──────────────── */
(function initReveal() {
  const items = document.querySelectorAll('[data-reveal], .journey-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger items inside a parent
        const delay = entry.target.closest('.journey-track')
          ? Array.from(entry.target.parentElement.children).indexOf(entry.target) * 100
          : 0;
        setTimeout(() => entry.target.classList.add('revealed'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach(el => observer.observe(el));
})();

/* ─── Gallery hover parallax (hero panels) ───────────────── */
(function initGalleryHover() {
  const gallery = document.querySelector('.hero-gallery');
  if (!gallery) return;

  gallery.addEventListener('mousemove', (e) => {
    const rect  = gallery.getBoundingClientRect();
    const x     = (e.clientX - rect.left) / rect.width;
    const shift = (x - 0.5) * 14;
    gallery.style.transform = `translateX(${shift}px)`;
  });

  gallery.addEventListener('mouseleave', () => {
    gallery.style.transform = 'translateX(0)';
  });
})();

/* ─── Newsletter form ────────────────────────────────────── */
(function initNewsletter() {
  const form    = document.getElementById('newsletterForm');
  const message = document.getElementById('formMessage');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email   = document.getElementById('emailInput').value.trim();
    const privacy = document.getElementById('privacyCheck').checked;

    if (!privacy) {
      message.textContent = 'Please accept the privacy policy to continue.';
      message.style.color = '#e05555';
      return;
    }

    if (!email) {
      message.textContent = 'Please enter a valid email address.';
      message.style.color = '#e05555';
      return;
    }

    // Simulate subscription success
    message.textContent = 'Thank you! You are now subscribed.';
    message.style.color = '#D4A853';
    form.reset();
  });
})();

/* ─── Smooth scroll for all anchor links ─────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
