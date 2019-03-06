// 数组(长度可变):
//多个数据的集合,取一个统一的标识符,通过下标索引访问到具体的某个数据
// 用于在单个的变量中存储多个值。

// 一维数组(重点)
// (1)
// 声明数组
var grade;
// 开辟存储空间, 每个数据为undefined
grade = new Array(15);

// 给数组中的元素赋值,下标从0开始
grade[0] = 100;
grade[1] = 89;
grade[2] = 99;

// 访问元素
console.log(grade[1]);

// (2)
// 声明并赋值
var score = new Array(5);
score[0] = 99;
score[1] = 88;

// 每个元素都有具体值
var score2 = [56, 49, 98, 76, 55];
console.log(score2[2]);

var score3 = new Array(76, 88, 94, 69);
// 修改元素的值
score3[0] = 77;
console.log(score3[0]);


// 方法
// 添加元素
score3.push('100'); // 向数组末尾添加元素
score3[5] = 60;
score3.unshift(79); // 向数组开头添加元素

// 删除元素
score3.pop(); // 删除最后一个元素
console.log(score3, score3.length);

// 遍历数组(输出数组中的每个元素)
for (var i = 0; i < score3.length; i++) {
    console.log(i, score3[i]);
}

// 二维数组
var arr = [[100, 34, 68], [true, "aowin"], [45, 76, "hello"], ["c", false, null]];
console.log(arr[0]); // 一维数组
console.log(arr[0][1]); // 一维数组中的元素34

// 遍历二维数组
for (var i = 0; i < arr.length; i++) {
    // arr[i] - 一维数组
    for (var j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}
