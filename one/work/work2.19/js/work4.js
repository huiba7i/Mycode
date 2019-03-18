function regCheck() {
    var str = document.getElementById("money").value;
    console.log(str)
    var checkSpaNum = /^\$[1-9]\d{0,2}(\,\d{3})*(\.\d{2})?$/
    var checkStrSum = checkSpaNum.test(str);
    if (checkStrSum == true ) {
        alert("格式正确");
    }else{
        alert("格式错误");
    }
}