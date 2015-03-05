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
    $scope.userValid = true;

    $scope.login = function () {
        if ($scope.sign_form.$valid) {
            if (dvLoginService.checkUser($scope.userInfo)) {
                location.href = "/views/inventory.html";
            } else {
                $scope.userValid = false;
            }
        } else {
            $scope.userValid = true;
            if (!$scope.userInfo.name) {
                $scope.nameBlurError = true;
            }
            if (!$scope.userInfo.pwd) {
                $scope.pwdBlurError = true;
            }
        }
    }

    $scope.nameFocus = function () {
        $scope.nameBlurError = false;
    }
    $scope.nameBlur = function () {
        $scope.userValid = true;

        if ($scope.sign_form.$valid) {
            if (!dvLoginService.checkUser($scope.userInfo)) {
                $scope.userValid = false;
            }
        } else {
            if (!$scope.userInfo.name) {
                $scope.nameBlurError = true;
            }
        }
    }
    $scope.pwdFocus = function () {
        $scope.pwdBlurError = false;
    }
    $scope.pwdBlur = function () {
        $scope.userValid = true;

        if ($scope.sign_form.$valid) {
            if (!dvLoginService.checkUser($scope.userInfo)) {
                $scope.userValid = false;
            }
        } else {
            if (!$scope.userInfo.pwd) {
                $scope.pwdBlurError = true;
            }
        }
    }
}]);