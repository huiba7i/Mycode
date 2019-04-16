var s1 = "hello world中1,";

var s2 = new String("hello world");

// 字符串的属性.length(字符的个数)
document.write("字符串的长度即其中字符的个数:"+s1.length);
document.write("<br />");

// 字符串的方法:
// 获得指定索引位置(从0开始)上的字符
var ch1 = s1.charAt(0);
document.write("第一个字符:"+ch1)
document.write("<br />");

// 获得指定字符在字符串中首次出现的索引位置
var index = s1.indexOf('l');
document.write("l字符在字符串中首次出现的位置:"+index);
document.write("<br />");

// 转换大小写
var up = s1.toUpperCase();
document.write("大写后:"+up);
document.write("大写前后:"+s1);

// TODO substring(start,stop) - 截取子字符串,其内容是索引从 start 处到 stop-1 处的所有字符
// TODO split() - 分割字符串
