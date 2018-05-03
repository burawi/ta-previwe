var mainSidebarSwitcher = document.querySelector('#main-sidebar-switcher');
mainSidebarSwitcher.addEventListener('click', function () {
  document.getElementById('main-sidebar').classList.toggle('hidden');
  document.querySelector('.page-wrapper').classList.toggle('fill');
})