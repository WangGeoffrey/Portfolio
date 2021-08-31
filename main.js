var wait = 3000; //Time interval between cycles
var index_1 = 0;
var index_2 = 0;
var images_1 = document.getElementsByClassName("imgs_1");
var images_2 = document.getElementsByClassName("imgs_2");

window.onload = function() {
  order(images_1);
  order(images_2);
  setTimeout(cycle_1, wait);
}

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
