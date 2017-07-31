/********************************************************
Thunk 函数的自动流程管理

Thunk 函数真正的威力，在于可以自动执行 Generator 函数。
下面就是一个基于 Thunk 函数的 Generator 执行器。
********************************************************/

var thunkify = require('thunkify');

/**
 * Thunk 函数的 Generator 执行器
 * 
 * @param {Function} cb 错误回调函数
 * @param {GeneratorFunction} gen 
 * @param {Array} args  gen函数的参数
 */

function run(cb, gen, ...args) {
    var g = gen(...args);
    next();

    function next(err, data) {
        var res = g.next(data);
        if (err || res.done) return cb(err, data);
        res.value(next);
    }
}


//示例
var fs = require('fs');
var readFileThunk = thunkify(fs.readFile);

var gen = function* () {
    console.log('gen:', arguments);
    var r1 = yield readFileThunk(__dirname + '/./data/1.txt');
    console.log(r1.toString());
    var r2 = yield readFileThunk(__dirname + '/./data/2.txt');
    console.log(r2.toString());
};

run(function () {
    console.log(arguments);
}, gen, 1, 2, 3, 4);