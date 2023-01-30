let menu = document.querySelector(".desktop-menu");
let open = document.querySelector(".desktop-menu-open");
let closeIcon = document.querySelector(".desktop-menu-open__close-icon");
let activMenu = document.querySelector(".desktop-menu-open__container");
let menuList = document.querySelectorAll(".desktop-menu-open li");
let menuNav = document.querySelector(".desktop-menu-open__box");

menu.addEventListener("mouseover", mouseOver);
menu.addEventListener("mouseout", mouseOut);

function mouseOver() {
  open.classList.add("desktop-menu-border");
}

function mouseOut() {
  open.classList.remove("desktop-menu-border");
}

menu.addEventListener("click", () => {
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "unset";
  open.classList.add("big");
  menu.classList.add("display-none");
  activMenu.style.display = "block";

  setTimeout(() => {
    menuNav.style.display = "unset";
  }, 500);
  menuList.forEach((item, index) => {
    item.style.animation = `navAnim 0.${index + 1}s`;
  });
});

closeIcon.addEventListener("click", () => {
  document.body.style.cssText = "overflow-x: hidden";
  document.documentElement.style.cssText = "overflow-x: hidden";
  menu.classList.remove("display-none");
  open.classList.remove("big");
  activMenu.style.display = "none";
  menuNav.style.display = "none";
});
