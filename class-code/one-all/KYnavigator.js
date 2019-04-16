function user(){
	alert(window.navigator.userAgent);
}

function cookieCheck(){
	// cookieEnabled返回一个布尔值，如果浏览器启用了 cookie，该属性值为 true。如果禁用了 cookie，则值为 false
//	alert(navigator.cookieEnabled);
	if(navigator.cookieEnabled){
		alert('浏览器已启用了cookie');
	}else{
		alert("请开启浏览器的cookie");
	}
}

function plat(){
	alert(navigator.platform);
}

function getName(){
	alert(navigator.appName)
}

function getVersion(){
	alert(navigator.appVersion);
}
