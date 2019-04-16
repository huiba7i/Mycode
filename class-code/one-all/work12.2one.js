// ====three=====

var x = 3;
var y=4;
var max = x>y?x:y;
document.write("最大值为:"+max);

document.write("<hr/>")
// =====four 保留两位小数 =====
var p = Math.PI;
// document.write(p+"----"+p.toFixed(3));

var n = p*100; // 将要保留的小数位变成整数位
document.write((n-n%1)/100);
document.write("<hr />");

// =======five========

var num = 12345;
var e = num%10;
document.write(e);
var d = (num-e)/10%10;
document.write(d);
var c = (num-e-d*10)/100%10;
document.write(c);
var b = (num-e-d*10-c*100)/1000%10;
document.write(b);
var a = (num-e-d*10-c*100-b*1000)/10000;
document.write(a);
document.write("<br />")
//document.write((num-num%10000)/10000);

var i=20;
document.write((i%3==0 || i%4==0 || i%5==0)?i+"能被3或4或5整除":i+"不能被3或4或5整除");


