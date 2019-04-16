// document:可以对整个html文档中的标签进行访问,代表当前浏览器窗口中整个html文档对象

// 方法:
// 向当前文档输出内容
document.write('hello world'); // 输出后不换行

document.writeln('输出后换行'); // 浏览器解析时当作回车符,显示为一个空格
document.writeln('hello js');

// 访问html中的标签

// (1)通过id属性获得标签
var p = document.getElementById('para');// 如果不存在该id属性,则返回null
document.write(p);

// (2)通过name属性获得标签 - 返回的是数组
function test(){
	var ph = document.getElementsByName('ph');
	alert(ph+",长度为:"+ph.length);
	alert(ph[0]);// 获得第一个name为ph的标签
}

// (3)通过标签名称获得标签 - 返回的是数组
function testTagName(){
	var ps = document.getElementsByTagName('p');
//	alert(ps+",长度为:"+ps.length);
	
	for(var i=0;i<ps.length;i++){
		alert(ps[i]);
	}
}

// (4)通过class属性获得标签(ie9+) - 返回的是数组
function testClassName(){
	var foTags = document.getElementsByClassName('fo');
//	alert(foTags.length);
	for(var i=0;i<foTags.length;i++){
		alert(foTags[i]);
	}
}
