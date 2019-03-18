var shopData = angular.module("shopData", []);

shopData.controller("ctrl", function ($scope, $http) {
    $scope.shopArry = [];
    $http.get("data/work.json").then(function (resp) {
        $scope.shopArry = resp.data;
    });
    //总购买价
    $scope.cont = function () {
        var c = 0;
        for (var i = 0; i < $scope.shopArry.length; i++) {
            c += $scope.shopArry[i].quantity * $scope.shopArry[i].price;
        }
        return c;
    }
    //商品总量
    $scope.quantityAll = function () {
        var q = 0;
        for (var i = 0; i < $scope.shopArry.length; i++) {
            q += Number($scope.shopArry[i].quantity);
        }
        return q;
    }
    //减号按钮的对应操作
    $scope.reduce = function (index) {
        if ($scope.shopArry[index].quantity > 1) {
            $scope.shopArry[index].quantity--;
        } else {
            alert("数量不能少于1");
        }
    }
    //加号按钮的对应操作
    $scope.addShop = function (index) {
        $scope.shopArry[index].quantity++;
    }
    //删除单行
    $scope.deleteData = function (index) {
        $scope.shopArry.splice(index, 1);
    }
    //删除
    $scope.empyShop = function () {
        $scope.shopArry.splice(0, $scope.shopArry.length);
    }
})
console.log($(".sort"));