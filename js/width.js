
window.onload = screen;
window.onresize = screen;

function screen(){
    width = window.innerWidth;
    document.getElementById("size").innerHTML = "size " + width + " PX";
}