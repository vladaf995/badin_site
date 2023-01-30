let trastedByImage = document.querySelectorAll(".desktop img");
let trastedByImageArray = Array.from(trastedByImage);
let trastedByContainer = document.querySelector(".desktop");

setInterval(() => {
  trastedByContainer.innerHTML = "";
  trastedByImageArray.forEach((item, index) => {
    item.style.display = "none";
    item.style.animation = `trustedAnim 0.${index + 1}s`;
  });
  let spliced = trastedByImageArray.splice(0, 5);
  spliced.forEach((item) => {
    item.style.display = "block";
  });
  trastedByContainer.append(...spliced);
  trastedByImageArray.splice(9, 0, ...spliced);
}, 4000);
