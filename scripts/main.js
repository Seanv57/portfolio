// Menu navigation
const menuSlide = () => {
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('.menu-items');
  const menuItems = document.querySelectorAll('.menu-items li');

  menu.addEventListener('click', () => {
    nav.classList.toggle('menu-active');
    menuItems.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
          link.style.animation = `menuItemFade 0.5s ease forwards ${index / 5 + 0.3}s`;
        }
    });
    menu.classList.toggle('toggle');
  });
}

menuSlide();

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
