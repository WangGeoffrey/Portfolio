var wait = 3000; //Time interval between cycles
var index_1 = 0;
var index_2 = 0;
var images_1 = document.getElementsByClassName("imgs_1");
var images_2 = document.getElementsByClassName("imgs_2");

var lastScrollTop = 0;
var navActive = true;

window.onload = function() {
  order(images_1);
  order(images_2);
  setTimeout(cycle_1, wait);
}

window.addEventListener("scroll", function () {
  var st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) { //Down scroll
    if (navActive) {
      this.document.getElementsByTagName("nav")[0].style.transform = "translate(0, -100%)";
      navActive = !navActive;
    }
  }
  else { //Up scroll
    this.document.getElementsByTagName("nav")[0].style.transform = "translate(0, 0)";
    if (!navActive) {
      navActive = !navActive;
    }
  }
  lastScrollTop = st <= 0 ? 0 : st;
}, false);

function order(images) {
  var i;
  for (i = 0; i < images.length; i++ ){
    images[i].style.zIndex = images.length - i;
  }
}

function cycle_1() {
  images_1[index_1].style.opacity = 0;
  index_1 = (index_1 + 1) % images_1.length;
  images_1[index_1].style.opacity = 1;
  setTimeout(cycle_2, wait);
}

function cycle_2() {
  images_2[index_2].style.opacity = 0;
  index_2 = (index_2 + 1) % images_2.length;
  images_2[index_2].style.opacity = 1;
  setTimeout(cycle_1, wait);
}
