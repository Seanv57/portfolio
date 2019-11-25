function toggleClass() {
  let menu = document.querySelector(".menu");
  menu.classList.toggle("toggleCls");
}

let burger = document.querySelector(".icon");

burger.addEventListener("click", toggleClass);
