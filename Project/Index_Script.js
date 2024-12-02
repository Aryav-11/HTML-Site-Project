/*Header Websites My Old Website Work*/
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content  navbar work
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }*/
/*Other Work Here Sliding Work */
  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
//Iamge work here three images function work here

function workFunction() {
  var click_me = document.getElementById('clik');
  if (click_me.style.display == "none") {
    click_me.style.display = "block";
  } else {
    click_me.style.display = "none";
    
  }
}

function carFunction() {
var op = document.getElementById('lik')
if (op.style.display == "none") {
  op.style.display = "block";
} else {
  op.style.display = "none";
}

}
function cherFunction() {
  var p = document.getElementById('ik')
  if (p.style.display == "none") {
    p.style.display = "block";    
  } else {
    p.style.display = "none";
  }
}