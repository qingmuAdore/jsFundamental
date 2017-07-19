/********************************************************
本质

对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。
真正被赋值的是后者，而不是前者。
********************************************************/

//如果变量名与属性名不一致，必须写成下面这样
//对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者
//foo是匹配的模式，baz才是变量。真正被赋值的是变量baz，而不是模式foo
var { foo: baz } = { foo: 'aaa', bar: 'bbb' };
console.log(baz); //aaa
//console.log(foo); //ReferenceError: foo is not defined

let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
console.log(f, l); // hello world

// 对象的解构赋值是下面形式的简写（参见《对象的扩展》一章）。
let { a, b } = { a: 'aaa', b: 'bbb' }; // let {a:a,b:b}={a:'aaa',b:'bbb'};
