/**
 * Created by bulusli on 2014/10/24.
 */
'use strict';
var app = angular.module('test_module', []);

app.controller('TestCtrl', [ '$scope', function ($scope) {
     $scope.b = [1, 2, 3];

    $scope.show = function (v) {
        console.log(v);
    }

    $scope.color_click = function () {
        $scope.color = 'green';
    }

    $scope.a = 1;

    $scope.title = "this is a title";
    $scope.text = "this is a text";

    $scope.para = "init para";

    $scope.jqueryPara = "jquery init para";

    $scope.to = 'ari@fullstack.io';
    $scope.emailBody = 'Hello {{ to }},\n\nMy name is Ari too!';
}]);