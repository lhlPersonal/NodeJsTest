/**
 * Created by bulusli on 2014/10/24.
 */
'use strict';
var app = angular.module('test_module', []);

app.controller('TestCtrl', [ '$scope', '$compile', function ($scope, $compile) {
    //directive test
    $scope.color = 'red';

    //$compile函数会返回一个link函数，而该函数传入scope就可以得到一个解析后的元素
    var link = $compile($('#a'));

    //定义新的scope，而不是引用controller的scope
    var scope = $scope.$new(true);

    scope.text = 'text';

    //传入参数得到的node
    var node = link(scope);

    // $('#b').append(node);
}]);