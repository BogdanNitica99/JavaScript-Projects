const imageSlider = document.querySelector("#image-slider");

const images = ["image01.png", "image02.png", "image03.png", "image04.png"];

let index = 0;

function changeImage(direction) {
  if (direction === "next") {
    index++;
    if (index === images.length) {
      index = 0;
    }
  } else if (direction === "back") {
    index--;
    if (index < 0) {
      index = images.length - 1;
    }
  }

  imageSlider.src = images[index];
}
