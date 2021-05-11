var extra = document.querySelectorAll(".More"),
    mbtn = document.getElementById("more");

function more1() {
    extra.forEach(plus => {
        plus.style.display = "block";
    });
    mbtn.style.display = "none";
}