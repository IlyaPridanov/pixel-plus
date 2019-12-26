'use strict';

(function () {
  var headerNavBtn = document.querySelector('.header-nav__btn');
  var headerNavItem = document.querySelectorAll('.header-nav__item');

  var getOpenNav = function (link) {
    link.addEventListener('click', function () {
      link.classList.toggle('header-nav__btn--active');
      headerNavItem.forEach(function (currentValue, index) {
        if (!(index === 0)) {
          currentValue.classList.toggle('hidden');
        }
      });
    });
  };

  getOpenNav(headerNavBtn);
})();
