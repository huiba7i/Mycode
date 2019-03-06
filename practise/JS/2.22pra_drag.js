//源元素事件
function dargStart(e) {
    // dataTransfer是事件对象(event)的一个属性, 可以向目标元素拖放时传递数据(字符串)
    var tra = e.dataTransfer;
    tra.setData("Text", e.target.id);
    console.log("开始拖动");
}

// function drag() {
//     console.log("拖动ing……");
// }

// function dragEnd() {
//     console.log("拖动结束");
// }

//目标元素事件
// function dragEnter() {
//     console.log("进入目标区域")
// }

function dragOver(e) {
    e.preventDefault();
    console.log("目标区域拖动ing……");
}

function drop(e) {
    e.preventDefault();
    var id = e.dataTransfer.getData("Text");    //获得源元素的ID
    //通过ID获取源元素
    var sourceObj = document.getElementById(id);
    e.target.appendChild(sourceObj);
    console.log("已投放");
}

// function dragLeave() {
//     console.log("已离开目标区域")
// }
