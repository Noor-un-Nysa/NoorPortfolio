// script.js
// Small helper: set year and show page fade-in
document.addEventListener('DOMContentLoaded', function() {
  const y = new Date().getFullYear();

  // Update footer years (index uses id="year", others use year2..year5)
  const ids = ['year', 'year2', 'year3', 'year4', 'year5'];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = y;
  });

  // Highlight current navigation link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (href === 'index.html' && currentPage === '')) {
      link.classList.add('active');
      link.style.color = '#6b46c1'; // accent color
      link.style.fontWeight = '600';
    }
  });

  // Reveal page with fade-in
  setTimeout(() => {
    const page = document.querySelector('.page');
    if (page) page.classList.add('visible');
  }, 20);
});
