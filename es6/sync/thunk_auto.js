/********************************************************
Thunk 函数的自动流程管理

Thunk 函数真正的威力，在于可以自动执行 Generator 函数。
下面就是一个基于 Thunk 函数的 Generator 执行器。
********************************************************/

// 执行示例
var fs = require('fs');
var assert = require('assert');
var readFileThunk = thunkify(fs.readFile);

/**
 * thunkify  Thunk函数
 * 
 * 将函数转化为只接受回调函数作为参数的单参数函数
 * 
 * @param {Function} fn 函数最后一个参数必须是函数
 */
function thunkify(fn) {
    return function (...args) {
        var ctx = this;
     
        return function (cb) {
            assert('function' === typeof cb, 'the param must be function');
            var called = false;

            var done = function () {
                if (called) return;
                called = true;
                cb.apply(null, arguments);
            }

            try {
                fn.call(ctx, ...args, done);
            } catch (e) {
                done(e);
            }
        }
    }

}



var gen = function* () {
    var r1 = yield readFileThunk(__dirname + '/./data/1.txt');
    console.log(r1.toString());
    var r2 = yield readFileThunk(__dirname + '/./data/2.txt');
    console.log(r2.toString());
};


var g = gen();
var r1 = g.next();  // {value: 执行}
r1.value(function (err, data) {
    if (err) throw err;
    var r2 = g.next(data);
    r2.value(function (err, data) {
        if (err) throw err;
        g.next(data);
    });
});
