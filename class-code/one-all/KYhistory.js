// history:包含用户（在浏览器窗口中）访问过的 URL(历史记录)
// 是window对象的属性,可以通过window.history进行访问

function backToOne(){
	// back():加载到history列表中前一个url地址
//	history.back();// 点击后退
	history.go(-1);// 相当于back()
}

function nextUrl(){
//	history.forward();// 下一个url地址
	history.go(1)
}




