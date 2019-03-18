var app = angular.module('app', []);
app.controller('ctrl', function($scope){
  // 定义变量count存储购物车中的数量
  $scope.count = 0;

  // 加入购物车的事件处理函数($scope对象的方法)
  $scope.addCart = function(){
    $scope.count ++;
  }
});
