//1
var a = 77, b = 7;
document.write("a+b的和为"+(a+b)+"<br>");
document.write("a+b的差为"+(a-b)+"<br>");
document.write("a+b的积为"+(a*b)+"<br>");
document.write("a+b的商为"+(a/b)+"<br>");
document.write("<br>");

//2
var r = 7;
document.write("半径为"+r+"的圆直径为"+2*r+"<br>");
document.write("半径为"+r+"的圆周长为"+2*r*Math.PI+"<br>");
document.write("半径为"+r+"的圆面积为"+r*r*Math.PI+"<br>");
document.write("<br>");

//3
var x = 1,y = 2;
c = x>y?1:-1;
if(c==1){
    document.write("x和y中最大数为"+x);
}else{
    document.write("x和y中最大数为"+y);
}
document.write("<br>");
document.write("<br>");

//4
var j = Math.PI,sum;
// document.write(j.toFixed(2));
sum = j*100;
document.write("值为"+j+"的数值保留两位小数后为"+(sum-sum%1)/100+"<br>");
document.write("<br>");

//5
var z = 12345;
z_One = z/10000-z/10000%1;
z_Two = (z/1000-z/1000%1)%10;
z_Three = (z/100-z/100%1)%10;
z_Four = (z/10-z/10%1)%10;
z_Five = z%10;
document.write(z_One+"***"+z_Two+"***"+z_Three+"***"+z_Five+"***"+z_Four);
document.write("<br>");
document.write("<br>");

//6
var i = 60;
document.write(i%3==0 || i%4==0 || i%5==0?i+"能被3或4或5整除":i+"不能被3或4或5整除");
document.write("<br>");
document.write("<br>");

//7
var j = 6;
document.write(j%2==0 && j%3==0 ? j+"能被2和3整除":j+"不能被2和3整除");