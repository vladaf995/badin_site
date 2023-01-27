let calcScrollValue = () => {
  let ourExpertiseSection = document.querySelector(".our-expertise");
  let sectionPosition = ourExpertiseSection.getBoundingClientRect().top;

  if (
    (sectionPosition < 6700 && sectionPosition > 542) ||
    (sectionPosition < 90 && sectionPosition > -520)
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

  let scrollProgress = document.getElementById("scroll");

  let position = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((position * 100) / calcHeight);

  if (position > 100) {
    scrollProgress.style.display = "grid";
    scrollProgress.style.opacity = "1";
  } else {
    scrollProgress.style.opacity = "0";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(white ${scrollValue}%, grey ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
