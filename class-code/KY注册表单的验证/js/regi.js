function $(id){
	var ele = document.getElementById(id);
	return ele;
}

/*
 校验注册的账号
 * */
function checkAccount(){
	var accInput = $("account");
	var account = accInput.value;
	var reg = /^[a-zA-Z]\w{2,17}@163\.com$/;
	var span = $("accSpan");
	if(reg.test(account)){
		span.className = 'ok';
		span.innerText = "Email账号可用";
		accInput.className = '';
		return true;
	}else{
		span.className = 'err';
		span.innerText = "Email账号不合法";
		accInput.className = 'msg-error';
		return false;
	}
}

function getFocus(input){
	input.className = '';
}

/*
 * 校验密码
 */
function checkPassword(){
	var pwdInput = $('password');
	var pass = pwdInput.value;
	var span = $('pwdSpan');
	if(/^\D.{5,}$/.test(pass)){
		span.className = 'ok';
		span.innerText = "密码合法";
		pwdInput.className = '';
		return true;
	}else{
		span.className = 'err';
		span.innerText = "密码不合法";
		pwdInput.className = 'msg-error';
		return false;
	}
}

/*
 确认密码
 * */
function checkConfirmPwd(){
	var password = $('password').value;
	var conPwdInput = $("confirmPwd");
	var span = $('conPwdSpan');
	if(password == conPwdInput.value){
		span.className = 'ok';
		span.innerText = "与上面的密码一致";
		conPwdInput.className = '';
		return true;
	}else{
		span.className = 'err';
		span.innerText = "与上面的密码不一致";
		conPwdInput.className = 'msg-error';
		return false;
	}
}

function checkRegiste(){
	if(checkAccount() && checkPassword() && checkConfirmPwd()){
		return true; // 要提交表单
	}
	return false; // 不提交表单
}
