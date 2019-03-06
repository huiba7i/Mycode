//work1
function workOne() {
    var sum = 0;
    for (var i = 1; i <= 1000; i++) {

        if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
            document.write(i, "&nbsp&nbsp");
            sum++;
            if (sum % 6 == 0) {
                document.write("<br>");
            }
        }
    }
}
workOne();
document.write("<hr>");


// work2
function ereaReo(r){
    var sum = r*r*Math.PI;
    return sum;
}
function ereaRet(r){
    var erea = ereaReo(r);
    document.write("半径为",r,"的圆面积为",erea);
}
var r = prompt("输入半径")
ereaRet(r);
document.write("<hr>");


// work3
function workTwo() {
    var sum = 0;
    while (true) {
        var x = Number(prompt("输入数据"))
        sum += x;
        if(isNaN(x)){
            alert("输入有误！重新输入");
            continue;
        }
        if (x == 0) {
            document.write("输入的数据相加结果为：",sum);
            break;
        }
    }
}
workTwo();
document.write("<hr>");


//work4
function workFour(r) {
    for (var x = -r; x <= r; x++) {
        for (var y = -r; y <= r; y++) {
            if (x * x + y * y == r * r) {
                document.write("(" + x + "," + y + ") ");
            }
        }
    }
}
workFour(17);
document.write("<hr />");


//work5
// var a = Number(prompt("第一个数"));
// var b = Number(prompt("第二个数"));
// var c = Number(prompt("第三个数"));
// var d = Number(prompt("第四个数"));
// var e = Number(prompt("第五个数"));
// function workFive(a, b, c, d, e) {
//     var array = [a, b, c, d, e];
//     array.sort();
//     var sum = 1;
//     for (var i = 0; i <= 2; i++) {
//         sum *= array[i];
//     }
//     document.write(sum);
// }
// workFive(a,b,c,d,e);
// document.write("<hr>");

function workFive_two(a,b,c,d,e){
	var min = 1; // 假设最小众倍数
	var count = 0;// 能被整除的个数
	while(true){
		if(min%a==0){      //假设a能被众倍数整除,count的值加1
			count++;
		};
		if(min%b==0) count++;     	// 	假设b能被众倍数整除,count的值再加1
		if(min%c==0) count++;      	//	假设c能被众倍数整除,count的值再加1
		if(min%d==0) count++;       //	假设d能被众倍数整除,count的值再加1
		if(min%e==0) count++;       //	假设e能被众倍数整除,count的值再加1

		if(count>=3){
			return min;				//当count的值>=3时，返回min的值
		}

		min++;      // 判断下一个数是否是最小的众倍数
		count=0;     // 整除的个数重新开始计算
    }
}
var res = workFive_two(7,77,777,7777,77777);
document.write(res);
