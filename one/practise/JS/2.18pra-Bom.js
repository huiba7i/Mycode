//计时器
var now;
function starTime(){
    //没过一秒获得当前时间
    now = setInterval( function(){
        var now = new Date().toLocaleTimeString();
        var timeSpan =  document.getElementsByTagName("span");
        timeSpan[0].innerHTML = now;
    },1000)
}

function stopTime(){
    //停止重复执行函数
    clearInterval(now);
}

var height = screen.height;
var width  = screen.width;
var availheight = screen.availHeight;
var availwidth  = screen.availWidth;
console.log('屏幕高度：'+height,'屏幕宽度'+width);
console.log('屏幕有效高度'+availheight,'屏幕有效宽度'+availwidth)

console.log('浏览器名字：'+navigator.appName);
console.log('包含浏览器厂商和版本信息的详细字符串:'+navigator.appVersion);
console.log('HTTP头部中发送的字符串:'+navigator.userAgent);
console.log('运行浏览器的操作系统平台:'+navigator.platform);
console.log('获取浏览器是否支持Cookie:'+navigator.cookieEnabled);