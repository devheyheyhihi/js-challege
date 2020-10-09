import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h4");

function getTime() {
  // Don't delete this.
  //const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const xmasDay = new Date();
  const date = xmasDay.getDate;
  clockTitle.innerText = `${date}`;
}

function init() {
  getTime();
}
init();
