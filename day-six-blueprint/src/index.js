// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const select = document.querySelector("select");
const option = select.querySelectorAll("option");

function saveValue(v) {
  localStorage.setItem("country", v);
}

function selectCountry(event) {
  const currentValue = event.target.value;
  saveValue(currentValue);
  console.log(currentValue);
}

function init() {
  select.addEventListener("change", selectCountry);
}

init();
