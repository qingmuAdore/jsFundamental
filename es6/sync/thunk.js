// ES6版本
const Thunk = function (fn) {
    return function (...args) {
        return function (callback) {
            return fn.call(this, ...args, callback);
        }
    };
};

function f(a, cb) {
    cb(a);
}

const ft = Thunk(f);

ft(1)(console.log) // 1

Thunk(f)(2)(console.log);

/**
 * 将多参数函数转化为只接受参数为回调函数的函数
 * 
 * @param {Function} fn 最后一个参数是回调函数
 */
function thunkify(fn) {
    return function (...args) {
        var ctx = this;

        return function (cb) {
            var called;

            var done = function () {
                if (called) return;
                called = true;
                cb.apply(null, arguments);
            }

            try {
                fn.call(ctx, ...args, done);
            } catch (err) {
                done(err);
            }
        }
    }
};

function add(a, b, callback) {
    var sum = a + b;
    callback(sum);
    callback(sum);
}

function show(cb) {
    cb('show');
}

var gAdd = thunkify(add); // 返回一个函数
var print = console.log.bind(console);
gAdd(1, 2)(print);

thunkify(show)()(print);