// 导入自定义的模块 通过require()返回的是module.exports
// 路径 ./当前目录, ../上一级目录, / web项目的根目录

var my = require('./my');
console.log(my);
console.log(my.number);

my.func();

console.log(my.obj);

// 导入模块
var mod = require('./module/mod.js');
console.log(mod.name, mod.age);
mod.study();
