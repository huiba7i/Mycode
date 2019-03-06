// 先通过模板类将对象的特征及行为进行描述,类对对象的抽象描述, 对象是类的具体实例
// (1)使用内置的模板类 Object创建对象,动态添加的属性和方法
// 创建对象: var 对象名 = new 类名(); 
var per = new Object();
// 添加属性(变量) 对象名.属性名称 = 值
per.name = "张三";
per.age = 10;

// 添加方法(函数) 对象名.方法名 = 函数
per.eat = function(){
    console.log("一天吃三钝饭");
};

// 调用属性或方法
// 对象名.方法名称(参数列表)
per.eat();
console.log("这个人的名字:", per.name);


var cat = new Object();
cat.age = 1;
cat.color = "yellow";

cat.bark = function(){
    console.log("喵喵喵.....");
};

cat.bark();
