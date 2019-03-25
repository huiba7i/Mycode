// 1 模板字符串: 用``表示, 支持换行,嵌入js变量 ${js表达式}

console.log(`hello
world`);

let name = 'Bob';
let time = 'today';

let centers = `Hello ${name}, How are you ${time}?`;
console.log(centers);

function func(){
  console.log('this is a function');
  return 'hahha'
}
let obj = {name: 'aowin'}
let str = `abckwoegerg, ,kl${func()}, ${obj.name}`;
console.log(str);

// 2 for..of 遍历数组或类似数组的对象
let arr = ['hello', 'es6', 'aowin'];
for(let item of arr){
  console.log(item);
}
