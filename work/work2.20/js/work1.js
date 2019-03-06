//ID封装
function $(id) {
    return document.getElementById(id);
}

//国省联级
//浏览器加载完成时添加国家option
window.onload = function () {
    var countryslt = $("countryselect");
    var count = ['中华人民共和国', '美国', '法国', '俄罗斯', '英国'];
    for (var i = 0; i < count.length; i++) {
        var op = document.createElement("option");
        op.value = count[i];
        op.innerHTML = count[i];
        countryslt.appendChild(op);
    }
}
//改变国家 option 时给省级添加响相应的省份
function checkCountry() {
    var countNames = $("countryselect");
    var province = $("province");
    province.options.length = 1;
    var provinceArry = new Array;
    //创建对应的数组
    provinceArry['中华人民共和国'] = ['江西省', '北京', '上海', '广东省', '浙江省', '福建省', '云南省'];
    provinceArry['美国'] = ['洛杉矶', '华盛顿', '旧金山', '亚拉巴马州'];
    provinceArry['法国'] = ['巴黎', '阿基坦', '奥弗涅', '布列塔尼'];
    provinceArry['俄罗斯'] = ['莫斯科', '圣彼得堡', '新西伯利亚', '叶卡捷琳堡'];
    provinceArry['英国'] = ['伦敦', '苏格兰', '威尔士', '大曼彻斯特'];
    provinceArry['请选择国家'] = [];
    var countname = countNames.value;
    var provinces = provinceArry[countname];    //国家对应的数组
    for (var i = 0; i < provinces.length; i++) {
        var op = document.createElement("option");
        op.innerHTML = provinces[i];
        op.value = provinces[i];
        province.appendChild(op);
    }
}

//验证昵称
function checknName() {
    var img = new Image();
    var name = $("name");
    var sName = name.nextElementSibling;
    if (/^\w{4,16}$/.test(name.value)) {
        name.style.border = "1px solid";
        sName.innerHTML = "";
        img.src = "imgs/ok.gif";
        sName.className = "bottom";
        sName.appendChild(img);
        return true;
    } else {
        name.nextElementSibling.innerHTML = "输入有误，请按要求输入";
        name.style.border = "1px solid red";
        sName.className = "point";
        return false;
    }
}
//验证密码
function checkPwd() {
    var img = new Image();
    var password = $("password");
    var sPsaaword = password.nextElementSibling;
    if (/^[0-9a-z]{6,16}$/i.test(password.value)) {
        password.style.border = "1px solid";
        sPsaaword.innerHTML = "";
        img.src = "imgs/ok.gif";
        sPsaaword.className = "bottom";
        sPsaaword.appendChild(img);
        return true;
    } else {
        sPsaaword.innerHTML = "输入有误，请按要求输入";
        password.style.border = "1px solid red";
        sPsaaword.className = "point";
        return false;
    }
}
//确认密码
function checkChPwd() {
    var img = new Image();
    var checkpwd = $("chepassword");
    var sCheckpwd = checkpwd.nextElementSibling;
    var pwd = $("password");
    if (checkpwd.value == "") {
        checkpwd.nextElementSibling.innerHTML = "密码不能为空";
        checkpwd.style.border = "1px solid red";
        sCheckpwd.className = "point";
        return false;
    } else if (checkpwd.value == pwd.value) {
        checkpwd.style.border = "1px solid";
        sCheckpwd.innerHTML = "";
        img.src = "imgs/ok.gif";
        sCheckpwd.className = "bottom";
        sCheckpwd.appendChild(img);
        return true;
    }
    else {
        checkpwd.nextElementSibling.innerHTML = "两次输入的密码不一致";
        checkpwd.style.border = "1px solid red";
        sCheckpwd.className = "point";
        return false;
    }
}
//验证出生日期
function checkBirday() {
    var img = new Image();
    var birthday = $("birthday");
    var sBirthday = birthday.nextElementSibling;
    if (/^\d{4}-\d{1,2}-\d{1,2}$/.test(birthday.value)) {
        birthday.style.border = "1px solid";
        sBirthday.innerHTML = "";
        img.src = "imgs/ok.gif";
        sBirthday.className = "bottom";
        sBirthday.appendChild(img);
        return true;
    } else {
        sBirthday.innerHTML = "输入有误，请按要求输入";
        birthday.style.border = "1px solid red";
        sBirthday.className = "point";
        return false;
    }
}
//验证邮件
function checkEmail() {
    var img = new Image();
    var email = $("email");
    var sEmail = email.nextElementSibling;
    if (/[1-9a-z]+@[1-9a-z]+\.[1-9a-z]*/i.test(email.value)) {
        email.style.border = "1px solid";
        sEmail.innerHTML = "";
        img.src = "imgs/ok.gif";
        sEmail.appendChild(img);
        return true;
    } else {
        sEmail.innerHTML = "输入有误，请按要求输入";
        email.style.border = "1px solid red";
        sEmail.className = "point";
        return false;
    }
}

//提交验证
function subConfirm() {
    var cou = $("countryselect").value;
    var pro = $("province").value
    console.log(cou,pro);
    if (!checknName()) {
        alert("昵称有误！");
        return;
    }
    if (!checkPwd()) {
        alert("密码有误！");
        return;
    }
    if (!checkChPwd()) {
        alert("两次密码不一致！");
        return;
    }
    if (!checkBirday()) {
        alert("日期有误！");
        return;
    }
    if (!checkEmail()) {
        alert("邮箱有误！");
        return;
    }
    if(cou == "请选择国家"){
        alert("您还没有选择国家");
        return;
    }
    if(pro == "请选择"){
        alert("您还没有选择省份");
        return;
    }
    $("myform").submit();
}