/********************************************************
遍历方法 

Map 结构原生提供三个遍历器生成函数和一个遍历方法。
- keys()：返回键名的遍历器。
- values()：返回键值的遍历器。
- entries()：返回所有成员的遍历器。
- forEach()：遍历 Map 的所有成员。
********************************************************/

var map = new Map([
    ["ON", 'open'],
    ["OFF", 'close']
]);

for (let key of map.keys()) {
    console.log(key);
}

for (let value of map.values()) {
    console.log(value);
}

for (let [key, value] of map.entries()) {
    console.log('entries', key, value);
}

for (let [key, value] of map) {
    console.log('for', key, value);
}

map.forEach(function (value, key) {
    console.log('map', key, value);
})
