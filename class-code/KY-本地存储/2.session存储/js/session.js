function saveSeesionData(){
	// 通过 键-值 的形式存储数据
	// (1)调用方法(推荐)
	sessionStorage.setItem("name","admin");
	// (2)通过.键名称 ,如.key = "value"
	sessionStorage.password = "123456";
	// (3)通过["key"] = "value"
	sessionStorage["like"] = "shoes";
}

function getSessionData(){
//	// 通过键名获得值
//	alert(sessionStorage.getItem("name")); // 推荐
//	alert(sessionStorage.password);
//	alert(sessionStorage["like"]);

	// 获得session域中所有的数据的个数
//	alert(sessionStorage.length);

	// for in获得session中所有的数据
//	for(var key in sessionStorage){
//		alert(key+":"+sessionStorage.getItem(key));
//	}

	alert(sessionStorage.key(0));
}


function delSessionData(){
//	// 通过键名删除
//	sessionStorage.removeItem("name"); // 推荐
//	delete sessionStorage.password;
//	delete sessionStorage["like"];
	
	// 清除storage中所有的键值对
	sessionStorage.clear();
}

function test(){
	if(window.sessionStorage){
		alert("当前浏览器支持session存储");
	}else{
		alert("当前浏览器不支持session存储,请更新浏览器版本");
	}
}
