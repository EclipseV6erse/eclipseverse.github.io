// Smooth scroll on click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Simple form submit animation
const form = document.querySelector('.contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent! (demo only)');
  form.reset();
});
