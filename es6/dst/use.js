/********************************************************
用途
********************************************************/

//（1）交换变量的值
let x = 1;
let y = 2;

[x, y] = [y, x];
console.log(x, y); // 2 1

//（2）从函数返回多个值

// 返回一个数组
function returnArr() {
    return [1, 2, 3];
}
let [a, b, c] = returnArr();
console.log(a, b, c); //1 2 3

// 返回一个对象
function returnObj() {
    return {
        foo: 1,
        bar: 2
    };
}
let { foo, bar } = returnObj();
console.log(foo, bar); // 1 2

// （3）函数参数的定义
//解构赋值可以方便地将一组参数与变量名对应起来。

// 参数是一组有次序的值
function fOrder([x, y, z]) { console.log(x, y, z); } // 1,2,3
fOrder([1, 2, 3]);

// 参数是一组无次序的值
function fUnorder({ x, y, z }) { console.log(x, y, z); } // 1,2,3
fUnorder({ z: 3, y: 2, x: 1 });

//（4）提取JSON数据
// 解构赋值对提取JSON对象中的数据，尤其有用。
let jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
};
let { id, status, data: number } = jsonData;
console.log(id, status, number);// 42, "OK", [867, 5309]

// （5）函数参数的默认值
function fn({x = 3, y}={}) { console.log(x, y); } // 3 undefined
fn();

//（6）遍历Map结构
//任何部署了Iterator接口的对象，都可以用for...of循环遍历。
//Map结构原生支持Iterator接口，配合变量的解构赋值，获取键名和键值就非常方便
var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}
// first is hello 
// second is world

// 获取键名
for (let [key] of map) {
  console.log(key);  
}
// first
// second

// 获取键值
for (let [,value] of map) {
  console.log(value);
}
// hello
// world

//（7）输入模块的指定方法
// 加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰
const { SourceMapConsumer, SourceNode } = require("source-map");