// 当页面加载完成时, 去服务器端请求所有的学生数据
function init(){
  // 1.创建XMLHttpRequest对象
  var xhr;
  if(window.XMLHttpRequest){
    xhr = new XMLHttpRequest();
  }else{
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }

  // 2.向服务器发送异步请求（？--）
  xhr.open('get', 'data/student.json?id=100&username=zhs', true);
  // xhr.open('post', 'data/student.json', true);
  // 如果是post方式的提交, 必须设置请求头信息
  // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  // xhr.send("id=100"); // 携带表单的请求参数数据
  xhr.send();

  // 3.获得响应内容
  // 回调函数
  function callback(){
    if(xhr.readyState==4 && xhr.status==200){
      var jsonText = xhr.responseText; // 响应的是json格式文本 '{"stuid": 1,"name": "张三","sex": "男","age": 18}'
      console.log(jsonText, typeof jsonText);
      // 将json格式的文本解析成js对象
      // (1)早期eval()  --（）要加上
      var obj1 = eval('('+jsonText+')');
      console.log(obj1, obj1.stuid, obj1.name);
      
      // (2)全局对象JSON.parse()
      var obj2 = JSON.parse(jsonText);
      console.log(obj2, obj2.stuid, obj2.name);

      // 通过DOM更新html中部分内容(表格中的数据)
      var table = document.getElementById('stuTable');
      var tr = table.insertRow(-1);
      tr.insertCell(-1).innerHTML = obj2.stuid;
      tr.insertCell(-1).innerHTML = obj2.name;
      tr.insertCell(-1).innerHTML = obj2.sex;
      tr.insertCell(-1).innerHTML = obj2.age;
    }
  }
  xhr.onreadystatechange = callback;
}