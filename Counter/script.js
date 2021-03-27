let counterValue = 0;

function changeColor() {
  if (counterValue === 0) {
    document.getElementById("counterValue").style.color = "rgb(0,0,0)";
  } else if (counterValue > 0) {
    document.getElementById("counterValue").style.color = "rgb(0,255,0)";
  } else {
    document.getElementById("counterValue").style.color = "rgb(255,0,0)";
  }
}

function changeCounter(value) {
  if (value > 0) {
    counterValue++;
  } else if (value === 0) {
    counterValue = 0;
  } else {
    counterValue--;
  }

  changeColor();

  document.getElementById("counterValue").innerText = counterValue.toString();
}
