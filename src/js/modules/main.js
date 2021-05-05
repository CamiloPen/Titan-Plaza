// MODAL BUTTON

function openform(evt, cityName) {

  var i, modal__tabcontent, modal__tablink;

  modal__tabcontent = document.getElementsByClassName("modal__tabcontent");
  for (i = 0; i < modal__tabcontent.length; i++) {
    modal__tabcontent[i].style.display = "none";
  }

  modal__tablink = document.getElementsByClassName("modal__tablink");
  for (i = 0; i < modal__tablink.length; i++) {
    modal__tablink[i].style.color = "#B3B3B3";
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.style.color = "#903392";
}

document.getElementById("Open").click();

function look() {
  var x = document.getElementById("search");

  if (x.className === "head__menusearch") {
    x.className += " head__menushow";
  } else {
    x.className = "head__menusearch";
  }
}