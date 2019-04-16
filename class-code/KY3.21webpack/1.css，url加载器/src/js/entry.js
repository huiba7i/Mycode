console.log('hello webpack');

var mode = require('./mode');
console.log(mode.test);

// 引入css模块
require('../css/style.css');
