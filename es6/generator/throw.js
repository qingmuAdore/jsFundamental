/********************************************************
Generator.prototype.throw()

Generator 函数返回的遍历器对象，都有一个throw方法，可以在函数体外抛出错误，然后在 Generator 函数体内捕获。
********************************************************/

var g = function* () {
    try {
        yield 'run';
    } catch (e) {
        console.log(`出错了:${e.message}`);
    }
};

var i = g();
console.log(i.next());

/*
遍历器对象i连续抛出两个错误。第一个错误被 Generator 函数体内的catch语句捕获。
i第二次抛出错误，由于 Generator 函数内部的catch语句已经执行过了，不会再捕捉到这个错误了，
所以这个错误就被抛出了 Generator 函数体，被函数体外的catch语句捕获
*/

try {
    i.throw(new Error('throw error'));
    i.throw('b');
} catch (error) {
    console.log(error);
}

