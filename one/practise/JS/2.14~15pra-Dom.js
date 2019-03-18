function checkAll(all) {
    var s = document.getElementsByName("check");
    for (var i = 0; i < s.length; i++) {
        s[i].checked = all.checked;
    }
}
function checkSon() {
    var a = document.getElementById("all");
    var s = document.getElementsByName("check");
    for (var j = 0; j < s.length; j++) {
        if (!s[j].checked) {
            a.checked = false;
            break;
        }
        a.checked = true;
    }
}

//折叠菜单
window.onload = function () {
    var menus = document.getElementsByClassName("menu");
    var menusub = document.getElementsByName("hidds");
    for (var i = 0; i < menus.length; i++) {
        menus[i].onclick = function () {
            // var a = document.getElementsByClassName("a");
            // console.log(a[i]);
            for (var j = 0; j < menusub.length; j++) {
                menusub[j].className = "hidd";
            }
            this.nextElementSibling.className = "show";
        }
    }
}