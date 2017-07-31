/********************************************************
基本用法

ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值
********************************************************/

const s = new Set();
[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
for (let i of s) { //2 3 5 4
    console.log(i);
}

//Set 函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化

// 例一
var set = new Set([1, 2, 3, 4, 4]);
console.log(set); //Set { 1, 2, 3, 4 }

// 例二
const items = new Set('hello');
console.log(items); //Set { 'h', 'e', 'l', 'o' }


/*
WeakSet § ⇧
WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。
首先，WeakSet 的成员只能是对象，而不能是其他类型的值。
*/

var ws = new WeakSet();
ws.add(1)
// TypeError: Invalid value used in weak set
ws.add(Symbol())

const a = [[1, 2], [3, 4]];
var ws = new WeakSet(a);
// WeakSet {[1, 2], [3, 4]}

const b = [3, 4];
var ws = new WeakSet(b);
// Uncaught TypeError: Invalid value used in weak set(…)