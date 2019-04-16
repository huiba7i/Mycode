var app = angular.module('app', []);
app.controller('ctrl', function($scope){

  $scope.style = {'background-color':'green', 'color':'#fff'};
  $scope.test="item";
  $scope.orderShow = true;
  $scope.cartShow = false;
  $scope.count = 0;

  $scope.url = 'http://www.baidu.com';
  $scope.image = 'img/tuo.gif';

  $scope.goCart = function(){
    // 显示购物车div
    $scope.cartShow = true;
    // 隐藏点餐div
    $scope.orderShow = false;
  };
  $scope.goOrder = function(){
    // 隐藏购物车div
    $scope.cartShow = false;
    // 显示点餐div
    $scope.orderShow = true;
  }
});