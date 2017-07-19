/********************************************************
这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。

如果解构不成功，变量的值就等于undefined。
********************************************************/
var [a, b, c] = [1, 2, 3];
console.log(a); //1



//下面是一些使用嵌套数组进行解构的例子

let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo, bar, baz); //1 2 3

let [, , third] = ["foo", "bar", "baz"];
console.log(third);//baz

let [x, , y] = [1, 2, 3];
console.log(x, y); // 1 3

let [head, ...tail] = [1, 2, 3, 4];
console.log(head, tail); // 1 [2,3,4]

let [u, v, ...w] = ['a'];
console.log(w, v, w);// a ,undefined,[]