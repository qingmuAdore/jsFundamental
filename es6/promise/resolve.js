/********************************************************
将现有对象转为Promise对象

形如: 
var p = Promise.resolve(arg);

（1）参数是一个Promise实例
如果参数是Promise实例，那么Promise.resolve将不做任何修改、原封不动地返回这个实例。

（2）参数是一个thenable对象
thenable对象指的是具有then方法的对象.
Promise.resolve方法会将这个对象转为Promise对象，然后就立即执行thenable对象的then方法。

（3）参数不是具有then方法的对象，或根本就不是对象
如果参数是一个原始值，或者是一个不具有then方法的对象，则Promise.resolve方法返回一个新的Promise对象，状态为Resolved。

（4）不带有任何参数
Promise.resolve方法允许调用时不带参数，直接返回一个Resolved状态的Promise对象。
********************************************************/

let thenable = {
    then: function (resolve, reject) {
        resolve(42);
    }
};

let p1 = Promise.resolve(thenable);
p1.then(function (value) {
    console.log(value);  // 42
});



// 需要注意的是，立即resolve的Promise对象，是在本轮“事件循环”（event loop）的结束时，而不是在下一轮“事件循环”的开始时。

setTimeout(function () {
    console.log('three');
}, 0);

Promise.resolve().then(function () {
    console.log('two');
});

console.log('one');

// one
// two
// three