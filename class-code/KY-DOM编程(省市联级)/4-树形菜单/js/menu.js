function $(id){
  return document.getElementById(id);
}

function showMenu(index){
  var ulList = $('menu').getElementsByTagName('ul');
  ulList[index].className = (ulList[index].className=='hidd'?'show':'hidd');
}