// Symbol目的是生成一个唯一的标识符
let sid = Symbol('id');
console.log(sid, typeof(sid)); // 'symbol'

let obj = {
  [Symbol('random')]: 'this is a symbol',
  name: 'zhs',
  age: 10
}

// 获得对象中的symbol属性
let sys = Object.getOwnPropertySymbols(obj)[0];
console.log(sys, obj[sys]);

// 获得对象的所有属性(不包括 symbol属性)
let propNames = Object.getOwnPropertyNames(obj);
console.log(propNames[0], propNames[1]);

// 通过[Symbol.Iterator]()给对象设置默认的迭代器
let arr = [11, 22, 33];
console.log(arr);
let it = arr[Symbol.iterator]();
let o1 = it.next();
console.log(o1);
console.log(it.next());
console.log(it.next());
console.log(it.next());
