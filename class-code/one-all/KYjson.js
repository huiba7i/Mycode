// 文字记号方式(JSON对象)(重中之重) 
// JSON - JavaScript Object Notation,是数据交换格式(独立于平台)
// 常用于前端与后台服务器进行数据交换
// 属性名称""可以不加,属性值如果是字符串一定要引号
var stu = {"name":"张三",age:10,"sex":"男"};

document.write(stu.name+","+stu.age+","+stu.sex);

document.write("<hr />");

var student = {
	"name":"李四",
	"age":15,
	"study":function(){
		document.write("good good study,day day up!");
	}
};

document.write(student.name+","+student.age);
document.write("<br />");
student.study();

// 模拟与后台的数据交换
// 后台传递过来的数据是json格式的文本字符串
var data = '{"name":"王五","age":18,"sex":"女"}';
//alert(typeof(stu));// object
//alert(typeof(data));// string

//document.write(data.name);// undefined

// 将json格式的字符串转换成json对象
//(1)
var obj = eval("("+data+")");
//alert(obj);
//alert(typeof(obj));
document.write(obj.name+","+obj.age+","+obj.sex);
//(2)
// JSON.parse(string) -> object
var s = JSON.parse(data);
//alert(typeof s);
document.write(s.name);

// JSON.stringify(object) -> string
