// Menu navigation
function toggleClass() {
  let menu = document.querySelector(".menu");
  menu.classList.toggle("toggleCls");
}

let burger = document.querySelector(".icon");

burger.addEventListener("click", toggleClass);

topbutton = document.getElementById("backToTop");

//Back to top button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
