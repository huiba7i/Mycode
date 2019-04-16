function two(){
	var str = "201010-34234-354234-323423";
	var array = str.split("-");
	var sum = 0;
	for (var i=0;i<array.length;i++) {
		sum += parseInt(array[i]);
	}
	
	document.write("分割后数字的和为:"+sum);
}

function three(){
	var grades = new Array(5);
	var sum = 0;
	for(var i=0;i<grades.length;i++){
		grades[i] = parseInt(prompt());
		sum += grades[i];
	}
	
	document.write("总分:"+sum);
//	grades.sort();// 默认是按字符串中的逐个字符进行比较排序
// a 89, b 9
//	grades.sort(function(a,b){
//		return a-b;
//	});
//	document.write("<hr />");
//	document.write(grades);
//	document.write("<hr />");
//	document.write("最低分:"+grades[0]+",最高分:"+grades[grades.length-1]);
	var min = grades[0],max=grades[0];
	for(var i=1;i<grades.length;i++){
		if(grades[i] < min){
			min = grades[i];
		}
		
		if(grades[i] > max){
			max = grades[i];
		}
	}
	document.write("最低分:"+min+",最高分:"+max);
	

}

function four(){
	var f = "abaasdffggghhjjkkgfddssssfs342f43";
	document.write("字符串的长度:"+f.length+"<br/>");
	document.write("字符串的0位置上的字符:"+f.charAt(0));
	document.write("字符串的3位置上的字符:"+f.charAt(3));
	document.write("字符串的5位置上的字符:"+f.charAt(5));
	document.write("字符串的9位置上的字符:"+f.charAt(9));
	document.write("<br />");
	var indexI = f.indexOf('d');
	if(indexI >=0 ){
		document.write("存在字符d,首次出现的索引位置为:"+indexI)
	}else{
		document.write("不存在字符d")
	}
	
	document.write("<br />");
	document.write("截取字符串中的1~5位置之间的字符:"+f.substring(1,6));
	
	var count=0;
	for(var i=0;i<f.length;i++){
		if(f.charAt(i)=='f'){
			count++;
		}
	}
	
	document.write("<br />");
	document.write("字符f出现的次数:"+count);
}


function five(){
	var birth = prompt("请输入你的出生年月日,格式为yyyy-MM-dd");
	var bs = birth.split("-");
	var birthDay = new Date(bs[0],bs[1]-1,bs[2]);
	
	var today = new Date();
	
	var live = (today.getTime() - birthDay.getTime())/1000/60/60/24;
	document.write("你已经存在在世界上:"+live+"天")
	
	var han = new Date(bs[0]+100,bs[1]-1,bs[2]);
}
