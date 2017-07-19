/*
参数默认值可以与解构赋值的默认值，结合起来使用。

*/
function foo({ x, y = 5 }) {
    console.log(x, y);
}

foo({}) // undefined, 5
foo({ x: 1 }) // 1, 5
foo({ x: 1, y: 2 }) // 1, 2
foo([]); // undefined, 5   [] 即为 {lenght:0}

/*以下提示 

无法与'undefined'或'null'匹配
 TypeError: Cannot match against 'undefined' or 'null'.

显然以下表达式,无法匹配
let {x, y = 5} = null 
let {x, y = 5} = undefined
*/
foo(null);
foo(); 