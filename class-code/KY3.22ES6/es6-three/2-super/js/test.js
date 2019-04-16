// es6中的super关键字
let obj = {
  "name": 'zhs',
  // 当原型中有和对象属性同名的属性时,通过super来访问原型中同名的
  // super代表对象的原型对象, 只能在对象的方法中使用
  info(){
    console.log(`name is ${this.name}, name in prototype is ${super.name}`);
  }
}

/* obj.info();
console.log(obj); */
let proto = {
  "name": 'aowin'
}
// 修改对象的原型
Object.setPrototypeOf(obj, proto);
obj.info();
console.log(obj);
