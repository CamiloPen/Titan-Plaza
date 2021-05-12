var body   = document.getElementById("body"),
    modal  = document.getElementById("myModal"),
    add    = document.getElementById("Picture"),
    modal1 = document.getElementById("Pic"),
    btn    = document.getElementById("myBtn"),
    check  = document.getElementById("check"),
    mod    = document.getElementById("modPoints"),
    x      = document.getElementById("menu"),
    acept  = document.getElementById("acept"),
    dot    = document.getElementById("dot"),
    head   = document.getElementById("head"),
    grid   = document.getElementById("grid"),
    timenu2= document.getElementById("time-menu2"),
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

$(document).ready(function(){
  $("#menu-icon").click(function(){
      $("#menu").slideToggle();
    if (body.style.overflow === "hidden") {
      body.style.overflow = "auto";
      x.className= "head__menu";
      setTimeout(function(){ 
        head.style.height = "77px";
        head.style.overflow = "hidden";
      }, 400);
    } else {
      body.style.overflow = "hidden";
      x.style.top = "10px"; 
      head.style.overflowX = "hidden";
      head.style.overflowY = "auto";
      head.style.height = "100%";
    }
    
  });

  $("#time").click(function(){
      $("#time-menu").slideToggle();
  });

  $("#time2").click(function(){
    timenu2.style.position = "relative";
    timenu2.style.top = "0";
    $("#time-menu2").slideToggle();
  });

  $("#store").click(function(){
    $("#str").slideToggle();
  });

  $("#service").click(function(){
    $("#ser").slideToggle();
  });

  $("#filtros").click(function(){
    $("#filtro").slideToggle();
  });

  $("#one").click(function(){
    $("#tienda").slideToggle();
  });

  $("#two").click(function(){
    $("#cate").slideToggle();
  });

  $("#three").click(function(){
    $("#order").slideToggle();
  });

  $("#fil").click(function(){
    $("#modmenu1").slideToggle();
    body.style.overflow = "hidden";
  });

  $("#Closeprom1").click(function(){
    $("#modmenu1").slideToggle();
    body.style.overflow = "auto";
  });

  $("#ordena").click(function(){
    $("#modmenu2").slideToggle();
    body.style.overflow = "hidden";
  });

  $("#Closeprom2").click(function(){
    $("#modmenu2").slideToggle();
    body.style.overflow = "auto";
  });

  $("#mapa").click(function(){
    $("#menu-map").slideToggle();
  });
});