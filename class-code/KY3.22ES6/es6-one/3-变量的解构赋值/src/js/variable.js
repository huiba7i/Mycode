/* let a = 1;
let b = 2;
let c = 3; */
// 1 数组的解构赋值
let [a, b, c] = [1, 2, 3];
console.log(a, b, c); // 1, 2, 3

// 解构失败时,值为undefined
/* let [e, f] = [10];
console.log(e, f);// 10, undefined */

// 2 对象的解构赋值
let obj = {
  "name": "aowin",
  "age": 12
}

// 变量名与对象的属性名称相同
/* let {name, age} = obj;
console.log(name, age); */

// 解构失败, undefined
/* let {username, userage} = obj;
console.log(username, userage); */

// name是模式 un是变量名
let {name:un, age: ua} = obj;
console.log(un, ua);

// babel-polyfill转码器

// 3 解构赋值的默认值
/* let [p, q=9] = [1];
console.log(p, q);// 1,9 */

let [p, q=9] = [1, 2]
console.log(p, q); // 1, 2

function sum([i, j, k]){
  return i+j+k;
}

let arr = [10,20,30];
let res = sum(arr);
console.log(res);