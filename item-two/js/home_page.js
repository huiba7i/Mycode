var roolLi = document.getElementsByClassName("roll_li"); //滚动图的 li
var n = 0;
roolLi[0].style.background = "orange";      //改变第一个 li背景色
var rollImgDiv = document.getElementById("roll_img_div"); //改变背景图的div
//图片轮播
var play;
function start() {
    n++;
    for (var i = 0; i < roolLi.length; i++) {
        roolLi[i].style.background = "white";
    }
    if (n >= 6) {
        n = 0;
    }
    rollImgDiv.style.background = "url(images/" + (n + 1) + ".jpg) no-repeat";
    roolLi[n].style.background = "orange";
}
play = setInterval(start, 1200);
//鼠标悬停停止轮播
function stopRoll(index) {
    for (var i = 0; i < roolLi.length; i++) {
        roolLi[i].style.background = "white";
    }
    roolLi[Number(index) - 1].style.background = "orange";
    rollImgDiv.style.background = "url(images/" + Number(index) + ".jpg) no-repeat";
    clearInterval(play);
}
// 鼠标离开开始轮播
function startRoll(index) {
    play = setInterval(start, 1200);
    n = index - 1;
}

//最新上架选项卡
var new_book = document.getElementsByClassName("new_book"); //书架
new_book[0].style.display = "block";
for (var l = 1; l < new_book.length; l++) {
    new_book[l].style.display = "none";
}
var bookClass = document.getElementsByClassName("book_class"); //书类
bookClass[0].style.background = "url('images/dd_book_bg2.jpg') no-repeat";
for (var j = 0; j < bookClass.length; j++) {
    bookClass[j].index = j;
    bookClass[j].onclick = function () {
        for (var n = 0; n < bookClass.length; n++) {
            new_book[n].style.display = "none";
            bookClass[n].style.background = "url('images/dd_book_bg1.jpg') no-repeat";
        }
        bookClass[this.index].style.background = "url('images/dd_book_bg2.jpg') no-repeat";
        new_book[this.index].style.display = "block";
    }
}

//书勋快递
var roolstrLi = document.getElementById("roolstrli");  //书讯快递 li
var cont = 0;
var rool;
// 浏览器加载完成时添加事件
function init() {
    function rollStr() {
        cont -= 2;
        if (cont == -196) {
            cont = 0;
        }
        roolstrLi.style.marginTop = cont + "px";
    }
    rool = setInterval(rollStr, 50);
}
//鼠标移出开始滚动
function rollStart() {
    init();
}
//鼠标移进停止
function rollStop() {
    clearInterval(rool);
}

//关闭广告
var advert = document.getElementById("advert");
var close = document.getElementById("close");
close.onclick = function () {
    advert.style.display = "none";
}