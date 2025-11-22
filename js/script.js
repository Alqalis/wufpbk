    var form_one = document.querySelector(".form_one .form_id");
    var form_two = document.querySelector(".form_two .form_id");
    var step = document.querySelector(".step");
    
    var next = document.querySelector(".next");
    var Previous = document.querySelector(".Previous");

    // form_one.style.zIndex="1";

    next.addEventListener("click", function (s){
        form_one.style.left="-500px";
        form_two.style.left="-385px";
        step.style.width= "100%"
    })
    Previous.addEventListener("click", function (s){
        form_one.style.left="0px";
        form_two.style.left="450px";
        step.style.width= "10%"
    })
