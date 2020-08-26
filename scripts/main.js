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

// Parallax
window.addEventListener('scroll', function(e) {
  const target = document.querySelectorAll('.parallax');

  var length = target.length;
  var i;
  for (i = 0; i < length; i++) {
    var pos = window.pageYOffset * target[i].dataset.rate;

    if(target[i].dataset.direction === 'vertical') {
      target[i].style.transform = 'translate3d(0px, '+pos+'px, 0px)';
    } else {
      var posX = window.pageYOffset * target[i].dataset.ratex;
      var posY = window.pageYOffset * target[i].dataset.ratey;

      target[i].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)';
    };
  }
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
