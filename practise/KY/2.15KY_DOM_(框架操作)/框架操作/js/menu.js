window.onload = function() {
  var menuList = document.getElementsByClassName("menu-1");
  for(var i=0;i<menuList.length;i++){
    menuList[i].onclick = function(){
      // console.log(this, this.nextElementSibling);
      var subs = document.getElementsByName("menu-sub");
      for(var j=0;j<subs.length;j++){
        subs[j].className = 'hidd';
      }
      this.nextElementSibling.className = 'active';
    }
  }
}