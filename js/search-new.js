import { movieTitle } from "./db.js";

const posters = document.querySelectorAll(".search-random-image");
const titles = document.querySelectorAll(".search-random-text");
const ratings = document.querySelectorAll(".search-content-rating");
const filter = document.querySelector(".search-filter");
const hiddenMenu = document.querySelector(".search-menu-filter");
const randomLogo = document.querySelectorAll(".search-random-logo");

function randomPosterTitle() {
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
randomPosterTitle();

function randomRating() {
  ratings.forEach((rating) => {
    let num = (Math.random() * 4 + 1).toFixed(1);
    rating.innerText = `⭐️ ${num}`;
  });
}
randomRating();

function handleFilterClick() {
  if (hiddenMenu.className == "search-menu-filter search-hidden") {
    console.log(hiddenMenu.className);
    hiddenMenu.classList.remove("search-hidden");
    filter.style.backgroundColor = "#1c252f";
    filter.style.border = "none";
  } else {
    console.log(hiddenMenu.className);
    hiddenMenu.classList.add("search-hidden");
    filter.style.backgroundColor = "black";
    filter.style.border = "1px solid rgba(255, 255, 255, 0.5)";
  }
}

function addRandomLogo() {
  randomLogo.forEach((logo) => {
    let i = Math.random();
    if (i > 0.5) {
      logo.classList.add("search-hidden");
    }
  });
}

addRandomLogo();

filter.addEventListener("click", handleFilterClick);
