// Date:表示一个特定的时间

// 获得当前的日期
var curr = new Date();
document.write(curr);
document.write("<hr />");
// 2018-12-6 9:14:34
// 获得年
var year = curr.getFullYear();
document.write(year);
// 获得月(从0开始,0表示1月)
var month = curr.getMonth();
document.write(month);

// 获得日,小时,分钟,秒,毫秒

// 获得从1970/1/1 0:0:0到指定的date日期经过的毫秒数

document.write("<hr />");
// 修改日期
//curr.setFullYear(2017);
curr.setFullYear(2017,9,1);
document.write(curr);

var curString = curr.toLocaleString();
document.write(curString);

document.write("<hr />");
// 创建指定日期的Date对象
var time = new Date(2018,4,1,10,30,29);
document.write(time);
