/********************************************************
严格模式

从 ES5 开始，函数内部可以设定为严格模式
ES2016 做了一点修改，规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，
那么函数内部就不能显式设定为严格模式，否则会报错

这样规定的原因是，函数内部的严格模式，同时适用于函数体和函数参数。
但是，函数执行的时候，先执行函数参数，然后再执行函数体。这样就有一个不合理的地方，
只有从函数体之中，才能知道参数是否应该以严格模式执行，但是参数却应该先于函数体执行。
********************************************************/

function doSomething(a, b) {
    'use strict';
    // code
}

// 报错
function doSomething(a, b = a) {
    'use strict';
    // code
}

// 报错
function doSomething({ a, b }) {
    'use strict';
    // code
};

// 报错
var doSomething1 = (...a) => {
    'use strict';
    // code
};

const obj = {
    // 报错
    doSomething({ a, b }) {
        'use strict';
        // code
    }
};




// 参数value的默认值是八进制数070，但是严格模式下不能用前缀0表示八进制，所以应该报错。
// 但是实际上，JavaScript 引擎会先成功执行value = 070，然后进入函数体内部，发现需要用严格模式执行，
// 这时才会报错。虽然可以先解析函数体代码，再执行参数代码，但是这样无疑就增加了复杂性。
// 因此，标准索性禁止了这种用法，只要参数使用了默认值、解构赋值、或者扩展运算符，就不能显式指定严格模式。
function doSomething(value = 070) {
    'use strict';
    return value;
}


//两种方法可以规避这种限制。
// 第一种是设定全局性的严格模式，这是合法的

// 'use strict';
// function doSomething(a, b = a) {
//   // code
// }

//第二种是把函数包在一个无参数的立即执行函数里面。
// const doSomething = (function () {
//   'use strict';
//   return function(value = 42) {
//     return value;
//   };
// }());