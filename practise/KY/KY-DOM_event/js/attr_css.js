var p1 = document.getElementById('p1');
// (1)操作标签的属性: 标签对象.属性名称
console.log(p1.id); // 获得id属性
// p1.id = 'p2';
// 修改标签的class属性 .className
p1.className = 'para pp';

var unList = document.getElementsByName('username');
var username = unList[0].value;
console.log(username);
unList[0].value = "张三";
// 设置只读,修改readOnly属性
unList[0].readOnly = "readOnly";


// (2)操作标签的css样式: 标签对象.style.css属性名称 = 值;
p1.style.color = '#fff';
p1.style.fontSize = '20px';
p1.style.fontFamily = '楷体';
console.log(p1.style.color);
