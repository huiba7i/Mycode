// 拦截器的作用:1.数据校验 2.维护对象的私有属性(建议以_开头),不让外界获得这个属性 3.日志记录等

// 访问的目标对象
let target = {"name":"zhs", "age":10, "_salary":499889};

// 创建一个拦截行为对象
let interceptor = {

  // 拦截行为方法 - 声明是固定的
  // 拦截对象属性的设置 参数1: 拦截访问的目标对象, 参数2: 目标对象的属性名称, 参数3: 修改后的值, 参数4(可选):拦截器对象本身
  set: function(obj, prop, value){
    console.log('拦截行为');
    if(prop == 'age'){
      if(Number.isNaN(value)){
        console.log('年龄的值不合法,不能是非数字');
        return false; // 提前结束函数
      }else if(value<0 || value>=200){
        console.log('年龄值不能为负数,或超过200');
        return false;
      }
    }
    obj[prop] = value;
    return true; // 在严格模式下,set代理需要返回true,否则会报错
  },

  // 拦截对象属性的获取
  get: function(obj, propKey, receiver){
    if(propKey.indexOf('_')==0){
      throw new Error('不能获取私有属性'); // 抛出一个错误,整个函数结束
    }
    return obj[propKey]; // 正常获得非私有属性,将属性值返回
  }
}

let proxy = new Proxy(target, interceptor);
/* proxy.age = 300;// 修改对象的属性值时
console.log(target.age); */

// console.log(a);
console.log(proxy._salary); // 报错
console.log(proxy.name);// 非私有属性,正常获取
