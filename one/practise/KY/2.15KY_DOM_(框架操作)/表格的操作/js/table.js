var stuid = 1;
function addStudent(){
  // 获得学生表格
  var table = document.getElementById("studentTable");
  // 创建tr
 /*  var tbody = table.getElementsByTagName('tbody')[0];
  var tr = document.createElement('tr');
  tbody.appendChild(tr); // 向tbody中添加tr */

  // 向表格中添加行,并返回新添加的行
  var tr = table.insertRow(-1);

  // 创建td
  /* var td1 = document.createElement('td');
  td1.innerHTML = stuid; 
  var td2 = document.createElement('td');
  td2.innerHTML = '张三'+stuid;
  stuid++;
  var td3 = document.createElement('td');
  td3.innerHTML = '男';
  var td4 = document.createElement('td');
  td4.innerHTML = 10;
  var td5 = document.createElement('td');
  td5.innerHTML = '<input type="button" value="删除">';
  // 向tr中添加td
  // tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);*/

  // 向行中添加列td, 并返回新添加的列
  var td1 = tr.insertCell(-1);
  td1.innerHTML = stuid;
  tr.insertCell(-1).innerHTML = '张三'+stuid;
  stuid++;
  tr.insertCell(-1).innerHTML = '男';
  tr.insertCell(-1).innerHTML = 10;
  tr.insertCell(-1).innerHTML = '<input type="button" value="删除" onclick="deleteStudent(this)">';
}
// 第3个学生的信息在表格中的第4行
function getStudent(){
  /* // 获得学生表格
  var table = document.getElementById("studentTable");
  var tbody = table.getElementsByTagName('tbody')[0];
  // 获得tbody中的第4个tr
  var tr = tbody.children[3];
  // 获得tr中前面4个td的值
  var tdList = tr.children;
  var stuid = tdList[0].innerHTML
  var name = tdList[1].innerHTML
  var sex = tdList[2].innerHTML
  var age = tdList[3].innerHTML
  console.log('学号:', stuid);
  console.log('名字:', name);
  console.log('性别:', sex);
  console.log('年龄:', age); */

  // 获得学生表格
  var table = document.getElementById("studentTable");
  // 获得表格的第4个tr
  /* var tr = table.rows[3];
  // 获得tr中前面4个td的值
  var stuid = tr.cells[0].innerHTML
  var name = tr.cells[1].innerHTML
  var sex = tr.cells[2].innerHTML
  var age = tr.cells[3].innerHTML
  console.log('学号:', stuid);
  console.log('名字:', name);
  console.log('性别:', sex);
  console.log('年龄:', age); */
  console.log('学号:', table.rows[3].cells[0].innerHTML);
  console.log('名字:', table.rows[3].cells[1].innerHTML);
  console.log('性别:', table.rows[3].cells[2].innerHTML);
  console.log('年龄:', table.rows[3].cells[3].innerHTML);

  console.log('第5行2列:', table.rows[4].cells[1].innerHTML);
}

function deleteStudent(btn){
  // 获得删除按钮所在的tr
  var tr = btn.parentNode.parentNode;

  // 先拿到tr的父元素
  var tbody = tr.parentNode;

  // 通过父元素删除子元素
  tbody.removeChild(tr);
}

function setStudent(){
  // 修改第3行第2列的值为李四
  var table = document.getElementById("studentTable");
  table.rows[2].cells[1].innerHTML = '李四'
}

function getAllStudent(){
  var table = document.getElementById("studentTable");
  var trList = table.rows; // 所有的tr数组
  for(var i=1; i<trList.length; i++){
    console.log(trList[i].cells[1].innerHTML); // 该行的第2列的内容
  }

}
