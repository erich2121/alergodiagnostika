// Когда пользователь прокручивает вниз 80px от верхней части документа, измените размер заполнения навигационной панели и размер шрифта логотипа
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (window.scrollY > 80) {
    document.getElementById("nav").style.height = "156px";
    document.getElementById("nav-bar").style.height = "156px";
    document.getElementById("nav-gamburger").style.height = "80px";

  }
  else {
    document.getElementById("nav").style.height = "156px";
    document.getElementById("nav-bar").style.height = "156px";
    document.getElementById("nav").style.background = "none";
    document.getElementById("nav-gamburger").style.background = "none";


  }
  if (window.scrollY == 0) {

  }
  else {
    document.getElementById("nav").style.height = "110px";
    document.getElementById("nav").style.background = "#F9F8D0";
    document.getElementById("nav-bar").style.height = "110px";
    document.getElementById("nav-gamburger").style.background = "#F9F8D0";
  }
}

AOS.init();

[].forEach.call(document.querySelectorAll('a'), function (el) {
  el.addEventListener('click', function () {
    document.querySelector('input[type="checkbox"]').checked = false;
  });
});

[].forEach.call(document.querySelectorAll('label'), function (el) {
  el.addEventListener('click', function () {
    document.getElementById("nav-gamburger").style.background = "#F9F8D0";
  });
});

