/**
 * Created by bulusli on 2015/2/27.
 */

app.directive("dvGrprepeat", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "/views/devList/templ/left_name.html"
    }
});

app.directive("dvDataInit", function () {

    return {
        restrict: "A",
        link: function (scope, element, attrs) {

            window.onload = function () {
                element.children(":first").children(":first").click();
            }

            scope.$watch('pagingOptions', function (newVal, oldVal) {
                if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
                    refershData();
                }
            }, true);

            scope.$watch('filterOptions', function (newVal, oldVal) {
                if (newVal !== oldVal) {
                    refershData();
                }
            }, true);
        }
    }
});