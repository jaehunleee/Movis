let netflix_movie=document.querySelectorAll(".netflix")
let disney_movie=document.querySelectorAll(".disney")
let tving_movie=document.querySelectorAll(".tving")
let watcha_movie=document.querySelectorAll(".watcha")

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

console.log(unopen_list)
console.log(unopen_list[0])

function getRandomInts(min, max, n) {
    let arr = [];
    for(let i = min; i <= max; i++) {
        arr.push(i);
    }

    arr.sort(() => Math.random() - 0.5);

    return arr.slice(0, n);

}

let png_num=getRandomInts(1,62,unopen_list.length)

for(let i=0; i<unopen_list.length; i++){
    unopen_list[i].src=`../images/alot/${png_num[i]}.png`
}