function saveCookie(){
	// 创建cookie,保存在客户端,默认是在浏览会话结束时过期
	
	// 设置过期时间
	var time = new Date();
	time.setDate(time.getDate()+7);
	
	document.cookie = "username=zhs;expires="+time;
	
	document.cookie = "password=123456"; // 不会覆盖前面的cookie
}

function getCookie(){
	// 获得该域名下所有的cookie "username=zhs; password=123456"
	alert(document.cookie);
}
