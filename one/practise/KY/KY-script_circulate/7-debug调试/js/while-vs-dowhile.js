
// 1~10的和
var i = 11;
var sum = 0;
debugger; // 启用断点
// 先判断,再执行,如果初始循环条件不满足,一次也不执行
while(i <= 10){
    sum+= i;
    i++;
}
document.write("1~10=",sum,"<br/>");

i=11;
sum=0;
// 先执行,再判断,如果初始循环条件不满足,也会执行一次
do{
    sum += i;
    i++;
}while(i<=10);
document.write("1~10=",sum,"<br/>");

