// 实现计数器
// (1)使用全局变量, 页面中其它的脚本或函数即使不调用test()函数也可以操作这个全局变量, 造成全局变量被污染
// var count = 0;
// function test(){
//     count++;
//     console.log(count);
// }

// test();
// test();
// test();

// (2) 使用闭包
/*
function closure(){
    var count = 0;

    // 内部函数实现累加
    // function add(){
    //     count++;
    //     console.log(count);
    // }
    // return add;
    return function(){ return ++count; };
}

// 创建了一个闭包
var add = closure();
var c;
c = add();
console.log(c);
c = add();
console.log(c);
c = add();
console.log(c);
c = add();
console.log(c);

// 生成了一个新的闭包, 相互独立的
var add2 = closure();
var c2;
c2 = add2();
console.log(c2);
c2 = add2();
console.log(c2);
*/

// 只生成一个闭包函数, 使用自调用函数
var addOnly = (function(){
    var count = 0;
    return function(){ return ++count; };
})();

console.log(addOnly()); // 输出的是调用函数后返回值
console.log(addOnly());
console.log(addOnly());
console.log(addOnly());

/*
function method(){
    console.log("hello method");
}

// console.log(method());
// 与上面的代码等效
var res = method();
console.log(res);
*/
