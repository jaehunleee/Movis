import { movieTitle } from "./nav.js";

const mainVideoContainer = document.querySelector(".main-today-recommend");
const mainVideoBox = document.querySelector(".main-video_box");
const closeBtn = document.querySelector(".main-video-close_button");
const container = document.querySelector(".main_page-container");
const month = document.querySelector(".main-calender-month");
const date = document.querySelector(".main-calender-date");
const posters = document.querySelectorAll(".main-random_poster");
const titles = document.querySelectorAll(".main-random_title");
const superBox = document.querySelector(".main-super-box");
const video = document.querySelector(".main-iframe-video");

let maxWidth = container.offsetWidth;
let widtH;
let heighT;
let widthIntervalId;
let heightIntervalId;

function handleDate() {
  let today = new Date();
  month.innerText = `${today.getMonth() + 1}월`;
  date.innerText = today.getDate();
}
handleDate();

function handleVideoClick() {
  mainVideoBox.classList.remove("hidden");
  widtH = 100;
  heighT = 100;
  render();
  superBox.classList.add("main-shadow");
}

function render() {
  widthIntervalId = setInterval(animationWidth, 10);
  heightIntervalId = setInterval(animationHeight, 5);
}
function animationWidth() {
  mainVideoBox.style.width = `${widtH}px`;
  widtH += 10;
  if (widtH > window.innerWidth * 0.7 || widtH > 1000)
    clearInterval(widthIntervalId);
}
function animationHeight() {
  mainVideoBox.style.height = `${heighT}px`;
  heighT += 10;
  if (heighT > window.innerHeight * 1.5) clearInterval(heightIntervalId);
}

function handleCloseClick() {
  mainVideoBox.classList.add("hidden");
  superBox.classList.remove("main-shadow");
}

function handleVideoResize() {
  if (window.innerWidth < 1000 && innerWidth > 500) {
    mainVideoBox.style.width = `${window.innerWidth * 0.7}px`;
    mainVideoBox.style.height = `${window.innerHeight * 1.5}px`;
  }
}

//차트 포스터 및 타이틀 랜덤 삽입
function random_poster_title() {
  let num = [];
  for (let i = 0; i < posters.length; i++) {
    num[i] = Math.floor(Math.random() * 62);
    //중복 방지
    for (let j = 0; j < i; j++) {
      if (num[i] == num[j]) num[i] = Math.floor(Math.random() * 62);
    }
    posters[i].src = `../images/alot/${num[i] + 1}.png`;
    titles[i].innerText = movieTitle[num[i]];
  }
}
random_poster_title();

mainVideoContainer.addEventListener("click", handleVideoClick);
closeBtn.addEventListener("click", handleCloseClick);
window.addEventListener("resize", handleVideoResize);
