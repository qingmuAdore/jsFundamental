/********************************************************
作用域

一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）。
等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的
********************************************************/

// 参数y的默认值等于变量x。调用函数f时，参数形成一个单独的作用域。
// 在这个作用域里面，默认值变量x指向第一个参数x，而不是全局变量x，所以输出是2
/* 形如:
let x = 2;
let y = x;
*/
var x = 1;
function f(x, y = x) {
    console.log(y);
}
f(2); // 2

//函数f调用时，参数y = x形成一个单独的作用域。
//这个作用域里面，变量x本身没有定义，所以指向外层的全局变量x。
//函数调用时，函数体内部的局部变量x影响不到默认值变量x。
//如果此时，全局变量x不存在，就会报错
/* 形如:
let y = x;
*/
var x = 1;
function f1(y = x) {
    let x = 2;
    console.log(y);
}
f1() // 1

//参数x = x形成一个单独作用域。实际执行的是let x = x，由于暂时性死区的原因，这行代码会报错”x 未定义“
// var x = 1;
// function foo(x = x) {
// }
// foo() // ReferenceError: x is not defined

//如果参数的默认值是一个函数，该函数的作用域也遵守这个规则。
//函数bar的参数func的默认值是一个匿名函数，返回值为变量foo。
//函数参数形成的单独作用域里面，并没有定义变量foo，所以foo指向外层的全局变量foo，因此输出outer
let foo = 'outer';
function bar(func = x => foo) {
    let foo = 'inner';
    console.log(func());
}
bar(); // outer

// //如果写成下面这样，就会报错。
// function bar(func = () => foo) {
//   let foo = 'inner';
//   console.log(func());
// }
// bar() // ReferenceError: foo is not defined


// 函数foo的参数形成一个单独作用域。这个作用域里面，首先声明了变量x，
// 然后声明了变量y，y的默认值是一个匿名函数。这个匿名函数内部的变量x，
// 指向同一个作用域的第一个参数x。函数foo内部又声明了一个内部变量x，
// 该变量与第一个参数x由于不是同一个作用域，所以不是同一个变量，因此执行y后，
// 内部变量x和外部全局变量x的值都没变
var x = 1;
function fo1(x, y = function () { x = 2; }) {
    var x = 3;  // x 作用域 与 y()中所含x 不一致
    y();
    console.log(x);  //3
}
fo1();

//函数foo的内部变量x就指向第一个参数x，与匿名函数内部的x是一致的，
//所以最后输出的就是2，而外层的全局变量x依然不受影响
var x = 1;
function foo2(x, y = function () { x = 2; }) {
    x = 3;  //  x作用域同 y()中所含x一致
    y();
    console.log(x); //2
}
foo2();