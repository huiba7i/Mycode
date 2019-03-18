// work1
var now = new Date;
var year = now.getFullYear();
var month = now.getMonth() + 1;
var day = now.getDay();
var hours = now.getHours();
var minute = now.getMinutes();
var seconds = now.getSeconds();
document.write(year, '年', month, '月', day, '日', hours, '时', minute, '分', seconds, '秒');
if (8 < hours && hours < 12) {
    alert('早上好');
} else if (12 <= hours && hours < 14) {
    alert('中午好');
} else if (14 <= hours && hours < 18) {
    alert('下午好');
} else if (19 <= hours && hours <= 24) {
    alert('晚上好！天黑了，心还是要亮着')
}

//work2
var str1 = "201010-34234-354234-323423";
var str2 = str1.split("-");
var sum = 0;
for (var i = 0; i < str2.length; i++) {
    sum += Number(str2[i]);
}
console.log(sum);

// work3
function Sumfun() {
    var sum = 0;
    var marks = new Array(10);
    for (var i = 0; i <= 9; i++) {
        var mark = Number(prompt('输入成绩'));
        marks[i]=mark;
        sum += mark;
    }
    var s = marks.sort();
    console.log('成绩最低为：',s[0])
    console.log('成绩最高为：',s[9])
    console.log("成绩总和为", sum)
}
Sumfun();

//work4

var str3 = "abaasdffggghhjjkkgfddssssfs342f43";
//(1)
console.log('该字符串长度为：', str3.length);
//(2)
console.log(str3[0], str3[3], str3[5], str3[9]);
// (3)
for (var i = 0; i < str3.length; i++) {
    var strx = str3[i];
    if (strx == 'i') {
        alert('该字符串中有字母"i"');
        break;
    } else {
        alert('该字符串中没有字母"i"');
        break;
    }
}
for (var i = 0; i < str3.length; i++) {
    var strx = str3[i];
    if (strx == 'c') {
        alert('该字符串中有字母"c"');
        break;
    } else {
        alert('该字符串中没有字母"c"');
        break;
    }
}
for (var i = 0; i < str3.length; i++) {
    var strx = str3[i];
    if (strx == 'b') {
        alert('该字符串中有字母"b"');
        break;
    } else {
        alert('该字符串中没有字母"b"');
        break;
    }
}
//(4)
console.log(str3.substring(1, 5));
//(5)
var sum = 0;
for (var i = 0; i <= str3.length; i++) {
    var strs = str3[i];
    if (strs == "f") {
        sum++;
    }
}
console.log("'f'出现的次数为：", sum, "次");


//work5
var n = Number((Math.random()).toFixed(2)*100);
while(1){
    var p = Number(prompt("输入一个数值(在0到100之间)"));
    if(p>n){
        alert('猜大了');
    }else if(p<n){
        alert('猜小了');
    }else{
        alert('猜对了');
        break;
    }
}

//work6
var y = Number(prompt("输入你出生年份"));
var m = Number(prompt("输入你出生月份"));
var d = Number(prompt("输入你出生日期"));
var date = new Date(y,m,d);
var  birthDay = date.getTime();
var dateS = new Date();
var dateMs = dateS.getTime();
var liveDay = Math.ceil((dateMs-birthDay)/1000/60/60/24);
//(1)
console.log('至今为止存在了',liveDay,'天');
//(2)
var newY = y+100;
var date2 = new Date(newY,m,d);
var newBirthday = date2.getTime();
var newLiveday = Math.ceil((newBirthday-birthDay)/1000/60/60/24);
console.log('如果能活到100岁，还有',newLiveday,'日子可以过');


//求最大最小值
var max = Number.MIN_VALUE;
var min = Number.MAX_VALUE;
function Sum_fun() {
    for (var i = 0; i < 10; i++) {
        var x = Number(prompt("输入成绩"));
        if (x > max) {
            max = x;
        }else if(min>x){
            min=x;
        }
    }
    console.log('最大值：',max,' 最小值：',min);
    
}
Sum_fun();