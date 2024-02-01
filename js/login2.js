const open = document.querySelector("#open")
const remover = document.querySelector("#remover")

open.addEventListener("click", () => {
  remover.classList.remove("hidden");
  open.innerHTML = `<a href="../index.html">confirm</a>`;
});