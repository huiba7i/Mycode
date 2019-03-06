function sendAjax(){
  // 1.创建XMLHttpRequest对象
  var xhr;
  if(window.XMLHttpRequest){ // ie7+ chrome firefox
    xhr = new XMLHttpRequest();
  }else{ // ie7 ie6 ie5
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }
  console.log(xhr);

  console.log(xhr.readyState); // 0- 未初始化,还未调用open()方法
  // 2.向服务器端发送异步请求
  // 规定请求的url,请求方式以及是否是异步请求
  // 参数1:请求方式get/post, 参数2:url, 参数3:boolean数据 true-异步 false-同步
  xhr.open('get', 'data/file.txt', true);
  console.log(xhr.readyState); // 1-正在加载中
  // 发送请求
  xhr.send();


  // 3.获得服务器端响应的数据
  // 根据响应处理状态的变化执行处理任务, 当状态发生变化时触发事件onreadystatechange
  xhr.onreadystatechange = function(){
    console.log(xhr.readyState); // 2 3 4
    if(xhr.readyState==4 && xhr.status == 200){
      console.log('响应完成');
      var text = xhr.responseText; // 获得响应的内容
      console.log('响应的内容:', text);
      // 通过DOM局部更新html中的内容
      var con = document.getElementById('content');
      con.value = text;
    }
  };
}