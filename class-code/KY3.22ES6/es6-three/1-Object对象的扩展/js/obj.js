/* // es5
var obj = {
  "name": 'zhs',
  "age": 10,
  "study": function(){
    console.log('good good study, day day up!');
  }
}
console.log(obj);

// es6
let name = 'aowin';
let n = 12;
let prop = 'grade';
let stu = {
  name, // 相当于 name: name,
  age: n,
  ['s'+'ex']: '男',
  [prop]: 100, // js表达式作为属性名称,表达式放在[]内
  study(){
    console.log('good object!');
  }
}
console.log(stu);
stu.study();

// 新增方法
// (1)Object.is(val1, val2) 相当于val1===val2
// (2)Object.assign(target, src, ...); // 将源对象复制到target目标对象
// 将源对象中属性复制到目标对象中,如果有相同的属性名,则覆盖值,否则添加新的属性到目标对象
let target = {"name": 'zhs', study(){
  console.log(`${this.name} is studying!`);
}}

let o1 = {
  "name": 'lisi',
  "age": 10,
  sleep(hour){
    console.log(`${this.name} sleep ${hour} hours a day!`);
  }
}
let o2 = {
  "sex": '男'
}
Object.assign(target, o1, o2);
console.log(target);
target.sleep(10);

// (3) 获得指定对象的指定属性的描述信息(四大特性: value, writable, enumerable, configurable)
let propDescr = Object.getOwnPropertyDescriptor(target, 'name');
console.log(propDescr); */

// (4) 获得或设置某个对象的原型
function Person(name){
  this.name = name;
}
Person.prototype.eat = function(){
  console.log('eating...');
}
Person.prototype.type = '哺乳动物'
// 原型为该类所有对象共享的
// 原型本质就是一个js对象, 每个对象都有__proto__属性,指向的是模板类的Prototype原型, __proto__有一个constructor属性指向模板类构造函数,所有对象默认的原型是Object对象
let p = new Person('admin'); 
p.type = "动物";
console.log(p);
console.log(p.type); // 先去对象自身中查找属性,如果没有,再去原型中查找属性

let pp = new Person("aowin");
console.log(pp, pp.type);

// 获得对象的原型
console.log(p.__proto__); // 不推荐
// 推荐写法
console.log(Object.getPrototypeOf(p));

// 修改对象的原型 Object.setPrototypeOf(对象, 原型对象)
let proto = {
  "age": 10,
  "sex": '男',
  speak(){
    console.log('yiyaya....');
  }
}

function Monkey(age, sex){
  this.age = age;
  this.sex = sex;
  this.speak = function(){
    console.log('yiyaya....');
  }
}

Object.setPrototypeOf(p, new Monkey(10, '男'));
console.log(p);
p.speak();
