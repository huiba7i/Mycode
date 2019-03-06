function addRow(){
    var perTable = document.getElementById('person');
    // 向表格指定位置添加行 0-第一行,-1 - 末尾添加
    var tr = perTable.insertRow(-1);
    // 向行中指定位置添加列 0-第一列,-1 - 末尾添加
    var td0 = tr.insertCell(-1);
    td0.innerHTML = '1002'; // 设置标签的html内容

    tr.insertCell(-1).innerHTML = '李四';
    tr.insertCell(-1).innerHTML = 21;
    tr.insertCell(-1).innerHTML = '男';
    tr.insertCell(-1).innerHTML = 'java开发';
    tr.insertCell(-1).innerHTML = 6500;
    var tdOp = tr.insertCell(-1);
    tdOp.innerHTML = '<a href="javascript:void(0)" onclick="deleteTr(event)">删除</a><a href="javascript:void(0)">修改</a>';

}

function deleteTr(e){
    var tr = e.target.parentNode.parentNode;
    var perTable = document.getElementById('person');
    // perTable.deleteRow(0);
    perTable.deleteRow(tr.rowIndex);
}

