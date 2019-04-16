// 对象:现实世界存在的每一个实体,每个实体都有自己的状态(属性)和行为(方法)
// 在js中属性用变量来表示,方法用函数来表示

// 模板类:对对象特征的抽象描述

// 创建对象 - new关键字

// (1)原始方式 - 使用Object模板类,创建对象后动态设定属性和方法
/*// 创建一个顾客对象
var customer = new Object();

// 添加属性,用引用变量名.属性名称 = 属性值
// 名字
customer.name = '朱丽叶';
// 年龄
customer.age = 28;
// 体重,kg为单位
customer.weight = '50kg';

// 添加方法,引用变量名.方法名称 = function(){}
customer.buy = function(){
	document.write('买买买');
};

// 调用对象的属性或方法
// 属性调用:引用变量名.属性
document.write("名字:"+customer.name+" ");
document.write("年龄:"+customer.age+" ");
document.write("体重:"+customer.weight+" ");
document.write("<br />")
// 方法调用:引用变量名.方法名称(参数)
customer.buy();

document.write("<hr />")
// 
var cat = new Object();
cat.name = '小白';
cat.age = 1;
cat.color = '黑色';

cat.bark = function(){
	document.write('喵喵喵');
};

document.write("名字:"+cat.name+" ");
document.write("年龄:"+cat.age+" ");
document.write("颜色:"+cat.color+" ");
//document.write("体重:"+cat.weight+" ");// 当调用不存在的属性时,undefined

cat.bark();
//cat.buy();// 调用没有的方法会报错

// 修改对象的属性,引用变量名.属性名称 = 值
cat.age = 2;
document.write("修改后年龄为:"+cat.age);
*/

// 当使用原始方式创建多个相同类型的对象时,代码需要重复写多次
// (2)工厂方式
function createCat(name,age,color){
	// 创建对象
	var cat = new Object();
	// 给对象添加属性
	cat.name = name;
	cat.age = age;
	cat.color = color;
	// 给对象添加方法
	cat.bark = function(){
		document.write('喵喵喵');
	};
	
	return cat;// 返回新创建的对象
}

var c1 = createCat('小白',1,'黑色');
var c2 = createCat('小黑',2,'白色');

document.write(c1.name);
document.write(c2.name);

