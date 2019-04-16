function func(){
  console.log(this);
}

// 直接调用
func(); // this - window

// 构造函数调用
let obj = new func(); // this - 新创建的对象
console.log(obj, '--------------');

let stu = {name: 'zhs', age: 10};

// 可以给函数绑定this
// (1)bind()
/* // 将this为stu对象, 返回绑定后的新的函数
let newFunc = func.bind(stu)
newFunc();
func(); */

// (2)call()
/* // 该次调用时,将this绑定为stu对象
func.call(stu);

func(); */

// (3)apply()
func.apply(stu);

