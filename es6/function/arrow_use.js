//箭头函数可以与变量解构结合使用
var full = ({ first, last }) => first + ' ' + last;
var full = function (person) {
    return person.first + ' ' + person.last;
}

// 箭头函数使得表达更加简洁。
const isEven = n => n % 2 == 0;
const square = n => n * n;


// 箭头函数的一个用处是简化回调函数。

// 正常函数写法
[1, 2, 3].map(function (x) {
    return x * x;
});

// 箭头函数写法
[1, 2, 3].map(x => x * x);

// 正常函数写法
var values = [11, 21, 2, 9];
var result = values.sort(function (a, b) {
    return a - b;
});

// 箭头函数写法
var result = values.sort((a, b) => a - b);

//rest 参数与箭头函数结合的例子
const numbers = (...nums) => nums;
numbers(1, 2, 3, 4, 5); // [1,2,3,4,5]

const headAndTail = (head, ...tail) => [head, tail];
headAndTail(1, 2, 3, 4, 5); // [1,[2,3,4,5]]


//箭头函数还有一个功能，就是可以很方便地改写λ演算

// λ演算的写法
//fix = λf.(λx.f(λv.x(x)(v)))(λx.f(λv.x(x)(v)))

// ES6的写法
var fix = f => (x => f(v => x(x)(v)))
    (x => f(v => x(x)(v)));