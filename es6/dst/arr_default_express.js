/********************************************************
如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值
********************************************************/

//以下代码中，因为x能取到值，所以函数f根本不会执行。
function f() {
    console.log('aaa');
}

let [x = f()] = [1]; // f 未调用
console.log(x);//1

//代码等价于
/*
let x;
if ([1][0] === undefined) {
  x = f();
} else {
  x = [1][0];
}
*/


let [y = f()] = []; // f 调用
console.log(y);// undefined