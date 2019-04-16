function changeToInt(){
	var res = prompt("请输入一个整数:");// '56abc'
	alert(typeof(res));// string
	alert(res+1);
	// 调用一个系统函数 parseInt(string): 将字符串转换成整数,舍弃小数,如果不能转换('a56bc')则为NaN - Not a Number
	var n = parseInt(res);
	alert(typeof(n));
	alert(n+1);
}


function changeToFloat(){
	var num = '3.1415926ab5969c';
	// 将字符串转换成小数,如果不能转换则为NaN
	var fl = parseFloat(num);
	alert(fl);
}

function isNumber(){
	var num = '3.1415926';
	var flag = isNaN(num);
	alert(flag);// 不是数值返回true,是数值返回false
}
