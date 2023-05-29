const hamburger = document.querySelector(".header-hamburger");
const menu = document.querySelector(".header-mobile");
const closeMenu = document.querySelector(".header-mobile-close");

hamburger.addEventListener("click", () => {
  menu.style.right = "0";
  menu.style.transition = "1s all"
})

closeMenu.addEventListener("click", () => {
  menu.style.right = "-500px";
  menu.style.transition = ".5s all"
})