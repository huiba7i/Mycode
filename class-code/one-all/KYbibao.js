// 使用全局变量:容易被污染,在其它函数也能用,可能会被其它函数修改
//var count = 0;
//
//function test(){
//	count++;
//	alert(count);
//}

// 解决全局变量被污染,使用闭包
// 闭包:可以将外部函数的局部变量长期贮存在内存中,避免了全局变量的污染,浪费一些内存空间
function test(){
	// 局部变量
	var count = 0;
	
	// 内部函数:定义一个函数test的内部,(test-外部函数,grow-内部函数)
	var grow = function(){
		count++;
		alert(count);
	};
	
	// 将内部函数(闭包函数)返回
	return grow;
}

// 创建了一个闭包函数
//var b = test();
//b();//1
//b();//2
//b();//3

//var c = test(); // 创建一个新的闭包函数(与b无关)
//c();//1
//c();//2
//b();//4


// 事件处理:
//var closure = (function(){
//	var count = 0;
//	function grow(){
//		count++;
//		alert(count);
//	}
//	return grow;
//})();

var closure = test();
