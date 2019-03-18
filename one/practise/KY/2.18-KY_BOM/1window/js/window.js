
// 对话框
function delMessage(){
  var res = window.confirm('确定要删除吗?');
  console.log(res);
  if(res){
    console.log('要删除');
  }else{
    console.log('不删除');
  }
}

// window.alert('hello world');

// 打开/关闭浏览器窗口
var newWindow;
function openWindow(){
  newWindow = window.open('other.html', '', 'width=1000,height=600,toolbar=yes,menubar=yes');
}

function closeWindow(){
  // window.close(); 
  // 通常是关闭通过open()方法打开的浏览器窗口
  newWindow.close();
}

// 在一定的延时时间后执行一段js代码
var id;
function delay(){
  // test()只调用一次
  // window.setTimeout('test()', 2000);

  // test()会周期性地重复调用, setInterval()有一个返回值,传递给clearInterval()用于取消后续函数的调用
  // id = window.setInterval('test()', 2000);
  id = window.setInterval(test, 2000);
}

function test(){
  console.log('hello world');
}

function stop(){
  window.clearInterval(id);
}

function updateTime(){
  var now = new Date().toLocaleString();
  // console.log(now);
  var timeSpan = document.getElementById('time');
  timeSpan.innerHTML = now;
}

// setInterval(function(){
//   var now = new Date().toLocaleString();
//   var timeSpan = document.getElementById('time');
//   timeSpan.innerHTML = now;
// }, 1000)
setInterval(updateTime, 1000);