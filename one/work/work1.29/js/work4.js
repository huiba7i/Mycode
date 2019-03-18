var all_c = document.getElementById("all").style;
var conten = document.getElementById("content").style;
function changSkin(){
    all_c.backgroundImage= "url(imgs/bg.gif)";
    all_c.backgroundSize = "auto";
    conten.backgroundColor  = "#5B8888";
    conten.border = "3px solid white";
}
function changSkin_t(){
    all_c.backgroundImage= "url(imgs/bg1.jpg)";
    all_c.backgroundSize = "100%";
    conten.backgroundColor  = "rgb(244, 250, 192)";
    conten.border = "0";
}