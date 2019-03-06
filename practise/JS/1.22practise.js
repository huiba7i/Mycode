document.write("<br>");
document.write("holle word");
var x = 7;
y = 77;
console.log(x);
console.log(x+y);
console.log(typeof x);
console.log(typeof "x");
console.log(typeof true);
console.log(typeof undefined);
x = null;
console.log(x);
var b = "丁某";
B = "猪";
document.write("<br>");
document.write(b+"是"+B+"<br>");
var two_B = 1;
two_A = 1;
document.write(b+(two_A+two_B)+"B"+B+"<br>");

//后缀--或++：先取表达式的值再-1或-1；
//前缀--或++：先自身+1或-1再取表达式的值；

var z = 7,v = 77;
v+=z; //v=v+z
document.write(v+"<br>");
var z = 7,v = 77;
v-=z;//v=v-z
document.write(v+"<br>");
var z = 7,v = 77;
v*=z;//v=v*z
document.write(v+"<br>");
var z = 7,v = 77;
v/=z;//v=v/z
document.write(v+"<br>");
var z = 7,v = 77;
v%=z;//v=v%z
document.write(v+"<br>");

var m = false , n = false , l;
l = m&&n;
document.write(l);  //false;   true && true = true  其他为 false;
                    //          true || false = true   有一个为true就是true
                    //             !true 为false    !false 为true