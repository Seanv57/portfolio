// Menu navigation
const menu = document.querySelector(".menu");
const menuItems = document.querySelector(".menu-items");
const links = document.querySelectorAll(".menu-items li");
const work = document.querySelector(".work");

menu.addEventListener("click", () => {
  menu.classList.toggle("menux");
  menuItems.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

//Back to top button
const topButton = document.getElementById("backToTop");

if (topButton != null) {
 window.onscroll = function() {scrollFunction()};
}

function scrollFunction() {
 if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
   topButton.style.display = "block";
 } else {
   topButton.style.display = "none";
 }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
 document.body.scrollTop = 0;
 document.documentElement.scrollTop = 0;
}
