/**
 * Created by bulusli on 2014/10/14.
 */
'use strict';
app.factory('invlistSvce', ['$http', '$window', '$location', function ($http, $window, $location) {
    var baseSvrUrl = '/svr/inv/';
    console.log("app service called");
    function save(data, $scope) {
        $http({
            method: 'post',
            url: baseSvrUrl + 'add',
            data: data
        }).success(function (data) {
            {
                if (data.error) {
                    $window.alert(data.error);
                } else {
                    $scope.devices.push(data);
                }
            }
        })
    };
    function update(dev, $scope) {
        $http({
            method: 'put',
            url: baseSvrUrl + 'update',
            cache: false,
            params: dev
        }).success(function (data, status, headers, config) {
            {
                if (data.error) {
                    $window.alert(data.error);
                } else {
                    $scope.devices.forEach(function (item, index) {
                        if (item._id === dev._id) {
                            $scope.devices[index] = dev;
                        }
                    })
                }
            }
        }).error(function (data, status, headers, config) {
            $window.alert(status);
        })
    };
    function getDev(id, $scope) {
        $http({
            method: 'get',
            url: baseSvrUrl + 'getDev',
            params: {id: id}
        }).success(function (data) {
            {
                if (data.error) {
                    $window.alert(data.error);
                } else {
                    $scope.device = data;
                }
            }
        })
    };
    function del(id, $scope) {
        $http({
            method: 'delete',
            url: baseSvrUrl + 'del',
            params: {id: id}
        }).success(function (data) {
            {
                if (data.error) {
                    $window.alert(data.error);
                } else {
                    var arr = [], index;

                    $scope.devices.forEach(function (item, _index) {
                        if (item._id !== id) {
                            arr.push(item);
                        } else {
                            index = _index;
                        }
                    })
                    //最后一个则取前一个的值
                    if (index == $scope.devices.length - 1) {
                        index -= 1;
                    }
                    $scope.devices = arr;
                    $scope.device = arr[index];
                    $location.path("/ilist/detail/" + $scope.device._id);
                }
            }
        })
    };
    function show($scope) {
        $http({
            method: 'get',
            url: baseSvrUrl + 'show',
            data: {}
        }).success(function (data) {
            {
                if (!data.error) {
                    $scope.devices = data;
                } else {
                    $window.alert(data.error);
                }
            }
        })
    }


    return {
        save: save,
        update: update,
        del: del,
        show: show,
        getDev: getDev
    }
}
])