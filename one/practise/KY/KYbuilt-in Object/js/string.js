// 字符串 - 字符数组
// 原始方式
var str1 = 'aowin';

// 对象方式
var str2 = new String('aowin');

// 属性
// length - 字符的个数
console.log(str1.length);

// 方法
// 获得指定下标索引上的字符
var one = str1.charAt(0);
console.log('第一个字符:', one);
console.log('第一个字符:', str1[0]);
console.log('最后一个字符:', str1[str1.length-1]);
console.log('最后一个字符:', str1.charAt(str1.length-1));

// 大小写转换, 产生了一个新的字符串(原有的字符串不变)
var up = str1.toUpperCase();
console.log(str1, up);

var str3 = "hello world,hello javascript,hello aowin";
// 查找指定字符串"在字符串中首次出现的索引位置, 没有找到结果为-1
var index = str3.indexOf("abc");
console.log(index);

// 分割字符串
var subs = str3.split(",");
console.log(subs);

// TODO substr(),substring(),concat(),lastIndexOf(),toLowerCase(),slice()等