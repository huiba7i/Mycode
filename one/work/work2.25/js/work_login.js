//账号验证
var userValue = document.getElementById("user");
var password = document.getElementById("password");
function userName(){
    if(/^dingmouren$/.test(userValue.value)){
        return true;
    }else{
        return false;
    }
}
//密码验证
function passWord(){
    console.log(password.value,/^123$/.test(password));
    if(/^123$/.test(password.value)){
        return true;
    }else{
        return false;
    }
}
//提交验证
function sub(){
    var myform = document.getElementById("myform");
    if(!userName()){
        alert("账号错误！");
        return;
    }
    if(!passWord()){
        alert("密码错误！");
        return;
    }
    localStorage.setItem("username",userValue.value);
    myform.submit();
}