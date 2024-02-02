const userName = document.querySelector(".detail-review-input-name");
const content = document.querySelector(".detail-review-input-content");
const btn = document.querySelector(".detail-review-input-button");
const reviewList = document.querySelector(".detail-review-list");
const stars = document.querySelectorAll(".detail-review-input-rating-star");

function handleBtnClick() {
  if (userName.value == "" || content.value == "") return;
  let review = document.createElement("div");
  let rating = 0;
  for (let i = 0; i <= 4; i++) {
    if (
      stars[i].className ==
        "detail-review-input-rating-star fa-solid fa-star" ||
      stars[i].className == "detail-review-input-rating-star fa-star fa-solid"
    )
      rating++;
  }
  review.classList.add("detail-review-obj");
  review.innerHTML = `<div class="detail-review-name">${userName.value}</div>
  <div class="detail-review-content">${content.value}</div>`;
  reviewList.appendChild(review);

  const ratingStars = document.createElement("div");
  ratingStars.classList.add("detail-review-star");
  let addStars = [];
  console.log(rating);
  for (let i = 0; i < rating; i++) {
    addStars[i] = document.createElement("i");
    addStars[i].classList.add("detail-review-rating-star");
    addStars[i].classList.add("fa-solid");
    addStars[i].classList.add("fa-star");
    ratingStars.append(addStars[i]);
  }
  review.prepend(ratingStars);

  userName.value = "";
  content.value = "";
}

function handleStarClick(e) {
  for (let i = 0; i < 5; i++) {
    stars[i].classList.remove("fa-solid");
    stars[i].classList.remove("fa-regular");
  }
  for (let i = 0; i <= e.target.id; i++) {
    stars[i].classList.add("fa-solid");
  }
  let start = Number(e.target.id) + 1;
  for (let i = start; i <= 4; i++) {
    stars[i].classList.add("fa-regular");
  }
}

btn.addEventListener("click", handleBtnClick);
stars.forEach((star) => {
  star.addEventListener("click", handleStarClick);
});
