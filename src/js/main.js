document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.hamburger-menu');
  const sidebar = document.getElementById('sidebar');

  if (hamburgerButton && sidebar) {
    hamburgerButton.addEventListener('click', () => {
      sidebar.classList.toggle('active');
      hamburgerButton.classList.toggle('active');
    });
  }
});