function selectItem(li){
	/*
	// js修改标签的css样式
	li.style.color = 'yellow';
	// background-image -> backgroundImage,font-size -> fontSize
	li.style.backgroundImage = 'url(img/bg2.gif)';
	*/
	
	// 修改标签的class属性值
	li.className = 'selected';
}

function outItem(li){
//	li.style.color = '#fff';
//	li.style.backgroundImage = 'url(img/bg1.gif)';
	li.className = '';
}

// 通过js给标签添加事件
// 标签.事件名称 = function(){};
document.body.onload = function(){
	// 获得所有的li标签
	var list = document.getElementsByTagName("li");
	
	for(var i=0;i<list.length;i++){
		list[i].onmouseover = function(){
			
			// 显示对应的内容区域
			var texts = document.getElementsByName("text");
			// 所有的内容区域都隐藏
			for(var j=0;j<texts.length;j++){
				texts[j].style.display = 'none';
			}
			// 选中的内容显示
			var index = this.id.split("-")[1];
			texts[index].style.display = 'block';
			
			for(var j= 0;j<list.length;j++){
				list[j].className = '';	
			}
			
			this.className = 'selected';
		};
		
//		list[i].onmouseout = function(){
//			this.className = '';
//		};
	}
};
