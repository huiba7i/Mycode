// work-1
while (true) {
    var year = parseInt(prompt("输入年份"));
    if (year <= 0) {
        alert("输入有误！");
    }
    else if (year % 4 == 0 && (year % 400 == 0 || year % 100 !== 0)) {
        document.write(year, "年为闰年");
        break;
    } else {
        document.write(year, "年不为闰年");
        break;
    }
}
document.write("<br>");
document.write("<hr>");



//work-2
for (var a = 1; a <= 9; a++) {
    for (var b = 1; b <= a; b++) {
        document.write(b, "*", a, "=", a * b, "&nbsp&nbsp");
    }
    document.write("<br>")
}
document.write("<hr>");

// for (var a = 1; a < 10; a++) {
//     for (var b = 1; b <= a; b++) {
//         document.write(b + "*" + a + "=" + a * b + "&nbsp&nbsp");
//     }
//     document.write("<br />");
// }



//work-3
var sum = 0;
for (var i = 1; i <= 99; i += 2) {
    sum += i;
}
document.write("1+3+5+7+9+……+99=" + sum + "<br>");
document.write("<hr>");


// work-4
var m = 0.0001;
var n = 0;
while (m < 8848) {
    m *= 2;
    n++;
}
document.write("对折次数为", n, "能超过珠穆朗玛峰高度", "<br>");
document.write("<hr>");


// work-5   
var x = parseInt(prompt("输入第一个数字"));
var l = prompt("输入运算符");
var y = parseInt(prompt("输入第二个数字"));
switch (l) {
    case "+":
        document.write(x + "+" + y + "的结果为" + (x + y));
        break;
    case "-":
        document.write(x + "+" + y + "的结果为" + (x - y));
        break;
    case "*":
        document.write(x + "+" + y + "的结果为" + (x * y));
        break;
    case "/":
        document.write(x + "+" + y + "的结果为" + (x / y));
        break;
}
document.write("<br>");
document.write("<hr>");


//work-6;
for (var i = 1; i <= 5; i++) {
    for (var n = 1; n <= 5 - i; n++) {
        document.write("&nbsp ");
    }
    for (var j = 1; j <= i * 2 - 1; j++) {
        document.write("*  ");
    }
    document.write("<br>");
}
for (var i = 1; i <= 4; i++) {
    for (var n = 4; n > 4 - i; n--) {
        document.write("&nbsp ");
    }
    for (var j = 1; j < n * 2 + 2; j++) {
        document.write("*  ");
    }
    document.write("<br>");
}



// for (var i = 1; i <= 5; i++) {
//     for (var n = 1; n <= 5 - i; n++) {
//         document.write("&nbsp ");
//     }
//     for (var j = 0; j < i * 2 - 1; j++) {
//         document.write("*  ");
//     }
//     document.write("<br>");
// }
// for (var i = 1; i <= 4; i++) {
//     for (var n = 4; n > 4 - i; n--) {
//         document.write("&nbsp ");
//     }
//     for (var j = 0; j <= n * 2; j++) {
//         document.write("*  ");
//     }
//     document.write("<br>");
// }

/*
var line = 9;
for (var i = 0; i < line; i++) {
    if (i <= 4) {
        for (var j = 1; j <= line - i - 4; j++) {
            document.write('&nbsp');
        }
        for (var j = 0; j < i * 2 + 1; j++) {
            document.write('*');
        }
    } else {
        for (var j = 1; j <= i - line + 6; j++) {
            document.write('&nbsp');
        }
        for (var j = (line - i) * 2 - 1; j > 0; j--) {
            document.write('*');
        }
    }
    document.write('<br />');
}



for (var i = 1; i <= 9; i++) {
    // 输出空格|i-5|个
    for (var j = 1; j <= Math.abs(i - 5); j++) {
        document.write("&nbsp;");
    }
    // 输出*(9-2*|i-5|)个
    for (var j = 1; j <= 9 - 2 * Math.abs(i - 5); j++) {
        document.write("*");
    }
    document.write("<br />");
}



for (var i = 1; i <= 5; i++) {
    // 输出第i行
    // 输出空格(5-i)个
    for (var j = 1; j <= 5 - i; j++) {
        document.write("&nbsp;");
    }

    //	// 输出*(2*i-1)个
    //	for(var j=1;j<=2*i-1;j++){
    //		document.write("*");
    //	}
    // 输出*(9-2*(5-i))个
    for (var j = 1; j <= 9 - 2 * (5 - i); j++) {
        document.write("*");
    }

    document.write("<br />");
}
for (var i = 6; i <= 9; i++) {
    // 输出空格(i-5)个
    for (var j = 1; j <= i - 5; j++) {
        document.write("&nbsp;");
    }
    // 输出*(9-2*(i-5))个
    for (var j = 1; j <= 9 - 2 * (i - 5); j++) {
        document.write("*");
    }
    document.write("<br />");
}

*/
