/*
条件判断语句
if(条件表达式)
{
   //JavaScript代码;
}
else if(条件表达式){
   //JavaScript代码;
}
…
else
{
  //JavaScript代码;
}

if必须有,else if可以没有可以有多个, else至多有1个可以没有
条件表达式可以是任意类型的条件,通常使用boolean类型,true为满足条件,false为不满足条件

执行流程:
逐个判断条件表达式,如果为真,则执行相应{}中的语句,整个if语句结束;如果为假,则判断后面的条件;
如果所有的条件都不满足,则执行else中的语句
*/

var age = 65;
if(age >= 18){
    document.write("是成年人<br>");
}else{
    document.write("是未成年人<br>");
}

if(true){
    document.write("满足条件即执行<br>");
}


// if(age < 6){
//     document.write("学龄前儿童<br/>");
// }else if(age >= 6 && age < 18){
//     document.write("青少年<br/>");
// }else if(age >= 18 && age < 40){
//     document.write("青壮年<br/>");
// }else if(age >= 40 && age < 60){
//     document.write("中年<br/>");
// }else{
//     document.write("老年人<br/>");
// }
if(age < 6){
    document.write("学龄前儿童<br/>");
}else if(age < 18){
    document.write("青少年<br/>");
}else if(age < 40){
    document.write("青壮年<br/>");
}else if(age < 60){
    document.write("中年<br/>");
}else{
    document.write("老年人<br/>");
}


// 其它类型的条件表达式
// var condition = 0; // number:非0即为真
// condition = ' '; // string: 非""即为真
var condition; // undefined 为假
condition = null; // object: 非null即为真
if(condition){
    document.write("满足条件即执行<br>");
}