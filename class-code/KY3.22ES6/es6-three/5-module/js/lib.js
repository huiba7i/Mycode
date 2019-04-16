const PI = 3.14;
function test(){
  console.log('function in lib');
}

// 在模块导出接口,就能被其它模块导入
export {PI, test};

const WELCOME = 'welcome to es6';
// 将导出接口取别名as
export {WELCOME as WEL};

export let a = 10;
export class Person{
  constructor(name){
    this.name = name;
  }
};
export let b = 20;