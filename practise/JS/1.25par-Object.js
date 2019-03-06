//
var bus = new Object;
bus.color = "red";
bus.velocity = "80km/s";
bus.travel = function(){
    console.log("杭州——吉安");
}
bus.travel();


//
function Cat(){

}
var c = new Cat();
c.name = '小白';
c.age = '1';
c.eat = function(){
    console.log('猫粮');
}
console.log(c.name,c.age);
c.eat();


//
function Sdudent(nName,nMark){
    this.name = nName;
    this.mark = nMark;
    this.study = function(){
        console.log('Web');
    };
}

var sdudent1 = new Sdudent('丁某','优秀');
var sdudent2 = new Sdudent('汪某','也优秀');

console.log(sdudent1.name ,sdudent1.mark);
sdudent1.study();
console.log(sdudent2.name,sdudent2.mark);
sdudent2.study();
