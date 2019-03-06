/*
while(循环条件){
    循环执行的语句块;
}

执行流程:
(1)先判断循环条件 , 如果为真,则执行(2); 如果为假, 结束while循环
(2)执行循环的语句块,重复执行(1)
*/
var n = 1; // 变量:用来计数
while(n <= 10){
    document.write("hello world " + n + "<br/>");
    n++;
}


// 求 1+2+3+...+100的和
var i = 1; // 变量i:计数
var sum = 0; // sum:保存计算的和
while(i <= 100){
    // sum = sum + i;
    sum += i;
    i++;
}
document.write("1+2+3+...+100="+sum+"<br/>");
