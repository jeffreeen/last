;(function() {
  let openModalMenu = document.querySelector(".gamburger__link");
let linkModalMenu = document.querySelectorAll(".modalmenu__link");
let modalMenu = document.querySelector(".modalmenu");
let modalMenuBtn = document.querySelector(".modalmenu__icon");


openModalMenu.addEventListener("click", function(e) {
  modalMenu.classList.add("modalmenu-on");
})

linkModalMenu.forEach(item => {
  item.addEventListener("click", function(e) {
    linkModalMenu.forEach(el=>{el.classList.remove("mmlinkactive");});
  item.classList.add("mmlinkactive")
  if (item.classList.contains("mmlinkactive")) {
    modalMenu.classList.remove("modalmenu-on");
  } 
})
})

modalMenuBtn.addEventListener("click", function(e) {
  modalMenu.classList.remove("modalmenu-on");
})
})()

