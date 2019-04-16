/*
 for(表达式1;条件表达式2;表达式3){
 	循环体;
 }
 
 执行:
 第1步:先执行表达式1,执行第2步
 第2步:执行表达式2,如果条件满足,则执行循环体中的语句,执行表达式3,重复第2步;如果条件不满足,for循环语句结束
 */

// 输出10次hello world
for(var i=1;i<=10;i++){
	document.write("hello world "+i+"<br/>");
}

// 求出1+2+...+100的和
var sum = 0;
for(var i=1;i<=100;i++){
//	sum = sum+i;
	sum += i;
}
document.write("1~100的和为:"+sum);

// 定义一个变量n,求n! = 1*2*3*...*n
var j = 1;
var n = 5;
for(var i=1;i<=n;i++){
	j *= i;
}
document.write("<br/>n!="+j);
