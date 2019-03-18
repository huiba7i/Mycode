// 在DOM中为每一个载入浏览器中的页面自动生成一个document对象
// 通过document对象可以访问到html页面中所有的标签元素,必须等标签加载完成才能访问
// (1)id属性
var p = document.getElementById('p1');
console.log(p, p.toString());
// alert(p);

// (2)name属性,结果为一些元素的集合(类似于数组的集合对象)
var aowinList = document.getElementsByName('aowin');
console.log(aowinList, aowinList[0]);

// (3)标签名称
var pList = document.getElementsByTagName('p');
// console.log(pList, pList.length, pList[1]);
for(var i=0;i<pList.length;i++){
    console.log(i, pList[i]);
}

// (4)class属性名称(ie8及以下不支持)
var paraList = document.getElementsByClassName('para');
console.log(paraList, paraList.length);