/********************************************************
扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，
将一个数组转为用逗号分隔的参数序列。
********************************************************/

console.log(...[1, 2, 3]);// 1 2 3
console.log(1, ...[2, 3, 4], 5);// 1 2 3 4 5

//该运算符主要用于函数调用
function push(array, ...items) {
    array.push(...items);
}

function add(x, y) {
    return x + y;
}

var numbers = [4, 38];
add(...numbers) // 42

//是通过push函数，将一个数组添加到另一个数组的尾部
// ES5的 写法
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
Array.prototype.push.apply(arr1, arr2);

// ES6 的写法
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2);