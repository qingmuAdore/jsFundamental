/********************************************************
Generator 函数的this

Generator 函数总是返回一个遍历器，ES6 规定这个遍历器是 Generator 函数的实例，
也继承了 Generator 函数的prototype对象上的方法。

注意:
- 如果把g当作普通的构造函数，并不会生效，因为g返回的总是遍历器对象，而不是this对象
- Generator函数也不能跟new命令一起用，会报错
********************************************************/

function* g() {
    this.a = 11;
}

g.prototype.hello = function () { console.log('hi'); }

var o = g();  // o 是 Generator的实例, hello是Generator.prototype对象上的方法
o.hello(); //可以调用

//如果把g当作普通的构造函数，并不会生效，因为g返回的总是遍历器对象，而不是this对象
console.log(o.a);// undefined


//new命令跟构造函数F一起使用，结果报错，因为g不是构造函数
// new g(); //TypeError: g is not a constructor

//如何将两对象统一  Generator 与 this
function* gen() {
    this.a = 1;
    yield this.b = 2;
    yield this.c = 3;
}

function F() {
    //使用call方法绑定 Generator 函数内部的this
    return gen.call(gen.prototype);
}

var f =  F();
// var f = new F();

console.log(f.next());  // Object {value: 2, done: false}
console.log(f.next());  // Object {value: 3, done: false}
console.log(f.next());  // Object {value: undefined, done: true}

console.log(f.a); // 1
console.log(f.b); // 2
console.log(f.c); // 3
