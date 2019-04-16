function Circle(r){
	this.ras = r;
	
	this.girth = function(){
		return 2*Math.PI*this.ras;
	};
	
	this.area = function(){
		return Math.PI*this.ras*this.ras;
	};
}

var c = new Circle(3);
c.r = 4;

document.write(c.r);

var g = c.girth();
document.write(",周长:"+g);


document.write("<hr />");

function User(userId,pwd,email){
	this.userId = userId;
	this.pwd = pwd;
	this.email = email;
	
	this.show = function(){
		document.write("userId:"+this.userId+",password:"+this.pwd+",email:"+this.email);
	};
}

var u = new User('aowin','123456','aowin@qq.com');
u.show();

document.write("<hr />");


function Calculator(n1,n2){
	this.n1 = n1;
	this.n2 = n2;
	
	this.addition = function(){
		return this.n1+this.n2;
	};
	
	this.subtration = function(){
		return this.n1-this.n2;
	};
}

var cal = new Calculator(2,3);
var sum = cal.addition();
document.write("加运算:"+sum);
document.write("<hr />");

var a = 100;
function test(a){
	var a = 3;
	document.write(a);
}

test(1);
