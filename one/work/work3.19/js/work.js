function $(id) {
    return document.getElementById(id);
}
//验证用户名
function checkName() {
    var username = $("username").value;
    var checkN = $("checkN");
    if (username == "") {
        checkN.innerHTML = "用户名不能为空";
        return false;
    } else {
        checkN.innerHTML = ""
        return true;
    }
}
//验证密码
function checkPwd() {
    var password = $("password").value;
    var checkP = $("checkP");
    if (password == "") {
        checkP.innerHTML = "密码不能为空";
        return false;
    } else {
        checkP.innerHTML = "";
        return true;
    }
}

//提交验证
function formSub() {
    var login = $("myform");
    if (!checkName()) {
        alert("账号不能为空!");
        return;
    }
    if (!checkPwd()) {
        alert("密码不能为空!");
        return;
    }
    login.submit();
}

//enter键切换
function changing(ev, input) {
    if (ev.keyCode == 13) {
        ev.preventDefault();
        input.focus();
    }
}

var http = require("http");
var url = require("url");

var server = http.createServer(function (req, resp) {
    // console.log("请求的url地址：", req.url);

    resp.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });

    if (req.url.indexOf("/log") == 0) {
        var logUrl = url.parse(req.url, true);

        console.log(req.parse);
        console.log(logUrl);

        resp.write("<html><head></head><body><h1> 欢迎登陆邮箱：" + logUrl.query.username + "</h1></body></html>");
    } else {
        resp.write("<html><head></head><body><h1>404: 您请求的页面不存在</h1></body></html>");
    }
    resp.end();
});

server.listen(7777);