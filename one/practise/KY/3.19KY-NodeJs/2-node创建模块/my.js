// nodejs每执行一个js文件,会自动创建module对象, module对象会创建一个exports的属性
// module.exports
// exports仅仅是module.exports的一个地址引用
// exports = module.exports

// nodejs默认导出的是module.exports, 初始化的值 是空的

/* var obj = {};
var other = obj;
other.name = "zhs";
console.log(other.name, obj.name);
// other = {"name": "lisi", "age":12}; */

// 导出多个变量或函数 用exports
exports.number = 100;

exports.func = function(){
  console.log('hello node');
};