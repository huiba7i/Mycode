window.onload = function () {
    var n = document.getElementById("nav");     //包含书分类的容器
    var book = n.getElementsByTagName("li");      //书名分类按钮
    var ol = document.getElementsByTagName("ol");       //书名列表数组
    book[0].className = "navLi";     //改变第一个分类的类名让其背景颜色高光显示
    for (var i = 1; i < ol.length; i++) {
        ol[i].style.display = "none";      //隐藏后两个书名列表
    }
    for (var j = 0; j < book.length; j++) {
        book[j].index = j;      //给分类添加index属性等于其索引值方便后续引用
        console.log(book[j].index)
        //添加点击事件
        book[j].onclick = function () {
            for (var n = 0; n < book.length; n++) {
                book[n].className = "book";     
                this.className = "navLi";
                ol[n].style.display = "none";
                ol[this.index].style.display = "block";
            }
        }
    }
}
