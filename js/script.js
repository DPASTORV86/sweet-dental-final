document.addEventListener('DOMContentLoaded', () => {
  // Sidebar
  const sidebar = document.getElementById('sidebar');
  document.getElementById('openSidebar').addEventListener('click', () => {
    sidebar.classList.add('open');
    sidebar.setAttribute('aria-hidden','false');
  });
  document.getElementById('closeSidebar').addEventListener('click', () => {
    sidebar.classList.remove('open');
    sidebar.setAttribute('aria-hidden','true');
  });

  // Parallax Hero
  const video = document.querySelector('.hero-video');
  if(video) {
    window.addEventListener('scroll', () => {
      video.style.transform = `translateY(${window.scrollY * 0.2}px)`;
    });
  }
});
