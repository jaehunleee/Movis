const open = document.querySelector("#open");
const containerFooter = document.querySelector("#remove");
const container = document.querySelector("#remover")

open.addEventListener("click", () => {
  if(containerFooter.className == "hidden"){
    containerFooter.classList.remove("hidden");
  }else{container.classList.remove("hidden");
  open.innerHTML = `<a href="../index.html">confirm</a>`
}
});

