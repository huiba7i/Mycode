function init() {
  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }

  // http://127.0.0.1:80/deal/data
  var url = 'http://127.0.0.1:80/deal/data';
  xhr.open('post', url, true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  // xhr.send();
  xhr.send('id=1001');

  function callback() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var result = xhr.responseText;
      console.log(result);
      var objArr = JSON.parse(result);
      console.log(objArr)
      updateTable(objArr);
    }
  }
  xhr.onreadystatechange = callback;
}

function delStudent(stuid) {
  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }
  var url = 'http://127.0.0.1:80/deal/delete?stuid=' + stuid;
  xhr.open('get', url, true);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var result = xhr.responseText;
      console.log(result);
      var objArr = JSON.parse(result);
      console.log(objArr)
      updateTable(objArr)
    }
  }
}

function updateTable(objArray) {
  var table = document.getElementById('stuTable');
  for (var i = 0; i < objArray.length; i++) {
    var stu = objArray[i];
    console.log(stu);
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    td1.innerHTML = stu.stuid;
    var td2 = document.createElement('td');
    td2.innerHTML = stu.name;
    var td3 = document.createElement('td');
    td3.innerHTML = stu.sex;
    var td4 = document.createElement('td');
    td4.innerHTML = stu.age;
    var td5 = document.createElement('td');
    td5.innerHTML = '<input type="button" value="删除" onclick="delStudent(' + stu.stuid + ')">'
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    table.appendChild(tr);
  }
}