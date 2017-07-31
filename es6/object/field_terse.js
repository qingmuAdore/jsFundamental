/********************************************************
 * 属性的简洁表示法
 * 
ES6 允许直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁

ES6 允许在对象之中，直接写变量。这时，属性名为变量名, 属性值为变量的值
********************************************************/
var foo = 'bar';
var baz = { foo };  // 故而理解为 {name:value}
baz // {foo: "bar"}
// 等同于
var baz = { foo: foo }; // 

function f(x, y) {
    return { x, y };
}
// 等同于
function f(x, y) {
    return { x: x, y: y };
}

f(1, 2); // Object {x: 1, y: 2}

//除了属性简写，方法也可以简写
var o = {
    method() {
        return "Hello!";
    }
};
// 等同于
var o = {
    method: function () {
        return "Hello!";
    }
};

//实例
var birth = '2000/01/01';
var Person = {
    name: '张三',

    //等同于birth: birth
    birth,

    // 等同于hello: function ()...
    hello() { console.log('我的名字是', this.name); }
};