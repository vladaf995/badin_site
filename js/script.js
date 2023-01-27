const cards = document.querySelectorAll(".gallery__card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("gallery-animation");
  });
});

cards.forEach((card) => {
  observer.observe(card);
});
