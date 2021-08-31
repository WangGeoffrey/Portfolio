var index_1 = 0;
var index_2 = 0;

window.onload = function() {
  cycle_1();
}

function cycle_1() {
  var i;
  var slides = document.getElementsByClassName("imgs_1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  index_1++;
  if (index_1 > slides.length) {index_1 = 1}  
  slides[index_1-1].style.display = "block";  
  setTimeout(cycle_2, 2000);
}

function cycle_2() {
  var i;
  var slides = document.getElementsByClassName("imgs_2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  index_2++;
  if (index_2 > slides.length) {index_2 = 1}    
  slides[index_2-1].style.display = "block";  
  setTimeout(cycle_1, 2000);
}