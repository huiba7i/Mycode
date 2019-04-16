/*
 语法 :
 if(条件1){
 	语句块1;
 }else if(条件2){
 	语句块2;
 }else if(条件3){
 	语句块3;
 }...
 else{
 	语句块n;
 }
 */
// 执行:逐个判断if或else if中的条件,当条件满足时,执行相应{}中的语句块,整个if语句运行结束;如果前面的条件都不满足,则执行else中的语句块

// if必须有,else if可以有也可以没有(0个或多个),else至多一个

var condition = false;
if(condition){
	alert('hello world');
}

var grade = 56;

if(grade >= 80){
	alert('优秀');
}else if(grade>=70){
	alert('良好');
}else if(grade>=60){
	alert('及格');
}else{
	alert('不及格');
}

//if中的条件可以是任意类型的数据
// number - 非0的数即为满足条件 ,string - 非''的数即为满足条件,boolean - true满足条件
// undefined - 不满足条件,object - 非null即为满足条件

//condition = '';
condition = null;
if(condition){
	alert('if中的条件可以是任意的类型');
}

// 练习:根据当前的月份值和年份值,判断当月中的天数,并输出
var year = 2016;
var month = 22;

if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
	document.write(month+"月中有31天");
}else if(month==4 || month==6 || month==9 || month==11){
	document.write(month+"月中有30天");
}else if(month==2){
	// 判断是否是闰年(4年一闰,百年不闰; 四百年再闰)
	if((year%4==0 && year%100!=0) || year%400 == 0){
		document.write(month+"月中有29天");
	}else{
		document.write(month+"月中有28天");
	}	
}else{
	document.write(month+"的月份有误");
}

