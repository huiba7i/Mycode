// (2) 自定义模板类 (构造函数 - 函数名称每个单词首字母大写)
// 构造函数
// (2.1)无参数的构造函数
function Person(){

}
// 创建对象语法 : var 对象名 = new 类名();
var p = new Person();
p.name = "李四";
p.study = function(){
    console.log("good good study, day day up!");
};

p.study();

// (2.2)有参数的构造函数,其中的参数主要用来给对象的属性赋值
// this(当前对象) - 当前调用该函数创建的对象 
function Cat(newAge, newColor){
    // 属性
    // this.age = 1;
    // this.color = 'white';
    this.age = newAge;
    this.color = newColor;

    // 方法
    this.bark = function(){
        console.log("喵喵喵....");
    };
}
/*
// 创建对象
var c1 = new Cat();
console.log(c1.age, c1.color);
c1.bark();

// 创建对象(新的对象)
var c2 = new Cat();
console.log(c2.age, c2.color);
*/

var cat1 = new Cat(0, 'black');
var cat2 = new Cat(1, 'gray');
console.log(cat1.age, cat1.color);
console.log(cat2.age, cat2.color);