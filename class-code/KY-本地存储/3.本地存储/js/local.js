function setLocalData(){
	localStorage.setItem("username","guest");
	localStorage.name = "administrator";
}

function getLocalData(){
	alert(localStorage.getItem("username"));
	alert(localStorage["name"]);
}

function delLocalData(){
	localStorage.removeItem("username");
	delete localStorage.name;
}

function test(){
	if(window.localStorage){
		alert("该浏览器支持本地存储");
	}else{
		alert("该浏览器不支持本地存储,请更新浏览器版本");
	}
}
