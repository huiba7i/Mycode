function changeColor(){
    var p = document.getElementsByTagName("p")
    var str = p[0].innerHTML;
    var strRed =  str.replace(/爱/g,"<span style = 'color : red'>爱</span>");
    p[0].innerHTML = strRed;
}