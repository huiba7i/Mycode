for(var i=1;i<=10;i++){
	if(i==5){
//		break; // 结束所在的循环,只能结束一个循环
		continue; // 结束本次的循环,进入下一次循环
//		document.write("hello "); // 其后面的语句永远不会执行
	}
	document.write(i+"<br/>");
}


// 输入
//prompt('请输入一个正整数:'); // 带有提示信息的输入框
var num = prompt('请输入一个正整数:',0); // 带有提示信息和默认值的输入框
document.write("输入的数:"+num);
