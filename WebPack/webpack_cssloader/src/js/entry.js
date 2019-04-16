var mode = require("./mode")
console.log(mode.text);

// document.write('it cssloader');
// document.write(require(".mode.js"));

require('../css/style.css');    //引入css文件

var oImg = new Image();
oImg.src = require("../img/emotion.png");      //当成模块引入图片
document.body.appendChild(oImg);