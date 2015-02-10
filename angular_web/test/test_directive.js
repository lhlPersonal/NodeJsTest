/**
 * Created by bulusli on 2014/10/24.
 *
 * ng 中对指令的解析与执行过程是这样的：
 * 浏览器得到 HTML 字符串内容，解析得到 DOM 结构。
 *ng 引入，把 DOM 结构扔给 $compile 函数处理：
 *找出 DOM 结构中有变量占位符
 *匹配找出 DOM 中包含的所有指令引用
 *把指令关联到 DOM
 *关联到 DOM 的多个指令按权重排列
 *执行指令中的 compile 函数（改变 DOM 结构，返回 link 函数）
 *得到的所有 link 函数组成一个列表作为 $compile 函数的返回
 *执行 link 函数（连接模板的 scope）。
 */

app.directive({'color': function () {
    return function ($scope, $element, $attrs) {
        $scope.$watch($attrs.color, function (new_color) {
            $element.css('color', new_color);
        })
    }
},
    'more': function ($rootScope, $document) {
        return {
            /**
             *transclude 是一个函数，这个函数会传递给 compile 期间找到的 directive 的 compile 函数（编译节点的过程中找到了指令，指令的 compile 函数会接受编译时传递的 transclude 函数作为其参数
             *transclude 的值，就是 directive 所在的原始节点，把原始节点重新做了编译之后得到的 link 函数（需要 directive 定义时使用 transclude 选项）
             *
             * @param element 指令所在的元素
             * @param attrs 指令所在元素的所有标准属性对象
             * @param link 即transclude函数，传入scope执行它就得到了一个节点。
             */
            compile: function (element, attrs, link) {
                var node = link($rootScope);

                node.removeAttr('more');
                $('body', $document).append(node);
            },
            transclude: 'element',
            restrict: 'A'
        }
    },
    'showLength': function () {
        return {
            compile: function (element, attrs, link) {
                return function ($scope, $element) {
                    $scope.text='private scope text';

                    var node = link($scope);
                    var lnode = $('<span></span>');

                    $element.append(node);
                    $element.prepend(lnode);

                    $scope.$watch(function (scope) {
                        lnode.text(node.text().length);
                    });
                }
            },
            scope: {},
            transclude: true,
            restrict: 'A'
        }
    }
})