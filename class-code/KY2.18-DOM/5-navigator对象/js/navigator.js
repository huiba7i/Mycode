// navigator: 包含客户端使用的浏览器相关信息,比如浏览器的名称,版权,内核等
console.log(navigator);
// ie中为Microsoft Internet Explorer, 其它为Netscape
document.write("浏览器的名称:" , navigator.appName, '<br/>');
document.write("浏览器的版本:" , navigator.appVersion, '<br/>');
document.write("浏览器http发送的字段,包含appVersion的信息:" , navigator.userAgent, '<br/>');
document.write("运行浏览器的操作系统平台:" , navigator.platform, '<br/>');
