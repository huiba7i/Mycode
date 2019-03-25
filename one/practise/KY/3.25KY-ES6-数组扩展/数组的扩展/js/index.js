//(1)spread运算符 ...数组名
function add(x, y, z){
  return x+y+z;
}

let arr = [1,2,3];
// spread运算符 将数组中的元素进行分隔成单个的变量
let result = add(...arr);
console.log(result);

// 复制数组
let brr = [...arr];
console.log(brr)

//(2)Array.from() - 将类似数组的对象转换为真正的数组
let liList = document.getElementsByTagName("li");
// liList.push('hello'); // 不能调用Array中的方法
console.log(liList, liList[0]); // 类似数组的对象
let newArr = Array.from(liList);
newArr.push('hello');
console.log(newArr);

// 类似数组的对象, 必须有一个length属性
let arrayLike = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
};
console.log(arrayLike);
let array = Array.from(arrayLike);
console.log(array);