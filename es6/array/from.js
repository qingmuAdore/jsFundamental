/********************************************************
Array.from方法用于将两类对象转为真正的数组：
1. 类似数组的对象（array-like object）,所谓类似数组的对象，本质特征只有一点，即必须有length属性。
2. 可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）。扩展运算符背后调用的是遍历器接口（Symbol.iterator）
********************************************************/

// 下面是一个类似数组的对象，Array.from将它转为真正的数组。

let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
console.log(arr1);

// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
console.log(arr2);

// 常见的类似数组的对象是DOM操作返回的NodeList集合，以及函数内部的arguments对象。Array.from都可以将它们转为真正的数组。
// NodeList对象
// let ps = document.querySelectorAll('p');
// Array.from(ps).forEach(function (p) {
//   console.log(p);
// });

// arguments对象
function foo() {
    var args = Array.from(arguments);
    // ...
}

// 只要是部署了Iterator接口的数据结构，Array.from都能将其转为数组。
Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']

let namesSet = new Set(['a', 'b']);
Array.from(namesSet) // ['a', 'b']

Array.from({ length: 3 });// [ undefined, undefined, undefined ]

// 对于还没有部署该方法的浏览器，可以用Array.prototype.slice方法替代。
const toArray = (() =>
    Array.from ? Array.from : obj => [].slice.call(obj)
)();


// Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。
// Array.from(arrayLike, x => x * x);
// // 等同于
// Array.from(arrayLike).map(x => x * x);
Array.from([1, 2, 3], (x) => x * x);// [1, 4, 9]
var arrLike = {
    0: 'pauly',
    1: 'adore',
    2: 'pzhang',
    length: 3
};
var result = Array.from(arrLike, (v, k) => k + '_' + v); //[ '0_pauly', '1_adore', '2_pzhang' ]

// 下面的例子将数组中布尔值为false的成员转为0。
Array.from([1, , 2, , 3], (n) => n || 0)
// [1, 0, 2, 0, 3]

function typesOf() {
    return Array.from(arguments, value => typeof value)
}
typesOf(null, [], NaN);
// ['object', 'object', 'number']