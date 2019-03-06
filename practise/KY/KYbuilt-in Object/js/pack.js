// 包装类型是对基本类型的封装,其中打包了一个基本类型的属性
// 基本类型 boolean, number, string, function
// 包装类型(object) Boolean, Number, String, Function
var flag1 = true; // 内存的栈
var flag2 = new Boolean(true); // 内存的堆
console.log(flag1, typeof flag1);
console.log(flag2, typeof flag2);


var n1 = 100;
var n2 = new Number(100);

var s1 = "hello";
var s2 = new String("hello");

var fun1 = function(){};
var fun2 = new Function("console.log('hello');");

// ==比较: (自动将包装类型转换成对应的基本类型)基本类型的值相同,结果为true,否则为false
// ===比较: 基本类型的值和数据的类型都相同,结果为true,否则为false
console.log(flag1 == flag2); // true 
console.log(flag1 === flag2); // false 
console.log(n1==n2, n1===n2);// true, false

// 类型转换
// 其它类型转换成number,如果不能转换,结果为NaN
var str = "100.15926";
var n = Number(str);
console.log(typeof n);
// 保留两位小数, 结果为字符串
var res = n.toFixed(2); // 0 - 整数
console.log(res, typeof(res));

// 将对象(比如:number)转换成string: toString(), +(推荐)
var m = 120;
res = m.toString();
console.log(res, typeof res);

