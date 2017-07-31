/********************************************************
Object.assign方法用于对象的合并

将源对象（source）的所有可枚举属性，复制到目标对象（target）。方法的第一个参数是目标对象，后面的参数都是源对象
********************************************************/

var target = { a: 1, b: 1 };

var source1 = { b: 2, c: 2 };
var source2 = { c: 3 };

Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}

