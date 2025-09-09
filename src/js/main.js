document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.hamburger-menu');
  const sidebar = document.getElementById('sidebar');
  const body = document.body;

  if (hamburgerButton && sidebar) {
    const toggleMenu = () => {
      sidebar.classList.toggle('active');
      hamburgerButton.classList.toggle('active');
      body.classList.toggle('no-scroll');

      const isExpanded = hamburgerButton.classList.contains('active');
      hamburgerButton.setAttribute('aria-expanded', isExpanded);
      hamburgerButton.setAttribute('aria-label', isExpanded ? 'Закрыть меню' : 'Открыть меню');
    };

    hamburgerButton.addEventListener('click', toggleMenu);

    // Close sidebar when clicking outside
    document.addEventListener('click', (event) => {
      if (!sidebar.contains(event.target) && !hamburgerButton.contains(event.target) && sidebar.classList.contains('active')) {
        toggleMenu();
      }
    });

    // Close sidebar on ESC key
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && sidebar.classList.contains('active')) {
        toggleMenu();
      }
    });
  }
});