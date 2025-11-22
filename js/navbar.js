var show = document.querySelector("#show");
var nav = document.querySelector("nav");
var pos = document.querySelector(".pos");

var collapse = document.querySelector("#collapse");
collapse.style.display = "none";


show.addEventListener("click", function (){
    nav.style.width = "250px"
    pos.style.left = "0px"
    show.style.display = "none"
    collapse.style.display = "inline-block"
})

collapse.addEventListener("click", function (){
    nav.style.width = "50px"
    pos.style.left = "-400px"
    collapse.style.display = "none"
    show.style.display = "inline-block"
})