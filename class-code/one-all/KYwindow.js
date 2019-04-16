// 定义的全局变量都是作为window的属性
var a = 10;
document.write(a);
document.write("<br />");
document.write(window.a);

// 定义的全局函数都是作为window的方法
function test(){
	alert('test function');
}

//test();
//window.test();

// window对象中常用的方法
// (1)对话框
// 输入对话框 prompt()
// 警告对话框 alert()
// 确认对话框 confirm()
function del(){
	// 确定 返回true,取消 返回false
	var sel = window.confirm('确认要删除吗?');
	if(sel){
		// 删除操作
	}
}

function closeWindow(){
	var sel = window.confirm('残忍关闭吗?');
	if(sel){
		window.close();
	}
}

function openNewWindow(){
	// 参数1:浏览器窗口显示的网页的url地址,参数2:浏览器窗口的名字
//	window.open('','');// 打开新的空的窗口
//	window.open('index.html','aowin');// 打开新的显示了网页的窗口
	var mywindow = window.open('','','width=300,height=200,menubar=yes');
	mywindow.moveBy(50,50);
}


function timeClock1(){
//	function show(){
//		alert('hello world');
//	}
//	setTimeout(show,3000);

	var t = 3000;
	setTimeout(function(){
		alert('hello world');
	}, t);
}
var id
function timeClock2(){
	id = setInterval(function(){
		alert('hello world');
	},3000);
}

function stopTime(){
	clearInterval(id);
}
