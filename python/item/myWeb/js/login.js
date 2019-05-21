$(function() {
	var username = $("#username").val();
	var userpwd = $("#userpwd").val();
	var params ={
		"username":username,
		"userped":userpwd
	};
	var ok1 = false;
	var ok2 = false;
	$("#username").blur(function() {
		if($(this).val() == "") {
			$("#user_tips").addClass("tips").html("*登录名不能为空");
			$(this).addClass("erro-border");
		} else {
			$("#user_tips").html("");
			$("#user_ok").addClass("addBg");
			ok1 = true;
		}
	}).focus(function() {
		$("#user_tips").html("");
		$("#user_ok").removeClass();
		$(this).removeClass("erro-border");
	});

	$("#userpwd").blur(function() {
		if($(this).val() == "") {
			$("#pwd_tips").addClass("tips").html("*密码不能为空");
			$(this).addClass("erro-border");
		} else {
			$("#pwd_tips").html("");
			$("#pwd_ok").addClass("addBg");
			ok2 = true;
		}
	}).focus(function() {
		$("#pwd_tips").html("");
		$("#pwd_ok").removeClass();
		$(this).removeClass("erro-border");
	});

	$("#checkBtn").click(function() {
		$.post("cgi-bin/login.py",params,function (data) {
			if(data=="success"){
				location.href="index.html"
			}
			else if(data=="fail"){
				if(ok1 && ok2) {
					// $("#login_form").submit();
				} else {
					$("#username").trigger("blur");
					$("#userpwd").trigger("blur");
				}
			}
        })
	});
})