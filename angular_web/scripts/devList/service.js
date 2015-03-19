/**
 * Created by bulusli on 2015/2/27.
 */
app.factory("dvDevListService", ["$cacheFactory", function ($cacheFactory) {
    'use strict';

    return {
        devGrpList: function () {
            return $cacheFactory.get("devGrpHash").get("devGrpList");
        },
        devListByGrpId: function (gid) {
            return $cacheFactory.get("devHash").get("devList").find(function (value, index, arr) {
                if (value.gid === gid) {
                    return arr[index][gid];
                }
            })
        },
        addDevGrp: function (devGrp) {
            $cacheFactory.get("devGrpHash").get("devGrpList").push(devGrp);
        },
        editDevGrp: function (devGrp) {
            var devGrpList = $cacheFactory.get("devGrpHash").get("devGrpList");

            devGrpList.forEach(function (item, index) {
                if (item.id === devGrp.id) {
                    devGrpList[index] = devGrp;
                    return false;
                }
            });

        },
        delDevGrp: function (gid) {
            var devGrpList = $cacheFactory.get("devGrpHash").get("devGrpList");

            devGrpList.forEach(function (item, index) {
                if (item.id === gid) {
                    devGrpList.splice(index, 1);
                    return false;
                }
            });
        }
    };
}])