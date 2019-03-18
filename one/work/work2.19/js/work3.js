function checkTele(){
    var teleNum = document.getElementById("telephone").value;
    var checkTele = /^1[3578]\d{9}$/;
    var check = checkTele.test(teleNum);
    if(check ==true){
        alert("格式正确");
    }else{
        alert("格式错误！");
    }
}