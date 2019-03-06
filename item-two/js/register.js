//省市联级
function $(id) {
    return document.getElementById(id);
}
window.onload = function () {
    var province = document.getElementById("province"); //省份
    var city = document.getElementById("city"); //城市
    var proArry = new Array;
    proArry = ["浙江省", "四川省", "江西省", "福建省", "安徽省", "湖南省"];
    for (var i = 0; i < proArry.length; i++) {
        var op = document.createElement("option");
        op.innerHTML = proArry[i];
        op.value = proArry[i];
        province.appendChild(op);
    }
}
province.onchange = function () {
    city.length = 1;
    var cityArry = new Array;
    cityArry["请选择省/城市"] = [];
    cityArry["浙江省"] = ['杭州市', '宁波市', '温州市'];
    cityArry["四川省"] = ['成都市', '重庆市'];
    cityArry["江西省"] = ['南昌市', '吉安市', '抚州市', '九江市', '上饶市'];
    cityArry["福建省"] = ['福州市', '厦门市', '泉州市', '漳州市'];
    cityArry["安徽省"] = ['安徽省', '合肥市'];
    cityArry["湖南省"] = ['湖南省', '长沙市'];
    var provalue = province.value;
    var cityArryValue = cityArry[provalue];
    for (var j = 0; j < cityArryValue.length; j++) {
        var opCity = document.createElement("option");
        opCity.innerHTML = cityArryValue[j];
        opCity.value = cityArryValue[j];
        city.appendChild(opCity);
    }
}
//邮箱
var email = $("email");
email.onblur = function () {
    if (/[1-9a-z]+@[1-9a-z]+\.[1-9a-z]*/i.test(email.value)) {
        $("email_prompt").innerHTML = "";
        return true;
    } else {
        $("email_prompt").innerHTML = "输入有误";
        return false;
    }
}
//昵称
var nickName = $("nickName");
nickName.onblur = function () {
    if (/^\w{4,16}$/.test(nickName.value)) {
        $("nickName_prompt").innerHTML = "";
        return true;
    } else {
        $("nickName_prompt").innerHTML = "昵称有误，至少四位字符";
        return false;
    }
}
//密码
var pwd = $("pwd");
pwd.onblur = function () {
    if (/^[0-9a-z]{6,16}$/i.test(pwd.value)) {
        $("pwd_prompt").innerHTML = "";
        return true;
    } else {
        $("pwd_prompt").innerHTML = "密码有误，至少六位字符"
        return false;
    }
}
//确认密码
var repwd = $("repwd");
repwd.onblur = function () {
    if (repwd.value == "") {
        $("repwd_prompt").innerHTML = "密码不能为空";
        return false;
    } else if (repwd.value == pwd.value) {
        $("repwd_prompt").innerHTML = "";
        return true;
    } else {
        $("repwd_prompt").innerHTML = "两次密码不一致";
        return false;
    }
}
function subConfirm(){
    var p = $("province").value;
    var c = $("city").value;
    if(!email.onblur()){
        alert("邮箱有误");
        return;
    }
    if(!nickName.onblur()){
        alert("昵称有误");
        return;
    }
    if(!pwd.onblur()){
        alert("密码有误");
        return;
    }
    if(!repwd.onblur){
        alert("两次密码不一致");
        return;
    }
    if(p == "请选择省/城市"){
        alert("请选择省份");
        return;
    }if(c == "请选择城市/地区"){
        alert("请选择城市");
        return;
    }
    $("myform").submit();
}
