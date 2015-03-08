/**
 * Created by bulusli on 2015/2/27.
 */
app.factory("dvLoginService", ["$http", "$cacheFactory", function ($http, $cacheFactory) {
    console.log("service start");
    function checkUser(userInfo) {
        var usrList = $cacheFactory.get("userInfo").get("userList");
        var valid = false;

        usrList.forEach(function (user) {
            if (user.name === userInfo.name && user.pwd === userInfo.pwd) {
                valid = true;
            }
        });

        return valid;
    };

    return {
        checkUser: checkUser
    };
}]);