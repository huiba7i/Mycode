$(function() {
	var ok1 = false;
	var ok2 = false;
	var ok3 = false;
	var ok4 = false;
	//检验邮箱
	$("#email").blur(function() {
		if($(this).val() == "") {
			$(this).next().addClass("erro").html("*邮箱不能为空，请填写您的邮箱地址");
			$(this).addClass("erro-border");
			return;
		}
		ok1 = true;
	}).focus(function() {
		$(this).next().removeClass("erro").html("");
		$(this).removeClass("erro-border");
	});

	//检验用户名
	$("#username").blur(function() {
		var patt = /[0-9a-zA-Z]{6,20}/;
		if($(this).val() == "") {
			$(this).next().addClass("erro").html("*昵称不能为空，请填写您的昵称");
			$(this).addClass("erro-border");
			return;
		} else if(!patt.test($(this).val())) {
			$(this).next().addClass("erro").html("*昵称格式错误");
			$(this).addClass("erro-border");
			return;
		}
		ok2 = true;
	}).focus(function() {
		$(this).next().removeClass("erro").html("*由英文字母,数字组成,长度6~20位");
		$(this).removeClass("erro-border");
	});

	//检验密码
	$("#password").blur(function() {
		var patt = /[0-9a-zA-Z]{4,20}/;
		if($(this).val() == "") {
			$(this).next().addClass("erro").html("*密码不能为空，请填写您的密码");
			$(this).addClass("erro-border");
			return;
		} else if(!patt.test($(this).val())) {
			$(this).next().addClass("erro").html("*密码格式错误");
			$(this).addClass("erro-border");
			return;
		}
		ok3 = true;
	}).focus(function() {
		$(this).next().removeClass("erro").html("*由英文字母,数字组成,长度4~20位");
		$(this).removeClass("erro-border");
	});

	//检验确认密码
	$("#surepwd").blur(function() {
		if($(this).val() != $("#password").val()) {
			$(this).next().addClass("erro").html("*两次密码输入不正确，请重新填写");
			$(this).addClass("erro-border");
			return;
		}else if($("#password").val()==""){
			$(this).next().addClass("erro").html("*请再次输入您的密码");
			$(this).addClass("erro-border");
			return;
		}
		else {
			$(this).next().addClass("erro").html("");
			return;
		}
		ok4 = true;
	}).focus(function() {
		$(this).next().removeClass("erro").html("");
		$(this).removeClass("erro-border");
	});

	//验证表单
	$("#img_btn").click(function() {
		$("#myForm").submit(function() {
			if(ok1 && ok2 && ok3 && ok4) {
				return true;
			}else{
				$("#myForm :input").trigger("blur");
			}
			return false;
		})
	});
	
	//省市联动
	var cityList=new Array();
	cityList["北京市"]=["东城区","西城区","朝阳区","丰台区","石景山区","海淀区","顺义区","通州区","大兴区","房山区"];
	cityList["上海市"]=["黄浦区","徐汇区","长宁区","静安区","普陀区","虹口区","杨浦区","浦东新区","闵行区","宝山区"];
	cityList["天津市"]=["和平区", "河西区", "南开区", "河北区", "河东区", "红桥区", "塘古区", "开发区"];
	cityList["安徽省"]=["合肥市", "芜湖市", "蚌埠市", "淮南市", "马鞍山市", "淮北市", "铜陵市", "安庆市", "黄山市", "阜阳市", "宿州市", "滁州市", "六安市", "宣城市", "池州市", "亳州市"];
	cityList["江苏省"]=["南京市", "无锡市", "徐州市", "常州市", "苏州市", "南通市", "连云港市", "淮安市", "盐城市", "扬州市", "镇江市", "泰州市", "宿迁市"];
		
	$("#province").append(function(){
		var pro="";
		for(i in cityList){
			pro +="<option>"+i+"</option>";
		}
		return $(pro);
	});
	
	$("#province").change(function(){
		var value=$(this).val();
		var chtml="";
		if(value=="请选择省/城市"){
			return $("#city").html("<option value='请选择城市/地区'>请选择城市/地区</option>")
		}
		var c=cityList[value];
		$.each(c, function(i,val) {
			chtml+="<option>"+ val +"</option>";
		});
		$("#city").html(chtml);
	});
})