// 自己定义模板类
// (3)构造函数(重点),函数名称每个单词首都大写,使用this关键字表示当前的对象,this - 调用这个构造函数的对象
// 与工厂方式的区别:
// 工厂方式:直接有创建了一个对象,通过return语句返回创建的对象; 
// 构造函数:没有直接创建对象,在外界使用new 构造函数名称()来创建,不用加return语句,默认返回的是this
function Cat(name,age,color){
	// 属性
	this.name = name;
	this.age = age;
	this.color = color;
	
	// 方法
	this.bark = function(){
		document.write('喵喵喵');
	};
}

// 创建对象
var c1 = new Cat('小白',1,'黑色');
// 调用对象的属性和方法
document.write(c1.name);
c1.bark();

document.write("<hr />");

var c2 = new Cat('小黑',2,'白色');
document.write(c2.name);
