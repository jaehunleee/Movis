import { movieTitle } from "./db.js";

const search = document.querySelector(".main-nav2-search");
const nav2 = document.querySelectorAll(".main-nav2-list");
const searchExpand = document.querySelector(".main-nav2-search-focused-box");
const searchRecommend = document.querySelectorAll(
  ".main-nav2-search-recommend"
);
const navShadow = document.querySelector(".main-nav-super-box");

function handleSearchFocus() {
  nav2.forEach((nav) => {
    nav.classList.add("main-nav-hidden");
  });
  searchExpand.classList.remove("main-nav-hidden");
  searchRecommend.forEach((recommend) => {
    let i = Math.floor(Math.random() * 62);
    recommend.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i> ${movieTitle[i]} `;
  });
  navShadow.classList.add("main-nav-shadow");
}

function handleSearchFocusOut() {
  nav2.forEach((nav) => {
    nav.classList.remove("main-nav-hidden");
  });
  searchExpand.classList.add("main-nav-hidden");
  navShadow.classList.remove("main-nav-shadow");
}

search.addEventListener("focus", handleSearchFocus);
search.addEventListener("focusout", handleSearchFocusOut);
