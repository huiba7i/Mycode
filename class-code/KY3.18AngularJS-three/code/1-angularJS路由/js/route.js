// 第二个参数 依赖的其它模块
var app = angular.module('route-app', ['ngRoute']);

app.config(function($routeProvider){
  /*
  url路径 : 
  绝对路径: 以http://开头  或 以/开头 表示web项目的根路径 (相当于 http://127.0.0.1/)
  相对路径: ../ 上级目录  ./ 当前目录

  http://www.baidu.com

  假设登录的url : http://127.0.0.1/user/login
  首页的url:      http://127.0.0.1/home/index.html

  路由: 当前的url#!/路由标记
  http://127.0.0.1/home/index.html#!/user/login


  */
  $routeProvider.when('/user/login', {
    // 访问 http://127.0.0.1/home/index.html#!/user/login

    // template: '<form><input type="text"><input type="password"><input type="button" value="登录"/></form>'
    templateUrl: '/user/login.html'
  }).when('/user/reg', {
    // 访问 http://127.0.0.1/home/index.html#!/user/reg

    // template: '<form><input type="text"><input type="password"><input type="button" value="注册"/></form>'

    templateUrl: '/user/registe.html'
  }).when('/', { 
    // 访问 http://127.0.0.1/home/index.html#!/ 时
    // 跳转到 http://127.0.0.1/home/index.html#!/user/login
    redirectTo:　'/user/login'
  }).otherwise({
    // 访问 http://127.0.0.1/home/index.html#!/xx 时
    // 跳转到 http://127.0.0.1/home/index.html#!/
    redirectTo: '/'
  });
});