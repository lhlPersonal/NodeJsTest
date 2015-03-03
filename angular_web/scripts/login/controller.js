/**
 * Created by bulusli on 2015/2/27.
 */
app.controller("dvLoginController", ["$scope", "dvLoginService", function ($scope, dvLoginService) {
    $scope.userInfo = {
        name: "",
        pwd: ""
    }
    $scope.nameBlurError = false;
    $scope.pwdBlurError = false;

    $scope.login = function () {
    }

    $scope.nameFocus = function () {
        $scope.nameBlurError = false;
    }
    $scope.nameBlur = function () {
        $scope.nameBlurError = true;
    }
    $scope.pwdFocus = function () {
        $scope.pwdBlurError = false;
    }
    $scope.pwdFocus = function () {
        $scope.pwdBlurError = true;
    }
}]);