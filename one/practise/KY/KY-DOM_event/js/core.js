function testAttr(){
    var list = document.querySelector('.list');
    console.log(list);

    // 添加属性
    list.setAttribute("type","square");

    // 获得属性
    var value = list.getAttribute('type');
    console.log(value);
}

function testRelate(){
    var img = document.getElementById('flower');
    // 通过img获得其父元素
    var parent = img.parentNode;
    console.log('父元素为:',parent); // li

    // 获得子元素
    var children = parent.childNodes;
    console.log('父元素中所有的子元素:', children);
    console.log('父元素中最后一个子元素:', parent.lastChild);
    // ie8及以下 不支持
    console.log('父元素中最后一个标记子元素:', parent.lastElementChild);

    console.log('img前面的兄弟元素:', img.previousSibling);
    console.log('img前面的兄弟标记元素:', img.previousElementSibling);
}

function addNode(){
    // 创建一个标签
    var li = document.createElement('li');
    // 设置标签的内容
    li.textContent = 'four';
    // 将创建的li标签添加到Ul中
    var ul = document.querySelector('.list');
    ul.appendChild(li);  // 在ul末尾添加子元素
}

function copyNode(){
    var img = document.getElementById('flower');
    var imgBak = img.cloneNode(); // 包括标签的属性
    console.log(imgBak);
    imgBak.setAttribute('id','bakflower');

    document.body.appendChild(imgBak);
}

// TODO
function updateNode(){
    // 删除
    // 替换
}