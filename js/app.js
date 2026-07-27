/* HARTION STUDIO - Core Application Logic & Interactivity */

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-links a');
  const contactForm = document.getElementById('studio-contact-form');
  const formSuccessMsg = document.getElementById('form-success-alert');

  // Navbar Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active nav link highlight on scroll
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Contact Form Submit Handler
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Processing Request...</span>`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();

        if (formSuccessMsg) {
          formSuccessMsg.style.display = 'block';
          setTimeout(() => {
            formSuccessMsg.style.display = 'none';
          }, 5000);
        }
      }, 1200);
    });
  }

  // Interactive Brand Logo Suite Switcher
  const logoCards = document.querySelectorAll('.logo-select-card');
  const logoIcons = document.querySelectorAll('.logo-icon img');
  const favicon = document.querySelector('link[rel="icon"]');
  const downloadLink = document.getElementById('download-active-logo');

  logoCards.forEach(card => {
    card.addEventListener('click', () => {
      const newSrc = card.dataset.src;

      // Highlight active card
      logoCards.forEach(c => {
        c.classList.remove('active');
        c.style.borderColor = 'var(--border-glass)';
      });
      card.classList.add('active');
      card.style.borderColor = 'var(--primary-cyan)';

      // Update header, footer, favicon, and download link
      logoIcons.forEach(img => img.src = newSrc);
      if (favicon) favicon.href = newSrc;
      if (downloadLink) downloadLink.href = newSrc;
    });
  });
});
