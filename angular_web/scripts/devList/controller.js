/**
 * Created by bulusli on 2015/2/27.
 */
app.controller('dvDevListController', ['$scope', '$modal', 'dvDevListService', 'guidService', function ($scope, $modal, dvDevListService, guidService) {
    var setPagingData = function (data, page, pageSize, searchText) {
        var pageData;
        var devList = dvDevListService.devListByGrpId($scope.gid);

        if (searchText) {
            var ft = searchText.toLowerCase();
            pageData = devList.filter(function (item) {
                return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
            });
        } else {
            pageData = devList;
        }
        $scope.myData = pageData.slice((page - 1) * pageSize, page * pageSize);
        $scope.totalServerItems = data.length;
    };

    var getData = function () {
        return dvDevListService.devListByGrpId($scope.gid);
    };

    var refershData = function () {
        setPagingData(getData(), $scope.pagingOptions.currentPage, $scope.pagingOptions.pageSize);
    };

    $scope.devGrps = dvDevListService.devGrpList();
    $scope.showDelAlert = function (gid) {
        var modalInstance = $modal.open({
            templateUrl: '/views/devList/templ/modal_delMsg.html',
            backdrop: 'static',
            keyboard: false,
            controller: ['$scope', '$modalInstance', function (scope, modalInstance) {
                scope.ok = function () {
                    modalInstance.close(gid);
                };

                scope.cancel = function () {
                    modalInstance.dismiss('cancel');
                };
            }]
        });

        modalInstance.result.then(function (gid) {
            dvDevListService.delDevGrp(gid);
        }, function () {

        });
    }
    $scope.showEdit = function (devGrp) {
        var modalInstance = $modal.open({
            templateUrl: '/views/devList/templ/modal_edit_new.html',
            backdrop: 'static',
            keyboard: false,
            controller: ['$scope', '$modalInstance', function (scope, modalInstance) {
                scope.ok = function () {
                    modalInstance.close(scope.devGrp);
                };

                scope.cancel = function () {
                    modalInstance.dismiss('cancel');
                };

                scope.devGrp = angular.copy(devGrp);

                scope.title = "Edit Device Group"
            }]
        });

        modalInstance.result.then(function (devGrp) {
            dvDevListService.editDevGrp(devGrp);
        }, function () {
        });
    }
    $scope.showNew = function (size) {
        var modalInstance = $modal.open({
            templateUrl: '/views/devList/templ/modal_edit_new.html',
            backdrop: 'static',
            keyboard: false,
            controller: ['$scope', '$modalInstance', function (scope, modalInstance) {
                scope.ok = function () {
                    modalInstance.close(scope.devGrp);
                };

                scope.cancel = function () {
                    modalInstance.dismiss('cancel');
                };

                scope.devGrp = {id: guidService.guid(), name: "", desc: ""};

                scope.title = "New Device Group";
            }],
            size: size
        });

        modalInstance.result.then(function (devGrp) {
            dvDevListService.addDevGrp(devGrp);
        }, function () {

        });
    }
    $scope.showDevs = function (gid) {
        $scope.gid = gid;
        refershData();
    }

    $scope.filterOptions = {
        filterText: "",
        useExternalFilter: true
    };
    $scope.totalServerItems = 0;
    $scope.pagingOptions = {
        pageSizes: [10, 20, 50],
        pageSize: 20,
        currentPage: 1
    };
    $scope.gridOptions = {
        data: getData(),
        enablePaging: true,
        showFooter: true,
        totalServerItems: 'totalServerItems',
        pagingOptions: $scope.pagingOptions,
        filterOptions: $scope.filterOptions
    };
}])