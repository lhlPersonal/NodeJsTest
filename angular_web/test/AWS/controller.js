/**
 * Created by bulusli on 2015/2/16.
 */

app.controller("awsController", ['$scope', function ($scope) {
    $scope.user = "no value";

    $scope.signedIn = function (oauth) {
        $scope.user = oauth;
        $scope.$digest();
    }
}]);