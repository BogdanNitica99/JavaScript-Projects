const colorArr = [
  "rgb(255,0,0)",
  "rgb(0,255,0)",
  "rgb(0,0,255)",
  "rgb(0,255,255)",
  "rgb(255,0,255)",
  "rgb(255,255,0)",
];
const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let optionValue = 1;

let currentIndex = 0;

function setOption(optionValueParam) {
  optionValue = optionValueParam;

  if (optionValue === 1) {
    document.getElementById("main-current-option").innerText =
      "Current Option: Basic";
  } else {
    document.getElementById("main-current-option").innerText =
      "Current Option: Random Hex";
  }
}

function showCurrentColor(hexValue) {
  document.getElementById("main-color-rgb").innerText =
    "Color: " + document.getElementById("main").style.backgroundColor;

  if (optionValue === 2) {
    document.getElementById("main-color-hex").innerText =
      "Color code hex: " + hexValue;
  } else {
    document.getElementById("main-color-hex").innerText = "Color code hex: #";
  }
}

function generateRandomHexColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hexArr[Math.floor(Math.random() * hexArr.length)];
  }
  return hexColor;
}

function changeColor() {
  let color;
  if (optionValue === 1) {
    if (currentIndex === colorArr.length) {
      currentIndex = 0;
    }

    color = colorArr[currentIndex];

    currentIndex++;
  } else {
    color = generateRandomHexColor();
  }

  document.getElementById("main").style.backgroundColor = color;
  document.getElementById("title").style.color = color;
  showCurrentColor(color);
}
