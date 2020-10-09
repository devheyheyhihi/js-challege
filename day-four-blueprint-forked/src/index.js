// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const body = document.querySelector("body");

const innerwidth = window.innerWidth;

const handler = {
  changeYellow() {
    body.style.backgroundColor = "yellow";
  },

  changeRed() {
    body.style.backgroundColor = "red";
  },

  changeBlue() {
    body.style.backgroundColor = "blue";
  }
};

function colorChange() {
  if (innerwidth > 700) {
    window.addEventListener("resize", handler.changeYellow);
  } else if (innerwidth > 300 && innerwidth <= 700) {
    window.addEventListener("resize", handler.changeYellow);
  } else {
    window.addEventListener("resize", handler.changeRed);
  }
}

console.log(window.innerWidth);

function init() {
  colorChange();
}

init();
