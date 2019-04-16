// -------let-------
/*
console.log(a);
let a = 100;
//let的特点:
// (1)不能重复声明
// let a =60; // TypeError: 重复声明了
console.log(a);

{
  // (2)块级作用域: let声明的变量只在其声明的{}中有效
  let c = 3.14;
  console.log('ccccc=',c);
}
console.log('c=',c); // error: c is not defined
*/
console.log(b); // undefined 声明被提前了
var b = 10;
var b = 20;
/**
 * 相当于以下的代码
 var b;
 console.log(b);
 b = 10;
 */

//  console.log(c); // error: c is not defined

// --------const--------
// const用来声明常量(只读,不能修改值), 只能赋值一次(必须在声明时赋值)
const PI = 3.1415926;
console.log(PI);

// const MESSAGE; // error

// PI = 23; //error: "PI" is read-only

// error
/* const E;
E = 2.33; */

//
const OBJ = {
  "name": "zhs",
  "age": 10
};

OBJ.name = "LISI";
console.log(OBJ);

/* // error: "OBJ" is read-only
OBJ = {
  "name" : 'lisi',
  "age": 10
} */

const ARR = [1,2,3];
ARR[0] = 5;
console.log(ARR); // [5,2,3]