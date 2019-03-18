// window代表打开的浏览器窗口
// 如果文档包含框架（frame 或 iframe 标签），浏览器会为 HTML 文档创建一个 window 对象，并为每个框架创建一个额外的 window 对象。
console.log(window);
// framse[]属性, 获得页面中所有的框架对象数组
console.log(window.frames, window.frames.length, window.frames['test']);
// document属性, 代表浏览器窗口中打开的html文档
console.log(window.document === document); // window.可以省略

// self属性 引用当前窗口自身
console.log(self);

// document对象的属性和方法
console.log(document.title); // html页面的标题: <title>标签的内容
// TODO write(), writeln(), getElementById(),open(),close()
document.write('hello world\n');
document.writeln('hello world');