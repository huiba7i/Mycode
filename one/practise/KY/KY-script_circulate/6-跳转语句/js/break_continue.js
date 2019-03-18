/*
如果循环次数确定,建议使用for循环
如果循环次数不确定,建议使用while或do while循环
*/

// break continue的使用,主要用于循环中,break还可以用于switch中
for(var i=1; i<=10; i++){
    if(i == 5){
        // break; // 提前结束所在的循环
        continue; //结束本次循环,执行自增表达式,进入下一次循环
        // document.write('end'); // 不可达的语句(永远不会执行)
    }
    document.write(i+"<br/>");
}

// 输入输出
// var a = 1;
// var b = 2;
// document.write(a,'<br/>',b,"<br/>");
// console.log(a,b);

// // prompt("请输入一个正整数:"); // 带有提示消息的输入对话框
// var num = prompt("请输入一个正整数:",1); // 带有提示消息, 默认值的输入对话框,并将输入后的值保存在变量num中
// document.write(num,"<br/>"); // 点击确定-获得的为输入的值, 点击取消-获得的值为null

// 应用: 提示用户输入一个正数,如果输入的不是正数,则继续输入
while(true){
    var num = prompt("请输入一个正数:",1);
    if(num>0){
        break;
    }else{
        alert("输入的不是正数,请重新输入");
    }
}

/*// for循环的死循环
for(;;){
    var num = prompt("请输入一个正数:",1);
    if(num>0){
        break;
    }else{
        alert("输入的不是正数,请重新输入");
    }
}*/