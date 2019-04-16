var s = 23; // 定义在函数外部 - 全局变量,其它函数中都能使用

/*
 函数:一段可以重复调用的代码块
 
定义:function 函数名(参数1,参数2,...){
	代码块;
}
 */

// 定义一个无参数的函数
function funSum() {
	// 定义在函数内部的变量 - 局部变量,只在当前函数中使用
	var sum = 0;
	for(var i = 1; i <= 100; i++) {
		sum += i;
	}
	alert('1~100的和为:' + sum);
//	alert(s);
}

// 函数需要调用才执行,可以调用多次
// 调用函数: 函数名称();
//funSum();
//console.log("函数调用");
//funSum();

//alert(sum);

// 定义一个有参数的函数,n 形式参数
function test(n){
	var sum = 0;
	for(var i = 1; i <= n; i++) {
		sum += i;
	}
	alert('1~'+n+'的和为:' + sum);
}

// 调用有参数的函数: 函数名称(实际参数);
//test(50);
//test(100);
//test(10);
//var j = 10;
//test(j);


// 定义多个参数的函数,多个参数之间用,隔开
function func(m,n){
	var sum = 0;
	for(var i = m; i <= n; i++) {
		sum += i;
	}
	alert(m+'~'+n+'的和为:' + sum);
}

//func(5,100);

// 定义一个带返回值的函数
function funcReturn(){
	var sum = 0;
	for(var i = 1; i <= 100; i++) {
		sum += i;
	}
	
	return sum; // 结束函数,并返回sum变量的值给调用者
//	alert('---------'); // return后面的语句永远不会执行
}

// 使用变量接收调用函数返回的值
//var a = funcReturn();
//alert(a);

// 直接输出调用函数后返回的值,只能用一次
//alert(funcReturn());

function hello(){
	alert("欢迎访问和盈");
}
