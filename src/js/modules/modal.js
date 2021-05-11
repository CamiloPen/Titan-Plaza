document.getElementById("Open").click();

checkboxCustomized('.store__check');

function checkboxCustomized(selector) {
  let labels = document.querySelectorAll(selector);
  
  labels.forEach(label => {
    const forCheck = label.getAttribute('for');
    const checkBox = document.querySelector(`#${forCheck}`);
  
    label.addEventListener('click', function () {
      if (!checkBox.checked) {
        label.classList.add('checked');
        label.style.color = "#903392";
      } else {
        label.classList.remove('checked');
        label.style.color = "black";
      }
    });
  });
}

function changeColor(button) {
    if (button.style.color =="red") {
        button.style.color = "#EBEBEB";
    }else {
        button.style.color = "red";
    }
}

function menu__info() {
  var x = document.getElementById("menuInfo");

  if (x.className === "bill__personmenu") {
    x.className = "bill__personmenuSH";
  } else {
    x.className = "bill__personmenu";
  }
}