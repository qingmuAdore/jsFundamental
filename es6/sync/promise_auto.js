function getFoo(msg = 'Done') {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, 1000, 'Time:' + msg);
    });
}

function getFooReject(msg = 'Done') {
    return new Promise(function (resolve, reject) {
        setTimeout(reject, 1000, 'Time:' + msg);
    });
}

function* genFoo() {
    console.log('genFoo:',arguments);
    var r1 = yield getFoo(new Date().toLocaleString());
    var r2 = yield getFoo(new Date().toLocaleString());
    var r3 = yield getFoo(new Date().toLocaleString());
    var r4 = yield getFooReject(new Date().toLocaleString());
    console.log(r1);
    console.log(r2);
    console.log(r3);
    console.log(r4);
}

/**
 * Promise 函数的 Generator 执行器
 * 
 * @param {Function} cb 
 * @param {GeneratorFunction} gen 
 * @param {Array} args gen函数的参数列表
 */
function run(cb,gen,...args) {
    var g = gen(...args);

    resolve();

    function resolve(value) {
        resolveAndReject(value, null);
    }

    function reject(reason) {
        resolveAndReject(null, reason);
    }

    function resolveAndReject(value, reason) {
        try {
            var res = g.next({ value, reason }); //可能yield 后面表达式出错
            next(res);  // promise执行可能出错 
        } catch (error) {
            cb(error);
        } 
    }

    function next(res) {
        if (res.done) return cb();
        res.value.then(resolve, reject);
    }
}

run(function () {
    console.log(arguments);
}, genFoo, 1, 2, 3, 4);