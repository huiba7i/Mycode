function checkAll(all) {
    var cha = document.getElementsByName("checks");
    for (var i = 0; i < cha.length; i++) {
        cha[i].checked = all.checked;
    }

}
function checkSon() {
    var all = document.getElementById("all");
    var chs = document.getElementsByName("checks");
    for (var i = 0; i < chs.length; i++){
        if(!chs[i].checked){    //如果有一个复选框没有选中，则全选不选中
            all.checked = false;
            break;      //提前结束函数
        }
        all.checked = true;
    }
}