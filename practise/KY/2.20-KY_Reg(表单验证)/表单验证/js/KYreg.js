function $(id){
  return document.getElementById(id);
}

function checkAccount(){
  var acc = $('account').value;
  if(/^[a-zA-Z][a-zA-Z\d]{3,15}$/.test(acc)){
    // alert('账号正确');
    $('accResult').innerHTML = '√';
    $('accResult').className = 'ok';
    $('account').style.borderColor = 'initial';
    return true;
  }else{
    // alert('账号有误');
    $('accResult').innerHTML = '×';
    $('accResult').className = 'error';
    $('account').style.borderColor = 'red';
    return false;
  }
}

function checkPwd(){
  var password = $('password').value;
  var span = $('pwdResult');
  if(/^[a-zA-Z\d]{4,10}$/.test(password)){
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
function checkRegiste(){
  // 校验账号
  var result = checkAccount();
  if(!result){
    alert('账号有误');
    return false; // 不提交表单
  }
  // 校验密码
  result = checkPwd();
  if(!result){
    alert('密码有误');
    return false; // 不提交表单
  }
//...
  return true;

}

function checkRegisteBtn(){
  // 校验账号
  var result = checkAccount();
  if(!result){
    alert('账号有误');
    return; // 提前退出函数
  }
  // 校验密码
  result = checkPwd();
  if(!result){
    alert('密码有误');
    return;
  }
  $('regForm').submit();//手动提交表单
}