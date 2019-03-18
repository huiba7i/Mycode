//1  RegExp - test()   -- 返回的是 boolean
var conten = 'lkgjgbOne';

//标识符g--全局匹配   i--忽略大小写   m--多行匹配，只有在m下才会匹配换行符
var one = /one/g;
var r = one.test(conten);
console.log(r);

//  \d:匹配单个数字        \D匹配单个非数字
//  \w:匹配单个字符，数字，或下划线字符         \W匹配单个与w不符的字符
//  \s：匹配单个空白符（包括换行符）          \S匹配非空白符的所有字符

//  .--匹配除换行符以外的所有字符     匹配。-- \.

// n+:至少有一个n       n*：零个或多个n         n?:零个或一个n
//n{x}:正好x个n        n{x,}至少x个n          n{x,y}:匹配x至y个n

// 边界符 —— ('^')--开头     ('$')--结尾

//  []内匹配的都是匹配单个

function jcPassword() {
    var w = document.getElementById("password").value;
    var p = /^\d{6}$/;      //匹配六位数字
    var q = p.test(w);
    if (q == true) {
        alert('格式正确');
    } else {
        alert('格式错误');
    }
}

//匹配标识符
var tag = "name";
var reg = /^[a-zA-Z_]\w*$/;     //    /^[a-z_]\w*$/i
console.log(reg.test(tag));

//   ()--分组
//匹配价格  --  小数点后零位或两位
tag = '13553';
reg = /^\d+\.?\d{0,2}$/;    //--/^\d+(\.\d{1,2})?$/
console.log(reg.test(tag));

//匹配IP地址
var IP = '192.168.177.77';
reg = /^([1-2][0-9]{1,2}\.){3}[1-9][0-9]{0,2}$/;
// reg = /^(\d{1,3}\.){3}\d{1,3}$/;
console.log(reg.test(IP));

//匹配本身有意义的字符前加  \ 

// \b 单词边界   \b位于开头匹配开头边界，位于结尾则匹配结尾
// \B 非单词边界    \B只位于匹配值的开头   匹配位于首位与末尾之间的字符
//\b  \B  --不用于数字
IP = "adffgbbb";
reg = /\B[a]/;
console.log(reg.test(IP));

//匹配中文    [\u4E00-\u9FA5]

//2   RegExp - exec()   -- 返回的是值
//(1)贪心模式，返回尽可能多的值
var c = "ccccccc";
var execC = /c{1,}/;
console.log(execC.exec(c));
// alert(execC.exec(c));

//(2)非贪心模式，返回尽可能少的值
execC = /c{1,}?/
console.log(execC.exec(c));
// alert(execC.exec(c))

//String对象的方法 – search()  返回内容在字符串中的索引值
// 字符串.secrch(检索值)  g全局变量无效，只返回第一次匹配到的索引
var str = "abwordcdwordefgh";
var word = /word/g;
var inedx = str.search(word);
console.log(inedx);

//字符串.match(检索值)
//返回匹配到的值，加上g则返回所有匹配到的值，不加则只返回第一次匹配到的值
console.log(str.match(word));

//字符串.replace(需要替换的值，'替换后的值')
// replace() 替换原有的字符串
console.log(str.replace(word,'hello'));

//字符串.split("用于分割的字符串")
//返回值为分割后的若干个字符串数组
var IP = '192.168.177.77';
var arr = IP.split('.');

console.log(IP.split('.'),arr[0])


