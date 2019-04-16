// 修改页面内容
// (1)document.write() 如果在页面加载完成后使用会覆盖原页面的内容
// document.write('<p>修改后的内容</p>');

function test(){
    document.write('<p>文档加载完后修改内容</p>');
}

// (2) 调用标签对象.innerHTML = 值;
var p = document.getElementById('p1');
// innerHTML:获得的内容包括标签, innerText:获得的是文本内容,不包含标签 
console.log(p.innerHTML, p.innerText); // 获得标签的内容(双标签)
// p.innerHTML = 'This is <i>Paragraph</i>'; // 会解析内容中的标签
p.innerText = 'This is <i>Paragraph</i>'; // 不会解析内容中的标签
