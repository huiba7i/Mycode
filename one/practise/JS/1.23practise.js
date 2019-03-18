//1

// while (true) {
//     var mark = prompt("输入成绩")
//     if (mark >= 80) {
//         alert("优秀！");
//     } else if (mark >= 60) {
//         alert("不优秀！");
//     } else if (mark == 0) {
//         alert("输入结束！");
//         break;
//     } else {
//         alert("很不优秀！");
//     }
// }

//2                               //prompt点击取消获得的值为null
// while(true){                    // prompt--该输入框输入的为字符串类型！？
//     var month = parseInt(prompt("输入月份！"));      //parseInt--将字符串转换成numbre类型
//     switch(month){
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//             alert(month+"月有31天");
//             break;
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             alert(month+"月有30天");
//             break;
//         case 2:
//             alert(month+"月有28天");
//             break;
//         default:
//             alert("输入有误！");
//             break;
//     }
// }


// 3-1
// var z = 1;
// sum = 0;
// while(z <= 100){
//     sum+=z;
//     z++;
// }
// document.write(sum);

// 3-2
// var x = 1;
// var sum = 1;
// var y = parseInt(prompt("输入循环的次数"));
// while(x <= (y-1)){
//     sum *= x;
//     x++;
// }
// document.write(sum);

// 3-3
// var z = 1;
// var sum = 1;
// do{
//     sum *= z;
//     z++;
// }while(z<=10){
//     document.write(sum);
// }


//4-1
var sum = 1;
for(var j = 1;j<=10;j++){
    sum*=j;
}
document.write(sum+"</br>");
//4-2
var sum = 0;
for(var j = 100;j>=1;j--){
    if(j == 5){
        // break;       //-到此直接结束本轮循环
        continue;       //-结束本次循环，下面的循环继续进行
    }                   //document.write(#,#,#) --输出语句中的数据间可以用","隔开
    sum-=j;
}
document.write(sum);

//  for的死循环：for(;;) —— 括号内不写任何条件；
//  while的死循环：while(true) —— 括号内为true(只要不是不成立的条件都行，比如(null,undefined,数字0……))