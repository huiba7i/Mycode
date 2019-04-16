"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var i = 777;
console.log(i);

var _ref = [5, 7],
    l = _ref[0],
    m = _ref[1],
    n = _ref[2]; //n =undefined 

console.log(l, m, n);

//q = 3为默认值，如果未匹配就会赋默认值
var _ref2 = [9, 6],
    o = _ref2[0],
    p = _ref2[1],
    _ref2$ = _ref2[2],
    q = _ref2$ === undefined ? 3 : _ref2$;

console.log(o, p, q);

var a = 1,
    b = 2,
    c = 3;

console.log(a, b, c);

var OBJ = {
    name: "ding",
    age: "3"
};

var un = OBJ.name,
    an = OBJ.age;

console.log(un, an);

function text(_ref3) {
    var _ref4 = _slicedToArray(_ref3, 3),
        o = _ref4[0],
        b = _ref4[1],
        j = _ref4[2];

    return o + b + j;
}
var sum = text([7, 77, 777]);
console.log(sum);

//..。remain --其他多与的参数——它们为一个数组
function add(a) {
    var sum = 0;

    for (var _len = arguments.length, remain = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        remain[_key - 1] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = remain[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var val = _step.value;

            sum += val;
            // val 将多余的参数转换成数字
            console.log(val);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    console.log(a, sum);
    return sum;
}
add(2, 3, 4, 5);
console.log(add(2, 3, 4, 5));

//箭头函数::  let 函数名 = (参数) => 函数体;
// 如果箭头函数只有一个参数，可省略()
var allSum = function allSum(n) {
    var s = n + 7;
    return s;
};
var num = allSum(7);
document.write("<h1>" + num + "</h1><br>");

// 如果函数体只有一条语句, 可省略{ } ; 多于一条语句 , 必须用{ }，并且使用return语句返回
var oneFun = function oneFun(n) {
    return console.log(n);
};
oneFun(7);

var getPrice = function getPrice() {
    return 7.77;
};
console.log(getPrice());
//函数长度不包括带默认值参数
console.log("函数名称：" + getPrice.name, "函数参数长度：" + getPrice.length);

console.log(undefined); //this = window;
function text() {
    console.log(this); //this = window
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
    var _this = this;

    this.name = name;
    this.age = age;

    setInterval(function () {
        //this = PenSon()构造函数
        _this.age++; //箭头函数没有this，其中的this是定义时所在的对象，它的指向是固定的
        console.log(_this.age, _this);
    }, 1000);
}
var newPenSon = new PenSon("ding", 10);