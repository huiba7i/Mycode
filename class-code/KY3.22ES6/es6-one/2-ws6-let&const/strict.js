// "use strict"; // 严格模式
var f = 1;
var f = 2;
// 函数中也可以使用严格模式
function test(){
  "use strict"; // 函数内部第一行
  // t = 1; // (1)不能使用未声明的变量
  // console.log(t);
  // (2)不能使用arguments,eval作为变量名
  var arguments = 2;
}

test();


