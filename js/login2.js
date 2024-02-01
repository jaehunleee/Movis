const open = document.querySelector("#open")
const remover = document.querySelector("#remover")

open.addEventListener("click", () => {
  remover.classList.remove("hidden");
});