/**
 * Created by bulusli on 2015/2/15.
 */

//var defer = $.Deferred();
//defer.resolve("defer resolve").done(function (arg) {
//    alert(arg);
//})
//defer.reject("defer reject").fail(function (arg) {
//    alert(arg);
//})
//
//defer.always(function () {
//    alert("defer always");
//})
//
//var promise = defer.promise();

function deferTest() {
    var defer = $.Deferred();

    setTimeout(function () {
        //改变defer的状态为reject.一旦改变为reject则永不会变成resolve状态。
        defer.reject("reject for 3s");
        //改变defer的状态为resolve.
        defer.resolve("resolve for 3s");
    }, 3000);

    return defer.promise();
}

deferTest().done(function (arg) {
    alert(arg);
}).fail(function (data) {
    alert(data);
});

//同上,then的两个参数分别为done，fail要执行的函数
deferTest().then(function (data) {
}, function (data) {
    alert(data);
});

var defer = jQuery.Deferred();

defer.done(function (a, b) {
    return a * b;//不会传值到下一个函数
}).done(function (result) {
    console.log("result = " + result);
}).then(function (a, b) {
    return a * b;//2*3的值会传给后面的函数
}).done(function (result) {
    console.log("result = " + result);//6
}).then(function (a, b) {//a=6,b=undefined
    return a * b;
}).done(function (result) {
    console.log("result = " + result);
});

defer.resolve(2, 3);

$.when("not a promise", defer).then(function (arg1, arg2) {
    alert(arg1 + "..........." + arg2);
});
