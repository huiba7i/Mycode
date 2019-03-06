function $(id) {
    return document.getElementById(id);
}

//邮箱
$("email").onblur = function () {
    if (/^\w{4,16}$/i.test($("email").value)) {
        $("emailpr").style.color = "green";
        $("emailpr").innerHTML = "√";
        return true;
    }
    if (/[1-9a-z]+@[1-9a-z]+\.[1-9a-z]*/i.test($("email").value)) {
        $("emailpr").style.color = "green";
        $("emailpr").innerHTML = "√";
        return true;
    }
    else {
        $("emailpr").style.color = "red"
        $("emailpr").innerHTML = "×";
        return false;
    }
}
//密码
$("pwd").onblur = function () {
    if (/^[1-9a-z]{6,16}$/i.test($("pwd").value)) {
        $("pwdpr").style.color = "green";
        $("pwdpr").innerHTML = "√";
        return true;
    } else {
        $("pwdpr").style.color = "red"
        $("pwdpr").innerHTML = "×";
        return false;
    }
}

//登陆验证
function loginSub() {
    if (!$("email").onblur()) {
        alert("邮箱或昵称有误");
        return;
    }
    if (!$("pwd").onblur()) {
        alert("密码有误");
        return;
    }
    $("loginForm").submit();
}