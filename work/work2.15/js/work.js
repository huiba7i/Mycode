function delRow(rowId) {    //删除行
    //获取行索引
    var rowI = document.getElementById(rowId).rowIndex;
    document.getElementById("order").deleteRow(rowI);
}

//添加行
function addRow() {
    var tableOrder = document.getElementById("order");  //表格
    var rowIn = tableOrder.rows.length - 1;     //添加行所在的行索引
    console.log(rowIn);
    var newRow = tableOrder.insertRow(rowIn);   //添加行
    newRow.id = "del" + rowIn;                  //给添加的行添加ID
    var cell0 = newRow.insertCell(0);       //第一列
    cell0.innerHTML = "玫瑰保湿睡眠面膜" + rowIn;
    var cell1 = newRow.insertCell(1);       //第二列
    cell1.innerHTML = 5 + rowIn;
    var cell2 = newRow.insertCell(2);       //第三列
    cell2.innerHTML = '¥' + (40 + rowIn);
    var cell3 = newRow.insertCell(3);       //第四列

    //第四列内容    \转义符
    cell3.innerHTML = "<input type='button' value='删除' onclick=\"delRow('" + newRow.id + "')\"/>";
    cell3.innerHTML += "<input type='button' value='修改' onclick=\"editRow('" + newRow.id + "')\"/>";
}

//修改该行内容
function editRow(id) {
    var cells = document.getElementById(id).cells;
    var cellsText0 = cells[0].innerHTML;
    var cellsText1 = cells[1].innerHTML;
    var cellsText2 = cells[2].innerHTML;
    cells[0].innerHTML = "<input class = 'cell1' type='text' value='" + cellsText0 + "'/>";
    cells[1].innerHTML = "<input class = 'cell2' type='text' value='" + cellsText1 + "'/>";
    cells[2].innerHTML = "<input class = 'cell3' type='text' value='" + cellsText2 + "'/>";
    cells[3].lastChild.value = "确定";      //点击修改时改变给确定
    cells[3].lastChild.setAttribute("onclick", "ok('" + id + "')"); //添加确定方法
}
//确认
function ok(id) {
    var cells = document.getElementById(id).cells;
    cells[0].innerHTML = cells[0].lastChild.value;
    cells[1].innerHTML = cells[1].lastChild.value;
    cells[2].innerHTML = cells[2].lastChild.value;
    //判断数量列的内容
    if (isNaN(cells[1].innerHTML)) {
        alert("数量只能为数字！");
        cells[0].innerHTML = "<input type='text'  class = 'cell1' value='" + cells[0].innerHTML + "'/>";
        cells[1].innerHTML = "<input type='text'  class = 'cell2' value='" + cells[1].innerHTML + "'/>";
        cells[2].innerHTML = "<input type='text'  class = 'cell3' value='" + cells[2].innerHTML + "'/>";
    } else {
        if (cells[1].innerHTML < 1) {
            alert("数量不能小于0");
            cells[0].innerHTML = "<input type='text' class = 'cell1' value='" + cells[0].innerHTML + "'/>";
            cells[1].innerHTML = "<input type='text' class = 'cell2' value='" + cells[1].innerHTML + "'/>";
            cells[2].innerHTML = "<input type='text' class = 'cell3' value='" + cells[2].innerHTML + "'/>";
        } else {
            cells[3].lastChild.value = "修改";
            cells[3].lastChild.setAttribute("onclick", "editRow('" + id + "')");
        }
    }
}