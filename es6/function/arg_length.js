/********************************************************
指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。
也就是说，指定了默认值后，length属性将失真
********************************************************/

//某个参数指定默认值以后，预期传入的参数个数就不包括这个参数了
console.log((function (a) { }).length); // 1
console.log((function (a = 5) { }).length);// 0
console.log((function (a, b, c = 5) { }).length);// 2

//rest 参数也不会计入length属性。
console.log((function (...args) { }).length);// 0

//如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了
console.log((function (a = 0, b, c) { }).length); // 0
console.log((function (a, b = 1, c) { }).length); // 1