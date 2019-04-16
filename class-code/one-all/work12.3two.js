// ======two 99乘法表=====
for (var i=1;i<=9;i++) {
	// 输出第i行的表达式
	for(var j=1;j<=i;j++){
		document.write(j+"*"+i+"="+(i*j)+"&nbsp;");
	}
	document.write("<br/>")
}

document.write("<hr />");

// ======three 1+3+5+7+9+...+99========
var sum = 0;
for(var i=1;i<=99;i+=2){
	sum+=i;
}
document.write("1+3+5+7+9+...+99="+sum);

document.write("<hr />");

// =========four===========
//var x = prompt("请输入数字x:");
//var op = prompt('请输入运算符:');
//var y = prompt("请输入数字y:");
//switch(op){
//	case '+':
//		document.write(parseInt(x)+parseInt(y));break;
//	case '-':
//		document.write(parseInt(x)-parseInt(y));break;
//	case '*':
//		document.write(parseInt(x)+parseInt(y));break;
//	case '/':
//		document.write(parseInt(x)-parseInt(y));break;
//	
//}

// ======five 输出菱形======
/*
for(var i=1;i<=5;i++){
	// 输出第i行
	// 输出空格(5-i)个
	for(var j=1;j<=5-i;j++){
		document.write("&nbsp;");
	}
	
//	// 输出*(2*i-1)个
//	for(var j=1;j<=2*i-1;j++){
//		document.write("*");
//	}
	// 输出*(9-2*(5-i))个
	for(var j=1;j<=9-2*(5-i);j++){
		document.write("*");
	}
	
	document.write("<br />");
}
for(var i=6;i<=9;i++){
	// 输出空格(i-5)个
	for(var j=1;j<=i-5;j++){
		document.write("&nbsp;");
	}
	// 输出*(9-2*(i-5))个
	for(var j=1;j<=9-2*(i-5);j++){
		document.write("*");
	}
	document.write("<br />");
}
*/

//for(var i=1;i<=9;i++){
//	// 输出空格|i-5|个
//	for(var j=1;j<=Math.abs(i-5);j++){
//		document.write("&nbsp;");
//	}
//	// 输出*(9-2*|i-5|)个
//	for(var j=1;j<=9-2*Math.abs(i-5);j++){
//		document.write("*");
//	}
//	document.write("<br />");
//}

var n = prompt("输入一个奇数");
var mid = (parseInt(n)+1)/2;
for(var i=1;i<=n;i++){
	// 输出空格|i-mid|个
	for(var j=1;j<=Math.abs(i-mid);j++){
		document.write("&nbsp;");
	}
	// 输出*(n-2*|i-mid|)个
	for(var j=1;j<=n-2*Math.abs(i-mid);j++){
		document.write("*");
	}
	document.write("<br />");
}

var rand = Math.random().toFixed(2)*100;
document.write(rand);
while(true){
//	if(rand==)break;
}
