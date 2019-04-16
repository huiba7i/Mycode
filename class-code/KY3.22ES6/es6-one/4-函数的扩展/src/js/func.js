// 函数的扩展
// (1)参数使用默认值
function getPrice(price, tax=1){
  return price*tax;
}

let newPrice = getPrice(100);
console.log(newPrice);
newPrice = getPrice(100, 0.6);
console.log(newPrice);

// (2)函数的length, name属性
console.log("函数参数个数:",getPrice.length); // 不包括默认值参数
console.log("函数名称:",getPrice.name);

// (3)函数的rest参数(...参数名称), 用于接收多余的实际参数值, 替代了arguments对象
function add(a, ...b){
  console.log(a, b);
}

add(1,2,3,3,4,5);
add(2,9);
add(5);
add();

// (4)箭头函数
let sum = function(n){
  let s = 0;
  for(let i=1;i<=n;i++){
    s+= i;
  }

  return s;
};

// 参数只有一个时,()可省, 函数体只有一条语句时,{}可省
let addSum = n => n+1;
let res = addSum(3);
console.log(res);


/* // 普通函数中的this,随着运行的环境而变化, this的指向是可变的
console.log(this); // window
function test(){
  console.log(this);
}
test(); // 普通调用: this - window
new test(); //构造函数调用: this - 新创建的对象 */

// 箭头函数没有自己的this, 其中的this指向的是定义时所在的对象,它的指向是固定的
/* let nav = ()=>{console.log(this)};
nav(); */

function Person(name, age){
  this.name = name;
  this.age = age;
  self = this;
  setInterval(function(){
    // this.age++;
    // console.log(this.age); // window
    self.age++;
    console.log(self.age);
  } , 1000);
}

/* function Person(name, age){
    this.name = name;
    this.age = age;

    setInterval(()=>{
      this.age++;
      console.log(this.age);
    }, 1000);

} */
let per = new Person("zhs", 10);
