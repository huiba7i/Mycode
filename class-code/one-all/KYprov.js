function init(){
	var province = document.getElementById("pro");
	var proArray = ["浙江省","江苏省","江西省","安徽省"];
	for(var i=0;i<proArray.length;i++){
		var op = new Option(proArray[i]);
		op.value = proArray[i];
		// 将创建的option项添加到select下拉框中
		province.add(op);
	}
}

function updateCity(province){
//	alert(province.value);
//	alert(province.options[province.selectedIndex].innerText);
	var city = document.getElementById('city'); // 获得城市的下拉框
	
	var selectProv = province.value; // 获得选中的省份值
	
	// 清除城市的选项,保留第一个项
	city.options.length = 1;
	debugger
	// 根据选中的省份值,修改城市下拉框的选项
	switch (selectProv){
		case "浙江省":
			var zj = ["杭州市","绍兴市","宁波市","金华市","温州市"];
			for(var i=0;i<zj.length;i++){
				var op = new Option(zj[i]);
				city.add(op);
			}
			break;
		case "江苏省":
			var zj = ["南京市","苏州市","常州市","扬州市"];
			for(var i=0;i<zj.length;i++){
				var op = new Option(zj[i]);
				city.add(op);
			}
			break;
		case "江西省":
		
			break;
		case "安徽省":
		
			break;
		default:
			break;
	}
}
