// Date对象
var now = new Date(); // 当前日期
console.log(now);

//TODO 获得年,月,日 小时,分钟,秒 
//TODO 设置年,月,日 小时,分钟,秒 

// 返回 1970 年 1 月 1 日至今的毫秒数
var ss = now.getTime();
console.log(ss);

// 转换成字符串
console.log(now.toString());
console.log(now.toLocaleString());

// Math对象
console.log(Math.PI);

//TODO 上舍入ceil(x)或下舍入floor(x), 四舍五入 round(x), 开方 sqrt(),平方求幂pow(x,y)等

// 随机数 0.0~1.0之间小数
var r = Math.random(); 
console.log(r);

