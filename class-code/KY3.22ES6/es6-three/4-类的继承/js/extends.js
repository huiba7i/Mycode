class Animal{
  // constructor(){}
  constructor(name){
    this.name = name;
  }

  bulk(){
    console.log('sound.....');
  }
}

// 让Cat类继承Animal类
// Cat - 子类, Animal - 父类(或超类)
// (1)使用extends关键字, 子类可以继承父类的属性和方法
// (2)子类的构造方法中必须调用父类的构造方法,使用super()
class Cat extends Animal{
  // constructor(){
  //   super();
  // }
  constructor(name){
    super(name); // 调用父类中的构造函数, 继承父中的属性
  }
}

// let c = new Cat();
let c = new Cat('小白');
c.bulk();
console.log(c.name);
console.log(c);
