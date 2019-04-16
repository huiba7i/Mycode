// Promise对象有3个状态 未完成, 完成(成功), 失败
/* 两种变化途径:
未完成 -> 成功 ,回调resolve()函数
未完成 -> 失败, 回调 reject()函数
*/
// 创建一个Promise对象
let prom = new Promise(function(reslove, reject){
  // 操作代码
  // 直接操作成功, 调用reslove()
  // reslove('sucess');
  // 假设直接操作失败, 调用reject()
  reject('fail');

});

// 通过调用 then()方法, 给promise添加成功和失败的回调函数
prom.then((result)=>{
  console.log(result);
}, (error)=>{
  console.log(error);
});
