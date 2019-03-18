function check() {
    var email = document.getElementById("email").value;
    var emailCheck = /^[a-zA-z]([a-z0-9_]){2,17}@[a-zA-Z]+\.com$/;
    var c = emailCheck.test(email);
    if (c == true) {
        alert("格式正确");
    } else {
        alert("格式错误");
    }
    console.log(email)
}