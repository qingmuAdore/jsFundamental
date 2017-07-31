/********************************************************
通常情况下，定义了默认值的参数，应该是函数的尾参数。因为这样比较容易看出来，
到底省略了哪些参数。如果非尾部的参数设置默认值，实际上这个参数是没法省略的。
********************************************************/

//上面代码中，有默认值的参数都不是尾参数。这时，无法只省略该参数，
// 而不省略它后面的参数，除非显式输入undefined。
// 例一
function f(x = 1, y) {
    return [x, y];
}

f1() // [1, undefined]
f1(2) // [2, undefined])
f1(, 1) // 报错
f1(undefined, 1) // [1, 1]

// 例二
function f(x, y = 5, z) {
    return [x, y, z];
}

f1() // [undefined, 5, undefined]
f1(1) // [1, 5, undefined]
f1(1, , 2) // 报错
f1(1, undefined, 2) // [1, 5, 2]

//如果传入undefined，将触发该参数等于默认值，null则没有这个效果

function foo(x = 5, y = 6) {
    console.log(x, y);
}

foo(undefined, null);// 5 null