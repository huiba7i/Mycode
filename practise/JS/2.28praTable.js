var cont = 0;
var table = document.getElementById("studentTba");

//添加表单行
function addTr() {
    cont++;
    // var tbody = table.getElementsByTagName("tbody")[0];
    // var tr = document.createElement("tr");
    // tbody.appendChild(tr);
    // var td1 = document.createElement("td");
    // td1.innerHTML = cont;
    // var td2 = document.createElement("td");
    // td2.innerHTML = "张三"+cont;
    // var td3 = document.createElement("td");
    // td3.innerHTML = 10;
    // var td4 = document.createElement("td");
    // td4.innerHTML = "男";
    // var td5 = document.createElement("td");
    // td5.innerHTML = "<input type = 'button' value = '删除'>";
    // tr.appendChild(td1);
    // tr.appendChild(td2);
    // tr.appendChild(td3);
    // tr.appendChild(td4);
    // tr.appendChild(td5);
    var newTr = table.insertRow(-1);
    newTr.insertCell(-1).innerHTML = cont;
    newTr.insertCell(-1).innerHTML = "张三" + cont;
    newTr.insertCell(-1).innerHTML = 16;
    newTr.insertCell(-1).innerHTML = "男";
    newTr.insertCell(-1).innerHTML = "<input type = 'button' value = '删除' onclick = 'deleteStudent(this)'>"
}


function getTHreeStudent() {
    console.log("学号:", table.rows[3].cells[0].innerHTML);
    console.log("姓名:", table.rows[3].cells[1].innerHTML);
    console.log("年龄:", table.rows[3].cells[2].innerHTML);
    console.log("性别:", table.rows[3].cells[3].innerHTML);
}

//删除行
function deleteStudent(i) {
    var tbody = document.getElementsByTagName("tbody")[0];
    // var tr = i.parentNode.parentNode;
    // tbody.removeChild(tr);
    var trIndex = i.parentNode.parentNode.rowIndex; //rowIndex -- 获取tr在表格中所在的行数(索引值 + 1 )
    console.log(trIndex);
    tbody.deleteRow(trIndex);
}

//修改表单内容
function setStudent() {
    var tbody = document.getElementsByTagName("tbody")[0];
    tbody.rows[2].cells[1].innerHTML = "李四";
}

//遍历表单
function getAllStudent() {
    var tbody = document.getElementsByTagName("tbody")[0];
    var tr = tbody.rows;
    for (var i = 1; i < tr.length; i++){
        // console.log("学号：",tbody.rows[i].cells[0].innerHTML);
        // console.log("姓名：",tbody.rows[i].cells[1].innerHTML);
        // console.log("年龄：",tbody.rows[i].cells[2].innerHTML);
        // console.log("性别：",tbody.rows[i].cells[3].innerHTML);
        console.log(tbody.rows[i].innerText);
        console.log(table.tBodies[0].rows[i].innerText)     //tBodies--获取表单中的 tbody(为数组)
    }
}