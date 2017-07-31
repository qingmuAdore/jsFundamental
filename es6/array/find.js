/********************************************************
数组实例的 find() 和 findIndex() 

数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，
所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。
如果没有符合条件的成员，则返回undefined。
********************************************************/

//第一位 小于0的元素
var res = [1, 4, -5, 10].find((v) => v < 0);
console.log(res);

//find方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。
res.find(function (value, index, arr) {
    return value > 9;
});
console.log(res); //10


//数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
res.findIndex(function (value, index, arr) {
    return value > 9;
});
console.log(res); // 2

// 另外，这两个方法都可以发现NaN，弥补了数组的IndexOf方法的不足。
[NaN].indexOf(NaN);// -1

//indexOf方法无法识别数组的NaN成员，但是findIndex方法可以借助Object.is方法做到。
[NaN].findIndex(y => Object.is(NaN, y));// 0