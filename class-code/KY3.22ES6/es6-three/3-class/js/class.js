// 定义对象的一个模板
// ES5
function Language(name, author, year){
  // 属性
  this.name = name;
  this.author = author;
  this.year = year;

  // 方法 - 对象方法,必须先创建对象,再对象来调用该方法
  this.update = function(){
    console.log('版本更新了');
  }
}
// 原型方法
Language.prototype.summary = function(){
  console.log(`${this.name}由${this.author}在${this.year}年制造`);
}

// 静态方法:定义在构造函数上的方法,直接由构造函数名称来调用,不需要创建对象
Language.test = function(){
  console.log("I am a static function");
}

Language.test();
// Language.update(); // error

// 创建对象
let l = new Language('javascript', 'Brendan Eich', 1995);
// l.summary();
l.update();
console.log(l);
console.log(new Object());
// console.log(Math);

// ES6
// class只是function构造函数的语法糖
class Language{
  // 构造方法
  constructor(name, author, year){
    // 对象的属性和方法
    console.log('调用constructor');
    this.name = name;
    this.author = author;
    this.year = year;

    this.update = function(){
      console.log('版本更新了');
    }
  }

  // 方法 - 原型对象的方法
  summary(){
    console.log(`${this.name}由${this.author}在${this.year}年制造`);
  }	

  // 静态方法,方法名称前面加static关键字, 不需要创建对象,直接由类名(构造函数名称)来调用
  static test(){
    console.log('静态方法');
  }
}

// // 创建对象,自动调用constructor()
// let js = new Language('javascript', 'Brendan Eich', 1995);
// js.summary();

console.log(typeof Language); // function

// console.log(js);
Language.test();

// Math.sqrt(4);