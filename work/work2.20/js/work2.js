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
    if (ev.keyCode == 13){
        ev.preventDefault();
        input.focus();
    }
}