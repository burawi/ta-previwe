
// Main sidebar show/hide
var mainSidebarSwitcher = document.querySelector('#main-sidebar-switcher');
mainSidebarSwitcher.addEventListener('click', function () {
  document.getElementById('main-sidebar').classList.toggle('hidden');
  document.querySelector('.page-wrapper').classList.toggle('fill');
})


// Sector view mode switching
var viewSwitchers = document.querySelectorAll('.view-switcher');
var list = document.querySelector('.page-section-list');
for (var i = 0; i < viewSwitchers.length; i++) {
  viewSwitchers[i].addEventListener('click', function (e) {
    for (var j = 0; j < viewSwitchers.length; j++) {
      viewSwitchers[j].classList.remove('active');
    }
    this.classList.add('active');
    if (this.id == 'view-list-switcher') list.classList.add('view-list');
    else list.classList.remove('view-list');
  });
}