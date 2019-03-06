// var year = prompt("请输入一个年份:");
// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//     console.log(year, '是闰年');
// } else {
//     console.log(year, '不是闰年');
// }

for (var i = 1; i <= 9; i++) {
    // 每行输出的乘法表达式
    for (var j = 1; j <= i; j++) {
        document.write(j, 'x', i, '=', i * j, '&nbsp;&nbsp;');
    }
    document.write('<br/>');
}

var sum = 0;
for (var i = 1; i <= 99; i += 2) {
    sum += i;
}
document.write('1~99的奇数和:', sum, '<hr>');


// 菱形
/*
for (var i = 1; i <= 5; i++) {
    // 打印 空格
    for(var j=1;j<=(9-(2*i-1))/2;j++){
        document.write('&nbsp;');
    }
    // 打印*
    for(var j=1;j<=2*i-1;j++){
        document.write('*');
    }
    document.write('<br/>');
}

for(var i=6;i<=9;i++){
    for(var j=1;j<=(9-(2*(5-(i-5))-1))/2;j++){
        document.write('&nbsp;');
    }
    for(var j=1;j<=2*(5-(i-5))-1;j++){
        document.write('*');
    }
    document.write('<br/>');
}
*/

function print(n){
    if(n%2==0){
        n++;
    }
    var mid = (n+1)/2;
    for(var i=1;i<=n;i++){
        // 空格
        for(var j=1;j<=(n-(2*(mid-Math.abs(mid-i))-1)/2);j++){
            document.write('&nbsp;');
        }
        // *
        for(var j=1;j<=2*(mid-Math.abs(mid-i))-1;j++){
            document.write('*');
        }
        document.write('<br/>');
    }
}
print(7);

