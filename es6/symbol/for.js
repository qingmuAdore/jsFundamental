/********************************************************
Symbol.for方法可以做到这一点。它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的Symbol值。
如果有，就返回这个Symbol值，否则就新建并返回一个以该字符串为名称的Symbol值。
********************************************************/


var sfoo = Symbol('foo');

var sfor = Symbol.for('foo');
var sfor2 = Symbol.for('foo');

console.log(Object.is(sfoo, sfor));
console.log(Object.is(sfor, sfor2));;

/*******************************************
 Symbol.keyFor方法返回一个已登记的 Symbol 类型值的key。
 ****************************/

var s1 = Symbol.for("foo");
console.log(Symbol.keyFor(s1)); // "foo"

var s2 = Symbol("foo");
console.log(Symbol.keyFor(s2)); // undefined