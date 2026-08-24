(function () {
  // ----- Mobile nav toggle -----
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.navbar-links');

  function closeMenu() {
    if (!toggle || !links) return;
    toggle.classList.remove('open');
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });

    // close when tapping outside the menu
    document.addEventListener('click', e => {
      if (!links.classList.contains('open')) return;
      if (!links.contains(e.target) && !toggle.contains(e.target)) closeMenu();
    });

    // close after picking a destination. Navigation itself is left to the
    // browser: CSS `scroll-behavior: smooth` + `scroll-padding-top` handle the
    // animation, and not calling preventDefault keeps the URL hash updating so
    // sections stay deep-linkable and the back button works.
    links.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', closeMenu);
    });

    // Escape closes the menu
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && links.classList.contains('open')) {
        closeMenu();
        toggle.focus();
      }
    });
  }

  // ----- Scroll reveal -----
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('in-view'));
  }

  // ----- Copyright year (markup ships a valid year; this only keeps it current) -----
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
