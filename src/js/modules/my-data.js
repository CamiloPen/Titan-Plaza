checkboxCustom('.data__checkbox');

function checkboxCustom(selector) {
  let labels2 = document.querySelectorAll(selector);
  
  labels2.forEach(label2 => {
    const forCheck = label2.getAttribute('for');
    const checkBox = document.querySelector(`#${forCheck}`);
  
    label2.addEventListener('click', function () {
      if (!checkBox.checked) {
        label2.classList.add('data__checkboxchecked');
      } else {
        label2.classList.remove('data__checkboxchecked');
      }
    });
  });
}

checkprom('.prom__flexcheck');

function checkprom(select) {
  let labprom = document.querySelectorAll(select);
  
  labprom.forEach(labprom => {
    const forChe = labprom.getAttribute('for');
    const checkBox = document.querySelector(`#${forChe}`);
  
    labprom.addEventListener('click', function () {
      if (!checkBox.checked) {
        labprom.classList.add('prom__flexchecked');
        labprom.style.color = "#903392";
      } else {
        labprom.classList.remove('prom__flexchecked');
        labprom.style.color = "#292C33";
      }
    });
  });
}

$("#file").change(function() {
    filename = this.files[0].name
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
  