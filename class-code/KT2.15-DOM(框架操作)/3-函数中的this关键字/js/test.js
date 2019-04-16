// 定义的全局函数为window对象的方法, 全局变量为window对象的属性
// 函数中隐含了this关键字, 表示当前对象 - 当前调用该函数的那个对象
function menu(){
  console.log('调用了menu函数', this);
}

var num = 100;

// (1)普通函数调用 this - window对象
menu();

window.menu();

console.log(window.num, num);

// (2)构造函数使用 - new 构造函数(), this - new创建出来的那个对象
var obj = new menu();

// (3)绑定事件 函数中的this - 发生事件的那个标签元素对象
var btn = document.getElementById('btn');
btn.onclick = menu;

console.log(document);