var body   = document.getElementById("body"),
    modal  = document.getElementById("myModal"),
    add    = document.getElementById("Picture"),
    modal1 = document.getElementById("Pic"),
    btn    = document.getElementById("myBtn"),
    timenu = document.getElementById("time-menu"),
    check  = document.getElementById("check"),
    mod    = document.getElementById("modPoints"),
    x      = document.getElementById("menu"),
    icon   = document.getElementById("menu-icon"),
    acept  = document.getElementById("acept"),
    dot    = document.getElementById("dot"),
    head   = document.getElementById("head"),
    grid   = document.getElementById("grid"),
    str    = document.getElementById("store"),
    sho    = document.getElementById("tienda"),
    cate   = document.getElementById("cate"),
    or     = document.getElementById("order"),
    one    = document.getElementById("one"),
    two    = document.getElementById("two"),
    three  = document.getElementById("three"),
    mapa   = document.getElementById("menu-map"),
    ser    = document.getElementById("service"),
    modme1 = document.getElementById("modmenu1"),
    modme2 = document.getElementById("modmenu2"),
    sale   = document.getElementById("sale");

btn.onclick = function() {
  modal.style.display = "flex";
  body.style.overflow = "hidden";
}

function addimg () {
  add.style.display = "flex";
  body.style.overflow = "hidden";
}

function addbill () {
  if (acept.style.display === "flex") {
    acept.style.display = "none";
  } else {
    acept.style.display = "flex";
  }
}

function opensale(s) {

  var slideIndex = 1,
      prev = document.getElementById("prev"),
      next = document.getElementById("next")
  
      sale.style.display = "flex";
      body.style.overflow = "hidden";
      showSlides(slideIndex = s)
  
      showSlides(slideIndex); 
    
    prev.onclick = function () {showSlides(slideIndex--)}
    next.onclick = function () {showSlides(slideIndex++)}
  
    function showSlides(s) {
      var i;
      var slides = document.getElementsByClassName("bill__salegrid"); 
      
      if (slideIndex == 1 ) {
        prev.style.display = "none";
      } else {
        prev.style.display = "block";
      }
  
      if (slideIndex == 4 ) {
        next.style.display = "none";
      } else {
        next.style.display = "block";
      }
  
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
    
      slides[slideIndex-1].style.display = "grid";
    }  
}

function myFunction() {

  if (x.className === "head__menu") {
    x.className += " head__menushow";
    icon.className = "icon-cross";
    body.style.overflow = "hidden";
    head.className += " head__movil";
  } else {
    x.className = "head__menu"
    body.style.overflow = "auto";
    head.className = "head";
    icon.className = "icon-menu";
  }
}

function time() {
  if (timenu.style.display === "block") {
    timenu.style.display = "none";
  } else {
    timenu.style.display = "block";
  }
}