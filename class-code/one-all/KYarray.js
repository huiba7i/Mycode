// 创建一个数组
// 一维数组
var arr1 = new Array();// 初始长度为0

var arr2 = new Array(6); // 初始长度为6,每个元素的值为undefined

var arr3 = new Array(23,69,77,50);// 初始长度为4,每个元素有初始值

var arr4 = [13,59.6,84,63,52];// 初始长度为5,每个元素有初始值

document.write("arr1的长度:"+arr1.length);
document.write("<hr />")
document.write("arr2的长度:"+arr2.length);
document.write("<hr />")

// 通过索引控制对数组中元素的访问: 数组名[index]
// 如果没有该索引上的元素,则添加元素;如果有该索引上的元素,则修改元素
arr1[0] = 100;
document.write("arr1的长度:"+arr1.length);
document.write(",arr1的第一个元素:"+arr1[0]);
document.write("<hr />")
arr2[0] = 29;
document.write("arr2:"+arr2[0]);
document.write("<br />");
// 数组中的方法
// 添加元素
arr4.push(true);// 向数组末尾添加元素
//alert(arr4);

arr4.unshift(80);// 向数组开头添加元素
//alert(arr4);
// 删除元素
arr4.shift();// 删除数组中开头的元素
//alert(arr4);
arr4.pop();// 删除数组中末尾的元素
//alert(arr4);


// 输出数组中的每个元素(遍历数组)
for(var i=0;i<arr4.length;i++){
	document.write(arr4[i]+" ");
}

document.write("<hr />");
// 计算5个学生和平均分
var scores = [60,80,90,70,85];

var sum = 0;
for (var i=0;i<scores.length;i++) {
	sum += scores[i];
}

document.write("平均分为:"+sum/scores.length+"<br />");

// 排序
scores.sort();
for (var i=0;i<scores.length;i++) {
	document.write(scores[i]+" ");
}

document.write("<hr />");
// 二维数组
var array2 = [[23,44,18],[19,30],[46,79,36]];

// 第一维[]:二维数组中一维数组的索引,第二维[]:其中一维数组的元素的索引
alert(array2[0][1]);

array2[2][2] = 20;

// 遍历数组
for (var i=0;i<array2.length;i++) {
//	array2[i]--是一个一维数组
	// 遍历一维数组array2[i]
	for(var j=0;j<array2[i].length;j++){
		document.write(array2[i][j]+" ");
	}
}


