function funAjax(url,funSucc){
	//1、创建ajax对象
	var ajax = new XMLHttpRequest();
	
	//2、连接服务器
//	ajax.open('GET','file/test.txt',true);
	ajax.open('GET',url,true);
	
	//3、发送请求
	ajax.send();
	
	//4、请求状态
	ajax.onreadystatechange = function(){
		//请求完成并且可以在客户端调用的状态
		if(ajax.readyState == 4){
			//服务器返回状态码完成的时候
			if(ajax.status == 200){
				//服务器返回的文本信息
//				console.log(ajax.responseText);
				funSucc(ajax.responseText);
			}
		}
	}
}