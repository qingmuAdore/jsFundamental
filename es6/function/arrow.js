/********************************************************
箭头函数

1. ES6 允许使用“箭头”（=>）定义函数
2. 如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分
3. 如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回
4. 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号
5. 箭头函数可以与变量解构结合使用
********************************************************/

// 二者等价
var f = v => v;
var f = function (v) {
    return v;
};

//如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分
var f = () => 5;
var f = function () { return 5 };

var sum = (num1, num2) => num1 + num2;
var sum = function (num1, num2) {
    return num1 + num2;
};

//如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回
var sum = (num1, num2) => { return num1 + num2; }

//由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号
var getTempItem = id => ({ id: id, name: "Temp" });

//箭头函数可以与变量解构结合使用
var full = ({ first, last }) => first + ' ' + last;
var full = function (person) {
    return person.first + ' ' + person.last;
}