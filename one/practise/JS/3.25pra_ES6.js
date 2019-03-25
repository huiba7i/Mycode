//数组的扩展
let leArray = {
    '0': 'd',
    '1': '3',
    length: 2
}
let newleArray = Array.from(leArray);
console.log(newleArray);

//模板字符串
let name = `ding
mou`;
let time = `today`;
let content = `hello ${name} , how are you ${time}.`
console.log(content);


//Map
let m = new Map;
//Map.set(键key，值value)   添加或修改元素
m.set(1, 'hello');
m.set(1, 'es6');     //键不能重复，否则会修改键对应的值
m.set(2, 'ding');
m.set([4, 5], 31415);

//Map.get(key)  获取元素
let getMap1 = m.get(1);
let mapArray = m.values();
let mapKey = m.keys();

//Map.delete(键)--删除键对应的值   Map.clear()--清空Map值
// m.delete();
// m.clear();

//遍历出所有都的value值
for (let value of mapArray) {
    console.log(value)
}
//遍历出所有的键
for (key of mapKey) {
    console.log(key);
}

//获得Map所有的键值对 遍历出Map中的所有键值对
let keyValue = m.entries();
console.log(keyValue);
for(let KV of keyValue){
    console.log(KV);
}
console.log(getMap1, '所有的值：', m.values(), '所有的键：', m.keys());

//WeakMap --WeakMap 的所有 key 必须是对象。它只有四个方法:
//1. delete(key)
//2. has(key)
//3. get(key) 
//4. set(key, val)
let wMap = new WeakMap;
let one = {},
    two = function () { };
wMap.set(one, 77);
wMap.set(two,7777)
console.log(wMap.get(one));


//Symod数据类型
let sID = Symbol('id');
console.log(sID,typeof(sID));

let obj = {
    [Symbol('random')]:'this is Symbol',
    name:'ding',
    age:7
}
//获得对象中的symbol属性
let sys = Object.getOwnPropertySymbols(obj)[0];
console.log(sys,obj[sys]);
//获得对象中除symbol属性以外的属性名
let proNames = Object.getOwnPropertyNames(obj);
console.log(proNames);