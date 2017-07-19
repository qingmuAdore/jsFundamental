/**
 * ES6 浏览器环境,
    1. 允许在块级作用域内声明函数。
    2. 函数声明类似于var，即会提升到全局作用域或函数作用域的头部。
    3. 同时，函数声明还会提升到所在的块级作用域的头部。
 * 
 */

// function f() { console.log('I am outside!'); }
// (function () {
//     if (false) {
//         // 重复声明一次函数f
//         function f() { console.log('I am inside!'); }
//     }
//     f(); //Uncaught TypeError: f is not a function
// }());

//代码等价于
/*
function f() { console.log('I am outside!'); }
(function () {
    var f = undefined;
    if (false) {
        function f() { console.log('I am inside!'); }
    }
    f();
}());
*/

//变种
(function () {
    // function f() { console.log(1) };// 这句有没有都不影响结果
    f(); // 输出2 
    function f() { console.log(2) };
}());

//代码等价于
/*
(function () {
    function f() { console.log(2) };
    f(); // 输出2 
}());
*/