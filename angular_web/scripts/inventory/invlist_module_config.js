/**
 * Created by bulusli on 2014/10/15.
 */
'use strict';
var app = angular.module('invlist_module', ['ngRoute','ngGrid']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    console.log("app config called");
    $routeProvider
        .when('/add', {templateUrl: '/views/template/invlist/add.html'})
        .when('/ilist/detail/:id', {templateUrl: '/views/template/invlist/devList.html'})
        .otherwise({redirectTo: '/views/inventory.html'});

    $locationProvider.html5Mode(true);
}])
;