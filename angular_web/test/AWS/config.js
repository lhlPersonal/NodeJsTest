/**
 * Created by bulusli on 2015/2/16.
 */

var app = angular.module("awsModule", ["ngRoute"]).config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/userInfo", {templateUrl: "/views/test/AWS/userInfo.html"})
        .otherwise({redirectTo: "/views/test/AWS/main.html"});
    $locationProvider.html5Mode(true);
}])