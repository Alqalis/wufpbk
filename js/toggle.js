var profile = document.querySelector(".profil");
var pay = document.querySelector(".payment");
var register = document.querySelector(".c_registration");
var set = document.querySelector(".setting");

    profile.addEventListener("click", () =>{
        profile.classList.toggle("active");
    })

    pay.addEventListener("click", () =>{
        pay.classList.toggle("active");
    })

    register.addEventListener("click", () =>{
        register.classList.toggle("active");
    })

    set.addEventListener("click", () =>{
        set.classList.toggle("active");
    })