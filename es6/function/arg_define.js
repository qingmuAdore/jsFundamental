/*

参数变量是默认声明的，所以不能用let或const再次声明。

*/

function foo(x = 5) {
    let x = 1; // error
    // const x = 2; // error
}