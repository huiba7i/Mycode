function selectAll(all){
	var itemBox = document.getElementsByName("item");
	for(var i=0;i<itemBox.length;i++){
		itemBox[i].checked = all.checked;
	}
	
	// 修改总价格
	if(all.checked){
		computeTotal();
	}else{
		document.getElementById("total").innerText = "0";
	}
}

window.onload = function(){
	var itemBox = document.getElementsByName("item");
	for(var i=0;i<itemBox.length;i++){
		itemBox[i].onchange = function(){
			var all = document.getElementById("all");
			for(var j=0;j<itemBox.length;j++){
				if(!itemBox[j].checked){
					all.checked = false;
					computeTotal();
					return;
				}
			}
			all.checked = true;
			computeTotal();
			
		};
	}
}

function computeTotal(){
	var tab = document.getElementById("mycart");
	var trs = tab.rows;
	var sum = 0;
	for(var i=1;i<trs.length;i++){
		if(trs[i].cells[0].firstChild.checked){
			var price = trs[i].cells[2].firstElementChild.innerHTML;
			sum += parseFloat(price);
		}
	}
	
	document.getElementById("total").innerText = sum;
}
