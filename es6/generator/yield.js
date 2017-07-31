/********************************************************
yield* 表达式

如果在 Generator 函数内部，调用另一个 Generator 函数，默认情况下是没有效果的。
需要用到yield*表达式，用来在一个 Generator 函数里面执行另一个 Generator 函数

任何数据结构只要有 Iterator 接口，就可以被yield*遍历。
********************************************************/

function* foo() {
    yield 'a';
    yield "b";
    yield "c";
}

function* bar() {
    yield 'x';
    foo();
    yield 'y';
}

for (let res of bar()) {
    console.log(res);   // x y
}

function* barz() {
    yield 'x';
    yield* foo();
    // 等同于
    // for (let v of foo()) {
    //     yield v;
    // }
    yield 'y';
}

var len = 1;
for (let res of barz()) {
    console.log(len++, res);
}
/*  遍历5次  
1 'x'
2 'a'
3 'b'
4 'c'
5 'y'
*/

//从语法角度看，如果yield表达式后面跟的是一个遍历器对象，
//需要在yield表达式后面加上星号，表明它返回的是一个遍历器对象。这被称为yield*表达式
let delegatedIterator = (function* () {
  yield 'Hello!';
  yield 'Bye!';
}());

let delegatingIterator = (function* () {
  yield 'Greetings!';
  yield* delegatedIterator;
  yield 'Ok, bye.';
}());

for(let value of delegatingIterator) {
  console.log(value);
}
// "Greetings!
// "Hello!"
// "Bye!"
// "Ok, bye."

//任何数据结构只要有 Iterator 接口，就可以被yield*遍历。
let read = (function* () {
    yield 'hello';
    yield* 'hello';
})();

read.next().value // "hello"
read.next().value // "h"

//如果被代理的 Generator 函数有return语句，那么就可以向代理它的 Generator 函数返回数据。
function *foo2() {
  yield 2;
  yield 3;
  return "foo";
}

function *bar2() {
  yield 1;
  var v = yield *foo2();
  console.log( "v: " + v );
  yield 4;
}

var it = bar2();
it.next()
// {value: 1, done: false}
it.next()
// {value: 2, done: false}
it.next()
// {value: 3, done: false}
it.next();
// "v: foo"
// {value: 4, done: false}
it.next()
// {value: undefined, done: true}