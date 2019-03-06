//work1
function Circle(r) {

    this.arca = function () {
        var circle_erea = r * r * Math.PI;
        console.log('半径为', r, '的圆面积为：', circle_erea);
        return circle_erea;
    }
    this.girth = function () {
        var circle_girth = 2 * r * Math.PI;
        console.log('半径为', r, '的圆面积为：', circle_girth);
        return circle_girth;
    }
}
var m = new Circle(7);
m.arca();
m.girth();


//work2
function User() {
    this.us_ID = '用户ID：110 ';
    this.us_Password = '用户密码：123 ';
    this.email = '用户email：77777@q.com ';
    this.Show = function () {
        var info = this.us_ID + this.us_Password + this.email;
        console.log(info);
        return info;
    }
}
var u = new User();
u.Show();


//work3
function Calculator(n1, n2) {
    var sum = 0;
    this.addition = function () {
        sum = Number(n1) + Number(n2);
        console.log(n1, "+", n2, '=', sum);
        return sum;
    };
    this.subtration = function () {
        sum = Number(n1) - Number(n2);
        console.log(n1, "-", n2, '=', sum);
        return sum;
    }
    this.multiplication = function () {
        sum = Number(n1) * Number(n2);
        console.log(n1, "*", n2, '=', sum);
        return sum;
    }
    this.division = function () {
        sum = Number(n1) / Number(n2)
        console.log(n1, "/", n2, '=', sum);
        return sum;
    }
}

n1 = prompt('输入第一个数');
n2 = prompt('输入第二个数');
var calculator = new Calculator(n1, n2);
calculator.addition();
calculator.subtration();
calculator.multiplication();
calculator.division();