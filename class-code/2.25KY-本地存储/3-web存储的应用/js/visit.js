
// 当页面加载成统计当前用户访问页面的次数
window.onload = function(){
  var amount = localStorage.getItem('amount');
  console.log(amount, typeof amount);
  if(!amount){// 如果第一次访问时,本地存储中没有保存访问量的数据,返回值是Null
    localStorage.setItem('amount', 1);
  }else{
    localStorage.setItem('amount',Number(amount)+1)
  }
  var span = document.getElementById('time');
  span.innerHTML = localStorage.getItem('amount');


  // 判断用户登录
  var username = sessionStorage.getItem('username');
  var wel = document.getElementById('welcome');
  // var log = document.getElementById('log');
  if(username){
    // wel.style.display = 'block';
    // log.style.display = 'none';
    var userSpan = document.getElementById('user');
    userSpan.innerHTML = username;
  }else{
    // wel.style.display = 'none';
    // log.style.display = 'block';

    location = 'login.html';
  }
}