function Student(name,age){
	this.name = name;
	this.age = age;
	
	this.study = function(){
		// 方法中可以操作对象的属性
		document.write(this.name);
		this.age++;
		document.write('good good study,day day up!');
	};
	
	this.sleep = function(hour){
		document.write('sleep '+hour+" hours one day!");
	};
}

// 创建对象
var stu1 = new Student('小明',10);
var stu2 = new Student('小红',12);

document.write(stu1.name+","+stu1.age);
document.write("<br />");
document.write(stu2.name+","+stu2.age);
document.write("<br />");

stu1.sleep(10);
document.write("<br />");
stu2.sleep(9);

//document.write(stu1.sex);// undefined
// 如果对象中没有该属性,则添加属性;如果有该属性,则修改属性
//stu1.sex = '男';
//document.write(stu1.sex);// 男
//document.write(stu2.sex);// undefined


// 原型方式 - 对已有模板类的对象进行扩展
// 一般结合构造函数使用

// 扩展属性
Student.prototype.sex = '男';
document.write(stu1.sex);// 男
document.write(stu2.sex);// 男

document.write("<hr />")
// 扩展方法
Student.prototype.eat = function(){
	document.write("eat.....<br />");
};
stu1.eat();
stu2.eat();

Student.prototype.play = function(){
	document.write("play games....<br />");
};
stu1.play();
stu2.play();


stu2.study();
document.write(stu2.age);
