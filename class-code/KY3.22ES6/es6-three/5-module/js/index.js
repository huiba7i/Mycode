// 导入lib.js模块, 与模块导出的接口名称相同,用{变量名}
// import {PI} from './lib';
import {PI, test, a} from './lib.js';
console.log(PI);
test();
console.log(a);
//导入接口名称取别名
import {Person, WEL, b as t} from './lib.js'
let p = new Person('zhs');
console.log(p);
console.log(WEL);
console.log(t);

// 当导入模块中export default的接口
import add from './other.js'
add();