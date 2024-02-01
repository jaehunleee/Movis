//n개의 min~max 까지의 난수, 중복x, 리턴값 배열
function getRandomInts(min, max, n) {
    let arr = [];
    for(let i = min; i <= max; i++) {
        arr.push(i);
    }

    arr.sort(() => Math.random() - 0.5);

    return arr.slice(0, n);

}

// 1~15-netfilx
// 16~30-disney
// 31~45-tving
// 46~62-watcha

let open_movie_box=document.querySelector(".open #movie_box")
console.log(open_movie_box)

//1~62난수 생성
let png_num=getRandomInts(1,62,62)

for(let i=0; i<62; i++){
    let movie_div=document.createElement("div")
    let movie_img=document.createElement("img")
    let movie_img_src=document.createAttribute("src")
    movie_img_src.value=`../images/alot/${png_num[i]}.png`

    movie_img.setAttributeNode(movie_img_src)
    movie_div.appendChild(movie_img)
    open_movie_box.appendChild(movie_div)

    if(1 <= png_num[i] && png_num[i] <= 15)
    {
        movie_div.classList.add("netflix")
    }
    else if(16 <= png_num[i] && png_num[i] <= 30)
    {
        movie_div.classList.add("disney")
    }
    else if(31 <= png_num[i] && png_num[i] <= 45)
    {
        movie_div.classList.add("tving")
    }
    else if(46 <= png_num[i] && png_num[i] <= 62)
    {
        movie_div.classList.add("watcha")
    }
}


//ott 별 영화들
let netflix_movie=document.querySelectorAll(".netflix")
let disney_movie=document.querySelectorAll(".disney")
let tving_movie=document.querySelectorAll(".tving")
let watcha_movie=document.querySelectorAll(".watcha")

//ott 아이콘 버튼
let netflix_bt=document.querySelector(".netflix_button")
let disney_bt=document.querySelector(".disney_button")
let tving_bt=document.querySelector(".tving_button")
let watcha_bt=document.querySelector(".watcha_button")


function hide_toggle(ott_bt,ott_movie) {
    ott_bt.addEventListener("click",()=>{  
        ott_movie.forEach((movie)=>{
            movie.classList.toggle("hide")
        })
    })
}

//버튼 클릭 display none 영화 
hide_toggle(netflix_bt,netflix_movie)
hide_toggle(disney_bt,disney_movie)
hide_toggle(tving_bt,tving_movie)
hide_toggle(watcha_bt,watcha_movie)


let ott_img=document.querySelectorAll("#ott_box img")

ott_img.forEach(img => {
    img.addEventListener("click",()=>{
        img.classList.toggle("checked")
    })
});

//개봉작 개봉 예정작 설정
let open_bt=document.querySelector(".open_button")
let unopen_bt=document.querySelector(".unopen_button")
let open_box=document.querySelector(".open")
let unopen_box=document.querySelector(".unopen")

open_bt.addEventListener("click",()=>{
    open_bt.classList.toggle("checked")
    open_box.classList.toggle("hide")
})

unopen_bt.addEventListener("click",()=>{
    unopen_bt.classList.toggle("checked")
    unopen_box.classList.toggle("hide")
})

let unopen_list=document.querySelectorAll(".unopen_movie>img")

let unopen_png_num=getRandomInts(1,62,unopen_list.length)

for(let i=0; i<unopen_list.length; i++){
    unopen_list[i].src=`../images/alot/${unopen_png_num[i]}.png`
}



