function $(id) {
  return document.getElementById(id);
}

function checkAccount() {
  var acc = $('account').value;
  if (/^[a-zA-Z][a-zA-Z\d]{3,15}$/.test(acc)) {
    // alert('账号正确');
    $('accResult').innerHTML = '√';
    $('accResult').className = 'ok';
    return true;
  } else {
    // alert('账号有误');
    $('accResult').innerHTML = '×';
    $('accResult').className = 'error';
    return false;
  }
}

function checkPwd() {
  var password = $('password').value;
  var span = $('pwdResult');
  if (/^[a-zA-Z\d]{4,10}$/.test(password)) {
    span.innerHTML = '√';
    span.className = 'ok';
    return true;
  } else {
    span.innerHTML = '×';
    span.className = 'error';
    return false;
  }
}
function checkFirmPwd() {
  var password = $('password').value;
  var confirmpassword = $("confirmpassword").value;
  var span = $("conpwdResult")
  if (password === confirmpassword){
    span.innerHTML = '√';
    span.className = 'ok';
    return true;
  }else{
    span.innerHTML = '×';
    span.className = 'error';
    return false;
  }
}
function checkEmail(){
  var email = $("email").value;
  var span = $("emailResult");
  if(/^[a-zA-Z\d]+\@\w*\.\w*/.test(email)){
    span.innerHTML = '√';
    span.className = 'ok';
    return true;
  }else{
    span.innerHTML = '×';
    span.className = 'error';
    return false;
  }
}
function checkPhone(){
  var phone = $("phone").value;
  var span = $("phoneResult");
  if(/^[1][35678]\d{9}$/.test(phone)){
    span.innerHTML = '√';
    span.className = 'ok';
    return true;
  }else{
    span.innerHTML = '×';
    span.className = 'error';
    return false;
  }
}


// 当提交表单时触发表单的submit事件, 如果返回false,则阻止事件的默认操作(阻止表单提交)
function checkRegiste() {
  // 校验账号
  var result = checkAccount();
  if (!result) {
    alert('账号有误');
    return false; // 不提交表单
  }
  // 校验密码
   result = checkPwd();
  if (!result) {
    alert('密码有误');
    return false; // 不提交表单
  }
   result = checkFirmPwd();
  if(!result){
    alert('确认密码有误');
    return false;
  }
  result = checkEmail()
  if(!result){
    alert('邮箱有误');
    return false;
  }
  result = checkPhone();
  if(!result){
    alert('号码有误');
    return false;
  }
  //...
  return true;

}

//回车切换输入
function changing(ev,input){
  if(ev.keyCode == 13){
    ev.preventDefault()   //阻止提交按钮的默认操作
    input.focus();      //让name值与传入的参数相同的input框获得焦点
  }
  console.log(event.keyCode)
}