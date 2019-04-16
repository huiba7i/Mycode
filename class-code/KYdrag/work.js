function dragStart(e){
	e.dataTransfer.setData("Text",e.target.id);
}

function allowDrag(e){
	e.preventDefault();
}

function drop(e){
	var itemId = e.dataTransfer.getData("Text");
	var itemNode = document.getElementById(itemId);
	var cloneId = "collect-"+itemNode.id;
	var children = e.target.childNodes;
	for(var i=0;i<children.length;i++){
		
		if(children[i].id==cloneId){
			alert("已收藏该项目");
			return;
		}
	}
	var itemCloneNode = itemNode.cloneNode();
	itemCloneNode.innerHTML = itemNode.innerHTML;
	// 修改id
	itemCloneNode.id = cloneId;
	console.log(itemCloneNode);
	
	// 作为收藏夹的子节点
	e.target.appendChild(itemCloneNode);
}

function delItem(e){
	var delItemId = e.dataTransfer.getData("Text");
	if(delItemId.indexOf("collect-")==0){
		// 从收藏夹中将其移除
		var cd = document.getElementById("collectDiv");
		var item = document.getElementById(delItemId);
		cd.removeChild(item);	
	}
}
