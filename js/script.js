// Burger menu

const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu__link");
const body = document.querySelector("body");

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("lock");
  closeMenu();
});

function closeMenu() {
  for (i = 0; i < menuLinks.length; i++) {
    elem = menuLinks[i];
    elem.addEventListener("click", function () {
      burger.classList.remove("active");
      menu.classList.remove("active");
      body.classList.remove("lock");
    });
  }
}

// Click for touch screen

let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i) ? true : false;
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i) ? true : false;
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i) ? true : false;
  },
  any: function () {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
  }
};


if (isMobile.any()) {
  body.classList.add('touch');
  let arrow = document.querySelector('.arrow');
  let subMenu = document.querySelector('.sub-menu__list');
  arrow.addEventListener('click', function () {
    subMenu.classList.toggle('open');
    arrow.classList.toggle('sub-active');

  })
} else {
  body.classList.add('mouse');
}
