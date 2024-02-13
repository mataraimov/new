document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('menu-toggle').addEventListener('click', function (e) {
    e.stopPropagation();
    var menu = document.getElementById('menu');
    menu.classList.toggle('show-menu');
    document.querySelector('.menu-toggle i').classList.toggle('fa-bars');
    document.querySelector('.menu-toggle i').classList.toggle('fa-times');
  });

  document.addEventListener('click', function (e) {
    var menu = document.getElementById('menu');
    if (!menu.contains(e.target) && !document.getElementById('menu-toggle').contains(e.target)) {
      menu.classList.remove('show-menu');
      document.querySelector('.menu-toggle i').classList.remove('fa-times');
      document.querySelector('.menu-toggle i').classList.add('fa-bars');
    }
  });
});
