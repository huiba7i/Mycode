function showHello() {
    for (i = 1; i <= 5; i++) {
        console.log("hello word"); //document.wirte 在点击事件中会覆盖页面原有内容！
    }   //console
}
showHello(); //函数调用，不调用不会执行


var sum = 0;
function addOne(x) {
    for (i = 1; i <= x; i++) {
        sum += i;
    }
    document.write(sum, "<br>");
}


addOne(99);

function addTwo(x, y) {
    for (i = x; i <= y; i++) {
        sum *= i;
    }
    document.write(sum, "<br>");
}
addTwo(10, 15);


function addReturn() {
    var z = 0;                     //没用var声明的变量都是全局变量，不论位置
    for (i = 1; i <= 10; i++) {    //局部变量的优先级比全局变量的优先级更高
        z += i;
    }
    document.write(z, "<br>");
    return z;       //返回函数值
}
addReturn();

var z_Two = addReturn();
document.write("将addReturn函数的返回值保存到变量z_Two，其值为：", z_Two, "<br>");


var l = "3.14";
var L = parseInt(l);    //parseInt--去掉小数点后面的数，返回一个整数,如果检测值为非数字返回NaN
console.log(L);

var m = "777.77";
var M = Number(m);      //Number--将字符串转换成数字,如果是非数字则返回NAN
console.log(m * M);
//NaN--Not A Number
var g = isNaN("z");    //isNaN--检查值是否为非数字，如果是非数字则返回true,数字则返回false
console.log(g);

var v = "3145aaa";
var V = parseFloat(v);  //parseFloat--转换成数字(保留小数)，舍弃后面的字符串
console.log(v, V);

//isFinite(num)--检测某个表达式是否为无穷大，为无穷大返回true,反之为false

var r = 314;
var R = String(r);      //转换成字符串
console.log(r + R);

//encodeURI;
//只会将字符串中有意义的字符串进行转义，例如将字符串中的空格转换为 %20
//将已编码为URI的字符串解码成最初的字符串并返回

// var k = decodeURI("////HTML/HTML%20xm/one/%20practise/1.24practise.html");
// decodeURI--对一个编码后的 URI 进行解码
// console.log(k);


//匿名函数：
var fun = function () {
    console.log("匿名函数");
};
fun();      //调用匿名函数:

(/*fun =*/ function () {        //(fun =) --可写可不写
    console.log("匿名函数自调用");  //(function(){执行函数})(函数参数)--匿名函数自执行
})()


//函数嵌套
function textFun() {
    var g = "函数"
    console.log("外部" + g);

    function interFun() {
        var H = "内部"+g;
        return H;
    }
    console.log(interFun());

    // (function(){
    //     console.log("内部"+g);
    // })()
}
textFun();


//有参函数
// arguments - 存储了调用函数时所有的参数，可以通过索引值访问到具体的每个数据[索引值从0开始]
// arguments["参数的索引值"]        arguments.length--所传参数的长度

function argumentsFun(a,b){
    console.log(a,b);
    console.log("第三个参数值为："+arguments[2]);
    console.log("该函数参数长度为："+arguments.length);
}

argumentsFun(7,77,777,7777);