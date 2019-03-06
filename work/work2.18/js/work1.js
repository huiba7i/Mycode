function popWindow() {
    open("newindex.html")
}
function popNewWindow() {
    open("newindex.html", 'work', 'width = 700px,height = 450px,toolbar=no,menubar = no');
}
function fullShow(){
    document.documentElement.webkitRequestFullscreen();
}
function popConfirm(){
    var affirm =  confirm("确认框");
    if(affirm == true){
        alert('点击了确定');
    }else{
        alert('点击了取消');
    }
}