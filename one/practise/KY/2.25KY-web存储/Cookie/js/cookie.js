// 写cookie
// 默认是浏览器会话结束时过期
document.cookie = 'username=admin';

// 设置过期时间
var time = new Date();
time.setDate(time.getDate()+7);
document.cookie = 'password=123456;expires='+time;

//
document.cookie = 'order=js高级编程';

// 获得cookie
console.log(document.cookie);