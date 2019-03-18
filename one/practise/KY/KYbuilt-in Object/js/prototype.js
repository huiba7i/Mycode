function Person(name,age,sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.speak = function(){
        console.log("i can speak....");
    };
}

// 创建对象
var p = new Person("张三", 15, "男");
var per = new Person("李四", 16, "男");
console.log(p, typeof p);

/*
// 给对象添加属性和方法
p.birth = "1990-5-1"; // 如果对象中存在该属性,则修改属性的值;否则添加该属性
console.log(p.name,p.birth);
console.log(per.name,per.birth);// per对象中没有添加该属性

// 如果对象中存在该方法,则修改方法的值;否则添加该方法
p.sleep = function(hour){
    console.log("sleep "+hour+" hours a day");
};
p.sleep(8);
per.sleep(9);
*/

// 对象原型化,对模板类(构造函数)的属性和方法进行扩展,扩展后该模板类的所有对象都有该属性和方法
// 扩展属性: 构造函数名称.prototype.属性名称 = 值;
Person.prototype.birth = "1990-5-1";
// console.log(p.birth, per.birth);

// 扩展方法: 构造函数名称.prototype.方法名称 = 函数;
Person.prototype.sleep = function(hour){
    console.log("sleep "+hour+" hours a day");
};
// p.sleep(8);
// per.sleep(9);

// 原型化的优先级
p.birth = "1990-6-1";
console.log(p.birth); // 通过对象.属性, 先在对象的属性中查找,如果没有找到,则再去原型中查找
// 删除属性
delete p.birth;
console.log(p.birth);