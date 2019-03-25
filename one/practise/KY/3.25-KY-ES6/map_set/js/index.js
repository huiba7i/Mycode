// map: 相当于一个容器,可以存储 key-value 形式的数据
let m = new Map();
// console.log(m);
// 添加元素或修改元素 set(key, value)
m.set(1, 'hello');
m.set(1, 'es6'); // 键不能重复,则覆盖原有的键值对
m.set(2, 'world');
m.set([4, 5], true);
/* // 获得元素 get(key)
let val1 = m.get(1);
console.log('获得键为1的值:', val1);

// 删除元素 delete(key), clear()
m.delete(1)
// m.clear(); // 清空map所有的元素(键值对)

// 获得元素的个数 size
console.log(m, m.size);
// 判断map中是否包含某个键,如果不存在这个键,返回false,存在则返回true
console.log(m.has(1)); */


// WeakMap：键只能是对象，方法只有4个　delete,get,set,has
let wm = new WeakMap();
let obj = {'name':'zhs',age:10}
wm.set(obj, 'aowin');
console.log(wm);


// Set: 也是一个容器,存储单值数据,不能存储重复的数据
let s = new Set();

// 添加元素add(value)
s.add(100);
s.add('set');
s.add(true);
s.add(100);

/* // 删除元素delete(value) clear()
s.delete(true);

// 判断是否包含某个元素 has(value)
console.log(s.has(100));

// 获得元素个数 size
console.log(s, s.size);

// WeakSet与WeakMap类似, 只能存储对象,不能重复 */
console.log(s);


// 遍历Map或Set
let mKeys = m.keys();
console.log(mKeys); // MapIterator 是Iterator接口遍历器,可以使用for...of进行遍历
for(let k of mKeys){
  console.log(k);
}

// 获得map所有的键值对 遍历器
let en = m.entries();
console.log(en);
for(let entry of en){
  console.log(entry[0], entry[1]);
}

// 遍历set
for(let item of s){
  console.log(item)
}
