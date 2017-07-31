/********************************************************
使用注意点

（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

（4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
********************************************************/

// this指向的固定化，并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，
//导致内部的this就是外层代码块的this。正是因为它没有this，所以也就不能用作构造函数


function foo() {
    console.log('foo', this.id); // foo 32

    setTimeout(() => {
        console.log('setTimeout arrow:', this.id); // setTimeout arrow: 32
    }, 100);

    setTimeout(function () {
        console.log('setTimeout normal:', this.id); // setTimeout normal: undefined
    }, 100);
}

foo.call({ id: 32 });

//箭头函数转成 ES5 的代码如下

// // ES6
// function foo() {
//     setTimeout(() => {
//         console.log('id:', this.id);
//     }, 100);
// }

// // ES5
// function foo() {
//     var _this = this;

//     setTimeout(function () {
//         console.log('id:', _this.id);
//     }, 100);
// }


//代码之中，只有一个this，就是函数foo的this，所以t1、t2、t3都输出同样的结果。
// 因为所有的内层函数都是箭头函数，都没有自己的this，它们的this其实都是最外层foo函数的this
function mf() {
    return () => {
        return () => {
            return () => {
                console.log('id:', this.id);
            };
        };
    };
}

var f = mf.call({ id: 1 });

var t1 = f.call({ id: 2 })()(); // id: 1
var t2 = f().call({ id: 3 })(); // id: 1
var t3 = f()().call({ id: 4 }); // id: 1

//除了this，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：arguments、super、new.target
function fArgs() {
    setTimeout(() => {
        console.log('args:', arguments);
    }, 100);
}

fArgs(2, 4, 6, 8); // args: [2, 4, 6, 8]


//另外，由于箭头函数没有自己的this，所以当然也就不能用call()、apply()、bind()这些方法去改变this的指向
(function () {
    return [
        (() => this.x).bind({ x: 'inner' })()  
    ];
}).call({ x: 'outer' }); //['outer']