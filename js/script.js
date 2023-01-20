const cards = document.querySelectorAll(".gallery__card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("gallery-animation");
  });
});

cards.forEach((card) => {
  observer.observe(card);
});

window.onscroll = () => {
  let ourExpertiseSection = document.querySelector(".our-expertise");
  let sectionPosition = ourExpertiseSection.getBoundingClientRect().top;

  if (
    (sectionPosition < 6700 && sectionPosition > 542) ||
    (sectionPosition < 171 && sectionPosition > -410)
  ) {
    let line = document.querySelectorAll(".desktop-menu__line span ");
    let menuText = document.querySelector(".desktop-menu p");
    menuText.style.cssText = "color: black";
    for (let i = 0; i < line.length; i++) {
      line[i].style.cssText = "background-color: black";
    }
  } else {
    let line = document.querySelectorAll(".desktop-menu__line span");
    let menuText = document.querySelector(".desktop-menu p");
    menuText.style.cssText = "color: white";
    for (let i = 0; i < line.length; i++) {
      line[i].style.cssText = "background-color: white";
    }
  }
};
