function one(){
	var count = 0;
	for(var i=1;i<=10000;i++){
		if(i%3==0 && i%5==0 && i%7==0){
			document.write(i+"&nbsp;");
			count++;
			if(count%6==0){
				document.write("<br />");
			}
		}
	}
}

one();

//prompt();

document.write("<hr />");
function two(ras){
	return Math.PI*ras*ras;
}

var area = two(2);
document.write(area);

document.write("<hr />");
function three(){
	var sum = 0;
	while(true){
		var n = prompt("请输入一个数:",0);
		if(n==0){
			document.write("和为:"+sum);
			break;
		}
		
		sum += parseInt(n);
	}
}

three();

document.write("<hr />");

function four(r){
	for(var x=-r;x<=r;x++){
		for(var y=-r;y<=r;y++){
			if(x*x+y*y==r*r){
				document.write("("+x+","+y+") ");
			}
		}
	}
}

four(1);
document.write("<hr />");

function five(a,b,c,d,e){
	var min = 1;// 假设最小众倍数
	var count = 0;// 能被a,b,c,d,e整除的个数
	while(true){
		if(min%a==0){
			count++;
		}
		if(min%b==0) count++;
		if(min%c==0) count++;
		if(min%d==0) count++;
		if(min%e==0) count++;
		
		if(count>=3){
			return min;
		}
		
		min++;// 判断下一个数是否是最小的众倍数
		count=0;// 整除的个数重新开始计算
	}
}

var res = five(1,2,3,4,5);
document.write(res);
