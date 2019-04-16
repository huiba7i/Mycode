/* function sendRequest(){
  // 1. 创建 XMLHttpRequest
  let xhr = new XMLHttpRequest();
  // 2. 设置请求
  xhr.open('get', '/data/1.txt');
  // 3. 设置回调函数,获得响应的结果
  xhr.onreadystatechange = function(){
    if(xhr.readyState==4 && xhr.status==200){
      let data = xhr.responseText;
      console.log(data);
      // 回调嵌套,不利于后期维护
      $.get('/data/2.txt', function(d){
        let textDiv = document.getElementById('text');
        textDiv.innerHTML= `${data}<br/>${d}`;
      });
    }
  };

  // 4. 发送请求
  xhr.send();
} */


// 使用Promise进行异步操作
function createPromise(){
  let p = new Promise(function(resolve, reject){
    let xhr = new XMLHttpRequest();
    xhr.open('get', '/data/1.txt');
    xhr.onreadystatechange = function(){
      if(xhr.readyState==4 && xhr.status==200){
        // 操作成功
        resolve(xhr.responseText);
      }
    };
    xhr.send();
  });

  return p;
}
/* function sendRequest(){
  // 创建Promise()对象
  let p = createPromise();
  // 添加回调函数
  p.then((data)=>{
    // 处理异步操作的数据
    let textDiv = document.getElementById('text');
    textDiv.innerHTML = data;
  });
} */

// 解决回调嵌套
/* // (1)链式调用then()方法
function sendRequest(){
  let p = createPromise();
  p.then((data)=>{
    return new Promise(function(resolve, reject){
      $.get('/data/2.txt', function(d){
        resolve([data,d]);
      });
    })
  }).then(([val1, val2])=>{ // 链式调用then()方法
    console.log(val1, val2);
    $('#text').html(`${val1}<br/>${val2}`);
  });
} */

// (2)调用 Promise.all() // 并行多个异步操作
function sendRequest(){
 let p1 = new Promise(function(resolve, reject){
      $.get('/data/1.txt', function(data){
        resolve(data);
      });
  });
 let p2 = new Promise(function(resolve, reject){
      $.get('/data/2.txt', function(data){
        resolve(data);
      });
  });

  // 统一回调
  Promise.all([p1, p2]).then((data)=>{
    console.log(data);
    $('#text').html(`${data[0]}<br/>${data[1]}`);
  });
}
