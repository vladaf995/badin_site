let galleryPictures = document.querySelectorAll(
  ".gallery__card__content > img"
);
let modal = document.querySelector(".modal");
let modalActivImg = document.querySelector(".modal__content__modalActivImg");
let currentImage = 0;

galleryPictures.forEach((image, index) => {
  image.addEventListener("click", () => {
    modal.style.display = "block";
    modalActivImg.setAttribute("src", image.getAttribute("src"));
    currentImage = index;
    if (index === 0) {
      arrows[0].style.display = "none";
      arrows[1].style.display = "block";
    } else if (index === 5) {
      arrows[1].style.display = "none";
      arrows[0].style.display = "block";
    } else {
      arrows[1].style.display = "block";
      arrows[0].style.display = "block";
    }
  });
});

const closeModal = () => {
  modal.style.display = "none";
};

modal.addEventListener("click", closeModal);

const arrows = document.querySelectorAll(".arrow");

arrows.forEach((arrow, index) => {
  if (index === 0) {
    arrow.addEventListener("click", (e) => {
      e.stopPropagation();
      modalActivImg.setAttribute(
        "src",
        galleryPictures[currentImage - 1].getAttribute("src")
      );
      currentImage--;
      arrows[1].style.display = "block";
      if (currentImage === 0) {
        arrows[0].style.display = "none";
      }
    });
  } else {
    arrow.addEventListener("click", (e) => {
      e.stopPropagation();
      modalActivImg.setAttribute(
        "src",
        galleryPictures[currentImage + 1].getAttribute("src")
      );
      currentImage++;
      arrows[0].style.display = "block";
      if (currentImage === 5) {
        arrows[1].style.display = "none";
      }
    });
  }
});
