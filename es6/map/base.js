/********************************************************
Map
 
JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。
这给它的使用带来了很大的限制。

ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，
各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，
Map结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，
Map 比 Object 更合适。
********************************************************/

//key 是对象
const m = new Map();
const o = { p: 'Hello World' };

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false

//接受数组参数
var map = new Map([
    ['name', '张三'],
    ['title', 'Author']
]);

map.size // 2
map.has('name') // true
map.get('name') // "张三"
map.has('title') // true
map.get('title') // "Author"


// Map构造函数接受数组作为参数，实际上执行的是下面的算法。
const items = [
    ['name', '张三'],
    ['title', 'Author']
];
var p = new Map();
items.forEach(
    ([key, value]) => p.set(key, value)
);
console.log(p);

// /不仅仅是数组，任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构
// （详见《Iterator》一章）都可以当作Map构造函数的参数。
// 这就是说，Set和Map都可以用来生成新的 Map
var set = new Set([
    ["foo", 1],
    ["bar", 2],
    ["tar", 3]
]);
var sp = new Map(set);
console.log(sp);

//注意，只有对同一个对象的引用，Map 结构才将其视为同一个键。这一点要非常小心。
var map = new Map();

map.set(['a'], 555);
map.get(['a']) // undefined