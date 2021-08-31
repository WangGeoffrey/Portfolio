var index_1 = 0;
var index_2 = 0;
var images_1 = document.getElementsByClassName("imgs_1");
var images_2 = document.getElementsByClassName("imgs_2");

window.onload = function() {
  cycle_1();
}

function cycle_1() {
  images_1[(index_1 + images_1.length - 1) % images_1.length].style.display = "none";
  images_1[index_1].style.display = "block";
  index_1 = (index_1 + 1) % images_1.length;
  setTimeout(cycle_2, 2000);
}

function cycle_2() {
  images_2[(index_2 + images_2.length - 1) % images_2.length].style.display = "none";
  images_2[index_2].style.display = "block";
  index_2 = (index_2 + 1) % images_2.length;
  setTimeout(cycle_1, 2000);
}
