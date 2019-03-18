//prototype
function Studys(name, age, mark) {
    this.name = name;
    this.age = age;
    this.mark = mark;
    this.studyDaty = function (hour) {
        console.log("one day study" + hour + "hour")
    }
}
var s = new Studys('丁某', 30, '天秀');
s.studyDaty(0.5);
Studys.prototype.game = function (hour) {
    console.log('one day playgame ' + hour + ' hour')
}
s.game(8);

//扩展属性的优先级不及原型属性
Studys.prototype.mark = '秀';   //prototype --添加扩展(属性……)
console.log(s.mark);

//delete--删除   --删除先针对原型化属性
delete s.mark;
//原型化被删除，输出类得到的是扩展属性
console.log(s.mark)



var b1 = true;  //基本类型
var b2 = new Boolean(true);     //包装类型
console.log(b1 == b2);        //true,包装类型会自动转换成基本类型再进行比较
console.log(b1 === b2);       //false

var s = '10.086';
var n = Number(s);      //Number --字符串转换成数字
console.log(typeof n);

console.log(typeof (toString(n)));   //toSting-将数字转换成字符串

var s2 = '1.0086';
var s3 = Number(s2);
var S = s3.toFixed(3);     //toFixed()--将数字保留几位小数，返回结果为字符串
console.log(typeof S)

// 将其他类型转换成字符串：toString(),'+()'拼接


//Date
var mDate = new Date();
console.log(mDate);     //new Date --当前标准时间

console.log(mDate.getDate());   // .getDate()--获得当前日
console.log(mDate.getFullYear());   //.getFullYear()--获得当前年份
console.log(mDate.getMonth());      //.getMonth()--获得放前月份(0~11)
console.log(mDate.getHours());      //.getHourd()--获得当前小时
console.log(mDate.getMinutes());     //.getMinutes()--获得当前分钟
console.log(mDate.getSeconds());      //.getSeconds()--当前秒数
console.log(mDate.getMilliseconds())    //.getMilliseconds()--毫秒
console.log(mDate.getTime())     //.getTime()--返回 1970 年 1 月 1 日至今的毫秒数。
//Math
var N = 0.98;
console.log(Math.asin(N));
//Math.asin--返回一个数的反正弦值,该值介于 -1.0 ~ 1.0 之间

console.log(Math.atan(N));
// Math.atan--返回数字的反正切值,x 的反正切值。返回的值是 -PI/2 到 PI/2 之间的弧度值

//Array(数组的长度是可变的)

//push()--向数组末尾添加
//unshift()--向数组开头添加
//pop()--删除并返回最后一个元素
//sort()--对数组中的元素进行排序
//shift()--删除并返回第一个元素

//遍历数组：
var a = new Array(1, 2, 3, 4, 5, 6, 7);
console.log(a[0]);
for (var i = 0; i < a.length; i++) {
    console.log(i, a[i]);
}

var a2 = [[7, 77, 777, 7777],['7', 77, '777', '七'],['ddd', '7d7', 7777, 7777],[7,'q', 'i', '7777777']];
for (var i = 0; i < a2.length; i++) {
    for (var j = 0; j < a2[i].length; j++) {
        console.log(a2[i][j]);
    }
}

//String
var s4 = 'hello word,hello javascript,hello web';
console.log(s4.substr(4,1));
//substr(start,length)--第一个数值为要提取的字符串的初始位置，第二个数值为要提取的字符串的长度

console.log(s4.substring(3,15));
//substring--提取字符串中介于两个指定下标之间的字符。