// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h3");

function christmasTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");

  const currentDay = new Date();
  let left = xmasDay.getTime() - currentDay.getTime();
  left =  parseInt(left/1000,10);   //초단위로 만들기

  const days = parseInt(left/(60*60*24));   //하루 단위로 만들기(초단위를 초분시 곱한값으로 나눈 몫)
  const hours= parseInt(left/(60*60)-days*24); //시간단위로 만들고 일수*24 빼기
  const minutes= parseInt(left/(60)-days*24*60-hours*60);
  const seconds= parseInt(left-days*24*60*60-hours*60*60-minutes*60);
  
  clockTitle.innerText = `${days < 10? `0${days}` : days}d ${hours < 10? `0${hours}` : hours}h ${minutes < 10? `0${minutes}` : minutes}m ${seconds < 10? `0${seconds}` : seconds}s`;
  
}

function init() {
  christmasTime();
  setInterval(christmasTime, 1000);
}
init();
