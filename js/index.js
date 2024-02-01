const posters = document.querySelectorAll(".home-random_poster");

function random_poster_title() {
  let num = [];
  for (let i = 0; i < posters.length; i++) {
    num[i] = Math.floor(Math.random() * 62);
    //중복 방지
    for (let j = 0; j < i; j++) {
      if (num[i] == num[j]) num[i] = Math.floor(Math.random() * 62);
    }
    posters[i].src = `../images/alot/${num[i] + 1}.png`;
  }
}
random_poster_title();
