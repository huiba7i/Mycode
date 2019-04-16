document.write("圆周率:"+Math.PI);

// 方法
// (1)绝对值
var posi = Math.abs(-5);
document.write("<br />"+posi);
// (2)ceil(x) 返回>=x的最小整数
var c = Math.ceil(5.2);
document.write("<br/>"+c);

// TODO (3)floor(x) 返回<=x的最大整数

//(4)min(x...) ...可变参数,返回这些数中最小的数
var a=3,b=2,c=5,d=8,e=7;
var m = Math.min(a,b,c,d,e);
document.write("<br />最小的数是:"+m);

// (5)sqrt(x) 对x开方
document.write("<br/>8的开方:"+Math.sqrt(8));
