var obj = {"name":"zhs", "age":10};

function study(){
  console.log(this,"study...");
}

study(); //window.study();
// (1)bind(self, fn, args)
// 将函数绑定到指定的对象,并返回封装了绑定信息的函数
var fun = angular.bind(obj, study);

fun();

// (2)forEach() 遍历对象或数组
// 如果迭代的是一个对象, value - 属性值, key - 属性名称
angular.forEach(obj, function(value, key){
  console.log(value, key);
});

// 如果迭代的是一个数组, value - 数组中的元素, key - 索引
var array = ['hello', 'world', 'angular'];
angular.forEach(array, function(value, index){
  console.log(value, index);
})

console.log(angular);

