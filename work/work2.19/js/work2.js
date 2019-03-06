//非正则
function fregCheck() {
    var qq = document.getElementById("qq").value;
    var q = Number(qq);
    if (qq[0] != 0 && 5 <= qq.length && qq.length <= 15 && isNaN(q)==false) {
        alert("格式正确!");
    } else {
        alert("格式错误！");
    }
}

//正则
function regCheck() {
    var qq = document.getElementById("qq").value;
    var checkQ = /^[1-9]\d{4,14}$/;
    var checkQQ = checkQ.test(qq);
    console.log(typeof (qq), qq);
    if (checkQQ == true) {
        alert("格式正确");
    } else {
        alert("格式错误");
    }
}