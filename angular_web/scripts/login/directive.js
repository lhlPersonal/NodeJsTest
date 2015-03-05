/**
 * Created by bulusli on 2015/2/27.
 */

app.directive("validName", function () {
    var link = function (scope, ele, attrs) {
        scope.$watch("nameBlurError", function (new_val) {
            if (!scope.sign_form.$pristine) {
                if (new_val) {
                    ele.addClass("invalid")
                } else {

                    ele.addClass("valid")
                }
            }
        });
    }

    return {
        restrict: "A",
        link: link
    };
});

app.directive("validPwd", function () {
    var link = function (scope, ele, attrs) {
        scope.$watch("pwdBlurError", function (new_val) {
                if (!scope.sign_form.$pristine) {
                    if (new_val) {
                        ele.addClass("invalid");
                    } else {
                        ele.addClass("valid");
                    }
                }
            }
        );

        scope.$watch("userValid", function (new_val) {
                if (!scope.sign_form.$pristine && scope.sign_form.$valid) {
                    if (new_val) {
                        angular.element("[name=username]").addClass("valid");
                        ele.addClass("valid");
                    } else {
                        angular.element("[name=username]").addClass("invalid");
                        ele.addClass("invalid");
                    }
                }
            }
        );
    }

    return {
        restrict: "A",
        link: link
    };
});