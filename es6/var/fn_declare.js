/**
 *  ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。ES6 规定，
 * 块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用.
 * 
 * 如下示例: f() 调用,其中f的声明有两处,显然在 if模块中的声明,在作用域外不可引用,
 *          故而 f实际值即为第一个声明
 */
function f() { console.log('I am outside!'); }

(function () {
  if (false) {  
    // // 重复声明一次函数f (由于nodejs 中运行,使用v8 js引擎,即es6 浏览器环境,没法模拟,为体现结果,采用如下方式)
    // function f() { console.log('I am inside!'); }
    // 重复声明一次函数f
    let f = function () { console.log('I am inside!'); }
  }

  f(); // I am outside
}());

