// location:浏览器的url地址栏
// 比如:http://www.baidu.com,http://www.aowin.com
// www.baidu.com/index.php
// url地址格式:协议名称://ip:port/网页的名称
// 127.0.0.1 - 回路地址,代表本地机器,当没有外网的情况下,作一些联网的测试
// localhost - 代表本地主机
// window可以省略
// 属性
document.write("客户端的主机名称和端口号"+window.location.host);
document.write("<br />");
document.write("客户端的主机名称"+window.location.hostname);
document.write("<br />");

document.write("地址栏使用的协议:"+location.protocol);
document.write("<br />");
document.write("url的端口号:"+location.port);
document.write("<br />");
document.write("url地址的字符串文本内容:"+location.href);
document.write("<br />");
document.write("url地址的网页面的文件地址:"+location.pathname);
document.write("<hr />");

function updateUrl(){
	location.href = 'window.html';
}

// 方法: reload()刷新当前页面
function refresh(){
	location.reload();
}
