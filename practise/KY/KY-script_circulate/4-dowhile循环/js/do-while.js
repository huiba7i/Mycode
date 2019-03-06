/*
do{
    循环执行的语句块;
}while(循环条件);

执行流程:
(1)执行循环的语句块, 执行(2)
(2)判断循环条件 , 如果为真, 则执行(1); 如果为假, 循环结束.
*/

// 求 1+2+3+...+100和
var i = 1;
var sum = 0;
do{
    sum += i;
    i++;
}while(i <= 100);
document.write("1+2+3+...+100="+sum+"<br/>");

// 求 10! = 1*2*3*...*10
i = 1;
var fact = 1;
do{
    fact *= i;
    i++;
}while(i<=10);
document.write("10!="+fact+"<br/>");
