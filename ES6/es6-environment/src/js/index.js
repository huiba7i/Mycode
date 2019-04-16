let i = 777;
console.log(i);

let [l, m, n] = [5, 7];  //n =undefined 
console.log(l, m, n);

//q = 3为默认值，如果未匹配就会赋默认值
let [o, p, q = 3] = [9, 6];
console.log(o, p, q);

let [a, b, c] = [1, 2, 3];
console.log(a, b, c)

let OBJ = {
    name: "ding",
    age: "3"
}

let { name: un, age: an } = OBJ;
console.log(un, an);

function text([o, b, j]) {
    return o + b + j;
}
let sum = text([7, 77, 777]);
console.log(sum)

//..。remain --其他多与的参数——它们为一个数组
function add(a, ...remain) {
    let sum = 0;
    for (let val of remain) {
        sum += val
        // val 将多余的参数转换成数字
        console.log(val)
    }
    console.log(a, sum);
    return sum;
}
add(2, 3, 4, 5)
console.log(add(2, 3, 4, 5));


//箭头函数::  let 函数名 = (参数) => 函数体;
// 如果箭头函数只有一个参数，可省略()
let allSum = n => {
    let s = n + 7;
    return s;
}
let num = allSum(7);
document.write("<h1>" + num + "</h1><br>");

// 如果函数体只有一条语句, 可省略{ } ; 多于一条语句 , 必须用{ }，并且使用return语句返回
let oneFun = n => console.log(n);
oneFun(7);

let getPrice = () => 7.77;
console.log(getPrice());
//函数长度不包括带默认值参数
console.log("函数名称：" + getPrice.name, "函数参数长度：" + getPrice.length);

console.log(this)   //this = window;
function text() {
    console.log(this)   //this = window
}
text();

//this
// function PenSon(name,age){
//     this.name = name;
//     this.age = age;        //构造函数 this = 当前对象
//     self = this;    //self 指窗口本身，它返回的对象跟window对象是一模一样的
//     setInterval(function(){
//         // this.age++;        // this = window
//         // console.log(this.age);
//         self.age++;
//         console.log(self.name,self.age);
//     },1000)
// }

function PenSon(name, age) {
    this.name = name;
    this.age = age;

    setInterval(() => {
        //this = PenSon()构造函数
        this.age++;     //箭头函数没有this，其中的this是定义时所在的对象，它的指向是固定的
        //let nav = ()=>{console.log(this)}---> this = nav()
        console.log(this.age, this)
    }, 1000)
}
let newPenSon = new PenSon("ding", 10);