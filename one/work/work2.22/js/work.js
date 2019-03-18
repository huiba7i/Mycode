//给元素添加可被移动属性
window.onload = function () {
    var liList = document.getElementsByTagName("li");
    for (var i = 0; i < liList.length; i++) {
        liList[i].draggable = "true";
    }
}

//项目开始移动的方法
function dragStart(e) {
    var item = e.dataTransfer;
    item.setData("Text", e.target.className);
}

//收藏夹允许拖动
function dragOver(e) {
    e.preventDefault();
}

//收藏夹放置
function drop(e) {
    e.preventDefault();
    var classname = e.dataTransfer.getData("Text");
    var itemObj = document.getElementsByClassName(classname);
    var nodeObj = itemObj[0].cloneNode(true);
    //判断一项项目有几个，如果总数超过两个就不再允许放置
    if(itemObj.length == 2){
        alert("已收藏该项目！");
        return;
    }
    e.target.appendChild(nodeObj);
    console.log(itemObj.length);
}

//删除项目
function dleItem(e) {
    e.preventDefault();
    var left = document.getElementById("left");
    var classname = e.dataTransfer.getData("Text");
    var itemobj = left.getElementsByClassName(classname)[0];
    left.removeChild(itemobj);
    console.log(itemobj)
}
