// (3) 文字记号方式(JSON对象)
var obj = {
    "name": "张三",
    age: 20,
    sex: "男",

    // 方法中可以访问对象的属性或其它方法
    work: function(){
        console.log(this.name, ' is working....');
    }
};

obj.work();