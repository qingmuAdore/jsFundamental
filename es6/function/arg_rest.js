/********************************************************
rest 参数

ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。
rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
********************************************************/

//以下代码的add函数是一个求和函数，利用 rest 参数，可以向该函数传入任意数目的参数
function add(...values) {
    let sum = 0;
    for (var val of values) {
        sum += val;
    }
    return sum;
}
add(2, 5, 3); // 10

//rest 参数代替arguments变量

// arguments变量的写法
function sortNumbers() {
    return Array.prototype.slice.call(arguments).sort();
}

// rest参数的写法
const sortNumbers1 = (...numbers) => numbers.sort();

//rest 参数中的变量代表一个数组，所以数组特有的方法都可以用于这个变量。
//利用 rest 参数改写数组push方法
function push(array, ...items) {
    items.forEach(function (item) {
        array.push(item);
        console.log(item);
    });
}

var a = [];
push(a, 1, 2, 3);

/*******************************注意********************************/
// 报错 SyntaxError: Rest parameter must be last formal parameter
// function f(a, ...b, c) { 
//     // ...
// }