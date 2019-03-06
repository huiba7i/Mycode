var myImg = document.getElementById("myImg");
var myLi = document.getElementsByTagName("li");

var stopTake;
function play() {
    //改变图片和圆点颜色
    var take = function () {
        if (myImg.src == "file:///D:/HTML/HTML%20xm/one/work/work2.18/imgs/work1.jpg") {
            myImg.src = "imgs/work2.jpg";
            myLi[0].style.background = "blue";
            myLi[1].style.background = "white";
        } else if (myImg.src == "file:///D:/HTML/HTML%20xm/one/work/work2.18/imgs/work2.jpg") {
            myImg.src = "imgs/work3.jpg";
            myLi[1].style.background = "blue";
            myLi[2].style.background = "white";
        } else if (myImg.src == "file:///D:/HTML/HTML%20xm/one/work/work2.18/imgs/work3.jpg") {
            myImg.src = "imgs/work4.jpg";
            myLi[2].style.background = "blue";
            myLi[3].style.background = "white";
        } else {
            myImg.src = "imgs/work1.jpg";
            myLi[3].style.background = "blue";
            myLi[0].style.background = "white";
        }
    }
    for (var i = 1; i < myLi.length; i++) {
        myLi[i].style.background = "blue";
    }
    stopTake = setInterval(take, 1500);
}
for (var j = 0; j < myLi.length; j++) {
    myLi[j].index = j;
    //鼠标移入事件  停止图片和圆点的更新
    myLi[j].onmousemove = function () {
        for (var p = 0; p < myLi.length; p++) {
            myLi[p].style.background = "blue";
        }
        var n = this.index + 1;
        this.style.background = "white";
        myImg.src = "imgs/work" + n + ".jpg";
        clearInterval(stopTake);
    }
    //鼠标移出事件，移出时重新开始更新图片和圆点
    myLi[j].onmouseout = function () {
        play();
        this.style.background = "white";
    }
}