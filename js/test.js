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
var btn = document.querySelector("#pop_but");
var btn1 = document.querySelector("#pop_but1");
var btn2 = document.querySelector("#pop_but2");
var close = document.querySelector(".popup__close");
 
// for (let index = 0; index < btn.length; index++) {
btn.addEventListener("click", function () {
    // modal.style.display = "block";
    modal.style.opacity = 1;
    modal.style.visibility = "visible";
});
btn1.addEventListener("click", function () {
    // modal.style.display = "block";
    modal.style.opacity = 1;
    modal.style.visibility = "visible";
});
btn2.addEventListener("click", function () {
    // modal.style.display = "block";
    modal.style.opacity = 1;
    modal.style.visibility = "visible";
});
// }

close.addEventListener("click", function () {
    // modal.style.display = "block";
    modal.style.opacity = 0;
    modal.style.visibility = "hidden";
});

window.onclick = function (event) {
    if (event.target == modal) {
        // modal.style.display = "none";
        modal.style.opacity = 0;
        modal.style.visibility = "hidden";
    }
}