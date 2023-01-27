let images = document.querySelectorAll(".image-left-right");
let moveLeft = document.querySelector(".move-left");
let moveRight = document.querySelector(".move-right");
let clientsContent = document.querySelectorAll(
  ".clients-word__wrapper__box__animation"
);

let currentImageIndex = 0;

moveLeft.addEventListener("click", () => {
  for (let i = 0; i < images.length; i++) {
    if (currentImageIndex === 0) {
      return;
    }
    images[currentImageIndex - 1].style.display = "block";
    clientsContent[currentImageIndex - 1].style.display = "block";
    clientsContent[currentImageIndex].style.display = "none";
  }
  currentImageIndex--;
});

moveRight.addEventListener("click", () => {
  for (let i = 0; i < images.length; i++) {
    if (currentImageIndex === 4) {
      return;
    }
    images[currentImageIndex].style.display = "none";
    clientsContent[currentImageIndex + 1].style.display = "block";
    clientsContent[currentImageIndex].style.display = "none";
  }
  currentImageIndex++;
});
