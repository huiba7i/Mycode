var myImg = document.getElementById("myImg");
var myLi = document.getElementsByTagName("li");

for (var k = 0; k < myLi.length; k++) {
    myLi[k].style.background = "blue";
}
myLi[0].style.background = "white";

var cont = 0;
var rake;
function play() {
    function changeCb() {
        cont++;
        for (var i = 0; i < myLi.length; i++) {
            myLi[i].style.background = "blue";
        }
        myLi[cont - 1].style.background = "white";
        myImg.src = "imgs/work" + cont + ".jpg";
        if (cont == 4) {
            cont = 0;
        }
    }
    rake = setInterval(changeCb, 1200);
}
for (var l = 0; l < myLi.length; l++) {
    myLi[l].index = l;
    myLi[l].onmouseover = function () {
        for (var n = 0; n < myLi.length; n++) {
            myLi[n].style.background = "blue";
        }
        this.style.background = "white";
        var num = Number(this.innerText);
        myImg.src = "imgs/work" + num + ".jpg";
        clearInterval(rake);
    }
    myLi[l].onmouseout = function () {
        cont = this.index;
        console.log(cont)
        play();
    }
}