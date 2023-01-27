let menu = document.querySelector(".desktop-menu");
let open = document.querySelector(".desktop-menu-open");
let closeIcon = document.querySelector(".desktop-menu-open__close-icon");
let activMenu = document.querySelector(".desktop-menu-open__container");

menu.addEventListener("mouseover", mouseOver);
menu.addEventListener("mouseout", mouseOut);

function mouseOver() {
  open.classList.add("desktop-menu-border");
}

function mouseOut() {
  open.classList.remove("desktop-menu-border");
}

menu.addEventListener("click", () => {
  open.classList.add("big");
  activMenu.style.display = "block";
  menu.style.display = "none";
});

closeIcon.addEventListener("click", () => {
  menu.style.display = "block";
  open.classList.remove("big");
  activMenu.style.display = "none";
});
