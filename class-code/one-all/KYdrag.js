/*
 被拖动的元素的dragstart事件处理程序
 */
function startDrag(event){
//	alert(event.target); // 触发事件的标记对象
	// 事件对象的dataTransfer属性(ie9+)是用来保存数据传递给目标元素 - img的id属性
	event.dataTransfer.setData('Text',event.target.id)
}

/*
 在目标元素上停止拖放时触发drop事件,可以获得从被拖放的元素中传递来的数据
 * */
function drop(e){
	e.preventDefault();
//	alert(e.dataTransfer.getData("Text"));
	var id = e.dataTransfer.getData('Text');
	var imgSrc = document.getElementById(id);
	
	// 向目标元素<div class="two">添加子标记<img>
	e.target.appendChild(imgSrc);
}

/*
 在目标元素(可以是任意的标记,但是默认情况下是阻止拖放的)的区域内移动时持续触发dragover事件,允许拖动(阻止默认操作)
 * */
function allowDrag(e){
	e.preventDefault();
}

function clickBtn(e){
//	alert(e); // 产生的事件对象,包含产生事件的标记信息,鼠标状态,键盘状态等
//	alert(e.button);// 获得点击的鼠标按钮,左键 - 0,右键-2,中键-1

//	alert("鼠标点击的坐标位置:x - "+e.clientX+",y-"+e.clientY);
	alert("产生事件的标记:"+e.target);
	alert("产生的事件的事件名称:"+e.type);
}

