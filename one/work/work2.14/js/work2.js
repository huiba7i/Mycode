var $ = function (id) {
    return document.getElementById(id);
}

//浏览器加载完成时给下拉框添加年份月份和日期
window.onload = function () {
    var year = $("year");
    var month = $("month");
    var day = $("day");
    //添加年份
    var yearnum = year.getElementsByTagName("option");
    for (var i = 1; i < 30; i++) {
        var op = document.createElement("option");
        op.innerHTML = Number(yearnum[0].value) + i;
        year.appendChild(op);
    }
    //添加月份
    for (var i = 1; i < 12; i++) {
        var op = document.createElement("option");
        op.innerHTML = Number(month[0].value) + i;
        month.appendChild(op);
    }
    //添加日
    for (var i = 1; i < 31; i++) {
        var op = document.createElement("option");
        op.innerHTML = Number(day[0].value) + i;
        day.appendChild(op);
    }
}

//当月份发生改变时显示对应的天数
function selectMonth() {
    var year = Number($("year").value);     //年份value值
    var month = Number($("month").value);   //月份value值
    var day = $("day");     //日期
    day.options.length = 0;     //当月份发生变化时清空日期option
    if (month == 4 || month == 6 || month == 9 || month == 11) {
        //判断月份为4,6,9,11时添加30个日期的option并赋值
        for (var i = 1; i < 31; i++) {
            var op = document.createElement("option");
            op.innerHTML = i;       //添加的日期option内容1至总天数的数字
            day.appendChild(op);
        }
        //月份为1,3,5,7,8,10,12时添加31个日期的option并赋值
    } else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        for (var i = 1; i < 32; i++) {
            var op = document.createElement("option");
            op.innerHTML = i;
            day.appendChild(op);
        }
        //判断年份,当为闰年时2月份的日期为29天，添加29个日期option并赋值
    } else if (year % 4 == 0 && year % 400 != 0 && month == 2) {
        for (var i = 1; i < 30; i++) {
            var op = document.createElement("option");
            op.innerHTML = i;
            day.appendChild(op);
        }
        //当年份为非闰年时2月份28天，添加28个日期option并赋值
    } else if (year % 4 != 0 || year & 400 == 0 || month == 2) {
        for (var i = 1; i < 29; i++) {
            var op = document.createElement("option");
            op.innerHTML = i;
            day.appendChild(op);
        }
    }
}
function selectYear(){
    selectMonth();
}