function addTr(){
  var table = document.getElementById('homeworkTab');
  var tr = table.insertRow(-1); // 添加行
  tr.offsetHeight = "50px";
  var td0 = tr.insertCell(-1); // 添加td
  td0.innerHTML = '王五';
  td1 = tr.insertCell(-1); // 添加td
  td1.innerHTML = 100;
  tr.insertCell(-1).innerHTML = 100;
  tr.insertCell(-1).innerHTML = 99;
  tr.insertCell(-1).innerHTML = 98;
}

function deleteTr(){
  var table = document.getElementById('homeworkTab');

  // 删除指定的行
  // table.deleteRow(0);// 根据行的索引位置删除 0-第一行,...
  // table.deleteRow(1);

  // 删除所有的行
  // console.log(table.rows);
  for(var i=table.rows.length-1; i>=0; i--){
    table.deleteRow(i);
  }
}