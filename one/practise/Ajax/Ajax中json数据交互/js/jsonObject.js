//js 创建对象的方式
//(1)json格式对象
/* var obj1 = {
    "stuid":1,
    "name":"张三",
    "sex":"男",
    "age":18
}
//console.log(obj1);

//(2)构造函数
function Student(stuid,name,sex,age){
    this.stuid = stuid;
    this.name = name;
    this.sex = sex;
    this.age = age
}

var obj2 = new Student(2,"李四","女",12);
console.log(obj2);

//(3)使用Object
var obj3 = new Object();
obj3.stuid = 3;
obj3.name = "王五";
obj3.sex = "男";
obj3.age = 25;
console.log(obj3);

//(4)圆形方式扩展性或方法 */

//数组
// var arr1 = ["hello","aowin",100,"ajax"]

// var arr2 = [
//     {"stuid":1,"name":"张三","sex":"男","age":18},
//     {"stuid":2,"name":"李四","sex":"女","age":16},
//     {"stuid":3,"name":"王五","sex":"男","age":25},
// ];

// for(var i = 0;i<arr2.length;i++){
//     console.log(arr2[i],arr2[i].name,arr2[i].sex,arr2[i].age)
// }