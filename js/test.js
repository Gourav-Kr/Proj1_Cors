check = document.getElementById("navi-toggle");
attri = document.querySelectorAll(".navigation__item")
console.log(attri)
for (let index = 0; index < attri.length; index++) {
    
    attri[index].addEventListener("click", function () {
        console.log(check.checked)
        check.checked = false;
    });
}

// attri[0].addEventListener("click",function () {
//     console.log(check.checked)
//     check.checked = false;
// });

var modal = document.getElementById("popup");
var btn = document.getElementById("pop_but");

btn.addEventListener("click", function () {
    // modal.style.display = "block";
    modal.style.opacity= 1;
    modal.style.visibility = "visible";
});
  

window.onclick = function(event) {
    if (event.target == modal) {
        // modal.style.display = "none";
        modal.style.opacity= 0;
        modal.style.visibility = "hidden";
    }
  }