// 正则表达式:字符匹配的模式
// (1)直接量 /pattern/,pattern由普通字符abc1235,和元字符组成

// 1.最简单的正则表达式
var patt = /a/; // 匹配单个的字母,包含
var data = "aaaaaaaa";
// 判断字符串是否匹配正则表达式的模式,调用test()方法,如果匹配则返回true,否则返回false
var result = patt.test(data);
//alert(result);

patt = /^a$/; // 匹配只有一个字母a
//alert(patt.test(data));

// 2.数量
// +:至少1个,*:0个或多个,?:0个或1个
// {m}:刚好m个,{m,n}:至少m个至多n个,{m,}:至少m个

patt = /^a?$/;
//alert(patt.test(data));


patt = /^a{6,}$/;
//alert(patt.test(data));

// 3.字符集  \d:单个的数字(0-9),\w:单个的单词字符(数字,字母,_组成),\s:单个的空白符
// \D:单个的非数字,\W:单个的非单词字符,\S:单个的非空白符
// 匹配数字
patt = /^\d+$/;
var num = "49f5";
//alert(patt.test(num));

// 匹配6位数字的银行密码
//var password = prompt("请输入6位数字的支付密码:");
//var pwdReg = /^\d{6}$/;
//if(pwdReg.test(password)){
//	alert("密码输入合法");
//}else{
//	alert("密码输入不合法");
//}

// 4.集合字符 
// [0-9]:单个的数字(0-9),[1-9]:单个的数字(1-9),[a-z]:单个的小写字母,[a-f]:单个的小写字母(a~f)
// [a-zA-Z]:单个的字母(包括大小写) ,[ahkl]:单个字符a或h或k或l
var reg = /^[abcu]$/;
var text = "d";
//alert(reg.test(text));

//var 3a = 10;
// 匹配变量名称标志符(由数字,字母,_组成,不能以数字开头,长度没有限制)
reg = /^[a-zA-z_]\w*$/;
var varible = "_a3";
//alert(reg.test(varible));

// 匹配价格: 数字.数字
// 5.   .匹配除换行符外的任意字符,匹配.本身 用\.
reg = /^\d+\.\d+$/;
var price = "30.5";
//alert(reg.test(price));
// 匹配一个\符号
reg = /^\\$/;
var content = "\\";
//alert(reg.test(content));

// 字符串中的转义字符 \',\",\n,\t,...
//var str = "ab\"\nc\bhello";
//alert(str);

// 6. 分组()
// 匹配ip地址: 192.168.1.230(不考虑数字范围)
//var ipPatt = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/; 
var ipPatt = /^(\d{1,3}\.){3}\d{1,3}$/; 
var ip = "192.168.1.230";
//alert(ipPatt.test(ip));

// 7. | 集合运算符
// [a-f|[b-j]]
var opReg = /^[a-f]|[d-j]$/;
var ch = "e";
//alert(opReg.test(ch));

//匹配red green blue三个单词
opReg = /^(red|green|blue)$/;
var color = 'redg';
//alert(opReg.test(color));

// 匹配月份1~12
opReg = /^([1-9]|10|11|12)$/;
opReg = /^([1-9]|1[0-2])$/;
var month = "11";
//alert(opReg.test(month));

// 8. 中文 [\u4e00-\u9f5a] ,\u表示unicode编码
var chinaReg = /^[\u4e00-\u9f5a]{3,}$/;
var name = "黄晓明";

//alert(chinaReg.test(name));

// 9.修饰符 i忽略大小写, g全局标志
// 字符串对正则表达式的支持
var line = "o034h934thello034t0hellofergoheLlo /.' sergo";
var strText = "sgr485-f4393-2944-1111";
// 搜索/替换
// 返回匹配的第一个子字符串的起始索引
//var resIndex = line.search(/hello/);
//alert(resIndex);
// 返回匹配到的子字符串,不是索引,如果没有全局标记,则只执行一次匹配
var resArray = line.match(/hello/gi);
//alert(resArray);

// 查找数字
var numArray = strText.match(/\d+/g);
//alert(numArray);
var sum = 0;
for(var i=0;i<numArray.length;i++){
	sum += parseInt(numArray[i]);
}
//alert(numArray+"中数字的和为:"+sum);


// 10.贪心与非贪心
// 贪心 - 尽量多的去匹配
var hunReg = /c{1,}/;
var con = "cccccc";
var res = hunReg.exec(con);
alert(res);

// 非贪心 - 尽量少的去匹配
var fullReg = /c{1,}?/;
alert(fullReg.exec(con));
