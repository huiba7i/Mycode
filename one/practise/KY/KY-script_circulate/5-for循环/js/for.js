/*
for( 变量初始化表达式1; 条件表达式2; 变量递增或递减表达式3 ) {
	循环执行的语句块 ; 
}

执行流程:
(1)执行初始化表达式1,执行(2)
(2)判断条件表达式2, 如果为真,执行(3); 如果为假,循环结束
(3)执行循环的语句块,执行表达式3,执行(2)
*/

// 求 1+2+3+...+100的和
var sum=0;
for(var i=1; i<=100; i++){
    sum+=i;
}
document.write("1~100的和为:"+sum);