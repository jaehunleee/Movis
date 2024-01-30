const mainVideoContainer = document.querySelector(".main-today-recommend");
const mainVideoBox = document.querySelector(".main-video_box");
const mainVideo = document.querySelector(".main-video");
const closeBtn = document.querySelector(".main-video-close_button");
const container = document.querySelector(".main_page-container");
const month = document.querySelector(".main-calender-month");
const date = document.querySelector(".main-calender-date");
const posters = document.querySelectorAll(".main-random_poster");
const titles = document.querySelectorAll(".main-random_title");
const superBox = document.querySelector(".main-super-box");

let maxWidth = container.offsetWidth;

const movieTitle = [
  "아메리칸 호러 스토리",
  "안데스 설원의 생존자들",
  "아라문의 검",
  "BEEF",
  "종이의집 베를린",
  "The Big Country",
  "Fool Me Once",
  "Boy Swallows Universe",
  "콘크리트 유토피아",
  "초토화",
  "Delicious Dungeon",
  "Death and other Details",
  "Degrassi Next Class",
  "카우보이의 노래",
  "The Office",
  "The Trust",
  "아트풀 다저",
  "장고, 분노의 추적자",
  "닥터 슬럼프",
  "천박사 퇴마연구소",
  "ECHO",
  "EXPATS",
  "거미집",
  "GRISELDA",
  "경성크리처",
  "Hazbin Hotel",
  "REACHER",
  "장송의 프리렌",
  "Sengoku Youko",
  "중쇄를 찍자",
  "크리미널 레코드",
  "킬러들의 쇼핑몰",
  "The Head of Joaquin Murrieta",
  "마이데몬",
  "Modern Family",
  "남과여",
  "Tree Climbing Lions",
  "나의 해피엔드",
  "나 혼자만 레벨업",
  "NOTHING",
  "외계+인 1부",
  "오늘도 사랑스럽개",
  "Captain Underpants",
  "퍼시잭슨과 올림포스의 신들",
  "재벌X형사",
  "외딴 곳의 살인 초대",
  "LAW & ORDER",
  "Secrets of Christs Tomb",
  "세작, 매혹한 자들",
  "석양의 무법자",
  "The Brothers Sun",
  "선산",
  "SPY X FAMILY",
  "SHERLOCK",
  "친구에서 연인이 되는 경우의 수",
  "태어난 김에 세계일주",
  "사랑한다고 말해줘",
  "트라이건 스탬피드",
  "크리에이터",
  "웰컴투 삼달리",
  "원피스",
  "약사의 혼잣말",
];

function handleDate() {
  let today = new Date();
  month.innerText = `${today.getMonth() + 1}월`;
  date.innerText = today.getDate();
}
handleDate();

function handleVideoClick() {
  console.log("hi");
  mainVideoBox.classList.remove("hidden");
  width = 100;
  height = 100;
  render();
  superBox.classList.add("main-shadow");
}

function render() {
  widthIntervalId = setInterval(animationWidth, 10);
  heightIntervalId = setInterval(animationHeight, 5);
}
function animationWidth() {
  mainVideoBox.style.width = `${width}px`;
  width += 10;
  if (width > maxWidth / 2) clearInterval(widthIntervalId);
}
function animationHeight() {
  mainVideoBox.style.height = `${height}px`;
  height += 10;
  if (height > maxWidth * 2) clearInterval(heightIntervalId);
}

function handleCloseClick() {
  mainVideoBox.classList.add("hidden");
  superBox.classList.remove("main-shadow");
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
