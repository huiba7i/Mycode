function showMenu(index){
	var subMenu = document.getElementsByName("submenu");
	for(var i=0;i<subMenu.length;i++){
		subMenu[i].className = 'hidd';
	}
	
	subMenu[index].className = 'selected';
}
